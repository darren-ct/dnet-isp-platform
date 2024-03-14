import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

export const authApi = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_AUTH_URL,
  headers: {
    Authorization: token ? `Bearer ${token}` : undefined,
    apikey: import.meta.env.VITE_SUPABASE_API_KEY,
  },
});

authApi.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    Authorization: token ? `Bearer ${token}` : undefined,
    apikey: import.meta.env.VITE_SUPABASE_API_KEY,
  },
});

api.interceptors.request.use((config) => {
  console.log("Run");
  const token = Cookies.get("token");
  if (token) config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});
