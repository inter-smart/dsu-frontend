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
import TableScrollBox from "@/components/layout/common/TableScrollBox";
import { withLineBreaks } from "@/lib/line-breaks";

const sanitizeHtml = (html) =>
    DOMPurify.sanitize(html || "", {
        USE_PROFILES: { html: true },
        ADD_TAGS: ["iframe"],
        ADD_ATTR: ["target", "srcdoc", "allow", "allowfullscreen", "frameborder", "loading", "referrerpolicy"],
        FORBID_TAGS: ["style", "form", "input", "button"],
    });

const cellDivider = "relative after:absolute after:content-[''] after:top-0 after:right-0 after:bottom-0 after:m-auto after:w-[1px] after:h-[50%] after:bg-black/10 last:after:hidden";

// CHANGED: same divider for the header cells, in white so it shows on the gradient
const headerDivider = "relative after:absolute after:content-[''] after:top-0 after:right-0 after:bottom-0 after:m-auto after:w-[1px] after:h-[50%] after:bg-white/40 last:after:hidden";

// colours for quartile values (Q1 to Q4) in wide tables
const QUARTILE = {
    Q1: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    Q2: "bg-sky-50 text-sky-700 ring-sky-200",
    Q3: "bg-amber-50 text-amber-700 ring-amber-200",
    Q4: "bg-rose-50 text-rose-700 ring-rose-200",
};

