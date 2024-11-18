import React from 'react';

const Header = () => {
  return (
    <nav className="w-full bg-blue-500 p-5 flex items-center justify-between sticky top-0 z-50 shadow-md">
      <div className="flex items-center space-x-3">
        {/* Logo */}
        <img src="" alt="Logo" className="w-10 h-10 rounded-full" />
        <span className="text-white text-xl font-semibold">Mi App</span>
      </div>
      {/* Navegación */}
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="text-white hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-white hover:underline">
            Calendario
          </a>
        </li>
        <li>
          <a href="#services" className="text-white hover:underline">
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
