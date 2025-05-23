import { Table } from "antd";
import ContentLayout from "~/components/content-layout";
import type { UsersType } from "./types";
import { USERS_COLUMNS, USERS_DUMMY_DATA } from "./constants";

const UsersPage: React.FC = () => {
  return (
    <ContentLayout header="Users">
      <Table<UsersType> columns={USERS_COLUMNS} dataSource={USERS_DUMMY_DATA} />
    </ContentLayout>
  );
};
export default UsersPage;
