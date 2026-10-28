import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Grip } from "lucide-react";

// One paragraph: a plain string, or an array of strings and { bold } parts
function Paragraph({ content }) {
    const parts = Array.isArray(content) ? content : [content];

    return (
        <p className="text-[14px] leading-[1.7] text-[#555] lg:text-[15px] 2xl:text-[18px] 2xl:leading-[29px]">
            {parts.map((part, i) =>
                typeof part === "string" ? (
                    <Fragment key={i}>{part}</Fragment>
                ) : (
                    <strong key={i} className="font-semibold text-[#444]">
                        {part.bold}
                    </strong>
                ),
            )}
        </p>
    );
}

function AnnouncementBar({ items }) {
    // List is rendered twice so the -50% translate loops without a jump
    const loop = [...items, ...items];

    return (
        <div className="group mt-8 overflow-hidden rounded-[6px] bg-[#FFF8EE] py-4 lg:mt-10 lg:py-5 2xl:mt-[70px] 2xl:py-[27px]">
            <style>{`
                @keyframes announceScroll {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }
            `}</style>
            <ul className="flex w-max animate-[announceScroll_40s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                {loop.map((item, i) => (
                    <li
                        key={`${item.id}-${i}`}
                        aria-hidden={i >= items.length}
                        className="flex items-center whitespace-nowrap text-[14px] text-[#222] lg:text-[16px] 2xl:text-[18px]"
                    >
                        <span className="pl-4 lg:pl-[17px]">
                            {item.text}
                            {item.highlight && <strong className="ml-1.5 font-semibold">{item.highlight}</strong>}
                        </span>
                        <span className="mx-5 text-[#F97316] lg:mx-6 2xl:mx-[26px]" aria-hidden="true">
                            ✦
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function InternationalHero({ data }) {
    const { title, description, button, image, badge, announcements } = data;
    const paragraphs = Array.isArray(description) ? description : [description];

    return (
        <section id="about-us" className="w-full bg-white py-8 lg:py-12 2xl:py-[70px] scroll-mt-24">
            <div className="container">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 2xl:gap-[35px]">
                    {/* Text */}
                    <div className="2xl:pr-[40px]">
                        <h1 className="text-[28px] font-bold leading-[1.12] tracking-[-0.01em] text-[#1a1a1a] sm:text-[34px] lg:text-[38px] xl:text-[46px] 2xl:text-[56px] 2xl:leading-[60px]">
                            {title}
                        </h1>

                        <div className="mt-5 space-y-4 2xl:mt-[40px] 2xl:max-w-[790px] 2xl:space-y-[29px]">
                            {paragraphs.map((paragraph, i) => (
                                <Paragraph key={i} content={paragraph} />
                            ))}
                        </div>

                        {button && (
                            <Link
                                href={button.href}
                                {...(button.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                className="mt-6 inline-flex min-h-[44px] items-center gap-4 rounded-[3px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) px-5 py-2 text-[15px] font-medium text-white transition-opacity duration-300 hover:opacity-90 2xl:mt-[50px] 2xl:h-[50px] 2xl:gap-[18px] 2xl:py-0 2xl:text-[18px]"
                            >
                                {button.label}
                                <div className="size-[16px] flex items-center justify-center">
                                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="7.68152" cy="1.37879" r="1.37879" fill="white" />
                                        <circle cx="7.68152" cy="6.49988" r="1.37879" fill="white" />
                                        <circle cx="7.68152" cy="11.621" r="1.37879" fill="white" />
                                        <circle cx="13.9852" cy="6.49988" r="1.37879" fill="white" />
                                        <circle cx="1.37879" cy="6.49988" r="1.37879" fill="white" />
                                    </svg>

                                </div>
                            </Link>
                        )}
                    </div>

                    {/* Image + NAAC badge */}
                    <div className="relative aspect-[855/544] w-full overflow-hidden rounded-[10px]">
                        <Image
                            src={image.url}
                            alt={image.alternativeText}
                            fill
                            priority
                            sizes="(max-width: 1023px) 100vw, 50vw"
                            className="object-cover"
                        />
                        {badge && (
                            <div className="absolute left-0 top-[6%] flex items-center gap-3 rounded-r-[10px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) py-2.5 pl-3 pr-4 lg:gap-4 lg:py-3 lg:pl-5 lg:pr-6 2xl:top-[6.8%] 2xl:py-[16px] 2xl:pr-[32px]">
                                <Image
                                    src={badge.logo.url}
                                    alt={badge.logo.alternativeText}
                                    width={120}
                                    height={50}
                                    className="h-7 w-auto lg:h-9 2xl:h-[50px]"
                                />
                                <span className="h-8 w-px bg-white/30 2xl:h-[44px]" />
                                <span className="text-[11px] leading-[1.25] text-white lg:text-[14px] 2xl:text-[17px]">
                                    {badge.text}
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Only shown when the data has announcements */}
                {announcements?.length > 0 && <AnnouncementBar items={announcements} />}
            </div>
        </section>
    );
}