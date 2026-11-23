import { BlocksRenderer } from "@/components/ui/blocks-renderer";

// A list item written as "**Term :** description" in the CMS
const hasLead = (item) => item.children?.[0]?.bold && item.children[0].text?.trim();
const isTermList = (b) => b.type === "list" && b.children?.length > 0 && b.children.every(hasLead);

// True when the rich text holds at least one "Term : description" list worth laying out as cards or steps
export const isStructured = (blocks = []) => blocks.some(isTermList);

function split(item) {
    const [lead, ...rest] = item.children;
    return { term: lead.text.replace(/\s*:\s*$/, "").trim(), body: rest.some((c) => c.text?.trim() || c.children) ? [{ type: "paragraph", children: rest }] : null };
}

function Cards({ items }) {
    const cols = items.length % 3 === 0 ? "xl:grid-cols-3" : "";
    return (
        <ul className={`!m-0 !list-none !p-0 [&>li]:!m-0 [&>li]:before:!hidden grid gap-[12px] sm:grid-cols-2 xl:gap-[18px] 3xl:gap-[24px] ${cols}`}>
            {items.map((it, i) => {
                const { term, body } = split(it);
                return (
                    <li key={i} className="group rounded-[14px] border border-black/10 bg-white p-[16px] transition-all duration-300 hover:border-[#F97316]/40 hover:shadow-[0_10px_26px_rgba(249,115,22,0.12)] motion-safe:hover:-translate-y-0.5 dark:border-white/10 dark:bg-[#18191B] xl:p-[22px] 3xl:p-[28px]">
                        <h4 className="mt-0 mb-[4px] text-[15px] font-semibold leading-snug text-[#212121] dark:text-white xl:text-[17px] 3xl:text-[22px]">{term}</h4>
                        {body && <div className="typography [&_p]:mb-0"><BlocksRenderer content={body} /></div>}
                    </li>
                );
            })}
        </ul>
    );
}

function Steps({ items }) {
    return (
        <ol className="relative !m-0 !list-none !p-0 [&>li]:!m-0 [&>li]:before:!hidden">
            {items.map((it, i) => {
                const { term, body } = split(it);
                const last = i === items.length - 1;
                return (
                    <li key={i} className={`relative flex gap-[16px] xl:gap-[22px] ${last ? "" : "pb-[16px] xl:pb-[22px]"}`}>
                        {/* connector to the next step */}
                        {!last && <span aria-hidden="true" className="absolute bottom-0 left-[19px] top-[40px] w-[2px] bg-gradient-to-b from-[#F97316]/60 to-[#F97316]/15 xl:left-[23px] xl:top-[48px]" />}
                        <span aria-hidden="true" className="relative z-1 flex size-[40px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#DC2626] to-[#F97316] text-[15px] font-bold text-white shadow-[0_6px_16px_rgba(220,38,38,0.3)] ring-4 ring-white dark:ring-[#111] xl:size-[48px] xl:text-[17px]">
                            {i + 1}
                        </span>
                        <div className="min-w-0 flex-1 rounded-[14px] border border-black/10 bg-white p-[14px] dark:border-white/10 dark:bg-[#18191B] xl:p-[20px] 3xl:p-[26px]">
                            <span className="sr-only">Step {i + 1}: </span>
                        <h4 className="mt-0 mb-[4px] text-[15px] font-semibold leading-snug text-[#212121] dark:text-white xl:text-[17px] 3xl:text-[22px]">{term}</h4>
                            {body && <div className="typography [&_p]:mb-0 [&_a]:break-all"><BlocksRenderer content={body} /></div>}
                        </div>
                    </li>
                );
            })}
        </ol>
    );
}

// Rich text where "Term : description" lists become feature cards (unordered) or a numbered timeline (ordered)
export default function IntlStructuredText({ blocks }) {
    return (
        <div className="flex flex-col gap-[14px] xl:gap-[20px]">
            {blocks.map((b, i) => {
                if (isTermList(b)) return b.format === "ordered" ? <Steps key={i} items={b.children} /> : <Cards key={i} items={b.children} />;
                if (b.type === "heading") {
                    const text = b.children?.map((c) => c.text || "").join("").trim();
                    return (
                        <h3 key={i} className={`mb-0 flex items-center gap-[12px] text-[19px] font-semibold text-[#212121] dark:text-white xl:text-[22px] 2xl:text-[24px] 3xl:text-[30px] ${i > 0 ? "mt-[10px] xl:mt-[14px]" : ""}`}>
                            <span aria-hidden="true" className="h-[24px] w-[4px] shrink-0 rounded-full bg-gradient-to-b from-[#DC2626] to-[#F97316] xl:h-[28px] 3xl:h-[36px]" />
                            {text}
                        </h3>
                    );
                }
                return <BlocksRenderer key={i} content={[b]} />;
            })}
        </div>
    );
}
