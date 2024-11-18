
// routes/authRoutes.js
import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

// Ruta para el registro de usuarios
router.post('/register', registerUser);

// Ruta para el login de usuarios
router.post('/login', loginUser);

export default router;
