// routes/spendRoutes.js
import express from 'express';
import { protect } from '../middleware/authMiddleware.js'; // Middleware para proteger las rutas
import { getSpend, createSpend } from '../controllers/spendController.js'; // Controladores de gastos

const router = express.Router();

// Ruta para obtener los gastos del usuario autenticado
router.get('/', protect, getSpend); // protect asegura que el usuario esté autenticado

// Ruta para crear un nuevo gasto, solo accesible para usuarios autenticados
router.post('/', protect, createSpend); // protect asegura que el usuario esté autenticado

export default router;
