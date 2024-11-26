import './App.css';
import Header from './components/Header.jsx';
import Home from './views/Home.jsx';
import SharedSpends from './components/SharedSpends.jsx';
import RegisterForm from './components/RegisterForm.jsx'; // Asegúrate de importar tu formulario de registro
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  // Consumir las cookies al cargar el componente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedToken = Cookies.get('token');
      const savedEmail = Cookies.get('email');
      setToken(savedToken || null);
      setEmail(savedEmail || null);
    }
  }, []);

  // Manejar logout (ejemplo básico)
  const handleLogout = () => {
    Cookies.remove('token');
    Cookies.remove('email');
    setToken(null);
    setEmail(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-950">
      <Header className="w-full" />

      {/* Mostrar el formulario de registro si no hay token */}
      {!token ? (
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4 text-center text-white">
            Regístrate para continuar
          </h2>
          <RegisterForm setToken={setToken} setEmail={setEmail} />
        </section>
      ) : (
        <>
          {/* Mostrar el contenido principal si hay token */}
          {email && (
            <div className="text-white m-10">
              <h1 className="text-3xl font-bold text-center">
                Bienvenido a mi App
              </h1>
              <p className="mt-4 text-center">
                Bienvenido/a, <span className="font-bold">{email}</span>
              </p>
              <button
                className="bg-red-500 text-white px-4 py-2 mt-4 rounded mx-auto block"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
          <Routes>
            <Route path="/" element={<Home email={email} />} />
            <Route path="/contacto" element={<div>Contacto</div>} />
            <Route path="/GastosCompartidos" element={<SharedSpends />}></Route>
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
