"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  FlaskConical,
  Rocket,
  Factory,
  Users,
} from "lucide-react";

/* ───────── helpers ───────── */

// true once the element has scrolled into view (fires once)
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

// fade + slide up
const fadeUp = (inView) =>
  `transition-all duration-700 ease-out motion-reduce:transition-none ${
    inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
  }`;

// icon names you can use in the data (`icon: "graduation"`)
const ICONS = {
  graduation: GraduationCap,
  flask: FlaskConical,
  rocket: Rocket,
  factory: Factory,
  users: Users,
};

// frosted icon tile on the top-left of the photo
// priority: uploaded icon image (SVG / PNG)  ->  lucide icon name  ->  nothing
function IconTile({ item }) {
  const Icon = ICONS[item?.icon];
  const iconUrl = item?.iconImage?.url;

  if (!Icon && !iconUrl) return null;

  const isSvg = iconUrl?.toLowerCase().split("?")[0].endsWith(".svg");

  return (
    <span className="absolute left-3 top-3 z-10 flex h-[46px] w-[52px] items-center justify-center rounded-[6px] border border-white/40 bg-black/20 text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-linear-to-br group-hover:from-(--basecolor) group-hover:to-(--basecolor2) md:left-[15px] md:top-[14px] md:h-[64px] md:w-[70px] md:rounded-[8px]">
      {iconUrl ? (
        <Image
          src={iconUrl}
          alt={item?.iconImage?.alternativeText || ""}
          width={40}
          height={40}
          unoptimized={isSvg}
          className={`size-7 object-contain md:size-10 ${
            item?.iconKeepColor ? "" : "brightness-0 invert"
          }`}
        />
      ) : (
        <Icon strokeWidth={1.1} className="size-7 md:size-10" />
      )}
    </span>
  );
}

// photo or uploaded video (image becomes the poster)
function CardMedia({ item }) {
  const imageUrl = item?.image?.url;
  const alt = item?.image?.alternativeText || item?.title || "";
  const mediaClass =
    "object-cover transition-transform duration-700 ease-out group-hover:scale-110";

  if (item?.mediaType === "video" && item?.video?.url) {
    return (
      <video
        className={`absolute inset-0 size-full ${mediaClass}`}
        poster={imageUrl || undefined}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
      >
        <source src={item.video.url} type={item.video.mime || "video/mp4"} />
      </video>
    );
  }

  if (!imageUrl) return null;

  return (
    <Image
      src={imageUrl}
      alt={alt}
      fill
      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 40vw, 80vw"
      className={mediaClass}
    />
  );
}

// round prev / next button
function NavButton({ direction, disabled, onClick }) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      disabled={disabled}
      onClick={onClick}
      className="flex size-8 lg:size-11 items-center justify-center rounded-full  border border-(--basecolor2) text-(--basecolor) transition-all duration-300 hover:border-transparent hover:bg-linear-to-r hover:from-(--basecolor) hover:to-(--basecolor2) hover:text-white disabled:pointer-events-none disabled:opacity-30 dark:text-white"
    >
      <Icon strokeWidth={1.5} className="size-6" />
    </button>
  );
}

/* ───────── component ───────── */

export default function WhoCanEngage({ data }) {
  const [headRef, headInView] = useInView(0.3);
  const [sliderRef, sliderInView] = useInView(0.15);
  const [swiper, setSwiper] = useState(null);
  const [state, setState] = useState({ start: true, end: false, locked: true });

  if (!data) return null;

  const items = data?.items || [];

  const sync = (s) =>
    setState({ start: s.isBeginning, end: s.isEnd, locked: s.isLocked });

  return (
    <section className="relative overflow-hidden bg-[#F4F7FD] py-10 lg:py-14 2xl:py-[100px] 3xl:py-[120px] dark:bg-[#0a0a0a]">
      <div className="container">
        {/* ───────── heading ───────── */}
        <div ref={headRef} className="mb-6 text-center lg:mb-9 2xl:mb-[45px]">
          {data?.heading && (
            <h2
              className={`text-[28px] font-bold leading-tight tracking-tight text-[#212121] md:text-[36px] xl:text-[46px] 2xl:text-[56px] 3xl:text-[64px] dark:text-white ${fadeUp(headInView)}`}
            >
              {data.heading}
            </h2>
          )}
          {data?.subheading && (
            <p
              style={{ transitionDelay: "150ms" }}
              className={`mt-1 !text-[14px] !text-[#4A5565] md:!text-[16px] xl:!text-[18px] 3xl:!text-[20px] dark:!text-[#9CA3AF] ${fadeUp(headInView)}`}
            >
              {data.subheading}
            </p>
          )}
        </div>

        {/* ───────── slider ───────── */}
        <div ref={sliderRef}>
          <Swiper
            onSwiper={(s) => {
              setSwiper(s);
              sync(s);
            }}
            onSlideChange={sync}
            onResize={sync}
            onBreakpoint={sync}
            onLock={sync}
            onUnlock={sync}
            slidesPerView={1.15}
            spaceBetween={14}
            grabCursor
            breakpoints={{
              480: { slidesPerView: 1.5, spaceBetween: 16 },
              768: { slidesPerView: 2.4, spaceBetween: 18 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 4, spaceBetween: 20 },
              1760: { slidesPerView: 4, spaceBetween: 19 },
            }}
          >
            {items.map((item, index) => {
              const card = (
                <div
                  style={{ transitionDelay: `${index * 130}ms` }}
                  className={`group block ${fadeUp(sliderInView)}`}
                >
                  <div className="relative aspect-[418/245] overflow-hidden rounded-[8px] bg-black/9 shadow-sm">
                    <CardMedia item={item} />
                    <IconTile item={item} />
                  </div>

                  <h3 className="mt-4 text-[20px] font-medium leading-tight text-[#212121] transition-colors duration-300 group-hover:text-(--basecolor) md:text-[22px] 2xl:mt-[22px] 2xl:text-[24px] 3xl:text-[26px] dark:text-white">
                    {item?.title}
                  </h3>
                  {item?.description && (
                    <p className="mt-1.5 !text-[14px] !leading-snug !text-[#4A5565] md:!text-[15px] 2xl:mt-2.5 2xl:!text-[17px] 3xl:!text-[18px] dark:!text-[#9CA3AF]">
                      {item.description}
                    </p>
                  )}
                </div>
              );

              return (
                <SwiperSlide key={item?.id ?? index} className="!h-auto">
                  {item?.link ? (
                    <Link
                      href={item.link}
                      aria-label={item?.title}
                      {...(item?.isExternal && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      {card}
                    </Link>
                  ) : (
                    card
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* prev / next: only shown when the cards don't all fit */}
          {!state.locked && (
            <div className="mt-6 flex items-center justify-center gap-3">
              <NavButton
                direction="prev"
                disabled={state.start}
                onClick={() => swiper?.slidePrev()}
              />
              <NavButton
                direction="next"
                disabled={state.end}
                onClick={() => swiper?.slideNext()}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}