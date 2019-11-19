import axios from 'axios';

export const apiAxios = axios.create({
  baseURL: process.env.VIRTUAL_HOST === 'localhost' ? 'http://localhost:9001' : `https://${process.env.VIRTUAL_HOST}`
});
