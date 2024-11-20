import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-blue-700">Welcome to EvalPro</h1>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Profile
            </button>
            <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition">
              Logout
            </button>
          </div>
        </header>

        {/* Quick Stats */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-700">Employees</h2>
              <p className="text-xl font-bold text-blue-500">120</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8 text-blue-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 3v18m12-18v18m-6-3l6 3 6-3"
                />
              </svg>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-700">Evaluations</h2>
              <p className="text-xl font-bold text-green-500">45 Completed</p>
            </div>
            <div className="bg-green-100 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8 text-green-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5l9 12 4-6 5 7M3 5l9 12 4-6M3 5h18"
                />
              </svg>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-700">Pending Evaluations</h2>
              <p className="text-xl font-bold text-yellow-500">10 Pending</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8 text-yellow-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M4.22 4.22a5.5 5.5 0 117.78 7.78A5.5 5.5 0 114.22 4.22z"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              to="/dashboard"
              className="flex items-center justify-between bg-blue-600 text-white p-4 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              <span className="text-lg font-semibold">Go to Dashboard</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6l6 6-6 6"
                />
              </svg>
            </Link>
            <Link
              to="/employees"
              className="flex items-center justify-between bg-green-600 text-white p-4 rounded-lg shadow-lg hover:bg-green-700 transition"
            >
              <span className="text-lg font-semibold">Manage Employees</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6l6 6-6 6"
                />
              </svg>
            </Link>
            <Link
              to="/evaluations"
              className="flex items-center justify-between bg-yellow-600 text-white p-4 rounded-lg shadow-lg hover:bg-yellow-700 transition"
            >
              <span className="text-lg font-semibold">Evaluate Employees</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6l6 6-6 6"
                />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
