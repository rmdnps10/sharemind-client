import axios from 'axios';

export const instace = axios.create({
  baseURL: 'sharemindapp.com/api/v0',
});
