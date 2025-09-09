'use client';
import React, { useState } from "react";

interface QA {
  question: string;
  answer: string;
}

const AddQAForm: React.FC = () => {
  const [qaList, setQaList] = useState<QA[]>([{ question: "", answer: "" }]);

  const handleChange = (index: number, field: keyof QA, value: string) => {
    const updated = [...qaList];
    updated[index][field] = value;
    setQaList(updated);
  };

  const addField = () => {
    setQaList([...qaList, { question: "", answer: "" }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Q&A List:", qaList);
    alert("Q&A submitted! Check console for data.");
    setQaList([{ question: "", answer: "" }]); // reset
  };

  return (
    <div className="p-4 rounded-lg   bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Add Questions & Answers
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {qaList.map((qa, index) => (
          <div key={index} className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Question {index + 1} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={qa.question}
                onChange={(e) => handleChange(index, "question", e.target.value)}
                placeholder="Enter question"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Answer {index + 1} <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={3}
                value={qa.answer}
                onChange={(e) => handleChange(index, "answer", e.target.value)}
                placeholder="Enter answer"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addField}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
        >
          + Add More Question
        </button>

        <div className="flex justify-end gap-3 mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-600"
          >
            Submit Q&A
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddQAForm;
