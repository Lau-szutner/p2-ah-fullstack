// models/spendModel.js
import mongoose from 'mongoose';

const spendSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }, // Relación con el usuario
  title: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true,
  },

  amount: {
    type: Number,
    required: [true, 'El monto es obligatorio'],
  },
  description: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'El correo electrónico es obligatorio'],
    lowercase: true, // Convertir a minúsculas para mantener consistencia
    trim: true, // Eliminar espacios extra
    match: [/\S+@\S+\.\S+/, 'Por favor ingrese un correo electrónico válido'], // Validación de formato de correo
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Spend = mongoose.model('Spend', spendSchema);
export default Spend;
