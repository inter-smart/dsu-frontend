"use client";
import Link from "next/link";
import Image from "next/image";
import { Text } from "@/components/ui/text";
import Autoplay from "embla-carousel-autoplay";
import { Heading } from "@/components/ui/heading";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { buttonVariants } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { jarallax } from "jarallax";
import "jarallax/dist/jarallax.css";

export default function HomeIndustry({ data }) {
  const sectionJarallaxRef = useRef(null);
  useEffect(() => {
    const el = sectionJarallaxRef.current;
    if (el) {
      jarallax(el, { speed: 0.5 });
    }
    return () => {
      if (el) {
        jarallax(el, "destroy");
      }
    };
  }, []);

  const [collaborationEmblaRef] = useEmblaCarousel(
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

  const [partnersEmblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [
      AutoScroll({
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ],
  );
  return (
    <section
      ref={sectionJarallaxRef}
      className="jarallax w-full h-auto py-[40px_80px] sm:py-[40px_80px] lg:py-[50px_100px] 2xl:py-[60px_120px] 3xl:py-[70px_150px] overflow-x-clip block relative z-0 before:content-[''] before:w-full before:h-full before:bg-linear-to-r before:from-(--basecolor)/90 before:to-(--basecolor2)/90 before:absolute before:-z-1 before:inset-0"
    >
      <Image
        src={data?.sectionBackgroundImage?.url}
        alt={
          data?.sectionBackgroundImage?.alternativeTxt || "Industry Background"
        }
        width={1920}
        height={870}
        className="jarallax-img w-full h-full object-cover"
      />
      <div className="container">
        <div className="w-full h-auto mb-7.5 3xl:mb-8.75 text-center">
          <Heading align="center" className="mb-1.25 3xl:mb-2.5 text-white">
            {data?.title}
          </Heading>
          <Text className={"text-white"}>{data?.description}</Text>
        </div>
        <div
          className="[--slide-gap:15px] 2xl:[--slide-gap:20px] 3xl:[--slide-gap:25px] w-full h-auto sm:overflow-hidden"
          ref={collaborationEmblaRef}
        >
          <div className="ml-[calc(var(--slide-gap)*-1)] touch-pan-y touch-pinch-zoom flex">
            {data?.collaborations?.map((item) => (
              <div
                key={item?.id}
                className="min-w-0 translate-x-0 translate-y-0 flex-[0_0_calc(100%/1.2)] sm:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)] pl-(--slide-gap)"
              >
                <Link
                  href={item?.link || "#"}
                  aria-label={"Industry Collaboration"}
                  className="group [--gap:15px_10px] sm:[--gap:20px_15px] 2xl:[--gap:25px_20px] w-full h-full block relative z-0 before:content-[''] before:w-5 sm:before:w-6.25 2xl:before:w-8.75 before:h-auto before:aspect-square before:m-(--gap) before:bg-[url('data:image/svg+xml,%3Csvg%20width=%2233%22%20height=%2233%22%20viewBox=%220%200%2033%2033%22%20fill=%22none%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3CforeignObject%20x=%22-44.8%22%20y=%22-44.8%22%20width=%22122.6%22%20height=%22122.6%22%3E%3Cdiv%20xmlns=%22http://www.w3.org/1999/xhtml%22%20style=%22backdrop-filter:blur(22.4px);clip-path:url(%23bgblur_0_3410_39920_clip_path);height:100%25;width:100%25%22%3E%3C/div%3E%3C/foreignObject%3E%3Cg%20data-figma-bg-blur-radius=%2244.8%22%3E%3Ccircle%20cx=%2216.5%22%20cy=%2216.5%22%20r=%2216.5%22%20fill=%22%23D9D9D9%22%20fill-opacity=%220.1%22/%3E%3Ccircle%20cx=%2216.5%22%20cy=%2216.5%22%20r=%2216%22%20stroke=%22white%22%20stroke-opacity=%220.1%22/%3E%3C/g%3E%3Cg%20clip-path=%22url(%23clip1_3410_39920)%22%3E%3Cpath%20d=%22M12.8262%2010.8267C12.5226%2010.5395%2012.5002%2010.074%2012.7637%209.76123L12.8204%209.70068L12.8799%209.64893C13.1893%209.40431%2013.6417%209.41849%2013.9346%209.69287L13.9366%209.6958L20.7588%2016.1802L20.7579%2016.1812C20.9168%2016.3262%2021.013%2016.5315%2021.0128%2016.7544L21.0137%2016.7573L21.0128%2016.7573C21.0122%2016.9721%2020.9227%2017.1726%2020.7715%2017.3169L20.7715%2017.3179L13.9493%2023.8022L13.9464%2023.8052L13.9454%2023.8042C13.633%2024.0965%2013.1412%2024.0935%2012.8331%2023.7964C12.5112%2023.4859%2012.5146%2022.9766%2012.8389%2022.6704L19.0616%2016.7554L12.8262%2010.8267Z%22%20fill=%22white%22%20stroke=%22white%22/%3E%3C/g%3E%3Cdefs%3E%3CclipPath%20id=%22bgblur_0_3410_39920_clip_path%22%20transform=%22translate(44.8%2044.8)%22%3E%3Ccircle%20cx=%2216.5%22%20cy=%2216.5%22%20r=%2216.5%22/%3E%3C/clipPath%3E%3CclipPath%20id=%22clip1_3410_39920%22%3E%3Crect%20width=%2217%22%20height=%2211%22%20fill=%22white%22%20transform=%22translate(11%2025)%20rotate(-90)%22/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E')] before:bg-no-repeat before:bg-center before:bg-contain before:absolute before:z-1 before:inset-[auto_0_0_auto]"
                >
                  <div className="w-full h-full aspect-560/440 rounded-[5px] sm:rounded-[7px] 2xl:rounded-[10px] overflow-hidden block relative z-0 group-hover:after:opacity-80 before:content-[''] before:w-full before:h-1/2 before:bg-linear-to-t before:from-[#090909] before:to-[#0B2148]/0 before:opacity-50 before:absolute before:z-1 before:inset-[auto_0_0_0] after:content-[''] after:w-full after:h-1/2 after:bg-linear-to-t after:from-black after:to-(--basecolor2)/0 after:opacity-0 after:transition-opacity after:duration-500 after:absolute after:z-1 after:inset-[auto_0_0_0]">
                    <Image
                      src={item?.collaborationImage?.url}
                      alt={item?.collaborationImage?.alternativeTxt}
                      width={560}
                      height={440}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="w-full h-auto m-(--gap) block absolute z-1 inset-[auto_auto_0_0]">
                    <div className="text-[9px] sm:text-[10px] 2xl:text-[13px] 3xl:text-base leading-[1.1] font-normal text-white w-auto h-auto p-[5px_10px] mb-[2.5px] sm:mb-1.25 bg-linear-to-r from-(--basecolor) to-(--basecolor2) rounded-[100px] overflow-hidden inline-block">
                      {item?.tag}
                    </div>
                    <div className="text-base sm:text-lg lg:text-xl xl:text-[22px] 2xl:text-[26px] 3xl:text-[32px] leading-[1.1] font-bold text-white line-clamp-2 max-w-[80%] xl:max-w-[60%]">
                      {item?.title}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-auto mt-10 sm:mt-6.25 2xl:mt-7.5 3xl:mt-8.75 flex items-center justify-center">
          <Link
            href="/centres-of-excellence"
            className={buttonVariants({
              variant: "default",
              size: "default",
              className: "!text-[#E84E1B] bg-none bg-white",
            })}
          >
            Explore Industry Collaborations
            <Image
              src="/images/icon-btn-white.svg"
              alt="home-btn"
              width={15}
              height={15}
              className="size-3.75"
              data-icon="inline-end"
            />
          </Link>
        </div>
        <div className="w-full h-auto absolute z-1 inset-[auto_0_0_0]">
          <div className="container">
            <div className="w-full h-full p-[15px_10px] sm:p-[20px_30px_30px_30px] lg:p-[25px_50px_40px_50px] 2xl:p-[30px_70px_50px_70px] 3xl:p-[40px_100px_60px_100px] bg-white dark:bg-[#AEAEAE] translate-y-1/2">
              <div className="text-xs 2xl:text-sm leading-[1.1] font-normal text-center text-black/40 w-full h-auto dark:bg-linear-to-r dark:from-(--basecolor) dark:to-(--basecolor2) dark:bg-clip-text dark:text-transparent mb-3.75 xl:mb-5">
                OUR INDUSTRY PARTNERS INCLUDE
              </div>
              <div
                className="w-full h-auto [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] overflow-hidden"
                ref={partnersEmblaRef}
              >
                <div className="touch-pan-y touch-pinch-zoom flex">
                  {data?.industryPartners?.map((item) => (
                    <div
                      key={item?.id}
                      className="min-w-0 translate-x-0 translate-y-0 flex-[0_0_calc(100%/4)] sm:flex-[0_0_calc(100%/5)] md:flex-[0_0_calc(100%/6)] lg:flex-[0_0_calc(100%/7)] xl:flex-[0_0_calc(100%/9)] border-r border-black/10"
                    >
                      <div className="w-17.5 sm:w-21.25 md:w-18.75 lg:w-21.25 2xl:w-27.5 3xl:w-31.25 h-auto aspect-200/50 mx-auto block">
                        <Image
                          src={item?.partnerImage?.url}
                          alt={item?.partnerImage?.alternativeTxt}
                          width={200}
                          height={35}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
