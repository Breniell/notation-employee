import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import EmployeeList  from "./pages/EmployeeList";
import { Evaluation } from "./pages/Evaluation";
import { EmployeeProfile } from "./pages/EmployeeProfile";
import { LoginForm } from "./pages/LoginForm";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <LoginForm onLogin={handleLogin} />} />
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/employees" element={isAuthenticated ? <EmployeeList /> : <Navigate to="/login" />} />
        <Route path="/evaluations" element={isAuthenticated ? <Evaluation /> : <Navigate to="/login" />} />
        <Route path="/profile/:id" element={isAuthenticated ? <EmployeeProfile /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
