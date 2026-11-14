"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

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

// block array (Strapi) or HTML string (CKEditor)
function RichText({ content }) {
  if (!content) return null;
  return typeof content === "string" ? (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  ) : (
    <BlocksRenderer content={content} />
  );
}

// card background: image or uploaded video (image becomes the poster)
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
      sizes="(min-width: 1024px) 33vw, 80vw"
      className={mediaClass}
    />
  );
}

// one centre card (used in the desktop grid and in the mobile slider)
function CentreCard({ item, className = "", style }) {
  const content = (
    <>
      <CardMedia item={item} />

      {/* dark gradient for text contrast */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] bg-linear-to-t from-black/90 via-black/45 to-transparent"
      />

      {/* label + arrow */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 md:p-5 2xl:p-[22px]">
        <div className="min-w-0">
          {item?.prefix && (
            <p className="!text-[15px] !font-normal !leading-tight !tracking-normal !text-white/90 md:!text-[18px] 2xl:!text-[22px]">
              {item.prefix}
            </p>
          )}
          <h3 className="mt-1 text-[18px] font-semibold leading-[1.25] text-white md:text-[22px] 2xl:text-[26px] 3xl:text-[28px]">
            {item?.title}
          </h3>

          {item?.poweredBy?.logo?.url && (
            <div className="mt-2 flex items-center gap-2">
              {item.poweredBy.label && (
                <span className="text-[9px] font-semibold text-white md:text-[10px]">
                  {item.poweredBy.label}
                </span>
              )}
              <Image
                src={item.poweredBy.logo.url}
                alt={item.poweredBy.logo.alternativeText || ""}
                width={110}
                height={28}
                className="h-5 w-auto object-contain"
              />
            </div>
          )}
        </div>

        <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-(--basecolor2) text-white transition-all duration-300 group-hover:border-transparent group-hover:bg-linear-to-r group-hover:from-(--basecolor) group-hover:to-(--basecolor2) md:size-[52px] 2xl:size-[62px]">
          <ChevronRight
            strokeWidth={1.25}
            className="size-8 transition-transform duration-300 group-hover:translate-x-0.5 2xl:size-14 stroke-1"
          />
        </span>
      </div>
    </>
  );

  const cardClass = `group relative block overflow-hidden rounded-[8px] bg-black shadow-sm ${className}`;

  return item?.link ? (
    <Link
      href={item.link}
      aria-label={`${item?.prefix || ""} ${item?.title || ""}`.trim()}
      {...(item?.isExternal && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      style={style}
      className={cardClass}
    >
      {content}
    </Link>
  ) : (
    <div style={style} className={cardClass}>
      {content}
    </div>
  );
}

// "Seven Centres. Connected Possibilities" panel
function HighlightPanel({ highlight, className = "", style }) {
  return (
    <div
      style={style}
      className={`flex flex-col justify-center rounded-[8px] border border-[#9fa2a76b] bg-[#FFF8EE]/70 dark:bg-white/[0.03] ${className}`}
    >
      {highlight?.heading && (
        <h3 className="text-[24px] font-bold leading-tight tracking-tight text-[#212121] md:text-[32px] xl:text-[44px] 2xl:text-[52px] 3xl:text-[58px] dark:text-white">
          {highlight.heading}
        </h3>
      )}

      {highlight?.description && (
        <div className="mt-4 xl:mt-7 [&_p]:mb-4 [&_p]:text-[14px] [&_p]:leading-[1.8] [&_p]:text-[#4A5565] md:[&_p]:text-[16px] 3xl:[&_p]:text-[18px] [&_p:last-child]:mb-0 dark:[&_p]:text-[#9CA3AF] 2xl:[&_p]:mb-[26px]">
          <RichText content={highlight.description} />
        </div>
      )}
    </div>
  );
}

// round prev / next button (same look as the card arrow)
function NavButton({ direction, disabled, onClick }) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      disabled={disabled}
      onClick={onClick}
      className="flex size-11 items-center justify-center rounded-full border border-(--basecolor2) text-(--basecolor) transition-all duration-300 hover:border-transparent hover:bg-linear-to-r hover:from-(--basecolor) hover:to-(--basecolor2) hover:text-white disabled:pointer-events-none disabled:opacity-30 dark:text-white"
    >
      <Icon strokeWidth={1.5} className="size-6" />
    </button>
  );
}

// mobile / tablet slider: the highlight panel is always the first slide
function CentresSlider({ centres, highlight }) {
  const [swiper, setSwiper] = useState(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const sync = (s) => setEdge({ start: s.isBeginning, end: s.isEnd });

  return (
    <div className="lg:hidden">
      <Swiper
        onSwiper={(s) => {
          setSwiper(s);
          sync(s);
        }}
        onSlideChange={sync}
        onResize={sync}
        slidesPerView={1}
        spaceBetween={12}
        grabCursor
        breakpoints={{
          480: { slidesPerView: 1.35, spaceBetween: 14 },
          640: { slidesPerView: 1.8, spaceBetween: 16 },
        }}
      >
        {highlight && (
          <SwiperSlide className="!h-auto">
            <HighlightPanel
              highlight={highlight}
              className="h-full p-6 md:p-8"
            />
          </SwiperSlide>
        )}

        {centres.map((item, index) => (
          <SwiperSlide key={item?.id ?? index} className="!h-auto">
            <CentreCard item={item} className="h-full min-h-[380px]" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-5 flex items-center justify-center gap-3">
        <NavButton
          direction="prev"
          disabled={edge.start}
          onClick={() => swiper?.slidePrev()}
        />
        <NavButton
          direction="next"
          disabled={edge.end}
          onClick={() => swiper?.slideNext()}
        />
      </div>
    </div>
  );
}

/* ───────── component ───────── */

export default function ExploreCentres({ data }) {
  const [headRef, headInView] = useInView(0.3);
  const [gridRef, gridInView] = useInView(0.08);

  if (!data) return null;

  const centres = data?.centres || [];
  const highlight = data?.highlight;

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#FFF7EB] to-[#FFF1E0] py-10 lg:py-16 2xl:py-[100px] 3xl:py-[120px] dark:from-[#0a0a0a] dark:to-[#111111]">
      <div className="container">
        {/* ───────── heading row ───────── */}
        <div
          ref={headRef}
          className="mb-6 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-center lg:justify-between 2xl:mb-[45px]"
        >
          {data?.heading && (
            <h2
              className={`text-[28px] font-bold leading-tight tracking-tight text-[#212121] md:text-[36px] xl:text-[44px] 2xl:text-[52px] 3xl:text-[60px] dark:text-white ${fadeUp(headInView)}`}
            >
              {data.heading}
            </h2>
          )}

          {data?.description && (
            <div
              style={{ transitionDelay: "150ms" }}
              className={`w-full lg:w-[45%] 2xl:w-[42%] [&_p]:text-[14px] [&_p]:leading-[1.8] [&_p]:text-[#4A5565] md:[&_p]:text-[15px] 3xl:[&_p]:text-[17px] dark:[&_p]:text-[#9CA3AF] ${fadeUp(headInView)}`}
            >
              <RichText content={data.description} />
            </div>
          )}
        </div>

        {/* ───────── mobile / tablet: slider ───────── */}
        <CentresSlider centres={centres} highlight={highlight} />

        {/* ───────── desktop: grid ───────── */}
        <div
          ref={gridRef}
          className="hidden gap-4 lg:grid lg:grid-cols-3 2xl:gap-[19px]"
        >
          {centres.map((item, index) => (
            <CentreCard
              key={item?.id ?? index}
              item={item}
              style={{
                transitionDelay: `${(index % 3) * 120 + Math.floor(index / 3) * 80}ms`,
              }}
              className={`aspect-[563/500] ${fadeUp(gridInView)}`}
            />
          ))}

          {highlight && (
            <HighlightPanel
              highlight={highlight}
              style={{
                transitionDelay: `${Math.ceil(centres.length / 3) * 80 + 200}ms`,
              }}
              className={`col-span-2 p-6 xl:p-[35px] 2xl:px-[60px] 2xl:py-[70px] ${fadeUp(gridInView)}`}
            />
          )}
        </div>
      </div>
    </section>
  );
}