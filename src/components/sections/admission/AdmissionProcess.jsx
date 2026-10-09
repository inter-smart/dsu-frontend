"use client";

import React from "react";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const defaultSteps = [
    {
        id: 1,
        number: "01",
        title: "Choose Your Program",
        description: "Our admission process is designed to make your application simple and convenient.",
    },
    {
        id: 2,
        number: "02",
        title: "Check Eligibility",
        description: "Review the academic qualifications, entrance requirements and eligibility criteria for your chosen programme.",
    },
    {
        id: 3,
        number: "03",
        title: "Submit Your Application",
        description: "Complete the online application form and provide the required academic and personal details.",
    },
    {
        id: 4,
        number: "04",
        title: "Selection Process",
        description: "Depending on the programme, admission may be based on DSAT, qualifying entrance examinations, academic merit or other applicable selection criteria.",
    },
    {
        id: 5,
        number: "05",
        title: "Complete Admission",
        description: "Once selected, complete the required admission formalities and secure your place at DSU.",
    },
];

export default function AdmissionProcess({ data }) {
    const heading = data?.heading || "Your Journey to DSU Starts Here";
    const description = data?.description;
    const steps = data?.steps && data.steps.length > 0 ? data.steps : defaultSteps;
    const button = data?.button || {
        label: "Start Your Applications",
        href: "#",
    };

    return (
        <section className="relative bg-white dark:bg-background py-[40px] xl:py-[60px] 2xl:py-[70px] 3xl:py-[90px]">
            <div className="container">
                {/* Heading & Subtitle */}
                <div className="mb-8 sm:mb-10 md:mb-12 xl:mb-14">
                    <h2 className="text-[26px] sm:text-[32px] md:text-[38px] xl:text-[44px] 2xl:text-[48px] 3xl:text-[55px] font-bold text-[#1E1E1E] dark:text-white tracking-tight leading-[1.2]">
                        {heading}
                    </h2>

                    {description && (
                        <div className="mt-2.5 sm:mt-3 text-[14px] sm:text-[15px] xl:text-[16px] text-[#6B7280] dark:text-[#9CA3AF] max-w-3xl leading-relaxed">
                            {Array.isArray(description) ? (
                                <BlocksRenderer
                                    content={description}
                                    blocks={{
                                        paragraph: ({ children }) => (
                                            <p className="text_1 !my-0 !text-inherit leading-relaxed">
                                                {children}
                                            </p>
                                        ),
                                    }}
                                />
                            ) : (
                                <p className="text_1 !my-0 !text-inherit leading-relaxed">
                                    {description}
                                </p>
                            )}
                        </div>
                    )}
                </div>

                {/* Steps List Timeline */}
                <div className="relative">
                    {steps.map((step, index) => {
                        const isLast = index === steps.length - 1;

                        return (
                            <div
                                key={step.id || index}
                                className="relative flex items-start gap-3 sm:gap-7 xl:gap-8 pb-8 sm:pb-10 xl:pb-12 last:pb-0"
                            >
                                {/* Dotted connecting line to next step */}
                                {!isLast && (
                                    <div
                                        className="absolute left-[27px] sm:left-[30px] xl:left-[32px] 2xl:left-[38.5px] 3xl:left-[46px] -translate-x-1/2 top-[27px] sm:top-[30px] xl:top-[32px] 2xl:top-[38.5px] 3xl:top-[46px] -bottom-[27px] sm:-bottom-[30px] xl:-bottom-[32px] 2xl:-bottom-[38.5px] 3xl:-bottom-[46px] w-0 pointer-events-none z-0"
                                        style={{ borderLeft: "2px dotted #9CA3AF" }}
                                        aria-hidden="true"
                                    />
                                )}

                                {/* Circle with Number */}
                                <div className="relative flex items-center justify-center border-white border-[5px] w-[54px] h-[54px] sm:w-[60px] sm:h-[60px] xl:w-[64px] xl:h-[64px] 2xl:h-[77px] 2xl:w-[77px] 3xl:w-[92px] 3xl:h-[92px] rounded-full p-[1.5px] bg-gradient-to-b from-[#EA580C] to-[#F97316] shrink-0 z-10 shadow-xs">
                                    <div className="w-full h-full rounded-full bg-white dark:bg-[#18181B] flex items-center justify-center">
                                        <span className="text-[17px] sm:text-[19px] xl:text-[21px] 2xl:text-[28px] 3xl:text-[35px] font-bold text-[#1E1E1E] dark:text-white tracking-tight">
                                            {step.number}
                                        </span>
                                    </div>
                                </div>

                                {/* Step Title & Description */}
                                <div className="pt-2 sm:pt-2.5 xl:pt-3 max-w-3xl">
                                    <h3 className="text-[17px] sm:text-[19px] xl:text-[21px] 2xl:text-[26px] 3xl:text-[30px] font-bold text-[#1E1E1E] dark:text-white leading-snug">
                                        {step.title}
                                    </h3>
                                    <p className="mt-1 sm:mt-1.5 text-[13px] sm:text-[14px] xl:text-[15px] 3xl:text-[18px] text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Button */}
                {button && (
                    <div className="mt-8 sm:mt-10 xl:mt-12">
                        <Link
                            href={button.href || "#"}
                            className="group relative inline-flex h-[36px] sm:h-[40px] xl:h-[44px] 3xl:h-[50px] items-center justify-center gap-[10px] overflow-hidden rounded-[5px] bg-gradient-to-r from-[#DC2626] to-[#F97316] px-[20px] sm:px-[24px] text-[13px] sm:text-[14px] xl:text-[15px] font-bold capitalize text-white transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.35)] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full"
                        >
                            <span className="relative z-[1] transition-transform duration-300">
                                {button.label || "Start Your Applications"}
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
                    </div>
                )}
            </div>
        </section>
    );
}
