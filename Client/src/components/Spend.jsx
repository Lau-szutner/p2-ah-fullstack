import React, { useState } from 'react';

const Spend = ({ title, description, amount }) => {
  // Estado para manejar la categoría seleccionada
  const [categoria, setCategoria] = useState('Comida'); // Valor inicial de la categoría

  // Array con las categorías disponibles
  const categorias = [
    'Comida',
    'Servicios',
    'Gastos varios',
    'Transporte',
    'Salud',
  ];

  // Función para manejar el clic en una categoría
  const handleCategoriaClick = (categoriaSeleccionada) => {
    setCategoria(categoriaSeleccionada); // Actualiza el estado con la categoría seleccionada
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-full max-w-sm">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-500 text-sm">Monto:</span>
        <span className="text-green-600 font-bold text-xl">${amount}</span>
      </div>

      {/* Categorías */}
      <div className="mt-4 flex flex-wrap gap-2">
        {categorias.map((categoriaOption) => (
          <div
            key={categoriaOption}
            onClick={() => handleCategoriaClick(categoriaOption)}
            className={`cursor-pointer p-2 rounded-sm text-white text-center ${
              categoria === categoriaOption
                ? 'bg-blue-500' // Estilo para la categoría seleccionada
                : 'bg-gray-300'
            }`}
          >
            {categoriaOption}
          </div>
        ))}
      </div>

      {/* Mostrar la categoría seleccionada */}
      <div className="mt-4 text-sm text-gray-500">
        <span>Categoría seleccionada: </span>
        <span className="font-bold">{categoria}</span>
      </div>
    </div>
  );
};

export default Spend;
