import { hasContent } from "@/lib/has-content";
import flexibleRegistry from "./registry";

// Renders the sections of a "flexible-page" template: [{ id, component, data }] in editor order.
// `shared` is what the fixed pages hand to their sections (menu, sidebar, slug); a section
// takes what it needs. `index` is the section's place on the page; `prev`/`next` name its neighbours' components, `prevData`/`nextData` carry their data.
export default function FlexibleSections({ sections, ...shared }) {
    return (sections || []).map((item, index) => {
        const entry = flexibleRegistry[item.component];
        if (!entry || !hasContent(item.data)) return null;

        const Component = entry.Component;
        return <Component key={`${item.component}-${item.id}`} {...shared} index={index} prev={sections[index - 1]?.component} next={sections[index + 1]?.component} prevData={sections[index - 1]?.data} nextData={sections[index + 1]?.data} data={item.data} {...(entry.props || {})} />;
    });
}
