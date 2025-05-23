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

export const USERS_DUMMY_DATA: UsersType[] = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];
