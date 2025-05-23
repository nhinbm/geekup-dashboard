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
    title: "Action",
    key: "action",
    render: (_, record) => <Button icon={<EyeOutlined />}>Show</Button>,
  },
];

export const ALBUMS_DUMMY_DATA: AlbumsType[] = [
  {
    userId: 1,
    id: 1,
    title: "quidem molestiae enim",
  },
  {
    userId: 1,
    id: 2,
    title: "sunt qui excepturi placeat culpa",
  },
  {
    userId: 1,
    id: 3,
    title: "omnis laborum odio",
  },
  {
    userId: 1,
    id: 4,
    title: "non esse culpa molestiae omnis sed optio",
  },
];
