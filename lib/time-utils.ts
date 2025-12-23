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

