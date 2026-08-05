"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Hero({ data }) {
  const [emblaRef] = useEmblaCarousel();
  const [emblaItemRef] = useEmblaCarousel();
  return (
    <section className="w-full h-[768px] lg:h-screen block relative z-0">
      <div className="w-full overflow-hidden relative" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom">
          {data.hero.map((slide, slideIdx) => (
            <div key={slide.id || slideIdx} className="flex-[0_0_100%] min-w-0">
              {/* h-[calc(100vh - var(--header-y))] */}
              <div className="w-full h-[768px] lg:h-screen screen flex flex-col justify-end relative z-0 pt-(--header-y) pb-[50px] sm:pb-[70px] xl:pb-[91px] 2xl:pb-[110px] 3xl:pb-[135px]">
                <Image
                  src={slide.poweredBy?.url}
                  alt={slide.poweredBy?.alternativeText || "hero image"}
                  fill
                  sizes="100vw"
                  className="object-cover -z-1"
                />
                <div className="container">
                  <div className="flex flex-wrap flex-row gap-10 justify-between">
                    <div className="w-full max-w-[468px] xl:max-w-[548px] 2xl:max-w-[656px] 3xl:max-w-[820px]">
                      <div className="flex flex-col gap-[10px] 2xl:gap-[15px] 3xl:gap-[20px]">
                        <Image
                          src={"/images/logo-nvidea.svg"}
                          alt="logo-nvidea"
                          width={150}
                          height={28}
                          className="w-[100px] 2xl:w-[120px] 3xl:w-[150px] object-contain hover:scale-110 transition-transform"
                        />
                        <div className="text-[32px] xl:text-[40px] 2xl:text-[48px] 3xl:text-[60px] leading-none font-bold text-white">
                          {slide.title}
                        </div>
                        <div 
                          className="text-[12px] 2xl:text-[14.4px] 3xl:text-[18px] leading-none font-normal tracking-tight text-white"
                          dangerouslySetInnerHTML={{ __html: slide.description }}
                        />
                        <div className="flex gap-[10px] 2xl:gap-[13px] 3xl:gap-[16px]">
                          <Link
                            href="#"
                            className={buttonVariants({
                              variant: "secondary",
                              size: "default",
                            })}
                          >
                            Explore Centres of Excellence
                            <Image
                              src="/images/icon-btn.svg"
                              alt="home-btn"
                              width={15}
                              height={15}
                              className="size-[15px]"
                            />
                          </Link>
                          <Link
                            href="#"
                            className={buttonVariants({
                              variant: "default",
                              size: "default",
                            })}
                          >
                            Apply Now
                            <Image
                              src="/images/icon-btn.svg"
                              alt="home-btn"
                              width={15}
                              height={15}
                              className="size-[15px]"
                              data-icon="inline-end"
                            />  
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="w-full overflow-hidden" ref={emblaItemRef}>
                        <div className="flex touch-pan-y touch-pinch-zoom">
                          {data.heroNavigation.map((item, idx) => (
                            <div
                              key={"emblaItem" + idx}
                              className="flex-[0_0_100%] lg:flex-[0_0_145px] min-w-0 p-[3px] 2xl:p-[5px] 3xl:p-[7px]"
                            >
                              <Link
                                href={item.url}
                                className="w-full h-full rounded-[34px] bg-black/10 backdrop-blur-[2px] shadow-[0_1px_1px_rgba(255,255,255,1)] flex flex-col gap-[10px] 2xl:gap-[15px] 3xl:gap-[20px] p-[15px_10px] 2xl:p-[20px_15px] 3xl:p-[25px_20px]"
                              >
                                <Image
                                  src={item.icon?.url}
                                  alt={item.icon?.alternativeText || "icon"}
                                  width={50}
                                  height={50}
                                  className="size-[45px] object-contain mx-auto hover:scale-110 transition-transform"
                                  data-icon="inline-end"
                                />
                                <div className="text-[13px] 2xl:text-[16px] 3xl:text-[20px] leading-tight font-normal tracking-tight text-center text-white">
                                  {item.label}
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="absolute z-1 inset-y-0 left-[2%]">
          <Image
            src="/images/left-arrow-button.svg"
            alt="left-arrow-button"
            width={35}
            height={18}
            className="size-[35px]"
          />
        </button>
        <button className="absolute z-1 inset-y-0 right-[2%]">
          <Image
            src="/images/right-arrow-button.svg"
            alt="right-arrow-button"
            width={35}
            height={18}
            className="size-[35px]"
          />
        </button>
      </div>
      <div className="w-full bg-linear-to-r from-[#DC2626]/80 to-[#F97316]/80 absolute z-1 bottom-0 inset-x-0 py-[10px] 2xl:py-[14px] 3xl:py-[18px]">
        <div className="container">
          <div className="flex items-center gap-10">
            <Image
              src="/images/icon-marquee.svg"
              alt="icon-marquee"
              width={28}
              height={28}
              className="size-[24px] 2xl:size-[28px] 3xl:size-[35px] object-contain"
            />
            <Marquee pauseOnHover>
              {data.marqueeText.map((item, idx) => (
                <Link
                  key={"marqueeText" + idx}
                  href={item.url}
                  className="text-[13px] 2xl:text-[16px] 3xl:text-[20px] leading-tight font-normal tracking-tight text-center text-white flex items-center gap-5 px-5"
                >
                  <Image
                    src="/images/hero-marq-icon.svg"
                    alt="hero-marq-icon"
                    width={12}
                    height={12}
                    className="size-[10px] 3xl:size-[12px] object-contain"
                  />
                  {item.label}
                </Link>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
