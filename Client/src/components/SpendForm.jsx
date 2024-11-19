import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { spendValidationSchema } from '../validation/spendValidationSchema';

const SpendForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(spendValidationSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Gastos</h2>

      {/* User ID */}
      <div className="space-y-2">
        <label
          htmlFor="userId"
          className="block text-sm font-medium text-gray-700"
        >
          ID de Usuario
        </label>
        <input
          id="userId"
          {...register('userId')}
          className={`w-full p-3 border ${
            errors.userId ? 'border-red-500' : 'border-gray-300'
          } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        />
        {errors.userId && (
          <p className="text-sm text-red-500">{errors.userId.message}</p>
        )}
      </div>

      {/* Title */}
      <div className="space-y-2">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Título
        </label>
        <input
          id="title"
          {...register('title')}
          className={`w-full p-3 border ${
            errors.title ? 'border-red-500' : 'border-gray-300'
          } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        />
        {errors.title && (
          <p className="text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      {/* Amount */}
      <div className="space-y-2">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Monto
        </label>
        <input
          id="amount"
          type="number"
          {...register('amount')}
          className={`w-full p-3 border ${
            errors.amount ? 'border-red-500' : 'border-gray-300'
          } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        />
        {errors.amount && (
          <p className="text-sm text-red-500">{errors.amount.message}</p>
        )}
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Descripción
        </label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <textarea
              id="description"
              {...field}
              className={`w-full p-3 border ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
          )}
        />
        {errors.description && (
          <p className="text-sm text-red-500">{errors.description.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Enviar
      </button>
    </form>
  );
};

export default SpendForm;
