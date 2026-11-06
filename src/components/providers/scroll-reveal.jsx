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

    tagged = [];
    zoomed = [];
    document.querySelectorAll(AUTO).forEach((el) => tag(el, 0));

    const targets = document.querySelectorAll("[data-reveal], [data-reveal-stagger]");
    // Toggle on every enter/leave so the animation replays on each scroll pass.
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) e.target.classList.toggle("is-revealed", e.isIntersecting);
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    // Anything already on screen stays put: no hide-then-show flash.
    const vh = window.innerHeight;
    targets.forEach((el) => {
      const { top, bottom } = el.getBoundingClientRect();
      if (top < vh * 0.9 && bottom > 0) el.classList.add("is-revealed");
      io.observe(el);
    });
    root.classList.add("reveal-ready");

    const autoTagged = tagged;
    const autoZoomed = zoomed;
    return () => {
      io.disconnect();
      root.classList.remove("reveal-ready");
      targets.forEach((el) => el.classList.remove("is-revealed"));
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
