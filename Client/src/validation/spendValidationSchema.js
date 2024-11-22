import * as yup from 'yup';

export const spendValidationSchema = yup.object().shape({
  title: yup.string().required('El título es obligatorio.'),
  amount: yup
    .number()
    .typeError('El monto debe ser un número.')
    .positive('El monto debe ser positivo.')
    .required('El monto es obligatorio.'),
  description: yup.string().required('La descripción es obligatoria.'),
});
