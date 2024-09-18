import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import TotalExpenses from './TotalExpense'
function Maintenance() {
    const [expenses, setExpenses] = useState([]);
    const [showForm, setShowForm] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchExpenses();
    fetchTotal();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/expenses');
      setExpenses(res.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const fetchTotal = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/expenses/total');
      setTotal(res.data.total);
    } catch (error) {
      console.error('Error fetching total expenses:', error);
    }
  };

  const handleAddExpense = async (expense) => {
    try {
      const res = await axios.post('http://localhost:4000/api/expenses', expense);
      setExpenses([...expenses, res.data]);
      fetchTotal();
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };
  return (
    <div className="pt-16 w-full flex flex-col items-center justify-center p-8 rounded">
    <div className="card bg-white shadow-lg w-4/5 h-full p-6 mx-auto border">
    <ExpenseList expenses={expenses} />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded m-4"
        onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add Expense'}
      </button>
      {showForm && <ExpenseForm onAddExpense={handleAddExpense} />}
      
      <TotalExpenses total={total} />
    </div>
  </div>
  )
}

export default Maintenance