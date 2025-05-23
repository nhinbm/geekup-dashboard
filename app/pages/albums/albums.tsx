import { Table, type TablePaginationConfig } from "antd";
import { Navigate, useSearchParams } from "react-router";
import type { AlbumsType } from "./types";
import { ALBUMS_COLUMNS } from "./constants";
import { useQuery } from "@tanstack/react-query";
import { getAlbums } from "~/services/albums.service";

const AlbumsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageSize = searchParams.get("pageSize");
  const current = searchParams.get("current");

  const shouldRedirect = !pageSize || !current;
  const pageSizeNum = parseInt(pageSize || "20");
  const currentNum = parseInt(current || "1");

  const { data, isLoading } = useQuery({
    queryKey: ["albums", currentNum, pageSizeNum],
    queryFn: () => getAlbums(currentNum, pageSizeNum),
    enabled: !shouldRedirect,
    refetchOnWindowFocus: false,
  });

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setSearchParams({
      current: String(pagination.current || 1),
      pageSize: String(pagination.pageSize || 20),
    });
  };

  if (!pageSize || !current) {
    return <Navigate to="/albums?pageSize=20&current=1" replace />;
  }

  return (
    <Table<AlbumsType>
      columns={ALBUMS_COLUMNS}
      dataSource={(data && data.data) || []}
      pagination={{
        total: data && data.total,
        defaultCurrent: currentNum,
        pageSize: pageSizeNum,
      }}
      loading={isLoading}
      onChange={handleTableChange}
      rowKey="id"
    />
  );
};
export default AlbumsPage;
