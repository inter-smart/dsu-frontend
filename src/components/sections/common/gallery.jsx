"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// Common flexible section: a titled gallery split into tabs; each tab shows its own images.
export default function CommonTabGallery({ data }) {
    const ref = useRef(null);
    const tabs = data?.tabs || [];
    // -1 = the "All" tab (images from every tab); it is the default
    const [active, setActive] = useState(-1);
    const current =
        active === -1 || !tabs[active]
            ? { id: "all", title: data?.title || "Gallery", images: tabs.flatMap((tab) => tab.images) }
            : tabs[active];
    const buttons = [{ id: "all", title: "All", idx: -1 }, ...tabs.map((tab, idx) => ({ ...tab, idx }))];

    // Bind Fancybox only inside this section; each tab is its own lightbox group
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        Fancybox.bind(el, "[data-fancybox]", { Hash: false });
        return () => Fancybox.unbind(el);
    }, []);

    if (!tabs.length) return null;

    return (
        <section ref={ref} className="w-full h-auto py-10 sm:py-15 lg:py-20 2xl:py-25 3xl:py-30 block">
            <div className="container">
                <div className="w-full h-auto mb-6.25 lg:mb-7.5 2xl:mb-10 flex flex-wrap items-start justify-between gap-5">
                    {data?.title && <h2 className="title_1 dark:text-white">{data.title}</h2>}
                    {tabs.length > 1 && (
                        <div className="flex flex-wrap gap-2 xl:gap-2.5" role="tablist">
                            {buttons.map(({ id, title, idx }) => (
                                <button
                                    key={id ?? idx}
                                    type="button"
                                    role="tab"
                                    aria-selected={idx === active}
                                    onClick={() => setActive(idx)}
                                    className={`px-4 py-2 xl:px-5 xl:py-2.5 rounded-[10px] border text-sm xl:text-base font-medium leading-normal transition-colors duration-300 ${
                                        idx === active
                                            ? "bg-linear-to-r from-(--basecolor) to-(--basecolor2) border-(--basecolor)/20 text-white"
                                            : "bg-white dark:bg-white/5 border-(--basecolor)/20 text-[#212121] dark:text-white hover:opacity-70"
                                    }`}
                                >
                                    {title}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="w-full h-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-3.75 sm:gap-[15px] lg:gap-[20px] 2xl:gap-[25px] 3xl:gap-[30px]">
                    {current.images.map((image, idx) => (
                        <a
                            key={`${image.id}-${idx}`}
                            href={image.url}
                            data-fancybox={`common-gallery-${current.id ?? active}`}
                            data-caption={image.alt}
                            className="group block w-full aspect-562/370 overflow-hidden rounded-md 2xl:rounded-[10px] relative cursor-zoom-in"
                        >
                            <Image
                                src={image.url}
                                width={562}
                                height={370}
                                alt={image.alt || current.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                            />
                            <span className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 pointer-events-none" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
