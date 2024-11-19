import * as Yup from 'yup';

export const spendValidationSchema = Yup.object().shape({
  userId: Yup.string().required('El usuario es obligatorio'),

  title: Yup.string().trim().required('El título es obligatorio'),

  amount: Yup.number()
    .typeError('El monto debe ser un número')
    .required('El monto es obligatorio'),

  description: Yup.string().trim().notRequired(), // La descripción es opcional
});
