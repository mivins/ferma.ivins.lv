/**
 * Utility functions for parsing and handling time-based queries
 */

/**
 * Parses relative time strings like "24h", "7d", "30d" into Date objects
 * @param input - Relative time string (e.g., "24h", "7d", "30d")
 * @returns Date object representing the time in the past
 */
export function parseRelativeTime(input: string): Date {
    const now = new Date();
    const match = input.match(/^(\d+)([hdw])$/);

    if (!match) {
        throw new Error(`Invalid time format: ${input}. Use format like "24h", "7d", "4w"`);
    }

    const value = parseInt(match[1], 10);
    const unit = match[2];

    const millisecondsPerUnit: Record<string, number> = {
        'h': 60 * 60 * 1000,        // hours
        'd': 24 * 60 * 60 * 1000,   // days
        'w': 7 * 24 * 60 * 60 * 1000 // weeks
    };

    const milliseconds = value * millisecondsPerUnit[unit];
    return new Date(now.getTime() - milliseconds);
}

/**
 * Creates a MongoDB query filter for time ranges
 * @param since - Start time (relative string like "24h" or ISO timestamp)
 * @param until - End time (ISO timestamp)
 * @returns MongoDB query object for createdAt field
 */
export function getTimeRangeFilter(since?: string, until?: string): Record<string, any> {
    const filter: Record<string, any> = {};

    if (since) {
        try {
            // Check if it's a relative time format
            if (/^\d+[hdw]$/.test(since)) {
                filter.$gte = parseRelativeTime(since);
            } else {
                // Assume ISO timestamp
                filter.$gte = new Date(since);
            }
        } catch (error) {
            console.error('Error parsing since parameter:', error);
        }
    }

    if (until) {
        try {
            filter.$lte = new Date(until);
        } catch (error) {
            console.error('Error parsing until parameter:', error);
        }
    }

    return Object.keys(filter).length > 0 ? { createdAt: filter } : {};
}

/**
 * Groups a time period into intervals
 * @param groupBy - Grouping interval: "hour", "day", "week"
 * @returns MongoDB aggregation grouping expression
 */
export function getTimeGrouping(groupBy: 'hour' | 'day' | 'week') {
    const groupings = {
        hour: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' },
            day: { $dayOfMonth: '$createdAt' },
            hour: { $hour: '$createdAt' }
        },
        day: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' },
            day: { $dayOfMonth: '$createdAt' }
        },
        week: {
            year: { $year: '$createdAt' },
            week: { $week: '$createdAt' }
        }
    };

    return groupings[groupBy];
}

/**
 * Formats a grouped date back to a readable string
 * @param group - The grouped date object from MongoDB
 * @param groupBy - The grouping type used
 * @returns Formatted date string
 */
export function formatGroupedDate(group: any, groupBy: 'hour' | 'day' | 'week'): string {
    if (groupBy === 'hour') {
        return `${group.year}-${String(group.month).padStart(2, '0')}-${String(group.day).padStart(2, '0')}T${String(group.hour).padStart(2, '0')}:00`;
    } else if (groupBy === 'day') {
        return `${group.year}-${String(group.month).padStart(2, '0')}-${String(group.day).padStart(2, '0')}`;
    } else {
        return `${group.year}-W${String(group.week).padStart(2, '0')}`;
    }
}
