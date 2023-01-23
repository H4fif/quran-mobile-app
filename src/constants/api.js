import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.alquran.cloud/v1/',
  headers: { Accept: 'application/json' },
});

export const initialPage = {
  offset: 0,
  limit: 10,
};
