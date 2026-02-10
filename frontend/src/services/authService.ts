const API = import.meta.env.VITE_API_BASE;

export const login = () => {
  window.location.href = `${API}/auth/login`;
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};

export const getToken = () => localStorage.getItem("token");
