import { Layout, Menu } from "antd";

import { useState } from "react";
import { MENU_ITEMS } from "./constants";

interface SidebarProps {
  style?: React.CSSProperties;
}

const Sidebar: React.FC<SidebarProps> = ({ style }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [collapsedWidth, setCollapsedWidth] = useState(80);

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
      <Menu defaultSelectedKeys={["albums"]} mode="inline" items={MENU_ITEMS} />
    </Layout.Sider>
  );
};

export default Sidebar;
