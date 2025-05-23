import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const getAlbums = async (page: number, pageSize: number) => {
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
