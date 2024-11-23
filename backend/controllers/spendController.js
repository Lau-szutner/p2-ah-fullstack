// controllers/spendController.js
import Spend from '../models/spendModel.js';

// Obtener los gastos del usuario autenticado
export const getSpend = async (req, res) => {
  try {
    const { email } = req.user; // Obtener el email del usuario autenticado

    // Verificar si el email está presente
    if (!email) {
      return res.status(400).json({ message: 'Email no proporcionado' });
    }

    // Filtrar los gastos por el email del usuario autenticado
    const spends = await Spend.find({ email });

    res.status(200).json(spends); // Retornar los gastos encontrados
  } catch (error) {
    console.error('Error al obtener los gastos:', error);
    res.status(500).json({ message: 'Error al obtener los gastos' });
  }
};

export const createSpend = async (req, res) => {
  const { title, amount, description, email, date } = req.body; // Desestructurar email de la solicitud
  const userId = req.user._id; // Obtener el userId del usuario autenticado

  try {
    // Verificar si el email está presente
    if (!email) {
      return res.status(400).json({ message: 'El email es obligatorio' });
    }

    // Crear un nuevo gasto asociado al usuario autenticado y con el email
    const newSpend = new Spend({
      userId, // Asignar el userId al gasto
      title,
      amount,
      description,
      email, // Guardar el email en el gasto
      createdAt: new Date(), // Asignar la fecha de creación manualmente si es necesario
    });

    const savedSpend = await newSpend.save(); // Guardar el gasto en la base de datos
    res.status(201).json(savedSpend); // Retornar el gasto guardado
  } catch (error) {
    res.status(400).json({ message: error.message }); // Manejo de errores
  }
};

// controllers/spendController.js
export const deleteSpend = async (req, res) => {
  const { id } = req.params; // Obtener el ID del gasto desde los parámetros de la URL

  try {
    const deletedSpend = await Spend.findByIdAndDelete(id); // Eliminar el gasto con el ID proporcionado

    if (!deletedSpend) {
      return res.status(404).json({ message: 'Gasto no encontrado' });
    }

    res.status(200).json({ message: 'Gasto eliminado con éxito' });
  } catch (error) {
    console.error('Error al eliminar el gasto:', error);
    res.status(500).json({ message: 'Error al eliminar el gasto' });
  }
};
