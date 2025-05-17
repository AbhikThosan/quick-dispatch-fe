import axios from "../../../api/axios.js";
import { SIGNUP_ROUTE } from "../../../utils/constant/routes.js";

export const signupApi = async (formData) => {
  const response = await axios.post(SIGNUP_ROUTE, formData, {
    withCredentials: true,
  });
  return response.data;
};
