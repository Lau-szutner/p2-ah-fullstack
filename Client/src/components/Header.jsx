import axios from 'axios';
import React from 'react';

const Header = () => {
  // Método para manejar el logout
  const handleLogOut = async () => {
    try {
      // Realiza la solicitud al backend
      const response = await axios.post(
        'http://localhost:3000/auth/logout', // URL del endpoint
        {}, // Cuerpo vacío
        { withCredentials: true } // Incluye las cookies
      );

      // Si es exitoso, redirigir o realizar alguna acción
      console.log(response.data.message);
      // Por ejemplo, redirigir al usuario:
      // window.location.href = '/login';
    } catch (error) {
      console.error(
        'Error al cerrar sesión:',
        error.response?.data || error.message
      );
    }
  };

  return (
    <nav className="w-full bg-teal-500 p-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <img
          src=""
          alt="Logo"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <span className="text-white text-2xl font-semibold">Spend Tracker</span>
      </div>

      {/* Navegación */}
      <ul className="flex space-x-8">
        <li>
          <a
            href="#home"
            className="text-white text-lg font-medium hover:text-blue-300 transition-colors duration-200"
          >
            Gastos
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-white text-lg font-medium hover:text-blue-300 transition-colors duration-200"
          >
            Calendario
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="text-white text-lg font-medium hover:text-blue-300 transition-colors duration-200"
          >
            Servicios
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-white text-lg font-medium hover:text-blue-300 transition-colors duration-200"
          >
            Contacto
          </a>
        </li>
        <li>
          <button
            onClick={handleLogOut} // Llama al método de logout aquí
            className="text-white text-lg bg-red-500 p-4 rounded-md font-medium hover:text-blue-300 transition-colors duration-200"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
