import './App.css';
import Header from './components/Header.jsx';

import Home from './components/Home.jsx';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // Importamos js-cookie
import { Routes, Route } from 'react-router-dom';

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

  return (
    <div className="min-h-screen flex flex-col bg-teal-950">
      <Header className="w-full" />

      {/* Mostrar el email si existe */}
      {email && (
        <div className="text-white m-10">
          <h1 className="text-3xl font-bold text-center ">
            Bienvenido a mi App
          </h1>
          <p className="mt-4 text-center">
            Bienvenido/a, <span className="font-bold">{email}</span>
          </p>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home email={email} />} />
        <Route path="/contacto"></Route>
      </Routes>
    </div>
  );
}

export default App;
