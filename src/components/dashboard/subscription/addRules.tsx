'use client';
import React, { useState } from "react";

const AddSubscriptionRules: React.FC = () => {
  const [rules, setRules] = useState<string[]>([""]);

  const handleChange = (index: number, value: string) => {
    const updatedRules = [...rules];
    updatedRules[index] = value;
    setRules(updatedRules);
  };

  const addField = () => {
    setRules([...rules, ""]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscription Rules:", rules);
    alert("Subscription rules submitted! Check console for data.");
    setRules([""]); // reset
  };

  return (
    <div className="p-6 rounded-lg shadow-sm container bg-white">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Add Subscription Rules
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {rules.map((rule, index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-gray-700">
              Subscription Rule {index + 1} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={rule}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder="Enter subscription rule"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
        ))}

        <button
          type="button"
          onClick={addField}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
        >
          + Add More Field
        </button>

        <div className="flex justify-end gap-3 mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
          >
            Add Subscription Rules
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSubscriptionRules;
