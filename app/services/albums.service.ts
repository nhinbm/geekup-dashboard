import axios from "axios";

export const getAlbums = async (page: number, pageSize: number) => {
  const start = (page - 1) * pageSize;
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/albums",
    {
      params: {
        _start: start,
        _limit: pageSize,
      },
    }
  );

  return {
    data: response.data,
    total: Number(response.headers["x-total-count"]),
  };
};
