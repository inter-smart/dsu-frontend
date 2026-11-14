"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

/* ───────── helpers ───────── */

// true once the element has scrolled into view (fires once)
function useInView(threshold = 0.25) {
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

// counts from 0 to `end` once `start` becomes true (ease-out, respects reduced motion)
function Counter({ end = 0, decimals = 0, duration = 2200, start = false }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }
    let raf;
    let t0;
    const tick = (t) => {
      if (!t0) t0 = t;
      const progress = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(end * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, end, duration]);

  return <span className="tabular-nums">{value.toFixed(decimals)}</span>;
}

// fade + slide up
const fadeUp = (inView) =>
  `transition-all duration-1000 ease-out motion-reduce:transition-none ${
    inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
  }`;

// one media tile: image (next/image) or uploaded video (poster optional)
function MediaItem({ item, alt, priority }) {
  const isVideo = item?.mediaType === "video" && item?.video?.url;
  const imageUrl = item?.image?.url || item?.url; // `url` directly = older data shape
  const imageAlt = item?.image?.alternativeText || item?.alternativeText || item?.alt || alt || "";

  const mediaClass =
    "object-cover transition-transform duration-700 ease-out group-hover:scale-105";

  if (isVideo) {
    return (
      <video
        className={`absolute inset-0 size-full ${mediaClass}`}
        poster={imageUrl || undefined}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={imageAlt}
      >
        <source src={item.video.url} type={item.video.mime || "video/mp4"} />
      </video>
    );
  }

  if (!imageUrl) return null;

  return (
    <Image
      src={imageUrl}
      alt={imageAlt}
      fill
      sizes="(min-width: 1024px) 35vw, 50vw"
      priority={priority}
      className={mediaClass}
    />
  );
}

/* ───────── component ───────── */

export default function InnovationEcosystem({ data }) {
  const [topRef, topInView] = useInView(0.2);
  const [statsRef, statsInView] = useInView(0.4);

  if (!data) return null;

  const media = data?.media || data?.images || [];
  const stats = data?.stats || [];

  return (
    <section className="relative py-10 lg:py-14 2xl:py-[90px] 3xl:py-[110px]">
      <div className="container">
        {/* ───────── top row: text + media ───────── */}
        <div
          ref={topRef}
          className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-[5%]"
        >
          {/* text */}
          <div className="w-full lg:w-[40%]">
            {data?.heading && (
              <h2
                className={`max-w-[10.5em] text-balance  font-bold leading-[1.05] tracking-tight text-black cmn_Title dark:text-white ${fadeUp(topInView)}`}
              >
                {data.heading}
              </h2>
            )}

            {data?.description && (
              <div
                style={{ transitionDelay: "150ms" }}
                className={`mt-5 xl:mt-8 2xl:mt-10 [&_p]:mb-[22px] [&_p]:text_1 leading-[1.9] [&_p:last-child]:mb-0 dark:[&_p]:text-[#9CA3AF] 2xl:[&_p]:mb-[29px] ${fadeUp(topInView)}`}
              >
                {typeof data.description === "string" ? (
                  <div dangerouslySetInnerHTML={{ __html: data.description }} />
                ) : (
                  <BlocksRenderer content={data.description} />
                )}
              </div>
            )}
          </div>

          {/* media: wide + narrow, same height (each one is an image or a video) */}
          {media.length > 0 && (
            <div className="flex w-full gap-3 md:gap-4 lg:w-[55%] 2xl:gap-[22px]">
              {media.map((item, index) => (
                <div
                  key={item?.id ?? index}
                  style={{ transitionDelay: `${index * 250}ms` }}
                  className={`group relative h-[200px] overflow-hidden rounded-[8px] transition-[clip-path] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:h-[260px] xl:h-[300px] 2xl:h-[341px] xl:rounded-[10px] ${
                    index === 0 ? "flex-[632]" : "flex-[373]"
                  } ${
                    topInView
                      ? "[clip-path:inset(0_0_0_0)]"
                      : "[clip-path:inset(0_100%_0_0)]"
                  }`}
                >
                  {/* slow settle from a slight zoom */}
                  <div
                    style={{ transitionDelay: `${index * 250}ms` }}
                    className={`relative size-full transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                      topInView ? "scale-100" : "scale-[1.15]"
                    }`}
                  >
                    <MediaItem
                      item={item}
                      alt={data.heading}
                      priority={index === 0}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ───────── stats strip ───────── */}
        {stats.length > 0 && (
          <div
            ref={statsRef}
            className="mt-10 grid grid-cols-2 gap-y-8 border-y border-[#E5E7EB] py-7 lg:mt-14 sm:grid-cols-[376fr_411fr_456fr_486fr] lg:gap-y-0 lg:py-[26px] 2xl:mt-[97px] dark:border-white/15"
          >
            {stats.map((stat, index) => (
              <div
                key={stat?.id ?? index}
                style={{ transitionDelay: `${index * 150}ms` }}
                className={`relative lg:pl-[70px] xl:pl-[100px] 2xl:pl-[133px] lg:first:pl-0 lg:before:absolute lg:before:left-0 lg:before:top-1/2 lg:before:h-[75px] lg:before:w-px lg:before:-translate-y-1/2 lg:before:bg-black/10 lg:before:content-[''] lg:first:before:hidden dark:lg:before:bg-white/15 ${fadeUp(statsInView)}`}
              >
                <div className="bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text cmn_Title font-bold leading-none text-transparent ">
                  <Counter
                    end={Number(stat.end) || 0}
                    decimals={Number(stat.decimals) || 0}
                    start={statsInView}
                  />
                  {stat.unit && (
                    <span className="ml-1.5 text_1 font-bold">
                      {stat.unit}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-[13px] leading-snug text-[#364153] md:text-[16px] xl:mt-3 xl:text-[18px] 2xl:text-[20px] dark:text-[#D1D5DB]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}