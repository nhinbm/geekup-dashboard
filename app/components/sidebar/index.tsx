import { Layout, Menu } from "antd";

import { useState } from "react";
import { MENU_ITEMS } from "./constants";
import { useLocation } from "react-router";

interface SidebarProps {
  style?: React.CSSProperties;
}

const Sidebar: React.FC<SidebarProps> = ({ style }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [collapsedWidth, setCollapsedWidth] = useState(80);

  const location = useLocation();

  const pathSnippets = location.pathname.split("/").filter((i) => i);

  return (
    <Layout.Sider
      style={style}
      breakpoint="lg"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      collapsedWidth={collapsedWidth}
      onBreakpoint={(broken) => {
        setCollapsedWidth(broken ? 0 : 80);
      }}
    >
      <Menu
        selectedKeys={[pathSnippets[0]]}
        mode="inline"
        items={MENU_ITEMS}
        style={{ border: "none" }}
      />
    </Layout.Sider>
  );
};

export default Sidebar;
