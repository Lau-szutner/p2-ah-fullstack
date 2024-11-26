// import React, { createContext, useState, useContext, useEffect } from 'react';
// import Cookies from 'js-cookie';

// // Creamos el contexto
// const AuthContext = createContext();

// // Proveedor del contexto
// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Verificamos si ya hay un token en las cookies al cargar el componente
//   useEffect(() => {
//     const token = Cookies.get('token');
//     if (token) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const login = (token) => {
//     Cookies.set('token', token, { expires: 7 });
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     Cookies.remove('token');
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook para acceder al contexto
// export const useAuth = () => useContext(AuthContext);
