import React from 'react'
import Image from "next/image";

export default function AiVisionMission({ data }) {
    return (
        <section className="relative py-[40px] xl:py-[50px] 2xl:py-[60px] 3xl:py-[80px] bg-gradient-to-b from-[rgba(255,248,238,0.5)] to-[rgba(255,243,224,0.5)] dark:from-[#131416] dark:to-[#0f1011] transition-colors duration-300 after:absolute after:content-[''] after:top-0 after:left-0 after:right-0 after:m-auto after:w-[1px] after:h-full after:sm:bg-black/10 dark:after:sm:bg-white/10">
            <div className="container">
                <div className="flex flex-wrap">
                    {data?.cards.map((item, id) => (
                        <div
                            key={id}
                            className={`w-full sm:w-1/2 ${id % 2 ? "sm:pl-[30px] lg:pl-[50px]" : "p-0"}`}
                        >
                            <div className="w-full h-full relative group">
                                <div className="w-[40px] h-[35px] xl:w-[52px] xl:h-[42px] 2xl:w-[62px] 2xl:h-[52px] 3xl:h-[65px] 3xl:w-[78px] bg-white/40 dark:bg-white/5 flex border border-[rgba(249,115,22,0.15)] dark:border-white/10 rounded-[6px] xl:rounded-[7px] 2xl:rounded-[8px] 3xl:rounded-[10px] items-center justify-center mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px] shadow-[0_2px_8px_rgba(0,0,0,0.03)] dark:shadow-none group-hover:bg-gradient-to-r group-hover:from-[#DC2626] group-hover:to-[#F97316] transition-all duration-300">
                                    <Image
                                        src={item?.icon.url}
                                        width={78}
                                        height={65}
                                        alt={item?.icon.alternativeText || item?.title || "Icon"}
                                        className="max-w-[19px] xl:max-w-[21px] 2xl:max-w-[25px] 3xl:max-w-[34px] group-hover:brightness-0 group-hover:invert transition-all"
                                    />
                                </div>
                                <div className="w-full sm:max-w-[90%]">
                                    <div className="text-[13px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[25px] text-black dark:text-white font-bold mb-[8px]">
                                        {item.title}
                                    </div>

                                    {item.description && (
                                        <p className='!text-[#4A5565] dark:!text-[#9CA3AF] leading-normal'>{item.description}</p>
                                    )}
                                    {item.items && (
                                        <ul className="mb-[30px] 3xl:mb-[50px]">
                                            {item?.items.map((item, id) => (
                                                <li className="text_1 text-[#4A5565] dark:text-[#9CA3AF] relative before:absolute before:content-[''] before:top-[8px] before:lg:top-[12px] before:left-0 before:w-[5px] before:h-[5px] before:rounded-full before:bg-[#212121] dark:before:bg-[#F97316] pl-[15px] lg:pl-[20px]" key={id}>
                                                    {item.label}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
