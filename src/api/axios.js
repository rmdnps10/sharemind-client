import axios from 'axios';

export const instace = axios.create({
  baseURL: 'http://sharemindapp.com/api/v0',
});
