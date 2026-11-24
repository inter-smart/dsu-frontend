"use client";
import Link from "next/link";
import Image from "@/components/ui/safe-image";
import { safeHref } from "@/lib/utils";
import { Text } from "@/components/ui/text";
import Autoplay from "embla-carousel-autoplay";
import { Heading } from "@/components/ui/heading";
import useEmblaCarousel from "embla-carousel-react";
import CtaButton from "@/components/ui/cta-button";
import { useCallback, useEffect, useRef, useState } from "react"; // CHANGED: added useRef
import TableScrollBox from "@/components/layout/common/TableScrollBox";

export default function HomeAcademic({ data }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const [academicEmblaRef, academicEmblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      breakpoints: {
        "(min-width: 640px)": { align: "start" },
      },
    },
    [
      Autoplay({
        delay: 3500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const scrollPrev = useCallback(() => {
    if (academicEmblaApi) academicEmblaApi.scrollPrev();
  }, [academicEmblaApi]);

  const scrollNext = useCallback(() => {
    if (academicEmblaApi) academicEmblaApi.scrollNext();
  }, [academicEmblaApi]);

  const onSelect = useCallback((api) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!academicEmblaApi) return;

    setSlidesCount(academicEmblaApi.scrollSnapList().length);
    onSelect(academicEmblaApi);

    academicEmblaApi.on("reInit", onSelect);
    academicEmblaApi.on("select", onSelect);

    return () => {
      academicEmblaApi.off("reInit", onSelect);
      academicEmblaApi.off("select", onSelect);
    };
  }, [academicEmblaApi, onSelect]);

  return (
    <section className="w-full h-auto py-12.5 2xl:py-15 3xl:py-20 bg-linear-to-t from-[#FFF3E0] to-[#FFF8EE] dark:bg-none dark:bg-black overflow-hidden block">
      <div className="container">
        <div
          data-reveal
          className="w-full h-auto mb-6.25 lg:mb-7.5 3xl:mb-10 text-center"
        >
          <Heading
            as="h2"
            aurora
            speed={2}
            align="center"
            className="mb-1.25 lg:mb-2.5"
          >
            {data?.title}
          </Heading>
          <Text>{data?.description}</Text>
        </div>
        <div
          data-reveal-stagger
          className="w-full h-auto hidden lg:grid grid-cols-5 lg:gap-[15px_10px] 2xl:gap-[20px_10px] 3xl:gap-[25px_15px]"
        >
          {data?.academics?.map((item) => (
            <div key={item?.id} className="w-full h-auto">
              <AcademicCard item={item} />
            </div>
          ))}
        </div>
        <div className="[--navigation-btn-size:40px] w-full h-auto block relative z-0">
          <div
            className="[--slide-gap:10px] 3xl:[--slide-gap:25px] w-full h-auto overflow-hidden"
            ref={academicEmblaRef}
          >
            <div className="ml-[calc(var(--slide-gap)*-1)] touch-pan-y touch-pinch-zoom max-lg:flex hidden">
              {data?.academics?.map((item) => (
                <div
                  key={item?.id}
                  className="min-w-0 translate-x-0 translate-y-0 flex-[0_0_calc(100%/1.4)] sm:flex-[0_0_calc(100%/2)] md:flex-[0_0_calc(100%/3)] pl-(--slide-gap)"
                >
                  <AcademicCard item={item} />
                </div>
              ))}
            </div>
          </div>
          {!prevBtnDisabled && (
            <button
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="w-(--navigation-btn-size) h-auto aspect-40/30 my-auto overflow-hidden -translate-x-[calc(var(--navigation-btn-size)/8)]  sm:-translate-x-(--navigation-btn-size) xl:-translate-x-[calc(var(--navigation-btn-size)+5px)] flex items-center justify-center absolute z-1 inset-[0_auto_0_0] transition-opacity duration-500 hover:opacity-50"
            >
              <Image
                src={"/images/testimonial-slider-btn-mobile.svg"}
                alt="left-btn"
                width={40}
                height={30}
                className="w-full h-full object-contain block sm:hidden"
              />
            </button>
          )}
          {!nextBtnDisabled && (
            <button
              onClick={scrollNext}
              aria-label="Next slide"
              className="w-(--navigation-btn-size) h-auto aspect-40/30 my-auto overflow-hidden translate-x-[calc(var(--navigation-btn-size)/8)] sm:translate-x-(--navigation-btn-size) xl:translate-x-[calc(var(--navigation-btn-size)+5px)] flex items-center justify-center absolute z-1 inset-[0_0_0_auto] transition-opacity duration-500 hover:opacity-50"
            >
              <Image
                src={"/images/testimonial-slider-btn-mobile.svg"}
                alt="right-btn"
                width={40}
                height={30}
                className="w-full h-full object-contain scale-x-[-1] block sm:hidden"
              />
            </button>
          )}
          <DotPagination
            total={slidesCount}
            current={selectedIndex}
            onDotClick={(i) => academicEmblaApi?.scrollTo(i)}
          />
        </div>
        <div
          data-reveal
          className="w-full h-auto mt-3.75 sm:mt-7.5 2xl:mt-8.75 3xl:mt-11.25 flex items-center justify-center"
        >
          <CtaButton button={data?.button} />
        </div>
      </div>
    </section>
  );
}

const VISIBLE_DOTS = 5; // max dots visible at once

function DotPagination({ total, current, onDotClick }) {
  if (total <= 1) return null;

  // Calculate a window of VISIBLE_DOTS around the current index
  const half = Math.floor(VISIBLE_DOTS / 2);
  let start = Math.max(0, current - half);
  let end = start + VISIBLE_DOTS - 1;

  if (end >= total) {
    end = total - 1;
    start = Math.max(0, end - VISIBLE_DOTS + 1);
  }

  const visibleIndices = Array.from(
    { length: end - start + 1 },
    (_, i) => start + i,
  );

  // Dot size category based on distance from active
  const getDotStyle = (index) => {
    const dist = Math.abs(index - current);
    if (dist === 0) return { width: "w-12.5", bg: "bg-[#EA580C]", scale: "" };
    if (dist === 1)
      return { width: "w-3", bg: "bg-[#D3D6DB]", scale: "scale-100" };
    if (dist === 2)
      return { width: "w-2", bg: "bg-[#D3D6DB]", scale: "scale-75 opacity-70" };
    return { width: "w-1.5", bg: "bg-[#D3D6DB]", scale: "scale-50 opacity-40" };
  };

  return (
    <div className="w-full h-auto mt-5 max-sm:flex hidden items-center justify-center gap-1.25">
      {visibleIndices.map((index) => {
        const { width, bg, scale } = getDotStyle(index);
        return (
          <button
            key={index}
            type="button"
            onClick={() => onDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="flex h-6 min-w-4 items-center justify-center px-0.5"
          >
            <span
              className={`block h-1.25 rounded-full transition-all duration-300 ${width} ${bg} ${scale}`}
            />
          </button>
        );
      })}
    </div>
  );
}

// CHANGED: new helper. Scrolls the list while it can move in the wheel direction.
// At the top/bottom (or when the content is short) the event is left alone,
// so the smooth-scroll library (Lenis) scrolls the page as normal.
function WheelScrollList({ className, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onWheel = (e) => {
      if (e.ctrlKey) return; // pinch zoom
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // sideways

      const max = el.scrollHeight - el.clientHeight;
      if (max <= 1) return; // nothing to scroll: page handles it

      const atTop = el.scrollTop <= 0;
      const atBottom = el.scrollTop >= max - 1;
      const canMove = (e.deltaY < 0 && !atTop) || (e.deltaY > 0 && !atBottom);

      // list can still move: keep the event away from Lenis so the list scrolls natively
      if (canMove) e.stopPropagation();
    };

    el.addEventListener("wheel", onWheel, { passive: true });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

function AcademicCard({ item }) {
  return (
    <div className="group [--gap:20px_15px] 2xl:[--gap:25px_20px] w-full h-full aspect-335/355 rounded-[7px] 2xl:rounded-[10px] overflow-hidden block relative z-0 bg-linear-to-br from-[#0B2148] to-[#E84E1B]/70 before:content-[''] before:w-full before:h-[40%] before:bg-linear-to-t before:from-[#090909] before:to-[#0B2148]/0 before:opacity-50 before:absolute before:z-1 before:inset-[auto_0_0_0]">
      <div className="w-full h-full block">
        <Image
          src={item?.academicImage?.url}
          alt={item?.academicImage?.alternativeTxt || "Academic Image"}
          width={335}
          height={355}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      {item?.icon?.url && (
        <div className="w-12.5 lg:w-10 2xl:w-12.5 3xl:w-13.75 h-auto aspect-square p-2.5 lg:p-2 2xl:p-2.5 m-(--gap) rounded-[7px] 2xl:rounded-[10px] backdrop-blur-[45px] absolute z-1 inset-[0_auto_auto_0] flex items-center justify-center">
          <Image
            src={item?.icon?.url}
            alt={item?.icon?.alternativeTxt || "Icon"}
            width={55}
            height={55}
            className="w-full h-full object-contain"
          />
        </div>
      )}
      <h3 className="text-base lg:text-sm 2xl:text-base 3xl:text-xl leading-[1.2] font-bold text-white w-full h-auto m-(--gap) max-w-[85%] absolute z-1 inset-[auto_0_0_0]">
        {item?.link ? (
          <Link href={safeHref(item.link)} className="hover:underline">
            {item?.title}
          </Link>
        ) : (
          item?.title
        )}
      </h3>
      <div className="w-full h-full max-lg:hidden bg-black/50 backdrop-blur-[10px] opacity-0 pointer-events-none transition-opacity duration-500 block absolute z-1 inset-0 overflow-hidden group-hover:opacity-100 group-hover:pointer-events-auto">
        <TableScrollBox className="h-full">
          {/* CHANGED: plain div became WheelScrollList; removed data-lenis-prevent; overscroll-contain became overscroll-auto */}
          <WheelScrollList className="w-full h-[90%] p-[20px_10px_40px_10px] 2xl:p-[35px_15px_40px_15px] overflow-y-auto overscroll-auto [scrollbar-width:thin] [scrollbar-color:rgba(8,12,21,0.35)_transparent] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_88%,transparent_100%)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_88%,transparent_100%)]">
            <div
              className={
                item?.courses_list?.length
                  ? "w-full h-auto block"
                  : "w-full h-full flex items-center justify-center"
              }
            >
              {item?.courses_list?.map((item) => (
                <div
                  key={item?.id}
                  className="w-full h-auto not-last:pb-2.5 2xl:not-last:pb-3.75 not-last:mb-2.5 2xl:not-last:mb-3.75 not-last:border-b border-white/20 block"
                >
                  <div className="text-sm 2xl:text-lg 3xl:text-xl leading-[1.1] font-semibold text-white mb-2.5 2xl:mb-3.75">
                    {item?.title}
                  </div>
                  <div className="w-full h-auto gap-1.25 2xl:gap-2.5 3xl:gap-3.75 flex flex-wrap">
                    {item?.courses?.map((course) => (
                      <div key={course?.id} className="w-auto h-auto inline">
                        <Link
                          href={safeHref(course?.link, "/academics")}
                          aria-label={course?.label}
                          className="text-[13px] 2xl:text-[15px] leading-[1.25] font-normal text-white w-auto h-auto max-w-full p-[5px_10px] bg-black/10 rounded-[16px] border border-white/20 transition duration-500 inline-block hover:text-white hover:bg-[#ffffff4d] hover:border-[#ffffff4d]"
                        >
                          {course?.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              {/* CHANGED: styled "View more", shown only when there is no course list */}
              {!item?.courses_list?.length && (
                <Link
                  href={safeHref(item?.link, "/academics")}
                  className="inline-flex h-[34px] items-center gap-2 rounded-sm bg-linear-to-r from-(--basecolor) to-(--basecolor2) px-3 text-[12px] font-bold leading-none whitespace-nowrap text-white transition-colors duration-300 ease-in-out hover:from-(--basecolor2) hover:to-(--basecolor) 2xl:h-[40px] 2xl:gap-3 2xl:px-4 2xl:text-[14.4px] 3xl:h-[50px] 3xl:gap-4 3xl:px-5 3xl:text-[18px]"
                >
                  View more
                  <Image
                    src="/images/icon-btn.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="size-3.75"
                  />
                </Link>
              )}
            </div>
          </WheelScrollList>
        </TableScrollBox>
      </div>
    </div>
  );
}