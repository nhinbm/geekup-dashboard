import {
  index,
  layout,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("routes/layouts/main-layout.tsx", [
    route("albums", "routes/albums.tsx"),
    route("users", "routes/users.tsx"),
  ]),
] satisfies RouteConfig;
