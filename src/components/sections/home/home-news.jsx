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
  if (!data?.news_list) data = local_data;
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
    <section className="w-full h-auto py-[40px] sm:py-[50px] 2xl:py-[60px] 3xl:py-[80px] bg-white block">
      <div className="container">
        <div className="w-full h-auto mb-[30px] sm:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px] flex items-center flex-wrap justify-between">
          <div className="text-[30px] 3xl:text-[40px] leading-normal font-bold text-[#212121]">
            {data?.title}
          </div>
          <div className="[--size:30px] gap-[5px] flex justify-end">
            <button
              type="button"
              onClick={scrollPrev}
              className="w-(--size) h-(--size) p-[5px_10px] border border-[#D9D9D9] flex items-center justify-center"
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
        <div className="w-full h-auto overflow-hidden" ref={emblaRef}>
          <div className="sm:[--slide--sapcing:15px] 2xl:[--slide--sapcing:20px] ml-[calc(var(--slide--sapcing)*-1)] flex touch-pan-y touch-pinch-zoom">
            {data?.news_list?.map((item) => (
              <div
                key={item?.id}
                className="pl-(--slide--sapcing) min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_calc(100%/3)]"
              >
                <div className="group w-full h-full bg-linear-to-b from-[#FFF8EE]/50 to-[#FFF3E0]/50 rounded-[6px] 2xl:rounded-[10px] overflow-hidden block">
                  <div className="w-full h-auto block relative z-0">
                    <div className="w-full h-auto aspect-[560/220] mb-[30px] 2xl:mb-[40px] 3xl:mb-[50px] block overflow-hidden">
                      <Image
                        src={item?.path}
                        width={560}
                        height={220}
                        alt={item?.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                    <div className="w-auto h-auto p-[12px_10px] 2xl:p-[15px_10px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) mx-[20px] 2xl:mx-[25px] 3xl:mx-[30px] rounded-[6px] 2xl:rounded-[10px] overflow-hidden flex flex-col items-center justify-center absolute z-1 inset-[auto_auto_-20%_0]">
                      <span className="text-[20px] 2xl:text-[24px] 3xl:text-[28px] leading-normal font-semibold text-white">
                        {item?.date}
                      </span>
                      <span className="text-[12px] 2xl:text-[13px] 3xl:text-[14px] leading-normal font-normal text-white">
                        {item?.year}
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-auto p-[15px_20px] 2xl:p-[15px_25px] 3xl:p-[20px_30px] flex flex-col justify-between">
                    <div className="text-[16px] 2xl:text-[18px] 3xl:text-[23px] leading-normal font-bold text-[#212121] w-[90%] mb-[20px] 3xl:mb-[30px]">
                      {item?.title}
                    </div>
                    <Link
                      href={item?.link}
                      target="_blank"
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
    </section>
  );
}
