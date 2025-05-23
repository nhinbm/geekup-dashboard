import { Layout } from "antd";
import styles from "./header.module.css";

interface HeaderProps {
  style?: React.CSSProperties;
}

const Header: React.FC<HeaderProps> = ({ style }) => {
  return (
    <Layout.Header className={styles.header} style={style}>
      <img
        src="https://geekup.vn/Icons/geekup-logo-general.svg"
        alt="logo"
        className={styles.header__logo}
      />
    </Layout.Header>
  );
};

export default Header;
