export default {
  required: {
    value: true,
    message: 'Campo requerido',
  },
  minLength: (value) => ({
    value,
    message: `Debe tener un minimo de ${value} caracteres`,
  }),
  maxLength: (value) => ({
    value,
    message: `Debe tener un maximo de ${value} caracteres`,
  }),
  email: {
    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/,
    message: 'Correo invalido',
  },
  noEmptySpace: {
    value: /^[^\s].*/,
    message: 'No se permiten espacios en blanco',
  },
  letters: {
    value: /^[A-Za-z0-9., áéíóúñÁÉÍÓÚÑ]*$/,
    message: 'No se permite caracteres especiales',
  },
  decimal: {
    value: /^[0-9]*(\.\d{0,2})?$/,
    message: 'Solo se permiten 2 decimales',
  },
  number: {
    value: /^[0-9]*$/,
    message: 'Solo se permiten numeros',
  },
  phone: {
    value: /\(?([0-9]{4})\2([0-9]{4})/,
    message: 'Debe ser un numero valido',
  },
  checkLength: (value) => value.split(' ')[0].includes('@') || value.split(' ').every((item) => item.length < 29) || 'Maximum number of characters exceeded',
  checkAmount: (value) => value > 0 || 'Amount must be greater than 0',
  checkNumbers: (value) => /^[0-9].*$/.test(value) || 'Only numbers are allowed',
  checkDecimals: (value) => /^[0-9]*(\.\d{0,2})?$/.test(value) || 'Only 2 decimals are allowed',
  checkUsername: (value) => /^[A-Za-z0-9]*$/.test(value) || 'Use just letters and numbers for username',
  checkDate: (value) => new Date(value) > new Date(new Date().setDate(new Date().getDate() - 1))
    || 'The deadline must be after today at least',
  oneOrMoreUpperCase: (value) => /[A-Z]+/.test(value) || 'Must contains at least one uppercase letter',
  oneOrMoreLowerCase: (value) => /[a-z]+/.test(value) || 'Must contains at least one lowercase letter',
  oneOrMoreNumbers: (value) => /[0-9]+/.test(value) || 'Must contains at least one number',
};
