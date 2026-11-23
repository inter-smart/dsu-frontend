import { hasContent } from "@/lib/has-content";
import flexibleRegistry from "./registry";
import SectionBoundary from "./SectionBoundary";
import { LibraryGroup } from "@/components/sections/ai-enabled/library/library-frame";

// Renders the sections of a "flexible-page" template: [{ id, component, data }] in editor order.
// `shared` is what the fixed pages hand to their sections (menu, sidebar, slug); a section
// takes what it needs. `index` is the section's place on the page; `prev`/`next` name its neighbours' components, `prevData`/`nextData` carry their data.
// `libraryLayout` (Library sub-pages): every section goes inside one shell with a single side menu.
export default function FlexibleSections({ sections, libraryLayout = false, ...shared }) {
    const list = sections || [];
    const out = [];

    if (libraryLayout) {
        const items = list.flatMap((item, index) => {
            const entry = flexibleRegistry[item.component];
            if (!entry || !hasContent(item.data)) return [];
            const Component = entry.Component;
            const node = (
                <Component {...shared} index={index} prev={list[index - 1]?.component} next={list[index + 1]?.component} prevData={list[index - 1]?.data} nextData={list[index + 1]?.data} data={item.data} {...(entry.props || {})} embedded />
            );
            // generic sections draw their own section + container: drop that padding so they sit inside the content column
            return [
                <SectionBoundary key={`${item.component}-${item.id}`}>
                    <div className="[&_.container]:!max-w-none [&_.container]:!px-0 [&>section]:!py-0">{node}</div>
                </SectionBoundary>,
            ];
        });
        return items.length ? <LibraryGroup menu={shared.menu}>{items}</LibraryGroup> : null;
    }

    for (let index = 0; index < list.length; index++) {
        const item = list[index];
        const entry = flexibleRegistry[item.component];
        if (!entry || !hasContent(item.data)) continue;

        const render = (extra = {}) => {
            const Component = entry.Component;
            return <Component {...shared} index={index} prev={list[index - 1]?.component} next={list[index + 1]?.component} prevData={list[index - 1]?.data} nextData={list[index + 1]?.data} data={item.data} {...(entry.props || {})} {...extra} />;
        };

        // Library sections each draw a side menu; consecutive ones share one shell and one side menu.
        if (entry.library) {
            const group = [{ item, render }];
            while (index + 1 < list.length) {
                const nextItem = list[index + 1];
                const nextEntry = flexibleRegistry[nextItem.component];
                if (!nextEntry) { index++; continue; } // unknown component renders nothing: skip it
                if (!nextEntry.library) break;
                index++;
                if (!hasContent(nextItem.data)) continue;
                const i = index;
                group.push({
                    item: nextItem,
                    render: (extra = {}) => {
                        const Component = nextEntry.Component;
                        return <Component {...shared} index={i} prev={list[i - 1]?.component} next={list[i + 1]?.component} prevData={list[i - 1]?.data} nextData={list[i + 1]?.data} data={nextItem.data} {...(nextEntry.props || {})} {...extra} />;
                    },
                });
            }
            out.push(
                <LibraryGroup key={`library-${item.id}`} menu={shared.menu}>
                    {group.map((g) => (
                        <SectionBoundary key={`${g.item.component}-${g.item.id}`}>{g.render({ embedded: true })}</SectionBoundary>
                    ))}
                </LibraryGroup>
            );
            continue;
        }

        // `flow` sections are plain content blocks: one shared vertical spacing (overrides the component's own
        // padding) so they don't stack into big gaps with their neighbours. `display: contents` keeps layout unchanged.
        const node = render();
        out.push(
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
    }

    return out;
}
