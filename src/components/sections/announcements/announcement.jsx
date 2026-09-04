import Link from "next/link";
import Image from "next/image";
import { Heading } from "@/components/ui/heading";

export default function Announcement({ data }) {
  return (
    <section className="w-full h-auto py-10 sm:py-15 lg:py-20 2xl:py-25 3xl:py-30 block">
      <div className="container">
        <div className="w-full h-auto mb-6.25 lg:mb-7.5 2xl:mb-10 3xl:mb-15">
          <Heading className="mb-0">{data?.title}</Heading>
        </div>
        <div className="w-full h-auto block">
          {data?.announcements?.map((item) => (
            <div
              key={item?.id}
              className="w-full h-auto py-2.5 sm:py-3.75 3xl:py-5 not-last:border-b border-black/10"
            >
              <div
                className={`group [--image-size:130px] sm:[--image-size:200px] lg:[--image-size:230px] 2xl:[--image-size:270px] 3xl:[--image-size:340px] w-full h-full flex flex-wrap items-center`}
              >
                <div className="w-(--image-size) h-auto aspect-340/190 rounded-[5px] lg:rounded-[15px] 2xl:rounded-[20px] overflow-hidden block shrink-0">
                  <Image
                    src={item?.announcement_image?.url}
                    width={340}
                    height={190}
                    alt={
                      item?.announcement_image?.alternativeText ||
                      "Announcement"
                    }
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="w-[calc(100%-var(--image-size))] h-auto pl-2.5 lg:pl-10 2xl:pl-12.5 3xl:pl-16.25 py-1">
                  <div className="w-full h-auto sm:mb-5 lg:mb-7.5 2xl:mb-10 3xl:mb-12.5">
                    <div className="lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl leading-tight font-bold text-[#212121] dark:text-white mb-1 line-clamp-1 transition-colors duration-500 group-hover:!text-(--basecolor2)">
                      {item?.title}
                    </div>
                    <div className="text-sm 2xl:text-base 3xl:text-lg leading-normal font-normal text-[#4A5565] dark:text-white sm:max-w-[95%] mb-2 line-clamp-1 transition-colors duration-500 group-hover:!text-(--basecolor2)">
                      {item?.description}
                    </div>
                  </div>
                  <Link
                    href={item?.link}
                    className="text-sm 3xl:text-base leading-normal font-bold uppercase bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit transition-opacity duration-500 hover:opacity-50"
                  >
                    Read More &gt;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 sm:mt-15 lg:mt-17.5 2xl:mt-22.5 3xl:mt-27.5 flex items-center justify-center">
          <button className="group/button inline-flex shrink-0 items-center justify-center rounded-sm border bg-clip-padding outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 text-[12px] 2xl:text-[14.4px] 3xl:text-[18px] leading-none font-bold whitespace-nowrap text-white bg-linear-to-r from-(--basecolor) to-(--basecolor2) text-white border-transparent hover:bg-primary/80 h-[34px] 2xl:h-[40px] 3xl:h-[50px] gap-2 2xl:gap-4 3xl:gap-5 px-3 2xl:px-4 3xl:px-5 transition-colors duration-300 ease-in-out hover:from-(--basecolor2) hover:to-(--basecolor)">
            Load More
            <Image
              src="/images/icon-btn.svg"
              alt="home-btn"
              width={15}
              height={15}
              className="size-3.75"
              data-icon="inline-end"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
