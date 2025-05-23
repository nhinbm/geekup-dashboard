import AlbumsPage from "~/pages/albums";
import type { Route } from "./+types/albums";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Albums() {
  return <AlbumsPage />;
}
