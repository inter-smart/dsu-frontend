"use client";

import { useEffect, useRef } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import SectionHeader, { toneClass } from "./ServiceShared";
import MediaFrame from "./MediaFrame";

export default function ServiceFeature({ data }) {
    const { id, number, tone = "white", eyebrow, title, description, listTitle, items, media } = data;
    const containerRef = useRef(null);

    // Binds every lightbox link (video or zoomable image) inside this section
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        Fancybox.bind(el, "[data-fancybox]", { Hash: false });
        return () => Fancybox.unbind(el);
    }, []);

    return (
        <section id={`service-${number}`} className={`w-full py-10 lg:py-12 2xl:py-[56px] ${toneClass[tone]}`}>
            <div className="container" ref={containerRef}>
                <SectionHeader number={number} eyebrow={eyebrow} title={title} description={description} />

                <div className="mt-6 grid items-start gap-6 lg:grid-cols-[1fr_47%] lg:gap-10 2xl:mt-[24px] 2xl:gap-[60px]">
                    <div>
                        <h3 className="text-[18px] font-medium tracking-[-0.02em] text-[#111] lg:text-[22px] 2xl:text-[24px]">
                            {listTitle}
                        </h3>
                        <ul className="mt-3 space-y-3 2xl:mt-[18px] 2xl:space-y-[22px]">
                            {items.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3 text-[14px] leading-[1.5] text-[#444] lg:text-[16px] 2xl:max-w-[640px] 2xl:text-[18px]"
                                >
                                    <span className="mt-[0.65em] size-[4px] shrink-0 rounded-full bg-[#555]" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {media && (

                        <MediaFrame
                            media={media}
                            group={`feature-${id}`}
                            sizes="(max-width: 1023px) 100vw, 47vw"
                            className="aspect-[813/302] w-full"
                        />
                    )}
                </div>
            </div>
        </section>
    );
}