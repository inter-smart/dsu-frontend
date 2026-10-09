"use client";

import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const defaultItems = [
    { id: 1, label: "Passport-size color photograph" },
    { id: 2, label: "Scanned signature" },
    { id: 3, label: "Qualification documents from 10th grade to the highest qualification" },
    { id: 4, label: "Diplomas or degrees, where applicable" },
    { id: 5, label: "Valid government-issued photo ID" },
    { id: 6, label: "Residence / address proof, if different from ID" },
    { id: 7, label: "Disability certificate, if applicable" },
];

export default function AdmissionDocument({ data }) {
    const heading = data?.heading || "Document Verification";
    const description = data?.description;
    const requiredDocsHeading = data?.requiredDocuments?.heading || "Required Documents";
    const items = data?.requiredDocuments?.items && data.requiredDocuments.items.length > 0
        ? data.requiredDocuments.items
        : defaultItems;

    const note = data?.note || {
        title: "* DSU instructions Before you upload",
        description:
            "Ensure your photograph, government ID and mark sheets are clear and not password-protected. DSU also instructs international applicants to scan the original documents, not photocopies.",
    };

    return (
        <section className="relative bg-white dark:bg-background py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[85px]">
            <div className="container">
                {/* Header */}
                <div className="mb-6 sm:mb-8 xl:mb-10">
                    <h2 className="text-[26px] sm:text-[32px] md:text-[38px] xl:text-[44px] 2xl:text-[48px] font-bold text-[#1E1E1E] dark:text-white tracking-tight leading-[1.2]">
                        {heading}
                    </h2>

                    {description && (
                        <div className="mt-2 sm:mt-2.5 text-[13px] sm:text-[14px] xl:text-[15px] 3xl:text-[17px] text-[#6B7280] dark:text-[#9CA3AF] max-w-4xl leading-relaxed">
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

                {/* Required Documents Checklist */}
                <div className="mb-8 sm:mb-10 xl:mb-12">
                    <h3 className="text-[17px] sm:text-[19px] xl:text-[21px] 2xl:text-[23px] font-bold text-[#1E1E1E] dark:text-white leading-snug mb-4 sm:mb-5 xl:mb-6">
                        {requiredDocsHeading}
                    </h3>

                    <ul className="space-y-3 sm:space-y-3.5 xl:space-y-4">
                        {items.map((item, index) => (
                            <li
                                key={item.id || index}
                                className="flex items-start gap-2.5 sm:gap-3 text-[13px] sm:text-[14px] xl:text-[15px] 3xl:text-[18px] text-[#4A5565] dark:text-[#D1D5DB] leading-relaxed"
                            >
                                <span className="shrink-0 mt-[2px] text-[#EA580C] flex items-center justify-center">
                                    <svg className="w-[12px] 2xl:w-[14px] 3xl:w-[16px]" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.81273 11.6877C4.57806 11.6877 4.3434 11.5979 4.16465 11.4191L0.268813 7.52331C-0.0896042 7.1649 -0.0896042 6.58556 0.268813 6.22715C0.627229 5.86873 1.20656 5.86873 1.56498 6.22715L4.81273 9.4749L14.0188 0.268813C14.3772 -0.0896042 14.9566 -0.0896042 15.315 0.268813C15.6734 0.627229 15.6734 1.20656 15.315 1.56498L5.46081 11.4191C5.28206 11.5979 5.0474 11.6877 4.81273 11.6877Z" fill="url(#paint0_linear_5987_104313)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_5987_104313" x1="0" y1="5.84386" x2="15.5838" y2="5.84386" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#DC2626" />
                                                <stop offset="1" stop-color="#F97316" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                </span>
                                <span>{item.label || item.title || item.name || item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Instructions Note Banner */}
                {note && (
                    <div className="w-full rounded-[8px] xl:rounded-[10px] bg-[#FFF8EE] dark:bg-[#1C1917] border border-[#FED7AA]/50 dark:border-white/10 p-4 sm:p-5 xl:p-6 2xl:p-7 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                        {note.title && (
                            <h4 className="text-[14px] sm:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[22px] inline-flex font-semibold bg-gradient-to-r from-[#DC2626] from-[50%] to-[#F97316] tracking-tighter bg-clip-text text-transparent mb-1 sm:mb-1.5 leading-snug">
                                {note.title}
                            </h4>
                        )}
                        {note.description && (
                            <p className="text_1 text-[#4A5565] dark:text-[#D1D5DB] leading-relaxed !my-0">
                                {note.description}
                            </p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
