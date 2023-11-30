import axios from 'axios';

export const instace = axios.create({
  baseURL: 'https://sharemindapp.com/api/v0',
});
