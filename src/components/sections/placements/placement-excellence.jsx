"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

/* Desktop layout by card position (24-column grid):
   0-2 = top row, 3 = tall, 4 = wide, 5-6 = right stack */
const layout = [
  { col: 5, row: 1 },
  { col: 5, row: 1 },
  { col: 6, row: 1 },
  { col: 8, row: 2 },
  { col: 10, row: 2 },
  { col: 6, row: 1 },
  { col: 6, row: 1 },
];

const arrowBtn =
  "w-[32px] h-[32px] rounded-full bg-white dark:bg-[#18191B] border border-[#F97316]/40 text-[#F97316] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-[#DC2626] hover:to-[#F97316] hover:text-white hover:border-transparent disabled:opacity-30 disabled:cursor-not-allowed";

function Card({ item }) {
  return (
    <div className="group relative w-full h-full overflow-hidden rounded-[6px] xl:rounded-[8px] bg-neutral-200 dark:bg-neutral-800">
      <Image
        src={item.media.url}
        alt={item.media.alternativeText || item.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full p-[10px] xl:p-[14px] 2xl:p-[15px] 3xl:p-[18px] text-white text-left">
        <div className="text_1 font-medium  text-white leading-[1.3]">
          {item.title}
        </div>
        <div className="text_1 text-white font-medium mt-[3px]  ">
          {item.subtitle}
        </div>
      </div>
    </div>
  );
}



export default function Achievements({ data }) {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  if (!data) return null;
  const items = data.achievements || [];

  const syncState = (s) => {
    if (!s || s.destroyed) return;
    setIsBeginning(s.isBeginning);
    setIsEnd(s.isEnd);
  };

  return (
    <section className="relative py-[30px] xl:py-[45px] 2xl:py-[60px] 3xl:py-[75px] dark:bg-[#101010]">
      <div className="container">
        {/* Desktop bento grid */}
        <div className="hidden lg:grid grid-cols-[repeat(24,minmax(0,1fr))] grid-rows-[auto_repeat(2,minmax(0,1fr))] gap-[10px] xl:gap-[12px] 2xl:gap-[20px]">
          <div style={{ gridColumn: "span 8 / span 8" }} className="pr-[10px] self-start">
            {data.eyebrow && (
              <div className="flex items-center gap-[8px] mb-[10px]">
                <span className="w-[18px] xl:w-[22px] h-[2px] bg-[#DC2626]" />
                <span className="text-[12px] xl:text-[14px] 2xl:text-[15px] uppercase bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent">
                  {data.eyebrow}
                </span>
              </div>
            )}
            <h2 className="cmn_Title dark:text-white mb-[10px]">{data.heading}</h2>
            {data.description?.length > 0 && (
              <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6]">
                <BlocksRenderer content={data.description} />
              </div>
            )}
          </div>

          {items.map((item, i) => {
            const pos = layout[i] || { col: 6, row: 1 };
            return (
              <div
                key={item.id}
                style={{
                  gridColumn: `span ${pos.col} / span ${pos.col}`,
                  gridRow: `span ${pos.row} / span ${pos.row}`,
                }}
                className={
                  pos.row === 2
                    ? "min-h-[230px] xl:min-h-[262px] 2xl:min-h-[312px] 3xl:min-h-[392px]"
                    : "min-h-[110px] xl:min-h-[125px] 2xl:min-h-[150px] 3xl:min-h-[190px]"
                }
              >
                <Card item={item} />
              </div>
            );
          })}
        </div>

        {/* Mobile / tablet: Swiper slider */}
        <div className="lg:hidden">
          <div className="mb-[20px]">
            {data.eyebrow && (
              <div className="flex items-center gap-[8px] mb-[10px]">
                <span className="w-[18px] xl:w-[22px] h-[2px] bg-[#DC2626]" />
                <span className="text-[12px] xl:text-[14px] 2xl:text-[15px] uppercase bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent">
                  {data.eyebrow}
                </span>
              </div>
            )}
            <h2 className="cmn_Title dark:text-white mb-[10px]">{data.heading}</h2>
            {data.description?.length > 0 && (
              <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6]">
                <BlocksRenderer content={data.description} />
              </div>
            )}
          </div>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={1.15}
            spaceBetween={12}
            speed={500}
            grabCursor
            watchOverflow
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              480: { slidesPerView: 1.5, spaceBetween: 12 },
              640: { slidesPerView: 2.2, spaceBetween: 14 },
            }}
            onSwiper={(s) => {
              swiperRef.current = s;
              syncState(s);
            }}
            onSlideChange={syncState}
            onReachBeginning={syncState}
            onReachEnd={syncState}
            className="w-full"
          >
            {items.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto">
                <div className="h-[240px] sm:h-[260px]">
                  <Card item={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrows */}
          <div className="flex items-center justify-end gap-[8px] mt-[12px]">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
              className={arrowBtn}
            >
              <svg className="w-[13px] h-[13px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
              className={arrowBtn}
            >
              <svg className="w-[13px] h-[13px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}