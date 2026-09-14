"use client";

import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IQACAbout from "./iqac-about";
import IQACAccredition from "./IQAC-Accredition";

export default function IQAC({ data }) {

    const defaultTab = data?.tabs?.find((t) => t.active)?.value || data?.tabs?.[0]?.value || "about-iqac";

    const activities = data?.activities?.items || [];
    const activitiesHeading = data?.activities?.heading || "IQAC Activities";
    const activitiesDescription = data?.activities?.description || "";

    return (
        <section className="relative py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[90px]">

            <Tabs defaultValue={defaultTab} className="w-full">
                <div className="container">
                    {/* Tabs Header */}
                    <TabsList
                        variant="line"
                        className="self-start inline-flex w-fit max-w-full p-0 mb-[25px] xl:mb-[35px] 2xl:mb-[45px] bg-white dark:bg-[#1A1A1A] rounded-[8px] lg:rounded-[10px] shadow-[0_2px_14px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_14px_rgba(0,0,0,0.4)] border border-transparent dark:border-white/10 overflow-x-auto !h-auto"
                    >
                        {data?.tabs.map((tab, idx) => (
                            <TabsTrigger
                                key={tab.id}
                                value={tab.value}
                                className={`relative h-[44px] md:h-[48px] xl:h-[54px] px-[20px] sm:px-[28px] xl:px-[36px] 2xl:px-[42px]
                                rounded-none border-0 overflow-visible !no-underline flex items-center justify-center whitespace-nowrap !bg-transparent
                                text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] font-medium text-[#374151] dark:text-[#D1D5DB] shrink-0
                                transition-colors duration-150 bg-transparent
                                hover:text-[#111827] dark:hover:text-white
                                data-active:text-[#111827] dark:data-active:text-white data-active:font-semibold
                                data-[state=active]:text-[#111827] dark:data-[state=active]:text-white data-[state=active]:font-semibold
                                after:content-[''] after:absolute after:!bottom-0 after:!left-0 after:!right-0 after:!h-[3.5px] after:!bg-[#F97316] after:w-[75%] after:m-auto after:opacity-0 after:transition-opacity after:duration-150
                                data-active:after:!opacity-100 data-[state=active]:after:!opacity-100
                                ${idx !== data?.tabs.length - 1 ? "before:absolute before:content-[''] before:right-0 before:w-[1px] before:h-[70%] before:bg-[rgba(33,33,33,0.1)] dark:before:bg-white/10 before:top-0 before:bottom-0 before:m-auto" : ""}`}
                            >
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                {/* About IQAC Tab Content */}
                <TabsContent value="about-iqac" className="mt-[10px]">
                    <IQACAbout data={data?.aboutIqacSection} />
                    <IQACAccredition data={data?.accreditationsData} />
                </TabsContent>

                {/* IQAC Activities Tab Content */}
                <TabsContent value="iqac-activities" className="mt-[10px]">
                    <div className="container">
                        {/* Heading */}
                        <h2 className="cmn_Title mb-[12px] xl:mb-[16px] 2xl:mb-[20px] dark:text-white">
                            {activitiesHeading}
                        </h2>

                        {/* Description */}
                        {activitiesDescription && (
                            <p className="text_1 leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF] mb-[30px] xl:mb-[45px] 2xl:mb-[55px] max-w-[95%]">
                                {activitiesDescription}
                            </p>
                        )}

                        {/* Activities List */}
                        <div className="flex flex-col">
                            {activities.map((item, idx) => (
                                <div
                                    key={item.id || idx}
                                    className="flex flex-col md:flex-row md:items-center max-md:gap-[20px] pb-[30px] xl:pb-[40px] 2xl:pb-[50px] mb-[30px] xl:mb-[40px] 2xl:mb-[50px] border-b border-[rgba(33,33,33,0.1)] dark:border-white/10 last:border-b-0 last:pb-0 last:mb-0"
                                >
                                    {/* Left Column: Poster Image */}
                                    <div className="w-full md:w-[240px] lg:w-[270px] xl:w-[310px] 2xl:w-[340px] 3xl:w-[420px] shrink-0 rounded-[8px] lg:rounded-[10px] overflow-hidden border border-[rgba(33,33,33,0.08)] dark:border-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.04)] bg-white dark:bg-[#1F1F1F] relative">
                                        <Image
                                            src={item.poster}
                                            alt={item.title}
                                            width={420}
                                            height={450}
                                            className="object-cover w-full h-full"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 300px, 340px"
                                        />
                                    </div>

                                    {/* Right Column: Details & Actions */}
                                    <div className="flex-1 min-w-0 md:pl-[30px] xl:pl-[40px] 2xl:pl-[45px] 3xl:pl-[50px]">
                                        <div className="lg:max-w-[80%]">
                                            {/* Title */}
                                            <h3 className="text-[18px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[28px] font-bold text-[#111827] dark:text-white leading-[1.3] mb-[12px] xl:mb-[16px]">
                                                {item.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text_1 leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF] mb-[18px] xl:mb-[24px]">
                                                {item.description}
                                            </p>

                                            {/* Meta: Date & Time */}
                                            <div className="flex flex-col gap-[20px] xl:gap-[20px] mb-[22px] xl:mb-[28px] 2xl:mb-[35px] 3xl:mb-[45px]">
                                                {/* Date */}
                                                {item.date && (
                                                    <div className="flex items-center gap-[10px]">
                                                        <div className="w-[16px] xl:w-[18px] h-[16px] xl:h-[18px] shrink-0 flex items-center justify-center">
                                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g clipPath="url(#clip0_5049_218451)">
                                                                    <path d="M6.55513 9.93049C6.55513 9.70501 6.37223 9.52234 6.14656 9.52234H4.72084C4.49543 9.52234 4.3125 9.70501 4.3125 9.93049V11.356C4.3125 11.5818 4.49543 11.7646 4.72084 11.7646H6.14656C6.37223 11.7646 6.55513 11.5818 6.55513 11.356V9.93049Z" fill="url(#paint0_linear_5049_218451)" />
                                                                    <path d="M10.1252 9.93049C10.1252 9.70501 9.94229 9.52234 9.71706 9.52234H8.29115C8.06574 9.52234 7.88281 9.70501 7.88281 9.93049V11.356C7.88281 11.5818 8.06574 11.7646 8.29115 11.7646H9.71706C9.94229 11.7646 10.1252 11.5818 10.1252 11.356V9.93049Z" fill="url(#paint1_linear_5049_218451)" />
                                                                    <path d="M13.6879 9.93049C13.6879 9.70501 13.505 9.52234 13.2796 9.52234H11.8539C11.6282 9.52234 11.4453 9.70501 11.4453 9.93049V11.356C11.4453 11.5818 11.6282 11.7646 11.8539 11.7646H13.2796C13.505 11.7646 13.6879 11.5818 13.6879 11.356V9.93049Z" fill="url(#paint2_linear_5049_218451)" />
                                                                    <path d="M6.55513 13.4939C6.55513 13.2681 6.37223 13.0856 6.14656 13.0856H4.72084C4.49543 13.0856 4.3125 13.2681 4.3125 13.4939V14.9192C4.3125 15.1449 4.49543 15.3276 4.72084 15.3276H6.14656C6.37223 15.3276 6.55513 15.1448 6.55513 14.9192V13.4939Z" fill="url(#paint3_linear_5049_218451)" />
                                                                    <path d="M10.1252 13.4939C10.1252 13.2681 9.94229 13.0856 9.71706 13.0856H8.29115C8.06574 13.0856 7.88281 13.2681 7.88281 13.4939V14.9192C7.88281 15.1449 8.06574 15.3276 8.29115 15.3276H9.71706C9.94229 15.3276 10.1252 15.1448 10.1252 14.9192V13.4939Z" fill="url(#paint4_linear_5049_218451)" />
                                                                    <path d="M13.6879 13.4939C13.6879 13.2681 13.505 13.0856 13.2798 13.0856H11.8539C11.6282 13.0856 11.4453 13.2681 11.4453 13.4939V14.9192C11.4453 15.1449 11.6282 15.3276 11.8539 15.3276H13.2798C13.505 15.3276 13.6879 15.1448 13.6879 14.9192V13.4939Z" fill="url(#paint5_linear_5049_218451)" />
                                                                    <path d="M16.2374 2.00428V4.18167C16.2374 5.16583 15.439 5.95891 14.455 5.95891H13.3306C12.3465 5.95891 11.5376 5.16583 11.5376 4.18167V1.99646H6.46964V4.18167C6.46964 5.16583 5.6607 5.95891 4.67676 5.95891H3.55215C2.56817 5.95891 1.76982 5.16583 1.76982 4.18167V2.00428C0.909811 2.0302 0.203125 2.74183 0.203125 3.61651V16.3771C0.203125 17.2682 0.925408 18.0001 1.81654 18.0001H16.1907C17.0805 18.0001 17.8041 17.2667 17.8041 16.3771V3.61651C17.8041 2.74183 17.0974 2.0302 16.2374 2.00428ZM15.7152 15.5825C15.7152 15.9676 15.4029 16.28 15.0177 16.28H2.95881C2.57355 16.28 2.26131 15.9676 2.26131 15.5825V8.99115C2.26131 8.6059 2.57352 8.29347 2.95881 8.29347H15.0176C15.4029 8.29347 15.7151 8.6059 15.7151 8.99115L15.7152 15.5825Z" fill="url(#paint6_linear_5049_218451)" />
                                                                    <path d="M3.54879 4.79156H4.66098C4.99856 4.79156 5.27227 4.51825 5.27227 4.18067V0.611109C5.27227 0.273493 4.99856 0 4.66098 0H3.54879C3.21118 0 2.9375 0.273493 2.9375 0.611109V4.18067C2.9375 4.51825 3.21118 4.79156 3.54879 4.79156Z" fill="url(#paint7_linear_5049_218451)" />
                                                                    <path d="M13.3144 4.79156H14.4266C14.7639 4.79156 15.0376 4.51825 15.0376 4.18067V0.611109C15.0377 0.273493 14.764 0 14.4266 0H13.3144C12.9768 0 12.7031 0.273493 12.7031 0.611109V4.18067C12.7031 4.51825 12.9768 4.79156 13.3144 4.79156Z" fill="url(#paint8_linear_5049_218451)" />
                                                                </g>
                                                                <defs>
                                                                    <linearGradient id="paint0_linear_5049_218451" x1="4.3125" y1="10.6434" x2="6.55513" y2="10.6434" gradientUnits="userSpaceOnUse">
                                                                        <stop stopColor="#DC2626" />
                                                                        <stop offset="1" stopColor="#F97316" />
                                                                    </linearGradient>
                                                                    <linearGradient id="paint1_linear_5049_218451" x1="7.88281" y1="10.6434" x2="10.1252" y2="10.6434" gradientUnits="userSpaceOnUse">
                                                                        <stop stopColor="#DC2626" />
                                                                        <stop offset="1" stopColor="#F97316" />
                                                                    </linearGradient>
                                                                    <linearGradient id="paint2_linear_5049_218451" x1="11.4453" y1="10.6434" x2="13.6879" y2="10.6434" gradientUnits="userSpaceOnUse">
                                                                        <stop stopColor="#DC2626" />
                                                                        <stop offset="1" stopColor="#F97316" />
                                                                    </linearGradient>
                                                                    <linearGradient id="paint3_linear_5049_218451" x1="4.3125" y1="14.2066" x2="6.55513" y2="14.2066" gradientUnits="userSpaceOnUse">
                                                                        <stop stopColor="#DC2626" />
                                                                        <stop offset="1" stopColor="#F97316" />
                                                                    </linearGradient>
                                                                    <linearGradient id="paint4_linear_5049_218451" x1="7.88281" y1="14.2066" x2="10.1252" y2="14.2066" gradientUnits="userSpaceOnUse">
                                                                        <stop stopColor="#DC2626" />
                                                                        <stop offset="1" stopColor="#F97316" />
                                                                    </linearGradient>
                                                                    <linearGradient id="paint5_linear_5049_218451" x1="11.4453" y1="14.2066" x2="13.6879" y2="14.2066" gradientUnits="userSpaceOnUse">
                                                                        <stop stopColor="#DC2626" />
                                                                        <stop offset="1" stopColor="#F97316" />
                                                                    </linearGradient>
                                                                    <linearGradient id="paint6_linear_5049_218451" x1="0.203125" y1="9.99827" x2="17.8041" y2="9.99827" gradientUnits="userSpaceOnUse">
                                                                        <stop stopColor="#DC2626" />
                                                                        <stop offset="1" stopColor="#F97316" />
                                                                    </linearGradient>
                                                                    <linearGradient id="paint7_linear_5049_218451" x1="2.9375" y1="2.39578" x2="5.27227" y2="2.39578" gradientUnits="userSpaceOnUse">
                                                                        <stop stopColor="#DC2626" />
                                                                        <stop offset="1" stopColor="#F97316" />
                                                                    </linearGradient>
                                                                    <linearGradient id="paint8_linear_5049_218451" x1="12.7031" y1="2.39578" x2="15.0376" y2="2.39578" gradientUnits="userSpaceOnUse">
                                                                        <stop stopColor="#DC2626" />
                                                                        <stop offset="1" stopColor="#F97316" />
                                                                    </linearGradient>
                                                                    <clipPath id="clip0_5049_218451">
                                                                        <rect width="18" height="18" fill="white" />
                                                                    </clipPath>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <span className="text_1 font-bold text-[#1F2937] dark:text-[#E5E7EB]">
                                                            {item.date}
                                                        </span>
                                                    </div>
                                                )}

                                                {/* Time */}
                                                {item.time && (
                                                    <div className="flex items-center gap-[10px]">
                                                        <div className="w-[16px] xl:w-[18px] h-[16px] xl:h-[18px] shrink-0 flex items-center justify-center">
                                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389959 7.20038 -0.17433 9.00998 0.172936 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9972 6.61391 17.0481 4.32636 15.3609 2.63915C13.6736 0.95193 11.3861 0.00281493 9 0ZM12.033 12.033C11.8796 12.1864 11.6715 12.2726 11.4545 12.2726C11.2376 12.2726 11.0295 12.1864 10.8761 12.033L8.42155 9.57845C8.2681 9.42505 8.18187 9.21698 8.18182 9V4.09091C8.18182 3.87391 8.26802 3.66581 8.42146 3.51237C8.5749 3.35893 8.78301 3.27273 9 3.27273C9.217 3.27273 9.42511 3.35893 9.57854 3.51237C9.73198 3.66581 9.81818 3.87391 9.81818 4.09091V8.66127L12.033 10.8761C12.1864 11.0295 12.2726 11.2376 12.2726 11.4545C12.2726 11.6715 12.1864 11.8796 12.033 12.033Z" fill="url(#paint0_linear_5049_218448)" />
                                                                <defs>
                                                                    <linearGradient id="paint0_linear_5049_218448" x1="0" y1="9" x2="18" y2="9" gradientUnits="userSpaceOnUse">
                                                                        <stop stopColor="#DC2626" />
                                                                        <stop offset="1" stopColor="#F97316" />
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                        <span className="text_1 font-bold text-[#1F2937] dark:text-[#E5E7EB]">
                                                            {item.time}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex flex-wrap items-center gap-[10px] lg:gap-[14px]">
                                                {/* Read More */}
                                                <Link
                                                    href={item.readMoreUrl || "#"}
                                                    className="h-[38px] xl:h-[42px] px-[20px] xl:px-[28px] bg-white dark:bg-[#1E1E1E] border max-md:flex-1 lg:min-w-[175px] xl:min-w-[200px] 2xl:min-w-[225px] 3xl:min-w-[245px] border-[#21212126] dark:border-white/15 rounded-[5px] xl:rounded-[6px] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex items-center justify-center text-[11px] md:text-[13px] xl:text-[14px] font-bold text-[#1F2937] dark:text-[#E5E7EB] hover:border-[#F97316] hover:text-[#F97316] dark:hover:border-[#F97316] dark:hover:text-[#F97316] transition-colors duration-200 !no-underline min-w-[130px] xl:min-w-[150px]"
                                                >
                                                    Read More
                                                </Link>

                                                {/* Join Zoom Meeting */}
                                                <Link
                                                    href={item.zoomUrl || "#"}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="h-[38px] xl:h-[42px] px-[16px] xl:px-[22px] bg-white dark:bg-[#1E1E1E] border max-md:flex-1 border-[#21212126] dark:border-white/15 rounded-[5px] xl:rounded-[6px] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex items-center justify-center gap-[8px] text-[11px] md:text-[13px] xl:text-[14px] font-bold text-[#1F2937] dark:text-[#E5E7EB] hover:border-[#2D8CFF] hover:text-[#2D8CFF] dark:hover:border-[#2D8CFF] dark:hover:text-[#2D8CFF] transition-colors duration-200 !no-underline min-w-[150px] xl:min-w-[170px]"
                                                >
                                                    <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24" fill="none">
                                                        <rect width="24" height="24" rx="5" fill="#2D8CFF" />
                                                        <path d="M5.5 8.5C5.5 7.67 6.17 7 7 7H13C13.83 7 14.5 7.67 14.5 8.5V15.5C14.5 16.33 13.83 17 13 17H7C6.17 17 5.5 16.33 5.5 15.5V8.5Z" fill="white" />
                                                        <path d="M15.5 10.3L18.4 8.2C18.8 7.9 19.3 8.2 19.3 8.7V15.3C19.3 15.8 18.8 16.1 18.4 15.8L15.5 13.7V10.3Z" fill="white" />
                                                    </svg>
                                                    Join Zoom Meeting
                                                </Link>

                                                {/* YouTube */}
                                                <Link
                                                    href={item.youtubeUrl || "#"}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="h-[38px] xl:h-[42px] px-[18px] xl:px-[26px] bg-white dark:bg-[#1E1E1E] border max-md:flex-1 lg:min-w-[175px] xl:min-w-[200px] 2xl:min-w-[225px] 3xl:min-w-[245px] border-[#21212126] dark:border-white/15 rounded-[5px] xl:rounded-[6px] shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex items-center justify-center gap-[8px] text-[11px] md:text-[13px] xl:text-[14px] font-bold text-[#1F2937] dark:text-[#E5E7EB] hover:border-[#FF0000] hover:text-[#FF0000] dark:hover:border-[#FF0000] dark:hover:text-[#FF0000] transition-colors duration-200 !no-underline min-w-[130px] xl:min-w-[150px]"
                                                >
                                                    <svg className="w-[20px] h-[16px] shrink-0" viewBox="0 0 24 18" fill="none">
                                                        <rect width="24" height="18" rx="4" fill="#FF0000" />
                                                        <path d="M10 5.5L15.5 9L10 12.5V5.5Z" fill="white" />
                                                    </svg>
                                                    YouTube
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </section >
    );
}
