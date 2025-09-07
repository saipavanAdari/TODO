import axios from 'axios';
// your backend URL
const API = axios.create({
  // baseURL: 'http://localhost:5001', 
  baseURL: 'https://todo-xzkz.onrender.com',
});

// Send JWT token with each request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
