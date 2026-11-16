"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "swiper/css";
import "swiper/css/pagination";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { BlocksRenderer } from "@/components/ui/blocks-renderer";

// Pulls the 11 character video id out of any YouTube link (watch, youtu.be, embed, shorts)
const getYouTubeId = (url = "") =>
    url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/)?.[1];

// Turns one CMS item into what the card needs.
// type: "image" | "video" | "youtube" (guessed from the fields if type is missing)
function normalize(item) {
    const type =
        item?.type ||
        (item?.youtubeUrl ? "youtube" : item?.video?.url ? "video" : "image");

    if (type === "youtube") {
        const id = getYouTubeId(item?.youtubeUrl);
        if (!id) return null;
        return {
            id: item?.id ?? id,
            type,
            href: item.youtubeUrl,
            thumb: item?.thumbnail?.url || `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
            caption: item?.title || "",
        };
    }
    if (type === "video") {
        if (!item?.video?.url) return null;
        return {
            id: item?.id ?? item.video.url,
            type,
            href: item.video.url,
            thumb: item?.thumbnail?.url || "", // empty -> first frame of the video is used
            caption: item?.title || "",
        };
    }
    if (!item?.image?.url) return null;
    return {
        id: item?.id ?? item.image.url,
        type: "image",
        href: item.image.url,
        thumb: item.image.url,
        caption: item?.title || item?.image?.alternativeText || "",
    };
}

function GalleryCard({ item, group }) {
    const isVideo = item.type === "video";
    const isPlayable = item.type === "video" || item.type === "youtube";

    return (
        <a
            href={item.href}
            data-fancybox={group}
            data-caption={item.caption}
            {...(isVideo && { "data-type": "html5video" })}
            className="group relative block w-full aspect-[4/3] overflow-hidden rounded-[10px] bg-black/5 dark:bg-white/5 cursor-zoom-in"
        >
            {item.thumb ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={item.thumb}
                    alt={item.caption}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            ) : (
                // video without a thumbnail: show its first frame
                <video
                    src={`${item.href}#t=0.5`}
                    muted
                    playsInline
                    preload="metadata"
                    className="pointer-events-none h-full w-full object-cover"
                />
            )}

            {isPlayable && (
                <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
                    <span className="flex h-[54px] w-[54px] 3xl:h-[72px] 3xl:w-[72px] items-center justify-center rounded-full bg-linear-to-r from-(--basecolor) to-(--basecolor2) shadow-lg">
                        <svg className="ml-[3px] h-[20px] w-[20px] 3xl:h-[26px] 3xl:w-[26px] fill-white" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </span>
                </span>
            )}

            {item.caption && (
                <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-[20px] pb-[30px] pt-[28px] text_1 font-semibold leading-tight text-white">
                    {item.caption}
                </span>
            )}
        </a>
    );
}

export default function CommonGallery({ data }) {
    const ref = useRef(null);
    const items = (data?.items || []).map(normalize).filter(Boolean);

    // Bind Fancybox only inside this section (grid and slider each have their own group)
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        Fancybox.bind(el, "[data-fancybox]", {
            Images: { initialSize: "fit", Panzoom: { maxScale: 2 } },
        });
        return () => Fancybox.unbind(el);
    }, []);

    if (!data || items.length === 0) return null;

    return (
        <section
            ref={ref}
            className="py-[40px] xl:py-[60px] 2xl:py-[75px] 3xl:py-[90px] bg-white dark:bg-[#0f1011] transition-colors duration-300"
        >
            {/* keeps the Fancybox image inside the screen */}
            <style>{`
                .fancybox__container .fancybox__slide { padding: 24px; }
                .fancybox__container .fancybox__content > img.fancybox__image {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }
                .gallery-swiper .swiper-pagination-bullet-active { background: var(--basecolor2); }
            `}</style>

            <div className="container">
                {data?.title && (
                    <Heading as="h2" className="cmn_Title leading-[1.1] mb-[8px] 3xl:mb-[16px] dark:text-white">
                        {data.title}
                    </Heading>
                )}
                {Array.isArray(data?.description) ? (
                    <div className="text_1 typography">
                        <BlocksRenderer content={data.description} />
                    </div>
                ) : (

                    data?.description && <div className="text_1 typography">
                        <Text>{data.description}</Text>
                    </div>
                )}

                {/* Desktop / tablet: grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-[15px] 3xl:gap-[28px] mt-[25px] 2xl:mt-[35px] 3xl:mt-[50px]">
                    {items.map((item) => (
                        <GalleryCard key={item.id} item={item} group="gallery-grid" />
                    ))}
                </div>

                {/* Mobile: Swiper slider */}
                <div className="md:hidden mt-[20px]">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        slidesPerView={1.15}
                        spaceBetween={12}
                        className="gallery-swiper !pb-[35px]"
                    >
                        {items.map((item) => (
                            <SwiperSlide key={item.id}>
                                <GalleryCard item={item} group="gallery-slider" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}