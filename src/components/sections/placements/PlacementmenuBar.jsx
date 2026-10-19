import PlacementmenuBarClient from "./PlacementmenuBarClient";
import { getPlacementMenuItems } from "@/lib/api/placement";

// Server step: when no items are passed, the pills come from GET /api/placements.
// items: optional [{ label, href }] (the template pages pass their API sidebar).
export default async function PlacementmenuBar({ items, title, className }) {
    const menuItems = Array.isArray(items) ? items : await getPlacementMenuItems();

    return <PlacementmenuBarClient items={menuItems} title={title} className={className} />;
}
