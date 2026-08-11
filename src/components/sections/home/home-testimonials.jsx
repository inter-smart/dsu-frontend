"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import { Text } from "@/components/ui/text";
import { Fancybox } from "@fancyapps/ui";
import Autoplay from "embla-carousel-autoplay";
import { Heading } from "@/components/ui/heading";
import useEmblaCarousel from "embla-carousel-react";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const local_data = {
  title: "Celebrating Student Success",
  description: "Achievements that inspire the future generation.",
  statistics: [
    {
      id: 1,
      value: 95,
      suffix: "% Placed",
      label: "Placement Success Stories",
    },
    {
      id: 2,
      value: 10000,
      suffix: "+ Alumni",
      label: "Alumni Achievements",
    },
    {
      id: 3,
      value: 50,
      suffix: "+ Startups",
      label: "Student-led startups",
    },
    {
      id: 4,
      value: 100,
      suffix: "+ Recruiters",
      label: "Esteemed Organisations",
    },
  ],
  successStories: [
    {
      id: 1,
      media: {
        type: "video",
        url: "/videos/home-testimonial-1.mp4",
        alternativeText: "Success Story",
      },
      avatar: {
        url: "/images/home-testimonial-avatar-1.jpg",
        alternativeText: "Avatar",
      },
      name: "Arjun Menon",
      designation: "Consultant at McKinsey",
      company: "B.Tech CSE, 2023",
    },
  ],
};

export default function HomeTestimonials({ data = local_data }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    Fancybox.bind("[data-fancybox='testimonials']", {
      Hash: false,
    });

    return () => {
      Fancybox.unbind("[data-fancybox='testimonials']");
      Fancybox.close();
    };
  }, []);

  return (
    <section className="w-full h-auto py-[50px_90px] block">
      <div className="container">
        <div className="w-full h-auto mb-5 sm:mb-10 lg:mb-12.5 2xl:mb-15 3xl:mb-10 text-center">
          <Heading className="mb-1.25 xl:mb-2.5 3xl:mb-2.5">
            {data?.title}
          </Heading>
          <Text>{data?.description}</Text>
        </div>
        <div className="w-full h-auto gap-6.25 grid grid-cols-4">
          {data?.statistics?.map((item) => (
            <div key={item?.id} className="w-full h-auto">
              <div className="w-full h-full text-center p-[30px_10px] border border-black/10 rounded-[15px] block">
                <div className="text-[25px] sm:text-[32px] lg:text-[26px] 2xl:text-[32px] 3xl:text-[35px] leading-[1.2] font-bold text-[#212121] mb-1.25">
                  <CountUp
                    start={0}
                    end={item?.value || 0}
                    duration={2.5}
                    separator=","
                    suffix={item?.suffix || "+"}
                  />
                </div>
                <div className="text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-normal text-[#4A5565]">
                  {item?.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="[--slide-gap:15px] w-full h-auto overflow-hidden"
          ref={emblaRef}
        >
          <div className="ml-[calc(var(--slide-gap)*-1)] flex">
            {data?.successStories?.map((item) => (
              <div
                key={item?.id}
                className="min-w-0 flex-[0_0_calc(100%/4)] pl-(--slide-gap)"
              >
                <Link
                  data-fancybox="testimonials"
                  href={item?.media?.url || "#"}
                  data-caption={item?.title || item?.name}
                  data-type={
                    item?.media?.type === "video" ? "html5video" : "image"
                  }
                  className="w-full h-full rounded-[10px] block relative z-0 before:content-[''] before:w-11.25 before:h-auto before:aspect-square before:bg-[url('data:image/svg+xml,%3Csvg%20width=%2243%22%20height=%2243%22%20viewBox=%220%200%2043%2043%22%20fill=%22none%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d=%22M21.5%200C9.62588%200%200%209.62588%200%2021.5C0%2033.3741%209.62588%2043%2021.5%2043C33.3741%2043%2043%2033.3741%2043%2021.5%2043.9874%209.63119%2033.3689%200.0126877%2021.5%200ZM30.5545%2022.185C30.4057%2022.4836%2030.1637%2022.7257%2029.865%2022.8745V22.8821L17.5793%2029.025C16.8206%2029.4041%2015.8983%2029.0965%2015.5191%2028.3377C15.4113%2028.1221%2015.3558%2027.884%2015.3571%2027.6429V15.3572C15.3567%2014.509%2016.0439%2013.8212%2016.8921%2013.8207C17.1307%2013.8206%2017.366%2013.8761%2017.5793%2013.9827L29.865%2020.1256C30.6241%2020.5039%2030.9329%2021.4259%2030.5545%2022.185Z%22%20fill=%22white%22%20fill-opacity=%220.8%22/%3E%3C/svg%3E')] before:bg-contain before:bg-no-repeat before:bg-center before:absolute before:z-1 before:inset-[0_0_auto_auto]"
                >
                  <div className="w-full h-full aspect-420/530 block">
                    {item?.media?.type === "video" ? (
                      <video
                        src={item?.media?.url}
                        poster={item?.media?.poster}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <Image
                        src={item?.media?.url || "/images/placeholder.jpg"}
                        alt={item?.name || item?.title || "Testimonial media"}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div className="w-full h-auto pt-5 border-t border-[#F3F4F633]/20 absolute z-1 inset-[auto_0_0_0] flex flex-wrap">
                    <div className="w-[75%]">
                      <div className="[--avatar-size:70px] w-full h-auto flex items-center">
                        <div className="w-(--avatar-size) h-auto aspect-square rounded-[10px] overflow-hidden block">
                          <Image
                            src={item?.avatar?.url || "/images/placeholder.jpg"}
                            width={70}
                            height={70}
                            alt={item?.name || "Testimonial avatar"}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-[calc(100%-(var(--avatar-size))] pl-2.5">
                          <div className="text-xl leading-[1] font-medium text-white mb-1.25">
                            {item?.name}
                          </div>
                          <div className="text-sm leading-[1] font-normal text-white mb-2.5">
                            {item?.designation}
                          </div>
                          <div className="text-sm leading-[1] font-normal text-white/50">
                            {item?.education}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[25%]">
                      <div className="w-auto h-auto p-2.5 border border-white/10 rounded-[10px] overflow-hidden flex flex-col items-center justify-center">
                        <div className="w-5 h-auto aspect-square mb-2.5 overflow-hidden block">
                          <Image
                            src={item?.badge?.url || "/images/placeholder.jpg"}
                            width={20}
                            height={20}
                            alt={item?.badge?.alternativeText || "Badge Icon"}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-[11px] leading-[1] font-normal text-white">
                          {item?.badge?.title}
                        </div>
                      </div>
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
