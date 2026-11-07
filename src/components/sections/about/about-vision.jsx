"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { jarallax } from "jarallax";
import "jarallax/dist/jarallax.css";

// glassy card that tilts toward the pointer with a following glow (hover-capable devices, motion allowed)
function TiltCard({ className = "", children }) {
    const ref = useRef(null);
    const canTilt = () => window.matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches;
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
            className={`group relative overflow-hidden rounded-[20px] border border-white/20 bg-white/[0.07] p-[20px] backdrop-blur-[6px] transition-[transform,box-shadow] duration-150 ease-out [transform-style:preserve-3d] hover:shadow-[0_20px_40px_rgba(224,51,37,0.28)] xl:p-[24px] 2xl:p-[30px] ${className}`}
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--gx,50%)_var(--gy,0%),rgba(246,107,25,0.35),transparent_60%)]"
            />
            <div className="relative [transform-style:preserve-3d]">{children}</div>
        </div>
    );
}

export default function AboutVision({ data }) {
    const sectionRef = useRef(null);
    const [openValue, setOpenValue] = useState(0);

    // Parallax background (same jarallax setup as the home industry section); skipped for reduced motion
    useEffect(() => {
        const el = sectionRef.current;
        if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        jarallax(el, { speed: 0.5 });
        return () => jarallax(el, "destroy");
    }, []);

    if (!data) return null;
    const media = data?.backgroundImage;
    const values = data?.values;
    const items = (Array.isArray(data?.items) ? data.items : []).filter((item) => item?.title);
    const valueItems = (Array.isArray(values?.items) ? values.items : []).filter((item) => item?.title);
    return (
        <section id="vision-mission" ref={sectionRef} className="jarallax relative z-0 py-[40px] lg:py-[40px_50px] xl:py-[40px_60px] 2xl:py-[50px_80px] 3xl:py-[60px_100px] before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-black/40 before:z-10 before:pointer-events-none">
            {media?.url && (
                <Image
                    src={media.url}
                    alt={media.alternativeText || "Vision"}
                    width={1920}
                    height={900}
                    priority
                    className="jarallax-img object-cover absolute top-0 left-0 w-full h-full"
                    sizes="100vw"
                />
            )}
            <div className="container">
                <div className="relative z-10 grid gap-[24px] md:grid-cols-[1.15fr_1fr] md:gap-[40px] xl:gap-[56px] 3xl:gap-[80px]">
                    <div className="min-w-0 relative after:absolute after:content-[''] after:top-0 after:bottom-0 after:-right-[20px] xl:after:-right-[28px] 3xl:after:-right-[40px] after:h-full after:m-auto after:w-[1px]
                        after:bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,white_51.44%,rgba(153,153,153,0)_100%)] max-md:after:hidden">
                        <div className="w-full md:pt-[30px] xl:pt-[40px] 2xl:pt-[60px] 3xl:pt-[80px]">
                            {data.label && (
                                <div className="text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-[#F57F2A] uppercase relative pl-[40px] mb-[22px] before:absolute before:content-[''] 
                                        before:top-0 before:left-0 before:bottom-0 before:m-auto before:h-[4px] 
                                        before:w-[30px] before:bg-gradient-to-r before:from-[#DC2626]
                                        before:to-[#F97316] ">
                                    {data.label}
                                </div>
                            )}
                            {data.heading && (
                                <h2 className="mb-[25px] md:mb-[55px] 2xl:mb-[90px] 3xl:mb-[120px] text-[25px] xl:text-[36px] 2xl:text-[44px] 3xl:text-[55px] font-bold leading-[30px]
                                    xl:leading-[40px] 2xl:leading-[50px] 3xl:leading-[60px] text-white max-w-[230px] xl:max-w-[300px] 2xl:max-w-[400px] 3xl:max-w-[510px]">
                                    {data.heading}
                                </h2>
                            )}

                            {items.length > 0 && (
                            <div className="grid gap-[12px] sm:grid-cols-2 sm:gap-[16px] xl:gap-[20px] 3xl:gap-[30px] [perspective:1100px]">
                                {items.map((item, idx) => (
                                    <TiltCard className="[&_p]:text-white" key={idx}>
                                        {item.icon && (
                                            <div className="w-[40px] h-[35px] xl:w-[52px] xl:h-[42px] 2xl:w-[62px] 2xl:h-[52px] 3xl:h-[65px] 3xl:w-[78px] bg-white/20 flex border border-white rounded-[6px] xl:rounded-[7px] 2xl:rounded-[8px] 3xl:rounded-[10px] items-center justify-center mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px] [transform:translateZ(40px)] group-hover:bg-gradient-to-r group-hover:from-[#DC2626] group-hover:to-[#F97316]">
                                                <Image src={item.icon} width={78} height={65} alt={item.alt || item.title} className="max-w-[19px] xl:max-w-[21px] 2xl:max-w-[25px] 3xl:max-w-[34px] " />
                                            </div>
                                        )}
                                        <div className="w-full">
                                            <div className="text-[13px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[25px] text-white font-bold mb-[8px] [transform:translateZ(28px)]">
                                                {item.title}
                                            </div>
                                            <div className="[transform:translateZ(14px)]">
                                                {typeof item.description === "string" && item.description.trim() && (
                                                    item.description.startsWith("<") ? (
                                                        <div dangerouslySetInnerHTML={{ __html: item.description }} />
                                                    ) : (
                                                        <p>{item.description}</p>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </TiltCard>
                                ))}
                            </div>
                            )}
                        </div>
                    </div>
                    {valueItems.length > 0 && (
                    <div className="min-w-0">
                        <div className="w-full h-full relative [&_p]:text-white group max-sm:border border-white/20 max-sm:p-[20px] max-sm:rounded-[20px] ">
                            {values?.icon && (
                                <div className="w-[40px] h-[35px] xl:w-[52px] xl:h-[42px] 2xl:w-[62px] 2xl:h-[52px] 3xl:h-[62px] 3xl:w-[78px] flex border border-white bg-white/20 rounded-[6px] xl:rounded-[7px] 2xl:rounded-[8px] 3xl:rounded-[10px] flex items-center justify-center mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]
                                group-hover:bg-gradient-to-r group-hover:from-[#DC2626] group-hover:to-[#F97316]">
                                    <Image src={values.icon} width={78} height={65} alt={values.alt || "Values"} className="max-w-[19px] xl:max-w-[21px] 2xl:max-w-[25px] 3xl:max-w-[34px] " />
                                </div>
                            )}
                            <div className="w-full max-w-[95%]">
                                {values?.title && (
                                    <div className="text-[13px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[25px]   text-white font-bold mb-[15px] md:mb-[20px] xl:mb-[25px] 2xl:mb-[35px] 3xl:mb-[40px]">
                                        {values.title}
                                    </div>
                                )}
                                <div className="flex flex-col gap-[10px] xl:gap-[12px]">
                                {valueItems.map((item, idx) => {
                                    const open = openValue === idx;
                                    const hasText = typeof item.description === "string" && item.description.trim();
                                    return (
                                        <div
                                            key={idx}
                                            onMouseEnter={() => {
                                                if (hasText && window.matchMedia("(hover: hover)").matches) setOpenValue(idx);
                                            }}
                                            className={`group/acc rounded-[10px] border backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 ${
                                                open
                                                    ? "border-[#F97316]/70 bg-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                                                    : "border-white/20 bg-white/5 hover:border-white/50 hover:bg-white/10"
                                            }`}
                                        >
                                            {/* the bold title is the accordion button */}
                                            <button
                                                type="button"
                                                id={`core-value-btn-${idx}`}
                                                aria-expanded={open}
                                                aria-controls={`core-value-panel-${idx}`}
                                                disabled={!hasText}
                                                onClick={() => setOpenValue(open ? -1 : idx)}
                                                className="flex w-full items-center gap-[12px] 2xl:gap-[16px] p-[12px_14px] xl:p-[14px_18px] 2xl:p-[16px_22px] text-left cursor-pointer rounded-[10px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-default"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className={`flex h-[28px] w-[28px] xl:h-[34px] xl:w-[34px] 2xl:h-[38px] 2xl:w-[38px] shrink-0 items-center justify-center rounded-full border text-[11px] xl:text-[13px] 2xl:text-[14px] font-bold transition-all duration-300 ${
                                                        open
                                                            ? "border-transparent bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white"
                                                            : "border-white/40 text-white/80 group-hover/acc:border-white"
                                                    }`}
                                                >
                                                    {String(idx + 1).padStart(2, "0")}
                                                </span>
                                                <span className={`flex-1 text-[14px] xl:text-[17px] 2xl:text-[21px] 3xl:text-[26px] leading-[1.2] font-bold transition-colors duration-300 ${open ? "text-[#F97316]" : "text-white"}`}>
                                                    {item.title}
                                                </span>
                                                {hasText && (
                                                    <span
                                                        aria-hidden="true"
                                                        className={`flex h-[24px] w-[24px] xl:h-[28px] xl:w-[28px] shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                                                            open ? "rotate-180 border-[#F97316] bg-[#F97316]/20" : "border-white/30"
                                                        }`}
                                                    >
                                                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                                                            <path d="M2 4.5L7 9.5L12 4.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                )}
                                            </button>
                                            {hasText && (
                                                <div
                                                    id={`core-value-panel-${idx}`}
                                                    role="region"
                                                    aria-labelledby={`core-value-btn-${idx}`}
                                                    inert={!open}
                                                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                                                >
                                                    <div className="overflow-hidden">
                                                        <div className="mx-[14px] xl:mx-[18px] 2xl:mx-[22px] border-t border-white/15 pt-[10px] xl:pt-[12px] pb-[14px] xl:pb-[16px] [&_p]:text-white/90 [&_p]:leading-[1.5]">
                                                            {item.description.startsWith("<") ? (
                                                                <div dangerouslySetInnerHTML={{ __html: item.description }} />
                                                            ) : (
                                                                <p>{item.description}</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </section >
    )
}
