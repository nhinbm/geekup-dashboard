import { Button, type TableProps } from "antd";
import type { AlbumsType } from "./types";
import { EyeOutlined } from "@ant-design/icons";

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
    dataIndex: "userId",
    key: "userId",
  },
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => <Button icon={<EyeOutlined />}>Show</Button>,
  },
];
