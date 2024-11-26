// components/Spend.jsx
const Spend = ({
  title,
  description,
  amount,
  categoria,
  createdAt,
  onDelete,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-full max-w-sm">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

      <h3 className="text-sm text-gray-500">{createdAt}</h3>
      <p className="text-gray-600 mt-2">{description}</p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-gray-500 text-sm">Monto:</span>
        <span className="text-green-600 font-bold text-2xl">${amount}</span>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <span>Categoría: </span>
        <span className="font-semibold">{categoria}</span>
      </div>

      {/* Botón para eliminar la tarjeta */}
      <button
        onClick={onDelete} // Pasar la función de eliminación
        className="mt-6 bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
      >
        Eliminar
      </button>
    </div>
  );
};

export default Spend;
