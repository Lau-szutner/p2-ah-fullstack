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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Spend = mongoose.model('Spend', spendSchema);
export default Spend;
