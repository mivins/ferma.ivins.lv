import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool, types } from 'pg';
import { pgTable, text, boolean, timestamp } from 'drizzle-orm/pg-core';

// Disable automatic date parsing in pg
types.setTypeParser(types.builtins.DATE, (val) => val);
types.setTypeParser(types.builtins.TIMESTAMP, (val) => val);
types.setTypeParser(types.builtins.TIMESTAMPTZ, (val) => val);

if (!process.env.DATABASE_URL) {
  throw new Error('Please add your DATABASE_URL to .env.local');
}

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
  max: 10,
});

// Define signups table schema
export const signups = pgTable('signups', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  isBeta: boolean('is_beta').default(false),
  isHelper: boolean('is_helper').default(false),
  isSponsor: boolean('is_sponsor').default(false),
  source: text('source'),
  referrer: text('referrer'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const db = drizzle(pool);
export type Signup = typeof signups.$inferSelect;
export type NewSignup = typeof signups.$inferInsert;
