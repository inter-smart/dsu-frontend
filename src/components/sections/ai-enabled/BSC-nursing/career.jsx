"use client";
import { BlocksRenderer } from "@/components/ui/blocks-renderer";
import { withLineBreaks } from "@/lib/line-breaks";


// Bullet lists inside the description render as the same dotted rows the separate opportunity list uses.
// Ordered lists (format === "ordered") render as <ol> with orange counters instead of dots.
// Classes are forced with ! so the global `.typography` ul/ol/li rules from the text editor can't leak in.
const listBase =
    "!list-none !pl-0 !m-0 flex flex-col gap-[8px] xl:gap-[10px]";

const descriptionBlocks = {
    list: ({ children, format }) => {
        const isOrdered = format === "ordered";
        const Tag = isOrdered ? "ol" : "ul";
        return (
            <Tag className={isOrdered ? `${listBase} [counter-reset:item]` : listBase}>
                {children}
            </Tag>
        );
    },
    "list-item": ({ children }) => (
        <li className="flex items-start gap-[10px] text_1 !list-none !m-0 !p-0 [counter-increment:item] before:!content-none">
            {/* dot (unordered lists only), centred on the first text line */}
            <span className="[ol>li>&]:hidden flex items-center shrink-0 h-[1.6em] xl:h-[1.7em]">
                <span className="w-[6px] xl:w-[8px] 3xl:w-[10px] h-[6px] xl:h-[8px] 3xl:h-[10px] relative top-[-2px] rounded-full bg-gradient-to-r from-[#DC2626] to-[#F97316]" />
            </span>
            {/* counter (ordered lists only) */}
            <span className="hidden [ol>li>&]:inline-block shrink-0 min-w-[1.4em] font-semibold text-[#F97316] after:content-[counter(item)_'.']" />
            <div className="min-w-0 flex-1 text-[#000] dark:text-[#9CA3AF] [&_strong]:font-semibold [&_strong]:text-[#000] dark:[&_strong]:text-white [&>ul]:!mt-[8px] [&>ol]:!mt-[8px]">
                {children}
            </div>
        </li>
    ),
};

export default function CareerSection({ data }) {

    return (
        <section className="relative py-[20px_60px] xl:py-[55px] 2xl:py-[65px] 3xl:py-[75px]">
            <div className="container">
                <div className="w-full">
                    <h2 className="cmn_Title mb-[25px]">
                        {withLineBreaks(data.heading)}
                    </h2>
                    {/* the [&_:is(ul,ol)+...] classes give a gap to any paragraph/heading that follows a list */}
                    <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px] [&_:is(ul,ol)+:is(p,h1,h2,h3,h4,h5,h6)]:!mt-[20px] xl:[&_:is(ul,ol)+:is(p,h1,h2,h3,h4,h5,h6)]:!mt-[25px] typography">
                        <BlocksRenderer content={data.description} blocks={descriptionBlocks} />
                    </div>
                   {data?.opportunity && (
                        <ul className="!list-none !pl-0 !mt-[20px] xl:!mt-[25px] !mb-0 flex flex-col gap-[8px] xl:gap-[10px]">
                            {data.opportunity.map((item) => (
                                <li key={item.id} className="flex items-start gap-[10px] text_1 !list-none !m-0 !p-0 before:!content-none">
                                     <span className="text-[#4A5565] dark:text-[#9CA3AF]">
                                        {item.description.map((segment, i) => (
                                            <span key={i} className={segment.bold ? "font-semibold text-[#4A5565] dark:text-white" : ""}>
                                                {withLineBreaks(segment.text)}
                                            </span>
                                        ))}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}

                </div>
            </div>
        </section>
    )
}