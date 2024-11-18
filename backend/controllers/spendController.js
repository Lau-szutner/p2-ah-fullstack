// controllers/spendController.js
import Spend from '../models/spendModel.js';

// Obtener los gastos del usuario autenticado
export const getSpend = async (req, res) => {
  try {
    const userId = req.user._id; // Obtener el userId del usuario autenticado
    const spends = await Spend.find({ userId }); // Buscar los gastos del usuario

    res.json(spends); // Retornar los gastos encontrados
  } catch (error) {
    res.status(400).json({ message: error.message }); // Manejo de errores
  }
};

// Crear un nuevo gasto
export const createSpend = async (req, res) => {
  const { title, amount, description } = req.body;
  const userId = req.user._id; // Obtener el userId del usuario autenticado

  try {
    // Crear un nuevo gasto asociado al usuario autenticado
    const newSpend = new Spend({
      userId, // Asignar el userId al gasto
      title,
      amount,
      description,
    });

    const savedSpend = await newSpend.save(); // Guardar el gasto en la base de datos
    res.status(201).json(savedSpend); // Retornar el gasto guardado
  } catch (error) {
    res.status(400).json({ message: error.message }); // Manejo de errores
  }
};
