"use client";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import CountUp from "react-countup";
import { Fancybox } from "@fancyapps/ui";

const local_data = {
  campus_info: {
    sub_title: "Campus Life",
    title: {
      text: "Campus",
      highlight: "Life",
    },
    description:
      "A dynamic campus environment that supports academic growth, creativity, & overall well-being.",
  },
  info_grid_list: [
    {
      title: "Campus Life",
      media: {
        type: "image",
        url: "/images/home-campus-life-2.webp",
      },
      icon: {
        url: "/images/home-campus-icon-1.svg",
        alt: "Campus Life Icon",
      },
    },
    {
      title: "Modern Infrastructure",
      media: {
        type: "image",
        url: "/images/home-campus-life-4.webp",
      },
      icon: {
        url: "/images/home-campus-icon-4.svg",
        alt: "Campus Life Icon",
      },
    },
    {
      title: "Sports & Recreation",
      media: {
        type: "video",
        url: "/videos/home-campus-life-1.mp4",
        poster: "/images/home-thumbnail-poster.webp",
      },
      icon: {
        url: "/images/home-campus-icon-2.svg",
        alt: "Campus Life Icon",
      },
    },
    {
      title: "Hostel & Residential",
      media: {
        type: "image",
        url: "/images/home-campus-life-3.webp",
      },
      icon: {
        url: "/images/home-campus-icon-3.svg",
        alt: "Campus Life Icon",
      },
    },
    {
      title: "Clubs & Student Activities",
      media: {
        type: "image",
        url: "/images/home-campus-life-5.webp",
      },
      icon: {
        url: "/images/home-campus-icon-5.svg",
        alt: "Campus Life Icon",
      },
    },
  ],
  counter_info: {
    counter_description:
      "A future-ready campus designed to spark learning, creativity, and student well-being.",
    counter_list: [
      {
        id: 1,
        label: "Clubs",
        value: 50,
        symbol: "+",
      },
      {
        id: 2,
        label: "Sports Facilities",
        value: 10,
        symbol: "+",
      },
      {
        id: 3,
        label: "Residents",
        value: 5000,
        symbol: "+",
      },
      {
        id: 4,
        label: "Annual Events",
        value: 200,
        symbol: "+",
      },
    ],
  },
};

