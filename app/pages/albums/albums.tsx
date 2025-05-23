import { Navigate, useSearchParams } from "react-router";

const AlbumsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const pageSize = searchParams.get("pageSize");
  const current = searchParams.get("current");

  if (!pageSize || !current) {
    return <Navigate to="/albums?pageSize=20&current=1" replace />;
  }

  return (
    <div>
      Page {current}, size {pageSize}
    </div>
  );
};
export default AlbumsPage;
