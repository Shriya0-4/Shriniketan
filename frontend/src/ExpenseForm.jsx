import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({ name: '', amount: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.amount) {
      alert('Please fill out both fields');
      return;
    }
    onAddExpense(formData);
    setFormData({ name: '', amount: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Expense Name"
        className="border p-2 rounded w-full"
        required
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        className="border p-2 rounded w-full"
        required
      />
      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
