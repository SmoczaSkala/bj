"use client";

import { useRouter } from "next/navigation";
import cookieCutter from "cookie-cutter";
import { useEffect, useState } from "react";
const Navbar = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };

  const handleRegisterClick = () => {
    router.push("/RegisterFormUser");
  };

  const handleLoginClick = () => {
    router.push("/LoginFormUser");
  };

  const handleCompanyRegisterClick = () => {
    router.push("/RegisterFormCompany");
  };

  const handleCompanyLoginClick = () => {
    router.push("/LoginFormCompany");
  };
  const handleLogoutClick = () => {
    cookieCutter.set("token", "");
    location.reload();
    };
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(cookieCutter.get("token"));

  }, []);
  return (
    <nav className="flex flex-row bg-gray-800 text-white rounded-b-full justify-center gap-8 py-3">
      {!token && (
        <>
          <button
            className="mt-8 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-full inline-block font-semibold"
            onClick={handleHomeClick}
          >
            Home
          </button>
          <button
            className="mt-8 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-full inline-block font-semibold"
            onClick={handleRegisterClick}
          >
            Register
          </button>
          <button
            className="mt-8 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-full inline-block font-semibold"
            onClick={handleLoginClick}
          >
            Login
          </button>
          <button
            className="mt-8 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-full inline-block font-semibold"
            onClick={handleCompanyRegisterClick}
          >
            Company Register
          </button>
          <button
            className="mt-8 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-full inline-block font-semibold"
            onClick={handleCompanyLoginClick}
          >
            Company Login
          </button>
        </>
      )}
      {token && (
        <>
          <button
            className="mt-8 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-full inline-block font-semibold"
            onClick={handleLogoutClick}
          >
            Logout
          </button>
        </>
      )}
    </nav>
  );
};
export default Navbar;