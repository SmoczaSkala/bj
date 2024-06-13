"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const RegisterFormCompany = () => {
  const router = useRouter();
  const [companyName, setCompanyName] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/companies/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ companyName, companyId, password }),
      });

      if (response.ok) {
        router.push('/company_login');
      } else {
        console.error('Company registration failed');
      }
    } catch (error) {
      console.error('Error registering company:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xs mx-auto mt-4 p-4 bg-gray-200 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Company Registration</h2>
      <label htmlFor="companyName" className="block mb-2">
        Company Name
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="block w-full mt-1 px-3 py-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          required
        />
      </label>
      <label htmlFor="companyId" className="block mb-2">
        Company ID
        <input
          type="text"
          id="companyId"
          value={companyId}
          onChange={(e) => setCompanyId(e.target.value)}
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

export default RegisterFormCompany;
