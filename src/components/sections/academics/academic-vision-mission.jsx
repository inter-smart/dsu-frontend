"use client";

import Image from "next/image";

export default function AcademicVisionMission({ data }) {
    if (!data) return null;

    const { eyebrow, heading, media, mission, vision } = data;

    // Use provided bg image URL or fallback to high quality existing background
    const bgImageUrl = media?.url || "/images/academic-banner.jpg";

    return (
        <section className="relative max-lg:pb-[40px]  text-white overflow-hidden after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-b after:from-[rgba(0,0,0,0)] after:to-[#000000]  after:z-10">
            {/* Campus Background Image */}
            <div className="absolute top-0 right-0 w-full h-full z-0">
                <Image
                    src={bgImageUrl}
                    alt={media?.alternativeText || "Vision background"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover  object-right mix-blend-luminosity"
                    priority
                />
            </div>
            <div className="container relative z-20">
                <div className="relative  overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">

                    {/* LEFT COLUMN: Eyebrow, Heading & Mission */}
                    <div className="lg:col-span-5 flex flex-col justify-between relative z-10 py-[30px] sm:py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px]">
                        <div className="lg:max-w-[85%] w-full">
                            <div>
                                {/* Eyebrow */}
                                {eyebrow && (
                                    <div className="text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-[#F57F2A] uppercase relative pl-[40px] mb-[22px] before:absolute before:content-[''] 
                                    before:top-0 before:left-0 before:bottom-0 before:m-auto before:h-[4px] 
                                    before:w-[30px] before:bg-gradient-to-r before:from-[#DC2626]
                                    before:to-[#F97316] ">
                                        {eyebrow}
                                    </div>
                                )}

                                {/* Main Section Title */}
                                {heading && (
                                    <h2 className="cmn_Title text-white mb-[30px] xl:mb-[45px] 2xl:mb-[60px]">
                                        {heading}
                                    </h2>
                                )}
                            </div>

                            {/* Mission Box */}
                            {mission && (
                                <div className="mt-auto lg:pt-[20px] group">
                                    {/* Mission Icon */}
                                    <div className="w-[40px] h-[35px] xl:w-[52px] xl:h-[42px] 2xl:w-[62px] 2xl:h-[52px] 3xl:h-[65px] 3xl:w-[78px] bg-white/20 flex border border-white rounded-[6px] xl:rounded-[7px] 2xl:rounded-[8px] 3xl:rounded-[10px] flex items-center justify-center mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]
                                                                            group-hover:bg-gradient-to-r group-hover:from-[#DC2626] group-hover:to-[#F97316]">
                                        <Image src={mission.icon.icon} width={78} height={65} alt={mission.icon.alternativeText} className="max-w-[19px] xl:max-w-[21px] 2xl:max-w-[25px] 3xl:max-w-[34px] " />
                                    </div>

                                    {/* Mission Title */}
                                    {mission.heading && (
                                        <h3 className="text-[14px] sm:text-[16px] xl:text-[18px] 2xl:text-[20px]  3xl:text-[25px] font-bold text-white mb-[8px] xl:mb-[12px]">
                                            {mission.heading}
                                        </h3>
                                    )}

                                    {/* Mission Description */}
                                    {mission.description && (
                                        <p className="text_1 text-white font-normal">
                                            {mission.description}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Vision & Points with Background Image Overlay */}
                    <div className="lg:col-span-7 relative flex flex-col justify-center py-[30px] sm:py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px] px-[15px] md:px-[25px] lg:px-[35px] xl:px-[45px] 2xl:px-[55px] 3xl:px-[65px] relative
                    after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.3)] after:lg:bg-[rgba(132,132,132,0.1)]">



                        {/* Vision Content */}
                        {vision && (
                            <div className="relative z-10 group">
                                {/* Vision Icon (Orange Gradient Box) */}
                                <div className="w-[40px] h-[35px] xl:w-[52px] xl:h-[42px] 2xl:w-[62px] 2xl:h-[52px] 3xl:h-[62px] 3xl:w-[78px] flex border border-white bg-white/20 rounded-[6px] xl:rounded-[7px] 2xl:rounded-[8px] 3xl:rounded-[10px] flex items-center justify-center mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]
                                    group-hover:bg-gradient-to-r group-hover:from-[#DC2626] group-hover:to-[#F97316]">
                                    <Image src={vision.icon.url} width={78} height={65} alt={vision.icon.alt} className="max-w-[19px] xl:max-w-[21px] 2xl:max-w-[25px] 3xl:max-w-[34px] " />
                                </div>

                                {/* Vision Title */}
                                {vision.heading && (
                                    <h3 className="text-[14px] sm:text-[16px] xl:text-[18px] 2xl:text-[20px]  3xl:text-[25px] font-bold text-white mb-[8px] xl:mb-[12px]">
                                        {vision.heading}
                                    </h3>
                                )}

                                {/* Vision Description / Intro */}
                                {vision.description && (
                                    <p className="text_1 font-semibold text-slate-200 mb-[16px] xl:mb-[22px]">
                                        {vision.description}
                                    </p>
                                )}

                                {/* Points List (M1 to M5) */}
                                {vision.points?.length > 0 && (
                                    <ul className="space-y-[10px] sm:space-y-[12px] xl:space-y-[14px]">
                                        {vision.points.map((point) => (
                                            <li key={point.id || point.code} className="flex items-start gap-[10px] xl:gap-[12px]">
                                                {/* Orange Circle Bullet (○) */}
                                                <span className="w-[8px] h-[8px] sm:w-[11px] sm:h-[11px] rounded-full border-[1.5px] border-[#F97316] shrink-0 mt-[6px]" />

                                                {/* Point text with Code prefix */}
                                                <div className="text_1 text-white leading-[1.55]">
                                                    {point.code && (
                                                        <span className="font-semibold text-white mr-[6px]">
                                                            {point.code}:
                                                        </span>
                                                    )}
                                                    <span>{point.text}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </section>
    );
}
