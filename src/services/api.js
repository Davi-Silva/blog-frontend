import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cryptic-activist-backend.herokuapp.com',
});

export default api;
