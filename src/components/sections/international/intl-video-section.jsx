"use client";

import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Fancybox } from "@fancyapps/ui";
import { BlocksRenderer } from "@/components/ui/blocks-renderer";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function youtubeId(url = "") {
    const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/);
    return m ? m[1] : "";
}

// One video: a thumbnail link that opens the video in Fancybox.
function VideoCard({ video }) {
    const id = video.source === "youtube" ? youtubeId(video.youtubeUrl) : "";
    if (video.source === "youtube" && !id) return null;
    const thumb = video.poster?.url || (id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "");
    const href = id ? `https://www.youtube.com/watch?v=${id}` : video.videoFile?.url;
    if (!href) return null;

    return (
        <a
            href={href}
            data-fancybox="intl-videos"
            data-type={id ? undefined : "html5video"}
            data-caption={video.title || undefined}
            aria-label={`Play ${video.title || "video"}`}
            className="group block overflow-hidden rounded-[12px] border border-black/10 bg-[linear-gradient(180deg,#FFF8EE_0%,#FFF3E0_100%)] shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(249,115,22,0.12)] dark:border-white/10 dark:bg-[linear-gradient(180deg,#1C1917_0%,#18181B_100%)]"
        >
            <span className="relative block aspect-video w-full overflow-hidden bg-black">
                {thumb && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={thumb} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                )}
                <span className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute left-1/2 top-1/2 flex size-[50px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-(--basecolor) to-(--basecolor2) shadow-[0_6px_20px_rgba(220,38,38,0.45)] transition-transform duration-300 group-hover:scale-110 xl:size-[64px]">
                    <span className="ml-1 border-y-[9px] border-l-[15px] border-y-transparent border-l-white" />
                </span>
            </span>
            {video.title && <span className="block px-[15px] py-[12px] text-[14px] font-semibold text-[#212121] dark:text-white xl:text-[16px] 3xl:text-[22px]">{video.title}</span>}
        </a>
    );
}

function Carousel({ videos }) {
    const [ref, api] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
    return (
        <div>
            <div ref={ref} className="overflow-hidden">
                <div className="flex gap-[15px] xl:gap-[25px]">
                    {videos.map((v) => (
                        <div key={v.id} className="min-w-0 shrink-0 basis-full sm:basis-[calc(50%-8px)] lg:basis-[calc(33.333%-17px)]">
                            <VideoCard video={v} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-[15px] flex justify-end gap-[10px]">
                {[["Previous", () => api?.scrollPrev(), "‹"], ["Next", () => api?.scrollNext(), "›"]].map(([label, fn, icon]) => (
                    <button key={label} type="button" onClick={fn} aria-label={label}
                        className="flex size-[36px] items-center justify-center rounded-full border border-black/20 text-[22px] leading-none text-[#212121] transition-colors hover:border-transparent hover:text-white dark:border-white/30 dark:text-white hover:bg-gradient-to-r hover:from-(--basecolor) hover:to-(--basecolor2) xl:size-[44px]">
                        {icon}
                    </button>
                ))}
            </div>
        </div>
    );
}

// International flexible section: videos on the light gradient band (same as AdmissionThrough), as a grid or a carousel; each one plays in Fancybox.
export default function IntlVideoSection({ data }) {
    const single = data.videos.length === 1;
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        Fancybox.bind(container, "[data-fancybox='intl-videos']", { Hash: false });
        return () => {
            Fancybox.unbind(container);
            Fancybox.close();
        };
    }, []);

    return (
        <section className="relative bg-[linear-gradient(135deg,#EFF6FF_0%,#F9FAFB_100%)] dark:bg-[linear-gradient(135deg,#000000_0%,#09090B_100%)] py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[85px]">
            <div className="container relative" ref={containerRef}>
                {(data.title || data.description?.length > 0) && (
                    <div className="mb-8 sm:mb-10 xl:mb-12">
                        {data.title && (
                            <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#1E1E1E] dark:text-white sm:text-[32px] md:text-[38px] xl:text-[44px] 2xl:text-[48px]">
                                {data.title}
                            </h2>
                        )}
                        {data.description?.length > 0 && (
                            <div className="mt-2.5 text-[13px] leading-relaxed text-[#4A5565] dark:text-[#9CA3AF] sm:mt-3.5 sm:text-[14px] xl:text-[15px] 3xl:text-[18px]">
                                {Array.isArray(data.description) ? (
                                    <BlocksRenderer
                                        content={data.description}
                                        blocks={{
                                            paragraph: ({ children }) => (
                                                <p className="!my-0 !text-inherit leading-relaxed lg:text-[14px] xl:text-[14px] 2xl:text-[14.4px]">{children}</p>
                                            ),
                                        }}
                                    />
                                ) : (
                                    <p className="!my-0 !text-inherit leading-relaxed lg:text-[14px] xl:text-[14px] 2xl:text-[14.4px]">{data.description}</p>
                                )}
                            </div>
                        )}
                    </div>
                )}
                {data.layout === "carousel" && !single ? (
                    <Carousel videos={data.videos} />
                ) : (
                    <div className={single ? "max-w-[900px]" : "grid grid-cols-1 gap-[15px] sm:grid-cols-2 lg:grid-cols-3 xl:gap-[25px]"}>
                        {data.videos.map((v) => <VideoCard key={v.id} video={v} />)}
                    </div>
                )}
            </div>
        </section>
    );
}
