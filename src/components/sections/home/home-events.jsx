"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const local_data = {
  title: "Latest News & Events",
  description:
    "Stay updated with the latest happenings, achievements, and events across the university.",
  latest_list: [
    {
      id: 1,
      featured_image: {
        url: "/images/home-latest-news-1.webp",
        alternativeText: "Media image",
      },
      title: "The Economic Times",
      description:
        "As artificial intelligence reshapes industries, hospitality faces a distinct challenge: preserving human connection while embracing automation.",
      link: "#!",
    },
    {
      id: 2,
      featured_image: {
        url: "/images/home-latest-news-1.webp",
        alternativeText: "Media image",
      },
      title: "The Economic Times",
      description:
        "As artificial intelligence reshapes industries, hospitality faces a distinct challenge: preserving human connection while embracing automation.",
      link: "#!",
    },
  ],
  announcements_list: [
    {
      id: 1,
      announcement_image: {
        url: "/images/home-announcement-1.webp",
        alternativeText: "Media image",
      },
      title: "PGCET & DSAT",
      description:
        "School of commerce and Management studies welcomes the full time MBA students from DSAT & PGCET.",
      link: "#!",
    },
    {
      id: 2,
      announcement_image: {
        url: "/images/home-announcement-2.webp",
        alternativeText: "Media image",
      },
      title: "AIC-DSU Innovation",
      description:
        "School of commerce and Management studies Welcomes the full time MBA students from DSAT & PGCET.",
      link: "#!",
    },
    {
      id: 3,
      announcement_image: {
        url: "/images/home-announcement-3.webp",
        alternativeText: "Media image",
      },
      title: "BUSINESS APPLICATIONS OF",
      description:
        "School of commerce and Management studies Welcomes the full time MBA students from DSAT & PGCET.",
      link: "#!",
    },
    {
      id: 4,
      announcement_image: {
        url: "/images/home-announcement-2.webp",
        alternativeText: "Media image",
      },
      title: "AIC-DSU Innovation",
      description:
        "School of commerce and Management studies Welcomes the full time MBA students from DSAT & PGCET.",
      link: "#!",
    },
    {
      id: 5,
      announcement_image: {
        url: "/images/home-announcement-3.webp",
        alternativeText: "Media image",
      },
      title: "BUSINESS APPLICATIONS OF",
      description:
        "School of commerce and Management studies Welcomes the full time MBA students from DSAT & PGCET.",
      link: "#!",
    },
  ],
};

