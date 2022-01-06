import React, { useState } from "react";
import axios from "axios";
import api_link from "../etc/api";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrormessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(api_link + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError(true);
          setErrormessage(data.message);
        } else if (data.token) {
          localStorage.setItem("token", data.token);
          setSuccess(true);
          setTimeout(() => {
            window.location.assign("/folders");
          }, 1500);
        } else {
          setError(true);
          setErrormessage("Something went wrong, Please try again later!");
          setLoading(false);
          setSuccess(false);
        }
      })
      .then(
        setTimeout(() => {
          setError(false);
          setSuccess(false);
        }, 4000)
      );
  }

  return (
    <>
      {error && (
        <>
          <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mt-5">
            <div class="flex items-center justify-center w-12 bg-red-500">
              <svg
                class="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
              </svg>
            </div>

            <div class="px-4 py-2 -mx-3">
              <div class="mx-3">
                <span class="font-semibold text-red-500 dark:text-red-400">
                  Error
                </span>
                <p class="text-sm text-gray-600 dark:text-gray-200">
                  {errorMessage}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
      {success && (
        <>
          <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mt-5">
            <div className="flex items-center justify-center w-12 bg-emerald-500">
              <svg
                className="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
              </svg>
            </div>

            <div className="px-4 py-2 -mx-3">
              <div className="mx-3">
                <span className="font-semibold text-emerald-500 dark:text-emerald-400">
                  Success
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-200">
                  You have successfully logged in!
                </p>
              </div>
            </div>
          </div>
        </>
      )}
      <div class="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mt-20">
        <div class="px-6 py-4">
          <h2 class="text-3xl font-bold text-center text-gray-700 dark:text-white">
            File Server
          </h2>
          <p class="mt-1 text-center text-gray-500 dark:text-gray-400">
            Login or Ask System Administratior to create a account
          </p>

          <form onSubmit={handleSubmit}>
            <div class="w-full mt-4">
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div class="w-full mt-4">
              <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="password"
                placeholder="Password"
                aria-label="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div class="flex items-center justify-center mt-4">
              <button
                class="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-700 rounded hover:bg-blue-600 focus:outline-none"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
