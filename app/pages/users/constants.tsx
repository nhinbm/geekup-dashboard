import { Button, type TableProps } from "antd";
import type { UsersType } from "./types";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router";

export const USERS_COLUMNS: TableProps<UsersType>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Avatar",
    dataIndex: "username",
    key: "avatar",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    key: "email",
    render: (value) => {
      return <a href={`mailto:${value.email}`}>{value.email}</a>;
    },
  },
  {
    title: "Phone",
    key: "phone",
    render: (value) => {
      return <a href={`tel:${value.phone}`}>{value.phone}</a>;
    },
  },
  {
    title: "Website",
    key: "website",
    render: (value) => {
      return (
        <Link
          to={`https://${value.website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {value.website}
        </Link>
      );
    },
  },
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => <Button icon={<EyeOutlined />}>Show</Button>,
  },
];
