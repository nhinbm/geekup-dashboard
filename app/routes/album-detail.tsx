import AlbumDetailPage from "~/pages/album-detail";
import type { Route } from "./+types/album-detail";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `#${params.id} Show Album` },
    {
      name: "description",
      content: `#${params} Show Album`,
    },
  ];
}

export default function AlbumDetail() {
  return <AlbumDetailPage />;
}
