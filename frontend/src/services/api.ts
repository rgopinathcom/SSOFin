import axios from "axios";

const API = import.meta.env.VITE_API_BASE;

const instance = axios.create({
  baseURL: API,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
