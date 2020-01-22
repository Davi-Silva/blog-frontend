import axios from 'axios';

const api = axios.create({
  baseURL: 'http://34.196.97.115:5000',
});

export default api;
