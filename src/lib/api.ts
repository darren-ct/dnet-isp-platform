import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

console.log({ token });

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    Authorization: token ? `Bearer ${token}` : undefined,
  },
});
