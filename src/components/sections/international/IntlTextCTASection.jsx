"use client";

import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { ctaLinkProps } from "@/lib/schools/link-props";
import { hasContent } from "@/lib/has-content";

const renderText = (value) =>
    Array.isArray(value) ? <BlocksRenderer content={value} /> : value;

// Builds the wa.me link from a full url, or from number + optional prefilled message
const whatsappHref = (whatsapp) => {
    if (whatsapp?.url) return whatsapp.url;
    const number = String(whatsapp?.number || "").replace(/\D/g, "");
    if (!number) return "";
    const text = whatsapp?.message ? `?text=${encodeURIComponent(whatsapp.message)}` : "";
    return `https://wa.me/${number}${text}`;
};


// Shown only when it has a heading and something to read or click; there is no built-in fallback content.
export default function IntlTextCTASection({ data }) {
    if (!data?.heading?.trim()) return null;

    const hasDescription = Array.isArray(data.description)
        ? hasContent(data.description)
        : Boolean(data.description);

    const showCta = Boolean(data.cta?.url && data.cta?.label);
    const whatsappUrl = whatsappHref(data.whatsapp);
    const showWhatsapp = Boolean(whatsappUrl && data.whatsapp?.label);

    if (!hasDescription && !showCta && !showWhatsapp) return null;

    return (
        <section className="relative py-[40px] xl:py-[55px] 2xl:py-[65px] 3xl:py-[75px] bg-white dark:bg-[#101010] transition-colors duration-300">
            <div className="container">
                <div className="relative w-full overflow-hidden rounded-[12px] xl:rounded-[16px] bg-gradient-to-b from-[#FFF8EE] to-[#FFF1E0] dark:from-[#18191B] dark:to-[#18191B] px-[20px] py-[40px] sm:px-[40px] xl:py-[70px] 2xl:py-[80px] 3xl:py-[100px] text-center">
                    <div className="mx-auto flex max-w-[1000px] 3xl:max-w-[1200px] flex-col items-center">
                        {data?.heading && (
                            <h2 className="text-[26px] sm:text-[34px] xl:text-[46px] 2xl:text-[54px] 3xl:text-[66px] font-bold leading-[1.15] mb-[12px] xl:mb-[16px] text-[#212121] dark:text-white">
                                {data.heading}
                            </h2>
                        )}

                        {hasDescription && (
                            <div className="text_1 leading-[1.4] text-[#4A5565] dark:text-[#9CA3AF] [&_p]:text-[#4A5565] dark:[&_p]:text-[#9CA3AF] mb-[25px] xl:mb-[30px] 3xl:mb-[40px] typography">
                                {renderText(data.description)}
                            </div>
                        )}

                        {(showCta || showWhatsapp) && (
                            <div className="flex flex-wrap items-center justify-center gap-[12px] xl:gap-[16px]">
                                {showCta && (
                                    <Link
                                        href={data.cta.url}
                                        {...ctaLinkProps(data.cta)}
                                        className="group relative flex h-[40px] w-fit min-w-[140px] items-center justify-center gap-[12px] overflow-hidden rounded-[4px] bg-gradient-to-r from-[#DC2626] to-[#F97316] px-[20px] text_1 font-bold text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)] xl:h-[46px] xl:min-w-[161px] 2xl:h-[50px] 3xl:h-[60px] 3xl:min-w-[200px] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full"
                                    >
                                        <span className="relative z-[1] transition-transform duration-300 group-hover:translate-x-[-2px]">
                                            {data.cta.label}
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

                                {showWhatsapp && (
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={data.whatsapp.label}
                                        className="group flex h-[40px] w-fit min-w-[140px] items-center justify-center gap-[10px] rounded-[4px] bg-[#25D366] px-[20px] text_1 font-bold text-white transition-all duration-500 hover:-translate-y-[2px] hover:bg-[#1EBE5A] hover:shadow-[0_8px_25px_rgba(37,211,102,0.35)] xl:h-[46px] xl:min-w-[161px] 2xl:h-[50px] 3xl:h-[60px] 3xl:min-w-[200px]"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-[18px] w-[18px] shrink-0 transition-transform duration-300 group-hover:scale-110 xl:h-[20px] xl:w-[20px] 3xl:h-[24px] 3xl:w-[24px]"
                                        >
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        <span>{data.whatsapp.label}</span>
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}