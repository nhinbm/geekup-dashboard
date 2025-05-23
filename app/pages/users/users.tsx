import { Table } from "antd";
import ContentLayout from "~/components/content-layout";
import { USERS_COLUMNS } from "./constants";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "~/services/users.service";
import type { User } from "~/types/user.type";

const UsersPage: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
    refetchOnWindowFocus: false,
  });

  return (
    <ContentLayout header="Users">
      <Table<User>
        columns={USERS_COLUMNS}
        dataSource={(data && data.data) || []}
        pagination={false}
        loading={isLoading}
      />
    </ContentLayout>
  );
};
export default UsersPage;
