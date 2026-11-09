"use client";
import { useMemo } from "react";
import { ReactLenis } from "lenis/react";

const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

function isInsideNativeScrollable(node) {
  if (!node || !(node instanceof Element)) return false;
  if (node === document.documentElement || node === document.body) return false;

  return Boolean(
    node.closest(
      [
        "[data-lenis-prevent]",
        "[data-lenis-prevent-wheel]",
        '[data-slot="select-content"]',
        '[role="listbox"]',
        '[role="menu"]',
        '[role="dialog"]',
        '[data-slot="dropdown-menu-content"]',
        "textarea",
        "input[type='range']",
      ].join(",")
    )
  );
}

export default function SmoothScrollProvider({ children }) {
  const options = useMemo(
    () => ({
      duration: 1.2,
      easing: easeOutQuart,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      syncTouch: false,
      autoRaf: true,
      prevent: (node) => isInsideNativeScrollable(node),
    }),
    []
  );

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
