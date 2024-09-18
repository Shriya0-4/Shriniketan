import React from 'react';

const TotalExpenses = ({ total }) => {
  const date=new Date();
  const month = date.getMonth();
  const monthNames=['January','February','March','April','May','June','July','August','September','October','November','December'];
  return (
    <div className=" p-4 bg-blue-50 border rounded">
      <h1 className="font-bold text-l">Total Expenses for : {monthNames[month]}</h1>
      <p className="text-gray-800 text-lg">  <span>&#8377;</span> {total.toFixed(2)}</p>
    </div>
  );
};

export default TotalExpenses;
