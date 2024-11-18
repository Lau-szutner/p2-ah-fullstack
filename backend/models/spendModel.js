import mongoose from 'mongoose';

const spendSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Relación con el usuario
  title: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true,
  },
  amount: {
    type: Number,
    required: [true, 'El monto es obligatorio'],
    min: [0, 'El monto no puede ser negativo'], // Validación para asegurar que el monto sea positivo
  },
  description: {
    type: String,
    trim: true,
  },
  category: {
    // Agregar una categoría opcional para el gasto
    type: String,
    enum: ['Alimentación', 'Transporte', 'Entretenimiento', 'Salud', 'Otros'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Spend = mongoose.model('Spend', spendSchema);

export default Spend;
