"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function PlacementActivities({ data }) {
    const [activeVideoModal, setActiveVideoModal] = useState(null);

    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setActiveVideoModal(null);
        };
        if (activeVideoModal) {
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeVideoModal]);

    return (
        <section className="relative py-[40px] xl:py-[60px] 2xl:py-[90px] 3xl:py-[110px] bg-[linear-gradient(135deg,#EFF6FF_0%,#F9FAFB_100%)]">
            <div className="container">
                <div className="text-center">
                    <div className="cmn_Title">{data.heading}</div>
                    <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px] mb-[20px]">
                        <BlocksRenderer content={data.description} />
                    </div>

                    <div className="flex flex-wrap -m-[5px] xl:-m-[10px]">
                        {data?.gallery.map((item) => (
                            <div
                                key={item.id}
                                className="w-1/2 sm:w-1/3 xl:w-1/4 p-[5px] xl:p-[10px]"
                            >
                                <div
                                    onClick={() => {
                                        if (item.type === "video" && item.media?.url) {
                                            setActiveVideoModal(item.media);
                                        }
                                    }}
                                    className={`group relative w-full aspect-[4/3] rounded-[8px] sm:rounded-[10px] overflow-hidden bg-neutral-100 dark:bg-neutral-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ${
                                        item.type === "video" ? "cursor-pointer" : ""
                                    }`}
                                >
                                    <Image
                                        src={item.type === "video" ? item.media.thumbnail : item.media.url}
                                        alt={item.media.alternativeText}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

                                    {item.label && (
                                        <div className="absolute bottom-0 left-0 p-[10px_8px] md:p-[12px] xl:p-[15px] text-white cmn_Txt font-medium text-left">
                                            {item.label}
                                        </div>
                                    )}

                                    {item.type === "video" && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-6 md:w-10 h-6 md:h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21.5 0C9.62588 0 0 9.62588 0 21.5C0 33.3741 9.62588 43 21.5 43C33.3741 43 43 33.3741 43 21.5C42.9874 9.63119 33.3689 0.0126877 21.5 0ZM30.5545 22.185C30.4057 22.4836 30.1637 22.7257 29.865 22.8745V22.8821L17.5793 29.025C16.8206 29.4041 15.8983 29.0965 15.5191 28.3377C15.4113 28.1221 15.3558 27.884 15.3571 27.6429V15.3572C15.3567 14.509 16.0439 13.8212 16.8921 13.8207C17.1307 13.8206 17.366 13.8761 17.5793 13.9827L29.865 20.1256C30.6241 20.5039 30.9329 21.4259 30.5545 22.185Z" fill="white" fillOpacity="0.8" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {activeVideoModal && (
                <div
                    className="fixed inset-0 z-[999999] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setActiveVideoModal(null)}
                >
                    <div
                        className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setActiveVideoModal(null)}
                            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all cursor-pointer"
                            aria-label="Close modal"
                        >
                            ✕
                        </button>
                        <div className="aspect-[12/12] w-full">
                            <video
                                src={activeVideoModal.url}
                                controls
                                autoPlay
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}