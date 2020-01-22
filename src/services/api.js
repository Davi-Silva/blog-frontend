import axios from 'axios';

const api = axios.create({
  baseURL: 'http://52.70.19.141:5000',
});

export default api;
