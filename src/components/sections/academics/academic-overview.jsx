"use client";
 
import Link from "next/link";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function AcademicOverview({ data }) {
    if (!data) return null;

    const primaryImage = data?.media?.[0];

    return (
        <section className="relative py-[10px_30px] sm:py-[20px_40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px]">
            <div className="container">
                {/* TOP SECTION: Float Right for Image + Stats */}
                <div className="relative max-lg:flex max-lg:flex-col-reverse gap-[20px] after:content-[''] after:table after:clear-both mb-[0px] lg:mb-[50px] xl:mb-[65px]">
                    {/* Floated Right Block (Image + Stat Cards) */}
                    <div className="w-full lg:w-[50%]  lg:float-right ml-0 lg:ml-[30px] xl:ml-[45px] 2xl:ml-[55px] mb-[25px] lg:mb-[20px]">
                        {primaryImage && (
                            <div className="w-full aspect-[16/9] sm:aspect-[800/350] rounded-[8px] xl:rounded-[10px] overflow-hidden shadow-sm mb-[15px] xl:mb-[20px]">
                                <Image
                                    src={primaryImage.url?.replace("program-overview", "overview") || primaryImage.url}
                                    width={750}
                                    height={420}
                                    alt={primaryImage.alternativeText || data.heading}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                        )}

                        {/* Stats Cards from JSON */}
                        {data?.stats?.length > 0 && (
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-[10px] xl:gap-[20px] 2xl:gap-[25px] 3xl:gap-[30px]">
                                {data.stats.map((stat, idx) => (
                                    <div
                                        key={stat.id || idx}
                                        className="bg-white border border-[rgba(249,115,22,0.3)] rounded-[8px] p-[10px] sm:p-[12px] xl:p-[16px] flex flex-col justify-center shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                                    >
                                        <div className="text-[18px] sm:text-[20px] xl:text-[24px] 2xl:text-[28px] font-bold text-[#DC2626] leading-none mb-[4px] xl:mb-[6px]">
                                            {stat.value}
                                        </div>
                                        <div className="text_1">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {data?.nursingBannerSection && (
                            <div className="w-full rounded-[10px] overflow-hidden bg-gradient-to-r from-[#DC2626] to-[#F97316] p-[20px] lg:p-[30px_50px]">
                                <div className="text_1 !text-white font-semibold [&_p]:text-white [&_p]:font-semibold text-center leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px]">
                                    <BlocksRenderer content={data?.nursingBannerSection.description} />
                                </div>
                                <Link href="/"
                                    className="group relative flex h-[30px] w-fit mt-[25px] 2xl:mt-[30px] min-w-[130px] mx-auto px-[30px] items-center justify-center gap-[10px] overflow-hidden rounded-[6px] bg-white text_1 font-bold capitalize text-[#F97316] transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)] xl:h-[35px]  2xl:h-[40px] 2xl:gap-[10px] 2xl:rounded-[4px] 3xl:h-[50px] px-[10px]  before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full"
                                >
                                    <span className="relative z-[1] transition-transform duration-300  ">
                                       {data?.nursingBannerSection?.badge.label}</span>

                                    <div className="relative z-[1] flex h-[13px] w-[15px] xl:w-[22] xl:h-[22px] items-center justify-center transition-all duration-300 group-hover:translate-x-[4px] group-hover:scale-110">
                                         <Image src={data?.nursingBannerSection?.badge?.icon?.url} width={22} height={22} className="w-full h-full object-contain" />
                                    </div> 
                                </Link>
                            </div>
                        )}
                    </div>


                    <div>
                        {data?.eyebrow && (
                            <div className="flex items-center gap-[8px] mb-[10px] xl:mb-[14px]">
                                <span className="w-[18px] xl:w-[22px] h-[2px] bg-[#DC2626]" />
                                <span className="text-[12px] xl:text-[14px] 2xl:text-[15px] font-normal tracking-wider  bg-gradient-to-r from-[#DC2626] from-[80%] to-[#F97316] tracking-tighter bg-clip-text text-transparent uppercase">
                                    {data.eyebrow}
                                </span>
                            </div>
                        )}

                        {data?.heading && (
                            <h2 className="cmn_Title mb-[15px] xl:mb-[20px] 2xl:mb-[25px]">
                                {data.heading}
                            </h2>
                        )}

                        {data?.intro && (
                            <div className="text_1 text-[#4A5565] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px]">
                                <BlocksRenderer content={data.intro} />
                            </div>
                        )}
                    </div>
                </div>

                <div className="relative after:content-[''] after:table after:clear-both pt-[10px] lg:pt-[20px]">
                    {/* Floated Left Block (Secondary Media from JSON) */}
                    {data?.secondaryMedia?.length > 0 && (
                        <div className="w-full lg:w-[50%] lg:float-left mr-0 lg:mr-[30px] xl:mr-[45px] 2xl:mr-[55px] mb-[25px] lg:mb-[20px]">
                            <div className="flex gap-[10px] xl:gap-[15px]">
                                {data.secondaryMedia.map((mediaItem, idx) => (
                                    <div
                                        key={idx}
                                        className={`  rounded-[6px] xl:rounded-[8px] overflow-hidden shadow-sm 
                                            ${idx === 1 ? "w-[60%]" : "w-[40%]"
                                            }`}
                                    >
                                        <Image
                                            src={mediaItem.url?.replace("program-overview", "overview") || mediaItem.url}
                                            width={400}
                                            height={400}
                                            alt={mediaItem.alternativeText || `Overview image ${idx + 2}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Right Flowing Content: Outro */}
                    {data?.outro && (
                        <div>
                            <div className="text_1 text-[#4A5565] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px]">
                                <BlocksRenderer content={data.outro} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
