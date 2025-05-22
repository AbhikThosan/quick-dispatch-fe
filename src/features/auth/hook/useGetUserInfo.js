import { useState } from "react";
import { getUserInfoApi } from "../api/getUserInfoApi.js";

export const useGetUserInfo = () => {
  const [loading, setLoading] = useState(false);

  const userData = async () => {
    setLoading(true);
    try {
      const data = await getUserInfoApi();
      setLoading(false);
      return data;
    } catch (err) {
      setLoading(false);
      const errorMessage =
        err.response?.data || "Failed to fetch user information";
      throw new Error(errorMessage);
    }
  };

  return { userData, loading };
};
