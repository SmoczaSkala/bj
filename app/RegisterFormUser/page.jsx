"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterFormUser = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    router.push("/LoginFormUser");
  };

  const handleRegisterClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/api/accounts/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        }
      );

      if (response.ok) {
        router.push("/LoginFormUser");
      } else {
        const data = await response.json();
        alert(`Registration failed\nError: ${data.message}`);
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="w-full h-full">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center h-full">
        <div className="rounded-2xl bg-accent2 shadow-2xl flex flex-row w-2/3 max-w-4xl">
          <div className="w-2/5 rounded-tl-2xl rounded-bl-2xl bg-accent1 text-bg py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Been here before?</h2>
            <div className="border-2 border-bg mb-4 w-12 inline-block"></div>
            <p className="text-lg text-bg">
              Click the button below and join us back up!
            </p>
            <button
              className="mt-8 bg-bg text-accent1 py-2 px-4 rounded-full inline-block font-semibold hover:bg-accent hover:text-bg"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </div>
          <div className="w-3/5 p-5">
            <h2 className="text-3xl font-bold mb-2 text-accent py-3 my-10 ">
              Sign Up
            </h2>
            <div className="border-2 border-bg mb-4 w-12 inline-block"></div>
            <form
              onSubmit={handleRegisterClick}
              className="flex py-13 flex-col items-center"
            >
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-3/4 bg-bg texte-accent1 py-2 px-4 rounded-full mb-4 outline-none focus:ring-2 focus:ring-accent1"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-3/4 bg-bg text-accent1 py-2 px-4 rounded-full mb-4 outline-none focus:ring-2 focus:ring-accent1"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-3/4 bg-bg text-accent1 py-2 px-4 rounded-full mb-4 outline-none focus:ring-2 focus:ring-accent1"
                required
              />
              <button
                type="submit"
                className="bg-bg text-accent1 py-2 px-4 rounded-full inline-block font-semibold hover:bg-accent hover:text-bg"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterFormUser;
