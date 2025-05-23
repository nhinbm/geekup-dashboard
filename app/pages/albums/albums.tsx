import { Table } from "antd";
import { Navigate, useSearchParams } from "react-router";
import type { AlbumsType } from "./types";
import { ALBUMS_COLUMNS, ALBUMS_DUMMY_DATA } from "./constants";

const AlbumsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const pageSize = searchParams.get("pageSize");
  const current = searchParams.get("current");

  if (!pageSize || !current) {
    return <Navigate to="/albums?pageSize=20&current=1" replace />;
  }

  return (
    <Table<AlbumsType>
      columns={ALBUMS_COLUMNS}
      dataSource={ALBUMS_DUMMY_DATA}
    />
  );
};
export default AlbumsPage;
