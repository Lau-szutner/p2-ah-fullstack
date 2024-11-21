import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import * as yup from 'yup';
import Cookies from 'js-cookie'; // Importamos js-cookie para manejar cookies

// Validación de formulario con Yup
const registerValidationSchema = yup.object({
  email: yup
    .string()
    .email('Debe ser un correo electrónico válido')
    .required('El correo electrónico es obligatorio'),
  password: yup
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required('Debes confirmar tu contraseña'),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleRegister = async (data) => {
    try {
      // Enviar los datos al servidor
      const response = await axios.post(
        'http://localhost:3000/auth/register',
        data
      );

      // Aquí guardamos el token en una cookie
      Cookies.set('token', response.data.token, { expires: 7 }); // Guardamos el token con un tiempo de expiración de 7 días

      console.log(
        'Registro exitoso, token almacenado en cookies:',
        response.data.token
      );

      // Aquí puedes redirigir o hacer cualquier otra acción después del registro
      // history.push('/dashboard');  // Si estás usando React Router
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegister)} // Pasamos la función handleRegister
      className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto space-y-6 text-black"
    >
      <h2 className="text-2xl font-semibold text-gray-800">
        Registro de Usuario
      </h2>

      {/* Email */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Correo Electrónico
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={`w-full p-3 border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          {...register('password')}
          className={`w-full p-3 border ${
            errors.password ? 'border-red-500' : 'border-gray-300'
          } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="space-y-2">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700"
        >
          Confirmar Contraseña
        </label>
        <input
          id="confirmPassword"
          type="password"
          {...register('confirmPassword')}
          className={`w-full p-3 border ${
            errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
          } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Registrar
      </button>
      <button
        type="submit"
        className="w-full py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Iniciar sesion
      </button>
    </form>
  );
};

export default RegisterForm;
