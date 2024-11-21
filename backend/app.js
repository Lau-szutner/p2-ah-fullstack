import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import librosRoutes from './routes/librosRoutes.js';
import spendRoutes from './routes/spendRoutes.js';
import authRoutes from './routes/authRoutes.js'; // Rutas de autenticación
import { protect } from './middleware/authMiddleware.js'; // Middleware de autenticación
import cors from 'cors'; // Importa el paquete cors

dotenv.config();

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Habilitar CORS para todas las rutas

// Si deseas habilitar CORS solo para un dominio específico:
// const corsOptions = {
//   origin: 'http://localhost:5174', // Cambia este dominio a tu frontend
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// };
app.use(
  cors({
    origin: 'http://localhost:5174', // Cambia esto al dominio de tu frontend
    credentials: true, // Permite el envío de cookies
  })
);

// Middlewares
app.use(express.json()); // Solo esta línea es suficiente para parsear JSON
app.use(express.static(path.join(__dirname, 'public'))); // Archivos estáticos desde 'public'

// Rutas
app.get('/api/data', (req, res) => {
  res.json({ message: 'this is a message from cors' });
});
app.use('/libros', protect, librosRoutes); // Rutas de libros
app.use('/spend', protect, spendRoutes); // Rutas de gastos, protegidas
app.use('/auth', authRoutes); // Rutas de autenticación, no protegidas

// Página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rutas para las vistas de login y registro
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

// Conectar con MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Conexión con MongoDB exitosa'))
  .catch((err) => console.log('Error en la conexión', err));

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
