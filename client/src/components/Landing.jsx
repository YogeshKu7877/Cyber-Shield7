import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex w-full h-screen Spacefield">
      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-7 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-9 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
              You first Logged in.
            </h5>
            <div className="flex m-5 justify-center flex-row">
              <Link
                to="/signin"
                type="submit"
                class="w-full text-white m-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </Link>
              <Link
                to="/signup"
                type="submit"
                class="w-full text-white m-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
