import { formValidator } from './formValidator';

export const newMessage = {
  name: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

export const newMessageValidationSchema = {
  name: formValidator()
    .string()
    .required('Requerimos tu nombre')
    .min(3, 'Tu nombre debe tener mínimo 3 letras'),
  email: formValidator()
    .string()
    .required('Requerimos tu email')
    .email(),
  message: formValidator()
    .string()
    .required('Cuentanos, ¿qué quieres saber?')
    .min(10, 'El mensaje debe tener al menos 10 letras'),
};

