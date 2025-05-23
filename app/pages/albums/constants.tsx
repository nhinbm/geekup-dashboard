import { Button, type TableProps } from "antd";
import type { AlbumsType } from "./types";
import { EyeOutlined } from "@ant-design/icons";
import AvatarAndName from "~/components/avatar-and-name";
import { Link } from "react-router";

export const ALBUMS_COLUMNS: TableProps<AlbumsType>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "User",
    key: "userId",
    render: (value) => <AvatarAndName userId={value.userId} />,
  },
  {
    title: "Actions",
    key: "actions",
    render: (value) => (
      <Link to={`${value.id}`}>
        <Button icon={<EyeOutlined />}>Show</Button>
      </Link>
    ),
  },
];
