import Image from "next/image";
import Link from "next/link";
import { BlocksRenderer } from "@/components/ui/blocks-renderer";
import { ctaLinkProps } from "@/lib/schools/link-props";
import { hasContent } from "@/lib/has-content";


const buttonClass =
    "group relative flex h-[40px] w-fit min-w-[130px] items-center justify-center gap-[14px] overflow-hidden rounded-[4px] bg-gradient-to-r from-[#DC2626] to-[#F97316] px-[20px] text_1 font-bold text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)] xl:h-[46px] 2xl:h-[50px] 3xl:h-[60px] 3xl:px-[28px] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full";


export default function InnovationDetail({ data }) {
    if (!data) return null;

    const hasDescription = Array.isArray(data?.description) && hasContent(data.description);
    const hasPdf = data?.pdf?.url && data?.pdf?.label;
    const hasVideo = data?.video?.url && data?.video?.label;
    const hasMedia = Boolean(data?.media?.url);

    return (
        <section className="relative py-[40px] xl:py-[55px] 2xl:py-[65px] 3xl:py-[80px] bg-white dark:bg-[#101010] transition-colors duration-300">
            <div className="container">
                <div className="flex max-sm:gap-[25px] gap-[30px] lg:gap-[40px] 2xl:gap-[60px] 3xl:gap-[80px] max-lg:flex-wrap items-center">

                    {/* Left: text (full width when there is no image) */}
                    <div
                        className={
                            hasMedia
                                ? "w-full lg:w-[calc(50%-20px)] 2xl:w-[calc(50%-30px)] 3xl:w-[calc(50%-40px)]"
                                : "w-full"
                        }
                    >
                        {data?.heading && (
                            <h1 className="text-[26px] sm:text-[32px] xl:text-[44px] 2xl:text-[54px] 3xl:text-[64px] font-bold leading-[1.15] mb-[15px] xl:mb-[20px] 3xl:mb-[28px] text-[#212121] dark:text-white">
                                {data.heading}
                            </h1>
                        )}

                        {hasDescription && (
                            <div className="text_1 leading-[1.65] text-[#4A5565] dark:text-[#9CA3AF] [&_p]:text-[#4A5565] dark:[&_p]:text-[#9CA3AF] mb-[25px] xl:mb-[30px] 3xl:mb-[40px] typography">
                                <BlocksRenderer content={data.description} />
                            </div>
                        )}

                        {(hasPdf || hasVideo) && (
                            <div className="flex flex-wrap items-center gap-[12px]">
                                {hasPdf && (
                                    <Link
                                        href={data.pdf.url}
                                        {...ctaLinkProps(data.pdf)}
                                        className={buttonClass}
                                    >
                                        <span className="relative z-[1] transition-transform duration-300 group-hover:translate-x-[-2px]">
                                            {data.pdf.label}
                                        </span>
                                        <div className="relative z-[1] flex h-[13px] w-[15px] items-center justify-center transition-all duration-300 group-hover:translate-x-[4px] group-hover:scale-110">
                                            <svg
                                                width="11"
                                                height="9"
                                                viewBox="0 0 11 9"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="transition-transform duration-300 group-hover:rotate-180"
                                                aria-hidden="true"
                                            >
                                                <circle cx="5.12232" cy="0.919192" r="0.919192" fill="white" />
                                                <circle cx="5.12232" cy="4.33325" r="0.919192" fill="white" />
                                                <circle cx="5.12232" cy="7.74732" r="0.919192" fill="white" />
                                                <circle cx="9.32349" cy="4.33325" r="0.919192" fill="white" />
                                                <circle cx="0.919192" cy="4.33325" r="0.919192" fill="white" />
                                            </svg>
                                        </div>
                                    </Link>
                                )}

                                {hasVideo && (
                                    <Link
                                        href={data.video.url}
                                        {...ctaLinkProps(data.video)}
                                        className={buttonClass} target="_blank"
                                    >
                                        <span className="relative z-[1] transition-transform duration-300 group-hover:translate-x-[-2px]">
                                            {data.video.label}
                                        </span>
                                        <svg
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="relative z-[1] h-[18px] w-[18px] xl:h-[20px] xl:w-[20px] 3xl:h-[24px] 3xl:w-[24px] transition-transform duration-300 group-hover:scale-110"
                                            aria-hidden="true"
                                        >
                                            <circle cx="10" cy="10" r="10" fill="white" />
                                            <path d="M8 6.2v7.6L14 10 8 6.2z" fill="#F97316" />
                                        </svg>
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Right: image */}
                    {hasMedia && (
                        <div className="w-full lg:w-[calc(50%-20px)] 2xl:w-[calc(50%-30px)] 3xl:w-[calc(50%-40px)]">
                            <div className="group relative w-full aspect-[770/458] overflow-hidden rounded-[10px] xl:rounded-[12px] bg-[#f3f4f6] dark:bg-[#18191B]">
                                <Image
                                    src={data.media.url}
                                    alt={data.media.alternativeText || data?.heading || "Innovation"}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}