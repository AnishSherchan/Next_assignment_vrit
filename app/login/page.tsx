// app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { user } from "../utils/constand";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showCredentials, setShowCredentials] = useState(false); // State to manage credentials visibility
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === user.username && password === user.password) {
      // Set a cookie with a fake token
      Cookies.set("isAuthenticated", "fake_token_123", { expires: 1 }); // Expires in 1 day

      // Redirect to the dashboard page
      router.push("/dashboard");
    } else {
      // Set the error message for invalid credentials
      setErrorMessage("Invalid username or password. Please try again.");
    }
  };

  const handleToggleCredentials = () => {
    setShowCredentials((prev) => !prev); // Toggle the value between true and false
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          {errorMessage && (
            <div className="mb-4 text-red-500 text-sm text-center">
              {errorMessage}
            </div>
          )}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={showCredentials ? "text" : "password"} // Show password if showCredentials is true
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {showCredentials && (
            <div className="mb-4 text-gray-600 text-sm text-center">
              <p>Username: {user.username}</p>
              <p>Password: {user.password}</p>
            </div>
          )}

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleToggleCredentials}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {showCredentials ? "Hide Credentials" : "Show Credentials"}
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
