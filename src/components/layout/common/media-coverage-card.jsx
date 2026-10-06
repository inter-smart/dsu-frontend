import Link from "next/link";
import Image from "next/image";

export default function MediaCoverageCard({ item }) {
  return (
    <Link
      href={item?.link || "#!"}
      className="group w-full h-full bg-linear-to-b from-[#FFF8EE]/50 to-[#FFF3E0]/50 dark:bg-none dark:bg-white/5 rounded-md 2xl:rounded-[10px] overflow-hidden flex flex-col border border-black/5"
    >
      <div className="w-full h-auto aspect-564/222 overflow-hidden block">
        <Image
          src={item?.path}
          width={564}
          height={222}
          alt={item?.title || "Media coverage"}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="w-full h-auto p-[20px_25px_25px] 2xl:p-[22px_28px_28px] 3xl:p-[27px_29px_33px] flex flex-col justify-between grow">
        <div>
          <div className="text-[11px] 2xl:text-[12.5px] 3xl:text-[14.6px] leading-normal font-bold uppercase text-[#4A5565] dark:text-gray-300 mb-2.5 2xl:mb-3">
            {item?.source} {item?.source && item?.date ? "|" : ""} {item?.date}
          </div>
          <div className="text-base 2xl:text-lg 3xl:text-[23px] leading-normal font-bold text-[#212121] dark:text-white">
            {item?.title}
          </div>
        </div>
        <span className="mt-5 3xl:mt-7.5 text-sm 3xl:text-[15px] leading-normal font-bold uppercase bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit transition-opacity duration-500 group-hover:opacity-50">
          Read Article {" > "}
        </span>
      </div>
    </Link>
  );
}
