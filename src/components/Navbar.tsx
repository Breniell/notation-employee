import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="font-bold text-xl">EvalPro</h1>
        <div>
          <Link to="/dashboard" className="px-4 py-2 hover:underline">
            Dashboard
          </Link>
          <Link to="/employees" className="px-4 py-2 hover:underline">
            Employees
          </Link>
        </div>
      </div>
    </nav>
  );
};
