import Link from "next/link";
import Image from "@/components/ui/safe-image";
import { safeHref } from "@/lib/utils";

// International flexible section: cards with an image, a title and a link.
export default function IntlLinkCardsSection({ data }) {
    return (
        <section className="py-[15px] xl:py-[22px] 2xl:py-[28px] 3xl:py-[40px]">
            <div className="container">
                {data.title && <h2 className="text-[22px] font-bold leading-[1.25] text-black dark:text-white xl:text-[28px] 2xl:text-[32px] 3xl:text-[40px] mb-[16px] xl:mb-[24px]">{data.title}</h2>}
                <div className="grid grid-cols-1 gap-[15px] sm:grid-cols-2 lg:grid-cols-3 xl:gap-[25px] 3xl:gap-[35px]">
                    {data.items.map((item) => {
                        const card = (
                            <>
                                {item.image?.url && (
                                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                                        <Image
                                            src={item.image.url}
                                            alt={item.image.alternativeText || item.title}
                                            fill
                                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                )}
                                <h3 className="p-[15px] text-[16px] font-semibold text-black xl:text-[18px] 2xl:text-[20px] 3xl:text-[26px]">
                                    {item.title}
                                </h3>
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
            </div>
        </section>
    );
}
