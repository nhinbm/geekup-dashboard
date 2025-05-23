import { Fragment, type ReactNode } from "react";
import styles from "./content-layout.module.css";

interface ContentLayoutProps {
  header?: string;
  children?: ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ header, children }) => {
  return (
    <>
      {header && <h4 className={styles.contentLayout__header}>{header}</h4>}
      <div className={header && styles.contentLayout__content}>{children}</div>
    </>
  );
};

export default ContentLayout;
