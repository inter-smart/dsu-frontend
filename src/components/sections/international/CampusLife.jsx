"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Grip } from "lucide-react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { NumberBadge, Eyebrow, bodyClass } from "./ServiceShared";
import MediaFrame from "./MediaFrame";

const spanClass = { 1: "", 2: "md:col-span-2" };

// Bottom gradient + icon + label, passed into MediaFrame as overlay
function TileOverlay({ card }) {
    return (
        <>
            <span aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
            <span className="absolute inset-x-0 bottom-0 flex items-center gap-3 px-4 pb-4 text-[18px] font-medium text-white lg:text-[20px] 2xl:px-[16px] 2xl:pb-[20px] 2xl:text-[24px]">
                {card.icon && (
                    <Image src={card.icon} alt="" width={28} height={28} className="size-6 shrink-0 object-contain 2xl:size-7" />
                )}
                {card.label}
            </span>
        </>
    );
}

function MediaTile({ card }) {
    return (
        <MediaFrame
            media={card.media}
            group="campus-life"
            sizes="(max-width: 767px) 100vw, 50vw"
            className="h-full min-h-[260px]"
        >
            <TileOverlay card={card} />
        </MediaFrame>
    );
}

function StatsTile({ card }) {
    return (
        <div className="flex h-full flex-col justify-center rounded-[10px] bg-linear-to-br from-[#A82A2A] via-[#CC4A2E] to-[#F98B3D] p-6 text-white 2xl:px-[36px] 2xl:py-[32px]">
            <p className="max-w-[330px] text-[14px] leading-[1.6] lg:text-[16px] 2xl:text-[18px] 2xl:leading-[29px] text-white">{card.text}</p>

            <div className="mt-6 grid grid-cols-2 2xl:mt-[30px]">
                {card.stats.map((stat, i) => (
                    <div
                        key={stat.label}
                        className={`border-white/30 ${i % 2 === 0 ? "border-r pr-3" : "pl-4 2xl:pl-[28px]"} ${i < 2 ? "border-b pb-5 2xl:pb-[26px]" : "pt-5 2xl:pt-[26px]"
                            }`}
                    >
                        <p className="text-[28px] font-medium leading-none lg:text-[34px] 2xl:text-[42px] text-white">{stat.value}</p>
                        <p className="mt-2 text-[14px] lg:text-[16px] 2xl:text-[20px] text-white">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function IntroTile({ card, data }) {
    const { number, eyebrow, title, description, button } = data;

    return (
        <div className="grid h-full items-center gap-5 rounded-[10px] bg-[#F2F6FC] p-4 sm:grid-cols-[46%_1fr] lg:p-5 2xl:gap-[38px]">
            <MediaFrame
                media={card.media}
                group="campus-life"
                sizes="(max-width: 767px) 100vw, 25vw"
                className="aspect-[398/368] w-full"
            >
                <TileOverlay card={card} />
            </MediaFrame>

            <div>
                <div className="flex items-center gap-4 2xl:gap-[25px]">
                    <NumberBadge number={number} />
                    <div className="min-w-0">
                        <Eyebrow>{eyebrow}</Eyebrow>
                        <h2 className="mt-0.5 text-[22px] font-semibold leading-[1.45] tracking-[-0.03em] text-[#1a1a1a] lg:text-[26px] 2xl:text-[30px]">
                            {title}
                        </h2>
                    </div>
                </div>

                <p className={`mt-4 2xl:mt-[24px] 2xl:max-w-[330px] 2xl:leading-[25px] ${bodyClass}`}>{description}</p>

                <Link
                    href={button.href}
                    className="mt-5 inline-flex h-[44px] items-center gap-4 rounded-[3px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) px-5 text-[15px] font-medium text-white no-underline! transition-opacity duration-300 hover:opacity-90 2xl:mt-[30px] 2xl:h-[50px] 2xl:text-[18px]"
                >
                    {button.label}
                    <div className="size-[16px] flex items-center justify-center">
                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7.68152" cy="1.37879" r="1.37879" fill="white" />
                            <circle cx="7.68152" cy="6.49988" r="1.37879" fill="white" />
                            <circle cx="7.68152" cy="11.621" r="1.37879" fill="white" />
                            <circle cx="13.9852" cy="6.49988" r="1.37879" fill="white" />
                            <circle cx="1.37879" cy="6.49988" r="1.37879" fill="white" />
                        </svg>

                    </div>
                </Link>
            </div>
        </div>
    );
}

export default function CampusLife({ data }) {
    const { cards } = data;
    const containerRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        Fancybox.bind(el, "[data-fancybox]", { Hash: false });
        return () => Fancybox.unbind(el);
    }, []);

    return (
        <section id="campus-life" className="w-full bg-white py-10 lg:py-12 2xl:py-[74px]">
            <div className="container" ref={containerRef}>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[repeat(2,minmax(300px,auto))] 2xl:grid-rows-[404px_425px] 2xl:gap-[19px]">
                    {cards.map((card) => (
                        <div key={card.id} className={spanClass[card.span]}>
                            {card.layout === "intro" && <IntroTile card={card} data={data} />}
                            {card.layout === "media" && <MediaTile card={card} />}
                            {card.layout === "stats" && <StatsTile card={card} />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}