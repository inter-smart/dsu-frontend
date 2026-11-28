"use client";
import Link from "next/link";
import Image from "@/components/ui/safe-image";
import { safeHref } from "@/lib/utils";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { withLineBreaks } from "@/lib/line-breaks";

// Static upcoming events. Edit the values here.
const UPCOMING_EVENTS = [
  {
    id: 1,
    title: "Fireside Chat with Mr. M. R. Rangaswami, Founder, Indiaspora",
    day: "30",
    monthYear: "Nov 2026",
    category: "Seminar / Expert Talk",
    image: "/images/events/upcoming-1.png",
    link: "/news-events",
  },
  {
    id: 2,
    title: "E-SPARK 2026 - Inter-Collegiate Startup Idea Competition",
    day: "10",
    monthYear: "Dec 2026",
    category: "Competition",
    image: "/images/events/upcoming-2.png",
    link: "/news-events",
  },
  {
    id: 3,
    title: "Second International Conference on Augmented Reality, Intelligent Systems & Industrial Automation",
    day: "18-19",
    monthYear: "Dec 2026",
    category: "Conference / Symposium",
    image: "/images/events/upcoming-3.png",
    link: "/news-events",
  },
];

// Maps an announcement from the API to the upcoming-event tile shape.
const toTile = (item) => ({
  id: item?.id,
  title: item?.title || "",
  day: String(item?.date || "").replace(/(st|nd|rd|th)$/i, ""),
  monthYear: item?.year || "",
  category: item?.category || "Announcement",
  image: item?.announcement_image?.url || "/images/events/upcoming-1.png",
  link: item?.externalLink || item?.link,
});

