import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

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

    // Get database connection
    const db = await getDatabase();
    const waitlistCollection = db.collection('waitlist');

    // Check if email already exists
    const existingEntry = await waitlistCollection.findOne({ email });
    if (existingEntry) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    // Create waitlist entry
    const waitlistEntry = {
      name,
      email,
      isBeta: Boolean(isBeta),
      isHelper: Boolean(isHelper),
      isSponsor: Boolean(isSponsor),
      createdAt: new Date(),
      timestamp: Date.now(),
    };

    // Insert into database
    const result = await waitlistCollection.insertOne(waitlistEntry);

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully joined the waitlist!',
        id: result.insertedId,
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
    const db = await getDatabase();
    const waitlistCollection = db.collection('waitlist');

    // Get total count
    const count = await waitlistCollection.countDocuments();

    // Get recent signups (last 10)
    const recentSignups = await waitlistCollection
      .find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .project({ name: 1, createdAt: 1, isBeta: 1, isHelper: 1, isSponsor: 1 })
      .toArray();

    return NextResponse.json({
      total: count,
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
