import { EyeOutlined } from "@ant-design/icons";
import { Button, type TableProps } from "antd";
import { Link } from "react-router";
import type { Album } from "~/types/album.type";

export const ALBUMS_COLUMNS: TableProps<Album>["columns"] = [
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
    title: "Actions",
    key: "actions",
    render: (value) => (
      <Link to={`/albums/${value.id}`}>
        <Button icon={<EyeOutlined />}>Show</Button>
      </Link>
    ),
  },
];
