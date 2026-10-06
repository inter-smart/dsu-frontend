import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3 } from "lucide-react";

export default function IQACActivities({ data }) {
    if (!data) return null;

    return (
        <section className="relative py-[40px] xl:py-[60px] 2xl:py-[80px]">
            <div className="container">
                {data.heading && (
                    <h2 className="cmn_Title mb-[12px] xl:mb-[16px] 2xl:mb-[20px] dark:text-white">
                        {data.heading}
                    </h2>
                )}
                {data.description && (
                    <p className="text_1 leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF] mb-[30px] xl:mb-[45px] 2xl:mb-[55px] max-w-[95%]">
                        {data.description}
                    </p>
                )}

                <div className="flex flex-col">
                    {data.items?.map((item, index) => (
                        <article
                            key={item.id || index}
                            className="flex flex-col md:flex-row md:items-center max-md:gap-[20px] pb-[30px] xl:pb-[40px] 2xl:pb-[50px] mb-[30px] xl:mb-[40px] 2xl:mb-[50px] border-b border-[rgba(33,33,33,0.1)] dark:border-white/10 last:border-b-0 last:pb-0 last:mb-0"
                        >
                            {item.poster && (
                                <div className="w-full md:w-[240px] lg:w-[270px] xl:w-[310px] 2xl:w-[340px] shrink-0 overflow-hidden rounded-[8px] border border-black/10 dark:border-white/10 bg-white dark:bg-[#1F1F1F]">
                                    <Image
                                        src={item.poster}
                                        alt={item.title || "IQAC activity"}
                                        width={420}
                                        height={450}
                                        className="h-full w-full object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 300px, 340px"
                                    />
                                </div>
                            )}
                            <div className="min-w-0 flex-1 md:pl-[30px] xl:pl-[40px] 2xl:pl-[45px]">
                                <h3 className="text-[18px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] font-bold leading-[1.3] text-[#111827] dark:text-white mb-[12px]">
                                    {item.title}
                                </h3>
                                {item.description && (
                                    <p className="text_1 leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF] mb-[18px]">
                                        {item.description}
                                    </p>
                                )}
                                {(item.date || item.time) && (
                                    <div className="flex flex-col gap-[14px] xl:gap-[20px] mb-[22px] xl:mb-[28px] 2xl:mb-[35px]">
                                        {item.date && (
                                            <div className="flex items-center gap-[10px] text_1 font-bold text-[#1F2937] dark:text-[#E5E7EB]">
                                                <CalendarDays className="h-[18px] w-[18px] shrink-0 text-[#F97316]" aria-hidden="true" />
                                                <span>{item.date}</span>
                                            </div>
                                        )}
                                        {item.time && (
                                            <div className="flex items-center gap-[10px] text_1 font-bold text-[#1F2937] dark:text-[#E5E7EB]">
                                                <Clock3 className="h-[18px] w-[18px] shrink-0 text-[#F97316]" aria-hidden="true" />
                                                <span>{item.time}</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                                <div className="flex flex-wrap gap-[10px]">
                                    {item.readMoreUrl && (
                                        <Link className="rounded-[5px] border border-black/15 dark:border-white/15 px-[20px] py-[10px] text-sm font-bold text-[#1F2937] dark:text-[#E5E7EB] hover:border-[#F97316] hover:text-[#F97316]" href={item.readMoreUrl}>
                                            Read More
                                        </Link>
                                    )}
                                    {item.zoomUrl && (
                                        <Link className="rounded-[5px] border border-black/15 dark:border-white/15 px-[20px] py-[10px] text-sm font-bold text-[#1F2937] dark:text-[#E5E7EB] hover:border-[#2D8CFF] hover:text-[#2D8CFF]" href={item.zoomUrl} target="_blank" rel="noopener noreferrer">
                                            Join Zoom Meeting
                                        </Link>
                                    )}
                                    {item.youtubeUrl && (
                                        <Link className="rounded-[5px] border border-black/15 dark:border-white/15 px-[20px] py-[10px] text-sm font-bold text-[#1F2937] dark:text-[#E5E7EB] hover:border-[#FF0000] hover:text-[#FF0000]" href={item.youtubeUrl} target="_blank" rel="noopener noreferrer">
                                            YouTube
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}