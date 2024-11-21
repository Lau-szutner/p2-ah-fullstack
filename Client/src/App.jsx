import './App.css';
import Header from './components/Header';
import Spend from './components/Spend';
import SpendForm from './components/SpendForm';
import RegisterForm from './components/RegisterForm';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // Importamos js-cookie

function App() {
  // Estado para manejar el token
  const [token, setToken] = useState(null);

  // Consumir la cookie al cargar el componente
  useEffect(() => {
    const savedToken = Cookies.get('token'); // Obtener el token de la cookie
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  // Función para manejar el envío del formulario
  const handleFormSubmit = (data) => {
    console.log('Datos enviados:', data);
  };

  // Estado para manejar la visibilidad del formulario
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Función para alternar la visibilidad del formulario
  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-teal-950">
      <Header className="w-full" />

      <main className="flex-grow p-6 bg-teal-800 shadow-md rounded-lg mx-4 sm:mx-10 mt-6 text-white">
        <h1 className="text-3xl font-bold">Bienvenido a mi App</h1>
        <p className="mt-4">
          Aquí puedes agregar el contenido principal de tu aplicación.
        </p>

        {/* Componente Spend */}
        <div className="mt-6">
          <Spend title="Escuela" description="Davinci" amount="40000" />
        </div>

        {/* Botón para abrir/cerrar el formulario */}
        <button
          onClick={toggleFormVisibility}
          className="mt-6 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors"
        >
          {isFormVisible ? 'Cerrar Formulario' : 'Agregar Nuevo Gasto'}
        </button>

        {/* Mostrar formulario si está visible */}
        {isFormVisible && (
          <section className="mt-10">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Agregar nuevo gasto
            </h2>
            <SpendForm onSubmit={handleFormSubmit} />
          </section>
        )}

        {/* Mostrar el token si está disponible */}
        {token && (
          <div className="mt-6 p-4 bg-teal-700 rounded-lg">
            <h3 className="text-lg font-semibold">Token de Autenticación:</h3>
            <p className="text-sm">{token}</p>
          </div>
        )}

        <RegisterForm />
      </main>
    </div>
  );
}

export default App;
