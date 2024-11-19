import React from 'react';

const Header = () => {
  return (
    <nav className="w-full bg-teal-500 p-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <img
          src=""
          alt="Logo"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <span className="text-white text-2xl font-semibold">Mi App</span>
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
      </ul>
    </nav>
  );
};

export default Header;
