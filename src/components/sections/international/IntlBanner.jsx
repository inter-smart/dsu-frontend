import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "./EnquiryForm"; 
import { withLineBreaks } from "@/lib/line-breaks";

export default function IntlBanner({ data, formData }) {
    const { image, subtitle, title, button, scholarship } = data;
    const breadcrumb = data.breadcrumb || [];

    // ADDED: contact details. Uses CMS fields if present, otherwise the values from the design
    const phones = Array.isArray(data.phones) && data.phones.length
        ? data.phones
        : ["+91 9606022149", "+91 9606022150"];
    const email = data.email || "international-admissions@dsu.edu.in";

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
            <div className="container relative z-10 pb-10 pt-[130px] lg:pt-[240px] lg:pb-[40px] xl:pb-[40px] 2xl:pb-[50px] 3xl:pb-[60px] h-full">
                <div className="grid items-end gap-8 lg:grid-cols-[1fr_43%] xl:grid-cols-[1fr_40%] 2xl:grid-cols-[1fr_655px] 2xl:gap-[40px]">
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
                                                    {withLineBreaks(crumb.label)}
                                                </span>
                                            ) : (
                                                <Link
                                                    href={crumb.href}
                                                    target={crumb.isExternal ? "_blank" : undefined}
                                                    rel={crumb.isExternal ? "noopener noreferrer" : undefined}
                                                    className="font-light text-white transition-colors hover:text-white"
                                                >
                                                    {withLineBreaks(crumb.label)}
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
                            <p className="w-fit bg-linear-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-[17px] font-medium leading-tight text-transparent 3xl:text-[30px] lg:text-[19px] xl:text-[24px] 2xl:text-[28px]">
                                {subtitle}
                            </p>
                        )}
                        <h1 className="mt-1 max-w-[750px] text-[34px] font-bold leading-tight lg:text-[44px] xl:text-[48px] 2xl:text-[45px] 3xl:text-[60.9px]">
                            {withLineBreaks(title)}
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
                                {withLineBreaks(button.label)}
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
                                        <p className="text-[20px] font-semibold leading-tight text-white lg:text-[28px] xl:text-[28px] 2xl:text-[30px]">
                                            {withLineBreaks(scholarship.title)}
                                        </p>
                                        <p className="mt-0.5 text-[14px] text-white/85 lg:text-[16px] xl:text-[16px] 2xl:text-[18px]">
                                            {scholarship.note}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* ADDED: Phone + email row */}
                        {/* {(phones.length > 0 || email) && ( */}
                            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-[14px] font-medium text-white lg:text-[16px] 2xl:mt-[36px] 2xl:gap-x-6 2xl:text-[18px]">
                                {phones.length > 0 && (
                                    <div className="flex items-center gap-3">
                                        {/* Phone icon */}
                                        <svg className="size-[22px] shrink-0 text-[#FBBF24] 2xl:size-[26px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
                                        </svg>
                                        {phones.map((phone, i) => (
                                            <div key={phone} className="flex items-center gap-5 2xl:gap-6">
                                                {i > 0 && (
                                                    <span className="h-5 w-px bg-white/60" aria-hidden="true" />
                                                )}
                                                <a
                                                    href={`tel:${String(phone).replace(/[^\d+]/g, "")}`}
                                                    className="transition-opacity duration-300 hover:text-[#dc2626]"
                                                >
                                                    {phone}
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {phones.length > 0 && email && (
                                    <span className="hidden h-5 w-px bg-white/60 sm:block" aria-hidden="true" />
                                )}

                                {email && (
                                    <div className="flex items-center gap-3">
                                        {/* Mail icon */}
                                        <svg className="size-[24px] shrink-0 text-[#FBBF24] 2xl:size-[28px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path d="M3 5h18a1 1 0 0 1 1 1v.51l-10 6.25L2 6.51V6a1 1 0 0 1 1-1zm-1 4.86V18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9.86l-9.47 5.92a1 1 0 0 1-1.06 0L2 9.86z" />
                                        </svg>
                                        <a
                                            href={`mailto:${email}`}
                                            className="break-all transition-opacity duration-300 hover:text-[#dc2626]"
                                        >
                                            {email}
                                        </a>
                                    </div>
                                )}
                            </div>
                        {/* )} */}
                        {/* END ADDED */}
                    </div>

                    {/* Right: enquiry form (only when its section has content) */}
                    {formData && <EnquiryForm data={formData} className="mt-4" />}
                </div>
            </div>
        </section>
    );
}