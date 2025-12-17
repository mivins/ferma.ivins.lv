#!/usr/bin/env node

/**
 * Generate a secure random API key for signup API authentication
 * Usage: node scripts/generate-api-key.js
 */

const crypto = require('crypto');

function generateApiKey() {
    // Generate 32 random bytes and convert to hex (64 characters)
    const key = crypto.randomBytes(32).toString('hex');
    return key;
}

const apiKey = generateApiKey();

console.log('\n===========================================');
console.log('Generated Signup API Key:');
console.log('===========================================\n');
console.log(apiKey);
console.log('\n===========================================');
console.log('Add this to your .env.local file:');
console.log('===========================================\n');
console.log(`SIGNUP_API_KEY=${apiKey}`);
console.log('\n');
