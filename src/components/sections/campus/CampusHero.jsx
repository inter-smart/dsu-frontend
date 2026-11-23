import Image from "next/image";
import Link from "next/link";
import { withLineBreaks } from "@/lib/line-breaks";

function Icon360({ className }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className={className}
            aria-hidden="true"
        >
            <circle cx="12" cy="12" r="10.25" stroke="currentColor" strokeWidth="1.5" />
            <text
                x="12"
                y="14.6"
                textAnchor="middle"
                fontSize="7"
                fontWeight="700"
                fill="currentColor"
                fontFamily="Arial, sans-serif"
            >
                360
            </text>
        </svg>
    );
}

export default function CampusHero({ data }) {
    if (!data) return null;

    const media = data?.heroMedia;
    const isVideo = media?.mime?.startsWith("video");
    const tour = data?.virtualTour;
    const thumb = tour?.thumbnail;

    return (
        <section className="w-full min-h-[480px] sm:min-h-[540px] lg:min-h-screen relative overflow-hidden bg-[#1a1a1a] flex items-end">
            {/* Background media */}
            {media?.url &&
                (isVideo ? (
                    <video
                        src={media.url}
                        aria-label={media?.alternativeText || ""}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                ) : (
                    <Image
                        src={media.url}
                        alt={media?.alternativeText || ""}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                ))}

            {/* Overlays */}
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />

            {/* Content */}
            <div className="container relative z-10 pb-6 sm:pb-10 lg:pb-16 2xl:pb-24 3xl:pb-28 pt-32">
                <div className="w-full h-auto flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-8">
                    {/* Text */}
                    <div className="w-full md:w-[55%] lg:w-1/2 h-auto md:max-w-[300px] lg:max-w-[320px] xl:max-w-[420px] 2xl:max-w-[450px] 3xl:max-w-[550px]">
                        <h1 className="cmn_Title font-bold text-white mb-2.5 sm:mb-3 lg:mb-4 2xl:mb-5 max-w-[620px]">
                            {withLineBreaks(data?.title)}
                        </h1>
                        <p className="text_1 text-white ">
                            {data?.description}
                        </p>
                    </div>

                    {/* Virtual tour card */}
                    {tour && thumb?.url && (
                        <div className="w-full max-w-[160px] sm:max-w-[180px] md:max-w-[280px] lg:max-w-[300px] 2xl:max-w-[330px] 3xl:max-w-[350px] shrink-0">
                            <Link
                                href={tour?.href || "#"}
                                target={tour?.target || "_blank"}
                                rel="noopener noreferrer"
                                aria-label={tour?.label || "Virtual Tour"}
                                className="group relative block w-full aspect-video rounded-[6px] sm:rounded-[8px] 2xl:rounded-[10px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                            >
                                <Image
                                    src={thumb.url}
                                    alt={thumb?.alternativeText || ""}
                                    fill
                                    sizes="(min-width: 1536px) 400px, 300px"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <span className="absolute inset-0 flex items-center justify-center">
                                    <span className="inline-flex items-center gap-1.5 2xl:gap-2 pl-1.5 pr-3 2xl:pr-4 py-1 2xl:py-1.5 rounded-full bg-linear-to-r from-(--basecolor) to-(--basecolor2) border border-white/30 text-white uppercase text-[11px] sm:text-xs 2xl:text-base leading-none font-medium tracking-wide shadow-lg transition-transform duration-300 group-hover:scale-105">
                                        <svg   viewBox="0 0 28 28" fill="none" className="size-4">
                                            <path d="M27.2432 13.8951C27.2432 21.2692 21.2653 27.2471 13.8911 27.2471C6.51699 27.2471 0.539062 21.2692 0.539062 13.8951C0.539062 6.5209 6.51699 0.542969 13.8911 0.542969C21.2653 0.542969 27.2432 6.5209 27.2432 13.8951Z" stroke-width="1.6283" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke="#EFF9FF" />
                                            <path d="M21.776 13.8951C21.776 21.2692 18.2461 27.2471 13.8919 27.2471C9.53763 27.2471 6.00781 21.2692 6.00781 13.8951C6.00781 6.5209 9.53763 0.542969 13.8919 0.542969C18.2461 0.542969 21.776 6.5209 21.776 13.8951Z" stroke-width="1.6283" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke="#EFF9FF" />
                                            <path d="M27.2432 13.8958C27.2432 18.2501 21.2653 21.7799 13.8911 21.7799C6.51699 21.7799 0.539062 18.2501 0.539062 13.8958C0.539062 9.54154 6.51699 6.01172 13.8911 6.01172C21.2653 6.01172 27.2432 9.54154 27.2432 13.8958Z" stroke-width="1.6283" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke="#EFF9FF" />
                                            <path d="M8.46094 13.302C8.55929 12.8639 9.00072 12.5332 9.53046 12.5332C10.1324 12.5332 10.6204 12.9601 10.6204 13.4868C10.6204 14.0136 10.1324 14.4406 9.53046 14.4406" stroke-width="1.6283" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke="#EFF9FF" />
                                            <path d="M9.52749 14.4395C10.1295 14.4395 10.6174 14.8664 10.6174 15.3932C10.6174 15.9199 10.1295 16.3468 9.52749 16.3468C8.93354 16.3468 8.4375 15.9264 8.4375 15.3932" stroke-width="1.6283" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke="#EFF9FF" />
                                            <path d="M14.1534 12.5332C14.1534 12.5332 12.9988 13.4118 12.8125 15.071" stroke-width="1.6283" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke="#EFF9FF" />
                                            <path d="M14.9847 15.2323C14.9847 15.8482 14.4967 16.3474 13.8947 16.3474C13.2927 16.3474 12.8047 15.8482 12.8047 15.2323C12.8047 14.6164 13.2927 14.1172 13.8947 14.1172C14.4967 14.1172 14.9847 14.6164 14.9847 15.2323Z" stroke-width="1.6283" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke="#EFF9FF" />
                                            <path d="M19.344 15.2882C19.344 15.8735 18.856 16.348 18.254 16.348C17.652 16.348 17.1641 15.8735 17.1641 15.2882V13.5931C17.1641 13.0077 17.652 12.5332 18.254 12.5332C18.856 12.5332 19.344 13.0077 19.344 13.5931V15.2882Z" stroke-width="1.6283" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke="#EFF9FF" />
                                            <circle cx="19.0662" cy="10.3533" r="0.542768" fill="#EFF9FF" />
                                        </svg>

                                        {tour?.label}
                                    </span>
                                </span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}