export default function Events({ data }) {
  const upcomingEvents = (data?.announcements_list || []).map(toTile);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [announcementsEmblaRef, announcementsEmblaApi] = useEmblaCarousel({
    axis: "y",
    containScroll: "trimSnaps",
    skipSnaps: false,
    dragFree: false,
    loop: false,
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = useCallback((api) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!announcementsEmblaApi) return;
    onSelect(announcementsEmblaApi);
    announcementsEmblaApi.on("select", () => onSelect(announcementsEmblaApi));
    announcementsEmblaApi.on("reInit", () => onSelect(announcementsEmblaApi));
  }, [announcementsEmblaApi, onSelect]);

  const scrollAnnouncementsPrev = useCallback(() => {
    if (announcementsEmblaApi) announcementsEmblaApi.scrollPrev();
  }, [announcementsEmblaApi]);

  const scrollAnnouncementsNext = useCallback(() => {
    if (announcementsEmblaApi) announcementsEmblaApi.scrollNext();
  }, [announcementsEmblaApi]);

  const lastVisibleIndex = data?.announcements_list
    ? Math.min(selectedIndex + 2, data.announcements_list.length - 1)
    : 2;

  // each column is hidden when it has nothing to show, and the whole section when both are empty
  const hasLatest = data?.latest_list?.length > 0;
  const hasAnnouncements = data?.announcements_list?.length > 0;
  if (!hasLatest && !hasAnnouncements) return null;

  return (
    <section className="w-full h-auto bg-white dark:bg-[#101010] block">
      <div className="container">
        <div className="w-full h-full py-[30px_50px] sm:py-[40px_50px] lg:py-[50px_60px] 2xl:py-[60px_70px] 3xl:py-[70px_90px] border-b border-[#0B214833] dark:border-white/20 block">
          <div data-reveal className="w-full h-auto mb-5 sm:mb-10 lg:mb-12.5 2xl:mb-15 3xl:mb-20 sm:text-center ">
            <Heading
              as="h2"
              aurora
              speed={2}
              className="mb-1.25 xl:mb-2.5 3xl:mb-3.75 dark:!bg-none dark:!text-white [&_span]:dark:!bg-none [&_span]:dark:text-white"
            >
              {withLineBreaks(data?.title)}
            </Heading>
            <Text>{data?.description}</Text>
          </div>
          <div className="[--width:100%] lg:[--width:510px] 2xl:[--width:610px] 3xl:[--width:770px] w-full h-auto flex flex-wrap">
            {hasLatest && (
              <div data-reveal className={`w-(--width) ${hasAnnouncements ? "max-lg:pb-6.25 max-lg:mb-7.5 max-lg:border-b max-lg:border-black/10" : ""}`}>
                <div className="w-full h-auto mb-2.5 2xl:mb-3.75 3xl:mb-5 hidden sm:flex items-center flex-wrap justify-between">
                  <div className="flex items-center">
                    <Heading
                      as="h3"
                      size="h2"
                      className="pr-2.5 2xl:pr-3.75 3xl:pr-5 dark:bg-none dark:text-white"
                    >
                      {data?.latestTitle || "Latest Happenings"}
                    </Heading>
                    <div className="[--size:30px] gap-1.25 flex justify-end">
                      <button
                        type="button"
                        onClick={scrollPrev}
                        className="w-(--size) h-(--size) p-[5px_10px] border border-[#D9D9D9] dark:border-white/10 flex items-center justify-center hover:[filter:brightness(0)_saturate(100%)_inverting(100%)_sepia(3%)_saturate(7%)_hue-rotate(62deg)_brightness(104%)_contrast(100%)] transition-opacity duration-500 hover:opacity-50"
                        aria-label="Previous slide"
                      >
                        <Image
                          src="/images/left-arrow-button.svg"
                          width={15}
                          height={15}
                          alt="Previous"
                          className="w-full h-full object-contain"
                        />
                      </button>
                      <button
                        type="button"
                        onClick={scrollNext}
                        className="w-(--size) h-(--size) p-[5px_10px] border border-[#D9D9D9] dark:border-white/10 flex items-center justify-center transition-opacity duration-500 hover:opacity-50"
                        aria-label="Next slide"
                      >
                        <Image
                          src="/images/right-arrow-button.svg"
                          width={15}
                          height={15}
                          alt="Next"
                          className="w-full h-full object-contain"
                        />
                      </button>
                    </div>
                  </div>
                  <div>
                    {data?.latestButton?.label && data?.latestButton?.url && (
                      <Link
                        href={safeHref(data.latestButton.url)}
                        target={data.latestButton.target === "_blank" ? "_blank" : undefined}
                        className="text-sm 3xl:text-base leading-normal font-bold uppercase bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit transition-opacity duration-500 hover:opacity-50"
                      >
                        {withLineBreaks(data.latestButton.label)}
                      </Link>
                    )}
                  </div>
                </div>
                <div className="w-full h-auto overflow-hidden" ref={emblaRef}>
                  <div className="w-full h-auto -ml-2.5 flex backface-hidden touch-pan-y touch-pinch-zoom">
                    {data?.latest_list?.map((item) => (
                      <div key={item?.id} className="min-w-0 flex-[0_0_100%] pl-2.5">
                        <div className="group w-full h-full block relative z-0">
                          <div className="w-full h-auto lg:min-h-90.5 2xl:min-h-92.5 3xl:min-h-107.5 aspect-765/430 rounded-[5px] 2xl:rounded-[8px] 3xl:rounded-[10px] overflow-hidden">
                            <Image
                              src={
                                item?.featured_image?.url
                              }
                              width={760}
                              height={430}
                              alt={
                                item?.featured_image?.alternativeText ||
                                "Latest Happenings"
                              }
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                          <div className="sm:w-[85%] h-auto p-2.5 sm:p-5 absolute z-1 inset-[auto_auto_0_0]">
                            <div className="text-[16px] sm:text-[20px] xl:text-[24px] 2xl:text-[30px] 3xl:text-[36px] leading-[1.1] font-bold text-white mb-[10px] line-clamp-1">
                              {withLineBreaks(item?.title)}
                            </div>
                            <div className="text-[14px] sm:text-[16px] 3xl:text-[16px] leading-normal font-normal text-white mb-[10px] sm:mb-[20px] line-clamp-3">
                              {withLineBreaks(item?.description)}
                            </div>
                            <Link
                              href={safeHref(item?.externalLink || item?.link, "/news-events")}
                              {...(item?.externalLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                              className="text-[14px] 3xl:text-[15px] leading-normal font-bold uppercase bg-gradient-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit transition-opacity duration-500 hover:opacity-50"
                            >
                              Read More {" > "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {hasAnnouncements && (
              <div data-reveal style={{ "--reveal-delay": "150ms" }} className={`w-(--width) ${hasLatest ? "lg:w-[calc(100%-var(--width))] lg:pl-6 xl:pl-10 2xl:pl-12.5 3xl:pl-15" : "lg:!w-full"}`}>
                <div className="w-full h-auto mb-2.5 2xl:mb-3.75 3xl:mb-5 flex items-center flex-wrap justify-between">
                  <div className="flex items-center">
                    <Heading
                      as="h3"
                      size="h2"
                      className="dark:text-white pr-2.5 2xl:pr-3.75 3xl:pr-5"
                    >
                      Upcoming Events
                    </Heading>
                    <div className="[--size:30px] gap-[5px] flex items-center justify-end">
                      <button
                        type="button"
                        onClick={scrollAnnouncementsPrev}
                        className="w-(--size) h-(--size) p-[5px_10px] border border-[#D9D9D9] dark:border-white/10 flex items-center justify-center transition-opacity duration-500 hover:opacity-50"
                        aria-label="Previous event"
                      >
                        <Image
                          src="/images/left-arrow-button.svg"
                          width={15}
                          height={15}
                          alt="Previous"
                          className="w-full h-full object-contain"
                        />
                      </button>
                      <button
                        type="button"
                        onClick={scrollAnnouncementsNext}
                        className="w-(--size) h-(--size) p-[5px_10px] border border-[#D9D9D9] dark:border-white/10 flex items-center justify-center transition-opacity duration-500 hover:opacity-50"
                        aria-label="Next event"
                      >
                        <Image
                          src="/images/right-arrow-button.svg"
                          width={15}
                          height={15}
                          alt="Next"
                          className="w-full h-full object-contain"
                        />
                      </button>
                      <span className="ml-1.5 text-xs 3xl:text-sm font-semibold tabular-nums text-[#4A5565] dark:text-gray-300">
                        {String(selectedIndex + 1).padStart(2, "0")}
                        <span className="mx-0.5 opacity-50">/</span>
                        {String(upcomingEvents.length).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div>
                    {data?.announcementsButton?.label && data?.announcementsButton?.url && (
                      <Link
                        href={safeHref(data.announcementsButton.url)}
                        target={data.announcementsButton.target === "_blank" ? "_blank" : undefined}
                        className="text-[14px] 3xl:text-[16px] leading-normal font-bold uppercase bg-gradient-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit transition-opacity duration-500 hover:opacity-50"
                      >
                        {withLineBreaks(data.announcementsButton.label)}
                      </Link>
                    )}
                  </div>
                </div>
                <div
                  className="w-full h-[370px] lg:h-[370px] 2xl:h-[370px] 3xl:h-[430px] overflow-hidden"
                  ref={announcementsEmblaRef}
                >
                  <div className="w-full h-full flex flex-col backface-hidden touch-pan-y touch-pinch-zoom">
                    {upcomingEvents.map((event) => (
                      <div
                        key={event.id}
                        className="min-h-0 flex-[0_0_calc(100%/3)] py-1.5"
                      >
                        <Link
                          href={safeHref(event.link, "/news-events")}
                          className="group relative w-full h-full flex items-stretch transition-transform duration-500 hover:-translate-y-0.5"
                        >
                          <div className="relative z-10 w-[72px] sm:w-[105px] lg:w-[90px] xl:w-[105px] shrink-0 rounded-[5px] overflow-hidden">
                            <Image
                              src={event.image}
                              width={105}
                              height={131}
                              alt={event.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>
                          <div className="min-w-0 -ml-[5px] pl-[13px] sm:pl-[23px] pr-2.5 sm:pr-[15px] flex-1 flex items-center gap-2.5 sm:gap-4 rounded-[5px] bg-linear-to-b from-[#FFF8EE] to-[#FFF3E0] dark:from-white/5 dark:to-white/5 transition-shadow duration-500 group-hover:shadow-[0_12px_28px_rgba(220,38,38,0.18)]">
                            <div className="min-w-0 flex-1">
                              <div className="text-xs sm:text-sm 3xl:text-base leading-normal font-normal uppercase text-[#565656] dark:text-white/70 mb-1 line-clamp-1">
                                {event.category}
                              </div>
                              <h4 className="text-sm sm:text-base xl:text-lg 2xl:text-xl 3xl:text-[23px] leading-[1.4] font-bold text-[#212121] dark:text-white line-clamp-2">
                                {withLineBreaks(event.title)}
                              </h4>
                            </div>
                            <div className="w-[62px] sm:w-[85px] 3xl:w-[102px] aspect-102/101 shrink-0 rounded-[5px] bg-white dark:bg-[#2a2a2a] flex items-center justify-center">
                              <div className="text-center uppercase font-bold leading-[1.1] bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent">
                                <span className="block text-lg sm:text-2xl 3xl:text-[28px]">{event.day}</span>
                                <span className="block text-[10px] sm:text-xs 3xl:text-base">{event.monthYear}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}