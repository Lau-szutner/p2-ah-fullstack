import express from 'express';
import {
  registerUser,
  loginUser,
  logoutUser,
} from '../controllers/authController.js';

const router = express.Router();

// Ruta para el registro de usuarios
router.post('/register', registerUser);

// Ruta para el login de usuarios
router.post('/login', loginUser);

// Ruta para el logout de usuarios
router.post('/logout', logoutUser);

export default router;
