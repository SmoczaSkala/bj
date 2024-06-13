// components/RegisterForm.js

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const RegisterForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/accounts/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        router.push('/login');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xs mx-auto mt-4 p-4 bg-gray-200 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">User Registration</h2>
      <label htmlFor="username" className="block mb-2">
        Username
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block w-full mt-1 px-3 py-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          required
        />
      </label>
      <label htmlFor="email" className="block mb-2">
        Email
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full mt-1 px-3 py-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          required
        />
      </label>
      <label htmlFor="password" className="block mb-4">
        Password
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full mt-1 px-3 py-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          required
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
