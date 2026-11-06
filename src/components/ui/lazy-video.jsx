"use client";
import { useEffect, useRef, useState } from "react";

// <video> that downloads and plays only once it is near the viewport (or `eager`),
// and pauses again when scrolled away. Avoids loading off-screen autoplay videos up front.
export default function LazyVideo({ src, eager = false, ...props }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  const load = eager || seen;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          el.play?.().catch(() => {});
        } else {
          el.pause?.();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <video ref={ref} src={load ? src : undefined} preload={load ? "auto" : "none"} {...props} />;
}
