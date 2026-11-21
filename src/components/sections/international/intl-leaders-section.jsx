import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "@/components/ui/safe-image";

// International flexible section: the site's leaders (picked in the CMS), each linking to the leader's page.
export default function IntlLeadersSection({ data }) {
    return (
        <section className="py-[15px] xl:py-[22px] 2xl:py-[28px] 3xl:py-[40px]">
            <div className="container">
                {data.title && <h2 className="cmn_Title relative mb-[18px] pb-[12px] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[56px] after:rounded-full after:bg-gradient-to-r after:from-[#DC2626] after:to-[#F97316] after:content-[''] xl:mb-[26px] xl:pb-[16px] xl:after:w-[72px]">{data.title}</h2>}
                <ul className="grid grid-cols-2 gap-[12px] md:grid-cols-3 lg:grid-cols-4 xl:gap-[20px] 3xl:gap-[28px]">
                    {data.leaders.map((l) => (
                        <li key={l.id}>
                            <Link
                                href={l.link ? `/leadership/${l.link}` : "/about"}
                                className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-black/10 bg-white transition-all duration-300 hover:border-[#F97316]/40 hover:shadow-[0_12px_30px_rgba(249,115,22,0.14)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--basecolor) motion-safe:hover:-translate-y-1 dark:border-white/10 dark:bg-[#18191B] xl:rounded-[18px]"
                            >
                                <span className="relative block aspect-[4/5] overflow-hidden bg-gradient-to-b from-[#FFF8EE] to-[#FFE4CC] dark:from-white/5 dark:to-white/10">
                                    {l.image?.url && (
                                        <Image src={l.image.url} alt={l.image.alternativeText || l.name} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" className="object-cover object-top transition-transform duration-700 ease-out motion-safe:group-hover:scale-105" />
                                    )}
                                    <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[4px] origin-left scale-x-0 bg-gradient-to-r from-[#DC2626] to-[#F97316] transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                                </span>
                                <span className="flex flex-1 flex-col items-start p-[12px] xl:p-[18px] 3xl:p-[24px]">
                                    {l.designation && <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#DC2626] xl:text-[12px] 3xl:text-[15px]">{l.designation}</span>}
                                    <span className="mt-[4px] block text-[15px] font-semibold leading-snug text-[#212121] dark:text-white xl:text-[17px] 3xl:text-[22px]">{l.name}</span>
                                    <span className="mt-auto inline-flex items-center pt-[10px] gap-[6px] text-[13px] font-semibold text-[#DC2626] xl:text-[14px]">
                                        View profile
                                        <ArrowRight aria-hidden="true" className="size-[15px] transition-transform duration-300 motion-safe:group-hover:translate-x-1" />
                                    </span>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
