"use client";

import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import { BlocksRenderer } from "@/components/ui/blocks-renderer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const sanitizeHtml = (html) =>
    DOMPurify.sanitize(html || "", {
        USE_PROFILES: { html: true },
        ADD_TAGS: ["iframe"],
        ADD_ATTR: ["target", "srcdoc", "allow", "allowfullscreen", "frameborder", "loading", "referrerpolicy"],
        FORBID_TAGS: ["style", "form", "input", "button"],
    });

const cellDivider = "relative after:absolute after:content-[''] after:top-0 after:right-0 after:bottom-0 after:m-auto after:w-[1px] after:h-[50%] after:bg-black/10 last:after:hidden";

// The table inside an accordion item: same design as the common Committee table
// (column headings + rows; each row's cells fill the columns in order, optional row image in the first cell).
function ItemTable({ headers = [], rows = [] }) {
    const hasImages = rows.some((row) => row.image);
    const hasHeaders = headers.some(Boolean);
    if (!hasHeaders && !rows.length) return null;
    const columnCount = Math.max(headers.length, ...rows.map((row) => row.cells?.length || 0), 1);
    const columns = Array.from({ length: columnCount }, (_, idx) => idx);

    return (
        <div className="w-full rounded-[10px] max-lg:overflow-x-auto mt-[10px]">
            <table
                className="w-full table-fixed border-separate border-spacing-y-[10px]"
                style={{ minWidth: Math.max(600, columnCount * 180) }}
            >
                <colgroup>
                    {columns.map((idx) => (
                        <col key={idx} style={{ width: `${100 / columnCount}%` }} />
                    ))}
                </colgroup>
                {hasHeaders && (
                    <thead>
                        <tr className="bg-gradient-to-r from-[rgba(220,38,38,0.8)] to-[rgba(249,115,22,0.8)]">
                            {columns.map((idx) => (
                                <th
                                    key={idx}
                                    className={`break-words text-[13px] lg:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-normal uppercase text-white first:rounded-l-[10px] last:rounded-r-[10px] ${idx === 0 && !hasImages
                                        ? "text-left p-[10px_18px] xl:p-[15px_20px] 2xl:p-[18px_30px] 3xl:p-[20px_40px]"
                                        : "text-center p-[10px_15px] xl:p-[15px] 2xl:p-[18px_20px] 3xl:p-[20px_25px]"}`}
                                >
                                    {headers[idx]}
                                </th>
                            ))}
                        </tr>
                    </thead>
                )}
                <tbody>
                    {rows.map((row, rowIdx) => (
                        <tr
                            key={row.id ?? rowIdx}
                            className="rounded-[10px] bg-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.08)] hover:bg-gradient-to-b hover:from-[#FFF8EE] hover:to-[#FFF3E0]"
                        >
                            {columns.map((idx) =>
                                idx === 0 ? (
                                    <td key={idx} className={`first:rounded-l-[10px] last:rounded-r-[10px] p-[15px_18px] xl:p-[15px_20px] 2xl:p-[18px_30px] 3xl:p-[20px_40px] ${cellDivider}`}>
                                        <div className="flex items-center">
                                            {row.image && (
                                                <div className="h-[50px] xl:h-[61px] 2xl:h-[73px] 3xl:h-[92px] w-[50px] xl:w-[61px] 2xl:w-[73px] 3xl:w-[92px] shrink-0 overflow-hidden rounded-full">
                                                    <Image
                                                        src={row.image}
                                                        width={92}
                                                        height={92}
                                                        className="h-full w-full object-cover"
                                                        alt={row.cells?.[0] || "Table image"}
                                                    />
                                                </div>
                                            )}
                                            <div className={`min-w-0 break-words whitespace-pre-line text-[12px] md:text-[16px] font-semibold text-[#212121] ${row.image ? "pl-[15px] xl:pl-[25px] 2xl:pl-[35px] 3xl:pl-[45px]" : ""}`}>
                                                {row.cells?.[0]}
                                            </div>
                                        </div>
                                    </td>
                                ) : (
                                    <td key={idx} className={`last:rounded-r-[10px] p-[12px] xl:p-[15px] 2xl:p-[18px_20px] 3xl:p-[20px_25px] text-center text-[14px] md:text-[16px] font-semibold text-[#4A5565] ${cellDivider}`}>
                                        <div className="m-auto text-center break-words whitespace-pre-line">{row.cells?.[idx]}</div>
                                    </td>
                                )
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// Common flexible section: heading + description above a full-width accordion.
// Each item opens to a rich text and (optionally) a table.
export default function AccordionTable({ data }) {
    const items = data?.items || [];
    const hasDescription = Array.isArray(data?.description) ? data.description.length > 0 : Boolean(data?.description);
    const hasHeader = Boolean(data?.heading) || hasDescription;

    return (
        <section
            className={
                hasHeader
                    ? "relative py-[5px_40px] xl:py-[5px_60px] 2xl:py-[20px_70px] 3xl:py-[30px_90px]"
                    : "relative py-[15px] xl:py-[22px] 2xl:py-[28px] 3xl:py-[40px]"
            }
        >
            <div className="container">
                {hasHeader && (
                    <div className="flex flex-wrap justify-between mb-[30px] 2xl:mb-[45px]">
                        {data.heading && (
                            <div className="text-[18px] lg:text-[25px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[45px] font-semibold">
                                {data.heading}
                            </div>
                        )}
                        {hasDescription && (
                            <div className="text_1 text-[#4A5565] w-full lg:w-[45%] ml-auto dark:text-[#9CA3AF] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px] typography">
                                <BlocksRenderer content={data.description} />
                            </div>
                        )}
                    </div>
                )}
                <Accordion type="single" collapsible>
                    {items.map((item, idx) => {
                        const hasTable = (item.headers || []).some(Boolean) || (item.rows || []).length > 0;
                        return (
                            <AccordionItem
                                key={item.id ?? idx}
                                value={`item-${item.id ?? idx}`}
                                className="border border-[#9fa2a76b] rounded-[6px] mb-[10px] xl:mb-[20px] last-of-type:mb-0"
                            >
                                <AccordionTrigger className="relative p-[8px_10px] md:p-[15px] xl:p-[18px] 3xl:p-[20px_25px] font-medium !text-black text-[11px] hover:no-underline md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[20px] pr-[10px] md:pr-[15px] 2xl:pr-[25px] after:absolute after:right-[5px] after:md:right-[10px] after:2xl:right-[20px] after:top-1/2 after:-translate-y-1/2 after:content-['+'] after:text-[18px] after:font-bold after:text-base2 dark:after:text-white data-[state=open]:after:!content-['-'] data-[panel-open]:after:!content-['-'] aria-expanded:after:!content-['-'] [&>svg]:!hidden">
                                    <div className="w-full">
                                        <div className="cmn_Txt text-[#212121] dark:text-white font-semibold">{item.question}</div>
                                    </div>
                                </AccordionTrigger>
                                {(item.answer || hasTable) && (
                                    <AccordionContent className="p-[8px_10px] md:p-[15px] xl:p-[18px] 3xl:p-[20px_25px] pt-0! text_1 [&_p]:text_1 [&_p]:3xl:text-[20px] [&_p]:text-[#212121] [&_p]:leading-normal [&_p]:font-normal [&_p]:mb-[30px] [&_p]:last-of-type:mb-[10px]">
                                        {item.answer && (
                                            <div className="w-full typography">
                                                <div
                                                    className="ck-content blocks-html w-full overflow-x-auto"
                                                    dangerouslySetInnerHTML={{ __html: sanitizeHtml(item.answer) }}
                                                />
                                            </div>
                                        )}
                                        {hasTable && <ItemTable headers={item.headers} rows={item.rows} />}
                                    </AccordionContent>
                                )}
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        </section>
    );
}
