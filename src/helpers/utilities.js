import { toast } from 'react-toastify';

export const fireToast = (type, message, options = {}) => toast[type](message, options);
