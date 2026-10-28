import Image from "next/image";
import Link from "next/link";

// Button styles per variant (matches the 3 buttons in the design)
const buttonVariants = {
    light: "bg-white text-[#E8501B] border border-white hover:bg-white/90",
    accent: "bg-[#FDB913] text-[#111] border border-[#FDB913] hover:bg-[#FDB913]/90",
    outline: "bg-transparent text-white border border-white/90 hover:bg-white/10",
};

function Background({ media }) {
    const isVideo = media.mime?.startsWith("video");

    return (
        <>
            {isVideo ? (
                <video
                    src={media.url}
                    poster={media.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-hidden="true"
                    className="absolute inset-0 size-full object-cover motion-reduce:hidden"
                />
            ) : (
                <Image
                    src={media.url}
                    alt={media.alternativeText || ""}
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                />
            )}
            {/* Dark overlay for text contrast */}
            <div aria-hidden="true" className="absolute inset-0 bg-black/55" />
        </>
    );
}

export default function CtaBanner({ data }) {
    const { title, description, buttons = [], badges = [], background } = data;

    return (
        <section className="relative w-full overflow-hidden bg-[#1a1a1a] py-14 lg:py-20 2xl:py-[112px]">
            <Background media={background} />

            <div className="container relative z-10">
                <div className="mx-auto flex flex-col items-center text-center">
                    <h2 className="text-[28px] font-bold leading-tight text-white md:text-[34px] lg:text-[42px] 2xl:text-[52px] 3xl:text-[55px]">
                        {title}
                    </h2>

                    <p className="mt-4 max-w-[620px] text-[14px] leading-[1.7] text-white/95 lg:text-[16px] 2xl:mt-[22px] 2xl:max-w-[600px] 2xl:text-[18px] 2xl:leading-[29px]">
                        {description}
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center lg:mt-8 2xl:mt-[36px] 2xl:gap-[10px]">
                        {buttons.map((btn) => (
                            <Link
                                key={btn.id}
                                href={btn.href}
                                className={`inline-flex h-[44px] w-full items-center justify-between gap-4 rounded-[3px] px-5 text-[15px] font-medium transition-colors duration-300 sm:w-auto 2xl:h-[50px] 2xl:gap-[18px] 2xl:text-[18px] ${buttonVariants[btn.variant] ?? buttonVariants.light}`}
                            >
                                {btn.label}
                                {btn.icon && (
                                    <Image
                                        src={btn.icon.url}
                                        alt={btn.icon.alternativeText || ""}
                                        width={18}
                                        height={18}
                                        unoptimized={btn.icon.url.endsWith(".svg")}
                                        className="size-4 shrink-0 object-contain 2xl:size-[18px]"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Trust badges */}
                    <ul className="mt-5 flex flex-wrap items-center justify-center gap-y-2 lg:mt-6 2xl:mt-[30px]">
                        {badges.map((badge, i) => (
                            <li
                                key={badge.id}
                                className={`flex items-center gap-1.5 text-[12px] text-white lg:text-[13px] 2xl:text-[14px] ${
                                    i > 0 ? "ml-4 border-l border-white/30 pl-4 2xl:ml-[28px] 2xl:pl-[28px]" : ""
                                }`}
                            >
                                {badge.stars > 0 && (
                                    <span
                                        className="flex text-[14px] leading-none tracking-[1px] text-[#FDB913] 2xl:text-[16px]"
                                        aria-hidden="true"
                                    >
                                        {"★".repeat(badge.stars)}
                                    </span>
                                )}
                                <span>{badge.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}