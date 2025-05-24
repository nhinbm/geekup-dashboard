import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router";
import CardDetail from "~/components/card-detail";
import { getAlbumById } from "~/services/albums.service";
import styles from "./album-data.module.css";
import { getPhotosByAlbumId } from "~/services/photos.service";
import { Image, List, Spin } from "antd";

const AlbumDetailPage: React.FC = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const id = parseInt(pathSnippets[1]);

  const { data: albumData, isLoading: isAlbumLoading } = useQuery({
    enabled: !!id,
    queryKey: ["album", id],
    queryFn: () => getAlbumById(id),
  });

  const albumId = albumData?.id;

  const { data: photos, isLoading: isPhotosLoading } = useQuery({
    enabled: !!albumId,
    queryKey: ["photos", albumId],
    queryFn: () => getPhotosByAlbumId(albumId!),
  });

  const getSafeThumbnailUrl = (url: string) => {
    if (url.startsWith("https://via.placeholder.com")) {
      return url.replace(
        "https://via.placeholder.com",
        "https://dummyjson.com/image"
      );
    }
    return url;
  };

  if (isAlbumLoading || isPhotosLoading) return <Spin fullscreen />;
  if (!albumData || !photos) return <div>Error loading data</div>;

  return (
    <CardDetail>
      <h4 className={styles.albumData__header}>{albumData.title}</h4>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={photos}
        renderItem={(photo) => (
          <List.Item key={photo.id}>
            <Image
              src={getSafeThumbnailUrl(photo.thumbnailUrl)}
              alt={photo.title}
              style={{ cursor: "pointer" }}
            />
          </List.Item>
        )}
      />
    </CardDetail>
  );
};
export default AlbumDetailPage;
