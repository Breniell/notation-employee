import React, { useState } from "react";
import { useParams } from "react-router-dom";

const criteria = [
  { id: 1, name: "Technical Skills", weight: 40 },
  { id: 2, name: "Communication", weight: 30 },
  { id: 3, name: "Teamwork", weight: 30 },
];

export function Evaluation() {
  const { id } = useParams();
  const [scores, setScores] = useState<{ [key: number]: number }>({});
  const [overallComment, setOverallComment] = useState("");

  const handleSubmit = () => {
    // Calcul de la note totale
    const totalScore = Object.values(scores).reduce((acc, score) => acc + score, 0);
    console.log({ employeeId: id, scores, overallComment, totalScore });
    alert("Evaluation submitted!");
  };

  const handleScoreChange = (criterionId: number, value: number) => {
    setScores({ ...scores, [criterionId]: value });
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Evaluate Employee {id}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {criteria.map((criterion) => (
          <div key={criterion.id} className="mb-4">
            <p className="text-lg font-semibold">{criterion.name}</p>
            <div className="flex items-center gap-2 mt-2">
              {[1, 2, 3, 4, 5].map((score) => (
                <button
                  key={score}
                  onClick={() => handleScoreChange(criterion.id, score)}
                  className={`p-2 rounded ${
                    scores[criterion.id] === score
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {score}
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-6">
          <textarea
            value={overallComment}
            onChange={(e) => setOverallComment(e.target.value)}
            rows={4}
            placeholder="Overall comments..."
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Submit Evaluation
        </button>
      </div>
    </div>
  );
}
