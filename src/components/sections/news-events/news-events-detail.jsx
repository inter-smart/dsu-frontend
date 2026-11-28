"use client";
import Link from "next/link";
import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import NewsCard from "@/components/layout/common/news-card";
import { getOrdinal } from "@/lib/utils";
// ADDED
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { withLineBreaks } from "@/lib/line-breaks";
// END ADDED

export default function NewsEventsDetail({
  data,
  backHref = "/news-events",
  backLabel = "Back to News & Events",
}) {

  return (
    <section className="w-full h-auto py-10 sm:py-[70px_80px] lg:py-[90px_110px] 2xl:py-[110px_130px] 3xl:py-[100px] block">
      <div className="container">
        <div className="[--width:100%] lg:[--width:285px] xl:[--width:330px] 2xl:[--width:390px] 3xl:[--width:500px] w-full h-auto flex flex-wrap">
          <div className="w-(--width) lg:w-[calc(100%-var(--width))] h-auto lg:pr-3.75 2xl:pr-5 3xl:pr-7.5 max-lg:mb-5">
            {/* <div className="group w-full h-auto aspect-1210/665 mb-5 sm:mb-7.5 2xl:mb-10 3xl:mb-12.5 rounded-[5px] sm:rounded-[7px] 2xl:rounded-[10px] overflow-hidden block relative z-0 bg-gray-200 dark:bg-white/10"> */}
            {/* {data?.newsEventsDetailImage?.url && (
                <Image
                  src={data.newsEventsDetailImage?.url}
                  alt={
                    data?.newsEventsDetailImage?.alternativeText ||
                    "News & Events"
                  }
                  width={1210}
                  height={665}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              )} */}
            {/* {data?.newsEventsDetailDate && (
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
              )} */}
            {/* </div> */}
            <div className="w-full h-auto block">
              <div className="w-full h-auto mb-5 sm:mb-6.25 lg:mb-7.5 2xl:mb-10 3xl:mb-12.5">
                {/* Date & time */}
                {(data?.organized?.date || data?.organized?.time) && (
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2.5 sm:mb-3 lg:mb-4">
                    {data?.organized?.date && (
                      <div className="flex items-center gap-2">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5 lg:w-6 lg:h-6 shrink-0"
                          aria-hidden="true"
                        >
                          <defs>
                            <linearGradient id="eventDateGrad" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#DC2626" />
                              <stop offset="1" stopColor="#F97316" />
                            </linearGradient>
                          </defs>
                          <g stroke="url(#eventDateGrad)">
                            <rect x="3" y="5" width="18" height="16" rx="2" />
                            <path d="M16 3v4M8 3v4M3 10h18" />
                          </g>
                        </svg>
                        <span className="text_1 font-semibold bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent">
                          {data.organized.date}
                        </span>
                      </div>
                    )}

                    {data?.organized?.date && data?.organized?.time && (
                      <span aria-hidden="true" className="w-px h-4 bg-black/20 dark:bg-white/20" />
                    )}

                    {data?.organized?.time && (
                      <div className="flex items-center gap-2">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5 lg:w-6 lg:h-6 shrink-0"
                          aria-hidden="true"
                        >
                          <defs>
                            <linearGradient id="eventTimeGrad" x1="3" y1="12" x2="21" y2="12" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#DC2626" />
                              <stop offset="1" stopColor="#F97316" />
                            </linearGradient>
                          </defs>
                          <g stroke="url(#eventTimeGrad)">
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 7v5l3 2" />
                          </g>
                        </svg>
                        <span className="text_1 font-semibold bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent">
                          {data.organized.time}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Title */}
                <h2 className="mb-3.75 sm:mb-5 lg:mb-6.25 2xl:mb-8.75 cmn_Title">
                  {withLineBreaks(data?.title)}
                </h2>

                {/* Organiser */}
                {data?.organized?.name && (
                  <div className="text_1 text-[#212121] dark:text-white">
                    <span className="font-bold pr-1.25">Organized by:</span>
                    {withLineBreaks(data.organized.name)}
                  </div>
                )}

                {/* Venue */}
                {data?.venue && (
                  <div className="text_1 text-[#212121] dark:text-white mt-1.5">
                    <span className="font-bold pr-1.25">Venue:</span>
                    {withLineBreaks(data.venue)}
                  </div>
                )}

                {/* Categories */}
                {data?.categories?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3.75">
                    {data.categories.map((category) => (
                      <span
                        key={category?.id || category?.name}
                        className="px-3 py-1 rounded-full border border-(--basecolor2)/40 text-xs 2xl:text-sm font-medium text-(--basecolor2)"
                      >
                        {category?.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div
                className="typography [&_p]:text-[#4A5565] [&_p]:mb-2.5 sm:[&_p]:mb-3.75 lg:[&_p]:mb-5 2xl:[&_p]:mb-7.5 3xl:[&_p]:mb-10 [&_h2]:mb-5 sm:[&_h2]:mb-6.25 2xl:[&_h2]:mb-8.75 [&_h3]:mb-3.75 2xl:[&_h3]:mb-5"
                dangerouslySetInnerHTML={{
                  __html: data?.description1 || "",
                }}
              />
              <div className="w-full h-auto block">
                {data?.leadership?.map((group) => (
                  <div
                    key={group?.id}
                    className="w-full h-auto mb-5 sm:mb-7.5 lg:mb-10 2xl:mb-12.5 3xl:mb-17.5"
                  >
                    {group?.title && (
                      <div className="text-lg sm:text-xl 2xl:text-2xl 3xl:text-3xl leading-[1.1] font-bold text-[#212121] max-sm:mt-5 mb-5 2xl:mb-7.5">
                        {withLineBreaks(group?.title)}
                      </div>
                    )}
                    {group?.chiefPatronsTitle && (
                      <div className="text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-medium text-black mb-3.75">
                        {group?.chiefPatronsTitle}
                      </div>
                    )}
                    {group?.members?.length > 0 && (
                      <div className="w-full h-auto grid md:grid-cols-2 gap-5 lg:gap-10 2xl:gap-12.5 3xl:gap-17.5 mb-3.75 sm:mb-5 3xl:mb-10">
                        {group?.members?.map((member) => (
                          <div key={member?.id} className="w-auto h-auto bg-white shadow-sm">
                            <div className="[--width:120px] 2xl:[--width:150px] 3xl:[--width:185px] w-full h-full flex items-center">
                              {member?.profileImage?.url && (
                                <div className="w-(--width) h-full overflow-hidden block">
                                  <Image
                                    src={member?.profileImage?.url}
                                    alt={
                                      member?.profileImage?.alternativeText ||
                                      member?.name ||
                                      "Member"
                                    }
                                    width={185}
                                    height={185}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              )}
                              <div className="w-[calc(100%-var(--width))] pl-3.75 3xl:pl-5">
                                <div className="text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-bold text-[#4A5565] mb-3.75">
                                  {withLineBreaks(member?.name)}
                                </div>
                                <div className="text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.6] font-normal text-[#4A5565]">
                                  {member?.designation && (
                                    <span className="block">
                                      {withLineBreaks(member?.designation)}
                                    </span>
                                  )}
                                  {member?.organization && (
                                    <span className="block">
                                      {member?.organization}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {group?.patronsTitle && (
                      <div className="text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-medium text-black mb-2.5 sm:mb-3.75">
                        {group?.patronsTitle}
                      </div>
                    )}
                    {group?.otherMembers && (
                      <div
                        className="typography w-full h-auto mb-4 text-sm text-[#4A5565] [&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:text-sm 2xl:[&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:text-[15px] 3xl:[&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:text-lg [&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:leading-[1.1] [&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:font-medium [&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:text-black [&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:mb-3.75 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:pl-0 [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:pl-0 [&_li]:leading-relaxed 2xl:[&_ul]:space-y-1.25 3xl:[&_ul]:space-y-2.5 [&_p]:mb-2.5"
                        dangerouslySetInnerHTML={{
                          __html: group?.otherMembers,
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div
                className="typography [&_p]:leading-[1.8] [&_p]:text-[#4A5565] [&_p]:mb-2.5 sm:[&_p]:mb-3.75 2xl:[&_p]:mb-5 3xl:[&_p]:mb-7.5 [&_h2]:mb-3.75 sm:[&_h2]:mb-6.25 2xl:[&_h2]:mb-8.75"
                dangerouslySetInnerHTML={{
                  __html: data?.description2 || "",
                }}
              />

              {/* PDF download or YouTube video */}
              {data?.attachment?.type === "YouTube" && data.attachment.embedUrl && (
                <div className="w-full h-auto aspect-video mb-5 sm:mb-7.5 2xl:mb-10 3xl:mb-12.5 rounded-[5px] sm:rounded-[7px] 2xl:rounded-[10px] overflow-hidden bg-black">
                  <iframe
                    src={data.attachment.embedUrl}
                    title={data?.title || "Video"}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              )}
              {data?.attachment?.type === "PDF" && data.attachment.url && (
                <div className="w-full h-auto mb-5 sm:mb-7.5 2xl:mb-10 3xl:mb-12.5">
                  <a
                    href={data.attachment.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm text-sm 2xl:text-base font-bold text-white bg-linear-to-r from-(--basecolor) to-(--basecolor2) transition-opacity duration-300 hover:opacity-80"
                  >
                    View PDF
                    {data.attachment.name ? ` – ${data.attachment.name}` : ""}
                  </a>
                </div>
              )}

              {data?.gallery?.length > 0 && (
                <div className="w-full h-auto mb-5 sm:mb-7.5 2xl:mb-10 3xl:mb-12.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-5 3xl:gap-7.5">
                    {data.gallery.map((media, idx) =>
                      media?.mime?.startsWith("video/") ? (
                        <video
                          key={media?.url || idx}
                          src={media.url}
                          controls
                          preload="metadata"
                          className="w-full h-auto aspect-490/307 object-cover bg-black rounded-[5px] sm:rounded-[7px] 2xl:rounded-[10px]"
                        />
                      ) : (
                        <Image
                          key={media?.url || idx}
                          src={media.url}
                          alt={
                            media?.alternativeText ||
                            `${data?.title || "News & Events"} – gallery ${idx + 1}`
                          }
                          width={490}
                          height={307}
                          className="w-full h-auto aspect-490/307 object-cover rounded-[5px] sm:rounded-[7px] 2xl:rounded-[10px]"
                        />
                      ),
                    )}
                  </div>
                </div>
              )}

              {/* <div className="my-5 lg:my-7.5 3xl:my-10 flex items-center">
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
              </div> */}

              <div className="[--size:40px] 2xl:[--size:50px] 3xl:[--size:60px] w-full h-auto py-5 2xl:py-7.5 border-y border-black/10 flex items-center justify-between">
                <Link
                  href={data?.previous?.link || backHref}
                  title={data?.previous?.title}
                  aria-hidden={!data?.previous}
                  tabIndex={data?.previous ? undefined : -1}
                  className={`group flex items-center ${data?.previous ? "" : "invisible"}`}
                >
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
                  href={backHref}
                  className="text-[10px] sm:text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-normal text-[#1B1B1B] transition-colors duration-500 hover:text-(--basecolor2)"
                >
                  {backLabel}
                </Link>
                <Link
                  href={data?.next?.link || backHref}
                  title={data?.next?.title}
                  aria-hidden={!data?.next}
                  tabIndex={data?.next ? undefined : -1}
                  className={`group flex items-center ${data?.next ? "" : "invisible"}`}
                >
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
          <div className="w-(--width) lg:top-[70px] lg:sticky h-full">
            {/* {data?.gallery?.length > 0 && (
              <div className="max-lg:gap-2.5 max-lg:grid max-lg:grid-cols-2 mb-5 sm:mb-7.5 2xl:mb-15 3xl:mb-17.5">
                {data?.gallery?.map((image, idx) => (
                  <Image
                    key={image?.id || idx}
                    src={image?.url}
                    alt={
                      image?.alternativeText ||
                      `${data?.title || "News & Events"} – image ${idx + 1}`
                    }
                    width={490}
                    height={307}
                    className="w-full h-auto aspect-490/307 object-cover rounded-[5px] sm:rounded-[7px] 2xl:rounded-[10px] lg:not-last:mb-5 3xl:not-last:mb-7.5"
                  />
                ))}
              </div>
            )} */}
            {data?.relatedNews?.length > 0 && (
              <div className="w-full h-auto p-[10px_0_10px_10px] sm:p-[15px_0_15px_15px] 3xl:p-[20px_0_20px_20px] border-l border-black/20 block">
                <h2 className="text-xl sm:text-2xl lg:text-[26px] 2xl:text-[32px] 3xl:text-[40px] leading-[1.1] font-bold text-[#212121] mb-5 sm:mb-7.5 3xl:mb-11.25">
                  {data?.relatedNewsTitle}
                </h2>

                {/* ADDED: Swiper replaces the grid container */}
                <div className="w-full h-auto min-w-0">
                  <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    slidesPerView={1}
                    spaceBetween={16}
                    breakpoints={{
                      640: { slidesPerView: 2, spaceBetween: 16 }, // same as your sm:grid-cols-2
                      1024: { slidesPerView: 1, spaceBetween: 20 }, // same as your lg single column
                    }}
                    navigation={{
                      prevEl: ".related-news-prev",
                      nextEl: ".related-news-next",
                    }}
                    pagination={{
                      el: ".related-news-pagination",
                      clickable: true,
                    }}
                    watchOverflow
                    grabCursor
                    className="!w-full"
                  >
                    {data?.relatedNews?.map((item) => (
                      <SwiperSlide key={item?.id} className="!h-auto">
                        <div className="w-full h-full">
                          <NewsCard item={item} />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Nav buttons + pagination dots */}
                  <div className="mt-5 flex items-center justify-between gap-4 sm:mt-6 [&:has(.swiper-button-lock)]:hidden">
                    <button
                      type="button"
                      aria-label="Previous news"
                      className="related-news-prev flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white shadow-[0_4px_14px_rgba(220,38,38,0.3)] transition-all duration-300 active:scale-95 [&.swiper-button-disabled]:pointer-events-none [&.swiper-button-disabled]:opacity-40 [&.swiper-button-disabled]:shadow-none"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="h-[45%] w-[45%]" aria-hidden="true">
                        <path d="M15 4l-8 8 8 8" />
                      </svg>
                    </button>

                    {/* CHANGED: gradient active pill, size-2.5 dots, hover state */}
                    <div className="related-news-pagination flex flex-1 items-center justify-center gap-2 [--swiper-pagination-color:#F97316] [--swiper-pagination-bullet-inactive-color:#000] [--swiper-pagination-bullet-inactive-opacity:0.2] [&_.swiper-pagination-bullet]:m-0 [&_.swiper-pagination-bullet]:size-2.5 [&_.swiper-pagination-bullet]:cursor-pointer [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet-active]:!bg-[#F97316] [&_.swiper-pagination-bullet-active]:!opacity-100" />
                    <button
                      type="button"
                      aria-label="Next news"
                      className="related-news-next flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white shadow-[0_4px_14px_rgba(220,38,38,0.3)] transition-all duration-300 active:scale-95 [&.swiper-button-disabled]:pointer-events-none [&.swiper-button-disabled]:opacity-40 [&.swiper-button-disabled]:shadow-none"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="h-[45%] w-[45%]" aria-hidden="true">
                        <path d="M9 4l8 8-8 8" />
                      </svg>
                    </button>
                  </div>
                </div>
                {/* END ADDED */}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}