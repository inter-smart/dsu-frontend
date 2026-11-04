"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function SchoolCampus({ data }) {
    // slug of the school whose programme list is open (cards with `groups` are clickable)
    const [openSlug, setOpenSlug] = useState(null);
    if (!data) return null;

    const openSchool = data?.schoolsSection?.items?.find((item) => item.groups && item.slug === openSlug);

    return (
        <section className="relative py-[30px] sm:py-[40px] lg:py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px] dark:bg-[#101010]">
            <div className="container">
                {data?.heading && (
                    <div className="cmn_Title">
                        {data.heading}
                    </div>
                )}
                {data?.description?.length > 0 && (
                    <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px]  mb-[30px] ">
                        <BlocksRenderer content={data.description} />
                    </div>
                )}
                {data?.schoolsSection?.items?.length > 0 && (
                    <div className="w-full">
                        {data.schoolsSection.heading && (
                            <div className="lg:text-[24px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[45px] text-[#212121] dark:text-white font-semibold mb-[20px] 3xl:mb-[30px]">
                                {data.schoolsSection.heading}
                            </div>
                        )}
                        <div className="flex flex-wrap -m-[5px] md:-m-[10px_5px] xl:-m-[15px_5px] 3xl:-m-[20px_10px]">
                            {data.schoolsSection.items.map((item, id) => {
                                const isOpen = Boolean(item.groups) && item.slug === openSlug;
                                const cardClass = `w-full h-full border rounded-[10px] p-[20px_10px] dark:bg-[#242424] text-center ${isOpen ? "border-(--basecolor) shadow-md" : "border-black/10"}`;
                                const content = (
                                    <>
                                        {item?.title && (
                                            <div className="text-[12px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px] text-[#212121] dark:text-white font-semibold">
                                                {item.title}
                                            </div>
                                        )}
                                        {item?.programCount && (
                                            <div className="text_1 dark:text-[#d35700]">{item.programCount}</div>
                                        )}
                                    </>
                                );
                                return (
                                    <div className="w-1/2 sm:w-1/3 md:w-1/4 p-[5px] md:p-[10px_5px] xl:p-[15px_5px] 3xl:p-[20px_10px]" key={id}>
                                        {item.groups ? (
                                            <button
                                                type="button"
                                                className={`${cardClass} cursor-pointer transition-shadow hover:shadow-md`}
                                                aria-expanded={isOpen}
                                                aria-controls="school-programmes-panel"
                                                onClick={() => setOpenSlug(isOpen ? null : item.slug)}
                                            >
                                                {content}
                                            </button>
                                        ) : (
                                            <div className={cardClass}>{content}</div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        {openSchool && (
                            <div id="school-programmes-panel" className="w-full mt-[15px] xl:mt-[25px] border border-black/10 rounded-[10px] bg-white dark:bg-[#242424] p-[15px] xl:p-[25px_30px]">
                                <div className="flex flex-wrap items-center justify-between gap-[10px] mb-[15px]">
                                    <div className="text-[16px] xl:text-[22px] 2xl:text-[28px] text-[#212121] dark:text-white font-semibold">
                                        {openSchool.title}
                                    </div>
                                    {openSchool.href && (
                                        <Link href={openSchool.href} className="text-[12px] xl:text-[14px] 2xl:text-[16px] font-bold underline underline-offset-4 text-(--basecolor)">
                                            View school
                                        </Link>
                                    )}
                                </div>
                                {openSchool.groups.length > 0 ? (
                                    <div className="space-y-[20px]">
                                        {openSchool.groups.map((group) => (
                                            <div key={group.id ?? group.title}>
                                                {group.title && (
                                                    <div className="text-[14px] xl:text-[17px] 3xl:text-[22px] text-[#212121] dark:text-white font-semibold mb-[8px]">
                                                        {group.href ? (
                                                            <Link href={group.href} className="hover:text-(--basecolor)">{group.title}</Link>
                                                        ) : (
                                                            group.title
                                                        )}
                                                    </div>
                                                )}
                                                <ul className="grid gap-x-[20px] gap-y-[6px] sm:grid-cols-2 lg:grid-cols-3">
                                                    {group.programmes.map((programme) => (
                                                        <li key={programme.id}>
                                                            <Link href={programme.href} className="text_1 hover:text-(--basecolor) hover:underline">
                                                                {programme.title}
                                                                {(programme.academicLevel || programme.meta) && (
                                                                    <span className="text-[#4A5565] dark:text-[#9CA3AF]">
                                                                        {` (${[programme.academicLevel, programme.meta].filter(Boolean).join(", ")})`}
                                                                    </span>
                                                                )}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text_1">Programmes will be listed soon.</p>
                                )}
                            </div>
                        )}
                    </div>
                )}
                {data?.campusesSection?.items?.length > 0 && (
                    <div className="w-full mt-[30px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[60px] 3xl:mt-[80px] pt-[30px] xl:pt-[40px] 2xl:pt-[50px] 3xl:pt-[60px] border-t border-[#212121]">
                        {data.campusesSection.heading && (
                            <div className="lg:text-[24px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[45px] text-[#212121] dark:text-white font-semibold mb-[20px] 3xl:mb-[30px]">
                                {data.campusesSection.heading}
                            </div>
                        )}
                        <div className="flex flex-wrap -m-[5px] 3xl:-m-[10px]">
                            {data.campusesSection.items.map((item, id) => (
                                <div className="w-full sm:w-1/2" key={id}>
                                    <div className="p-[5px] 3xl:p-[10px] w-full h-full">
                                        <div className="w-full h-full bg-white border border-black/10 dark:bg-[#242424] rounded-[8px] p-[15px] xl:p-[20px_25px] 2xl:p-[30px_35px] 3xl:p-[40px_45px]">
                                            <div className="flex items-center gap-[10px] xl:gap-[20px] mb-[12px]">
                                                {item?.icon?.url && (
                                                    <div className="w-[25px] lg:w-[35px] xl:w-[42px] 2xl:w-[50px] 3xl:w-[56px] flex items-center">
                                                        <Image src={item.icon.url} className="w-full h-full object-contain" width={56} height={65} alt={item.icon.alternativeText || item.name || "Campus icon"} />
                                                    </div>
                                                )}
                                                {item?.name && (
                                                    <div className="text-[18px] lg:text-[24px] xl:text-[28px] 2xl:text-[35px] 3xl:text-[40px] text-[#212121] dark:text-white font-semibold">
                                                        {item.name}
                                                    </div>
                                                )}
                                            </div>
                                            {item?.subtitle && (
                                                <div className="text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[25px] 3xl:text-[31px] font-semibold text-[#212121] dark:text-white mb-[8px]">
                                                    {item.subtitle}
                                                </div>
                                            )}
                                            {item?.address && <p>{item.address}</p>}
                                            {item?.directions?.href && (
                                            <Link
                                                href={item.directions.href || "#"}
                                                target={item.directions.isExternal ? "_blank" : undefined}
                                                rel={item.directions.isExternal ? "noopener noreferrer" : undefined}
                                                className="inline-flex items-center mt-[15px] gap-2 hover:text-[#DC2626] font-bold text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] underline underline-offset-4 transition-colors 
                                        bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent  mb-[10px] 3xl:mb-[20px]"
                                            >
                                                {/* Map Pin Icon */}
                                                <span className="flex items-center justify-center w-[34px] h-[24px]">
                                                    <svg className="w-full h-full object-cover" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.024 4.12573C15.4168 4.12573 14.1094 5.43327 14.1094 7.04037C14.1094 8.64766 15.4169 9.9553 17.024 9.9553C18.6311 9.9553 19.9387 8.64766 19.9387 7.04037C19.9388 5.43318 18.6312 4.12573 17.024 4.12573Z" fill="url(#paint0_linear_4946_100664)" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2917 20.4981C17.2163 20.5717 17.1185 20.6084 17.0207 20.6084C16.923 20.6084 16.8252 20.5717 16.7498 20.4981C16.7015 20.451 15.5803 19.3526 14.1998 17.6512H12.3516L14.0184 24.0811H20.7925L27.4074 17.6512H19.8417C18.4612 19.3526 17.34 20.4509 17.2917 20.4981Z" fill="url(#paint1_linear_4946_100664)" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6149 17.8868L2.25781 24.0812H13.2207L11.6149 17.8868Z" fill="url(#paint2_linear_4946_100664)" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M34.2545 24.0812L29.1197 17.6512H28.5212L21.9062 24.0812H34.2545Z" fill="url(#paint3_linear_4946_100664)" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M-0.210938 24.0812H0.849961L10.5629 17.6512H4.92395L-0.210938 24.0812Z" fill="url(#paint4_linear_4946_100664)" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0251 0C13.1429 0 9.98438 3.15829 9.98438 7.04043C9.98438 10.4485 12.5443 14.3485 14.6919 17.0202C15.6975 18.2714 16.5941 19.2252 17.0251 19.6688C17.4561 19.2252 18.3527 18.2714 19.3583 17.0202C21.5058 14.3485 24.0658 10.4485 24.0658 7.04034C24.0658 3.15829 20.9074 0 17.0251 0ZM17.0251 10.7313C14.9901 10.7313 13.3345 9.07556 13.3345 7.04043C13.3345 5.00549 14.9901 3.34987 17.0251 3.34987C19.06 3.34987 20.7157 5.0054 20.7157 7.04043C20.7157 9.07556 19.0601 10.7313 17.0251 10.7313Z" fill="url(#paint5_linear_4946_100664)" />
                                                        <defs>
                                                            <linearGradient id="paint0_linear_4946_100664" x1="14.1094" y1="7.04051" x2="19.9387" y2="7.04051" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#DC2626" />
                                                                <stop offset="1" stop-color="#F97316" />
                                                            </linearGradient>
                                                            <linearGradient id="paint1_linear_4946_100664" x1="12.3516" y1="20.8662" x2="27.4074" y2="20.8662" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#DC2626" />
                                                                <stop offset="1" stop-color="#F97316" />
                                                            </linearGradient>
                                                            <linearGradient id="paint2_linear_4946_100664" x1="2.25781" y1="20.984" x2="13.2207" y2="20.984" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#DC2626" />
                                                                <stop offset="1" stop-color="#F97316" />
                                                            </linearGradient>
                                                            <linearGradient id="paint3_linear_4946_100664" x1="21.9062" y1="20.8662" x2="34.2545" y2="20.8662" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#DC2626" />
                                                                <stop offset="1" stop-color="#F97316" />
                                                            </linearGradient>
                                                            <linearGradient id="paint4_linear_4946_100664" x1="-0.210938" y1="20.8662" x2="10.5629" y2="20.8662" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#DC2626" />
                                                                <stop offset="1" stop-color="#F97316" />
                                                            </linearGradient>
                                                            <linearGradient id="paint5_linear_4946_100664" x1="9.98438" y1="9.83442" x2="24.0658" y2="9.83442" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#DC2626" />
                                                                <stop offset="1" stop-color="#F97316" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>

                                                </span>
                                                <span>Get Directions</span>
                                            </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </section>
    )
}
