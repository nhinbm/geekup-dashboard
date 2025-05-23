import type { Route } from "./+types/album-detail";
import UserDetailPage from "~/pages/user-detail";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function UserDetail() {
  return <UserDetailPage />;
}
