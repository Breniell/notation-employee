import React from "react";  
import { useParams } from "react-router-dom";  

const mockEmployeeData: Record<number, Employee> = {  
  1: {  
    id: 1,  
    name: "John Doe",  
    role: "Software Engineer",  
    department: "Engineering",  
    email: "john.doe@example.com",  
    phone: "+123 456 789",  
    joinDate: "January 2020",  
    evaluations: [  
      { id: 1, date: "March 2024", score: "4.5/5", type: "Quarterly Review" },  
      { id: 2, date: "December 2023", score: "4.2/5", type: "Annual Review" },  
    ],  
  },  
  // Add more mock employees here if needed  
};  

interface Evaluations {  
  id: number;  
  date: string;  
  score: string;  
  type: string;  
}  

interface Employee {  
  id: number;  
  name: string;  
  role: string;  
  department: string;  
  email: string;  
  phone: string;  
  joinDate: string;  
  evaluations: Evaluations[];  
}  

export function EmployeeProfile() {  
  const { id } = useParams<{ id: string }>(); // Read the id from URL  
  const employeeId = Number(id); // Convert id to number  
  const employee = mockEmployeeData[employeeId]; // Retrieve employee based on id  

  // Handle case where employee is not found  
  if (!employee) {  
    return <div>Employee not found</div>;  
  }  

  return (  
    <div className="min-h-screen p-6">  
      <h1 className="text-3xl font-bold mb-6">Employee Profile</h1>  
      <div className="bg-white shadow-md rounded-lg p-6">  
        <div className="mb-6">  
          <h2 className="text-2xl font-bold">{employee.name}</h2>  
          <p className="text-gray-600">{employee.role}</p>  
          <p className="text-gray-600">{employee.department}</p>  
        </div>  
        <div className="mb-4">  
          <p className="text-gray-800">Email: {employee.email}</p>  
          <p className="text-gray-800">Phone: {employee.phone}</p>  
          <p className="text-gray-800">Join Date: {employee.joinDate}</p>  
        </div>  
        <div>  
          <h3 className="text-xl font-bold mb-4">Evaluations</h3>  
          <ul>  
            {employee.evaluations.map((evalItem) => (  
              <li key={evalItem.id} className="mb-2">  
                <p>{evalItem.type}</p>  
                <p className="text-gray-600">{evalItem.date}</p>  
                <p className="text-gray-600">Score: {evalItem.score}</p>  
              </li>  
            ))}  
          </ul>  
        </div>  
      </div>  
    </div>  
  );  
}