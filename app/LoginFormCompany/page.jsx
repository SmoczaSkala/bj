"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import cookieCutter from "cookie-cutter";

const LoginFormCompany = () => {
  const router = useRouter();
  const [companyId, setCompanyId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/companies/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ companyId, password }),
      });

      if (response.ok) {
        const data = await response.json();
        cookieCutter.set("token", data.token);
        router.push("/");
      } else {
        console.error("Company login failed");
      }
    } catch (error) {
      console.error("Error logging in as company:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xs mx-auto mt-4 p-4 bg-gray-200 rounded-lg"
    >
      <h2 className="text-lg font-semibold mb-4 text-stone-900">
        Company Login
      </h2>
      <label htmlFor="companyId" className="block mb-2 text-stone-900	">
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
      <label htmlFor="password" className="block mb-4 text-stone-900	">
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
        Login
      </button>
    </form>
  );
};

export default LoginFormCompany;
