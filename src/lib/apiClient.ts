import axios from "axios";

export const fetchDataFromAPI = async () => {
  const { data } = await axios.get(process.env.API_BASE_URL + "/posts");
  return data;
};
