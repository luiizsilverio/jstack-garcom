import axios from 'axios';

console.log(`http://${import.meta.env.VITE_API_URL}`)
export const api = axios.create({
  baseURL: `http://${import.meta.env.VITE_API_URL}`
});
