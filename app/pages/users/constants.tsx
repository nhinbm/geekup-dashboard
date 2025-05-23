import { Button, type TableProps } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router";
import type { User } from "~/types/user.type";

export const USERS_COLUMNS: TableProps<User>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Avatar",
    key: "avatar",
    render: (value) => {
      const encodedName = encodeURIComponent(value.name);
      const avatarUrl = `https://ui-avatars.com/api/?background=random&rounded=true&name=${encodedName}`;
      return <img alt={value.name} src={avatarUrl} width={30} height={30} />;
    },
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
    render: (value) => (
      <Link to={`${value.id}`}>
        <Button icon={<EyeOutlined />}>Show</Button>
      </Link>
    ),
  },
];
