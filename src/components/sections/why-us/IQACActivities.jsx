import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3 } from "lucide-react";

const ZoomIcon = () => (
    <svg className="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="5" fill="#2D8CFF" />
        <path d="M5.5 8.5C5.5 7.67 6.17 7 7 7H13C13.83 7 14.5 7.67 14.5 8.5V15.5C14.5 16.33 13.83 17 13 17H7C6.17 17 5.5 16.33 5.5 15.5V8.5Z" fill="white" />
        <path d="M15.5 10.3L18.4 8.2C18.8 7.9 19.3 8.2 19.3 8.7V15.3C19.3 15.8 18.8 16.1 18.4 15.8L15.5 13.7V10.3Z" fill="white" />
    </svg>
);

const YouTubeIcon = () => (
    <svg className="w-[20px] h-[16px] shrink-0" viewBox="0 0 24 18" fill="none" aria-hidden="true">
        <rect width="24" height="18" rx="4" fill="#FF0000" />
        <path d="M10 5.5L15.5 9L10 12.5V5.5Z" fill="white" />
    </svg>
);

const getExternalHref = (value) => {
    const href = value?.trim();
    if (!href) return null;

    const candidate = /^(https?:)?\/\//i.test(href)
        ? href
        : `https://${href.replace(/^\/+/, "")}`;

    try {
        const url = new URL(candidate);
        return /^https?:$/.test(url.protocol) && /\.[a-z]{2,}$/i.test(url.hostname)
            ? url.toString()
            : null;
    } catch {
        return null;
    }
};

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
                    {data.items?.map((item, index) => {
                        const zoomHref = getExternalHref(item.zoomUrl);
                        const youtubeHref = getExternalHref(item.youtubeUrl);

                        return (
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
                                        zoomHref ? (
                                        <Link className="inline-flex items-center gap-[8px] rounded-[5px] border border-black/15 dark:border-white/15 px-[20px] py-[10px] text-sm font-bold text-[#1F2937] dark:text-[#E5E7EB] hover:border-[#2D8CFF] hover:text-[#2D8CFF]" href={zoomHref} target="_blank" rel="noopener noreferrer">
                                            <ZoomIcon />
                                            Join Zoom Meeting
                                        </Link>
                                        ) : (
                                            <span aria-disabled="true" title="Zoom link is not configured" className="inline-flex cursor-not-allowed items-center gap-[8px] rounded-[5px] border border-black/15 px-[20px] py-[10px] text-sm font-bold text-[#1F2937]/50 dark:border-white/15 dark:text-[#E5E7EB]/50">
                                                <ZoomIcon />
                                                Join Zoom Meeting
                                            </span>
                                        )
                                    )}
                                    {item.youtubeUrl && (
                                        youtubeHref ? (
                                        <Link className="inline-flex items-center gap-[8px] rounded-[5px] border border-black/15 dark:border-white/15 px-[20px] py-[10px] text-sm font-bold text-[#1F2937] dark:text-[#E5E7EB] hover:border-[#FF0000] hover:text-[#FF0000]" href={youtubeHref} target="_blank" rel="noopener noreferrer">
                                            <YouTubeIcon />
                                            YouTube
                                        </Link>
                                        ) : (
                                            <span aria-disabled="true" title="YouTube link is not configured" className="inline-flex cursor-not-allowed items-center gap-[8px] rounded-[5px] border border-black/15 px-[20px] py-[10px] text-sm font-bold text-[#1F2937]/50 dark:border-white/15 dark:text-[#E5E7EB]/50">
                                                <YouTubeIcon />
                                                YouTube
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}