"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
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

// small dotted icon inside the buttons (replaced by `iconImage` when provided)
function DotsIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 12"
      fill="currentColor"
      className={`h-3 w-4 shrink-0 transition-transform duration-500 ease-out group-hover:rotate-180 motion-reduce:transition-none ${className}`}
    >
      <circle cx="2" cy="6" r="1.1" />
      <circle cx="8" cy="2" r="1.1" />
      <circle cx="8" cy="10" r="1.1" />
      <circle cx="14" cy="6" r="1.1" />
      <circle cx="8" cy="6" r="0.7" opacity="0.6" />
    </svg>
  );
}

function CtaButton({ button }) {
  if (!button?.label) return null;

  const isPrimary = button?.variant !== "outline";
  const iconUrl = button?.iconImage?.url;

  return (
    <Link
      href={button?.link || "#"}
      aria-label={button.label}
      {...(button?.isExternal && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      className={`group relative inline-flex h-11 items-center max-sm:w-full justify-center gap-3 overflow-hidden rounded-[3px] px-5 text-[13px] font-semibold leading-none transition-all duration-500 md:h-[50px] md:gap-4 md:px-[20px] md:text-[15px] 2xl:h-[52px] 2xl:text-[16px] 3xl:h-[60px] 3xl:px-6 3xl:text-[18px] ${
        isPrimary
          ? "bg-linear-to-r from-(--basecolor) to-(--basecolor2) text-white shadow-sm hover:shadow-lg hover:shadow-(--basecolor)/25"
          : "border border-(--basecolor2) bg-transparent text-[#212121] hover:border-transparent hover:text-white dark:text-white"
      }`}
    >
      {/* outline button fills with the gradient on hover */}
      {!isPrimary && (
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-0 bg-linear-to-r from-(--basecolor) to-(--basecolor2) opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      )}

      <span className="relative z-10">{button.label}</span>

      <span className="relative z-10 flex items-center">
        {iconUrl ? (
          <Image
            src={iconUrl}
            alt=""
            width={20}
            height={20}
            unoptimized={iconUrl.toLowerCase().split("?")[0].endsWith(".svg")}
            className="size-4 object-contain"
          />
        ) : (
          <DotsIcon />
        )}
      </span>
    </Link>
  );
}

/* ───────── component ───────── */

export default function TakeIdeasForward({ data }) {
  const [ref, inView] = useInView(0.25);

  if (!data) return null;

  const buttons = data?.buttons || [];

  return (
    <section className="relative py-8 lg:py-12 2xl:py-[90px] 3xl:py-[110px]">
      <div className="container">
        <div
          ref={ref}
          className="rounded-[10px] bg-linear-to-b from-[#FFF7EB] to-[#FFF1E0] px-5 py-12 text-center md:px-10 md:py-16 xl:py-20 2xl:px-[60px] 2xl:py-[82px] 3xl:py-[100px] dark:from-white/[0.04] dark:to-white/[0.02]"
        >
          {data?.heading && (
            <h2
              className={`mx-auto text-[28px] font-bold leading-tight tracking-tight text-[#212121] md:text-[38px] xl:text-[48px] 2xl:text-[56px] 3xl:text-[64px] dark:text-white ${fadeUp(inView)}`}
            >
              {data.heading}
            </h2>
          )}

          {data?.description && (
            <div
              style={{ transitionDelay: "150ms" }}
              className={`mx-auto mt-3 max-w-[900px] xl:mt-4 [&_p]:text-center [&_p]:text-[14px] [&_p]:leading-[1.7] [&_p]:text-[#4A5565] md:[&_p]:text-[16px] 2xl:[&_p]:text-[18px] 3xl:[&_p]:text-[20px] dark:[&_p]:text-[#9CA3AF] ${fadeUp(inView)}`}
            >
              <RichText content={data.description} />
            </div>
          )}

          {buttons.length > 0 && (
            <div
              style={{ transitionDelay: "300ms" }}
              className={`mt-7 flex flex-col items-center justify-center gap-3 flex-wrap  flex-row sm:gap-[19px] xl:mt-9 2xl:mt-[42px] ${fadeUp(inView)}`}
            >
              {buttons.map((button, index) => (
                <CtaButton key={button?.id ?? index} button={button} className="max-sm:w-full" />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}