import { Breadcrumb } from "antd";
import { useLocation } from "react-router";
import { MENU_ITEMS, type MenuItem } from "../sidebar/constants";

const BreadcrumbCustom: React.FC = () => {
  const location = useLocation();

  const pathSnippets = location.pathname.split("/").filter((i) => i);

  if (pathSnippets.length !== 2) return;

  const items = pathSnippets.map((segment, index) => {
    if (index === 0) {
      const item = MENU_ITEMS.find(
        (e) => e && "key" in e && e.key === segment && "icon" in e
      ) as MenuItem | undefined;
      if (!item || !("icon" in item)) {
        return {
          title: segment,
        };
      }
      return {
        title: (
          <>
            {item.icon}
            <span style={{ textTransform: "capitalize" }}>{item.key}</span>
          </>
        ),
        href: `/${item.key}`,
      };
    }
    return { title: "Show" };
  });

  return <Breadcrumb items={items} />;
};
export default BreadcrumbCustom;
