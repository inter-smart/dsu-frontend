import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactDetails({ data }) {
    const { title, image, items } = data;

    return (
        <section id="contact" className="grid w-full lg:grid-cols-2">
            {/* Left: light-blue panel */}
            <div className="flex items-center bg-[#F2F6FC] px-5 py-10 lg:py-14 lg:pl-[12%] lg:pr-8 2xl:py-[70px] 2xl:pl-[17%]">
                <div className="w-full">
                    <h2 className="whitespace-pre-line text-[24px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#1a1a1a] lg:text-[28px] 2xl:text-[30px] 2xl:leading-[30px]">
                        {title}
                    </h2>

                    <ul className="mt-6 space-y-4 2xl:mt-[40px] 2xl:space-y-[22px]">
                        {items.map((item) => (
                            <li key={item.id} className="flex items-center gap-4 2xl:gap-[12px]">
                                {/* Icon box with image */}
                                <span className="flex h-12 w-14 shrink-0 items-center justify-center rounded-[4px] border border-black/10 bg-[#F0F0F0] lg:h-14 lg:w-16 2xl:h-[58px] 2xl:w-[65px]">
                                    <Image
                                        src={item.icon.url}
                                        alt={item.icon.alternativeText || ""}
                                        width={32}
                                        height={32}
                                        className="size-6 object-contain lg:size-7 2xl:size-8"
                                    />
                                </span>

                                <div className="min-w-0">
                                    <p className="text-[15px] font-medium leading-tight text-[#111] lg:text-[16px] 2xl:text-[18px]">
                                        {item.label}
                                    </p>
                                    <p className="mt-1.5 break-words text-[14px] leading-[1.5] text-[#444] lg:text-[16px] 2xl:mt-[8px] 2xl:text-[18px]">
                                        {item.values.map((value, i) => (
                                            <Fragment key={value.text}>
                                                {i > 0 && " or "}
                                                <Link
                                                    href={value.href}
                                                    className="no-underline! transition-colors duration-300 font-medium text-[#4A5565] hover:text-(--basecolor)"
                                                >
                                                    {value.text}
                                                </Link>
                                            </Fragment>
                                        ))}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Right: photo, runs to the right edge */}
            <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:min-h-[420px] 2xl:min-h-[418px]">
                <Image
                    src={image.url}
                    alt={image.alternativeText}
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="object-cover"
                />
            </div>
        </section>
    );
}