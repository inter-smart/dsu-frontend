"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { getAnnouncementsPaged } from "@/lib/api";

const IST = "Asia/Kolkata";

// Static event name shown on every announcement card.
// Set to "" or null to hide it.
const EVENT_NAME = "Your Event Name";

// Event date / location of an announcement. Adjust the field names here if your CMS uses others.
// - A real date (2026-12-15 ...) is shown as "15 Dec 2026".
// - Text such as "15th" is shown exactly as it is.
// - No event date at all: falls back to publishedAt.
const getEventMeta = (item) => {
  const raw = item?.event_date ?? item?.eventDate ?? item?.date ?? item?.startDate ?? item?.publishedAt;
  const location = item?.location ?? item?.venue ?? null;
  if (!raw) return { label: null, location };

  const str = String(raw).trim();
  const isRealDate = /^\d{4}-\d{2}-\d{2}/.test(str) || /^\d{1,2}[/-]\d{1,2}[/-]\d{2,4}$/.test(str);
  if (isRealDate) {
    const d = new Date(str);
    if (!Number.isNaN(d.getTime())) {
      return {
        label: d.toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
          timeZone: IST,
        }),
        location,
      };
    }
  }
  return { label: str, location };
};

function AnnouncementCard({ item }) {
  const { label, location } = getEventMeta(item);
  const imageUrl = item?.announcement_image?.url;
  const imageAlt = item?.announcement_image?.alternativeText || item?.title || "Announcement";

  return (
    <Link
      href={item?.link || "/announcements"}
      className="group relative w-full h-full flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.07)] ring-1 ring-black/5 dark:ring-white/10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.16)]"
    >
      {/* Poster: blurred copy fills the frame, the sharp poster sits on top in full (never cropped) */}
      <div className="relative w-full aspect-4/4 overflow-hidden bg-gray-200 dark:bg-white/10 flex items-center justify-center">
        {imageUrl && (
          <>
            {/* Background: blurred, zoomed copy */}
            <Image
              src={imageUrl}
              width={200}
              height={200}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl opacity-70"
            />
            {/* Foreground: sharp poster */}
            <div className="p-3">
              <Image
                src={imageUrl}
                width={600}
                height={750}
                alt={imageAlt}
                className="relative z-1 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col px-5 pt-4 pb-4 2xl:px-6 3xl:px-7">
        {/* Static event name */}
        {EVENT_NAME && (
          <span className="mb-2 inline-flex w-fit items-center rounded-full bg-(--basecolor)/10 px-3 py-1 text-[11px] 2xl:text-[12px] font-semibold uppercase mb-3 tracking-[0.08em] text-black">
            {EVENT_NAME}
          </span>
        )}

        {/* Date above the title */}
        {label && (
          <div className="my-2.5 flex items-center gap-2.5">
            <span className="size-7 3xl:size-9 shrink-0 rounded-lg bg-linear-to-br from-(--basecolor) to-(--basecolor2) text-white flex items-center justify-center shadow-[0_4px_10px_rgba(220,38,38,0.25)]">
              <CalendarDays aria-hidden="true" className="size-3.5 3xl:size-4.5" />
            </span>
            <span className="text-xs 2xl:text-[13px] 3xl:text-base font-bold uppercase tracking-[0.08em] text-black">
              {label}
            </span>
            <span
              aria-hidden="true"
              className="h-px flex-1 bg-linear-to-r from-(--basecolor)/40 to-transparent"
            />
          </div>
        )}

        <h3 className="text-base text-[20px] mt-3  leading-tight font-bold text-[#212121] dark:text-white line-clamp-2 transition-colors duration-500 ">
          {item?.title}
        </h3>

        {location && (
          <div className="mt-2 inline-flex items-start gap-2 text-[13px] 2xl:text-sm 3xl:text-base leading-snug font-medium text-[#4A5565] dark:text-gray-300">
            <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-(--basecolor)" />
            <span className="line-clamp-2">{location}</span>
          </div>
        )}

        <div className="mt-auto pt-3">
          <div className="flex items-center justify-between border-t border-black/10 dark:border-white/10 pt-3">
            <span className="text-sm 3xl:text-base leading-normal font-bold uppercase tracking-wide bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent">
              Read More
            </span>
            <span className="size-9 3xl:size-11 shrink-0 rounded-full bg-(--basecolor)/10 text-(--basecolor) flex items-center justify-center transition-all duration-500 group-hover:bg-linear-to-r group-hover:from-(--basecolor) group-hover:to-(--basecolor2) group-hover:text-white">
              <ArrowRight aria-hidden="true" className="size-4 -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
            </span>
          </div>
        </div>
      </div>

      {/* Gradient line that grows along the bottom on hover */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-(--basecolor) to-(--basecolor2) transition-all duration-500 group-hover:w-full"
      />
    </Link>
  );
}

export default function Announcement({ data }) {
  const [items, setItems] = useState(data?.announcements ?? []);
  const [pagination, setPagination] = useState(data?.pagination ?? null);
  const [loading, setLoading] = useState(false);

  // mobile slider controls
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [paginationEl, setPaginationEl] = useState(null);

  const hasMore = pagination && pagination.page < pagination.pageCount;

  const loadMore = async () => {
    if (!hasMore || loading) return;
    setLoading(true);
    try {
      const res = await getAnnouncementsPaged(
        pagination.page + 1,
        pagination.pageSize,
      );
      if (res?.data && res?.pagination) {
        setItems((prev) => {
          const seen = new Set(prev.map((item) => item?.documentId));
          return [
            ...prev,
            ...res.data.filter((item) => !seen.has(item?.documentId)),
          ];
        });
        setPagination(res.pagination);
      }
    } finally {
      setLoading(false);
    }
  };

  const sliderBtnClass =
    "size-10 shrink-0 rounded-full border border-(--basecolor)/30 bg-white dark:bg-transparent text-(--basecolor) flex items-center justify-center transition-colors cursor-pointer hover:bg-(--basecolor) hover:text-white disabled:opacity-40 disabled:pointer-events-none";

  return (
    <section className="w-full h-auto py-10 sm:py-15 lg:py-20 2xl:py-25 3xl:py-30 block">
      <div className="container">
        <div className="w-full h-auto mb-6.25 lg:mb-7.5 2xl:mb-10 3xl:mb-15">
          <Heading as="h2" className="mb-0">{data?.title}</Heading>
        </div>

        {/* Desktop / tablet: grid (2 / 3 / 4 per row) */}
        <div className="hidden md:grid w-full h-auto gap-5 lg:gap-6 2xl:gap-7.5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {items.map((item) => (
            <div key={item?.documentId ?? item?.id} className="w-full h-auto">
              <AnnouncementCard item={item} />
            </div>
          ))}
        </div>

        {/* Mobile: Swiper slider */}
        <div className="md:hidden w-full h-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1.12}
            spaceBetween={14}
            navigation={{ prevEl, nextEl }}
            pagination={{ el: paginationEl, clickable: true, dynamicBullets: true }}
            className="w-full !overflow-hidden !py-2"
          >
            {items.map((item) => (
              <SwiperSlide key={item?.documentId ?? item?.id} className="!h-auto">
                <AnnouncementCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-5 flex items-center justify-center gap-4">
            <button ref={setPrevEl} type="button" aria-label="Previous announcement" className={sliderBtnClass}>
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>
            <div
              ref={setPaginationEl}
              className="!static !w-auto flex items-center justify-center gap-1.5 [&_.swiper-pagination-bullet]:!m-0 [&_.swiper-pagination-bullet]:bg-(--basecolor)/30 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:!bg-(--basecolor)"
            />
            <button ref={setNextEl} type="button" aria-label="Next announcement" className={sliderBtnClass}>
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>

        {hasMore && (
          <div className="mt-10 sm:mt-15 lg:mt-17.5 2xl:mt-22.5 3xl:mt-27.5 flex items-center justify-center">
            <button
              type="button"
              onClick={loadMore}
              disabled={loading}
              className="group/button inline-flex shrink-0 items-center justify-center rounded-sm border bg-clip-padding outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 text-[12px] 2xl:text-[14.4px] 3xl:text-[18px] leading-none font-bold whitespace-nowrap text-white bg-linear-to-r from-(--basecolor) to-(--basecolor2) text-white border-transparent hover:bg-primary/80 h-[34px] 2xl:h-[40px] 3xl:h-[50px] gap-2 2xl:gap-4 3xl:gap-5 px-3 2xl:px-4 3xl:px-5 transition-colors duration-300 ease-in-out hover:from-(--basecolor2) hover:to-(--basecolor)"
            >
              {loading ? "Loading..." : "Load More"}
              <Image
                src="/images/icon-btn.svg"
                alt=""
                width={15}
                height={15}
                className="size-3.75"
                data-icon="inline-end"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}