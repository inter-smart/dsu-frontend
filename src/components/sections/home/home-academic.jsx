"use client";
import Link from "next/link";
import Image from "next/image";
import { Text } from "@/components/ui/text";
import Autoplay from "embla-carousel-autoplay";
import { Heading } from "@/components/ui/heading";
import useEmblaCarousel from "embla-carousel-react";
import { buttonVariants } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";

export default function HomeAcademic({ data }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const [academicEmblaRef, academicEmblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      breakpoints: {
        "(min-width: 640px)": { align: "start" },
      },
    },
    [
      Autoplay({
        delay: 3500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const scrollPrev = useCallback(() => {
    if (academicEmblaApi) academicEmblaApi.scrollPrev();
  }, [academicEmblaApi]);

  const scrollNext = useCallback(() => {
    if (academicEmblaApi) academicEmblaApi.scrollNext();
  }, [academicEmblaApi]);

  const onSelect = useCallback((api) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!academicEmblaApi) return;

    setSlidesCount(academicEmblaApi.scrollSnapList().length);
    onSelect(academicEmblaApi);

    academicEmblaApi.on("reInit", onSelect);
    academicEmblaApi.on("select", onSelect);

    return () => {
      academicEmblaApi.off("reInit", onSelect);
      academicEmblaApi.off("select", onSelect);
    };
  }, [academicEmblaApi, onSelect]);

  return (
    <section className="w-full h-auto py-12.5 2xl:py-15 3xl:py-20 bg-linear-to-t from-[#FFF3E0] to-[#FFF8EE] dark:bg-none dark:bg-black overflow-hidden block">
      <div className="container">
        <div className="w-full h-auto mb-6.25 lg:mb-7.5 3xl:mb-10 text-center">
          <Heading
            aurora
            speed={2}
            align="center"
            className="mb-1.25 lg:mb-2.5"
          >
            {data?.title}
          </Heading>
          <Text>{data?.description}</Text>
        </div>
        <div className="w-full h-auto hidden lg:grid grid-cols-5 lg:gap-[15px_10px] 2xl:gap-[20px_10px] 3xl:gap-[25px_15px]">
          {data?.academics?.map((item) => (
            <div key={item?.id} className="w-full h-auto">
              <AcademicCard item={item} />
            </div>
          ))}
        </div>
        <div className="[--navigation-btn-size:40px] w-full h-auto block relative z-0">
          <div
            className="[--slide-gap:10px] 3xl:[--slide-gap:25px] w-full h-auto sm:overflow-hidden"
            ref={academicEmblaRef}
          >
            <div className="ml-[calc(var(--slide-gap)*-1)] touch-pan-y touch-pinch-zoom max-lg:flex hidden">
              {data?.academics?.map((item) => (
                <div
                  key={item?.id}
                  className="min-w-0 translate-x-0 translate-y-0 flex-[0_0_calc(100%/1.4)] sm:flex-[0_0_calc(100%/2)] md:flex-[0_0_calc(100%/3)] pl-(--slide-gap)"
                >
                  <AcademicCard item={item} />
                </div>
              ))}
            </div>
          </div>
          {!prevBtnDisabled && (
            <button
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="w-(--navigation-btn-size) h-auto aspect-40/30 my-auto overflow-hidden -translate-x-[calc(var(--navigation-btn-size)/8)]  sm:-translate-x-(--navigation-btn-size) xl:-translate-x-[calc(var(--navigation-btn-size)+5px)] flex items-center justify-center absolute z-1 inset-[0_auto_0_0] transition-opacity duration-500 hover:opacity-50"
            >
              <Image
                src={"/images/testimonial-slider-btn-mobile.svg"}
                alt="left-btn"
                width={40}
                height={30}
                className="w-full h-full object-contain block sm:hidden"
              />
            </button>
          )}
          {!nextBtnDisabled && (
            <button
              onClick={scrollNext}
              aria-label="Next slide"
              className="w-(--navigation-btn-size) h-auto aspect-40/30 my-auto overflow-hidden translate-x-[calc(var(--navigation-btn-size)/8)] sm:translate-x-(--navigation-btn-size) xl:translate-x-[calc(var(--navigation-btn-size)+5px)] flex items-center justify-center absolute z-1 inset-[0_0_0_auto] transition-opacity duration-500 hover:opacity-50"
            >
              <Image
                src={"/images/testimonial-slider-btn-mobile.svg"}
                alt="right-btn"
                width={40}
                height={30}
                className="w-full h-full object-contain scale-x-[-1] block sm:hidden"
              />
            </button>
          )}
          <div className="w-full h-auto mt-5 gap-1.25 max-sm:flex hidden items-center justify-center">
            {Array.from({ length: slidesCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => academicEmblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.25 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "w-12.5 bg-[#EA580C]"
                    : "w-3 bg-[#D3D6DB]"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="w-full h-auto mt-3.75 sm:mt-7.5 2xl:mt-8.75 3xl:mt-11.25 flex items-center justify-center">
          <Link
            href="/centres-of-excellence"
            className={buttonVariants({
              variant: "default",
              size: "default",
            })}
          >
            View All Programs
            <Image
              src="/images/icon-btn.svg"
              alt="home-btn"
              width={15}
              height={15}
              className="size-3.75"
              data-icon="inline-end"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

function AcademicCard({ item }) {
  return (
    <div className="group [--gap:20px_15px] 2xl:[--gap:25px_20px] w-full h-full aspect-335/355 rounded-[7px] 2xl:rounded-[10px] overflow-hidden block relative z-0 before:content-[''] before:w-full before:h-[40%] before:bg-linear-to-t before:from-[#090909] before:to-[#0B2148]/0 before:opacity-50 before:absolute before:z-1 before:inset-[auto_0_0_0]">
      <div className="w-full h-full block">
        <Image
          src={item?.academicImage?.url}
          alt={item?.academicImage?.alternativeTxt || "Academic Image"}
          width={335}
          height={355}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="w-12.5 lg:w-10 2xl:w-12.5 3xl:w-13.75 h-auto aspect-square p-2.5 lg:p-2 2xl:p-2.5 m-(--gap) rounded-[7px] 2xl:rounded-[10px] backdrop-blur-[45px] absolute z-1 inset-[0_auto_auto_0] flex items-center justify-center">
        <Image
          src={item?.icon?.url}
          alt={item?.icon?.alternativeTxt || "Icon"}
          width={55}
          height={55}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="text-base lg:text-sm 2xl:text-base 3xl:text-xl leading-[1.2] font-bold text-white w-full h-auto m-(--gap) max-w-[85%] absolute z-1 inset-[auto_0_0_0]">
        {item?.title}
      </div>
      <div className="w-full h-full sm:p-[20px_10px] 2xl:p-[35px_15px] bg-[#CDBF8D] opacity-0 pointer-events-none transition-opacity duration-500 block absolute z-1 inset-0 group-hover:opacity-100 group-hover:pointer-events-auto">
        <div className="w-full h-full block">
          {item?.courses_list?.map((item) => (
            <div
              key={item?.id}
              className="w-full h-auto not-last:pb-2.5 2xl:not-last:pb-3.75 not-last:mb-2.5 2xl:not-last:mb-3.75 not-last:border-b border-[#080C15]/20 block"
            >
              <div className="text-sm 2xl:text-lg 3xl:text-xl leading-[1.1] font-semibold text-[#080C15] mb-2.5 2xl:mb-3.75">
                {item?.title}
              </div>
              <div className="w-full h-auto gap-1.25 2xl:gap-2.5 3xl:gap-3.75 flex flex-wrap">
                {item?.courses?.map((course) => (
                  <div key={course?.id} className="w-auto h-auto inline">
                    <Link
                      href={course?.link}
                      aria-label={course?.label}
                      className="text-[13px] 2xl:text-[15px] leading-[1.1] font-normal text-[#080C15] w-auto h-auto p-[5px_10px] bg-[#080C15]/10 rounded-full border border-black/20 transition duration-500 inline hover:text-white hover:bg-(--basecolor2) hover:border-(--basecolor2)"
                    >
                      {course?.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