export default function Events({ data = local_data }) {
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

  return (
    <section className="w-full h-auto py-[30px_50px] sm:py-[40px_50px] lg:py-[50px_60px] 2xl:py-[60px_70px] 3xl:py-[70px_90px] bg-white border-b border-[#0B214833] block">
      <div className="container">
        <div className="w-full h-auto mb-5 sm:mb-10 lg:mb-12.5 2xl:mb-15 3xl:mb-20 sm:text-center">
          <Heading className="mb-1.25 xl:mb-2.5 3xl:mb-3.75">
            {data?.title}
          </Heading>
          <Text>{data?.description}</Text>
        </div>
        <div className="[--width:100%] lg:[--width:510px] 2xl:[--width:610px] 3xl:[--width:770px] w-full h-auto flex flex-wrap">
          <div className="w-(--width) max-lg:pb-6.25 max-lg:mb-7.5 max-lg:border-b max-lg:border-black/10">
            <div className="w-full h-auto mb-2.5 2xl:mb-3.75 3xl:mb-5 hidden sm:flex items-center flex-wrap justify-between">
              <div className="flex items-center">
                <Heading size="h2" className="pr-2.5 2xl:pr-3.75 3xl:pr-5">
                  Latest Happenings
                </Heading>
                <div className="[--size:30px] gap-[5px] flex justify-end">
                  <button
                    type="button"
                    onClick={scrollPrev}
                    className="w-(--size) h-(--size) p-[5px_10px] border border-[#D9D9D9] flex items-center justify-center hover:[filter:brightness(0)_saturate(100%)_inverting(100%)_sepia(3%)_saturate(7%)_hue-rotate(62deg)_brightness(104%)_contrast(100%)] transition-all duration-200"
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
                    className="w-(--size) h-(--size) p-[5px_10px] border border-[#D9D9D9] flex items-center justify-center"
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
                <Link
                  href="#!"
                  className="text-[14px] 3xl:text-[16px] leading-normal font-bold uppercase bg-gradient-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit"
                >
                  View All
                </Link>
              </div>
            </div>
            <div className="w-full h-auto overflow-hidden" ref={emblaRef}>
              <div className="w-full h-auto flex backface-hidden touch-pan-y touch-pinch-zoom">
                {data?.latest_list?.map((item) => (
                  <div key={item?.id} className="min-w-0 flex-[0_0_100%]">
                    <div className="w-full h-full block relative z-0">
                      <div className="w-full h-auto lg:min-h-[370px] 2xl:min-h-[370px] 3xl:min-h-[430px] aspect-[765/430] rounded-[5px] 2xl:rounded-[8px] 3xl:rounded-[10px] overflow-hidden">
                        <Image
                          src={
                            item?.featured_image?.url ||
                            "/images/placeholder.jpg"
                          }
                          width={760}
                          height={430}
                          alt={
                            item?.featured_image?.alternativeText ||
                            "Latest Happenings"
                          }
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="sm:w-[85%] h-auto p-2.5 sm:p-5 absolute z-1 inset-[auto_auto_0_0]">
                        <div className="text-[16px] sm:text-[20px] xl:text-[24px] 2xl:text-[30px] 3xl:text-[36px] leading-[1.1] font-bold text-white mb-[10px] line-clamp-1">
                          {item?.title}
                        </div>
                        <div className="text-[14px] sm:text-[16px] 3xl:text-[16px] leading-normal font-normal text-white mb-[10px] sm:mb-[20px] line-clamp-3">
                          {item?.description}
                        </div>
                        <Link
                          href={item?.link}
                          className="text-[14px] 3xl:text-[15px] leading-normal font-bold uppercase bg-gradient-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit"
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
          <div className="w-(--width) lg:w-[calc(100%-var(--width))] lg:pl-10 xl:pl-27.5 2xl:pl-32.5 3xl:pl-40">
            <div className="w-full h-auto mb-2.5 2xl:mb-3.75 3xl:mb-5 flex items-center flex-wrap justify-between">
              <div className="flex items-center">
                <Heading size="h2" className="pr-2.5 2xl:pr-3.75 3xl:pr-5">
                  Announcements
                </Heading>
                <div className="[--size:30px] gap-[5px] flex justify-end">
                  <button
                    type="button"
                    onClick={scrollAnnouncementsPrev}
                    className="w-(--size) h-(--size) p-[5px_10px] border border-[#D9D9D9] flex items-center justify-center hover:[filter:brightness(0)_saturate(100%)_inverting(100%)_sepia(3%)_saturate(7%)_hue-rotate(62deg)_brightness(104%)_contrast(100%)] transition-all duration-200"
                    aria-label="Previous announcement"
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
                    className="w-(--size) h-(--size) p-[5px_10px] border border-[#D9D9D9] flex items-center justify-center"
                    aria-label="Next announcement"
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
                <Link
                  href="#!"
                  className="text-[14px] 3xl:text-[16px] leading-normal font-bold uppercase bg-gradient-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit"
                >
                  View All
                </Link>
              </div>
            </div>
            <div
              className="w-full h-[370px] lg:h-[370px] 2xl:h-[370px] 3xl:h-[430px] overflow-hidden"
              ref={announcementsEmblaRef}
            >
              <div className="w-full h-full flex flex-col backface-hidden touch-pan-y touch-pinch-zoom">
                {data?.announcements_list?.map((item, index) => (
                  <div
                    key={item?.id}
                    className="min-h-0 flex-[0_0_calc(100%/3)]"
                  >
                    <div
                      className={`[--image-size:130px] lg:[--image-size:150px] 2xl:[--image-size:175px] 3xl:[--image-size:220px] w-full h-full py-6.25 sm:py-2.5 flex flex-wrap max-sm:items-center ${
                        index === lastVisibleIndex
                          ? "pb-0 border-b-0"
                          : "sm:border-b border-black/10"
                      }`}
                    >
                      <div className="w-(--image-size) h-auto aspect-[220/120] rounded-[5px] 2xl:rounded-[8px] 3xl:rounded-[10px] overflow-hidden block shrink-0">
                        <Image
                          src={item?.announcement_image?.url}
                          width={220}
                          height={120}
                          alt={item?.announcement_image?.alternativeText}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-[calc(100%-var(--image-size))] h-auto pl-2.5 2xl:pl-3.75 flex flex-col justify-between py-1">
                        <div>
                          <div className="lg:text-[18px] 2xl:text-[20px] 3xl:text-[30px] leading-tight font-bold text-[#212121] mb-1 line-clamp-1">
                            {item?.title}
                          </div>
                          <div className="text-[14px] 3xl:text-[16px] leading-normal font-normal text-[#4A5565] sm:max-w-[95%] mb-2 line-clamp-2">
                            {item?.description}
                          </div>
                        </div>
                        <Link
                          href={item?.link}
                          className="text-[14px] leading-normal font-bold uppercase bg-gradient-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit"
                        >
                          Read More &gt;
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
