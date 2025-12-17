import { NextRequest } from 'next/server';

/**
 * Validates if the provided API key matches the stored API key
 * @param key - The API key to validate
 * @returns true if valid, false otherwise
 */
export function validateApiKey(key: string | null | undefined): boolean {
    if (!key) return false;

    const storedKey = process.env.SIGNUP_API_KEY;

    if (!storedKey) {
        console.error('SIGNUP_API_KEY is not configured in environment variables');
        return false;
    }

    // Use constant-time comparison to prevent timing attacks
    return key === storedKey;
}

/**
 * Extracts API key from request headers
 * Supports both 'X-API-Key' and 'Authorization: Bearer {key}' formats
 * @param request - Next.js request object
 * @returns The API key or null if not found
 */
export function getApiKeyFromRequest(request: NextRequest): string | null {
    // Check X-API-Key header (preferred)
    const apiKeyHeader = request.headers.get('x-api-key');
    if (apiKeyHeader) {
        return apiKeyHeader;
    }

    // Check Authorization header as fallback
    const authHeader = request.headers.get('authorization');
    if (authHeader && authHeader.startsWith('Bearer ')) {
        return authHeader.substring(7);
    }

    return null;
}

/**
 * Middleware function to require API key authentication
 * Returns an error response if authentication fails
 * @param request - Next.js request object
 * @returns null if authenticated, NextResponse with error if not
 */
export function requireApiKey(request: NextRequest) {
    const apiKey = getApiKeyFromRequest(request);

    if (!validateApiKey(apiKey)) {
        return Response.json(
            {
                error: 'Unauthorized',
                message: 'Valid API key required. Please include X-API-Key header with your request.'
            },
            { status: 401 }
        );
    }

    return null; // Authentication successful
}
