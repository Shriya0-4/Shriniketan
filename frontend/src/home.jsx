import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import TotalExpense from './TotalExpense'
function Home() {
  const [totalExpenses, setTotalExpenses] = useState(0);
  useEffect(() => {
    const fetchTotalExpenses = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/expenses/total');
        setTotalExpenses(res.data.total);
      } catch (error) {
        console.error('Error fetching total expenses:', error);
      }
    };
    fetchTotalExpenses();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center p-10 ">
        <h1 className="text-3xl font-bold mb-4">Welcome To Shriniketan!</h1>
        <div className="bg-white shadow-lg rounded-lg p-8 border m-8 w-full max-w-md text-center">
          <h2 className="text-xl text-sky-500 font-semibold">
          <TotalExpense total={totalExpenses} />
          </h2>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 border bold w-full max-w-md text-center">
          <h2 className="text-xl text-sky-500 font-semibold">Individual Expense:  <span>&#8377;</span>{totalExpenses/8}</h2>
          </div>
      </div>
    </>
  )
}

export default Home  