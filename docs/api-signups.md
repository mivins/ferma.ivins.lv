# Ferma Signup API Documentation

Complete API documentation for querying waitlist signup data. These endpoints require API key authentication.

## Table of Contents
- [Authentication](#authentication)
- [Endpoints](#endpoints)
  - [GET /api/signups/total](#get-apisignupstotal)
  - [GET /api/signups/list](#get-apisignupslist)
  - [GET /api/signups/analytics](#get-apisignupsanalytics)
- [Error Handling](#error-handling)
- [Code Examples](#code-examples)

---

## Authentication

All signup API endpoints require authentication via API key.

### API Key Setup

1. The API key is stored in the server's `.env.local` file as `SIGNUP_API_KEY`
2. Include the API key in your requests using the `X-API-Key` header

### Request Headers

```
X-API-Key: your-api-key-here
```

**Alternative:** You can also use the Authorization header with Bearer token format:
```
Authorization: Bearer your-api-key-here
```

### Authentication Errors

**Unauthorized (401):**
```json
{
  "error": "Unauthorized",
  "message": "Valid API key required. Please include X-API-Key header with your request."
}
```

---

## Endpoints

### GET /api/signups/total

Returns the total count of signups with optional time filtering.

#### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `since` | string | No | Filter signups after this time. Accepts relative format (`24h`, `7d`, `30d`) or ISO timestamp |
| `until` | string | No | Filter signups before this time. ISO timestamp format |

#### Response

```json
{
  "total": 150,
  "filter": {
    "since": "24h"
  }
}
```

#### Examples

**Get total signups (all time):**
```bash
curl -H "X-API-Key: YOUR_API_KEY" \
  http://localhost:999/api/signups/total
```

**Get signups from last 24 hours:**
```bash
curl -H "X-API-Key: YOUR_API_KEY" \
  "http://localhost:999/api/signups/total?since=24h"
```

**Get signups from last 7 days:**
```bash
curl -H "X-API-Key: YOUR_API_KEY" \
  "http://localhost:999/api/signups/total?since=7d"
```

---

### GET /api/signups/list

Returns a paginated list of signups with extensive filtering options.

#### Query Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `limit` | number | No | 50 | Number of results to return (max: 500) |
| `offset` | number | No | 0 | Number of results to skip for pagination |
| `since` | string | No | - | Filter by time period (e.g., `1h`, `24h`, `7d`) or ISO timestamp |
| `until` | string | No | - | End date filter (ISO timestamp) |
| `sortBy` | string | No | createdAt | Field to sort by |
| `order` | string | No | desc | Sort order: `asc` or `desc` |
| `isBeta` | boolean | No | - | Filter by beta interest |
| `isHelper` | boolean | No | - | Filter by helper interest |
| `isSponsor` | boolean | No | - | Filter by sponsor interest |

#### Response

```json
{
  "signups": [
    {
      "_id": "674a1b2c3d4e5f6a7b8c9d0e",
      "name": "John Doe",
      "email": "john@example.com",
      "isBeta": true,
      "isHelper": false,
      "isSponsor": false,
      "createdAt": "2025-12-17T10:30:00.000Z",
      "timestamp": 1734429000000
    }
  ],
  "total": 150,
  "returned": 10,
  "offset": 0,
  "limit": 10,
  "hasMore": true
}
```

#### Examples

**Get first 10 signups:**
```bash
curl -H "X-API-Key: YOUR_API_KEY" \
  "http://localhost:999/api/signups/list?limit=10"
```

**Get signups from last 24 hours:**
```bash
curl -H "X-API-Key: YOUR_API_KEY" \
  "http://localhost:999/api/signups/list?since=24h&limit=20"
```

**Get beta-interested users:**
```bash
curl -H "X-API-Key: YOUR_API_KEY" \
  "http://localhost:999/api/signups/list?isBeta=true"
```

**Pagination - get next page:**
```bash
curl -H "X-API-Key: YOUR_API_KEY" \
  "http://localhost:999/api/signups/list?limit=20&offset=20"
```

**Get helpers from last week, sorted by name:**
```bash
curl -H "X-API-Key: YOUR_API_KEY" \
  "http://localhost:999/api/signups/list?isHelper=true&since=7d&sortBy=name&order=asc"
```

---

### GET /api/signups/analytics

Returns analytical breakdown of signups over time with summary statistics.

#### Query Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `groupBy` | string | No | day | Time grouping: `hour`, `day`, or `week` |
| `since` | string | No | 30d | Start period for analysis |
| `until` | string | No | now | End period (ISO timestamp) |

#### Response

```json
{
  "summary": {
    "total": 150,
    "betaInterested": 85,
    "helpers": 42,
    "sponsors": 15
  },
  "timeline": [
    {
      "period": "2025-12-10",
      "count": 12,
      "beta": 8,
      "helpers": 3,
      "sponsors": 1
    },
    {
      "period": "2025-12-11",
      "count": 15,
      "beta": 9,
      "helpers": 5,
      "sponsors": 2
    }
  ],
  "groupBy": "day",
  "filter": {
    "since": "7d"
  }
}
```

#### Examples

**Get daily analytics for last 7 days:**
```bash
curl -H "X-API-Key: YOUR_API_KEY" \
  "http://localhost:999/api/signups/analytics?groupBy=day&since=7d"
```

**Get hourly analytics for last 24 hours:**
```bash
curl -H "X-API-Key: YOUR_API_KEY" \
  "http://localhost:999/api/signups/analytics?groupBy=hour&since=24h"
```

**Get weekly analytics for last 3 months:**
```bash
curl -H "X-API-Key: YOUR_API_KEY" \
  "http://localhost:999/api/signups/analytics?groupBy=week&since=90d"
```

---

## Error Handling

### Common HTTP Status Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 400 | Bad Request - Invalid parameters |
| 401 | Unauthorized - Missing or invalid API key |
| 500 | Internal Server Error |

### Error Response Format

```json
{
  "error": "Error Type",
  "message": "Detailed error message"
}
```

---

## Code Examples

### JavaScript (Fetch API)

```javascript
const API_KEY = 'your-api-key-here';
const BASE_URL = 'http://localhost:999'; // or https://ferma.ivins.lv in production

// Get total signups
async function getTotalSignups() {
  const response = await fetch(`${BASE_URL}/api/signups/total?since=7d`, {
    headers: {
      'X-API-Key': API_KEY
    }
  });
  const data = await response.json();
  console.log('Total signups:', data.total);
  return data;
}

// Get signups list with filters
async function getSignupsList(limit = 50, since = '30d') {
  const response = await fetch(
    `${BASE_URL}/api/signups/list?limit=${limit}&since=${since}&isBeta=true`,
    {
      headers: {
        'X-API-Key': API_KEY
      }
    }
  );
  const data = await response.json();
  console.log(`Found ${data.returned} signups`);
  return data.signups;
}

// Get analytics
async function getAnalytics(groupBy = 'day', since = '30d') {
  const response = await fetch(
    `${BASE_URL}/api/signups/analytics?groupBy=${groupBy}&since=${since}`,
    {
      headers: {
        'X-API-Key': API_KEY
      }
    }
  );
  const data = await response.json();
  console.log('Analytics summary:', data.summary);
  console.log('Timeline data points:', data.timeline.length);
  return data;
}
```

### Node.js (with fetch)

```javascript
const fetch = require('node-fetch');

const config = {
  apiKey: process.env.SIGNUP_API_KEY,
  baseUrl: 'https://ferma.ivins.lv'
};

async function fetchSignupData() {
  try {
    // Get total
    const totalResponse = await fetch(
      `${config.baseUrl}/api/signups/total`,
      {
        headers: { 'X-API-Key': config.apiKey }
      }
    );
    const totalData = await totalResponse.json();
    
    // Get recent signups
    const listResponse = await fetch(
      `${config.baseUrl}/api/signups/list?limit=10&since=24h`,
      {
        headers: { 'X-API-Key': config.apiKey }
      }
    );
    const listData = await listResponse.json();
    
    console.log(`Total signups: ${totalData.total}`);
    console.log(`Recent signups (24h): ${listData.returned}`);
    
    return { total: totalData, list: listData };
  } catch (error) {
    console.error('Error fetching signup data:', error);
    throw error;
  }
}
```

### Python (with requests)

```python
import requests
import os

API_KEY = os.getenv('SIGNUP_API_KEY')
BASE_URL = 'https://ferma.ivins.lv'

headers = {
    'X-API-Key': API_KEY
}

# Get total signups
def get_total_signups(since='7d'):
    response = requests.get(
        f'{BASE_URL}/api/signups/total',
        params={'since': since},
        headers=headers
    )
    return response.json()

# Get signups list
def get_signups_list(limit=50, since='30d', is_beta=None):
    params = {
        'limit': limit,
        'since': since
    }
    if is_beta is not None:
        params['isBeta'] = 'true' if is_beta else 'false'
    
    response = requests.get(
        f'{BASE_URL}/api/signups/list',
        params=params,
        headers=headers
    )
    return response.json()

# Get analytics
def get_analytics(group_by='day', since='30d'):
    response = requests.get(
        f'{BASE_URL}/api/signups/analytics',
        params={'groupBy': group_by, 'since': since},
        headers=headers
    )
    return response.json()

# Example usage
if __name__ == '__main__':
    total = get_total_signups(since='7d')
    print(f"Total signups (last 7 days): {total['total']}")
    
    beta_users = get_signups_list(limit=10, is_beta=True)
    print(f"Beta interested users: {len(beta_users['signups'])}")
```

---

## Common Use Cases

### Dashboard Widget - Show Recent Signups

```javascript
// Display last 5 signups
const recent = await fetch('${BASE_URL}/api/signups/list?limit=5', {
  headers: { 'X-API-Key': API_KEY }
}).then(r => r.json());

recent.signups.forEach(signup => {
  console.log(`${signup.name} - ${signup.email}`);
});
```

### Daily Report - Email Summary

```javascript
// Get yesterday's signups
const analytics = await fetch(
  '${BASE_URL}/api/signups/analytics?groupBy=day&since=24h',
  {
    headers: { 'X-API-Key': API_KEY }
  }
).then(r => r.json());

console.log(`Yesterday's signups: ${analytics.summary.total}`);
console.log(`Beta interested: ${analytics.summary.betaInterested}`);
```

### Export All Signups

```javascript
// Paginate through all signups
let allSignups = [];
let offset = 0;
const limit = 500; // Max allowed

while (true) {
  const response = await fetch(
    `${BASE_URL}/api/signups/list?limit=${limit}&offset=${offset}`,
    {
      headers: { 'X-API-Key': API_KEY }
    }
  ).then(r => r.json());
  
  allSignups = allSignups.concat(response.signups);
  
  if (!response.hasMore) break;
  offset += limit;
}

console.log(`Exported ${allSignups.length} signups`);
```

---

## Production URL

When deployed to production, replace `http://localhost:999` with:
```
https://ferma.ivins.lv
```

---

## Support

For questions or issues with the Signup API, please contact the development team or refer to the project repository.

**Last Updated:** 2025-12-17
