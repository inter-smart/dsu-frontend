import Link from "next/link";
import Image from "@/components/ui/safe-image";
import { safeHref } from "@/lib/utils";

// International flexible section: cards with an image, a title and a link.
export default function IntlLinkCardsSection({ data }) {
    return (
        <section className="py-[15px] xl:py-[22px] 2xl:py-[28px] 3xl:py-[40px]">
            <div className="container">
                {data.title && <h2 className="text-[22px] font-bold leading-[1.25] text-black dark:text-white xl:text-[28px] 2xl:text-[32px] 3xl:text-[40px] mb-[16px] xl:mb-[24px]">{data.title}</h2>}
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
                <div className="grid grid-cols-1 gap-[15px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-[25px] 3xl:gap-[35px]">
                    {data.items.map((item) => {
                        const card = (
                            <>
                                {item.image?.url && (
                                    <div className="relative aspect-square w-full overflow-hidden bg-black/5">
                                        <Image
                                            src={item.image.url}
                                            alt={item.image.alternativeText || item.title}
                                            fill
                                            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                )}
                                <div className="p-[12px] xl:p-[15px]">
                                    <h3 className="text-[15px] font-semibold text-black xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px]">
                                        {item.title}
                                    </h3>
                                    {item.description && (
                                        <p className="mt-[6px] text-[13px] leading-[1.5] text-black/70 2xl:text-[14px]">{item.description}</p>
                                    )}
                                </div>
                            </>
                        );
                        const cls = "group block overflow-hidden rounded-[10px] border border-black/10 bg-white transition-shadow hover:shadow-lg";

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
