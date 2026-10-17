// Shared list for the school Programs and Departments tabs: departments, or programmes grouped UG / PG.
const LEVELS = [
    { key: "UG", label: "Undergraduate (UG)" },
    { key: "PG", label: "Postgraduate (PG)" },
];

function ItemGrid({ items }) {
    return (
        <div className="grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="rounded-[15px] border border-[#F3DFD2] bg-white p-[20px] dark:border-white/10 dark:bg-[#1a1a1a]"
                >
                    <div className="font-bold">{item.title}</div>
                </div>
            ))}
        </div>
    );
}

export function SchoolItemList({ title, items = [], groupByLevel = false }) {
    if (!items.length) return null;
    const groups = groupByLevel
        ? LEVELS.map((l) => ({ ...l, items: items.filter((i) => i.academicLevel === l.key) })).filter((g) => g.items.length)
        : [{ key: "all", label: null, items }];

    return (
        <section className="container py-[40px] md:py-[60px]">
            <div className="cmn_Title mb-[25px]">{title}</div>
            {groups.map((g) => (
                <div key={g.key} className="mb-[30px]">
                    {g.label && <h3 className="mb-[15px] font-bold">{g.label}</h3>}
                    <ItemGrid items={g.items} />
                </div>
            ))}
        </section>
    );
}
