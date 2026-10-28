import { hasContent } from "@/lib/has-content";
import flexibleRegistry from "./registry";

// Renders the sections of a "flexible-page" template: [{ id, component, data }] in editor order.
// `shared` is what the fixed pages hand to their sections (menu, sidebar, slug); a section
// takes what it needs.
export default function FlexibleSections({ sections, ...shared }) {
    return (sections || []).map((item) => {
        const entry = flexibleRegistry[item.component];
        if (!entry || !hasContent(item.data)) return null;

        const Component = entry.Component;
        return <Component key={`${item.component}-${item.id}`} {...shared} data={item.data} {...(entry.props || {})} />;
    });
}