export default function CampusLife({ data = local_data }) {
  return (
    <section className="w-full h-auto sm:py-15 lg:py-17.5 2xl:py-20 3xl:py-25 bg-[#F4F6FA] block">
      <div className="container">
        <div className="[--gap:10px] xl:[--gap:15px] 3xl:[--gap:20px] w-full h-auto grid xl:grid-cols-2 gap-(--gap)">
          <div className="w-full h-auto gap-(--gap) flex  xl:flex-col">
            <div className="sm:[--width:220px] xl:[--width:270px] 2xl:[--width:320px] 3xl:[--width:400px] w-full h-auto sm:p-2.5 2xl:p-3.75 3xl:p-5 bg-white rounded-[7px] 2xl:rounded-[10px] flex flex-wrap xl:items-center">
              <div className="w-(--width)">
                <CampusCard item={data?.info_grid_list?.[0]} />
              </div>
              <div className="w-[calc(100%-var(--width))] lg:pl-6.25 2xl:pl-7.5 3xl:pl-10">
                <div className="[--before-size:20px] 2xl:[--before-size:25px] text-[14px] 2xl:text-[16px] 3xl:text-[20px] leading-[1.1] font-normal text-[#F57F2A] w-fit h-auto pl-[calc(var(--before-size)+5px)] 2xl:pl-[calc(var(--before-size)+10px)] mb-2.5 relative z-0 before:content-[''] before:w-(--before-size) before:h-0.5 2xl:before:h-1.25 before:my-auto before:bg-gradient-to-r before:from-[#DC2626] before:to-[#F97316] before:absolute before:z-1 before:inset-[0_auto_0_0]">
                  {data?.campus_info?.sub_title}
                </div>
                <div className="lg:text-[40px] xl:text-[54px] 2xl:text-[64px] 3xl:text-[80px] leading-[1] font-bold text-[#212121] lg:mb-6.25 2xl:mb-7.5 3xl:mb-10">
                  {data?.campus_info?.title?.text}
                  <span className="italic bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent w-fit pr-1.25 block">
                    {data?.campus_info?.title?.highlight}
                  </span>
                </div>
                <div className="text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-[1.4] font-normal text-[#4A5565]">
                  {data?.campus_info?.description}
                </div>
              </div>
            </div>
            <div>
              <CampusCard
                item={data?.info_grid_list?.[1]}
                className="lg:h-68.75 2xl:h-82.5 3xl:h-105 before:h-[50%] before:opacity-100"
              />
            </div>
          </div>
          <div className="w-full h-auto grid lg:grid-cols-4 xl:grid-cols-2 gap-(--gap)">
            <div>
              <CampusCard item={data?.info_grid_list?.[2]} />
            </div>
            <div>
              <CampusCard item={data?.info_grid_list?.[3]} />
            </div>
            <div className="w-full h-full xl:aspect-[425/400] lg:p-[20px_20px_40px_25px] 2xl:p-[30px_20px_40px_25px] 3xl:p-[40px_25px_60px_35px] bg-gradient-to-r from-[#9C2727] to-[#F97316]/80 rounded-[10px] overflow-hidden">
              <div className="text-[13px] 2xl:text-[15px] 3xl:text-[18px] leading-[1.7] font-normal text-white w-[95%] lg:mb-5 2xl:mb-7.5 3xl:mb-10 line-clamp-3">
                {data?.counter_info?.counter_description}
              </div>
              <div className="w-full h-auto flex flex-wrap">
                {data?.counter_info?.counter_list
                  ?.slice(0, 4)
                  .map((item, index) => (
                    <div
                      key={item?.id}
                      className={`border-[#D2D2D280]/50 ${index < 2 ? "lg:pb-5 3xl:pb-7.5 border-b" : "lg:pt-5 3xl:pt-7.5"} ${index % 2 === 0 ? "pr-5 border-r w-1/2 xl:w-[43%]" : "lg:pl-5 3xl:pl-7.5 w-1/2 xl:w-[57%]"}`}
                    >
                      <div className="w-full h-full block">
                        <div className="text-[24px] sm:text-[32px] lg:text-[26px] 2xl:text-[32px] 3xl:text-[40px] leading-[1.2] font-medium text-white mb-1.25">
                          <CountUp
                            start={0}
                            end={item?.value || 0}
                            duration={2.5}
                            separator=","
                            suffix={item?.symbol || "+"}
                            enableScrollSpy={true}
                          />
                        </div>
                        <div className="text-[10px] sm:text-[14px] 2xl:text-[15px] 3xl:text-[21px] leading-[1.1] font-normal text-white">
                          {item?.label}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div>
              <CampusCard item={data?.info_grid_list?.[4]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CampusCard({ item, className }) {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='campus']");
  }, []);

  return (
    <Link
      href={item?.media?.url}
      data-fancybox="campus"
      data-caption={item?.title}
      data-type={item?.media?.type === "video" ? "html5video" : "image"}
      className={cn(
        "w-full h-full rounded-[7px] 2xl:rounded-[10px] overflow-hidden block relative z-0 before:content-[''] before:w-full before:h-full before:bg-gradient-to-t before:from-[#000000] before:to-[rgba(0,0,0,0)] before:opacity-50 before:absolute before:z-1 before:inset-[auto_0_0_0]",
        className,
      )}
    >
      <div className="w-full h-full aspect-[425/400] overflow-hidden">
        {item?.media?.type === "video" ? (
          <video
            src={item?.media?.url}
            poster={item?.media?.poster}
            className="w-full h-full object-cover"
            playsInline
            muted
          />
        ) : (
          <Image
            src={item?.media?.url}
            alt={item?.title || "Campus Life Image"}
            width={425}
            height={400}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="[--icon-size:20px] 2xl:[--icon-size:25px] 3xl:[--icon-size:30px] w-full h-auto lg:p-5 3xl:p-6.25 flex items-center absolute z-1 inset-[auto_auto_0_0]">
        <div className="w-(--icon-size) h-auto aspect-square flex items-center justify-center">
          <Image
            src={item?.icon?.url}
            alt={item?.icon?.alt || "Campus Life Icon"}
            width={30}
            height={30}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="sm:text-[16px] 2xl:text-[20px] 3xl:text-[25px] leading-normal font-medium text-white w-[calc(100%-var(--icon-size))] pl-1.25 2xl:pl-2.5">
          {item?.title}
        </div>
      </div>
    </Link>
  );
}
