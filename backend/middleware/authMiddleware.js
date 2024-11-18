// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const JWT_SECRET = process.env.JWT_SECRET || 'clave_secreta';

export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]; // Obtener el token de la cabecera

      const decoded = jwt.verify(token, JWT_SECRET); // Verificar el token

      req.user = await User.findById(decoded.id).select('-password'); // Obtener el usuario del token

      next(); // Continuar con la siguiente función
    } catch (error) {
      res.status(401).json({ message: 'No autorizado, token inválido' }); // Token no válido
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'No autorizado, falta token' }); // Si no hay token
  }
};
