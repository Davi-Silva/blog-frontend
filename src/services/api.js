import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://course-backend.herokuapp.com',
  baseURL: 'http://localhost:5000',
});

export default api;
