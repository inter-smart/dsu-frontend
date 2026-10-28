import Image from "next/image";
import Link from "next/link";
import { Grip } from "lucide-react";
import EnquiryForm from "./EnquiryForm";

export default function InternationalBanner({ data, formData }) {
    const { image, breadcrumb, subtitle, title, button, scholarship } = data;

    return (
        <section className="relative w-full overflow-hidden bg-black">
            {/* Background image + overlays */}
            <Image
                src={image.url}
                alt={image.alternativeText}
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/45 to-black/25" />
            <div className="absolute inset-x-0 top-0 h-[260px] bg-linear-to-b from-black/60 to-transparent" />

            {/* pt clears the fixed header (taller on desktop) */}
            <div className="container relative z-10 pb-10 pt-[130px] lg:pt-[240px] lg:pb-[50px]">
                <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_46%] xl:grid-cols-[1fr_40%] 2xl:grid-cols-[1fr_655px] 2xl:gap-[40px]">
                    {/* Left: text pinned to the bottom */}
                    <div className="flex flex-col justify-end text-white">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="mb-4 2xl:mb-[18px]">
                            <ol className="flex items-center gap-2 text-[14px] 2xl:text-[18px]">
                                {breadcrumb.map((crumb, index) => {
                                    const isLast = index === breadcrumb.length - 1;
                                    return (
                                        <li key={crumb.label} className="flex items-center gap-2">
                                            {isLast ? (
                                                <span aria-current="page" className="font-medium">
                                                    {crumb.label}
                                                </span>
                                            ) : (
                                                <Link href={crumb.href} className="text-white/80 transition-colors hover:text-white">
                                                    {crumb.label}
                                                </Link>
                                            )}
                                            {!isLast && <span className="size-[6px] rounded-full bg-[#F04A23]" aria-hidden="true" />}
                                        </li>
                                    );
                                })}
                            </ol>
                        </nav>

                        <p className="text-[22px] font-medium leading-tight text-[#F04A23] lg:text-[28px] 2xl:text-[32px]">
                            {subtitle}
                        </p>
                        <h1 className="mt-1 max-w-[780px] text-[34px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[44px] lg:text-[48px] xl:text-[56px] 2xl:text-[64px] 2xl:leading-[60px]">
                            {title}
                        </h1>

                        {/* Button + scholarship */}
                        <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-5 2xl:mt-[40px] 2xl:gap-x-[90px]">
                            <Link
                                href={button.href}
                                className="inline-flex h-[44px] items-center gap-4 rounded-[3px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) px-5 text-[15px] font-medium text-white transition-opacity duration-300 hover:opacity-90 2xl:h-[50px] 2xl:gap-[18px] 2xl:text-[18px]"
                            >
                                {button.label}
                                <Grip className="size-4 text-white/80 2xl:size-[18px]" strokeWidth={2} />
                            </Link>

                            <div className="flex items-center gap-3 2xl:gap-[18px]">
                                <Image
                                    src={scholarship.icon.url}
                                    alt={scholarship.icon.alternativeText}
                                    width={52}
                                    height={52}
                                    className="size-10 object-contain lg:size-12 2xl:size-[52px]"
                                />
                                <div>
                                    <p className="text-[20px] font-medium leading-tight lg:text-[26px] 2xl:text-[30px]">
                                        {scholarship.title}
                                    </p>
                                    <p className="mt-0.5 text-[14px] text-white/85 2xl:text-[18px]">{scholarship.note}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: enquiry form */}
                    <EnquiryForm data={formData} />
                </div>
            </div>
        </section>
    );
}