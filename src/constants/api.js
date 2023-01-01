import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.alquran.cloud/v1/',
  headers: { Accept: 'application/json' },
});

export default api;
