import Link from "next/link";
import Image from "@/components/ui/safe-image";

// International flexible section: the site's leaders (picked in the CMS), each linking to the leader's page.
export default function IntlLeadersSection({ data }) {
    return (
        <section className="py-[15px] xl:py-[22px] 2xl:py-[28px] 3xl:py-[40px]">
            <div className="container">
                {data.title && <h2 className="cmn_Title mb-[16px] text-center xl:mb-[24px]">{data.title}</h2>}
                <ul className="flex flex-wrap justify-center gap-[20px] xl:gap-[30px]">
                    {data.leaders.map((l) => (
                        <li key={l.id} className="w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] xl:w-[calc(20%-24px)]">
                            <Link href={l.link ? `/leadership/${l.link}` : "/about"} className="group block text-center">
                                {l.image?.url && (
                                    <span className="relative mx-auto block aspect-square w-full max-w-[220px] overflow-hidden rounded-full">
                                        <Image src={l.image.url} alt={l.image.alternativeText || l.name} fill sizes="220px" className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                                    </span>
                                )}
                                {l.designation && <p className="mt-[12px] text-[13px] font-semibold uppercase tracking-wide text-[#DC2626] xl:text-[14px] 3xl:text-[18px]">{l.designation}</p>}
                                <h3 className="mt-[4px] text-[15px] font-semibold text-black transition-colors group-hover:text-[#DC2626] dark:text-white xl:text-[17px] 3xl:text-[24px]">{l.name}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
