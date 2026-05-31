"use client";

import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-20">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-6xl font-bold text-red-500">Oops!</h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Something went wrong
        </h2>

        <p className="mt-3 text-gray-600">
          An unexpected error occurred while loading this page.
        </p>

        {error?.message && (
          <p className="mt-4 text-sm text-red-500 bg-red-50 p-3 rounded-lg">
            {error.message}
          </p>
        )}

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => reset()}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
