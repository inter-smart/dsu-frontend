"use client";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { hasContent } from "@/lib/has-content";

// an item is shown only with a label and a real url or file url
const hasRealLink = (link) =>
    Boolean(link?.label) && Boolean(link?.linkType === "file" ? link?.file?.url : link?.url);

// pill chip; the whole chip is the link (falls back to a plain div without an href)
function Chip({ link }) {
    const href = link?.linkType === "file" ? link?.file?.url : link?.url;
    const className =
        "inline-flex items-center rounded-full border border-black/[0.08] bg-white px-[16px] py-[8px] text-[13px] font-medium leading-[1.2] text-[#212121] transition-all duration-300 md:px-[20px] md:py-[10px] xl:px-[24px] xl:py-[12px] xl:text-[15px] 2xl:px-[28px] 2xl:py-[14px] 2xl:text-[17px] 3xl:px-[36px] 3xl:py-[18px] 3xl:text-[22px] dark:border-white/10 dark:bg-white/5 dark:text-white" +
        (href
            ? " cursor-pointer hover:-translate-y-[2px] hover:border-transparent hover:bg-gradient-to-r hover:from-[#DC2626] hover:to-[#F97316] hover:text-white hover:shadow-[0_8px_20px_rgba(220,38,38,0.25)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F97316]"
            : "");
    if (!href) return <div className={className}>{link?.label}</div>;
    const newTab = link?.isExternal || link?.linkType === "file";
    return (
        <a
            href={href}
            target={newTab ? "_blank" : undefined}
            rel={newTab ? "noopener noreferrer" : undefined}
            className={className}
        >
            {link?.label}
        </a>
    );
}

export default function AboutRecognition({ data }) {
    const columns = [];
    (Array.isArray(data?.columns) ? data.columns : []).forEach((col) => {
        const items = (Array.isArray(col?.items) ? col.items : []).filter((item) =>
            hasRealLink(item?.link),
        );
        if (col?.title && items.length > 0) columns.push({ title: col.title, items });
    });
    if (!columns.length) return null;

    return (
        <section className="relative py-[40px] transition-colors duration-300 xl:py-[60px] 2xl:py-[70px] 3xl:py-[90px] dark:bg-[#101010]">
            <div className="container">
                {data.heading && (
                    <h2 className="mb-[10px] text-[25px] font-bold leading-[30px] text-black xl:text-[36px] xl:leading-[40px] 2xl:text-[44px] 2xl:leading-[50px] 3xl:text-[55px] 3xl:leading-[60px] dark:text-white">
                        {data.heading}
                    </h2>
                )}
                {hasContent(data.subheading) && (
                    <div className="text_1 mb-[25px] leading-[1.2] text-[#4A5565] xl:mb-[35px] 3xl:mb-[50px] dark:text-[#9CA3AF]">
                        {Array.isArray(data.subheading) ? (
                            <BlocksRenderer content={data.subheading} />
                        ) : typeof data.subheading === "string" ? (
                            <p>{data.subheading}</p>
                        ) : null}
                    </div>
                )}
                <div data-reveal-stagger className="grid gap-[16px] md:grid-cols-2 xl:gap-[24px] 3xl:gap-[32px]">
                    {columns.map((col, idx) => (
                        <div
                            key={idx}
                            className="rounded-[20px] bg-[#FFF6EA] p-[20px] md:p-[24px] xl:rounded-[24px] xl:p-[30px] 2xl:p-[36px] 3xl:rounded-[30px] 3xl:p-[48px] dark:bg-[#18191B]"
                        >
                            <h3 className="mb-[14px] text-[14px] font-bold uppercase leading-[1.2] tracking-[0.14em] text-[#F97316] xl:mb-[18px] xl:text-[16px] 2xl:text-[18px] 3xl:mb-[26px] 3xl:text-[24px]">
                                {col.title}
                            </h3>
                            <div className="flex flex-wrap gap-[10px] xl:gap-[14px] 3xl:gap-[20px]">
                                {col.items.map((item, id) => (
                                    <Chip key={id} link={item.link} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
