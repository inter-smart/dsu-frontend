import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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

                    
                    {data?.contact && (
                        <div className="flex flex-col">
                            <div className="text-[16px] sm:text-[17px] xl:text-[18px] 2xl:text-[20px] font-bold text-[#1F1F1F] dark:text-white mb-1">
                                {data.contact.name}
                            </div>
                            <div className="text_1 text-[#4A5565] dark:text-[#CBD5E1] leading-relaxed">
                                {data.contact.designation}
                            </div>
                            <div className="text_1 text-[#4A5565] dark:text-[#CBD5E1] leading-relaxed">
                                {data.contact.organization}
                            </div>
                        </div>
                    )}
 
                    {data?.details && data.details.length > 0 && (
                        <div className="flex flex-col gap-1.5 sm:gap-2">
                            {data.details.map((item) => (
                                <div key={item?.id || item?.label} className="text-[13px] sm:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-[#1F1F1F] dark:text-white">
                                    <span className="text_! font-bold text-[#1F1F1F] dark:text-white mr-1.5">
                                        {item?.label}
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
