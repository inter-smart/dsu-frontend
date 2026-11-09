"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

function youtubeId(url = "") {
    const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/);
    return m ? m[1] : "";
}

// One video: thumbnail first (light page), the player loads on click.
function VideoCard({ video }) {
    const [playing, setPlaying] = useState(false);
    const id = video.source === "youtube" ? youtubeId(video.youtubeUrl) : "";
    if (video.source === "youtube" && !id) return null;
    const thumb = video.poster?.url || (id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "");

    return (
        <div>
            <div className="relative aspect-video w-full overflow-hidden rounded-[10px] bg-black">
                {playing && id ? (
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
                        title={video.title || "Video"}
                        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                        allowFullScreen
                        className="h-full w-full"
                    />
                ) : !id ? (
                    <video controls playsInline preload="metadata" poster={thumb || undefined} className="h-full w-full">
                        <source src={video.videoFile.url} type={video.videoFile.mime} />
                    </video>
                ) : (
                    <button type="button" onClick={() => setPlaying(true)} aria-label={`Play ${video.title || "video"}`} className="group absolute inset-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={thumb} alt="" className="h-full w-full object-cover" loading="lazy" />
                        <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/40" />
                        <span className="absolute left-1/2 top-1/2 flex size-[50px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white xl:size-[64px]">
                            <span className="ml-1 border-y-[9px] border-l-[15px] border-y-transparent border-l-[#DC2626]" />
                        </span>
                    </button>
                )}
            </div>
            {video.title && <p className="mt-[10px] text-[14px] font-semibold text-black xl:text-[16px] 3xl:text-[22px]">{video.title}</p>}
        </div>
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
                        className="flex size-[36px] items-center justify-center rounded-full border border-black/20 text-[22px] leading-none transition-colors hover:bg-[#DC2626] hover:text-white xl:size-[44px]">
                        {icon}
                    </button>
                ))}
            </div>
        </div>
    );
}

// International flexible section: videos as a grid or a carousel (YouTube URL or uploaded file each).
export default function IntlVideoSection({ data }) {
    const single = data.videos.length === 1;
    return (
        <section className="py-[30px] xl:py-[45px] 2xl:py-[60px] 3xl:py-[80px]">
            <div className="container">
                {data.title && <h2 className="cmn_Title mb-[20px] xl:mb-[35px]">{data.title}</h2>}
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
