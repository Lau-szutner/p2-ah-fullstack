import React from 'react';

const Spend = ({ title, description, amount }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-full max-w-sm">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-500 text-sm">Monto:</span>
        <span className="text-green-600 font-bold text-xl">${amount}</span>
      </div>
    </div>
  );
};

export default Spend;
