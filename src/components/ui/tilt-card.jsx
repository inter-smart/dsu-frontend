"use client";

import { useRef } from "react";

// glassy card that tilts toward the pointer with a following glow (hover-capable devices, motion allowed)
// `maxLg`: card style + tilt only below 1024px; plain wrapper from lg up
export default function TiltCard({ className = "", maxLg = false, children }) {
    const ref = useRef(null);
    const canTilt = () =>
        window.matchMedia(`${maxLg ? "(max-width: 1023.98px) and " : ""}(hover: hover) and (prefers-reduced-motion: no-preference)`).matches;
    const onMove = (e) => {
        if (!canTilt()) return;
        const el = ref.current;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        el.style.transform = `rotateY(${(x - 0.5) * 10}deg) rotateX(${(0.5 - y) * 10}deg) scale(1.02)`;
        el.style.setProperty("--gx", `${x * 100}%`);
        el.style.setProperty("--gy", `${y * 100}%`);
    };
    const onLeave = () => {
        ref.current.style.transform = "";
    };
    return (
        <div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className={`group relative ${
                maxLg
                    ? "max-lg:overflow-hidden max-lg:rounded-[20px] max-lg:border max-lg:border-white/20 max-lg:bg-white/[0.07] max-lg:p-[20px] max-lg:backdrop-blur-[6px] max-lg:transition-[transform,box-shadow] max-lg:duration-150 max-lg:ease-out max-lg:[transform-style:preserve-3d] max-lg:hover:shadow-[0_20px_40px_rgba(224,51,37,0.28)]"
                    : "overflow-hidden rounded-[20px] border border-white/20 bg-white/[0.07] p-[20px] backdrop-blur-[6px] transition-[transform,box-shadow] duration-150 ease-out [transform-style:preserve-3d] hover:shadow-[0_20px_40px_rgba(224,51,37,0.28)] xl:p-[24px] 2xl:p-[30px]"
            } ${className}`}
        >
            <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--gx,50%)_var(--gy,0%),rgba(246,107,25,0.35),transparent_60%)] ${maxLg ? "lg:hidden" : ""}`}
            />
            <div className="relative [transform-style:preserve-3d]">{children}</div>
        </div>
    );
}
