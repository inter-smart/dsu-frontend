"use client";
import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const local_data = {
  title: "News & Events",
  news_list: [
    {
      id: 1,
      path: "/images/home-news-1.webp",
      title:
        "AI Adoption in Higher Education: Key for Building a Net-Zero Future Enabled Viksit Bharat 2047   ",
      date: "29th",
      year: "Dec 2025",
      link: "#!",
    },
    {
      id: 2,
      path: "/images/home-news-1.webp",
      title:
        "AI Adoption in Higher Education: Key for Building a Net-Zero Future Enabled Viksit Bharat 2047   ",
      date: "29th",
      year: "Dec 2025",
      link: "#!",
    },
    {
      id: 3,
      path: "/images/home-news-1.webp",
      title:
        "AI Adoption in Higher Education: Key for Building a Net-Zero Future Enabled Viksit Bharat 2047   ",
      date: "29th",
      year: "Dec 2025",
      link: "#!",
    },
    {
      id: 4,
      path: "/images/home-news-1.webp",
      title:
        "AI Adoption in Higher Education: Key for Building a Net-Zero Future Enabled Viksit Bharat 2047   ",
      date: "29th",
      year: "Dec 2025",
      link: "#!",
    },
  ],
};

export default function News({ data = local_data }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    skipSnaps: false,
  });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return (
    <section className="w-full h-auto py-[80px] bg-white block">
      <div className="container xl:max-w-[1160px] 2xl:max-w-[1725px] mx-auto">
        <div className="w-full h-auto flex items-center flex-wrap">
          <div className="text-[40px] leading-normal font-bold text-[#212121]">
            {data?.title}
          </div>
          <div className="gap-[5px] flex justify-end">
            <button
              type="button"
              onClick={scrollPrev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E2E2E2] text-[#212121] transition hover:bg-[#F4F4F4]"
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E2E2E2] text-[#212121] transition hover:bg-[#F4F4F4]"
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
        <div className="w-full h-auto overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 touch-pan-y touch-pinch-zoom">
            {data?.news_list?.map((item) => (
              <div
                key={item?.id}
                className="min-w-[300px] flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <div className="w-full h-full block">
                  <div className="w-full h-auto aspect-[560/220] mb-[70px] rounded-[10px] overflow-hidden block">
                    <Image
                      src={item?.path}
                      width={560}
                      height={220}
                      alt={item?.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="w-auto h-auto p-[20px_10px] bg-linear-to-r from-[#DC2626] to-[#F97316] rounded-[10px] overflow-hidden flex items-center justify-center">
                      <span className="text-[28px] leading-normal font-semibold text-white">
                        {item?.date}
                      </span>
                      <span className="text-[14px] leading-normal font-normal text-white">
                        {item?.year}
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-auto flex justify-between">
                    <div className="text-[23px] leading-normal font-bold text-[#212121]">
                      {item?.title}
                    </div>
                    <Link href={item?.link} target="_blank" className="">
                      Read More {" > "}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
