import mongoose from 'mongoose';

const spendSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
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
  category: {
    type: String,
    enum: ['Comida', 'Servicios', 'Gastos varios', 'Transporte', 'Salud'], // Opciones válidas
    required: [true, 'La categoría es obligatoria'],
  },
  email: {
    type: String,
    required: [true, 'El correo electrónico es obligatorio'],
    lowercase: true,
    trim: true,
    match: [/\S+@\S+\.\S+/, 'Por favor ingrese un correo electrónico válido'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Spend = mongoose.model('Spend', spendSchema);
export default Spend;
