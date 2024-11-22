import './App.css';
import Header from './components/Header.jsx';
import SpendForm from './components/SpendForm';
import RegisterForm from './components/RegisterForm';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // Importamos js-cookie

function App() {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null); // Nuevo estado para el email

  // Consumir las cookies al cargar el componente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Verificar si estamos en el cliente
      const savedToken = Cookies.get('token'); // Obtener el token de la cookie
      const savedEmail = Cookies.get('email'); // Obtener el email de la cookie
      if (savedToken) {
        setToken(savedToken);
      }
      if (savedEmail) {
        setEmail(savedEmail);
      }
    }
  }, []);

  const handleFormSubmit = (data) => {
    console.log('Datos enviados:', data);
  };

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-teal-950">
      <Header className="w-full" />

      <main className="flex-grow p-6 bg-teal-800 shadow-md rounded-lg mx-4 sm:mx-10 mt-6 text-white">
        <h1 className="text-3xl font-bold text-center">Bienvenido a mi App</h1>

        {/* Mostrar el email si existe */}
        {email && (
          <p className="mt-4 text-center">
            Bienvenido/a, <span className="font-bold">{email}</span>
          </p>
        )}

        {/* Mostrar formulario de registro si no hay token */}
        {!token ? (
          <section className="mt-10">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Regístrate para continuar
            </h2>
            <RegisterForm />
          </section>
        ) : (
          <>
            {/* Botón para abrir/cerrar el formulario de gasto */}
            <button
              onClick={toggleFormVisibility}
              className="mt-6 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors"
            >
              {isFormVisible ? 'Cerrar Formulario' : 'Agregar Nuevo Gasto'}
            </button>

            {/* Mostrar formulario de gasto si está visible */}
            {isFormVisible && (
              <section className="mt-10">
                <h2 className="text-xl font-semibold mb-4 text-center">
                  Agregar nuevo gasto
                </h2>
                <SpendForm email={email} onSubmit={handleFormSubmit} />
              </section>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
