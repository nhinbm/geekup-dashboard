import { Layout } from "antd";
import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <Layout.Header className={styles.header}>
      <img
        src="https://geekup.vn/Icons/geekup-logo-general.svg"
        alt="logo"
        className={styles.header__logo}
      />
    </Layout.Header>
  );
};

export default Header;
