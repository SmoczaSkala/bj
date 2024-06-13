// pages/api/accounts/register.js
import { sql } from '@vercel/postgres';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
    return;
  }

  const { username, email, password } = req.body;
  const saltRounds = 10; // Można dostosować zgodnie z wymaganiami bezpieczeństwa

  try {
    const { rows: existingUsers } = await sql`
      SELECT id FROM users WHERE email = ${email};
    `;

    if (existingUsers.length > 0) {
      res.status(409).json({ message: 'User already exists' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    const { rows } = await sql`
      INSERT INTO users (username, email, password, createdat)
      VALUES (${username}, ${email}, ${hashedPassword}, NOW())
      RETURNING id, username, email;
    `;

    const newUser = rows[0];
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
