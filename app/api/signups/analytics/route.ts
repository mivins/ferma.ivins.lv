import { NextRequest, NextResponse } from 'next/server';
import { db, signups } from '@/lib/postgres';
import { requireApiKey } from '@/lib/auth';
import { count, gte, lte, and, sql, SQL } from 'drizzle-orm';
import { parseRelativeTime } from '@/lib/time-utils';

/**
 * GET /api/signups/analytics
 * Returns analytical breakdown of signups over time
 */
export async function GET(request: NextRequest) {
    // Check authentication
    const authError = requireApiKey(request);
    if (authError) return authError;

    try {
        const { searchParams } = new URL(request.url);

        const groupBy = (searchParams.get('groupBy') || 'day') as 'hour' | 'day' | 'week';
        const since = searchParams.get('since') || '30d';
        const until = searchParams.get('until') || undefined;

        // Validate groupBy parameter
        if (!['hour', 'day', 'week'].includes(groupBy)) {
            return NextResponse.json(
                { error: 'Invalid groupBy parameter. Must be "hour", "day", or "week"' },
                { status: 400 }
            );
        }

        // Build conditions
        const conditions: SQL[] = [];

        if (since) {
            try {
                const sinceDate = /^\d+[hdw]$/.test(since)
                    ? parseRelativeTime(since)
                    : new Date(since);
                conditions.push(gte(signups.createdAt, sinceDate));
            } catch (e) {
                console.error('Error parsing since:', e);
            }
        }

        if (until) {
            try {
                conditions.push(lte(signups.createdAt, new Date(until)));
            } catch (e) {
                console.error('Error parsing until:', e);
            }
        }

        const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

        // Get summary statistics
        const summaryResult = await db.select({
            total: count(),
            betaInterested: sql<number>`SUM(CASE WHEN is_beta THEN 1 ELSE 0 END)::int`,
            helpers: sql<number>`SUM(CASE WHEN is_helper THEN 1 ELSE 0 END)::int`,
            sponsors: sql<number>`SUM(CASE WHEN is_sponsor THEN 1 ELSE 0 END)::int`,
        })
            .from(signups)
            .where(whereClause);

        const summary = {
            total: summaryResult[0]?.total || 0,
            betaInterested: summaryResult[0]?.betaInterested || 0,
            helpers: summaryResult[0]?.helpers || 0,
            sponsors: summaryResult[0]?.sponsors || 0,
        };

        // Get timeline based on groupBy
        let dateFormat: string;
        switch (groupBy) {
            case 'hour':
                dateFormat = 'YYYY-MM-DD HH24:00';
                break;
            case 'week':
                dateFormat = 'IYYY-IW';
                break;
            default:
                dateFormat = 'YYYY-MM-DD';
        }

        // Build WHERE clause for timeline
        let timelineWhereClause;
        if (conditions.length === 2) {
            const sinceDate = /^\d+[hdw]$/.test(since!)
                ? parseRelativeTime(since!)
                : new Date(since!);
            const untilDate = new Date(until!);
            timelineWhereClause = sql`WHERE created_at >= ${sinceDate} AND created_at <= ${untilDate}`;
        } else if (since) {
            const sinceDate = /^\d+[hdw]$/.test(since)
                ? parseRelativeTime(since)
                : new Date(since);
            timelineWhereClause = sql`WHERE created_at >= ${sinceDate}`;
        } else if (until) {
            timelineWhereClause = sql`WHERE created_at <= ${new Date(until)}`;
        } else {
            timelineWhereClause = sql``;
        }

        const timelineResult = await db.execute(sql`
            SELECT
                TO_CHAR(created_at, ${dateFormat}) as period,
                COUNT(*)::int as count,
                SUM(CASE WHEN is_beta THEN 1 ELSE 0 END)::int as beta,
                SUM(CASE WHEN is_helper THEN 1 ELSE 0 END)::int as helpers,
                SUM(CASE WHEN is_sponsor THEN 1 ELSE 0 END)::int as sponsors
            FROM signups
            ${timelineWhereClause}
            GROUP BY period
            ORDER BY period ASC
        `);

        const timeline = (timelineResult.rows as any[]).map(row => ({
            period: row.period,
            count: row.count,
            beta: row.beta,
            helpers: row.helpers,
            sponsors: row.sponsors
        }));

        return NextResponse.json({
            summary,
            timeline,
            groupBy,
            filter: {
                since,
                ...(until && { until })
            }
        });
    } catch (error) {
        console.error('Signups analytics error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
