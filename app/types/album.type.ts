export interface Album {
  id: number;
  userId: number;
  title: string;
}

export type GetAllAlbumsResponse = {
  data: Album[];
  total: number;
};
