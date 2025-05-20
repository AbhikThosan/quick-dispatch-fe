import { useState } from "react";
import { loginApi } from "../api/loginApi";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const data = await loginApi(formData);
      setLoading(false);
      return data;
    } catch (err) {
      setLoading(false);
      if (err.response && err.response.data) {
        setError(err.response.data);
      } else {
        setError("Something went wrong.");
      }
      throw err;
    }
  };

  return { login, loading, error };
};
