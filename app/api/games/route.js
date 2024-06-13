import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const result = await sql`
            CREATE TABLE Games (
        ID SERIAL PRIMARY KEY,
        Title VARCHAR(255) NOT NULL,
        Game_Type VARCHAR(255),
        Release_Date DATE,
        Description VarChar(255)
      );
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}