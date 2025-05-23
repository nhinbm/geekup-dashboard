import { Layout } from "antd";
import { Outlet } from "react-router";
import Header from "~/components/header";
import styles from "./main-layout.module.css";
import Sidebar from "~/components/sidebar";

const { Content } = Layout;

export default function MainLayout() {
  return (
    <Layout className={styles.mainLayout}>
      <Header />
      <Layout>
        <Sidebar />
        <Layout>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
