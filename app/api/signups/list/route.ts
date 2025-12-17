import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { requireApiKey } from '@/lib/auth';
import { getTimeRangeFilter } from '@/lib/time-utils';

/**
 * GET /api/signups/list
 * Returns a paginated list of signups with filtering options
 * 
 * Query Parameters:
 * - limit: Number of results to return (default: 50, max: 500)
 * - offset: Number of results to skip for pagination (default: 0)
 * - since: Filter signups after this time (relative like "24h" or ISO timestamp)
 * - until: Filter signups before this time (ISO timestamp)
 * - sortBy: Field to sort by (default: "createdAt")
 * - order: Sort order "asc" or "desc" (default: "desc")
 * - isBeta: Filter by beta interest (true/false)
 * - isHelper: Filter by helper interest (true/false)
 * - isSponsor: Filter by sponsor interest (true/false)
 * 
 * Headers:
 * - X-API-Key: Required API key for authentication
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
            500 // Max limit
        );
        const offset = parseInt(searchParams.get('offset') || '0', 10);

        // Parse time filters
        const since = searchParams.get('since') || undefined;
        const until = searchParams.get('until') || undefined;

        // Parse sorting
        const sortBy = searchParams.get('sortBy') || 'createdAt';
        const order = searchParams.get('order') === 'asc' ? 1 : -1;

        // Parse boolean filters
        const isBeta = searchParams.get('isBeta');
        const isHelper = searchParams.get('isHelper');
        const isSponsor = searchParams.get('isSponsor');

        const db = await getDatabase();
        const waitlistCollection = db.collection('waitlist');

        // Build query filter
        const filter: Record<string, any> = {
            ...getTimeRangeFilter(since, until)
        };

        // Add boolean filters if specified
        if (isBeta !== null) {
            filter.isBeta = isBeta === 'true';
        }
        if (isHelper !== null) {
            filter.isHelper = isHelper === 'true';
        }
        if (isSponsor !== null) {
            filter.isSponsor = isSponsor === 'true';
        }

        // Get total count for pagination info
        const total = await waitlistCollection.countDocuments(filter);

        // Get signups with pagination
        const signups = await waitlistCollection
            .find(filter)
            .sort({ [sortBy]: order })
            .skip(offset)
            .limit(limit)
            .toArray();

        return NextResponse.json({
            signups,
            total,
            returned: signups.length,
            offset,
            limit,
            hasMore: offset + signups.length < total
        });
    } catch (error) {
        console.error('Signups list error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
