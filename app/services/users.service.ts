import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const getUsers = async () => {
  const response = await axios.get(`${baseURL}/users`);

  return {
    data: response.data,
    total: Number(response.headers["x-total-count"]),
  };
};

export const getUserById = async (userId: number) => {
  const response = await axios.get(`${baseURL}/users/${userId}`);
  return response.data;
};
