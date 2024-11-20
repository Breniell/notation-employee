import React from "react";
import { Link } from "react-router-dom";

export const Sidebar: React.FC = () => {
  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Employees", path: "/employees" },
    { name: "Reports", path: "/reports" },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white h-screen fixed">
      <div className="p-4 font-bold text-xl">Menu</div>
      <ul>
        {links.map((link) => (
          <li key={link.name} className="p-2 hover:bg-gray-700">
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
