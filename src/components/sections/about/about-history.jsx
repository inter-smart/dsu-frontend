"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { ctaLinkProps } from "@/lib/schools/link-props";
import { hasContent } from "@/lib/has-content";


const renderText = (value) =>
    Array.isArray(value) ? <BlocksRenderer content={value} /> : value;

// Turns a YouTube link (watch, youtu.be, shorts, embed) or a bare 11-char id into a watch URL.
// Returns "" when the value is empty or not a YouTube link.
const getYouTubeHref = (input) => {
    const value = typeof input === "string" ? input : input?.url;
    if (typeof value !== "string") return "";
    const text = value.trim();
    if (/^[\w-]{11}$/.test(text)) return `https://www.youtube.com/watch?v=${text}`;
    const match = text.match(
        /(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/|v\/)|youtu\.be\/)([\w-]{11})/i,
    );
    return match ? `https://www.youtube.com/watch?v=${match[1]}` : "";
};


export default function AboutHistory({ data }) {
    if (!data) return null;
    const timeline = (Array.isArray(data?.timeline) ? data.timeline : []).filter(
        (item) => item?.period,
    );
    const founders = (Array.isArray(data?.founders) ? data.founders : []).filter(
        (item) => item?.name,
    );
    // YouTube: add a Text field (e.g. youtubeUrl) in Strapi for this section.
    const youtubeHref = getYouTubeHref(
        data?.youtubeUrl || data?.youtube || data?.videoUrl || data?.media?.youtubeUrl,
    );
    return (
        <section className='relative py-[40px] xl:py-[55px] 2xl:py-[65px] 3xl:py-[75px] dark:bg-[#101010] transition-colors duration-300'>
            <div className="container">
                <div className="flex max-sm:gap-[20px] lg:gap-[25px] 2xl:gap-[35px] 3xl:gap-[45px] max-lg:flex-wrap max-lg:mb-[30px]">
                    {timeline.length > 0 && (
                        <div className="w-full   xl:w-[330px] 2xl:w-[400px] 3xl:w-[500px] mb-[30px] max-lg:border-[#f4f4f4] max-lg:border-b">

                            <div className="w-full">
                                <Swiper
                                    direction="vertical"
                                    modules={[Autoplay]}
                                    slidesPerView="auto"
                                    spaceBetween={0}
                                    speed={500}
                                    loop={true}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    className="h-[400px] sm:h-[320px] lg:h-[600px] xl:h-[620px] 2xl:h-[640px] 3xl:h-[800px] !w-[calc(100%+32px)] !-ml-[16px] !px-[16px]"
                                >
                                    {timeline.map((itemList, idx) => (
                                        <SwiperSlide key={idx} className="!h-auto relative before:absolute before:content-[''] before:left-[22px] before:xl:left-[27px] before:2xl:left-[32px] before:3xl:left-[40px] before:top-0 before:h-[calc(100%-40px)] before:bottom-0 before:m-auto before:-z-1 before:w-[1px] before:bg-black/20 dark:before:bg-white/20">
                                            <div className="group/tl w-full flex pb-[30px] xl:pb-[40px] 2xl:pb-[40px] 3xl:pb-[50px]">
                                                <div className="w-[55px] xl:w-[55px] 2xl:w-[65px] 3xl:w-[83px] h-[45px] xl:h-[55px] 2xl:h-[65px] 3xl:h-[85px] mt-[10px] bg-[#FFF8EE] dark:bg-[#18191B] rounded-full border border-[#FF6D00] dark:border-[#F97316]/50 transition-[box-shadow,border-color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/tl:bg-gradient-to-r group-hover/tl:from-[#DC2626] group-hover/tl:to-[#F97316] group-hover/tl:border-transparent group-hover/tl:shadow-[0_0_0_5px_rgba(249,115,22,0.18),0_8px_20px_rgba(249,115,22,0.35)] p-[10px] lg:p-[15px] 2xl:p-[20px] 3xl:p-[25px]
                                             flex items-center justify-center relative after:absolute after:content-[''] before:left-[22px] before:xl:left-[27px] before:2xl:left-[32px] before:3xl:left-[39px] after:top-0 after:bottom-0 after:m-auto after:bg-white dark:after:bg-[#101010] after:h-[calc(100%+20px)] after:lg:h-[calc(100%+30px)] after:w-[1px] after:-z-1">
                                                    <svg className="w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/tl:rotate-[-6deg] group-hover/tl:scale-[1.12]" viewBox="0 0 32 31" fill="none" >
                                                        <path d="M31.535 12.824V10.421H28.381V8.762L15.767 0L3.154 8.762V10.421H0V12.825H4.224V24.361H0.986L0 30.177H31.535L30.549 24.361H27.311V12.824H31.535ZM15.768 3.567C16.881 3.567 17.783 4.47 17.783 5.584C17.783 6.697 16.881 7.6 15.768 7.6C14.654 7.6 13.75 6.697 13.75 5.584C13.75 4.469 14.654 3.567 15.768 3.567ZM10.688 24.361H7.916V12.824H10.688V24.361ZM17.153 24.361H14.382V12.824H17.153V24.361ZM23.619 24.361H20.848V12.824H23.619V24.361Z" fill="#212121" className="fill-[#212121] dark:fill-white transition-colors duration-300 group-hover/tl:fill-white" />
                                                    </svg>
                                                </div>
                                                <div className="w-[calc(100%-45px)] xl:w-[calc(100%-55px)] 2xl:w-[calc(100%-65px)] 3xl:w-[calc(100%-85px)] pl-[20px] 2xl:pl-[25px] 3xl:pl-[32px] pr-[14px] py-[8px] -mt-[2px] rounded-[16px] border-l-4 border-transparent transition-[background-color,border-color,box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/tl:translate-x-[8px] group-hover/tl:border-[#F97316] group-hover/tl:bg-[#FFEACC] group-hover/tl:shadow-[0_10px_24px_rgba(249,115,22,0.15)] dark:group-hover/tl:bg-[#343434]">
                                                    <div className="text-[24px] xl:text-[30px] 2xl:text-[36px] 3xl:text-[45px] w-fit bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-black dark:text-white font-semibold transition-[color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/tl:text-transparent">
                                                        {itemList.period}
                                                    </div>
                                                    {hasContent(itemList.description) && (
                                                        <div className="dark:text-[#9CA3AF]">{renderText(itemList.description)}</div>
                                                    )}
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                        </div>
                    )}
                    <div className="flex gap-[40px]   xl:w-[calc(100%-330px)] 2xl:w-[calc(100%-400px)] 3xl:w-[calc(100%-500px)] max-sm:flex-wrap">
                        <div className="w-full sm:w-1/2 lg:w-1/2">
                            {data?.media?.url && (
                                <div className="group relative w-full h-full rounded-[10px] overflow-hidden after:absolute after:inset-0 after:pointer-events-none after:content-[''] after:bg-gradient-to-t after:from-black/35 after:to-transparent after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100">
                                    <Image src={data.media.url} width={550} height={600} alt={data.media.alternativeText || "History"} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                                    
                                        <a
                                            href={youtubeHref}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Watch the video on YouTube"
                                            className="absolute inset-0 z-[2] m-auto flex h-[44px] w-[62px] xl:h-[52px] xl:w-[74px] 3xl:h-[64px] 3xl:w-[92px] items-center justify-center opacity-0 scale-75 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 focus-visible:opacity-100 focus-visible:scale-100 [@media(hover:none)]:opacity-100 [@media(hover:none)]:scale-100 hover:!scale-110 drop-shadow-[0_6px_16px_rgba(0,0,0,0.45)]"
                                        >
                                            <svg viewBox="0 0 24 17" className="h-full w-full" aria-hidden="true">
                                                <path
                                                    d="M23.5 2.65A3 3 0 0 0 21.4.55C19.5 0 12 0 12 0S4.5 0 2.6.55A3 3 0 0 0 .5 2.65C0 4.55 0 8.5 0 8.5s0 3.95.5 5.85a3 3 0 0 0 2.1 2.1C4.5 17 12 17 12 17s7.5 0 9.4-.55a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.85.5-5.85s0-3.95-.5-5.85z"
                                                    fill="#FF0000"
                                                />
                                                <path d="M9.6 12.1V4.9L15.8 8.5l-6.2 3.6z" fill="#fff" />
                                            </svg>
                                        </a> 
                                </div>
                            )}
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="w-full">
                                {data?.heading && (
                                    <h2 className=" text-[25px] xl:text-[36px] 2xl:text-[44px] 3xl:text-[55px] font-bold leading-[30px] mb-[10px]
                                xl:leading-[40px] 2xl:leading-[50px] 3xl:leading-[60px] text-black dark:text-white">
                                        {data.heading}
                                    </h2>
                                )}
                                {Array.isArray(data?.description) && hasContent(data.description) && (
                                    <div className="text_1 leading-[1.2] text-[#4A5565] dark:text-[#9CA3AF] [&_p]:text-[#4A5565] dark:[&_p]:text-[#9CA3AF] mb-[30px] 3xl:mb-[50px]  typography">
                                        <BlocksRenderer content={data.description} />
                                    </div>
                                )}
                                {founders.length > 0 && (
                                    <>
                                        <div className="text-1 text-[#F97316] font-bold mb-[0px] uppercase">FOUNDERS</div>
                                        <div data-reveal-stagger className="w-full mb-[10px]">
                                            {founders.map((item, id) => (

                                                <div className="group w-full flex flex-col gap-4 items-center py-[15px] xl:py-[20px] 2xl:py-[25px] 3xl:py-[30px] border-b border-black/10 dark:border-white/10 last-of-type:border-0 transition-colors duration-300 hover:border-[#F97316]/60"
                                                    key={id}>
                                                    <div className="w-full flex">
                                                        <div className="w-[42px] xl:w-[52px] 2xl:w-[62px] 3xl:w-[78px] h-[42px] xl:h-[52px] 2xl:h-[62px] 3xl:h-[78px] rounded-full overflow-hidden ring-2 ring-transparent transition-all duration-300 group-hover:ring-[#F97316] group-hover:scale-110 group-hover:shadow-[0_6px_18px_rgba(249,115,22,0.35)]">
                                                            {item?.photo?.url && (
                                                                <Image src={item.photo.url} width={78} height={78} alt={item.photo.alternativeText || item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                                            )}
                                                        </div>
                                                        <div className="w-[calc(100%-42px)] xl:w-[calc(100%-52px)] 2xl:w-[calc(100%-62px)] 3xl:w-[calc(100%-78px)] pl-[15px] 2xl:pl-[20px] 3xl:pl-[25px] transition-transform duration-300 group-hover:translate-x-1.5">
                                                            <div className="text_1 text-black dark:text-white font-bold transition-colors duration-300 group-hover:text-[#F97316]">{item.name}</div>
                                                            {item.role && (
                                                                <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] font-normal">{item.role}</div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <p>A distinguished educationist and Barrister-at-Law who established the educational trust in the 1960s with a vision of making education accessible to all.</p>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {/* {data?.cta?.url && data?.cta?.label && (
                                    <Link
                                        href={data.cta.url}
                                        {...ctaLinkProps(data.cta)}
                                        className="group relative flex h-[30px] w-fit min-w-[160px] items-center justify-center gap-[10px] overflow-hidden rounded-[6px] bg-gradient-to-r from-[#DC2626] to-[#F97316] text_1 font-bold capitalize text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)] xl:h-[35px] xl:min-w-[155px] 2xl:h-[40px] 2xl:min-w-[185px] 2xl:gap-[20px] 2xl:rounded-[4px] 3xl:h-[50px] 3xl:min-w-[230px] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full"
                                    >
                                        <span className="relative z-[1] transition-transform duration-300 group-hover:translate-x-[-2px]">
                                            {data?.cta.label}
                                        </span>

                                        <div className="relative z-[1] flex h-[13px] w-[15px] items-center justify-center transition-all duration-300 group-hover:translate-x-[4px] group-hover:scale-110">
                                            <svg
                                                width="11"
                                                height="9"
                                                viewBox="0 0 11 9"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="transition-transform duration-300 group-hover:rotate-180"
                                            >
                                                <circle cx="5.12232" cy="0.919192" r="0.919192" fill="white" />
                                                <circle cx="5.12232" cy="4.33325" r="0.919192" fill="white" />
                                                <circle cx="5.12232" cy="7.74732" r="0.919192" fill="white" />
                                                <circle cx="9.32349" cy="4.33325" r="0.919192" fill="white" />
                                                <circle cx="0.919192" cy="4.33325" r="0.919192" fill="white" />
                                            </svg>
                                        </div>
                                    </Link>
                                )} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}