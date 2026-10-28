"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "swiper/css";

// Items per page: 3 cols x 2 rows on desktop, 2 x 2 on tablet, 1 x 2 on mobile
function useItemsPerPage() {
    const [perPage, setPerPage] = useState(6);

    useEffect(() => {
        const desktop = window.matchMedia("(min-width: 1024px)");
        const tablet = window.matchMedia("(min-width: 578px)");
        const update = () => setPerPage(desktop.matches ? 6 : tablet.matches ? 6 : 4);

        update();
        desktop.addEventListener("change", update);
        tablet.addEventListener("change", update);
        return () => {
            desktop.removeEventListener("change", update);
            tablet.removeEventListener("change", update);
        };
    }, []);

    return perPage;
}

export default function Gallery({ data }) {
    const { title, items } = data;
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);
    const containerRef = useRef(null);
    const perPage = useItemsPerPage();

    // Split into pages: [1..6], [7..12], ... Every item appears in exactly one page
    const pages = useMemo(() => {
        const result = [];
        for (let i = 0; i < items.length; i += perPage) {
            result.push(items.slice(i, i + perPage));
        }
        return result;
    }, [items, perPage]);

    // Fancybox handles every [data-fancybox] link inside this section
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        Fancybox.bind(container, "[data-fancybox='campus-gallery']", {
            Hash: false,
        });

        return () => {
            Fancybox.unbind(container);
            Fancybox.close();
        };
    }, []);

    const arrowClass =
        "flex size-8 items-center justify-center text-(--basecolor) transition-opacity duration-300 hover:opacity-70 [&.swiper-button-disabled]:opacity-30 [&.swiper-button-lock]:hidden";

    return (
        <section id="gallery" className="w-full bg-white py-10 lg:py-14 2xl:py-[60px]">
            <div className="container" ref={containerRef}>
                {/* Heading + arrows */}
                <div className="mb-6 flex items-center justify-between lg:mb-8 2xl:mb-[48px]">
                    <h2 className="text-[28px] font-bold leading-tight tracking-[-0.03em] text-[#1a1a1a] lg:text-[36px] 2xl:text-[48px]">
                        {title}
                    </h2>

                    <div className="flex items-center gap-1">
                        <button ref={setPrevEl} type="button" aria-label="Previous" className={arrowClass}>
                            <ChevronLeft className="w-5 2xl:w-6" strokeWidth={1.5} />
                        </button>
                        <button ref={setNextEl} type="button" aria-label="Next" className={arrowClass}>
                            <ChevronRight className="w-5 2xl:w-6" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

                {/* key remounts the slider when the page size changes, so it restarts on page 1 */}
                <Swiper
                    key={perPage}
                    modules={[Navigation]}
                    navigation={{ prevEl, nextEl }}
                    slidesPerView={1}
                    spaceBetween={24}
                    speed={500}
                    className="!w-full"
                >
                    {pages.map((page, pageIndex) => (
                        <SwiperSlide key={pageIndex}>
                            {/* <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 md:gap-[18px] lg:grid-cols-3 lg:gap-[21px] 2xl:gap-x-[21px] 2xl:gap-y-[25px]"> */}
                            <div className="flex flex-wrap -m-[5px] xl:-m-[8px] 3xl:-m-[10px] w-full">

                                {page.map((item) => (
                                    <div className="w-1/2 sm:w-1/3 p-[5px] xl:p-[8px]  3xl:p-[10px]  ">
                                        <a
                                            key={item.id}
                                            href={item.src}
                                            data-fancybox="campus-gallery"
                                            data-caption={item.caption}
                                            aria-label={`${item.type === "video" ? "Play video" : "View image"}: ${item.caption}`}
                                            className="group relative block aspect-[561/370] w-full overflow-hidden rounded-[10px]"
                                        >
                                            <Image
                                                src={item.thumbnail}
                                                alt={item.caption}
                                                fill
                                                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />

                                            {/* Play button for videos */}
                                            {item.type === "video" && (
                                                <span className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#333] backdrop-blur-[2px] transition-transform duration-300 group-hover:scale-110 lg:size-12 2xl:size-[56px]">
                                                    <Play className="size-5 fill-current pl-0.5 2xl:size-6" />
                                                </span>
                                            )}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}