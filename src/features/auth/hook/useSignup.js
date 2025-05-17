import { useState } from "react";
import { signupApi } from "../api/signupApi.js";

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const data = await signupApi(formData);
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

  return { signup, loading, error };
};
