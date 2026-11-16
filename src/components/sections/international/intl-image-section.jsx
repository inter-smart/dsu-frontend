"use client";

import { useEffect, useRef } from "react";
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
            className={size === "small" ? "pb-0 pt-[15px] xl:pt-[22px] 3xl:pt-[40px]" : "py-[15px] xl:py-[22px] 2xl:py-[28px] 3xl:py-[40px]"}
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
                    className="block w-fit cursor-zoom-in"
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={image.url}
                        alt={image.alt || ""}
                        loading="lazy"
                        className={`h-auto w-full ${SIZES[size] || SIZES.large}`}
                    />
                </a>
            </div>
        </section>
    );
}