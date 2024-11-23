import React, { useState } from 'react';

// components/Spend.jsx
const Spend = ({ _id, title, description, amount, onDelete }) => {
  const [categoria, setCategoria] = useState('Comida');
  const categorias = [
    'Comida',
    'Servicios',
    'Gastos varios',
    'Transporte',
    'Salud',
  ];

  const handleCategoriaClick = (categoriaSeleccionada) => {
    setCategoria(categoriaSeleccionada);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-full max-w-sm">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-500 text-sm">Monto:</span>
        <span className="text-green-600 font-bold text-2xl">${amount}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {categorias.map((categoriaOption) => (
          <div
            key={categoriaOption}
            onClick={() => handleCategoriaClick(categoriaOption)}
            className={`cursor-pointer px-4 py-2 rounded-md text-sm font-medium text-white text-center transition-colors duration-200 ease-in-out ${
              categoria === categoriaOption
                ? 'bg-indigo-600'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          >
            {categoriaOption}
          </div>
        ))}
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <span>Categoría seleccionada: </span>
        <span className="font-semibold">{categoria}</span>
      </div>

      {/* Botón para eliminar la tarjeta */}
      <button
        onClick={() => onDelete(_id)} // Pasar el _id al hacer clic en el botón
        className="mt-6 bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
      >
        Eliminar
      </button>
    </div>
  );
};

export default Spend;
