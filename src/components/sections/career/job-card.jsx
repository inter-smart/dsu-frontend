import Image from "next/image";
import Link from "next/link";

export default function JobCard({ job, onViewDetail }) {
  return (
    <div className="w-full h-full bg-white dark:bg-white/5 border border-black/10 rounded-md 2xl:rounded-[10px] p-5 xl:p-6.25 2xl:p-7.5 flex flex-col">
      <h3 className="text-xl xl:text-2xl 2xl:text-[28px] leading-tight font-bold text-[#212121] dark:text-white mb-1.5 xl:mb-2">
        {job?.title}
      </h3>
      <div className="text-sm xl:text-base leading-normal font-semibold text-[#212121] dark:text-gray-200 mb-3.75 xl:mb-5">
        {job?.department}
      </div>
      <ul className="flex flex-col gap-1.5 xl:gap-2 mb-5 xl:mb-6.25 grow">
        {job?.stats?.map((stat, index) => (
          <li key={index} className="flex items-center gap-2 text-sm xl:text-base text-[#4A5565] dark:text-gray-300">
            <Image
              src="/images/icon-chevron-bullet.svg"
              alt=""
              width={16}
              height={16}
              className="size-3.5 xl:size-4 shrink-0"
            />
            {stat}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2.5 xl:gap-3">
        <button
          type="button"
          onClick={() => onViewDetail?.(job)}
          className="h-9 xl:h-10 px-4 xl:px-5 rounded-[4px] border border-(--basecolor) text-xs xl:text-sm font-bold uppercase text-[#212121] dark:text-white transition-colors duration-300 hover:bg-(--basecolor)/5"
        >
          View Detail
        </button>
        <Link
          href={`/career/apply?job=${job?.slug}`}
          className="h-9 xl:h-10 px-4 xl:px-5 rounded-[4px] flex items-center justify-center bg-linear-to-r from-(--basecolor) to-(--basecolor2) text-xs xl:text-sm font-bold uppercase text-white transition-opacity duration-300 hover:opacity-90"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}
