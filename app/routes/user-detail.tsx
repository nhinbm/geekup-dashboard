import type { Route } from "./+types/album-detail";
import UserDetailPage from "~/pages/user-detail";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `#${params.id} Show User` },
    {
      name: "description",
      content: `#${params} Show User`,
    },
  ];
}

export default function UserDetail() {
  return <UserDetailPage />;
}
