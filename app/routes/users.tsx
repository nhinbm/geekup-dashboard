import type { Route } from "./+types/users";
import UsersPage from "~/pages/users";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Users" }, { name: "description", content: "Users" }];
}

export default function Albums() {
  return <UsersPage />;
}
