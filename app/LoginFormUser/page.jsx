"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginFormUser = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/accounts/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        router.push("/dashboard");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xs mx-auto mt-4 p-4 bg-gray-200 rounded-lg"
    >
      <h2 className="text-lg font-semibold mb-4 text-stone-900">User Login</h2>
      <label htmlFor="username" className="block mb-2 text-stone-900	">
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

export default LoginFormUser;
