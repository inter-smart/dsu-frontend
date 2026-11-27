import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { withLineBreaks } from "@/lib/line-breaks";

function ContactPerson({ person }) {
    return (
        <>
            <div className="text-[16px] sm:text-[17px] xl:text-[18px] 2xl:text-[20px] font-bold text-[#1F1F1F] dark:text-white mb-1">
                {withLineBreaks(person.name)}
            </div>
            <div className="text_1 text-[#4A5565] dark:text-[#CBD5E1] leading-relaxed">
                {withLineBreaks(person.designation)}
            </div>
            <div className="text_1 text-[#4A5565] dark:text-[#CBD5E1] leading-relaxed">
                {person.organization}
            </div>
        </>
    );
}

function ContactDetails({ details, className = "" }) {
    if (!details || details.length === 0) return null;
    return (
        <div className={`flex flex-col gap-1.5 sm:gap-2 ${className}`}>
            {details.map((item) => (
                <div key={item?.id || item?.label} className="text-[13px] sm:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-[#1F1F1F] dark:text-white whitespace-nowrap">
                    <span className="text_! font-bold text-[#1F1F1F] dark:text-white mr-1.5">
                        {withLineBreaks(item?.label)}
                    </span>
                    {item?.href ? (
                        <a
                            href={item.href}
                            className="text_1 text-[#374151] dark:text-[#D1D5DB] hover:text-(--basecolor) transition-colors font-medium"
                        >
                            {item.value}
                        </a>
                    ) : (
                        <span className="text_1 text-[#374151] dark:text-[#D1D5DB]">
                            {item.value}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
}

export default function PlacementContact(props) {
    const data = props?.data || props;

    return (
        <section className="relative py-[20px] sm:py-[30px] xl:py-[40px] 2xl:py-[50px] bg-[#FFF6EE] bg-[#FFF6EE] dark:bg-[#231A14]">
            <div className="container">
                <div className="w-full rounded-[14px] sm:rounded-[18px] 2xl:rounded-[22px] flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8 xl:gap-12">
                    
                    {/* Left: Heading */}
                    <div className="shrink-0">
                        <h2 className="text-[28px] sm:text-[32px] xl:text-[38px] 2xl:text-[44px] font-bold text-[#1F1F1F] dark:text-white leading-[1.12]">
                            {data?.heading?.includes("Contact for Training") ? (
                                <>
                                    Contact for<br className='max-lg:hidden' />Training
                                </>
                            ) : (
                                data?.heading || "Contact for Training"
                            )}
                        </h2>
                    </div>


                    {data?.morePeople?.length > 0 ? (
                        // several people: each one's email / phone sits right under their organization
                        <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 xl:gap-12">
                            {[
                                { person: data?.contact, details: data?.details },
                                ...data.morePeople.map((person) => ({ person, details: person.details })),
                            ].map(({ person, details }, index) =>
                                person ? (
                                    <div key={index} className="flex flex-col">
                                        <ContactPerson person={person} />
                                        <ContactDetails details={details} className="mt-3" />
                                    </div>
                                ) : null
                            )}
                        </div>
                    ) : (
                        <>
                            {data?.contact && (
                                <div className="flex flex-col">
                                    <ContactPerson person={data.contact} />
                                </div>
                            )}
                            <ContactDetails details={data?.details} />
                        </>
                    )}

                    {data?.button && (
                        <div className="shrink-0">
                            <Link
                                href={data.button.href || "#"}
                                className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-[3px] 2xl:rounded-[4px] text-white text-[13px] sm:text-[14px] 2xl:text-[15px]  3xl:text-[18px] font-semibold bg-linear-to-r from-(--basecolor) to-(--basecolor2) hover:opacity-90 transition-opacity shadow-xs whitespace-nowrap"
                            >
                                <span>{data.button.label || "Placement Contact Us"}</span>
                                <Image
                                    src="/images/icon-btn.svg"
                                    width={14}
                                    height={12}
                                    alt="icon"
                                    className="w-[14px] h-auto object-contain"
                                />
                            </Link>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}
