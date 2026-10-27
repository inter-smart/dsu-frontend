import Image from "next/image";
import Link from "next/link";
import { Grip } from "lucide-react";

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

    return (
        <section id="about-us" className="w-full bg-white py-8 lg:py-12 2xl:py-[70px]">
            <div className="container">
                <div className="grid   gap-8 lg:grid-cols-2 lg:gap-7 2xl:gap-[25px]">
                    {/* Text */}
                    <div className="2xl:pr-[40px]">
                        <h1 className="text-[28px] font-bold text-[#1a1a1a] sm:text-[34px] lg:text-[38px] 2xl:text-[42px] 3xl:text-[55px] leading-snug">
                            {title}
                        </h1>
                        <p className="mt-5 text-[14px] leading-[1.7] text-[#555] lg:text-[15px] 2xl:mt-[40px] 2xl:max-w-[780px] 2xl:text-[18px] 2xl:leading-[29px]">
                            {description}
                        </p>
                        <Link
                            href={button.href}
                            className="mt-6 inline-flex h-[44px] items-center gap-4 rounded-[3px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) px-5 text-[15px] font-medium text-white transition-opacity duration-300 hover:opacity-90 2xl:mt-[44px] 2xl:h-[50px] 2xl:gap-[18px] 2xl:text-[18px]"
                        >
                            {button.label}
                            <Grip className="size-4 text-white/80 2xl:size-[18px]" strokeWidth={2} />
                        </Link>
                    </div>

                    {/* Image + NAAC badge */}
                    <div className="relative aspect-[855/544] w-full h-full overflow-hidden rounded-[10px]">
                        <Image
                            src={image.url}
                            alt={image.alternativeText}
                            fill
                            priority
                            sizes="(max-width: 1023px) 100vw, 50vw"
                            className="object-cover"
                        />
                        <div className="absolute left-0 top-[6%] flex items-center gap-3 rounded-r-[10px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) py-2.5 pl-3 pr-4 lg:gap-4 lg:py-3 lg:pl-5 lg:pr-6 2xl:top-[6.8%] 2xl:py-[16px] 2xl:pr-[32px] max-w-[200px] xl:max-w-[250px] 2xl:max-w-[270px] 3xl:max-w-[320px]">
                            <Image
                                src={badge.logo.url}
                                alt={badge.logo.alternativeText}
                                width={120}
                                height={50}
                                className="h-7 w-auto lg:h-9 2xl:h-[50px]"
                            />
                            <span className="h-8 w-px bg-white/30 2xl:h-[44px]" />
                            <span className="text-[13px] leading-[1.25] text-white lg:text-[16px] 2xl:text-[18px] max-w-[50%] text-center">
                                {badge.text}
                            </span>
                        </div>
                    </div>
                </div>

                <AnnouncementBar items={announcements} />
            </div>
        </section>
    );
}