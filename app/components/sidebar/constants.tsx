import { IdcardOutlined, ProfileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Link } from "react-router";

type MenuItem = Required<MenuProps>["items"][number];

export const MENU_ITEMS: MenuItem[] = [
  {
    key: "albums",
    icon: <ProfileOutlined />,
    label: <Link to="/albums">Albums</Link>,
  },
  {
    key: "users",
    icon: <IdcardOutlined />,
    label: <Link to="/users">Users</Link>,
  },
];
