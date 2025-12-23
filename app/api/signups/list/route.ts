import { NextRequest, NextResponse } from 'next/server';
import { db, signups } from '@/lib/postgres';
import { requireApiKey } from '@/lib/auth';
import { desc, asc, count, gte, lte, eq, and, SQL } from 'drizzle-orm';
import { parseRelativeTime } from '@/lib/time-utils';

/**
 * GET /api/signups/list
 * Returns a paginated list of signups with filtering options
 */
export async function GET(request: NextRequest) {
    // Check authentication
    const authError = requireApiKey(request);
    if (authError) return authError;

    try {
        const { searchParams } = new URL(request.url);

        // Parse pagination parameters
        const limit = Math.min(
            parseInt(searchParams.get('limit') || '50', 10),
            500
        );
        const offset = parseInt(searchParams.get('offset') || '0', 10);

        // Parse time filters
        const since = searchParams.get('since') || undefined;
        const until = searchParams.get('until') || undefined;

        // Parse sorting
        const sortBy = searchParams.get('sortBy') || 'createdAt';
        const order = searchParams.get('order') === 'asc' ? 'asc' : 'desc';

        // Parse boolean filters
        const isBeta = searchParams.get('isBeta');
        const isHelper = searchParams.get('isHelper');
        const isSponsor = searchParams.get('isSponsor');

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

        if (isBeta !== null && isBeta !== undefined) {
            conditions.push(eq(signups.isBeta, isBeta === 'true'));
        }
        if (isHelper !== null && isHelper !== undefined) {
            conditions.push(eq(signups.isHelper, isHelper === 'true'));
        }
        if (isSponsor !== null && isSponsor !== undefined) {
            conditions.push(eq(signups.isSponsor, isSponsor === 'true'));
        }

        const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

        // Get total count
        const countResult = await db.select({ count: count() })
            .from(signups)
            .where(whereClause);
        const total = countResult[0]?.count || 0;

        // Get signups with pagination
        const orderFn = order === 'asc' ? asc : desc;
        const results = await db.select()
            .from(signups)
            .where(whereClause)
            .orderBy(orderFn(signups.createdAt))
            .limit(limit)
            .offset(offset);

        return NextResponse.json({
            signups: results,
            total,
            returned: results.length,
            offset,
            limit,
            hasMore: offset + results.length < total
        });
    } catch (error) {
        console.error('Signups list error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
