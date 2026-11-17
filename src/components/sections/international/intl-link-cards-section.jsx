import Link from "next/link";
import Image from "@/components/ui/safe-image";
import { safeHref } from "@/lib/utils";

// International flexible section: cards with an image, a title and a link.
export default function IntlLinkCardsSection({ data }) {
    return (
        <section className="py-[15px] xl:py-[22px] 2xl:py-[28px] 3xl:py-[40px]">
            <div className="container">
                {data.title && (
                    <h2 className="relative mx-auto mb-[22px] pb-[14px] text-center text-[24px] font-bold leading-[1.25] text-[#212121] after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-[56px] after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-(--basecolor) after:to-(--basecolor2) after:content-[''] dark:text-white xl:mb-[32px] xl:text-[32px] xl:after:w-[72px] 2xl:text-[38px] 3xl:text-[52px]">
                        {data.title}
                    </h2>
                )}
                {data.display === "people" ? (
                    <ul className="flex flex-wrap justify-center gap-[24px] xl:gap-[36px]">
                        {data.items.map((item) => (
                            <li key={item.id} className="w-[calc(50%-12px)] text-center md:w-[calc(33.333%-18px)] xl:w-[calc(25%-27px)]">
                                {item.image?.url && (
                                    <span className="relative mx-auto block aspect-square w-full max-w-[220px] overflow-hidden rounded-full">
                                        <Image src={item.image.url} alt={item.image.alternativeText || item.title} fill sizes="220px" className="object-cover object-top" />
                                    </span>
                                )}
                                {item.description && <p className="mt-[12px] text-[13px] font-semibold uppercase tracking-wide text-[#DC2626] xl:text-[14px] 3xl:text-[18px]">{item.description}</p>}
                                <h3 className="mt-[4px] text-[15px] font-semibold text-black dark:text-white xl:text-[17px] 3xl:text-[24px]">{item.title}</h3>
                            </li>
                        ))}
                    </ul>
                ) : data.display === "icons" ? (
                    <ul className="flex flex-wrap items-start gap-x-[20px] gap-y-[16px] xl:gap-x-[32px]">
                        {data.items.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={safeHref(item.url || "#")}
                                    target={item.isExternal ? "_blank" : undefined}
                                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                                    className="group flex w-[64px] flex-col items-center gap-[6px] text-center xl:w-[80px] 3xl:w-[110px]"
                                >
                                    {item.image?.url && (
                                        <span className="relative block size-[48px] overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110 xl:size-[56px] 3xl:size-[80px]">
                                            <Image src={item.image.url} alt={item.image.alternativeText || item.title} fill sizes="80px" className="object-contain" />
                                        </span>
                                    )}
                                    <span className="text-[12px] font-medium text-black transition-colors group-hover:text-[#DC2626] dark:text-white xl:text-[14px] 3xl:text-[18px]">{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                <div className="grid grid-cols-1 gap-[15px] sm:grid-cols-2 lg:grid-cols-3 xl:gap-[25px] 3xl:gap-[35px]">
                    {data.items.map((item) => {
                        const card = (
                            <>
                                {item.image?.url && (
                                    <Image
                                        src={item.image.url}
                                        alt={item.image.alternativeText || ""}
                                        fill
                                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                )}
                                <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                                <span className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-(--basecolor2) to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-[12px] p-[18px] xl:p-[24px]">
                                    <span className="min-w-0">
                                        <span className="block text-[18px] font-bold leading-tight text-white xl:text-[22px] 2xl:text-[26px] 3xl:text-[34px]">{item.title}</span>
                                        {item.description && (
                                            // Shown on hover/keyboard focus; touch screens (no hover) always show it
                                            <span className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100 [@media(hover:none)]:grid-rows-[1fr] [@media(hover:none)]:opacity-100">
                                                <span className="overflow-hidden">
                                                    <span className="mt-[6px] block text-[13px] leading-[1.5] text-white 2xl:text-[15px]">{item.description}</span>
                                                </span>
                                            </span>
                                        )}
                                    </span>
                                    {item.url && (
                                        <span aria-hidden="true" className="flex size-[36px] shrink-0 items-center justify-center rounded-full bg-white text-[18px] text-(--basecolor) transition-transform duration-300 group-hover:translate-x-[4px] xl:size-[44px]">→</span>
                                    )}
                                </span>
                            </>
                        );
                        const cls = "group relative block aspect-[4/3] overflow-hidden rounded-[16px] bg-black shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_14px_36px_rgba(249,115,22,0.3)] xl:aspect-[5/4]";

                        return item.url ? (
                            <Link
                                key={item.id}
                                href={safeHref(item.url)}
                                target={item.isExternal ? "_blank" : undefined}
                                rel={item.isExternal ? "noopener noreferrer" : undefined}
                                className={cls}
                            >
                                {card}
                            </Link>
                        ) : (
                            <div key={item.id} className={cls}>{card}</div>
                        );
                    })}
                </div>
                )}
            </div>
        </section>
    );
}
