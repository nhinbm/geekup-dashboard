import { Link, useLocation } from "react-router";
import ContentLayout from "../content-layout";
import { Card, Divider, Spin } from "antd";
import type { ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserById } from "~/services/users.service";
import { getAlbumById } from "~/services/albums.service";
import styles from "./card-detail.module.css";

type CardDetailProps = {
  children?: ReactNode;
};

const CardDetail: React.FC<CardDetailProps> = ({ children }) => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const type = pathSnippets[0];
  const id = parseInt(pathSnippets[1]);

  const {
    data: albumData,
    isLoading: isAlbumLoading,
    isError: isAlbumError,
  } = useQuery({
    enabled: type === "albums" && !!id,
    queryKey: ["album", id],
    queryFn: () => getAlbumById(id),
  });

  const userId = type === "albums" ? albumData?.userId : id;

  const {
    data: userData,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useQuery({
    enabled: typeof userId === "number",
    queryKey: ["user", userId],
    queryFn: () => getUserById(userId as number),
  });

  const title = pathSnippets[0].slice(0, -1);

  if (isAlbumLoading || isUserLoading) return <Spin fullscreen />;
  if (isAlbumError || isUserError) return <div>Error loading data</div>;
  if (!userData) return null;

  const avatarUrl = `https://ui-avatars.com/api/?background=random&rounded=true&name=${encodeURIComponent(
    userData.name
  )}`;

  return (
    <ContentLayout header={`Show ${title}`}>
      <Card variant="borderless">
        <Card>
          {/* card header */}
          <div className={styles.cardDetail__headerContainer}>
            <img src={avatarUrl} alt={userData.name} width={30} height={30} />
            <div className={styles.cardDetail__headerRight}>
              {type === "albums" ? (
                <Link
                  to={`/users/${userId}`}
                  className={styles.cardDetail__headerName}
                >
                  {userData.name}
                </Link>
              ) : (
                <div className={styles.cardDetail__headerName}>
                  {userData.name}
                </div>
              )}
              <a
                href={`mailto:${userData.email}`}
                className={styles.cardDetail__headerMail}
              >
                {userData.email}
              </a>
            </div>
          </div>
          <Divider />
          {/* card body */}
          {children}
        </Card>
      </Card>
    </ContentLayout>
  );
};
export default CardDetail;
