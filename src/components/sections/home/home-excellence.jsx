"use client";
import Image from "@/components/ui/safe-image";
import Link from "next/link";
import { safeHref } from "@/lib/utils";
import { Text } from "@/components/ui/text";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Heading } from "@/components/ui/heading";
import { buttonVariants } from "@/components/ui/button";
import { ShineBorder } from "@/components/ui/shine-border";

// Pinned scroll-scrub needs room to pin (desktop-size viewport) and is skipped for reduced motion.
const PIN_QUERY = "(min-width: 1024px) and (min-height: 530px) and (prefers-reduced-motion: no-preference)";
const subscribePin = (cb) => {
  const mql = window.matchMedia(PIN_QUERY);
  mql.addEventListener("change", cb);
  return () => mql.removeEventListener("change", cb);
};
// Viewport heights of scrolling per card while the section is pinned.
const SCRUB_VH_PER_CARD = 60;

export default function HomeExcellence({ data }) {
  const pinned = useSyncExternalStore(
    subscribePin,
    () => window.matchMedia(PIN_QUERY).matches,
    () => false,
  );
  const trackRef = useRef(null);
  const [scrub, setScrub] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const items = data?.excellence || [];
  const activeItem = items?.[activeIndex] ?? items?.[0] ?? {};
  const activeSpecifications = activeItem?.specifications ?? [];
  const count = items.length;

  // Autoplay only where the scroll-scrub is off (and never for reduced motion).
  useEffect(() => {
    if (pinned || count < 2 || isDragging) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, 5000);
    return () => clearInterval(interval);
  }, [pinned, count, isDragging]);

  // Scrub: scroll progress through the pinned track drives the card stack.
  useEffect(() => {
    if (!pinned || count < 2) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = trackRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const total = height - window.innerHeight;
      const progress = total > 0 ? Math.min(1, Math.max(0, -top / total)) : 0;
      const t = Math.round(progress * (count - 1) * 100) / 100;
      setScrub(t);
      setActiveIndex(Math.round(t));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pinned, count]);

  const getStackIndex = (itemIndex) => {
    return (itemIndex - activeIndex + items.length) % items.length;
  };

  const handleMouseDown = (e) => {
    if (pinned) return;
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentOffset = e.clientX - dragStart;
    setDragOffset(currentOffset);
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    const dragDistance = e.clientX - dragStart;
    const threshold = 50;
    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
      } else {
        setActiveIndex((prev) => (prev + 1) % items.length);
      }
    }
    setDragOffset(0);
  };

  const scrollPrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };
  const scrollNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };
  return (
    <section
      ref={trackRef}
      style={pinned ? { height: `calc(100vh + ${(count - 1) * SCRUB_VH_PER_CARD}vh)` } : undefined}
      className="w-full h-auto dark:bg-[#101010] block"
    >
      <div
        className={`w-full overflow-hidden ${
          pinned
            ? "sticky top-0 h-screen py-5 flex items-center"
            : "h-auto block py-[40px_50px] sm:py-[50px_70px] lg:py-[70px_90px] 2xl:py-[80px_110px] 3xl:py-[100px_140px]"
        }`}
      >
      <div className="container">
        <div data-reveal className="w-full h-auto mb-12.5 sm:mb-17.5 lg:mb-20 2xl:mb-25 3xl:mb-30">
          <Heading
            as="h2"
            aurora
            speed={2}
            align="center"
            className="mb-1.25 lg:mb-2.5"
          >
            {data?.title}
          </Heading>
          <Text className="text-center">{data?.description}</Text>
        </div>
        <div data-reveal="fade" className="w-full h-auto lg:-mx-2.5 2xl:-mx-3.75 3xl:-mx-5 lg:[&>*]:px-2.5 2xl:[&>*]:px-3.75 3xl:[&>*]:px-5 flex flex-wrap">
          <div className="w-full lg:w-[25%] max-lg:order-3">
            <div className="w-full h-full gap-2.5 lg:gap-3.75 2xl:gap-5 3xl:gap-7.5 max-lg:grid max-lg:grid-cols-2 lg:flex flex-col justify-between">
              {activeSpecifications?.map((item, index) => (
                <div
                  key={`${activeItem?.id ?? activeIndex}-spec-${item?.title ?? index}`}
                  style={{ animationDelay: `${index * 120}ms` }}
                  className="cardFlip w-full lg:w-auto h-auto ml-auto"
                >
                  <div className="w-full lg:w-auto h-full lg:h-auto lg:text-right p-[15px_10px] lg:p-[15px_25px_15px_10px] 3xl:p-[20px_25px_20px_10px] bg-[#D9D9D91A] max-sm:rounded-[10px] rounded-[4px] lg:rounded-[8px] 3xl:rounded-[10px] border border-black/10 dark:border-white/10 overflow-hidden relative z-0 inline-flex flex-col">
                    <ShineBorder
                      shineColor={["#909191"]}
                      duration={8 + index * 4}
                      className="hidden dark:block"
                    />
                    <div className="text-sm sm:text-base 2xl:text-xl 3xl:text-[25px] leading-[1.1] font-bold text-[#212121] dark:text-white mb-0.75 2xl:mb-1.25">
                      {item?.title}
                    </div>
                    <div className="text-xs sm:text-[13px] 2xl:text-sm 3xl:text-lg leading-[1.1] font-normal text-[#4A5565] dark:text-white">
                      {item?.description ?? item?.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[50%] max-lg:mb-3.75 max-lg:order-1">
            <div
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              className="w-full min-w-0 h-full block"
            >
              <div className="[--navigation-btn-size:35px] sm:[--navigation-btn-size:45px] w-full h-full aspect-875/450 relative z-0">
                {items?.map((item, index) => {
                  // Pinned: fractional position from scroll (negative = already passed, fades out forward).
                  const pos = pinned ? index - scrub : getStackIndex(index);
                  const stackIndex = Math.max(0, pos);
                  const isVisible = stackIndex < 5;
                  const passed = pinned && pos < 0;
                  return (
                    <div
                      key={item?.id}
                      className={`[--stack-gap:15px] sm:[--stack-gap:25px] 2xl:[--stack-gap:30px] 3xl:[--stack-gap:35px] w-full h-full rounded-[5px] sm:rounded-[7px] 2xl:rounded-[10px] overflow-hidden absolute z-1 inset-0 ${pinned ? "" : "transition-all duration-1000"}`}
                      style={{
                        transform: passed
                          ? `translateY(${-pos * 24}px) scale(${1 - pos * 0.1})`
                          : isVisible
                            ? `translateY(calc(-1 * ${stackIndex} * var(--stack-gap))) scale(${1 - stackIndex * 0.08})`
                            : `translateY(calc(-5 * var(--stack-gap))) scale(${1 - 5 * 0.08})`,
                        zIndex: passed ? items.length + 1 : Math.round((items.length - stackIndex) * 100),
                        opacity: passed ? Math.max(0, 1 + pos * 1.8) : 1,
                        pointerEvents: "none",
                      }}
                    >
                      <Image
                        src={item?.excellenceImage?.url}
                        alt={item?.excellenceImage?.alternativeText || "Excellence Image"}
                        fill
                        sizes="(max-width: 1024px) 100vw, 875px"
                        className="h-full w-full object-cover select-none"
                        draggable={false}
                      />
                    </div>
                  );
                })}
                <button
                  onClick={scrollPrev}
                  aria-label="Previous slide"
                  className="w-(--navigation-btn-size) h-auto aspect-40/30 my-auto overflow-hidden translate-x-[10px] flex items-center justify-center absolute z-10 inset-[0_auto_0_0] transition-opacity duration-500 hover:opacity-50"
                >
                  <Image
                    src={"/images/testimonial-slider-btn-mobile.svg"}
                    alt="left-btn"
                    width={40}
                    height={30}
                    className="w-full h-full object-contain block lg:hidden"
                  />
                </button>
                <button
                  onClick={scrollNext}
                  aria-label="Next slide"
                  className="w-(--navigation-btn-size) h-auto aspect-40/30 my-auto overflow-hidden translate-x-[-10px] flex items-center justify-center absolute z-10 inset-[0_0_0_auto] transition-opacity duration-500 hover:opacity-50"
                >
                  <Image
                    src={"/images/testimonial-slider-btn-mobile.svg"}
                    alt="right-btn"
                    width={40}
                    height={30}
                    className="w-full h-full object-contain scale-x-[-1] block lg:hidden"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[25%] max-lg:mb-3.75 max-lg:order-2">
            <div className="w-full h-full flex">
              <div
                key={activeItem?.id}
                className="animate-in fade-in slide-in-from-right-3 w-auto h-auto"
              >
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="w-full h-auto">
                    <div className="text-sm sm:text-xl 2xl:text-[25px] 3xl:text-[32px] leading-[1.2] font-normal text-[#212121] dark:text-white mb-2.5 2xl:mb-3.75">
                      {activeItem?.excellenceContent?.heading?.title}
                      <span className="text-[21px] sm:text-[28px] 2xl:text-[34px] 3xl:text-[42px] font-bold block">
                        {activeItem?.excellenceContent?.heading?.highlightTxt}
                      </span>
                    </div>
                    <div className="text-base leading-normal font-bold tracking-[-2%] text-black dark:text-white w-full h-auto mb-2.5 sm:mb-5 lg:mb-7.5 2xl:mb-10 3xl:mb-12.5 gap-1.25 flex items-center">
                      Powered By
                      <span className="w-17.5 sm:w-27.5 2xl:w-32.5 3xl:w-40 h-auto aspect-160/30 overflow-hidden block">
                        <Image
                          src={activeItem?.excellenceContent?.poweredImage?.url}
                          alt={
                            activeItem?.excellenceContent?.poweredImage
                              ?.alternativeTxt || "Powered By"
                          }
                          width={160}
                          height={30}
                          className="w-full h-full object-contain"
                        />
                      </span>
                    </div>
                    <Text>{activeItem?.excellenceContent?.description}</Text>
                  </div>
                  <div className="mt-2.5 2xl:mt-3.75 3xl:mt-6.25 max-lg:hidden">
                    <Link
                      href={safeHref(activeItem?.excellenceContent?.button?.link, "/NVIDIA")}
                      className={buttonVariants({
                        variant: "default",
                        size: "default",
                      })}
                    >
                      {activeItem?.excellenceContent?.button?.label}
                      <Image
                        src="/images/icon-btn.svg"
                        alt="home-btn"
                        width={15}
                        height={15}
                        className="size-3.75"
                        data-icon="inline-end"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 max-lg:block hidden max-lg:order-4">
            <Link
              href={safeHref(activeItem?.excellenceContent?.button?.link, "/NVIDIA")}
              className={buttonVariants({
                variant: "default",
                size: "default",
              })}
            >
              {activeItem?.excellenceContent?.button?.label}
              <Image
                src="/images/icon-btn.svg"
                alt="home-btn"
                width={15}
                height={15}
                className="size-3.75"
                data-icon="inline-end"
              />
            </Link>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
