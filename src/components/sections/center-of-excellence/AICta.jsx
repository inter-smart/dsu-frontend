import { withLineBreaks, plainTitle } from "@/lib/line-breaks";
import Image from "next/image";
import Link from "next/link";

const primaryButton =
    "group relative flex h-[42px] xl:h-[48px] 2xl:h-[50px] items-center justify-center gap-[14px] rounded-[4px] bg-gradient-to-r from-[#DC2626] to-[#F97316] px-[20px] text-[14px] xl:text-[16px] font-bold text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)]";

const secondaryButton =
    "group relative flex h-[42px] xl:h-[48px] 2xl:h-[50px] items-center justify-center gap-[14px] rounded-[4px] border border-[#F04E23] bg-transparent px-[20px] text-[14px] xl:text-[16px] font-bold text-white transition-all duration-500 hover:-translate-y-[2px] hover:bg-gradient-to-r hover:from-[#DC2626] hover:to-[#F97316] hover:border-transparent";

function CtaButton({ button, className }) {
    if (!button?.label?.trim()) return null;

    return (
        <Link
            href={button.link || "#!"}
            {...(button.isExternal && { target: "_blank", rel: "noopener noreferrer" })}
            className={className}
        >
            {withLineBreaks(button.label)}
            <Image
                src="/images/icon-btn.svg"
                alt=""
                width={15}
                height={15}
                className="size-3.75 transition-transform duration-300 group-hover:rotate-180"
            />
        </Link>
    );
}

export default function AICta({ data }) {
    if (!data) return null;

    const hasButtons = data?.button?.label?.trim() || data?.secondaryButton?.label?.trim();

    return (
        <section className="relative overflow-hidden bg-[#0b0b14] py-[60px] sm:py-[70px] xl:py-[90px] 2xl:py-[100px] 3xl:py-[130px]">
            {/* background image + dark overlay so the text stays readable */}
            {data?.image?.url && (
                <Image
                    src={data.image.url}
                    alt={data.image.alternativeText || ""}
                    fill
                    sizes="100vw"
                    className="object-cover object-bottom"
                />
            )}
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-black/80"
            />

            <div className="container relative z-10">
                <div className="mx-auto max-w-[900px] text-center text-white">
                    {data?.eyebrow && (
                        <p className="text-[12px] sm:text-[13px] xl:text-[15px] uppercase tracking-[0.02em] text-[#F04E23]">
                            {data.eyebrow}
                        </p>
                    )}
                    {data?.heading && (
                        <h2 className="cmn_Title mt-[8px] xl:mt-[10px] font-bold leading-[1.15] text-white">
                            {withLineBreaks(data.heading)}
                        </h2>
                    )}
                    {data?.description && (
                        <p className="text_1 mt-[12px] xl:mt-[16px] leading-[1.6] text-white">
                            {withLineBreaks(data.description)}
                        </p>
                    )}

                    {hasButtons && (
                        <div className="mt-[25px] xl:mt-[35px] flex flex-wrap items-center justify-center gap-[12px] sm:gap-[17px]">
                            <CtaButton button={data.button} className={primaryButton} />
                            <CtaButton button={data.secondaryButton} className={secondaryButton} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}