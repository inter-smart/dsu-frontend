"use client";

import { useState } from "react";
import Image from "next/image";
import { BlocksRenderer } from "@/components/ui/blocks-renderer";
import RichText from "@/components/ui/rich-text";
import LibrarySidebar from "./library-sidemenubar";

// Video id of a YouTube link (watch / youtu.be / embed / shorts) or a bare 11-character id; "" when it is not one.
const youtubeId = (input) => {
    const text = String(input ?? "").trim();
    if (/^[\w-]{11}$/.test(text)) return text;
    const m = text.match(/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/|v\/)|youtu\.be\/)([\w-]{11})/i);
    return m ? m[1] : "";
};

// The media chosen in the CMS (Media Type): image, uploaded video or YouTube. Same 1260 x 350 frame as before for the image.
function LibraryMedia({ data }) {
    const type = data.mediaType ?? "image";
    if (type === "video" && data.video?.url) {
        return (
            <div className="w-full aspect-video overflow-hidden rounded-[10px] bg-black mb-[30px]">
                <video src={data.video.url} controls playsInline preload="metadata" className="w-full h-full object-contain" />
            </div>
        );
    }
    if (type === "youtube") {
        const id = youtubeId(data.youtubeUrl);
        if (!id) return null;
        return (
            <div className="w-full aspect-video overflow-hidden rounded-[10px] bg-black mb-[30px]">
                <iframe
                    src={`https://www.youtube-nocookie.com/embed/${id}`}
                    title={data.heading || "Library video"}
                    loading="lazy"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                    className="w-full h-full border-0"
                />
            </div>
        );
    }
    if (type === "image" && data.image?.url) {
        return (
            <div className="w-full aspect-[1260/350] overflow-hidden mb-[30px]">
                <Image src={data.image.url} width="1260" height="350" alt={data.image.alternativeText || ""} />
            </div>
        );
    }
    return null;
}

// Table with a label column and any number of value columns; scrolls sideways when the columns do not fit.
// `table` is { columns, rows: [{ id, label, values }] }; the static page still passes the old `items: [{ label, value }]`.
const asTable = (t) =>
    t?.table ?? (t?.items?.length ? { columns: [], rows: t.items.map((r, i) => ({ id: i, label: r.label, values: [r.value ?? ""] })) } : null);

