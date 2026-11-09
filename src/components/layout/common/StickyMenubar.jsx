"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const PIN_TOP = 10; // px gap above the pinned bar

// Desktop menubar that pins to the top while scrolling down (the site header is hidden then) and
// disappears on scroll up (the header comes back). Rendered through a portal while pinned because the
// hero that holds the menubar is its own stacking context and would let later sections paint over it.
export default function StickyMenubar({ children }) {
  const holder = useRef(null);
  const [stuck, setStuck] = useState(false);
  const [height, setHeight] = useState(0);
  const [top, setTop] = useState(PIN_TOP);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      ticking = false;
      const el = holder.current;
      const y = window.scrollY;
      const dy = y - lastY;
      lastY = y;
      // offsetHeight is 0 where the menubar is hidden (below lg)
      if (!el || !el.offsetHeight) return;
      // Document position of the menubar's bottom edge (the holder keeps its place while pinned).
      // Pin only once the in-flow bar has fully left the screen, so nothing visibly jumps.
      const bottom = el.getBoundingClientRect().bottom + y;
      if (y <= bottom) return setStuck(false);
      // Stay inside <main>: once its end nears the top, the bar rides up with it (like position: sticky)
      const main = el.closest("main");
      if (main) setTop(Math.min(PIN_TOP, main.getBoundingClientRect().bottom - el.offsetHeight));
      if (dy > 0) {
        setHeight(el.offsetHeight);
        setStuck(true);
      } else if (dy < 0) {
        setStuck(false);
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    const onResize = () => setStuck(false);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div ref={holder} className="flow-root" style={stuck ? { height } : undefined}>
      {stuck ? (
        createPortal(
          <div className="menubar-stuck fixed inset-x-0 z-[9998]" style={{ top }}>
            {children}
          </div>,
          document.body,
        )
      ) : (
        children
      )}
    </div>
  );
}
