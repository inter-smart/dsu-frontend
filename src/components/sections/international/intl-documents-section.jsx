import { safeHref } from "@/lib/utils";

// Drive "view" links can't be embedded as-is; their "preview" form can
function embedUrl(url = "") {
    const m = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/) || url.match(/drive\.google\.com\/open\?id=([\w-]+)/);
    return m ? `https://drive.google.com/file/d/${m[1]}/preview` : url;
}

const DocIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-full">
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5M9 13h6M9 17h6" />
    </svg>
);

const ArrowIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-full">
        <path d="M7 17 17 7M8 7h9v9" />
    </svg>
);

// International flexible section: PDFs as cards (list) or embedded viewers
export default function IntlDocumentsSection({ data }) {
    const { title, display, items = [] } = data;
    if (!items.length) return null;

    return (
        <section className="py-[15px] xl:py-[22px] 2xl:py-[28px] 3xl:py-[40px]">
            <div className="container">
                {title && <h2 className="cmn_Title mb-[16px] xl:mb-[24px]">{title}</h2>}
                {display === "embed" ? (
                    <div className={`grid gap-[15px] xl:gap-[25px] ${items.length > 1 ? "lg:grid-cols-2" : ""}`}>
                        {items.map((d) => (
                            <div key={d.id} className="overflow-hidden rounded-[8px] bg-white p-[12px] dark:border dark:border-white/10 dark:bg-[#18191B] xl:p-[16px]">
                                <p className="mb-[10px] text-[14px] font-semibold text-black dark:text-white xl:text-[16px] 2xl:text-[18px] 3xl:text-[24px]">{d.title}</p>
                                <iframe src={embedUrl(d.url)} title={d.title} loading="lazy" className="h-[420px] w-full rounded-[6px] xl:h-[560px]" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-[12px] md:grid-cols-2 xl:gap-[20px] 3xl:grid-cols-3">
                        {items.map((d) => (
                            <a
                                key={d.id}
                                href={safeHref(d.url)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-[15px] rounded-[8px] border border-transparent bg-white p-[18px] transition-all duration-300 hover:border-[#F97316]/40 hover:shadow-lg dark:border-white/10 dark:bg-[#18191B] xl:gap-[22px] xl:p-[24px] 3xl:p-[32px]"
                            >
                                <span className="size-[34px] shrink-0 text-[#4A5565] transition-colors group-hover:text-[#DC2626] dark:text-white/70 xl:size-[42px] 3xl:size-[60px]">
                                    <DocIcon />
                                </span>
                                <span className="min-w-0 flex-1 text-[15px] font-semibold leading-[1.3] text-black dark:text-white xl:text-[17px] 2xl:text-[19px] 3xl:text-[26px]">{d.title}</span>
                                <span className="flex size-[30px] shrink-0 items-center justify-center rounded-full border border-[#F97316]/40 p-[7px] text-[#F97316] transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-[#DC2626] group-hover:to-[#F97316] group-hover:text-white xl:size-[34px]">
                                    <ArrowIcon />
                                </span>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
