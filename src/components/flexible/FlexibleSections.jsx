import { hasContent } from "@/lib/has-content";
import flexibleRegistry from "./registry";
import SectionBoundary from "./SectionBoundary";

// Renders the sections of a "flexible-page" template: [{ id, component, data }] in editor order.
// `shared` is what the fixed pages hand to their sections (menu, sidebar, slug); a section
// takes what it needs. `index` is the section's place on the page.
export default function FlexibleSections({ sections, ...shared }) {
    return (sections || []).map((item, index) => {
        const entry = flexibleRegistry[item.component];
        if (!entry || !hasContent(item.data)) return null;

        const Component = entry.Component;
        const node = <Component {...shared} index={index} data={item.data} {...(entry.props || {})} />;
        // `flow` sections are plain content blocks: one shared vertical spacing (overrides the component's own
        // padding) so they don't stack into big gaps with their neighbours. `display: contents` keeps layout unchanged.
        return (
            <SectionBoundary key={`${item.component}-${item.id}`}>
                {entry.flow ? (
                    <div className="contents [&>section]:!py-[15px] xl:[&>section]:!py-[22px] 2xl:[&>section]:!py-[28px] 3xl:[&>section]:!py-[40px]">
                        {node}
                    </div>
                ) : (
                    node
                )}
            </SectionBoundary>
        );
    });
}
