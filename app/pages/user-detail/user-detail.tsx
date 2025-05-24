import CardDetail from "~/components/card-detail";
import styles from "./user-detail.module.css";
import { Table } from "antd";
import type { Album } from "~/types/album.type";
import { ALBUMS_COLUMNS } from "./constants";
import { useLocation } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getAlbumsByUserId } from "~/services/albums.service";

const UserDetailPage: React.FC = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const id = parseInt(pathSnippets[1]);

  const {
    data: albumsData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["albums", id],
    queryFn: () => getAlbumsByUserId(id),
    enabled: !!id,
  });

  return (
    <CardDetail>
      <h4 className={styles.userData__header}>Albums</h4>
      <Table<Album>
        columns={ALBUMS_COLUMNS}
        dataSource={albumsData || []}
        pagination={false}
        loading={isLoading}
      />
    </CardDetail>
  );
};
export default UserDetailPage;
