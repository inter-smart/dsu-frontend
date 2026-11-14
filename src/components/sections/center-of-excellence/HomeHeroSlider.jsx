"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "@/components/ui/safe-image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, A11y } from "swiper/modules";
import { cn, safeHref } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import "swiper/css";
import "swiper/css/effect-fade";

// Text animates in when its slide becomes the active one
const reveal =
    "opacity-0 translate-y-6 transition-all duration-700 ease-out group-[.swiper-slide-active]:opacity-100 group-[.swiper-slide-active]:translate-y-0";

// Secondary button: gradient border, transparent fill, gradient fill on hover.
// Replace the two colors (in both places) with your primary button's gradient.
const secondaryButtonClass =
    "bg-transparent text-white border border-transparent [border-image:linear-gradient(90deg,#e32b1f,#f97316)_1] hover:text-white hover:bg-[linear-gradient(90deg,#e32b1f,#f97316)]";

// slide helpers (image | video | youtube)
const getSlideType = (slide) => {
    if (slide?.mediaType === "youtube" || (!slide?.mediaType && slide?.youtubeUrl)) return "youtube";
    if (slide?.mediaType === "video" || (!slide?.mediaType && slide?.video?.url)) return "video";
    return "image";
};

// Accepts watch?v=, youtu.be/, embed/, shorts/, live/ links, or a bare 11 character id
const getYouTubeId = (url = "") => {
  const value = String(url).trim();
  if (/^[\w-]{11}$/.test(value)) return value;
  const match = value.match(
    /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/|v\/))([\w-]{11})/,
  );
  return match ? match[1] : null;
};

// How long a slide stays (ms). undefined = the global autoplayDelay.
// Uploaded video without `duration` waits for the video to end (600s is only a safety net).
const getSlideDelay = (slide, hasMany) => {
    if (!hasMany) return undefined;
    if (slide.type === "video") return (slide.duration || 600) * 1000;
    if (slide.type === "youtube") return (slide.duration ?? 15) * 1000;
    return slide.duration ? slide.duration * 1000 : undefined;
};

// Reusable CTA button (primary or secondary). Renders nothing without a label.
function SlideButton({ button, variant = "default", className }) {
    if (!button?.label?.trim()) return null;

    return (
        <Link
            href={safeHref(button.link, "#")}
            {...(button.isExternal && {
                target: "_blank",
                rel: "noopener noreferrer",
            })}
            className={cn(buttonVariants({ variant, size: "default" }), className)}
        >
            {button.label}
            <Image
                src="/images/icon-btn.svg"
                alt=""
                width={15}
                height={15}
                className="size-3.75"
                data-icon="inline-end"
            />
        </Link>
    );
}

// Uploaded video background. Plays only while its slide is active.
function SlideVideo({ src, mime, active, loop, onDone }) {
    const videoRef = useRef(null);

    useEffect(() => {
        const el = videoRef.current;
        if (!el) return;
        if (active) {
            el.currentTime = 0;
            const playing = el.play();
            if (playing?.catch) playing.catch(() => {});
        } else {
            el.pause();
        }
    }, [active]);

    return (
        <video
            ref={videoRef}
            muted
            playsInline
            loop={loop}
            preload={active ? "auto" : "metadata"}
            onEnded={() => active && onDone?.()}
            onError={() => active && onDone?.()}
            className="absolute inset-0 size-full object-cover"
        >
            <source src={src} type={mime || "video/mp4"} />
        </video>
    );
}

