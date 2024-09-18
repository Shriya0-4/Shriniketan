import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="mt-6">
      <h2 className="font-bold text-xl mb-4">Expense List</h2>
      {expenses.length > 0 ? (
        <ul className="space-y-2">
          {expenses.map((expense) => (
            <li key={expense._id} className="flex justify-between border-b pb-2">
              <span>{expense.name}</span>
              <span className="text-gray-800">${expense.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No expenses added yet.</p>
      )}
    </div>
  );
};

export default ExpenseList;