function LibraryTable({ heading, note, table, className = "" }) {
    const { columns, rows } = table;
    const hasHead = columns.some(Boolean);
    return (
        <div className={`w-full border border-black/10 dark:border-white/10 bg-[#F4F8FD] dark:bg-[#18191B] rounded-[4px] xl:rounded-[8px] 3xl:rounded-[10px] ${className}`}>
            {(heading || note) && (
                <div className="flex items-center flex-wrap justify-between border-b border-black/10 dark:border-white/10 p-[12px] xl:p-[15px] 2xl:p-[20px] 3xl:p-[23px]">
                    <div className="cmn_Txt dark:text-white">{heading}</div>
                    <div className="text_1 dark:text-[#9CA3AF]">{note}</div>
                </div>
            )}
            <div className="p-[15px_12px] xl:p-[20px_15px] 2xl:p-[30px_20px] 3xl:p-[40px_23px] w-full overflow-x-auto">
                <table className="w-full border-collapse text-left">
                    {hasHead && (
                        <thead>
                            <tr className="border-b border-black/10 dark:border-white/10">
                                <th className="text_1 font-semibold dark:text-white py-[10px] pr-[15px]">{columns[0]}</th>
                                {rows[0].values.map((_, i) => (
                                    <th key={i} className="text_1 font-semibold dark:text-white py-[10px] px-[10px] text-right whitespace-nowrap">{columns[i + 1]}</th>
                                ))}
                            </tr>
                        </thead>
                    )}
                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.id} className="border-b border-black/10 dark:border-white/10">
                                <td className="text_1 dark:text-[#9CA3AF] py-[10px] pr-[15px]">{row.label}</td>
                                {row.values.map((v, i) => (
                                    <td key={i} className="text_1 dark:text-white py-[10px] px-[10px] text-right whitespace-nowrap">{v?.trim() ? v : "-"}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default function LibraryOverview({ data, menu }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    // only the "Overview" entry (no sub-pages) means no sidebar: the content takes the full width
    const hasMenu = !Array.isArray(menu) || menu.length > 1; // no menu passed = the sidebar's built-in default list

    return (
        <section className="relative py-[40px_60px] xl:py-[55px_80px] 2xl:py-[65px_100px] 3xl:py-[75px_170px] dark:bg-[#101010]">
            <div className="container">
                <div className="cmnFlx">
                    <div className={hasMenu ? "leftBx lg:sticky lg:top-[140px] lg:left-0 lg:h-full" : "hidden"}>
                        <LibrarySidebar
                            data={menu}
                            isOpen={isMobileSidebarOpen}
                            onClose={() => setIsMobileSidebarOpen(false)}
                        />
                    </div>
                    <div className={hasMenu ? "rtBx" : "w-full"}>
                        
                        <div className="w-full lg:h-full rounded-[10px] border border-black/10 dark:border-white/10 p-[15px] md:p-[20px] lg:p-[25px] xl:p-[35px_30px] 2xl:p-[40px_40px] 3xl:p-[50px]">
                            <h2 className="cmn_Title dark:text-white mb-[25px]">
                                {data.heading}
                            </h2>
                            <div className="text_1 leading-[1.2] text-[#4A5565] dark:text-[#9CA3AF] mb-[8px] xl:mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]  typography">
                                {data.description && <BlocksRenderer content={data.description} />}
                            </div>
                            <LibraryMedia data={data} />
                            <div className="flex flex-wrap -m-[5px] md:-m-[10px] lg:-m-[15px] xl:-m-[15px] 2xl:-m-[30px] 3xl:-m-[35px] !mb-[15px] 2xl:!mb-[25px] 3xl:!mb-[35px]">
                                {data?.infoCards.map((item, id) => (
                                    <div key={item.id ?? id} className="w-full md:w-1/2 p-[5px] md:p-[10px] lg:p-[15px] xl:p-[15px] 2xl:p-[30px] 3xl:p-[35px]">
                                        <div className="w-full h-full border border-black/10 dark:border-white/10 bg-[#F4F8FD] dark:bg-[#18191B] rounded-[10px] p-[20px_15px]  3xl:p-[30px_25px]">
                                            <div className="cmn_Txt dark:text-white mb-[10px]">{item.title}</div>
                                            {item?.items.map((card) => (
                                                <div key={card.id ?? card.label} className="text_1 font-semibold text-[#4A5565] dark:text-[#9CA3AF]">
                                                    {card.label}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {asTable(data?.libraryCollections) && (
                                <LibraryTable
                                    heading={data.libraryCollections.heading}
                                    note={data.libraryCollections.statisticsDate}
                                    table={asTable(data.libraryCollections)}
                                    className="mb-[30px] 2xl:mb-[40px] 3xl:mb-[60px]"
                                />
                            )}
                            {data?.extraContent && (
                                <RichText value={data.extraContent} className="text_1 leading-[1.2] text-[#4A5565] dark:text-[#9CA3AF] mb-[30px] 2xl:mb-[40px] 3xl:mb-[60px]" />
                            )}
                            <div className="w-full">
                                <div className="cmn_Title dark:text-white">{data?.membershipSection.heading}</div>
                                <div className="text_1 leading-[1.2] text-[#4A5565] dark:text-[#9CA3AF] mb-[8px] xl:mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]  typography">
                                    {data?.membershipSection?.description && <BlocksRenderer content={data.membershipSection.description} />}
                                </div>
                                {asTable(data?.membershipSection?.membershipTable) && (
                                    <LibraryTable
                                        table={asTable(data.membershipSection.membershipTable)}
                                        className="mb-[30px] 2xl:mb-[40px] 3xl:mb-[60px]"
                                    />
                                )}
                                <div className="text_1 dark:text-[#9CA3AF] mb-[20px]">
                                    {data?.membershipSection?.documentsRequired.description}
                                </div>
                                <ul>
                                    {data?.membershipSection?.documentsRequired?.items.map((item, id) => (
                                        <li className="text_1 text-[#4A5565] dark:text-[#9CA3AF] relative before:absolute before:content-[''] before:top-[8px] before:lg:top-[12px] before:left-0 before:w-[5px] before:h-[5px] before:rounded-full before:bg-[#212121] dark:before:bg-[#F97316] pl-[15px] lg:pl-[20px]" key={id}>
                                            {item.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}