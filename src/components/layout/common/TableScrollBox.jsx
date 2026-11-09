"use client";

import { useEffect, useRef } from "react";

export default function TableScrollBox({ children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onWheel = (e) => {
      if (e.ctrlKey) return; // pinch zoom

      const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1;
      const dx = e.deltaX * unit;
      const dy = e.deltaY * unit;

      if (Math.abs(dx) > Math.abs(dy)) return; // sideways: browser handles it

      const canScroll = el.scrollHeight > el.clientHeight + 1;
      if (!canScroll) return; // nothing to scroll, page handles it

      const atTop = el.scrollTop <= 0;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
      const tableCanMove = (dy < 0 && !atTop) || (dy > 0 && !atBottom);

      if (tableCanMove) {
        e.stopPropagation(); // table scrolls, keep the page still
        return;
      }

      // at the edge: scroll the page instead
      e.preventDefault();
      if (window.lenis) {
        window.lenis.scrollTo(window.scrollY + dy, { immediate: true });
      } else {
        window.scrollBy(0, dy);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div ref={ref} className={className} style={{ overscrollBehavior: "auto" }}>
      {children}
    </div>
  );
}