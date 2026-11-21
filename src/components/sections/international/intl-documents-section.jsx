import { ArrowUpRight, CalendarDays, FileText, FolderOpen, MapPin } from "lucide-react";
import { safeHref } from "@/lib/utils";

// Drive "view" links can't be embedded as-is; their "preview" form can
function embedUrl(url = "") {
    const m = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/) || url.match(/drive\.google\.com\/open\?id=([\w-]+)/);
    return m ? `https://drive.google.com/file/d/${m[1]}/preview` : url;
}

// What the link points at, for its icon and label
function kind(url = "") {
    if (/calendar\.google\./.test(url)) return { Icon: CalendarDays, label: "Calendar" };
    if (/google\.[a-z.]+\/maps|maps\.google\./.test(url)) return { Icon: MapPin, label: "Map" };
    if (/embeddedfolderview|drive\.google\.com\/drive\/folders/.test(url)) return { Icon: FolderOpen, label: "Folder" };
    return { Icon: FileText, label: "Document" };
}

// The "open" link must leave the embed form for the normal view
const openUrl = (url = "") => url.replace("/embeddedfolderview?id=", "/drive/folders/").replace(/#.*$/, "");

const iconTile = "flex shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#DC2626] to-[#F97316] text-white shadow-[0_4px_12px_rgba(220,38,38,0.25)]";

// International flexible section: PDFs as cards (list) or embedded viewers
export default function IntlDocumentsSection({ data }) {
    const { title, display, items = [] } = data;
    if (!items.length) return null;

    return (
        <section className="py-[15px] xl:py-[22px] 2xl:py-[28px] 3xl:py-[40px]">
            <div className="container">
                {title && <h2 className="cmn_Title relative mb-[18px] pb-[12px] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[56px] after:rounded-full after:bg-gradient-to-r after:from-[#DC2626] after:to-[#F97316] after:content-[''] xl:mb-[26px] xl:pb-[16px] xl:after:w-[72px]">{title}</h2>}
                {display === "embed" ? (
                    <div className={`grid gap-[16px] xl:gap-[24px] ${items.length > 1 ? "lg:grid-cols-2" : ""}`}>
                        {items.map((d) => {
                            const { Icon, label } = kind(d.url);
                            // the section heading already names a lone viewer with the same title
                            const name = d.title && d.title !== title ? d.title : label;
                            return (
                                <div key={d.id} className="overflow-hidden rounded-[14px] border border-[#F97316]/20 bg-white shadow-[0_10px_30px_rgba(249,115,22,0.10)] dark:border-white/10 dark:bg-[#18191B] xl:rounded-[18px]">
                                    <div className="flex items-center gap-[12px] border-b border-[#F97316]/15 bg-gradient-to-br from-[#FFF8EE] to-[#FFF1E0] px-[14px] py-[12px] dark:border-white/10 dark:from-[#18191B] dark:to-[#18191B] xl:px-[20px] xl:py-[14px]">
                                        <span aria-hidden="true" className={`${iconTile} size-[36px] xl:size-[42px]`}>
                                            <Icon className="size-[18px] xl:size-[20px]" />
                                        </span>
                                        <p className="min-w-0 flex-1 truncate text-[15px] font-semibold text-[#212121] dark:text-white xl:text-[17px] 3xl:text-[22px]">{name}</p>
                                        <a
                                            href={safeHref(openUrl(d.url))}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex shrink-0 items-center gap-[6px] rounded-full border border-[#F97316]/30 bg-white px-[12px] py-[6px] text-[13px] font-semibold text-[#DC2626] transition-colors hover:border-transparent hover:bg-gradient-to-r hover:from-[#DC2626] hover:to-[#F97316] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--basecolor) dark:bg-transparent xl:text-[14px]"
                                        >
                                            <span className="hidden sm:inline">Open in new tab</span>
                                            <span className="sm:hidden">Open</span>
                                            <ArrowUpRight aria-hidden="true" className="size-[15px]" />
                                            <span className="sr-only"> (opens {name} in a new tab)</span>
                                        </a>
                                    </div>
                                    <iframe src={embedUrl(d.url)} title={d.title || name} loading="lazy" className="block h-[440px] w-full bg-white xl:h-[580px] 3xl:h-[720px]" />
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-[12px] md:grid-cols-2 xl:gap-[18px] 3xl:grid-cols-3">
                        {items.map((d) => {
                            const { Icon, label } = kind(d.url);
                            return (
                                <a
                                    key={d.id}
                                    href={safeHref(d.url)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-[14px] rounded-[12px] border border-black/10 bg-white p-[12px] transition-all duration-300 hover:border-[#F97316]/40 hover:shadow-[0_8px_20px_rgba(249,115,22,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--basecolor) motion-safe:hover:-translate-y-0.5 dark:border-white/10 dark:bg-[#18191B] xl:gap-[16px] xl:rounded-[16px] xl:p-[16px] 3xl:p-[22px]"
                                >
                                    <span aria-hidden="true" className={`${iconTile} size-[44px] xl:size-[52px] 3xl:size-[64px]`}>
                                        <Icon className="size-[20px] xl:size-[24px]" />
                                    </span>
                                    <span className="min-w-0 flex-1">
                                        <span className="block text-[11px] font-medium uppercase tracking-[0.08em] text-[#777] dark:text-white/60 xl:text-[12px]">{label}</span>
                                        <span className="block text-[15px] font-semibold leading-[1.3] text-[#212121] transition-colors group-hover:text-[#DC2626] dark:text-white xl:text-[17px] 3xl:text-[21px]">{d.title}</span>
                                    </span>
                                    <span aria-hidden="true" className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-[#F97316]/10 text-[#DC2626] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#DC2626] group-hover:to-[#F97316] group-hover:text-white xl:size-[40px]">
                                        <ArrowUpRight className="size-[18px]" />
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}
