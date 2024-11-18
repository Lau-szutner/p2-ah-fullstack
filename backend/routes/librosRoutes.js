import express from 'express';
import {
  getLibros,
  createLibros,
  getBookById,
  deleteBook,
  updateBookById,
  getBookByTitle,
  getFilteredBooks,
  getSortBooks
} from '../controllers/librosController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Rutas más específicas primero
router.get('/sort', protect, getSortBooks); // Ruta específica para ordenar
router.get('/filter', protect, getFilteredBooks); // Ruta para filtrar libros
router.get('/title/:title', protect, getBookByTitle); // Ruta para buscar por título

// Luego las rutas con parámetros dinámicos
router.get('/:id', protect, getBookById); // Ruta dinámica para obtener libro por ID
router.delete('/:id', protect, deleteBook); // Ruta para eliminar por ID
router.put('/:id', protect, updateBookById); // Ruta para actualizar por ID

// Rutas generales
router.get('/', protect, getLibros); // Obtener todos los libros
router.post('/', protect, createLibros); // Crear un nuevo libro

export default router;
