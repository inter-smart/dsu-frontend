import Link from "next/link";
import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import NewsCard from "@/components/layout/common/news-card";

export default function NewsEventsDetail({ data }) {
  const getOrdinal = (date) => {
    const num = Number(date);

    if (num % 100 >= 11 && num % 100 <= 13) return "th";

    switch (num % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  return (
    <section className="w-full h-auto py-10 sm:py-[70px_80px] lg:py-[90px_110px] 2xl:py-[110px_130px] 3xl:py-[130px_160px] block">
      <div className="container">
        <div className="[--width:100%] lg:[--width:285px] xl:[--width:330px] 2xl:[--width:390px] 3xl:[--width:500px] w-full h-auto flex flex-wrap">
          <div className="w-(--width) lg:w-[calc(100%-var(--width))] h-auto lg:pr-3.75 2xl:pr-5 3xl:pr-7.5 max-lg:mb-5">
            <div className="group w-full h-auto aspect-1210/665 mb-5 sm:mb-7.5 2xl:mb-10 3xl:mb-12.5 rounded-[5px] sm:rounded-[7px] 2xl:rounded-[10px] overflow-hidden block relative z-0">
              <Image
                src={data?.newsEventsDetailImage?.url}
                alt={
                  data?.newsEventsDetailImage?.alternativeText ||
                  "News & Events"
                }
                width={1210}
                height={665}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />
              <div className="w-fit h-auto aspect-square p-2.5 sm:p-[15px_10px] 2xl:p-[20px_15px] m-2.5 sm:m-[20px_10px] 2xl:m-[30px_15px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) rounded-[5px] sm:rounded-[7px] 2xl:rounded-[10px] overflow-hidden block absolute z-1 inset-[auto_auto_0_0]">
                <div className="text-[10px] sm:text-[13px] 2xl:text-sm 3xl:text-base leading-[1.1] font-normal text-white text-center">
                  <div className="flex items-start justify-center">
                    <span className="text-base sm:text-lg lg:text-[22px] 2xl:text-[26px] 3xl:text-[32px] font-semibold block">
                      {data?.newsEventsDetailDate}
                    </span>
                    <sup className="text-xs sm:text-sm lg:text-xl font-medium leading-none mt-[10px]">
                      {getOrdinal(data?.newsEventsDetailDate)}
                    </sup>
                  </div>
                  {data?.newsEventsDetailMonth}
                </div>
              </div>
            </div>
            <div className="w-full h-auto block">
              <div className="w-full h-auto mb-5 sm:mb-6.25 lg:mb-7.5 2xl:mb-10 3xl:mb-12.5">
                <Heading className="mb-3.75 sm:mb-5 lg:mb-6.25 2xl:mb-8.75">
                  {data?.title}
                </Heading>
                <div className="w-full h-auto space-y-2.5 block">
                  <div className="text-sm sm:text-base lg:text-lg 2xl:text-[23px] 3xl:text-[28px] leading-[1.1] font-medium text-[#212121]">
                    <span className="font-bold pr-1.25">Organized by:</span>
                    {data?.organized?.name}
                  </div>
                  <div className="text-sm sm:text-base lg:text-lg 2xl:text-[23px] 3xl:text-[28px] leading-[1.1] font-medium text-[#212121]">
                    <span className="font-bold pr-1.25">Date:</span>
                    {data?.organized?.date}
                  </div>
                  <div className="text-sm sm:text-base lg:text-lg 2xl:text-[23px] 3xl:text-[28px] leading-[1.1] font-medium text-[#212121]">
                    <span className="font-bold pr-1.25">Time:</span>
                    {data?.organized?.time}
                  </div>
                </div>
              </div>
              <div
                className="typography [&_p]:text-[#4A5565] [&_p]:mb-2.5 sm:[&_p]:mb-3.75 lg:[&_p]:mb-5 2xl:[&_p]:mb-7.5 3xl:[&_p]:mb-10 [&_h2]:mb-5 sm:[&_h2]:mb-6.25 2xl:[&_h2]:mb-8.75 [&_h3]:mb-3.75 2xl:[&_h3]:mb-5"
                dangerouslySetInnerHTML={{
                  __html: data?.content || "",
                }}
              />
              <div className="w-full h-auto block">
                {data?.leadership?.map((items) => (
                  <div
                    key={items?.id}
                    className="w-full h-auto mb-5 sm:mb-7.5 lg:mb-10 2xl:mb-12.5 3xl:mb-17.5"
                  >
                    <div className="w-full h-full block">
                      <div className="text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl leading-[1.1] font-bold text-[#212121] max-sm:mt-5 mb-5 2xl:mb-7.5">
                        {items?.title}
                      </div>
                      {items?.leaders?.map((item) => (
                        <div key={item?.id} className="w-full h-full block">
                          <div className="text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-medium text-black mb-2.5 sm:mb-3.75">
                            {item?.title}
                          </div>
                          <div className="w-full h-auto grid md:grid-cols-2 sm:gap-5 lg:gap-10 2xl:gap-12.5 3xl:gap-17.5 mb-3.75 sm:mb-5 3xl:mb-10">
                            {item?.members?.map((item) => (
                              <div key={item?.id} className="w-auto h-auto">
                                <div className="[--width:120px] sm:[--width:120px] 2xl:[--width:150px] 3xl:[--width:185px] w-full h-full flex items-center">
                                  <div className="w-(--width) h-full overflow-hidden block">
                                    <Image
                                      src={item?.memberImage?.url}
                                      alt={
                                        item?.memberImage?.alternativeText ||
                                        "Member"
                                      }
                                      width={185}
                                      height={185}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="w-[calc(100%-var(--width))] pl-3.75 3xl:pl-5">
                                    <div className="text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-bold text-[#4A5565] mb-3.75">
                                      {item?.name}
                                    </div>
                                    <div
                                      className="text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.6] font-normal text-[#4A5565] mb-3.75"
                                      dangerouslySetInnerHTML={{
                                        __html: item?.designation || "",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="w-full h-auto mb-4">
                            {item?.patronTitle && (
                              <div className="text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-medium text-black mb-3.75">
                                {item?.patronTitle}
                              </div>
                            )}
                            <ul className="list-disc list-inside 2xl:space-y-1.25 3xl:space-y-2.5 text-sm text-[#4A5565]">
                              {item?.patrons?.map((item) => (
                                <li key={item?.id} className="leading-relaxed">
                                  {item?.text}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="typography [&_p]:leading-[1.8] [&_p]:text-[#4A5565] [&_p]:mb-2.5 sm:[&_p]:mb-3.75 2xl:[&_p]:mb-5 3xl:[&_p]:mb-7.5 [&_h2]:mb-3.75 sm:[&_h2]:mb-6.25 2xl:[&_h2]:mb-8.75"
                dangerouslySetInnerHTML={{
                  __html: data?.contentParagraphs || "",
                }}
              />
              <div className="my-5 lg:my-7.5 3xl:my-10 flex items-center">
                <button className="group/button inline-flex shrink-0 items-center justify-center rounded-sm border bg-clip-padding outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 text-[12px] 2xl:text-[14.4px] 3xl:text-[18px] leading-none font-bold whitespace-nowrap text-white bg-linear-to-r from-(--basecolor) to-(--basecolor2) text-white border-transparent hover:bg-primary/80 h-[34px] 2xl:h-[40px] 3xl:h-[50px] gap-2 2xl:gap-4 3xl:gap-5 px-3 2xl:px-4 3xl:px-5 transition-colors duration-300 ease-in-out hover:from-(--basecolor2) hover:to-(--basecolor)">
                  Read More
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
              <div className="[--size:40px] 2xl:[--size:50px] 3xl:[--size:60px] w-full h-auto py-5 2xl:py-7.5 border-y border-black/10 flex items-center justify-between">
                <Link href={"/"} className="group group flex items-center">
                  <div className="w-(--size) h-auto aspect-60/50 p-2.25 2xl:p-3.25 3xl:p-3.75 rounded-[10px] border border-black/20 overflow-hidden flex items-center justify-center transition-colors duration-500 group-hover:border-(--basecolor2) group-hover:bg-(--basecolor2)/10">
                    <Image
                      src={"/images/arrow-left.svg"}
                      alt={"previous"}
                      width={60}
                      height={50}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-normal text-[#1B1B1B] w-[calc(100%-var(--size))] pl-3.75 3xl:pl-5 transition-colors duration-500 group-hover:text-(--basecolor2)">
                    Previous
                  </div>
                </Link>
                <Link
                  href="/news-events"
                  className="text-[10px] sm:text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-normal text-[#1B1B1B] transition-colors duration-500 hover:text-(--basecolor2)"
                >
                  Back to News & Events
                </Link>
                <Link href={"/"} className="group flex items-center">
                  <div className="text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-normal text-[#1B1B1B] w-[calc(100%-var(--size))] pr-3.75 3xl:pr-5 transition-colors duration-500 group-hover:text-(--basecolor2)">
                    Next
                  </div>
                  <div className="w-(--size) h-auto aspect-60/50 p-2.25 2xl:p-3.25 3xl:p-3.75 rounded-[10px] border border-black/20 overflow-hidden flex items-center justify-center transition-colors duration-500 group-hover:border-(--basecolor2) group-hover:bg-(--basecolor2)/10">
                    <Image
                      src={"/images/arrow-left.svg"}
                      alt={"Next"}
                      width={60}
                      height={50}
                      className="w-full h-full object-contain scale-x-[-1]"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-(--width)">
            <div
              className="typography max-lg:gap-2.5 max-lg:grid max-lg:grid-cols-2 [&_img]:w-full [&_img]:h-auto [&_img]:aspect-490/307 [&_img]:rounded-[5px] sm:[&_img]:rounded-[7px] 2xl:[&_img]:rounded-[10px] [&_img]:m-0 lg:not-last:[&_img]:mb-5 3xl:not-last:[&_img]:mb-7.5 mb-5 sm:mb-7.5 2xl:mb-15 3xl:mb-17.5"
              dangerouslySetInnerHTML={{
                __html: data?.eventsImages || "",
              }}
            />
            <div className="w-full h-auto p-[10px_0_10px_10px] sm:p-[15px_0_15px_15px] 3xl:p-[20px_0_20px_20px] border-l border-black/20 block">
              <div className="text-xl sm:text-2xl lg:text-[26px] 2xl:text-[32px] 3xl:text-[40px] leading-[1.1] font-bold text-[#212121] mb-5 sm:mb-7.5 3xl:mb-11.25">
                Related News & Events
              </div>
              <div className="w-full h-auto lg:space-y-5 2xl:space-y-8.75 grid sm:grid-cols-2 gap-2.5 lg:block">
                {data?.relatedNews?.map((item) => (
                  <div key={item?.id} className="w-full h-full">
                    <NewsCard item={item} />
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
