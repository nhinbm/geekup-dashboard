import axios from "axios";
import type { Album, GetAllAlbumsResponse } from "~/types/album.type";

const baseURL = import.meta.env.VITE_API_URL;

export const getAlbums = async (
  page: number,
  pageSize: number
): Promise<GetAllAlbumsResponse> => {
  const start = (page - 1) * pageSize;
  const response = await axios.get(`${baseURL}/albums`, {
    params: {
      _start: start,
      _limit: pageSize,
    },
  });

  return {
    data: response.data,
    total: Number(response.headers["x-total-count"]),
  };
};

export const getAlbumById = async (userId: number): Promise<Album> => {
  const response = await axios.get(`${baseURL}/albums/${userId}`);
  return response.data;
};

export const getAlbumsByUserId = async (userId: number): Promise<Album[]> => {
  const response = await axios.get(`${baseURL}/albums`, {
    params: { userId },
  });
  return response.data;
};
