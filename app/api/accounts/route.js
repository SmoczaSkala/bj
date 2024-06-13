import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    const result = await sql`
      SELECT * FROM users
      WHERE username = ${username};
    `;

    if (result.rows.length === 1) {
      const user = result.rows[0];
      if (password === user.password) {
        return NextResponse.json({ message: 'Login successful' }, { status: 200 });
      } else {
        return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
      }
    } else {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const { username, email, password } = await request.json();

    const insertResult = await sql`
      INSERT INTO users (username, email, password)
      VALUES (${username}, ${email}, ${password})
      RETURNING *;
    `;

    if (insertResult.rows.length === 1) {
      return NextResponse.json({ message: 'User added successfully' }, { status: 201 });
    } else {
      return NextResponse.json({ error: 'Failed to add user' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error adding user:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
