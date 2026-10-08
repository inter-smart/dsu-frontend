"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const defaultContactData = {
    heading: "Contact Admissions",
    description: [
        {
            type: "paragraph",
            children: [
                {
                    type: "text",
                    text: "Have questions about admissions? Connect with the appropriate DSU campus or admission office.",
                },
            ],
        },
    ],
    mainOffice: {
        heading: "Administrative & Main Admission Office",
        subtitle: "Dayananda Sagar University · City Innovation Campus",
        columns: [
            {
                id: 1,
                label: "ADDRESS",
                value: "Kudlu Gate, Hosur Road, Bengaluru – 560 114",
                directions: {
                    label: "Get Directions",
                    href: "#",
                },
            },
            {
                id: 2,
                label: "ADMISSIONS HELPLINE",
                values: [
                    { value: "+91 80 4646 1800", href: "tel:+918046461800" },
                    { value: "+91 6366 88 5507", href: "tel:+916366885507" },
                ],
            },
            {
                id: 3,
                label: "EMAIL",
                values: [
                    { value: "admissions@dsu.edu.in", href: "mailto:admissions@dsu.edu.in" },
                ],
            },
        ],
        buttons: [
            {
                id: 1,
                label: "Enquire Now",
                href: "#",
                variant: "primary",
            },
            {
                id: 2,
                label: "WhatsApp",
                href: "#",
                variant: "secondary",
                icon: "whatsapp",
            },
        ],
    },
    campuses: [
        {
            id: 1,
            icon: {
                alternativeText: "Contact Icon",
                mime: "image/svg+xml",
                url: "/images/contact-icon-1.svg",
            },
            name: "DSU Main Campus",
            subtitle: "Dayananda Sagar University",
            address: "Devarakaggalahalli, Harohalli, Kanakapura Road, Bengaluru South Dt. – 562 112",
            directions: {
                label: "Get Directions",
                href: "#",
            },
            email: {
                label: "E-Mail:",
                values: [
                    { value: "admissions@dsu.edu.in", href: "mailto:admissions@dsu.edu.in" },
                ],
            },
            contacts: [
                {
                    id: 1,
                    label: "Office of Registrar :",
                    values: [
                        { value: "080 24496999(Extn-2)", href: "tel:08024496999" },
                    ],
                },
                {
                    id: 2,
                    label: "Reception:",
                    values: [
                        { value: "080 24496999(Extn-1)", href: "tel:08024496999" },
                    ],
                },
                {
                    id: 3,
                    label: "Registrar:",
                    values: [
                        { value: "080 24496999(Extn-3)", href: "tel:08024496999" },
                    ],
                },
                {
                    id: 4,
                    label: "Dean, SOE:",
                    values: [
                        { value: "080 24496999(Extn-4)", href: "tel:08024496999" },
                    ],
                },
            ],
        },
        {
            id: 2,
            icon: {
                alternativeText: "Contact Icon",
                mime: "image/svg+xml",
                url: "/images/contact-icon-2.svg",
            },
            name: "DSU City Innovation Campus",
            subtitle: "Innovation Campus",
            address: "Administrative & Main Admission office, Kudlu Gate, Hosur Road, Bengaluru – 560 068",
            directions: {
                label: "Get Directions",
                href: "#",
            },
            email: {
                label: "E-Mail:",
                values: [
                    { value: "admissions@dsu.edu.in", href: "mailto:admissions@dsu.edu.in" },
                    { value: "dsat@dsu.edu.in", href: "mailto:dsat@dsu.edu.in" },
                ],
            },
            contacts: [
                {
                    id: 1,
                    label: "Office of Registrar :",
                    values: [
                        { value: "080 4909 2910 / 11", href: "tel:08049092910" },
                    ],
                },
                {
                    id: 2,
                    label: "Office of Dean (School of Engineering):",
                    values: [
                        { value: "080 4909 2986 / 32 / 33", href: "tel:08049092986" },
                    ],
                },
                {
                    id: 3,
                    label: "Dean - MBA:",
                    values: [
                        { value: "080 4909 2931", href: "tel:08049092931" },
                    ],
                },
                {
                    id: 4,
                    label: "Research Cell:",
                    values: [
                        { value: "080 4909 2912 / 91 97390 17462", href: "tel:08049092912" },
                    ],
                },
            ],
        },
    ],
};

