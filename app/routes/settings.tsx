import { AppsSettings } from "../settings/AppsSettings";

export function meta() {
  return [
    { title: "Settings | App Dashboard" },
    { name: "description", content: "Configure your application settings" },
  ];
}

export default function Settings() {
  return <AppsSettings />;
}
