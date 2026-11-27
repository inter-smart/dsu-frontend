import Link from "next/link";
import Image from "next/image";
import { MapPin, GraduationCap } from "lucide-react";
import { safeHref } from "@/lib/utils";
import { ShineBorder } from "@/components/ui/shine-border";

const VENUE = "Bengaluru";
const COLLEGE_NAME = "Dayananda Sagar University";

export default function NewsCard({ item }) {
  return (
    <div className="group w-full h-full bg-linear-to-b from-[#FFF8EE]/50 to-[#FFF3E0]/50 dark:bg-none dark:bg-white/5 rounded-md 2xl:rounded-[10px] overflow-hidden flex flex-col relative z-0">
      <ShineBorder shineColor={["#909191"]} className="hidden dark:block" />
      <div className="w-full h-auto block relative z-0">
        <div className="w-full h-auto aspect-560/340 mb-7.5 2xl:mb-10 3xl:mb-12.5 border-b border-[#909191] overflow-hidden block bg-gray-200 dark:bg-white/10">
          {item?.path && (
            <Image
              src={item.path}
              width={563}
              height={340}
              alt={item?.title || "News"}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
            />
          )}
        </div>

        {/* Date badge (bottom left) */}
        <div className="w-auto h-auto p-[10px_12px] lg:p-[10px_12px] 2xl:p-[15px_15px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) mx-5 lg:mx-5 2xl:mx-6.25 3xl:mx-7.5 rounded-md 2xl:rounded-[10px] overflow-hidden flex flex-col items-center justify-center absolute z-1 inset-[auto_auto_0_0]">
          <span className="text-lg lg:text-lg 2xl:text-2xl 3xl:text-[28px] leading-normal font-semibold text-white">
            {item?.date}
          </span>
          <span className="text-[11px] 2xl:text-[13px] 3xl:text-sm leading-normal font-normal text-white">
            {item?.year}
          </span>
        </div>

        {/* College name tag: stays clear of the date badge, long names are cut with an ellipsis */}
        <div className="absolute z-1 right-3 bottom-10.5 2xl:right-4 2xl:bottom-13 3xl:bottom-15.5 max-w-[calc(100%-125px)] 2xl:max-w-[calc(100%-145px)] 3xl:max-w-[calc(100%-165px)] flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 2xl:pl-2 2xl:pr-3 2xl:py-1.5 rounded-full bg-white/85 dark:bg-[#212121]/90 shadow-[0_2px_10px_rgba(0,0,0,0.18)] backdrop-blur-sm">
          <span className="size-4.5 2xl:size-6 shrink-0 rounded-full bg-linear-to-r from-(--basecolor) to-(--basecolor2) flex items-center justify-center">
            <GraduationCap aria-hidden="true" className="size-2.5 2xl:size-3.5 text-white" />
          </span>
          <span className="text-[11px] 2xl:text-[13px] 3xl:text-sm leading-normal font-semibold text-[#212121] dark:text-white truncate">
            {COLLEGE_NAME}
          </span>
        </div>
      </div>

      <div className="w-full h-full p-[12px_20px_16px] sm:p-[15px_25px] lg:p-[10px_20px_16px] 2xl:p-[15px_25px_20px] 3xl:p-[20px_30px_24px] flex flex-col justify-between">
        <h3 className="text-base lg:text-[15px] 2xl:text-lg 3xl:text-[23px] leading-snug 2xl:leading-normal font-bold line-clamp-3 text-[#212121] dark:text-white w-full mb-4 lg:mb-4 2xl:mb-5 3xl:mb-7.5">
          {item?.title}
        </h3>

        {/* Read More (left) and venue (right), separated by a divider */}
        <div className="w-full h-auto pt-3 lg:pt-3 2xl:pt-4 3xl:pt-5 border-t border-[#909191]/30 flex items-center justify-between gap-3">
          <Link
            href={safeHref(item?.link, "/news-events")}
            className="shrink-0 text-[13px] 2xl:text-sm 3xl:text-[15px] leading-normal font-bold uppercase bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit transition-opacity duration-500 hover:opacity-50"
          >
            Read More {" > "}
          </Link>
          <span className="min-w-0 max-w-[60%] flex items-center justify-end gap-1.5 text-[12px] 2xl:text-[13px] 3xl:text-sm leading-normal font-semibold bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit dark:text-gray-300">
            <MapPin
              aria-hidden="true"
              className="size-3.5 2xl:size-[18px] shrink-0 text-(--basecolor2)"
            />
            <span className="line-clamp-1 text-right">{VENUE}</span>
          </span>
        </div>
      </div>
    </div>
  );
}