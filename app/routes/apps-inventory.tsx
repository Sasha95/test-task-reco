import { AppsInventory } from "../apps-inventory/AppsInventory";

export function meta() {
  return [
    { title: "Apps Inventory | App Dashboard" },
    { name: "description", content: "Manage your application inventory" },
  ];
}

export default function AppsInventoryPage() {
  return <AppsInventory />;
} 