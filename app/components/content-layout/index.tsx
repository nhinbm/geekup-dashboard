import { type ReactNode } from "react";
import styles from "./content-layout.module.css";
import { LeftOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router";
import { Button } from "antd";

interface ContentLayoutProps {
  header?: string;
  children?: ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ header, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const from = location.state?.from || "/albums";

  const handleBack = () => {
    navigate(from);
  };

  return (
    <>
      {header && (
        <h4 className={styles.contentLayout__header} onClick={handleBack}>
          {pathSnippets.length >= 2 && (
            <Button
              icon={<LeftOutlined />}
              onClick={handleBack}
              type="text"
              style={{ marginRight: "16px" }}
            />
          )}
          {header}
        </h4>
      )}
      <div className={header && styles.contentLayout__content}>{children}</div>
    </>
  );
};

export default ContentLayout;
