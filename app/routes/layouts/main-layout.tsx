import { Layout } from "antd";
import { Outlet } from "react-router";
import Header from "~/components/header";
import styles from "./main-layout.module.css";
import Sidebar from "~/components/sidebar";

const { Content } = Layout;

export default function MainLayout() {
  return (
    <Layout className={styles.mainLayout}>
      <div className={styles.mainLayout__header}>
        <Header />
      </div>

      <Layout>
        <div className={styles.mainLayout__sidebar}>
          <Sidebar style={{ height: "100%", paddingTop: "8px" }} />
        </div>

        <Layout className={styles.mainLayout__content}>
          <Content
            style={{
              flex: 1,
              overflow: "auto",
              padding: 24,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
