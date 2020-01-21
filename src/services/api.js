import axios from 'axios';

const api = axios.create({
  baseURL: 'http://34.205.75.176:5000',
});

export default api;
