import axios from "../../../api/axios.js";
import { LOGIN_ROUTE } from "../../../utils/constant/routes.js";

export const loginApi = async (formData) => {
  const response = await axios.post(LOGIN_ROUTE, formData);
  return response.data;
};
