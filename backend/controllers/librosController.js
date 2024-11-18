import librosModel from '../models/librosModel.js';

export const getLibros = async (req, res) => {
  try {
    // Aquí estamos usando .populate() para obtener los detalles del autor
    const libros = await librosModel.find().populate('author');
    res.json(libros);
  } catch (error) {
    res.status(400).json({ json: error.message });
  }
};

export const createLibros = async (req, res) => {
  try {
    const libro = new librosModel({ ...req.body });
    const newLibro = await libro.save();
    res.json(newLibro);
  } catch (error) {
    res.status(400).json({ json: error.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await librosModel.findById(req.params.id).populate('author');
    if (!book) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
    res.json(book); // Asegúrate de enviar el libro encontrado
  } catch (error) {
    console.error('Error al buscar el libro:', error); // Log para depuración
    res.status(400).json({ error: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const update = await librosModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(update);
  } catch (error) {
    res.status(400).json({ json: error.messages });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const deleted = await librosModel.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }

    res.send({ message: 'Libro eliminado correctamente', deleted });
  } catch (error) {
    console.error('Error al eliminar el libro:', error); // Agrega este log
    res.status(400).json({ json: error.message }); // Cambié a error.message
  }
};

export const updateBookById = async (req, res) => {
  try {
    const updatedBook = await librosModel.findByIdAndUpdate(
      req.params.id, // El ID del documento a actualizar
      { $set: req.body }, // Los campos que deseas actualizar
      { new: true } // Esta opción devuelve el documento actualizado
    );
    if (!updatedBook) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getBookByTitle = async (req, res) => {
  try {
    const bookTitle = req.params.title;
    console.log(bookTitle);
    const book = await librosModel.findOne({ title: bookTitle });

    if (!book) {
      return res.status(404).json({ message: 'libro no encontrado' });
    }

    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para filtrar libros por título, año y categoría
export const getFilteredBooks = async (req, res) => {
  try {
    const { title, yearPublished, genre } = req.query; // Obtener parámetros de consulta

    const filters = {};

    // Agregar filtros según los parámetros proporcionados
    if (title) {
      const regex = new RegExp(title, 'i'); // Insensible a mayúsculas
      filters.title = regex;
    }

    if (yearPublished) {
      filters.yearPublished = yearPublished; // Filtrar por año
    }

    if (genre) {
      filters.genre = genre; // Filtrar por género
    }

    // Buscar libros con los filtros aplicados
    const books = await librosModel.find(filters).populate('author');

    if (books.length === 0) {
      return res.status(404).json({ message: 'Ningún libro encontrado' });
    }

    res.json(books); // Enviar libros que coinciden
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



export const getSortBooks = async (req, res) => {
  try {
    const sortField = req.query.sort || 'title';
    const sortOrder = req.query.order === 'desc' ? -1 : 1;
    const libros = await librosModel.find().sort({ [sortField]: sortOrder }).populate('author');

    res.json(libros); 
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los libros', error: error.message });
  }
};
