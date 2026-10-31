import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

// Shared list for the school Programs and Departments tabs: departments (each with its
// programmes), or programmes grouped UG / PG / other. Items with an `href` link to their page.
const LEVELS = [
    { key: "UG", label: "Undergraduate (UG)" },
    { key: "PG", label: "Postgraduate (PG)" },
];

const CARD =
    "rounded-[15px] border border-[#F3DFD2] bg-white p-[20px] dark:border-white/10 dark:bg-[#1a1a1a]";

function groupItems(items, groupByLevel) {
    if (!groupByLevel) return [{ key: "all", label: null, items }];
    const known = LEVELS.map((l) => ({ ...l, items: items.filter((i) => i.academicLevel === l.key) }));
    // anything that is not UG / PG (Doctoral, Diploma, ...) keeps its own group instead of being dropped
    const otherKeys = [...new Set(items.map((i) => i.academicLevel || "Other").filter((k) => !LEVELS.some((l) => l.key === k)))];
    const other = otherKeys.map((k) => ({ key: k, label: k, items: items.filter((i) => (i.academicLevel || "Other") === k) }));
    return [...known, ...other].filter((g) => g.items.length);
}

function ItemGrid({ items }) {
    return (
        <div className="grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => {
                const body = (
                    <>
                        <div className="font-bold">{item.title}</div>
                        {item.meta && <p className="mt-[6px] text-[#4A5565] dark:text-white/80">{item.meta}</p>}
                    </>
                );
                return (
                    <div key={item.id} className={`${CARD} transition-shadow hover:shadow-lg`}>
                        {item.href ? <Link href={item.href} className="block">{body}</Link> : body}
                        {item.children?.length > 0 && (
                            <ul className="mt-[12px] flex flex-col gap-[6px] border-t border-black/10 pt-[12px] dark:border-white/10">
                                {item.children.map((c) => (
                                    <li key={c.id}>
                                        <Link href={c.href} className="text-[#4A5565] hover:text-[#F97316] dark:text-white/80">
                                            {c.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

// `groups` ([{ key, label, items }], e.g. the CMS Programs template) replaces the automatic grouping;
// `description` is optional rich text (Strapi blocks) shown under the title.
export function SchoolItemList({ title, items = [], groupByLevel = false, groups, description }) {
    const list = groups ? groups.filter((g) => g.items?.length) : items.length ? groupItems(items, groupByLevel) : [];
    if (!list.length) return null;

    return (
        <section className="container py-[40px] md:py-[60px]">
            <div className="cmn_Title mb-[25px]">{title}</div>
            {Array.isArray(description) && description.length > 0 && (
                <div className="mb-[25px] text-[#4A5565] dark:text-white/80 ">
                    <BlocksRenderer content={description} />
                </div>
            )}
            {list.map((g) => (
                <div key={g.key} className="mb-[30px]">
                    {g.label && <h3 className="mb-[15px] font-bold">{g.label}</h3>}
                    <ItemGrid items={g.items} />
                </div>
            ))}
        </section>
    );
}
