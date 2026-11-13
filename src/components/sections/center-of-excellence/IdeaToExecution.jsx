"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

/* ───────── helpers ───────── */

// true once the element has scrolled into view (fires once)
function useInView(threshold = 0.2) {
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

// image or uploaded video (image becomes the poster)
function Media({ media, alt }) {
  const imageUrl = media?.image?.url;
  const imageAlt = media?.image?.alternativeText || alt || "";

  if (media?.mediaType === "video" && media?.video?.url) {
    return (
      <video
        className="absolute inset-0 size-full object-cover"
        poster={imageUrl || undefined}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={imageAlt}
      >
        <source src={media.video.url} type={media.video.mime || "video/mp4"} />
      </video>
    );
  }

  if (!imageUrl) return null;

  return (
    <Image
      src={imageUrl}
      alt={imageAlt}
      fill
      sizes="(min-width: 1024px) 50vw, 100vw"
      priority
      className="object-cover"
    />
  );
}

/* ───────── component ───────── */

export default function IdeaToExecution({ data }) {
  const [topRef, topInView] = useInView(0.2);
  const [bodyRef, bodyInView] = useInView(0.15);

  if (!data) return null;

  const steps = data?.steps || [];

  return (
    <section className="relative py-10 lg:py-14 2xl:py-[90px] 3xl:py-[110px]">
      <div className="container">
        <div
          ref={topRef}
          className="grid gap-x-[3.2%] gap-y-6 lg:grid-cols-[855fr_805fr] lg:gap-y-[43px]"
        >
          {/* ───────── heading ───────── */}
          {data?.heading && (
            <h2
              className={`text-[28px] font-bold leading-tight tracking-tight text-[#212121] md:text-[36px] xl:text-[46px] 2xl:text-[56px] 3xl:text-[64px] dark:text-white ${fadeUp(topInView)}`}
            >
              {data.heading}
            </h2>
          )}

          {/* ───────── description ───────── */}
          {data?.description && (
            <div
              style={{ transitionDelay: "150ms" }}
              className={`[&_p]:text-[14px] [&_p]:leading-[1.8] [&_p]:text-[#4A5565] md:[&_p]:text-[15px] 3xl:[&_p]:text-[17px] dark:[&_p]:text-[#9CA3AF] ${fadeUp(topInView)}`}
            >
              <RichText content={data.description} />
            </div>
          )}

          {/* ───────── media (stretches to the height of the steps) ───────── */}
          {data?.media && (
            <div
              ref={bodyRef}
              className={`relative min-h-[300px] overflow-hidden rounded-[8px] transition-[clip-path] duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:min-h-[420px] lg:min-h-0 xl:rounded-[10px] ${
                bodyInView
                  ? "[clip-path:inset(0_0_0_0)]"
                  : "[clip-path:inset(0_100%_0_0)]"
              }`}
            >
              <div
                className={`absolute inset-0 transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                  bodyInView ? "scale-100" : "scale-[1.15]"
                }`}
              >
                <Media media={data.media} alt={data.heading} />
              </div>
            </div>
          )}

          {/* ───────── steps ───────── */}
          {steps.length > 0 && (
            <ol className="m-0 flex list-none flex-col p-0">
              {steps.map((step, index) => (
                <li
                  key={step?.id ?? index}
                  style={{ transitionDelay: `${index * 110}ms` }}
                  className={`group flex items-center gap-4 border-b border-[#E5E7EB] py-3 transition-all duration-700 ease-out last:border-b-0 motion-reduce:transition-none md:gap-6 xl:gap-[53px] xl:py-0 dark:border-white/15 lg:min-h-[100px] ${
                    bodyInView
                      ? "translate-x-0 opacity-100"
                      : "translate-x-10 opacity-0"
                  }`}
                >
                  {/* number badge */}
                  <span className="flex h-[54px] w-[66px] shrink-0 items-center justify-center rounded-[6px] bg-linear-to-br from-[#F4601B] to-[#F97316] text-[26px] font-medium leading-none text-white shadow-sm transition-transform duration-300 group-hover:scale-105 md:h-[62px] md:w-[78px] md:text-[32px] xl:h-[70px] xl:w-[87px] xl:text-[36px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-[17px] font-medium leading-tight text-[#212121] transition-colors duration-300 group-hover:text-(--basecolor) md:text-[20px] xl:text-[24px] dark:text-white">
                      {step?.title}
                    </h3>
                    {step?.description && (
                      <p className="mt-1.5 !text-[13px] !leading-snug !text-[#364153] md:!text-[15px] xl:mt-2.5 xl:!text-[16px] dark:!text-[#D1D5DB]">
                        {step.description}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </section>
  );
}