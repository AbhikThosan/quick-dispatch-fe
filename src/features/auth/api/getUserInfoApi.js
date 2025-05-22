import axios from "../../../api/axios.js";
import { GET_USER_INFO } from "../../../utils/constant/routes.js";

export const getUserInfoApi = async () => {
  const response = await axios.get(GET_USER_INFO);
  return response.data;
};
