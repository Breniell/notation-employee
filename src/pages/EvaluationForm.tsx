import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EvaluationForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [score, setScore] = useState(0);
  const [comments, setComments] = useState("");

  const handleSubmit = () => {
    alert(`Evaluation submitted for employee ID ${id}`);
    navigate("/employees");
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Evaluate Employee</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block mb-2">Score (1-100):</label>
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(Number(e.target.value))}
            className="p-2 border rounded w-32"
            min={1}
            max={100}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Comments:</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="p-2 border rounded w-full h-32"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-3 rounded"
        >
          Submit Evaluation
        </button>
      </div>
    </div>
  );
};

export default EvaluationForm;
