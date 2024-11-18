import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'El título es obligatorio'],
    trim: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId, // Referencia a un ObjectId
    ref: 'Author', // El modelo al que hace referencia
    required: [true, 'El autor es obligatorio'],
  },
  yearPublished: {
    type: Number,
    required: [true, 'El año de publicación es obligatorio'],
    min: [1000, 'El año de publicación debe ser un valor válido'],
  },
  genre: {
    type: String,
    required: [true, 'El género es obligatorio'],
    enum: [
      'Ficción',
      'No ficción',
      'Ciencia ficción',
      'Fantasía',
      'Misterio',
      'Biografía',
    ],
  },
  pages: {
    type: Number,
    required: [true, 'El número de páginas es obligatorio'],
    min: [1, 'El libro debe tener al menos una página'],
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

const Book = mongoose.model('Book', bookSchema);

export default Book;
