"use client";
import Link from "next/link";
import Image from "next/image";
import { Text } from "@/components/ui/text";
import Autoplay from "embla-carousel-autoplay";
import { Heading } from "@/components/ui/heading";
import useEmblaCarousel from "embla-carousel-react";

const local_data = {
  sectionBackgroundImage: {
    url: "/images/home-industry-overlay.webp",
    alternativeTxt: "Industry Background",
  },
  title: "Industry Collaboration",
  description: "Built with Industry, Not Just for Industry",
  collaborations: [
    {
      id: 1,
      tag: "400+ Annual Internships",
      title: "Internship & Training Opportunities",
      collaborationImage: {
        url: "/images/home-industry-1.webp",
        alternativeTxt: "Internship & Training Opportunities",
      },
      link: "/#",
    },
  ],
};

export default function HomeIndustry({ data = local_data }) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: false,
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
    <section className="w-full h-auto py-[70px_240px] overflow-hidden block relative z-0 before:content-[''] before:w-full before:h-full before:bg-linear-to-r before:from-(--basecolor)/90 before:to-(--basecolor2)/90 before:absolute before:-z-1 before:inset-0">
      <div className="w-full h-full block absolute -z-2 inset-0">
        <Image
          src={data?.sectionBackgroundImage?.url}
          alt={
            data?.sectionBackgroundImage?.alternativeTxt ||
            "Industry Background"
          }
          width={1920}
          height={870}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container">
        <div className="w-full h-auto mb-3.75 sm:mb-5 lg:mb-7.5 3xl:mb-8.75 text-center">
          <Heading
            aurora
            speed={2}
            align="center"
            className="mb-1.25 3xl:mb-2.5 text-white"
          >
            {data?.title}
          </Heading>
          <Text className={"text-white"}>{data?.description}</Text>
        </div>
        <div className="w-full h-auto overflow-hidden" ref={emblaRef}>
          <div className="touch-pan-y touch-pinch-zoom flex">
            {data?.collaborations?.map((item) => (
              <div
                key={item?.id}
                className="min-w-0 translate-x-0 translate-y-0 flex-[0_0_calc(100%/3)]"
              >
                <Link
                  href={item?.link || "#"}
                  aria-label={"Industry Collaboration"}
                  className="w-full h-full block relative z-0"
                >
                  <div className="w-full h-auto aspect-560/440 rounded-[10px] overflow-hidden block">
                    <Image
                      src={item?.collaborationImage?.url}
                      alt={item?.collaborationImage?.alternativeTxt}
                      width={560}
                      height={440}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-auto m-[25px_20px] block absolute z-1 inset-[auto_auto_0_0]">
                    <div className="text-base leading-[1.1] font-normal text-white w-auto h-auto p-[5px_10px] mb-1.25 bg-linear-to-r from-(--basecolor) to-(--basecolor2) rounded-[100px] overflow-hidden inline-block">
                      {item?.tag}
                    </div>
                    <div className="text-[32px] leading-[1.1] font-bold text-white max-w-[80%]">
                      {item?.title}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
