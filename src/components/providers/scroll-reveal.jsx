"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Reveals [data-reveal] / [data-reveal-stagger] elements as they scroll into view.
// Elements with no explicit marker get one automatically: every direct child of a
// section's .container inside <main>. Opt out with data-no-reveal.
// Styles live in globals.css and only apply once <html> has .reveal-ready,
// so content stays visible without JS and under prefers-reduced-motion.
const AUTO = "main section > .container > *";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const auto = [];
    document.querySelectorAll(AUTO).forEach((el) => {
      if (
        el.hasAttribute("data-reveal") ||
        el.hasAttribute("data-reveal-stagger") ||
        el.hasAttribute("data-no-reveal") ||
        el.closest("[data-reveal], [data-no-reveal]") ||
        el.querySelector("[data-reveal], [data-reveal-stagger]") ||
        ["fixed", "sticky"].includes(getComputedStyle(el).position)
      )
        return;
      el.setAttribute("data-reveal", "");
      auto.push(el);
    });

    const targets = document.querySelectorAll("[data-reveal], [data-reveal-stagger]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          // top < 0: already scrolled past (anchor jump / scroll restoration)
          if (e.isIntersecting || e.boundingClientRect.top < 0) {
            e.target.classList.add("is-revealed");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    // Anything already on screen stays put: no hide-then-show flash.
    const vh = window.innerHeight;
    targets.forEach((el) => {
      const { top } = el.getBoundingClientRect();
      if (top < vh * 0.9) el.classList.add("is-revealed");
      else io.observe(el);
    });
    root.classList.add("reveal-ready");

    return () => {
      io.disconnect();
      root.classList.remove("reveal-ready");
      targets.forEach((el) => el.classList.remove("is-revealed"));
      auto.forEach((el) => el.removeAttribute("data-reveal"));
    };
  }, [pathname]);

  return null;
}
