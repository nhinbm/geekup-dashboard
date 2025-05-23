import {
  index,
  layout,
  prefix,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("routes/layouts/main-layout.tsx", [
    ...prefix("albums", [
      index("routes/albums.tsx"),
      route(":id", "routes/album-detail.tsx"),
    ]),
    ...prefix("users", [
      index("routes/users.tsx"),
      route(":id", "routes/user-detail.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
