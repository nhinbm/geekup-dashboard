import AlbumDetailPage from "~/pages/album-detail";
import type { Route } from "./+types/album-detail";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function AlbumDetail() {
  return <AlbumDetailPage />;
}