// The table inside an accordion item: same design as the common Committee table
// (column headings + rows; each row's cells fill the columns in order, optional row image in the first cell).
function ItemTable({ headers = [], rows = [] }) {
    const hasImages = rows.some((row) => row.image);
    const hasHeaders = headers.some(Boolean);
    if (!hasHeaders && !rows.length) return null;
    const columnCount = Math.max(headers.length, ...rows.map((row) => row.cells?.length || 0), 1);
    const columns = Array.from({ length: columnCount }, (_, idx) => idx);
    // tables with many columns (like the publications table) size their columns to the content
    const isWide = columnCount > 5;
    // columns with long text (authors, titles...) are left-aligned in wide tables
    const longCols = columns.map(
        (idx) => isWide && idx > 0 && rows.some((row) => String(row.cells?.[idx] ?? "").length > 30),
    );
    // colour classes when a cell is Q1, Q2, Q3 or Q4 (wide tables only)
    const quartileClass = (value) =>
        isWide ? QUARTILE[String(value ?? "").trim().toUpperCase()] : undefined;

    return (
        <div
            className={
                "not-typography w-full rounded-[10px] mt-[10px] " +
                /* scrolling switches off from xl (1280px), so laptops show the whole table */
                (isWide ? "overflow-x-auto xl:overflow-visible" : "max-lg:overflow-x-auto")
            }
        >
            {/* CHANGED: valid scrollbar-hiding classes (the old [scrollbar-width]:hidden did nothing) */}
            <TableScrollBox className="max-h-[400px] overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <table
                    className={`w-full border-separate border-spacing-y-[10px] ${isWide ? "table-auto" : "table-fixed"}`}
                    /* wide tables need 100px per column before they scroll */
                    style={{ minWidth: isWide ? columnCount * 100 : Math.max(600, columnCount * 180) }}
                >
                    <colgroup>
                        {columns.map((idx) => (
                            /* in wide tables the first column (SL .NO) is 60px wide when it has no images; the others size to their content */
                            <col
                                key={idx}
                                style={
                                    isWide
                                        ? idx === 0 && !hasImages
                                            ? { width: 60 }
                                            : undefined
                                        : { width: `${100 / columnCount}%` }
                                }
                            />
                        ))}
                    </colgroup>
                    {hasHeaders && (
                        <thead className="sticky top-0 z-10 bg-white">
                            <tr className="bg-gradient-to-r from-[rgba(220,38,38,0.8)] to-[rgba(249,115,22,0.8)]">
                                {columns.map((idx) => (
                                    <th
                                        key={idx}
                                        /* CHANGED: added ${headerDivider} at the start of the className */
                                        className={`${headerDivider} break-words font-normal uppercase text-white first:rounded-l-[10px] last:rounded-r-[10px] ${isWide
                                            ? `text-[12px] lg:text-[13px] 2xl:text-[14px] 3xl:text-[16px] leading-[1.25] ${idx === 0
                                                ? "p-[10px_10px] xl:p-[11px_10px]"
                                                : "p-[10px_10px] xl:p-[11px_10px] 2xl:p-[12px_14px] 3xl:p-[14px_18px]"}`
                                            : "text-[13px] lg:text-[16px] 2xl:text-[18px] 3xl:text-[20px]"} ${isWide && String(headers[idx] ?? "").length <= 8 ? "whitespace-nowrap" : ""} ${idx === 0 && !hasImages && !isWide
                                                ? "text-left p-[10px_18px] xl:p-[15px_20px] 2xl:p-[18px_30px] 3xl:p-[20px_40px]"
                                                : `${longCols[idx] ? "text-left" : "text-center"} ${isWide ? "" : "p-[10px_15px] xl:p-[15px] 2xl:p-[18px_20px] 3xl:p-[20px_25px]"}`}`}
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
                                className="rounded-[10px] bg-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-colors duration-300 hover:bg-gradient-to-b hover:from-[#FFF8EE] hover:to-[#FFF3E0]"
                            >
                                {columns.map((idx) =>
                                    idx === 0 ? (
                                        /* in wide tables the first cell (no image) uses slim padding instead of up to 40px each side */
                                        <td key={idx} className={`first:rounded-l-[10px] last:rounded-r-[10px] ${isWide && !row.image ? "p-[10px_6px] xl:p-[12px_8px] 2xl:p-[16px_10px]" : "p-[15px_18px] xl:p-[15px_20px] 2xl:p-[18px_30px] 3xl:p-[20px_40px]"} ${cellDivider}`}>
                                            <div className={`flex items-center ${isWide && !row.image ? "justify-center" : ""}`}>
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
                                                    {/* short serial numbers in wide tables show as a circular badge */}
                                                    {isWide && !row.image && String(row.cells?.[0] ?? "").length <= 4 ? (
                                                        <span className="inline-flex size-[30px] items-center justify-center rounded-full bg-[#FFF3E0] text-[13px] font-bold text-[#EA580C] xl:size-[34px] xl:text-[14px]">
                                                            {row.cells?.[0]}
                                                        </span>
                                                    ) : (
                                                        row.cells?.[0]
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                    ) : (
                                        /* in wide tables the other cells use tighter padding and 13px text on laptops (original sizes for other tables) */
                                        <td key={idx} className={`last:rounded-r-[10px] ${isWide ? "p-[10px_8px] xl:p-[12px_10px] 2xl:p-[16px_14px] 3xl:p-[20px_20px] text-[13px] 2xl:text-[14px] 3xl:text-[16px]" : "p-[12px] xl:p-[15px] 2xl:p-[18px_20px] 3xl:p-[20px_25px] text-[14px] 3xl:text-[16px]"} ${longCols[idx] ? "text-left font-medium leading-[1.6] text-[#374151]" : "text-center font-semibold text-[#4A5565]"} ${cellDivider}`}>
                                            <div className={`${longCols[idx] ? "text-left" : "m-auto text-center"} break-words ${isWide && String(row.cells?.[idx] ?? "").length <= 12 ? "whitespace-nowrap" : "whitespace-pre-line"}`}>
                                                {/* Q1 to Q4 values show as coloured pills */}
                                                {quartileClass(row.cells?.[idx]) ? (
                                                    <span className={`inline-flex min-w-[34px] items-center justify-center rounded-full px-[10px] py-[3px] text-[13px] font-bold ring-1 ring-inset ${quartileClass(row.cells?.[idx])}`}>
                                                        {row.cells?.[idx]}
                                                    </span>
                                                ) : (
                                                    row.cells?.[idx]
                                                )}
                                            </div>
                                        </td>
                                    )
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </TableScrollBox>
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
                            <h2 className="text-[18px] lg:text-[25px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[45px] font-semibold">
                                {withLineBreaks(data.heading)}
                            </h2>
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
                                className="border border-[#9fa2a76b] rounded-[6px] mb-[10px] xl:mb-[20px] last-of-type:mb-0 transition-all duration-300 data-[state=open]:border-[#F97316]/50 data-[state=open]:shadow-[0_10px_35px_rgba(249,115,22,0.12)] data-[open]:border-[#F97316]/50 data-[open]:shadow-[0_10px_35px_rgba(249,115,22,0.12)]"
                            >
                                <AccordionTrigger headerAs={data?.heading ? "h3" : "h2"} className="relative p-[8px_10px] md:p-[15px] xl:p-[18px] 3xl:p-[20px_25px] font-medium !text-black text-[11px] hover:no-underline md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[20px] pr-[46px] md:pr-[56px] 2xl:pr-[66px] outline-none focus:ring-0 focus-visible:ring-0 focus-visible:border-transparent focus-visible:bg-[#FFF8EE] after:absolute after:right-[8px] after:md:right-[14px] after:2xl:right-[22px] after:top-1/2 after:-translate-y-1/2 after:flex after:size-[26px] after:md:size-[30px] after:3xl:size-[36px] after:items-center after:justify-center after:rounded-full after:bg-[#FFF3E0] after:text-[#EA580C] after:leading-none after:content-['+'] after:text-[18px] after:font-bold after:transition-all after:duration-300 dark:after:bg-white/10 dark:after:text-white data-[state=open]:after:!content-['−'] data-[panel-open]:after:!content-['−'] aria-expanded:after:!content-['−'] aria-expanded:after:bg-gradient-to-r aria-expanded:after:from-[#DC2626] aria-expanded:after:to-[#F97316] aria-expanded:after:text-white [&>svg]:!hidden">
                                    <div className="w-full">
                                        <div className="cmn_Txt text-[#212121] dark:text-white font-semibold">{item.question}</div>
                                    </div>
                                </AccordionTrigger>
                                {(item.answer || hasTable) && (
                                    <AccordionContent className="typography p-[8px_10px] md:p-[15px] xl:p-[18px] 3xl:p-[20px_25px] pt-0! text_1 [&_p]:text_1 [&_p]:3xl:text-[20px] [&_p]:text-[#212121] [&_p]:leading-normal [&_p]:font-normal [&_p]:mb-[30px] [&_p]:last-of-type:mb-[10px]">
                                        {item.answer && (
                                            <div
                                                className="ck-content blocks-html w-full overflow-x-auto"
                                                dangerouslySetInnerHTML={{ __html: sanitizeHtml(item.answer) }}
                                            />
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