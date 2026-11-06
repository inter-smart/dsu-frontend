"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Reveals [data-reveal] / [data-reveal-stagger] elements each time they scroll into view.
// Elements with no explicit marker are tagged automatically inside <main> sections:
// card groups (3+ similar children in a grid/flex) get a stagger, other blocks a fade-up.
// Opt out with data-no-reveal. Styles live in globals.css and only apply once <html> has
// .reveal-ready, so content stays visible without JS and under prefers-reduced-motion.
const AUTO = "main section > .container > *";
const MAX_DEPTH = 5;

const kids = (el) =>
  [...el.children].filter(
    (c) => c.tagName !== "SCRIPT" && c.tagName !== "STYLE" && c.getBoundingClientRect().height > 0,
  );

const isSlider = (el) => {
  const cn = String(el.className);
  if (cn.includes("swiper") || el.closest(".swiper, [role=tablist]")) return true;
  const cs = getComputedStyle(el);
  const parent = el.parentElement && getComputedStyle(el.parentElement);
  return (
    cs.display.includes("flex") &&
    cs.flexWrap === "nowrap" &&
    parent &&
    /hidden|clip/.test(parent.overflowX)
  );
};

const isCardGroup = (el) => {
  const k = kids(el);
  if (k.length < 3) return false;
  if (!/grid|flex/.test(getComputedStyle(el).display) || isSlider(el)) return false;
  if (!k.every((c) => c.tagName === k[0].tagName)) return false;
  const heights = k.map((c) => c.getBoundingClientRect().height).sort((a, b) => a - b);
  return heights[Math.floor(heights.length / 2)] >= 80;
};

const hasGroup = (el, depth) => kids(el).some((c) => isCardGroup(c) || (depth > 0 && hasGroup(c, depth - 1)));

// Hover zoom for cards whose photo is clipped by the card, unless the image already has its own zoom.
const markZoom = (card) => {
  card.querySelectorAll("img").forEach((img) => {
    const { width, height } = img.getBoundingClientRect();
    if (width < 120 || height < 90 || /hover:scale|group-hover/.test(img.className)) return;
    for (let n = img.parentElement; n; n = n.parentElement) {
      if (getComputedStyle(n).overflow !== "visible") {
        img.setAttribute("data-zoom", "");
        card.setAttribute("data-zoom-card", "");
        zoomed.push(img, card);
        return;
      }
      if (n === card) return;
    }
  });
};

let tagged = [];
let zoomed = [];

const tag = (el, depth) => {
  if (
    el.hasAttribute("data-reveal") ||
    el.hasAttribute("data-reveal-stagger") ||
    el.hasAttribute("data-no-reveal") ||
    el.closest("[data-reveal], [data-no-reveal]") ||
    el.querySelector("[data-reveal], [data-reveal-stagger]") ||
    ["fixed", "sticky"].includes(getComputedStyle(el).position)
  )
    return;
  if (isCardGroup(el)) {
    el.setAttribute("data-reveal-stagger", "");
    tagged.push(el);
    kids(el).forEach(markZoom);
    return;
  }
  if (depth < MAX_DEPTH && (el.querySelector(".leftBx, [class*='sticky']") || hasGroup(el, 3))) {
    kids(el).forEach((c) => tag(c, depth + 1));
    return;
  }
  el.setAttribute("data-reveal", "");
  tagged.push(el);
};

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const autoTagged = (tagged = []);
    const autoZoomed = (zoomed = []);
    const observed = new WeakSet();
    const vh = () => window.innerHeight;
    // An element reveals once its top is ~25% of the viewport height above the bottom edge, and hides
    // again when it leaves, so the animation replays on each scroll pass.
    const OPTIONS = { rootMargin: "0px 0px -25% 0px", threshold: 0 };
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) e.target.classList.toggle("is-revealed", e.isIntersecting);
    }, OPTIONS);
    // Tall card grids: reveal each card when it arrives (staggered within the batch that arrives together).
    const ioEach = new IntersectionObserver((entries) => {
      let n = 0;
      for (const e of entries) {
        if (e.isIntersecting) e.target.style.setProperty("--reveal-delay", `${n++ * 140}ms`);
        e.target.classList.toggle("is-revealed", e.isIntersecting);
      }
    }, OPTIONS);

    const scan = () => {
      document.querySelectorAll(AUTO).forEach((el) => tag(el, 0));
      document.querySelectorAll("[data-reveal], [data-reveal-stagger]").forEach((el) => {
        if (observed.has(el)) return;
        observed.add(el);
        const { top, bottom, height } = el.getBoundingClientRect();
        const onScreen = top < vh() * 0.75 && bottom > 0;
        if (el.hasAttribute("data-reveal-stagger") && height > vh() * 0.85) {
          el.setAttribute("data-reveal-each", "");
          [...el.children].forEach((c) => {
            c.style.setProperty("--reveal-delay", "0ms");
            if (c.getBoundingClientRect().top < vh() * 0.75 && c.getBoundingClientRect().bottom > 0) c.classList.add("is-revealed");
            ioEach.observe(c);
          });
          return;
        }
        if (onScreen && el.getAttribute("data-reveal") === "wipe") {
          // hero-style image: play the entrance even when it is already on screen. Settle the hidden
          // state without a transition first, then let the observer open it.
          el.setAttribute("data-reveal-init", "");
          requestAnimationFrame(() =>
            requestAnimationFrame(() => {
              el.removeAttribute("data-reveal-init");
              io.observe(el);
            }),
          );
          return;
        }
        // Anything else already on screen stays put: no hide-then-show flash.
        if (onScreen) el.classList.add("is-revealed");
        io.observe(el);
      });
    };

    scan();
    root.classList.add("reveal-ready");

    // At the very bottom of the page the last blocks can never reach the trigger line: show what is on screen.
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (window.scrollY + vh() < document.documentElement.scrollHeight - 4) return;
        document.querySelectorAll("[data-reveal]:not(.is-revealed), [data-reveal-stagger]:not([data-reveal-each]):not(.is-revealed), [data-reveal-each] > :not(.is-revealed)").forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < vh() && r.bottom > 0) el.classList.add("is-revealed");
        });
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Content rendered after the first pass (streamed or client-rendered sections) is picked up too.
    let timer = 0;
    const mo = new MutationObserver(() => {
      clearTimeout(timer);
      timer = setTimeout(scan, 300);
    });
    const main = document.querySelector("main");
    if (main) mo.observe(main, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      mo.disconnect();
      io.disconnect();
      ioEach.disconnect();
      root.classList.remove("reveal-ready");
      document.querySelectorAll(".is-revealed").forEach((el) => el.classList.remove("is-revealed"));
      document.querySelectorAll("[data-reveal-each]").forEach((el) => el.removeAttribute("data-reveal-each"));
      autoTagged.forEach((el) => {
        el.removeAttribute("data-reveal");
        el.removeAttribute("data-reveal-stagger");
      });
      autoZoomed.forEach((el) => {
        el.removeAttribute("data-zoom");
        el.removeAttribute("data-zoom-card");
      });
    };
  }, [pathname]);

  return null;
}
