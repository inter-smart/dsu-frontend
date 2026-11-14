"use client";
import Image from "@/components/ui/safe-image";
import Link from "next/link";
import { safeHref } from "@/lib/utils";
import { Text } from "@/components/ui/text";
import { startTransition, useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react"; // CHANGED: added startTransition
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
// One wheel gesture / swipe moves exactly one card; this is how long that move takes (ms).
const STEP_MS = 1000;
// Wheel events closer together than this belong to the same gesture (trackpad inertia included).
const GESTURE_GAP_MS = 120;
const SWIPE_PX = 24;
// Cards visible in the stack at once; the next one fades in behind them as the front card leaves.
const VISIBLE_CARDS = 3;
// How quickly the cards catch up to the scroll position (0-1, higher = snappier).
// CHANGED: this is now applied per 16.67ms of real time (not per frame), so it feels the same on 60/120/144Hz screens.
const EASE = 0.14;
// Each card holds still until this fraction of its scroll range, swaps, then holds again.
const DWELL_START = 0.1;
const DWELL_END = 0.9;

// Maps raw progress (0..count-1) so that cards rest on whole numbers instead of in-between blends.
const withDwell = (raw) => {
  const base = Math.floor(raw);
  const frac = raw - base;
  if (frac <= DWELL_START) return base;
  if (frac >= DWELL_END) return base + 1;
  const u = (frac - DWELL_START) / (DWELL_END - DWELL_START);
  return base + u * u * (3 - 2 * u);
};

export default function HomeExcellence({ data }) {
  const pinned = useSyncExternalStore(
    subscribePin,
    () => window.matchMedia(PIN_QUERY).matches,
    () => false,
  );
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
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

  // Scrub: scroll progress drives the card stack directly on the DOM (no React re-render per frame).
  useLayoutEffect(() => {
    if (!pinned || count < 2) return;
    let raf = 0;
    let current = 0;
    let target = 0;
    let lastIndex = -1;
    let lastTime = 0; // ADDED: timestamp of the previous frame, for time-based easing

    const getRaw = () => {
      const el = trackRef.current;
      if (!el) return 0;
      const { top, height } = el.getBoundingClientRect();
      const pin = el.firstElementChild?.offsetHeight || window.innerHeight;
      const total = height - pin;
      const progress = total > 0 ? Math.min(1, Math.max(0, -top / total)) : 0;
      return progress * (count - 1);
    };
    const getTarget = () => withDwell(getRaw());

    const paint = (t) => {
      const nodes = cardRefs.current;
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (!node) continue;
        const pos = i - t;
        const stackIndex = Math.max(0, pos);
        const isVisible = stackIndex < VISIBLE_CARDS;
        const passed = pos < 0;
        node.style.transform = passed
          ? `translate3d(0, ${-pos * 140}%, 0)`
          : isVisible
            ? `translate3d(0, calc(-1 * ${stackIndex} * var(--stack-gap)), 0) scale(${1 - stackIndex * 0.08})`
            : `translate3d(0, calc(-${VISIBLE_CARDS} * var(--stack-gap)), 0) scale(${1 - VISIBLE_CARDS * 0.08})`;
        // Exiting card must sit above the whole stack (stack z tops out at count * 100).
        node.style.zIndex = passed ? (count + 1) * 100 : Math.round((count - stackIndex) * 100);
        node.style.opacity = passed ? Math.min(1, Math.max(0, (1 + pos) * 6)) : Math.min(1, Math.max(0, VISIBLE_CARDS - pos));
      }
      // Only touch React state when the active card actually changes.
      const idx = Math.round(t);
      if (idx !== lastIndex) {
        lastIndex = idx;
        // CHANGED: non-urgent update, so the re-render doesn't block the card animation frame
        startTransition(() => setActiveIndex(idx));
      }
    };

    // CHANGED: time-based easing (same feel at any refresh rate)
    const tick = (now) => {
      raf = 0;
      const dt = lastTime ? Math.min(now - lastTime, 50) : 16.67;
      lastTime = now;
      const factor = 1 - Math.pow(1 - EASE, dt / 16.67);
      current += (target - current) * factor;
      if (Math.abs(target - current) < 0.001) current = target;
      paint(current);
      if (current !== target) {
        raf = requestAnimationFrame(tick);
      } else {
        lastTime = 0;
      }
    };

    const onScroll = () => {
      target = getTarget();
      if (!raf) raf = requestAnimationFrame(tick);
    };

    current = target = getTarget();
    paint(current);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Gesture stepping: while the section is pinned, one wheel gesture / swipe scrolls to exactly the next
    // (or previous) card. At the first/last card the gesture is released so the page scrolls on normally.
    let dead = false;
    let busy = false; // a step animation is running
    let locked = false; // current wheel gesture already handled (swallow its remaining/inertia events)
    let quiet = true; // no wheel events for GESTURE_GAP_MS
    let settle = false; // gesture started outside the pin: snap to the nearest card when it ends
    let lastWheel = 0;
    let quietTimer = 0;
    let touchY = 0;
    let touchDone = false;

    const inRange = () => {
      const r = trackRef.current?.getBoundingClientRect();
      return !!r && r.top <= 2 && r.bottom >= window.innerHeight - 2;
    };
    const tryUnlock = () => {
      if (!busy && quiet) locked = false;
    };
    const go = (i) => {
      const el = trackRef.current;
      if (!el) return;
      const pin = el.firstElementChild?.offsetHeight || window.innerHeight;
      const y = el.getBoundingClientRect().top + window.scrollY + (i / (count - 1)) * (el.offsetHeight - pin);
      busy = true;
      const done = () => {
        busy = false;
        tryUnlock();
      };
      if (typeof window.lenis?.scrollTo === "function") {
        window.lenis.scrollTo(y, { duration: STEP_MS / 1000, easing: (t) => t, force: true, onComplete: done });
        return;
      }
      const from = window.scrollY;
      const t0 = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - t0) / STEP_MS);
        window.scrollTo(0, from + (y - from) * p);
        if (p < 1 && !dead) requestAnimationFrame(step);
        else done();
      };
      requestAnimationFrame(step);
    };
    const swallow = (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation?.();
    };
    const canStep = (dir) => {
      const next = Math.round(getRaw()) + dir;
      return next >= 0 && next <= count - 1;
    };

    const onWheel = (e) => {
      const now = performance.now();
      const gap = now - lastWheel;
      lastWheel = now;
      const dir = Math.sign(e.deltaY);
      if (!dir || e.ctrlKey || !inRange()) return;
      if (!locked && !canStep(dir)) return; // first/last card: let the page scroll on
      swallow(e);
      quiet = false;
      clearTimeout(quietTimer);
      quietTimer = setTimeout(() => {
        quiet = true;
        if (settle && !busy) {
          settle = false;
          const raw = getRaw();
          if (Math.abs(raw - Math.round(raw)) > 0.02) go(Math.round(raw));
        }
        tryUnlock();
      }, GESTURE_GAP_MS);
      if (locked) return;
      locked = true;
      if (gap < GESTURE_GAP_MS) {
        settle = true; // momentum carried us in from outside: don't start a step, just settle
        return;
      }
      go(Math.round(getRaw()) + dir);
    };
    const onTouchStart = (e) => {
      touchY = e.touches[0].clientY;
      touchDone = false;
    };
    const onTouchMove = (e) => {
      if (!inRange()) return;
      const dy = touchY - e.touches[0].clientY;
      const dir = Math.sign(dy);
      if (!dir || (!touchDone && !busy && !canStep(dir))) return;
      if (e.cancelable) e.preventDefault();
      if (touchDone || busy || Math.abs(dy) < SWIPE_PX) return;
      touchDone = true;
      go(Math.round(getRaw()) + dir);
    };
    window.addEventListener("wheel", onWheel, { passive: false, capture: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false, capture: true });

    // ADDED: when fonts/images/content above the section change the page height, the section moves
    // without a scroll event. Re-sync the cards so the pin never looks out of step.
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(onScroll);
      resizeObserver.observe(document.documentElement);
      if (trackRef.current) resizeObserver.observe(trackRef.current);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      resizeObserver?.disconnect();
      dead = true;
      clearTimeout(quietTimer);
      window.removeEventListener("wheel", onWheel, { capture: true });
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove, { capture: true });
      if (raf) cancelAnimationFrame(raf);
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

  // While pinned, the scroll position is the source of truth, so the arrows
  // scroll the page to the target card instead of changing activeIndex directly.
  const goToPinned = (next) => {
    const el = trackRef.current;
    if (!el || count < 2) return;
    const pin = el.firstElementChild?.offsetHeight || window.innerHeight;
    const total = el.offsetHeight - pin;
    const start = el.getBoundingClientRect().top + window.scrollY;
    const top = start + (next / (count - 1)) * total;
    // CHANGED: use Lenis when it is available (native smooth scroll fights with Lenis), else fall back
    if (typeof window.lenis?.scrollTo === "function") {
      window.lenis.scrollTo(top, { duration: 1.2 });
      return;
    }
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  const scrollPrev = () => {
    if (pinned) {
      goToPinned((activeIndex - 1 + items.length) % items.length);
      return;
    }
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };
  const scrollNext = () => {
    if (pinned) {
      goToPinned((activeIndex + 1) % items.length);
      return;
    }
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
                  // Pinned: transform/opacity/zIndex are written straight to the DOM by the scrub effect.
                  // Not pinned: the stack is driven by activeIndex as before.
                  const stackIndex = Math.max(0, getStackIndex(index));
                  const isVisible = stackIndex < VISIBLE_CARDS;
                  return (
                    <div
                      key={item?.id}
                      ref={(el) => {
                        cardRefs.current[index] = el;
                      }}
                      className={`[--stack-gap:15px] sm:[--stack-gap:25px] 2xl:[--stack-gap:30px] 3xl:[--stack-gap:35px] w-full h-full rounded-[5px] sm:rounded-[7px] 2xl:rounded-[10px] overflow-hidden absolute z-1 inset-0 ${pinned ? "" : "transition-all duration-1000"}`}
                      style={
                        pinned
                          ? { pointerEvents: "none", willChange: "transform, opacity" }
                          : {
                              transform: isVisible
                                ? `translateY(calc(-1 * ${stackIndex} * var(--stack-gap))) scale(${1 - stackIndex * 0.08})`
                                : `translateY(calc(-${VISIBLE_CARDS} * var(--stack-gap))) scale(${1 - VISIBLE_CARDS * 0.08})`,
                              zIndex: Math.round((items.length - stackIndex) * 100),
                              opacity: isVisible ? 1 : 0,
                              pointerEvents: "none",
                            }
                      }
                    >
                      {item?.excellenceImage?.url && (
                        <Image
                          src={item.excellenceImage.url}
                          alt={item.excellenceImage.alternativeText || "Excellence Image"}
                          fill
                          sizes="(max-width: 1024px) 100vw, 875px"
                          className="h-full w-full object-cover select-none"
                          draggable={false}
                        />
                      )}
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
                    {activeItem?.excellenceContent?.poweredImage?.url && (
                      <div className="text-base leading-normal font-bold tracking-[-2%] text-black dark:text-white w-full h-auto mb-2.5 sm:mb-5 lg:mb-7.5 2xl:mb-10 3xl:mb-12.5 gap-1.25 flex items-center">
                        Powered By
                        <span className="w-17.5 sm:w-27.5 2xl:w-32.5 3xl:w-40 h-auto aspect-160/30 overflow-hidden block">
                          <Image
                            src={activeItem.excellenceContent.poweredImage.url}
                            alt={
                              activeItem.excellenceContent.poweredImage
                                .alternativeTxt || "Powered By"
                            }
                            width={160}
                            height={30}
                            className="w-full h-full object-contain"
                          />
                        </span>
                      </div>
                    )}
                    <Text>{activeItem?.excellenceContent?.description}</Text>
                  </div>
                  {activeItem?.excellenceContent?.button?.label?.trim() && (
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
                  )}
                </div>
              </div>
            </div>
          </div>
          {activeItem?.excellenceContent?.button?.label?.trim() && (
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
          )}
        </div>
      </div>
      </div>
    </section>
  );
}