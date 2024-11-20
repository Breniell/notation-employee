import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Type definition for Employee
interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
}

// Static data for employees
const employees: Employee[] = [
  { id: "1", name: "kouda breniell", role: "Developer", department: "Engineering" },
  { id: "2", name: "thomas paulin", role: "Developper", department: "Engineering" },
  { id: "3", name: "Akam", role: "Product Manager", department: "Product" },
];

const EmployeeList: React.FC = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>(employees);

  // UseEffect to handle filtering logic based on search and department filter
  useEffect(() => {
    const filtered = employees.filter((emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? emp.department === filter : true)
    );
    setFilteredEmployees(filtered);
  }, [search, filter]);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Employee List</h1>

      {/* Search and Filter Section */}
      <div className="mb-4 flex space-x-4">
        <div className="flex-1">
          <label htmlFor="search" className="block text-sm font-semibold mb-2">Search Employees</label>
          <input
            id="search"
            type="text"
            placeholder="Search employees..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-3 border rounded-lg w-full max-w-md"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="filter" className="block text-sm font-semibold mb-2">Filter by Department</label>
          <select
            id="filter"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            className="p-3 border rounded-lg w-full max-w-md"
          >
            <option value="">All Departments</option>
            <option value="Engineering">Engineering</option>
            <option value="Product">Product</option>
            <option value="Design">Design</option>
          </select>
        </div>
      </div>

      {/* Employee Table */}
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Role</th>
            <th className="px-4 py-2 text-left">Department</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center py-4 text-gray-500">
                No employees found
              </td>
            </tr>
          ) : (
            filteredEmployees.map((emp) => (
              <tr key={emp.id} className="border-t">
                <td className="px-4 py-2">{emp.name}</td>
                <td className="px-4 py-2">{emp.role}</td>
                <td className="px-4 py-2">{emp.department}</td>
                <td className="px-4 py-2">
                  <Link to={`/profile/${emp.id}`} className="text-blue-500 hover:underline">
                    View
                  </Link>{" "}
                  |{" "}
                  <Link to={`/evaluate/${emp.id}`} className="text-green-500 hover:underline">
                    Evaluate
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
