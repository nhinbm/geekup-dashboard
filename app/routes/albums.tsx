import AlbumsPage from "~/pages/albums";
import type { Route } from "./+types/albums";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Albums" }, { name: "description", content: "Albums" }];
}

export default function Albums() {
  return <AlbumsPage />;
}
