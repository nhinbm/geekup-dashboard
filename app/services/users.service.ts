import axios from "axios";
import type { GetAllUsersResponse, User } from "~/types/user.type";

const baseURL = import.meta.env.VITE_API_URL;

export const getUsers = async (): Promise<GetAllUsersResponse> => {
  const response = await axios.get(`${baseURL}/users`);

  return {
    data: response.data,
    total: Number(response.headers["x-total-count"]),
  };
};

export const getUserById = async (userId: number): Promise<User> => {
  const response = await axios.get(`${baseURL}/users/${userId}`);
  return response.data;
};
