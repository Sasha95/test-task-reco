import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("components/Layout.tsx", [
    route("/apps-discovery", "routes/apps-discovery.tsx"),
    route("/apps-inventory", "routes/apps-inventory.tsx"),
    route("/settings", "routes/settings.tsx"),
  ]),
] satisfies RouteConfig;
