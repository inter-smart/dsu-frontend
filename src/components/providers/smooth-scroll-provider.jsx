"use client";
import { useMemo } from "react";
import { ReactLenis } from "lenis/react";

const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

function isScrollable(node) {
  if (!(node instanceof HTMLElement)) return false;
  const { overflowY } = window.getComputedStyle(node);
  const canScroll =
    /(auto|scroll|overlay)/.test(overflowY) && node.scrollHeight > node.clientHeight;
  return canScroll;
}

function isInsideNativeScrollable(node) {
  return Boolean(
    node.closest(
      [
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
      prevent: (node) => isInsideNativeScrollable(node) || isScrollable(node),
    }),
    []
  );

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}