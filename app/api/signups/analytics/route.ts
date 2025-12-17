import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { requireApiKey } from '@/lib/auth';
import { getTimeRangeFilter, getTimeGrouping, formatGroupedDate } from '@/lib/time-utils';

/**
 * GET /api/signups/analytics
 * Returns analytical breakdown of signups over time
 * 
 * Query Parameters:
 * - groupBy: Group by time period - "hour", "day", "week" (default: "day")
 * - since: Start period (default: "30d")
 * - until: End period (default: now)
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

        const db = await getDatabase();
        const waitlistCollection = db.collection('waitlist');

        // Build time filter
        const timeFilter = getTimeRangeFilter(since, until);

        // Get summary statistics
        const totalSignups = await waitlistCollection.countDocuments(timeFilter);
        const betaInterested = await waitlistCollection.countDocuments({
            ...timeFilter,
            isBeta: true
        });
        const helpers = await waitlistCollection.countDocuments({
            ...timeFilter,
            isHelper: true
        });
        const sponsors = await waitlistCollection.countDocuments({
            ...timeFilter,
            isSponsor: true
        });

        // Get timeline data using aggregation
        const timeGrouping = getTimeGrouping(groupBy);

        const timeline = await waitlistCollection.aggregate([
            { $match: Object.keys(timeFilter).length > 0 ? timeFilter : {} },
            {
                $group: {
                    _id: timeGrouping,
                    count: { $sum: 1 },
                    beta: {
                        $sum: { $cond: ['$isBeta', 1, 0] }
                    },
                    helpers: {
                        $sum: { $cond: ['$isHelper', 1, 0] }
                    },
                    sponsors: {
                        $sum: { $cond: ['$isSponsor', 1, 0] }
                    }
                }
            },
            { $sort: { '_id.year': 1, '_id.month': 1, '_id.day': 1, '_id.hour': 1 } }
        ]).toArray();

        // Format the timeline results
        const formattedTimeline = timeline.map(item => ({
            period: formatGroupedDate(item._id, groupBy),
            count: item.count,
            beta: item.beta,
            helpers: item.helpers,
            sponsors: item.sponsors
        }));

        return NextResponse.json({
            summary: {
                total: totalSignups,
                betaInterested,
                helpers,
                sponsors
            },
            timeline: formattedTimeline,
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