export default function AdmissionContact({ data }) {
    const contactData = data || defaultContactData;
    const heading = contactData?.heading || "Contact Admissions";
    const description = contactData?.description || defaultContactData.description;
    const mainOffice = contactData?.mainOffice || defaultContactData.mainOffice;
    const campuses = contactData?.campuses && contactData.campuses.length > 0 ? contactData.campuses : defaultContactData.campuses;

    const addressCol = mainOffice?.columns?.find((col) => col.label?.toUpperCase().includes("ADDRESS")) || mainOffice?.columns?.[0];
    const helplineCol = mainOffice?.columns?.find((col) => col.label?.toUpperCase().includes("HELPLINE")) || mainOffice?.columns?.[1];
    const emailCol = mainOffice?.columns?.find((col) => col.label?.toUpperCase().includes("EMAIL")) || mainOffice?.columns?.[2];

    const enquireBtn = mainOffice?.buttons?.find((b) => b.variant === "primary" || b.label?.toLowerCase().includes("enquire")) || mainOffice?.buttons?.[0];
    const whatsappBtn = mainOffice?.buttons?.find((b) => b.variant === "secondary" || b.icon === "whatsapp" || b.label?.toLowerCase().includes("whatsapp")) || mainOffice?.buttons?.[1];

    return (
        <section className="[--text-color:#212121] dark:[--text-color:#ffffff] w-full h-auto py-10 sm:py-12.5 lg:py-17.5 2xl:py-22.5 3xl:py-27.5 bg-white dark:bg-[#101010] block">
            <div className="container">
                {/* Section Header */}
                <div className="mb-6 sm:mb-8 xl:mb-10">
                    <h2 className="text-2xl sm:text-3xl lg:text-[36px] 2xl:text-[42px] 3xl:text-[48px] leading-[1.15] font-bold text-(--text-color) tracking-tight">
                        {heading}
                    </h2>

                    {description && (
                        <div className="mt-2.5 2xl:mt-3 text-[13px] 2xl:text-[15px] 3xl:text-[18px] leading-relaxed text-[#4A5565] dark:text-[#9CA3AF] max-w-4xl">
                            {Array.isArray(description) ? (
                                <BlocksRenderer
                                    content={description}
                                    blocks={{
                                        paragraph: ({ children }) => (
                                            <p className="!my-0 !text-inherit leading-relaxed">
                                                {children}
                                            </p>
                                        ),
                                    }}
                                />
                            ) : (
                                <p className="!my-0 !text-inherit leading-relaxed">
                                    {description}
                                </p>
                            )}
                        </div>
                    )}
                </div>

                {/* Administrative & Main Admission Office Banner */}
                {mainOffice && (
                    <div className="w-full bg-[#FFF7EE] dark:bg-[#18191B] border border-[#FED7AA]/50 dark:border-white/10 rounded-[8px] sm:rounded-[10px] 2xl:rounded-[14px] p-[20px_15px_15px_15px] sm:p-[25px_20px_20px_20px] lg:p-[30px_25px_25px_25px] 2xl:p-[40px_35px_35px_30px] 3xl:p-[50px_45px_45px_40px] mb-8 sm:mb-10 xl:mb-12">
                        {/* Banner Title & Subtitle */}
                        <div className="w-full h-auto mb-3.75 sm:mb-5">
                            <h3 className="text-base sm:text-lg lg:text-xl 2xl:text-[25px] 3xl:text-[32px] leading-[1.1] font-semibold text-(--text-color)">
                                {mainOffice.heading}
                            </h3>
                            {mainOffice.subtitle && (
                                <p className="text-[13px] 2xl:text-[15px] 3xl:text-[18px] leading-[1.1] font-normal text-[#4A5565] dark:text-[#9CA3AF] mt-1.5 sm:mt-2">
                                    {mainOffice.subtitle}
                                </p>
                            )}
                        </div>

                        {/* 3 White Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3.5 2xl:gap-5 mb-5 sm:mb-6">
                            {/* Address Card */}
                            {addressCol && (
                                <div className="bg-white dark:bg-[#202225] rounded-[6px] 2xl:rounded-[8px] p-4 sm:p-5 2xl:p-6 border border-black/10 dark:border-white/10 flex flex-col justify-between shadow-xs">
                                    <div className="text_1 font-medium tracking-wider text-[#212121] dark:text-gray-400 uppercase mb-2">
                                        {addressCol.label}
                                    </div>
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="text-[13px] 2xl:text-[15px] 3xl:text-[18px] leading-snug font-normal text-[#4A5565] dark:text-gray-200">
                                            {addressCol.value?.includes("Bengaluru") ? (
                                                <>
                                                    <span>{addressCol.value.split("Bengaluru")[0].trim()}</span>
                                                    <br />
                                                    <span>Bengaluru{addressCol.value.split("Bengaluru")[1]}</span>
                                                </>
                                            ) : (
                                                addressCol.value
                                            )}
                                        </div>
                                        {addressCol.directions && (
                                            <Link
                                                href={addressCol.directions.href || "/"}
                                                aria-label="Get Directions"
                                                className="group inline-flex items-center shrink-0"
                                            >
                                                <div className="w-5 2xl:w-6 3xl:w-7 h-auto aspect-35/25 overflow-hidden flex items-center justify-center">
                                                    <Image
                                                        src="/images/direction-icon.svg"
                                                        alt="Directions"
                                                        width={35}
                                                        height={25}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <div className="text-xs sm:text-sm 2xl:text-[15px] 3xl:text-[18px] leading-[1.1] font-semibold bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit pl-1.5 transition-all duration-300 group-hover:underline">
                                                    {addressCol.directions.label || "Get Directions"}
                                                </div>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Admissions Helpline Card */}
                            {helplineCol && (
                                <div className="bg-white dark:bg-[#202225] rounded-[6px] 2xl:rounded-[8px] p-4 sm:p-5 2xl:p-6 border border-black/10 dark:border-white/10 flex flex-col justify-between shadow-xs">
                                    <div className="text_1 font-medium tracking-wider text-[#212121] dark:text-gray-400 uppercase mb-3">
                                        {helplineCol.label}
                                    </div>
                                    <div className="text-[13px] 2xl:text-[15px] 3xl:text-[18px] leading-snug font-normal text-[#4A5565] dark:text-gray-200 flex flex-col gap-1">
                                        {helplineCol.values?.map((item, idx) => (
                                            <Link
                                                key={idx}
                                                href={item.href || `tel:${item.value?.replace(/\s+/g, "")}`}
                                                className="hover:text-(--basecolor) transition-colors hover:underline w-fit"
                                            >
                                                {item.value}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Email Card */}
                            {emailCol && (
                                <div className="bg-white dark:bg-[#202225] rounded-[6px] 2xl:rounded-[8px] p-4 sm:p-5 2xl:p-6 border border-black/10 dark:border-white/10 flex flex-col  shadow-xs">
                                    <div className="text-[11px] 2xl:text-[13px] 3xl:text-[18px] tracking-wider text-[#212121] dark:text-gray-400 uppercase mb-2">
                                        {emailCol.label}
                                    </div>
                                    <div className="text-[13px] 2xl:text-[15px] 3xl:text-[17px] leading-snug font-normal text-[#4A5565] dark:text-gray-200">
                                        {emailCol.values?.map((item, idx) => (
                                            <Link
                                                key={idx}
                                                href={item.href || `mailto:${item.value}`}
                                                className="hover:text-(--basecolor) transition-colors hover:underline break-all"
                                            >
                                                {item.value}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-3 sm:gap-3.5">
                            {enquireBtn && (
                                <Link
                                    href={enquireBtn.href || "#"}
                                    className="group relative inline-flex h-[36px] sm:h-[40px] xl:h-[44px] 3xl:h-[50px] items-center justify-center gap-[10px] overflow-hidden rounded-[5px] bg-gradient-to-r from-[#DC2626] to-[#F97316] px-[20px] sm:px-[24px] text_1 font-bold capitalize text-white transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.35)] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full"
                                >
                                    <span className="relative z-[1] transition-transform duration-300">
                                        {enquireBtn.label || "Start Your Applications"}
                                    </span>

                                    <div className="relative z-[1] flex h-[13px] w-[15px] items-center justify-center transition-all duration-300 group-hover:translate-x-[3px] group-hover:scale-110">
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
                            )}

                            {whatsappBtn && (
                                <Link
                                    href={whatsappBtn.href || "#"}
                                    className="group relative flex h-[36px] sm:h-[40px] xl:h-[44px] 3xl:h-[50px]  w-fit items-center justify-center gap-[10px] overflow-hidden rounded-[6px] bg-gradient-to-r from-[#DC2626] to-[#F97316] text_1 font-bold capitalize text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)] xl:h-[35px]  2xl:h-[40px] 2xl:gap-[10px] 2xl:rounded-[4px] 3xl:h-[50px] p-[1px] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full"

                                > 
                                 <div className="w-full bg-white h-full overflow-hidden rounded-[4px] flex items-center gap-[10px] px-6">
                                        <span className="relative z-[1] text-black transition-transform duration-300 w-full  ">
                                            {whatsappBtn.label}
                                        </span>


                                        <div className="relative z-[1] flex h-[25px] w-[25px] items-center justify-center transition-all duration-300 group-hover:translate-x-[4px] group-hover:scale-110">
                                            <svg  className="w-full h-full object-cover" viewBox="0 0 17 17" fill="none"  >
                                                <g clip-path="url(#clip0_5987_109481)">
                                                    <path d="M0.337077 16.1797C0.247414 16.1797 0.160449 16.144 0.096404 16.0779C0.00404493 15.9835 -0.0249437 15.8446 0.0229212 15.7213L1.27887 12.455C0.440896 11.1532 0 9.64781 0 8.08984C0 3.62897 3.62897 0 8.08984 0C12.5507 0 16.1797 3.62897 16.1797 8.08984C16.1797 12.5507 12.5507 16.1797 8.08984 16.1797C6.57704 16.1797 5.10402 15.7577 3.82043 14.9568L0.450335 16.1601C0.413256 16.1736 0.375504 16.1797 0.337077 16.1797ZM3.8629 14.2469C3.92762 14.2469 3.99166 14.2651 4.04694 14.3015C5.25368 15.0896 6.65187 15.5062 8.08984 15.5062C12.1786 15.5062 15.5055 12.1793 15.5055 8.09052C15.5055 4.00178 12.1786 0.674828 8.08984 0.674828C4.0011 0.674828 0.674154 4.00178 0.674154 8.09052C0.674154 9.57231 1.10966 11.0029 1.93482 12.2271C1.99617 12.3181 2.00898 12.4341 1.96988 12.5366L0.915501 15.2783L3.74964 14.2664C3.78605 14.2536 3.82447 14.2469 3.8629 14.2469Z" fill="#212121" />
                                                    <path d="M10.1104 12.1328C9.05126 12.1328 7.01801 10.8661 6.16386 10.0119C5.3097 9.1571 4.04297 7.12385 4.04297 6.06543C4.04297 4.976 4.96993 4.04297 5.72835 4.04297H6.40251C6.5306 4.04297 6.6479 4.11578 6.70453 4.23106C6.7052 4.23173 7.11104 5.0569 7.37666 5.57465C7.67598 6.15914 7.11306 6.84677 6.79284 7.17104C6.90745 7.46497 7.17509 8.04744 7.65171 8.52407C8.12834 9.0007 8.71081 9.26901 9.00474 9.38294C9.32833 9.06204 10.016 8.49845 10.6011 8.79912C11.1189 9.06541 11.9434 9.47058 11.944 9.47058C12.06 9.52788 12.1328 9.64519 12.1328 9.77327V10.4474C12.1328 11.2065 11.1991 12.1328 10.1104 12.1328ZM5.72835 4.71712C5.34746 4.71712 4.71712 5.34746 4.71712 6.06543C4.71712 6.84677 5.81869 8.71216 6.64116 9.53462C7.5398 10.4333 9.38766 11.4587 10.1104 11.4587C10.8283 11.4587 11.4587 10.8283 11.4587 10.4474V9.98294C11.1823 9.84676 10.6605 9.58788 10.293 9.39912C10.1353 9.31418 9.65597 9.65193 9.35193 9.99642C9.26496 10.0948 9.12946 10.1326 9.00541 10.0969C8.96294 10.0847 7.96452 9.78945 7.17509 9.00002C6.38565 8.21059 6.09105 7.21217 6.07824 7.16969C6.04183 7.0443 6.08161 6.90947 6.17869 6.82318C6.52251 6.51914 6.85823 6.04183 6.77599 5.88139C6.5879 5.51532 6.3297 4.99353 6.19352 4.71712H5.72835Z" fill="#212121" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_5987_109481">
                                                        <rect width="16.1797" height="16.1797" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                )}

                {/* Campus Cards Grid (Exact font size & styling matching contact.jsx) */}
                <div className="w-full h-auto md:-mx-1.25 2xl:-mx-2.5 flex flex-wrap">
                    {campuses.map((item, index) => {
                        const iconUrl = item?.icon?.url || (item?.id === 2 ? "/images/contact-icon-2.svg" : "/images/contact-icon-1.svg");

                        return (
                            <div
                                key={item?.id || index}
                                className="w-full md:w-1/2 h-auto p-1.25 2xl:p-2.5 block"
                            >
                                <div className="w-full h-full p-[20px_15px_15px_15px] sm:p-[30px_25px_20px_20px] lg:p-[40px_20px_30px_25px] 2xl:p-[50px_40px_40px_30px] 3xl:p-[60px_50px_45px_40px] bg-white dark:bg-[#18191B] border border-black/10 dark:border-white/10 rounded-[5px] sm:rounded-[7px] 2xl:rounded-[10px] overflow-hidden flex flex-col justify-between">
                                    <div className="w-full h-auto mb-2.5 lg:mb-3.75 3xl:mb-5">
                                        {/* Campus Header (Icon + Title) */}
                                        <div className="[--icon-size:30px] sm:[--icon-size:35px] lg:[--icon-size:40px] 2xl:[--icon-size:50px] 3xl:[--icon-size:60px] w-full h-auto mb-2.5 lg:mb-3.75 2xl:mb-5 3xl:mb-7.5 flex items-center">
                                            <div className="w-(--icon-size) h-auto aspect-square overflow-hidden flex items-center justify-center">
                                                <Image
                                                    src={iconUrl}
                                                    alt={item?.icon?.alternativeText || "Contact Icon"}
                                                    width={60}
                                                    height={60}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div className="w-[calc(100%-var(--icon-size))] pl-2.5 lg:pl-3.75 2xl:pl-5 3xl:pl-6.25">
                                                <div className="text-lg sm:text-xl lg:text-[27px] 2xl:text-[32px] 3xl:text-[40px] leading-[1.1] font-bold text-(--text-color)">
                                                    {item?.name}
                                                </div>
                                            </div>
                                        </div>

                                        {/* University / Subtitle */}
                                        <div className="text-base sm:text-lg lg:text-xl 2xl:text-[25px] 3xl:text-[32px] leading-[1.1] font-semibold text-(--text-color) mb-2.5 2xl:mb-3.75 3xl:mb-5">
                                            {item?.subtitle}
                                        </div>

                                        {/* Address */}
                                        <div className="text-[13px] 2xl:text-[15px] 3xl:text-[18px] leading-[1.1] font-normal text-[#4A5565] mb-2.5 lg:mb-3.75 3xl:mb-5">
                                            {item?.address}
                                        </div>

                                        {/* Get Directions Link */}
                                        {item?.directions && (
                                            <Link
                                                href={item?.directions?.href || "/"}
                                                aria-label="Get Directions"
                                                className="group w-full h-auto flex items-center"
                                            >
                                                <div className="w-6.25 2xl:w-7.5 3xl:w-8.75 h-auto aspect-35/25 overflow-hidden flex items-center justify-center">
                                                    <Image
                                                        src={"/images/direction-icon.svg"}
                                                        alt="Directions"
                                                        width={35}
                                                        height={25}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <div className="text-sm 2xl:text-[17px] 3xl:text-xl leading-[1.1] font-semibold bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit pl-1.75 2xl:pl-2.5 transition-all duration-300 group-hover:underline">
                                                    {item?.directions?.label || "Get Directions"}
                                                </div>
                                            </Link>
                                        )}
                                    </div>

                                    {/* Contact Details List (Separator with Email and Contacts) */}
                                    <div className="w-full h-auto py-3.75 sm:py-5 2xl:py-7.5 3xl:py-8.75 -mx-1.25 border-t border-black/10 dark:border-white/10 flex flex-wrap">
                                        {/* E-Mail Item (Full width) */}
                                        {item?.email && (
                                            <div className="w-full h-auto py-2.5 sm:p-[7px_5px] 2xl:p-[10px_5px] flex items-center">
                                                <div className="[--icon-size:40px] lg:[--icon-size:45px] 2xl:[--icon-size:50px] 3xl:[--icon-size:60px] group w-full h-full flex items-center">
                                                    <div className="w-(--icon-size) h-auto aspect-square p-1.75 lg:p-2 2xl:p-2.75 3xl:p-3.25 bg-[#BABABA]/10 rounded-[5px] border border-black/10 dark:border-white/10 overflow-hidden flex items-center justify-center transition-colors duration-300 group-hover:bg-(--basecolor2)/20 group-hover:border-(--basecolor2)">
                                                        <Image
                                                            src="/images/contact-inner-icon-1.svg"
                                                            alt="Email Icon"
                                                            width={60}
                                                            height={60}
                                                            className="w-full h-full object-contain dark:invert"
                                                        />
                                                    </div>
                                                    <div className="w-[calc(100%-var(--icon-size))] pl-2.5">
                                                        <div className="text-[13px] 2xl:text-[15px] 3xl:text-[17px] leading-[1.1] font-medium text-[#212121] dark:text-white mb-1.25 2xl:mb-2.5">
                                                            {item.email.label || "E-Mail:"}
                                                        </div>
                                                        <div className="text-[13px] 2xl:text-[15px] 3xl:text-[18px] leading-snug font-medium text-[#4A5565] dark:text-[#9CA3AF] flex flex-wrap items-center gap-y-1">
                                                            {item.email.values?.map((emailVal, idx) => (
                                                                <span key={idx} className="inline-flex items-center">
                                                                    <Link
                                                                        href={emailVal.href || `mailto:${emailVal.value}`}
                                                                        className="transition-colors hover:underline hover:text-(--basecolor)"
                                                                    >
                                                                        {emailVal.value}
                                                                    </Link>
                                                                    {idx < item.email.values.length - 1 && (
                                                                        <span className="mx-1 text-[#4A5565]">|</span>
                                                                    )}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Phone Contacts (2-column on desktop) */}
                                        {item?.contacts?.map((contact, cIdx) => (
                                            <div
                                                key={contact?.id || cIdx}
                                                className="w-full lg:w-1/2 h-auto py-3 sm:p-[7px_5px] 2xl:p-[10px_5px] flex items-center"
                                            >
                                                <div className="[--icon-size:35px] lg:[--icon-size:40px] 2xl:[--icon-size:50px] 3xl:[--icon-size:60px] group w-full h-full flex items-center">
                                                    <div className="w-(--icon-size) h-auto aspect-square p-1.75 lg:p-2 2xl:p-2.75 3xl:p-3.25 bg-[#BABABA]/10 rounded-[5px] border border-black/10 dark:border-white/10 overflow-hidden flex items-center justify-center transition-colors duration-300 group-hover:bg-(--basecolor2)/20 group-hover:border-(--basecolor2)">
                                                        <Image
                                                            src="/images/contact-inner-icon-2.svg"
                                                            alt="Phone Icon"
                                                            width={60}
                                                            height={60}
                                                            className="w-full h-full object-contain dark:invert"
                                                        />
                                                    </div>
                                                    <div className="w-[calc(100%-var(--icon-size))] pl-2.5">
                                                        <div className="text-[13px] 2xl:text-[15px] 3xl:text-[17px] leading-[1.1] font-medium text-[#212121] dark:text-white mb-1.25 2xl:mb-2.5">
                                                            {contact.label}
                                                        </div>
                                                        <div className="text-[13px] 2xl:text-[15px] 3xl:text-[17px] leading-snug font-medium text-[#4A5565] dark:text-[#9CA3AF] flex flex-wrap items-center gap-y-1">
                                                            {contact.values?.map((phoneVal, vIdx) => (
                                                                <span key={vIdx} className="inline-flex items-center">
                                                                    <Link
                                                                        href={phoneVal.href || `tel:${phoneVal.value?.replace(/\s+/g, "")}`}
                                                                        className="transition-colors hover:underline hover:text-(--basecolor)"
                                                                    >
                                                                        {phoneVal.value}
                                                                    </Link>
                                                                    {vIdx < contact.values.length - 1 && (
                                                                        <span className="mx-1 text-[#4A5565]">/</span>
                                                                    )}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Divider before Visit Campus */}
                <div className="w-full h-[1px] bg-[#E5E7EB] dark:bg-white/10 my-8 sm:my-10 lg:my-14" />

                {/* Visit Campus Section */}
                <div className="w-full h-auto">
                    <div className="mb-6 sm:mb-8">
                        <h2 className="text-2xl sm:text-3xl lg:text-[36px] 2xl:text-[42px] 3xl:text-[48px] leading-[1.15] font-bold text-(--text-color) tracking-tight">
                            {data?.visitCampus?.heading || data?.visitus?.heading || "Visit Campus"}
                        </h2>
                        <p className="mt-2 sm:mt-2.5 text-[13px] 2xl:text-[15px] 3xl:text-lg leading-relaxed text-[#4A5565] dark:text-[#9CA3AF]">
                            {data?.visitCampus?.description || data?.visitus?.description || "Choose the campus you would like to visit and get directions."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 lg:gap-5">
                        {(data?.visitCampus?.campuses || data?.visitus?.campuses || [
                            {
                                id: 1,
                                name: "DSU Main Campus",
                                href: campuses?.[0]?.directions?.href || "/",
                            },
                            {
                                id: 2,
                                name: "DSU City Innovation Campus",
                                href: campuses?.[1]?.directions?.href || "/",
                            },
                        ]).map((visitItem, vIdx) => (
                            <Link
                                key={visitItem.id || vIdx}
                                href={visitItem.href || visitItem.directions?.href || "/"}
                                className="group flex items-center justify-between bg-white dark:bg-[#18191B] border border-[#FED7AA]/60 dark:border-white/10 hover:border-[#EA580C]/40 rounded-[6px] sm:rounded-[8px] px-4 sm:px-5 py-3 sm:py-3.5 transition-all duration-200 shadow-2xs hover:shadow-xs"
                            >
                                <span className="text-[13px] sm:text-[14px] 2xl:text-[15px] font-semibold text-[#1E1E1E] dark:text-white leading-tight">
                                    {visitItem.name}
                                </span>
                                <span className="text-[13px] sm:text-[14px] 2xl:text-[15px] font-semibold text-[#EA580C] group-hover:text-[#C2410C] transition-colors leading-tight">
                                    Get Directions &gt;
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
