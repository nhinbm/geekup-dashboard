import { Layout } from "antd";
import { Outlet } from "react-router";
import Header from "~/components/header";
import styles from "./main-layout.module.css";
import Sidebar from "~/components/sidebar";
import BreadcrumbCustom from "~/components/breadcrumb";

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

        <Layout className={styles.mainLayout__contentContainer}>
          <div className={styles.mainLayout__contentBody}>
            <BreadcrumbCustom />
            <Content>
              <Outlet />
            </Content>
          </div>
        </Layout>
      </Layout>
    </Layout>
  );
}
