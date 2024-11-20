import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export function Dashboard() {
  const stats = [
    { name: "Employees", value: 120 },
    { name: "Evaluations Completed", value: 45 },
    { name: "Pending Evaluations", value: 10 },
  ];

  const departmentStats = {
    labels: ["Engineering", "Product", "Design"],
    datasets: [
      {
        data: [50, 30, 40],
        backgroundColor: ["#36A2EB", "#FFCD56", "#FF5733"],
      },
    ],
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="p-4 bg-white shadow rounded">
            <p className="text-gray-500">{stat.name}</p>
            <h2 className="text-2xl font-bold">{stat.value}</h2>
          </div>
        ))}
      </div>
      <div className="mt-6 bg-white shadow rounded p-6">
        <h2 className="text-xl font-semibold mb-4">Department Distribution</h2>
        <Pie data={departmentStats} />
      </div>
    </div>
  );
}
