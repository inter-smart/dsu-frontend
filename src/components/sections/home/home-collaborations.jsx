"use client";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import { ShineBorder } from "@/components/ui/shine-border";
import { useEffect, useCallback, useState, useRef } from "react";

export default function HomeCollaborations({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pulsingIndex, setPulsingIndex] = useState(0);
  const pulseRef = useRef(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, duration: 20 }, [
    Fade(),
  ]);

  useEffect(() => {
    emblaApi?.scrollTo(activeIndex, true);
  }, [emblaApi, activeIndex]);

  const onEmblaSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onEmblaSelect);
    emblaApi.on("reInit", onEmblaSelect);
    return () => {
      emblaApi.off("select", onEmblaSelect);
      emblaApi.off("reInit", onEmblaSelect);
    };
  }, [emblaApi, onEmblaSelect]);

  useEffect(() => {
    if (!data?.countries?.length) return;
    pulseRef.current = setInterval(
      () => setPulsingIndex((prev) => (prev + 1) % data.countries.length),
      900,
    );
    return () => clearInterval(pulseRef.current);
  }, [data?.countries?.length]);

  return (
    <section className="w-full h-auto py-8.75 sm:py-[50px_30px] lg:py-[90px_40px] 2xl:py-[110px_55px] 3xl:py-[140px_70px] block overflow-hidden">
      <div className="container">
        <div className="w-full h-auto sm:rounded-[7px] 3xl:rounded-[10px] overflow-hidden flex flex-wrap">
          <div className="w-full lg:w-1/2 h-auto">
            <div className="w-full h-full p-[20px_10px] sm:p-[40px_20px_30px_20px] 2xl:p-[50px_20px_40px_20px] 3xl:p-[70px_30px_50px_30px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) overflow-hidden block">
              <div className="w-full h-auto mb-1.25 sm:mb-5 lg:mb-7.5 2xl:mb-10 3xl:mb-12.5">
                <div className="text-[31px] lg:text-[38px] 2xl:text-[45px] 3xl:text-[58px] leading-[1.2] font-bold text-white sm:max-w-[85%] mb-2.5 sm:mb-3.75 2xl:mb-5 3xl:mb-7.5">
                  {data?.title}
                </div>
                <div className="text-sm lg:text-[13px] 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-normal text-white">
                  {data?.description}
                </div>
              </div>
              <div className="w-full h-auto block relative z-0">
                <div className="w-full h-auto aspect-740/400 overflow-hidden block">
                  <Image
                    src={"/images/home-collaboration-map.svg"}
                    alt={"Collaboration Map"}
                    width={740}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                {data?.countries?.map((item, index) => (
                  <button
                    key={item?.id}
                    onClick={() => setActiveIndex(index)}
                    aria-label={"Select " + item.name}
                    className={`group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-500 cubic-bezier(0.34,1.56,0.64,1) ${
                      activeIndex === index
                        ? "z-20 scale-[1.5]"
                        : pulsingIndex === index
                          ? "z-10 scale-[1.1]"
                          : "z-10 scale-100"
                    }`}
                    style={{
                      left: item?.position?.axisX,
                      top: item?.position?.axisY,
                    }}
                  >
                    {activeIndex === index && (
                      <>
                        <span className="w-auto h-auto bg-white/50 rounded-full pointer-events-none absolute inset-0 animate-[collab-wave_1.8s_cubic-bezier(0.215,0.61,0.355,1)_infinite]" />
                        <span className="w-auto h-auto bg-white/35 rounded-full pointer-events-none absolute inset-0 animate-[collab-wave_1.8s_cubic-bezier(0.215,0.61,0.355,1)_0.6s_infinite]" />
                        <span className="w-auto h-auto bg-white/20 rounded-full pointer-events-none absolute inset-0 animate-[collab-wave_1.8s_cubic-bezier(0.215,0.61,0.355,1)_1.2s_infinite]" />
                      </>
                    )}
                    <div
                      className={`w-4.5 sm:w-6.25 lg:w-7 2xl:w-8.75 3xl:w-10 h-auto aspect-square rounded-full overflow-hidden transition-[border-color,box-shadow] duration-400 ease-in-out ${
                        activeIndex === index &&
                        "border sm:border-2 2xl:border-3 border-[#FDC72F]"
                      }`}
                      style={{
                        animation: `collab-breathe ${[1.8, 2.4, 1.5, 2.9, 2.1, 1.6, 2.7, 2.3][index % 8]}s ease-in-out infinite`,
                      }}
                    >
                      <img
                        src={item?.flagImage?.url}
                        alt={item?.flagImage?.alternativeText}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className={`w-auto h-auto mb-2 absolute bottom-full left-1/2 -translate-x-1/2 opacity-0 whitespace-nowrap pointer-events-none transition-opacity duration-200 group-hover:opacity-100 ${activeIndex === index && "hidden"}`}
                    >
                      <div className="text-[10px] leading-normal font-medium text-white p-[5px_10px] bg-black/80 rounded-md backdrop-blur-sm">
                        {item?.title}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <div className="w-full h-auto mt-1.25 sm:mt-5 2xl:mt-6.25 3xl:mt-7.5 flex lg:justify-between">
                {data?.statistics?.map((item) => (
                  <div
                    key={item?.id}
                    className="w-auto h-auto shrink-0 px-1.75 sm:px-2.5 3xl:px-3.75 border-r border-white/10 last:border-0 max-sm:flex-none max-lg:flex-1"
                  >
                    <div className="w-auto h-full text-center flex flex-col justify-between">
                      {item?.value && (
                        <div className="text-xs xl:text-base 2xl:text-xl 3xl:text-[25px] leading-[1.1] font-medium text-white mb-1.25">
                          <CountUp
                            start={0}
                            end={item?.value}
                            duration={2.5}
                            suffix={item?.suffix ?? "+"}
                            enableScrollSpy
                            scrollSpyOnce
                          />
                        </div>
                      )}
                      {item?.title && (
                        <div className="text-xs xl:text-base 2xl:text-xl 3xl:text-[25px] leading-[1.1] font-medium text-white mb-1.25 lg:mb-2.5">
                          {item?.title}
                        </div>
                      )}
                      <div className="text-[7px] sm:text-[8px] xl:text-[10px] 2xl:text-[13px] 3xl:text-base leading-[1.1] font-normal text-white">
                        {item?.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-auto">
            <div
              className="w-full h-full bg-white dark:bg-black overflow-hidden"
              ref={emblaRef}
            >
              <div className="flex h-full touch-pan-y">
                {data?.countries?.map((item, index) => (
                  <div
                    key={item?.id}
                    className="min-w-0 flex-[0_0_100%] h-full"
                    aria-hidden={index !== activeIndex}
                  >
                    <div className="w-full h-full p-[30px_25px_20px_15px] sm:p-[40px_35px_30px_20px] 2xl:p-[50px_40px_30px_20px] 3xl:p-[60px_50px_40px_30px] relative z-0 flex flex-col justify-between">
                      <div className="w-full h-full absolute -z-1 inset-0 before:content-[''] before:w-full before:h-1/2 before:bg-linear-to-b before:from-[#090909] before:to-[#0B2148]/0 before:absolute before:z-1 before:inset-[0_0_auto_0] after:content-[''] after:w-full after:h-[80%] after:bg-linear-to-t after:from-[#090909] after:to-[#0B2148]/0 after:opacity-50 after:absolute after:z-1 after:inset-[auto_0_0_0]">
                        <Image
                          src={item?.featuredImage?.url}
                          alt={item?.featuredImage?.alternativeText}
                          width={870}
                          height={830}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-full h-auto max-sm:mb-2.5 max-lg:mb-10 block">
                        <div className="[--flag-icon-size:25px] sm:[--flag-icon-size:35px] 2xl:[--flag-icon-size:40px] 3xl:[--flag-icon-size:50px] w-full h-auto mb-2.5 2xl:mb-3.75 flex items-center">
                          <div className="w-(--flag-icon-size) h-auto aspect-square border-2 border-[#FDC72F] rounded-full overflow-hidden block">
                            <Image
                              src={item?.flagImage?.url}
                              alt={item?.flagImage?.alternativeText}
                              width={40}
                              height={40}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="text-[21px] lg:text-2xl 2xl:text-[28px] 3xl:text-[35px] leading-[1.1] font-bold text-white w-[clac(100%-var(--flag-icon-size))] pl-1.75 sm:pl-2.5 2xl:pl-3.75">
                            {item?.title}
                          </div>
                        </div>
                        <div className="text-sm lg:text-[13px] 2xl:text-[15px] 3xl:text-lg leading-[1.2] font-normal text-white">
                          {item?.description}
                        </div>
                      </div>
                      <div className="w-full h-auto p-3.75 sm:p-5 lg:p-7.5 3xl:p-10 bg-black/20 sm:rounded-[10px] overflow-hidden block relative z-0">
                        <ShineBorder
                          borderWidth={1.5}
                          shineColor={["#909191"]}
                        />
                        <div className="text-base lg sm:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl leading-[1.1] font-bold text-white mb-3.75 lg:mb-5 2xl:mb-6.25 3xl:mb-7.5">
                          Partner Universities
                        </div>
                        <div className="w-full h-auto gap-[10px_5px] 2xl:gap-[15px_10px] 3xl:gap-[20px_10px] flex flex-wrap">
                          {item?.partners?.slice(0, 5).map((items, index) => (
                            <span
                              key={index}
                              className="text-[9px] sm:text-[11px] 2xl:text-[13px] 3xl:text-base leading-[1.2] font-semibold text-white p-[5px_10px] sm:p-[12px_20px] 3xl:p-[15px_30px] bg-[#D9D9D9]/10 sm:rounded-[10px] 2xl:rounded-[15px] backdrop-blur-[45px] overflow-hidden inline"
                            >
                              {items}
                            </span>
                          ))}
                          {(item?.partners?.length ?? 0) > 5 && (
                            <Link
                              href={item?.moreLink}
                              aria-label="More"
                              className="text-[10px] sm:text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.2] font-semibold text-white p-[5px_10px] sm:p-[10px_20px] 2xl:p-[10px_25px] 3xl:p-[15px_30px] border border-white sm:rounded-[10px] 2xl:rounded-[15px] overflow-hidden transition-colors duration-300 hover:bg-(--basecolor2) hover:border-(--basecolor2)"
                            >
                              + {(item.partners?.length ?? 0) - 5} More
                            </Link>
                          )}
                        </div>
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
