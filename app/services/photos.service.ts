import axios from "axios";
import type { Photo } from "~/types/photo.type";

const baseURL = import.meta.env.VITE_API_URL;

export const getPhotosByAlbumId = async (albumId: number): Promise<Photo[]> => {
  const response = await axios.get(`${baseURL}/photos`, {
    params: { albumId },
  });
  return response.data;
};
