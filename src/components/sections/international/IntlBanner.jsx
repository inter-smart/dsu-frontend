import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "./EnquiryForm";

// Banner of /international only. The Strapi builder guarantees title and image; button, scholarship and
// the breadcrumb links are optional and simply not rendered when empty.
export default function IntlBanner({ data, formData }) {
    const { image, subtitle, title, button, scholarship } = data;
    const breadcrumb = data.breadcrumb || [];

    return (
        <section className="relative w-full overflow-hidden bg-black lg:min-h-screen flex items-end">
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
            <div className="container relative z-10 pb-10 pt-[130px] lg:pt-[240px] lg:pb-[40px] xl:pb-[50px] 2xl:pb-[80px] 3xl:pb-[100px] h-full">
                <div className="grid items-end gap-8 lg:grid-cols-[1fr_46%] xl:grid-cols-[1fr_40%] 2xl:grid-cols-[1fr_655px] 2xl:gap-[40px]">
                    {/* Left: text pinned to the bottom */}
                    <div className="flex flex-col justify-end pb-3 text-white max-lg:pt-[120px] lg:pb-15">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="mb-4 2xl:mb-[18px]">
                            <ol className="text_1 flex items-center gap-2">
                                {breadcrumb.map((crumb, index) => {
                                    const isLast = index === breadcrumb.length - 1;
                                    return (
                                        <li key={crumb.label} className="flex items-center gap-2">
                                            {isLast || !crumb.href ? (
                                                <span
                                                    aria-current={isLast ? "page" : undefined}
                                                    className="font-medium text-white"
                                                >
                                                    {crumb.label}
                                                </span>
                                            ) : (
                                                <Link
                                                    href={crumb.href}
                                                    target={crumb.isExternal ? "_blank" : undefined}
                                                    rel={crumb.isExternal ? "noopener noreferrer" : undefined}
                                                    className="font-light text-white transition-colors hover:text-white"
                                                >
                                                    {crumb.label}
                                                </Link>
                                            )}
                                            {!isLast && (
                                                <span className="size-[6px] rounded-full bg-[#F04A23]" aria-hidden="true" />
                                            )}
                                        </li>
                                    );
                                })}
                            </ol>
                        </nav>

                        {subtitle && (
                            <p className="w-fit bg-linear-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-[17px] font-medium leading-tight text-transparent xl:text-[22px] 2xl:text-[28px] 3xl:text-[30px]">
                                {subtitle}
                            </p>
                        )}
                        <h1 className="mt-1 max-w-[750px] text-[34px] font-bold leading-tight lg:text-[44px] xl:text-[48px] 2xl:text-[45px] 3xl:text-[60.9px]">
                            {title}
                        </h1>

                        {/* Button + scholarship */}
                        <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-5 2xl:mt-[40px] 2xl:gap-x-[90px]">
                            {button && (
                            <Link
                                href={button.url}
                                target={button.isExternal ? "_blank" : undefined}
                                rel={button.isExternal ? "noopener noreferrer" : undefined}
                                className="inline-flex h-[44px] items-center gap-4 rounded-[3px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) px-5 text-[15px] font-medium text-white transition-opacity duration-300 hover:opacity-90 2xl:h-[50px] 2xl:gap-[18px] 2xl:text-[18px]"
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

                            {scholarship && (
                                <div className="flex items-center gap-3 2xl:gap-[18px]">
                                    <Image
                                        src={scholarship.icon.url}
                                        alt={scholarship.icon.alternativeText}
                                        width={52}
                                        height={52}
                                        className="size-10 object-contain lg:size-12 2xl:size-[52px] 3xl:size-[65px]"
                                    />
                                    <div>
                                        <p className="text-[20px] font-semibold leading-tight text-white lg:text-[26px] 2xl:text-[30px]">
                                            {scholarship.title}
                                        </p>
                                        <p className="mt-0.5 text-[14px] text-white/85 2xl:text-[18px]">
                                            {scholarship.note}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right: enquiry form (only when its section has content) */}
                    {formData && <EnquiryForm data={formData} className="mt-4" />}
                </div>
            </div>
        </section>
    );
}