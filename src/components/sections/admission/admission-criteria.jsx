"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Text } from "@/components/ui/text";
import Autoplay from "embla-carousel-autoplay";
import { Heading } from "@/components/ui/heading";
import useEmblaCarousel from "embla-carousel-react";
import { buttonVariants } from "@/components/ui/button";

export default function AdmissionCriteria({ data, variant }) {
  const [criteriaEmblaRef] = useEmblaCarousel(
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
  return (
    <section className="w-full h-auto py-10 sm:py-12.5 2xl:py-15 3xl:py-17.5 bg-linear-to-br from-[#EFF6FF] to-[#F9FAFB] block">
      <div className="container">
        <div className="w-full h-auto mb-6.25 sm:mb-7.5 lg:mb-8.75 2xl:mb-10 3xl:mb-12.5 max-md:gap-3.75 flex flex-wrap md:items-end">
          <div className="w-full md:w-[75%]">
            <div className="text-sm 2xl:text-base 3xl:text-xl leading-[1.1] font-normal bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit mb-2.5 2xl:mb-3.75 3xl:mb-5 relative z-0 [--size:15px] 2xl:[--size:20px] 3xl:[--size:25px] before:content-[''] before:w-(--size) before:h-0.5 2xl:before:h-0.75 pl-[calc(var(--size)+8px)] before:my-auto before:bg-linear-to-r before:from-(--basecolor) before:to-(--basecolor2) before:inline-block before:absolute before:z-1 before:inset-[0_auto_0_0]">
              {data?.subTitle}
            </div>
            <Heading className="mb-2.5 2xl:mb-3.75 3xl:mb-5">
              {data?.title}
            </Heading>
            <Text>{data?.description}</Text>
          </div>
          <div className="w-full md:w-[25%] md:flex justify-end">
            {data?.button && data?.button?.link && data?.button?.label && (
              <Link
                href={data?.button?.link || "#"}
                className={buttonVariants({
                  variant: "default",
                  size: "default",
                })}
              >
                {data?.button?.label}
                <Image
                  src="/images/icon-btn.svg"
                  alt="home-btn"
                  width={15}
                  height={15}
                  className="size-3.75"
                  data-icon="inline-end"
                />
              </Link>
            )}
          </div>
        </div>
        <div className="w-full h-auto overflow-hidden" ref={criteriaEmblaRef}>
          <div className="[--slide--sapcing:10px] sm:[--slide--sapcing:15px] 3xl:[--slide--sapcing:20px] ml-[calc(var(--slide--sapcing)*-1)] flex touch-pan-y touch-pinch-zoom">
            {data?.criterias?.map((item) => (
              <div
                key={item?.id}
                className="pl-(--slide--sapcing) min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_calc(100%/3)]"
              >
                <div
                  className={cn(
                    "w-full h-full p-[20px_15px] sm:p-[25px_15px] 2xl:p-[30px_20px] 3xl:p-[35px_25px] rounded-md 2xl:rounded-[10px] border border-[#212121]/10 overflow-hidden block transition-colors duration-300 hover:border-(--basecolor2) hover:bg-(--basecolor2)/10",
                    variant === "lateral" && "bg-white",
                  )}
                >
                  {item?.label && (
                    <div className="text-sm 2xl:text-base 3xl:text-xl leading-[1.2] font-normal bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit mb-1.25 lg:mb-2.5">
                      {item?.label}
                    </div>
                  )}
                  <div className="text-xl sm:text-[22px] lg:text-[26px] 2xl:text-[32px] 3xl:text-[40px] leading-[1.2] font-semibold text-[#212121] mb-2.5 lg:mb-3.75">
                    {item?.title}
                  </div>
                  <div className="text-[13px] 2xl:text-[15px] 3xl:text-lg leading-[1.6] font-normal text-[#4A5565]">
                    {item?.description}
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
