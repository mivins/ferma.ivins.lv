import { NextRequest, NextResponse } from 'next/server';
import { db, signups } from '@/lib/postgres';
import { eq, desc, count } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, isBeta, isHelper, isSponsor } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existing = await db.select()
      .from(signups)
      .where(eq(signups.email, email.toLowerCase()))
      .limit(1);

    if (existing.length > 0) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    // Insert new signup
    const result = await db.insert(signups).values({
      name,
      email: email.toLowerCase(),
      isBeta: Boolean(isBeta),
      isHelper: Boolean(isHelper),
      isSponsor: Boolean(isSponsor),
      source: 'website',
    }).returning();

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully joined the waitlist!',
        id: result[0].id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Get total count
    const countResult = await db.select({ count: count() }).from(signups);
    const total = countResult[0]?.count || 0;

    // Get recent signups (last 10)
    const recentSignups = await db.select({
      name: signups.name,
      createdAt: signups.createdAt,
      isBeta: signups.isBeta,
      isHelper: signups.isHelper,
      isSponsor: signups.isSponsor,
    })
      .from(signups)
      .orderBy(desc(signups.createdAt))
      .limit(10);

    return NextResponse.json({
      total,
      recent: recentSignups,
    });
  } catch (error) {
    console.error('Waitlist fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