// YouTube background. Only mounted while its slide is active, fades in once loaded.
function SlideYouTube({ id, title }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1&fs=0`}
                title={title || "Video"}
                allow="autoplay; encrypted-media; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                tabIndex={-1}
                onLoad={() => setLoaded(true)}
                className={cn(
                    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78svh] h-[56.25vw] min-w-full min-h-full border-0 transition-opacity duration-1000",
                    loaded ? "opacity-100 delay-700" : "opacity-0",
                )}
            />
        </div>
    );
}

export default function HomeHeroSlider({ data }) {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = (data?.slides ?? [])
        .map((slide) => {
            const type = getSlideType(slide);
            return {
                ...slide,
                type,
                youtubeId: type === "youtube" ? getYouTubeId(slide?.youtubeUrl) : null,
            };
        })
        .filter((slide) =>
            slide.type === "image"
                ? slide?.image?.url
                : slide.type === "video"
                  ? slide?.video?.url
                  : slide.youtubeId,
        );
    if (!slides.length) return null;

    const hasMany = slides.length > 1;

    return (
        <section className="relative w-full h-[100svh] min-h-[560px] overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade, A11y]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={900}
                loop={hasMany}
                loopPreventsSliding={false}
                allowTouchMove={hasMany}
                simulateTouch
                grabCursor={hasMany}
                threshold={8}
                touchRatio={1}
                preventClicks
                preventClicksPropagation
                autoplay={
                    hasMany
                        ? {
                            delay: data?.autoplayDelay ?? 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }
                        : false
                }
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide
                        key={slide?.id ?? index}
                        className="group"
                        // per-slide stay time (Swiper reads this attribute)
                        data-swiper-autoplay={getSlideDelay(slide, hasMany)}
                    >
                        {/* render function gives `isActive`, so only the visible slide plays its video */}
                        {({ isActive }) => (
                            <>
                                {/* Background: image / poster (slow zoom-out for image slides) */}
                                <div
                                    className={cn(
                                        "absolute inset-0",
                                        slide.type === "image" &&
                                            "scale-105 transition-transform duration-[6000ms] ease-out group-[.swiper-slide-active]:scale-100",
                                    )}
                                >
                                    {slide?.image?.url && (
                                        <Image
                                            src={slide.image.url}
                                            alt={slide.image.alternativeText || slide.title || "Hero image"}
                                            fill
                                            priority={index === 0}
                                            sizes="100vw"
                                            draggable={false}
                                            className={cn("object-cover select-none", slide?.mobileImage?.url && "max-sm:hidden")}
                                        />
                                    )}
                                    {slide?.mobileImage?.url && (
                                        <Image
                                            src={slide.mobileImage.url}
                                            alt={slide.mobileImage.alternativeText || slide.title || "Hero image"}
                                            fill
                                            sizes="100vw"
                                            draggable={false}
                                            className="object-cover select-none sm:hidden"
                                        />
                                    )}

                                    {/* uploaded video on top of the poster */}
                                    {slide.type === "video" && (
                                        <SlideVideo
                                            src={slide.video.url}
                                            mime={slide.video.mime}
                                            active={isActive}
                                            loop={!hasMany}
                                            onDone={() => swiperRef.current?.slideNext()}
                                        />
                                    )}

                                    {/* YouTube on top of the poster, mounted only while active */}
                                    {slide.type === "youtube" && isActive && (
                                        <SlideYouTube id={slide.youtubeId} title={slide.title} />
                                    )}
                                </div>

                                {/* Bottom gradient: above the background, below the text */}
                                <div className="absolute left-0 bottom-0 w-full h-[35%] pointer-events-none bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,#000_100%)]" />

                                {/* Content, bottom left */}
                                <div className="relative z-10 h-full">
                                    <div className="container h-full flex items-end pb-[30px] sm:pb-[40px] lg:pb-[40px] 2xl:pb-[50px] 3xl:pb-[70px]">
                                        <div className="w-full max-w-[560px] sm:max-w-[700px] lg:max-w-[860px] 2xl:max-w-[1000px] 3xl:max-w-[1200px] text-white">
                                            {slide?.title && (
                                                <h2
                                                    className={cn(
                                                        reveal,
                                                        "delay-200 text-[28px] sm:text-[35px] xl:text-[45px] 2xl:text-[50px] 3xl:text-[60px] leading-[1.1] font-bold max-w-[350px] xl:max-w-[450px] 2xl:max-w-[550px] 3xl:max-w-[650px] text-white",
                                                    )}
                                                >
                                                    {slide.title}
                                                </h2>
                                            )}
                                            {slide?.description && (
                                                <p
                                                    className={cn(
                                                        reveal,
                                                        "delay-300 my-[10px] text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[23px] leading-[1.4] font-bold text-white",
                                                    )}
                                                >
                                                    {slide.description}
                                                </p>
                                            )}

                                            {/* CTA buttons: primary + optional secondary */}
                                            {(slide?.button?.label?.trim() ||
                                                slide?.secondaryButton?.label?.trim()) && (
                                                <div
                                                    className={cn(
                                                        reveal,
                                                        "delay-500 flex flex-wrap items-center gap-[12px] sm:gap-[17px]",
                                                    )}
                                                >
                                                    <SlideButton button={slide.button} />
                                                    <SlideButton
                                                        button={slide.secondaryButton}
                                                        variant="outline"
                                                        className={secondaryButtonClass}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Arrows */}
            {hasMany && (
                <>
                    <button
                        type="button"
                        aria-label="Previous slide"
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="absolute top-1/2 -translate-y-1/2 left-[2%] lg:left-[3%] 2xl:left-[4%] z-20 size-10 lg:size-12 2xl:size-14 flex items-center justify-center text-white transition-opacity duration-300 hover:opacity-60"
                    >
                        <svg width="19" height="36" viewBox="0 0 19 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.03 0.224216C18.3159 0.520927 18.3124 0.998444 18.0224 1.29085L1.78005 17.9059L17.992 34.4898C18.282 34.7822 18.2855 35.2598 17.9996 35.5564C17.7138 35.8531 17.2469 35.8566 16.9569 35.5642L0.21209 18.4354C0.0751598 18.2948 -0.00147552 18.1043 -0.00104826 17.9059C-0.0020477 17.6921 0.0866478 17.488 0.242488 17.3454L16.9873 0.21648C17.2774 -0.0759278 17.7442 -0.0724259 18.03 0.224216Z" fill="white" />
                        </svg>

                    </button>
                    <button
                        type="button"
                        aria-label="Next slide"
                        onClick={() => swiperRef.current?.slideNext()}
                        className="absolute top-1/2 -translate-y-1/2 right-[2%] lg:right-[3%] 2xl:right-[4%] z-20 size-10 lg:size-12 2xl:size-14 flex items-center justify-center text-white transition-opacity duration-300 hover:opacity-60"
                    >
                        <svg width="19" height="36" viewBox="0 0 19 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.212167 0.224216C-0.0736826 0.520927 -0.0702579 0.998444 0.219802 1.29085L16.4621 17.9059L0.2502 34.4898C-0.0398594 34.7822 -0.0432841 35.2598 0.242565 35.5564C0.528415 35.8531 0.995294 35.8566 1.28528 35.5642L18.0301 18.4354C18.167 18.2948 18.2437 18.1043 18.2432 17.9059C18.2442 17.6921 18.1555 17.488 17.9997 17.3454L1.25488 0.21648C0.964822 -0.0759278 0.498016 -0.0724259 0.212167 0.224216Z" fill="white" />
                        </svg>

                    </button>
                </>
            )}

            {/* Optional dots: set showPagination: true in the data */}
            {hasMany && data?.showPagination && (
                <div className="absolute bottom-[20px] lg:bottom-[30px] left-1/2 -translate-x-1/2 z-20 flex items-center gap-[8px]">
                    {slides.map((slide, index) => (
                        <button
                            key={slide?.id ?? index}
                            type="button"
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={index === activeIndex}
                            onClick={() => swiperRef.current?.slideToLoop(index)}
                            className={cn(
                                "h-[8px] rounded-full bg-white transition-all duration-300",
                                index === activeIndex ? "w-[28px]" : "w-[8px] opacity-50 hover:opacity-80",
                            )}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}