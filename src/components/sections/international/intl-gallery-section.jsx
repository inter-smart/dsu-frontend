"use client";

import { useEffect, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import { Expand, Play } from "lucide-react";
import Image from "@/components/ui/safe-image";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const FILTERS = ["All", "Photos", "Videos"];

// Mosaic rhythm, repeated every 6 tiles: one feature tile, a tall tile and a wide pair (grid-flow-dense fills any gaps)
const SPANS = [
    "col-span-2 row-span-2",
    "",
    "lg:row-span-2",
    "",
    "col-span-2",
    "lg:col-span-2",
];

const matches = (item, filter) =>
    filter === "All" || (filter === "Videos" ? item?.isVideo : filter === "Photos" ? !item?.isVideo : item?.category === filter);

function GalleryTile({ item, index }) {
    const [cover, ...rest] = item.images?.length ? item.images : [""];
    const video = item.isVideo && item.videoUrl;
    const label = item.title || (item.isVideo ? "Video" : "Photo");

    return (
        <div className={`group relative overflow-hidden rounded-[12px] bg-[#FFF1E0] dark:bg-white/5 xl:rounded-[16px] ${SPANS[index % SPANS.length]}`}>
            <a
                href={video ? item.videoUrl : cover}
                data-fancybox="intl-gallery"
                data-caption={item.title || undefined}
                data-type={video ? "html5video" : "image"}
                aria-label={`${item.isVideo ? "Play video" : "View photo"}: ${label}`}
                className="absolute inset-0 block cursor-zoom-in focus-visible:outline-none"
            >
                {cover ? (
                    <Image
                        src={cover}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.06]"
                    />
                ) : video ? (
                    // a video without a poster image: its first frame is the thumbnail
                    <video src={`${item.videoUrl}#t=0.1`} preload="metadata" muted playsInline className="pointer-events-none h-full w-full object-cover" />
                ) : null}

                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100" />

                {item.isVideo && (
                    <span aria-hidden="true" className="absolute left-1/2 top-1/2 flex size-[52px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-(--basecolor) to-(--basecolor2) text-white shadow-[0_8px_24px_rgba(220,38,38,0.45)] transition-transform duration-300 motion-safe:group-hover:scale-110 xl:size-[64px]">
                        <span className="absolute inset-0 rounded-full bg-(--basecolor2)/50 motion-safe:animate-ping" />
                        <Play className="relative ml-[3px] size-[20px] fill-current xl:size-[24px]" />
                    </span>
                )}

                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-[12px] p-[14px] text-white transition-all duration-300 motion-safe:translate-y-[8px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 xl:p-[20px]">
                    <span className="min-w-0">
                        <span className="block text-[11px] font-medium uppercase tracking-[0.1em] text-white/75 xl:text-[12px]">{item.isVideo ? "Play video" : "View photo"}</span>
                        <span className="block truncate text-[15px] font-semibold xl:text-[17px] 3xl:text-[22px]">{label}</span>
                    </span>
                    {!item.isVideo && (
                        <span className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-(--basecolor) to-(--basecolor2) xl:size-[40px]">
                            <Expand className="size-[16px]" />
                        </span>
                    )}
                </span>
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit] ring-2 ring-inset ring-transparent transition-colors group-focus-within:ring-(--basecolor2)" />
            </a>
            {/* the card's other images join the same lightbox so it can page through them */}
            {!video && rest.map((src, i) => <a key={i} href={src} data-fancybox="intl-gallery" data-caption={item.title || undefined} className="hidden" tabIndex={-1} aria-hidden="true" />)}
        </div>
    );
}

// International flexible section: a mosaic gallery of photos and videos with Photos/Videos filters.
export default function IntlGallerySection({ data }) {
    const items = data?.items || [];
    const filters = (data?.filters?.length ? data.filters : FILTERS).filter((f) => f === "All" || items.some((it) => matches(it, f)));
    const [active, setActive] = useState("All");
    const shown = items.filter((it) => matches(it, active));

    useEffect(() => {
        Fancybox.bind("[data-fancybox='intl-gallery']", { Hash: false });
        return () => {
            Fancybox.unbind("[data-fancybox='intl-gallery']");
            Fancybox.close();
        };
    }, []);

    if (!items.length) return null;

    return (
        <section className="py-[15px] xl:py-[22px] 2xl:py-[28px] 3xl:py-[40px]">
            <div className="container">
                <div className="mb-[18px] flex flex-wrap items-end justify-between gap-x-[20px] gap-y-[14px] xl:mb-[28px]">
                    <div>
                        {data.title && <h2 className="cmn_Title relative pb-[12px] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[56px] after:rounded-full after:bg-gradient-to-r after:from-[#DC2626] after:to-[#F97316] after:content-[''] xl:pb-[16px] xl:after:w-[72px]">{data.title}</h2>}
                    </div>
                    {filters.length > 2 && (
                        <div role="group" aria-label="Filter gallery" className="flex w-full gap-[4px] sm:inline-flex sm:w-auto rounded-full border border-[#F97316]/20 bg-gradient-to-br from-[#FFF8EE] to-[#FFF1E0] p-[4px] dark:border-white/10 dark:from-[#18191B] dark:to-[#18191B]">
                            {filters.map((f) => {
                                const on = active === f;
                                const n = items.filter((it) => matches(it, f)).length;
                                return (
                                    <button
                                        key={f}
                                        type="button"
                                        aria-pressed={on}
                                        onClick={() => setActive(f)}
                                        className={`inline-flex flex-1 items-center justify-center gap-[8px] rounded-full px-[14px] sm:flex-none py-[7px] text-[13px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--basecolor) xl:px-[18px] xl:text-[14px] 3xl:text-[18px] ${
                                            on ? "bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white shadow-[0_4px_12px_rgba(220,38,38,0.25)]" : "text-[#212121] hover:text-[#DC2626] dark:text-white"
                                        }`}
                                    >
                                        {f}
                                        <span className={`rounded-full px-[7px] text-[11px] leading-[1.6] xl:text-[12px] ${on ? "bg-white/25 text-white" : "bg-[#F97316]/10 text-[#DC2626]"}`}>{n}</span>
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* filtered client-side: scroll-reveal must not hide tiles when the grid height changes */}
                <div data-no-reveal className="grid grid-flow-dense auto-rows-[150px] grid-cols-2 gap-[10px] sm:auto-rows-[200px] lg:auto-rows-[190px] lg:grid-cols-4 xl:auto-rows-[220px] xl:gap-[16px] 2xl:auto-rows-[250px] 3xl:auto-rows-[340px] 3xl:gap-[24px]">
                    {shown.map((item, i) => <GalleryTile key={item.id ?? i} item={item} index={i} />)}
                </div>
            </div>
        </section>
    );
}
