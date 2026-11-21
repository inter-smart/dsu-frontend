"use client";

import { useEffect, useRef } from "react";
import { Expand } from "lucide-react";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// Image width and shape per size. Change the values here.
// CHANGED: large/medium are also capped at 75% of the screen height (w-auto keeps the ratio)
const SIZES = {
    small: "max-w-[220px] xl:max-w-[280px] rounded-full aspect-square object-cover object-top",
    medium: "max-w-[480px] max-h-[65vh] w-auto rounded-[10px]",
    large: "max-w-[900px] max-h-[65vh] w-auto rounded-[10px]",
};

// International flexible section: one image that opens in a Fancybox lightbox on click.
export default function IntlImageSection({ data }) {
    const { image, size } = data || {};
    const ref = useRef(null);

    // Bind Fancybox only inside this section, so images in other sections don't become one gallery
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        Fancybox.bind(el, "[data-fancybox]", {
            // CHANGED: open the image fitted to the screen (not at its natural size).
            // The user can still click / pinch to zoom in.
            Images: {
                initialSize: "fit",
                Panzoom: { maxScale: 2 },
            },
        });
        return () => Fancybox.unbind(el);
    }, []);

    if (!image?.url) return null;

    return (
        <section
            ref={ref}
            className={size === "small" ? "pb-0 py-[40px_15px] xl:py-[50px_22px] 3xl:py-[60px_40px]" : "py-[30px_15px] xl:py-[30px_22px] 2xl:py-[40px_28px] 3xl:py-[60px_40px]"}
        >
            {/* ADDED: keeps the popup image inside the screen even if global img styles (Tailwind) interfere */}
            <style>{`
                .fancybox__container .fancybox__slide { padding: 24px; }
                .fancybox__container .fancybox__content > img.fancybox__image {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }
            `}</style>
            <div className="container">
                <a
                    href={image.url}
                    data-fancybox="intl-image"
                    data-caption={image.alt || ""}
                    aria-label={image.alt ? `Enlarge image: ${image.alt}` : "Enlarge image"}
                    className={`group relative block w-fit cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--basecolor) ${
                        size === "small" ? "mx-auto rounded-full bg-gradient-to-br from-[#DC2626] to-[#F97316] p-[5px] shadow-[0_12px_30px_rgba(220,38,38,0.25)]" : "mb-[10px] rounded-[14px] xl:mb-[16px] xl:rounded-[18px]"
                    }`}
                >
                    {/* brand backdrop offset behind framed images */}
                    {size !== "small" && <span aria-hidden="true" className="absolute inset-0 translate-x-[10px] translate-y-[10px] rounded-[inherit] bg-gradient-to-br from-[#FFE4CC] to-[#FFF1E0] transition-transform duration-500 motion-safe:group-hover:translate-x-[14px] motion-safe:group-hover:translate-y-[14px] dark:from-white/10 dark:to-white/5 xl:translate-x-[16px] xl:translate-y-[16px]" />}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={image.url}
                        alt={image.alt || ""}
                        loading="lazy"
                        className={`relative h-auto w-full ${size === "small" ? "border-[4px] border-white dark:border-[#18191B]" : "border border-[#F97316]/20 shadow-[0_10px_30px_rgba(0,0,0,0.08)] xl:!rounded-[18px]"} ${SIZES[size] || SIZES.large}`}
                    />
                    <span aria-hidden="true" className={`absolute flex size-[38px] items-center justify-center rounded-full bg-gradient-to-r from-(--basecolor) to-(--basecolor2) text-white opacity-0 shadow-[0_6px_16px_rgba(220,38,38,0.35)] transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 xl:size-[44px] ${size === "small" ? "bottom-[8%] right-[8%]" : "bottom-[14px] right-[14px] xl:bottom-[20px] xl:right-[20px]"}`}>
                        <Expand className="size-[17px]" />
                    </span>
                </a>
            </div>
        </section>
    );
}