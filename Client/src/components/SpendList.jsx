import React, { useEffect, useState } from 'react';
import Spend from './Spend.jsx'; // Asegúrate de que el path sea correcto

const SpendList = () => {
  const [spends, setSpends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener el token de las cookies
  const getTokenFromCookies = () => {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('token='));
    return token ? token.split('=')[1] : null;
  };

  // Función para obtener los gastos
  const fetchSpends = async () => {
    const token = getTokenFromCookies();

    if (!token) {
      setError('Token no encontrado en las cookies');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/spend/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Usa el token obtenido de las cookies
        },
      });

      if (!response.ok) {
        throw new Error('Error al obtener los gastos');
      }

      const data = await response.json();
      setSpends(data); // Guardar los gastos en el estado
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpends(); // Llamar a la API al cargar el componente
  }, []);

  // components/SpendList.jsx
  const handleDelete = async (id) => {
    const token = getTokenFromCookies();

    if (!token) {
      setError('Token no encontrado en las cookies');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/spend/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Usa el token obtenido de las cookies
        },
      });

      if (!response.ok) {
        throw new Error('Error al eliminar el gasto');
      }

      // Si la eliminación es exitosa, actualizar el estado para quitar el gasto de la lista
      setSpends(spends.filter((spend) => spend._id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <p>Cargando gastos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {spends.map((spend) => (
        <Spend
          key={spend._id}
          title={spend.title}
          description={spend.description}
          amount={spend.amount}
          createdAt={new Date(spend.createdAt).toLocaleString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',

            hour12: false,
          })} // Formateando la fecha directamente
          onDelete={() => handleDelete(spend._id)}
        />
      ))}
    </div>
  );
};

export default SpendList;
