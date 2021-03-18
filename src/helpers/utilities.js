import { toast } from 'react-toastify';

export const fireToast = (type, message, options = {}) => toast[type](message, options);

export const getDayOfTheWeek = (day) => {
  switch (day) {
    case 0:
      return 'Domingo';
    case 1:
      return 'Lunes';
    case 2:
      return 'Martes';
    case 3:
      return 'Miercoles';
    case 4:
      return 'Jueves';
    case 5:
      return 'Viernes';
    case 6:
      return 'Sabado';
    default:
      return 'Dia invalido';
  }
};

export const getMonth = (month) => {
  switch (month) {
    case 0:
      return 'enero';
    case 1:
      return 'febrero';
    case 2:
      return 'marzo';
    case 3:
      return 'abril';
    case 4:
      return 'mayo';
    case 5:
      return 'junio';
    case 6:
      return 'julio';
    case 7:
      return 'agosto';
    case 8:
      return 'septiembre';
    case 9:
      return 'octubre';
    case 10:
      return 'noviembre';
    case 11:
      return 'diciembre';
    default:
      return 'mes invalido';
  }
};

export const getTodayDate = () => {
  const date = new Date();

  const dayMonth = date.getDate();

  const dayOfWeek = date.getDay();

  const month = date.getMonth();

  const year = date.getFullYear();

  return `${getDayOfTheWeek(dayOfWeek)}, ${dayMonth} de ${getMonth(month)} de ${year}`;
};

export const formatDate = (date) => {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  return `${day}/${month}/${year}`;
};

export const dateDiffInDays = (a, b) => {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / MS_PER_DAY);
};
