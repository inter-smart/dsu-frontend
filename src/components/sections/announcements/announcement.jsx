"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { getAnnouncementsPaged } from "@/lib/api";
import { safeHref } from "@/lib/utils";

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

// "15 Dec 2026" -> { day: "15", monthYear: "Dec 2026" }; free text such as "15th" stays whole in `day`.
const splitDate = (label) => {
  const m = /^(\d{1,2}(?:\s*-\s*\d{1,2})?)\s+([A-Za-z]+\s+\d{4})$/.exec(label || "");
  return m ? { day: m[1].replace(/\s/g, ""), monthYear: m[2] } : { day: label, monthYear: "" };
};

function AnnouncementCard({ item }) {
  const { label, location } = getEventMeta(item);
  const { day, monthYear } = splitDate(label);
  const imageUrl = item?.announcement_image?.url;
  const imageAlt = item?.announcement_image?.alternativeText || item?.title || "Announcement";

  return (
    <Link
      href={safeHref(item?.externalLink || item?.link, "/announcements")}
      {...(item?.externalLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group relative w-full h-[110px] sm:h-[131px] 3xl:h-[160px] flex items-stretch transition-transform duration-500 hover:-translate-y-0.5"
    >
      <div className="relative z-10 w-[80px] sm:w-[105px] 3xl:w-[130px] shrink-0 rounded-[5px] overflow-hidden bg-gray-200 dark:bg-white/10">
        {imageUrl && (
          <Image
            src={imageUrl}
            width={210}
            height={262}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
      </div>
      <div className="min-w-0 -ml-[5px] pl-[13px] sm:pl-[23px] pr-2.5 sm:pr-[15px] flex-1 flex items-center gap-2.5 sm:gap-4 rounded-[5px] bg-linear-to-b from-[#FFF8EE] to-[#FFF3E0] dark:from-white/5 dark:to-white/5 transition-shadow duration-500 group-hover:shadow-[0_12px_28px_rgba(220,38,38,0.18)]">
        <div className="min-w-0 flex-1">
          {EVENT_NAME && (
            <div className="text-xs sm:text-sm 3xl:text-base leading-normal font-normal uppercase text-[#565656] dark:text-white/70 mb-1 line-clamp-1">
              {EVENT_NAME}
            </div>
          )}
          <h3 className="text-sm sm:text-base xl:text-lg 2xl:text-xl 3xl:text-[23px] leading-[1.4] font-bold text-[#212121] dark:text-white line-clamp-2">
            {item?.title}
          </h3>
          {location && (
            <div className="mt-1 hidden sm:flex items-center gap-1.5 text-xs 3xl:text-sm text-[#4A5565] dark:text-gray-300">
              <MapPin aria-hidden="true" className="size-3.5 shrink-0 text-(--basecolor)" />
              <span className="line-clamp-1">{location}</span>
            </div>
          )}
        </div>
        {day && (
          <div className="w-[62px] sm:w-[85px] 3xl:w-[102px] aspect-102/101 shrink-0 rounded-[5px] bg-white dark:bg-[#2a2a2a] flex items-center justify-center">
            <div className="text-center uppercase font-bold leading-[1.1] bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent">
              <span className="block text-lg sm:text-2xl 3xl:text-[28px]">{day}</span>
              {monthYear && <span className="block text-[10px] sm:text-xs 3xl:text-base">{monthYear}</span>}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

export default function Announcement({ data }) {
  const [items, setItems] = useState(data?.announcements ?? []);
  const [pagination, setPagination] = useState(data?.pagination ?? null);
  const [loading, setLoading] = useState(false);

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

  return (
    <section className="w-full h-auto py-10 sm:py-15 lg:py-20 2xl:py-25 3xl:py-30 block">
      <div className="container">
        <div className="w-full h-auto mb-6.25 lg:mb-7.5 2xl:mb-10 3xl:mb-15">
          <Heading as="h2" className="mb-0">{data?.title}</Heading>
        </div>

        <div className="w-full h-auto grid gap-3 sm:gap-4 lg:gap-5 lg:grid-cols-2">
          {items.map((item) => (
            <AnnouncementCard key={item?.documentId ?? item?.id} item={item} />
          ))}
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