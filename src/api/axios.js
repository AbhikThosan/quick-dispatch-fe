import axios from "axios";

import { HOST } from "../utils/constant/routes.js";

const instance = axios.create({
  baseURL: HOST,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    }
    return Promise.reject(error);
  }
);

export default instance;
