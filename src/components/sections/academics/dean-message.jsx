"use client";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function DeanMessage({ data }) {
    if (!data) return null;

    const {
        heading,
        media,
        featuredPerson,
        quote,
        message,
        closing,
    } = data;

    return (
        <section className="relative py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px]">
            <div className="container">
                <div className="relative after:content-[''] after:table after:clear-both">
                    {/* Floating Dean Image Card (Floated Left on md and above) */}
                    <div className="w-full md:w-[320px] lg:w-[300px] xl:w-[420px] 2xl:w-[480px] 3xl:w-[550px] md:float-left mr-0 md:mr-[15px] lg:mr-[20px] xl:mr-[25px] 2xl:mr-[30px] 3xl:mr-[40px] mb-[25px] md:mb-[20px] xl:mb-[30px]">
                        <div className="relative overflow-hidden rounded-[16px] xl:rounded-[20px] 2xl:rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] bg-[#111]">
                            {/* Dean Photo */}
                            {media?.url && (
                                <div className="relative w-full aspect-[4/3] sm:aspect-[1/1] md:aspect-[4/4.2] overflow-hidden">
                                    <Image
                                        src={media.url}
                                        alt={media.alternativeText || featuredPerson?.name || "Dean"}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 440px, 560px"
                                        className="object-cover object-top"
                                        priority
                                    />
                                </div>
                            )}

                            {/* Card Overlay with Person Info */}
                            {featuredPerson && (
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/75 to-transparent pt-12 pb-4 2xl:pb-5 px-4 2xl:px-6">
                                    <div className="flex items-stretch gap-3 xl:gap-3.5">
                                        {/* Orange/Red Vertical Bar */}
                                        <div className="w-[3px] 2xl:w-[4px] rounded-full bg-gradient-to-b from-[#DC2626] to-[#F97316] shrink-0" />

                                        {/* Text Info */}
                                        <div>
                                            <div className="text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] font-bold text-white leading-snug">
                                                {featuredPerson.name}
                                            </div>
                                            {featuredPerson.designation && (
                                                <div className="text-[11px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[15px] text-white/85 font-normal leading-snug mt-0.5">
                                                    {featuredPerson.designation}
                                                </div>
                                            )}
                                            {featuredPerson.institution && (
                                                <div className="text-[10px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[14px] text-white/65 font-normal leading-snug">
                                                    {featuredPerson.institution}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Heading */}
                    {heading && (
                        <h2 className="text-[25px] sm:text-[28px] md:text-[32px] xl:text-[40px] 2xl:text-[46px] 3xl:text-[55px] font-bold leading-tight text-[#212121] dark:text-[#F9FAFB] mb-[12px] xl:mb-[16px] 2xl:mb-[20px] lg:pt-[20px] xl:pt-[30px] 2xl:pt-[40px] 3xl::pt-[60px]">
                            {heading}
                        </h2>
                    )}

                    {/* Quote */}
                    {quote?.text && (
                        <div className="text-[13px] xl:text-[14.5px] 2xl:text-[16px] 3xl:text-[19px] font-bold text-[#212121] dark:text-[#F9FAFB] leading-snug mb-[16px] xl:mb-[20px] 2xl:mb-[24px]">
                            &ldquo;{quote.text}&rdquo;{quote.author ? ` – ${quote.author}` : ""}
                        </div>
                    )}

                    {/* Message Body Paragraphs */}
                    {message && (
                        <div className="text_1 [&_p]:text-[#4A5565] dark:[&_p]:text-[#4A5565] [&_p]:mb-[14px] [&_p]:xl:mb-[18px] [&_p]:2xl:mb-[22px] [&_p]:leading-[22px] [&_p]:2xl:leading-[25px] [&_p]:3xl:leading-[28px] [&_p]:last:mb-0">
                            {Array.isArray(message) ? (
                                <BlocksRenderer content={message} />
                            ) : (
                                <p>{message}</p>
                            )}
                        </div>
                    )}

                    {/* Closing Note */}
                    {closing && (
                        <div className="text-[13px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[18px] font-normal text-[#4A5565] dark:text-[#F9FAFB] tracking-wide mt-[24px] xl:mt-[30px] 2xl:mt-[35px] mb-[20px] xl:mb-[25px]">
                            {closing}
                        </div>
                    )}

                    {/* Bottom Signature / Featured Person Block */}
                    {featuredPerson && (
                        <div className="flex items-stretch gap-3 xl:gap-3.5 mt-[20px] xl:mt-[25px]">
                            {/* Orange/Red Vertical Bar */}
                            <div className="w-[3px] 2xl:w-[4px] rounded-full bg-gradient-to-b from-[#DC2626] to-[#F97316] shrink-0" />

                            {/* Text Info */}
                            <div>
                                <div className="text-[14px] xl:text-[17px] 2xl:text-[22px] 3xl:text-[25px] font-bold text-[#212121] dark:text-[#F9FAFB] leading-snug">
                                    {featuredPerson.name}
                                </div>
                                {featuredPerson.designation && (
                                    <div className="text-[11px] xl:text-[12px] 2xl:text-[13.5px] 3xl:text-[16px] text-[#212121] dark:text-[#D1D5DB] font-normal leading-snug mt-0.5">
                                        {featuredPerson.designation}
                                    </div>
                                )}
                                {featuredPerson.institution && (
                                    <div className="text-[10px] xl:text-[11px] 2xl:text-[12.5px] 3xl:text-[15px] text-[#4A5565] dark:text-[#9CA3AF] font-normal leading-snug">
                                        {featuredPerson.institution}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
