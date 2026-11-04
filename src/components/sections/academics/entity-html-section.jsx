// Heading + CMS rich text for department / programme pages. The API delivers these fields as
// escaped HTML (server `blocksToHtml`), styled only through the `.typography` wrapper.
export default function EntityHtmlSection({ eyebrow, heading, html, facts = [] }) {
    if (!html && !facts.length) return null;

    return (
        <section className="relative py-[20px_60px] xl:py-[55px_80px] 2xl:py-[65px_100px] 3xl:py-[75px_100px]">
            <div className="container">
                {eyebrow && (
                    <div className="flex items-center gap-[8px] mb-[10px] xl:mb-[14px]">
                        <span className="w-[18px] xl:w-[22px] h-[2px] bg-[#DC2626]" />
                        <span className="text-[12px] xl:text-[14px] 2xl:text-[15px] tracking-tighter bg-gradient-to-r from-[#DC2626] from-[80%] to-[#F97316] bg-clip-text text-transparent uppercase">
                            {eyebrow}
                        </span>
                    </div>
                )}
                {heading && <h2 className="cmn_Title mb-[15px] xl:mb-[20px] 2xl:mb-[25px] text-black dark:text-white">{heading}</h2>}
                {facts.length > 0 && (
                    <ul className="mb-[20px] flex flex-wrap gap-[10px]">
                        {facts.map((f) => (
                            <li key={f.label} className="rounded-full border border-[#F3DFD2] px-[15px] py-[6px] text_1 dark:border-white/10">
                                <span className="font-semibold">{f.label}:</span> {f.value}
                            </li>
                        ))}
                    </ul>
                )}
                {html && (
                    <div
                        className="text_1 text-[#4A5565] dark:text-white/80"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                )}
            </div>
        </section>
    );
}
