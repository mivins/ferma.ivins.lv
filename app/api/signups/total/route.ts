import { NextRequest, NextResponse } from 'next/server';
import { db, signups } from '@/lib/postgres';
import { requireApiKey } from '@/lib/auth';
import { count, gte, lte, and, SQL } from 'drizzle-orm';
import { parseRelativeTime } from '@/lib/time-utils';

/**
 * GET /api/signups/total
 * Returns the total count of signups with optional time filtering
 */
export async function GET(request: NextRequest) {
    // Check authentication
    const authError = requireApiKey(request);
    if (authError) return authError;

    try {
        const { searchParams } = new URL(request.url);
        const since = searchParams.get('since') || undefined;
        const until = searchParams.get('until') || undefined;

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

        // Get count with filter
        const countResult = await db.select({ count: count() })
            .from(signups)
            .where(whereClause);
        const total = countResult[0]?.count || 0;

        // Build response
        const response: any = { total };

        if (since || until) {
            response.filter = {
                ...(since && { since }),
                ...(until && { until })
            };
        }

        return NextResponse.json(response);
    } catch (error) {
        console.error('Signups total error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
