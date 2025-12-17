import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { requireApiKey } from '@/lib/auth';
import { getTimeRangeFilter } from '@/lib/time-utils';

/**
 * GET /api/signups/total
 * Returns the total count of signups with optional time filtering
 * 
 * Query Parameters:
 * - since: Filter signups after this time (relative like "24h" or ISO timestamp)
 * - until: Filter signups before this time (ISO timestamp)
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
        const since = searchParams.get('since') || undefined;
        const until = searchParams.get('until') || undefined;

        const db = await getDatabase();
        const waitlistCollection = db.collection('waitlist');

        // Build query filter
        const timeFilter = getTimeRangeFilter(since, until);

        // Get count with filter
        const count = await waitlistCollection.countDocuments(timeFilter);

        // Build response with period info if filtering
        const response: any = { total: count };

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
