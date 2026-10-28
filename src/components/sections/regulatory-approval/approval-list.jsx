import Image from "next/image";
import Link from "next/link";

// `items` come from GET /api/regulatory-approval-page -> listSection: [{ id, icon, title, slug, description }]
export default function RegulatoryApprovalList({ items = [] }) {
    const sections = items.filter((item) => item?.slug);

    if (sections.length === 0) return null;

    return (
        <section className="relative py-[40px_60px] xl:py-[55px_80px] 2xl:py-[65px_100px] 3xl:py-[75px_170px]">
            <div className="container">
                <div className="grid grid-cols-1 gap-[15px] sm:grid-cols-2 lg:grid-cols-3 xl:gap-[25px] 3xl:gap-[35px]">
                    {sections.map((item) => {
                        const { icon, title, slug, description } = item;

                        return (
                            <Link
                                key={item.documentId || item.id}
                                href={`/regulatory-approval/${slug}`}
                                className="group flex h-full flex-col rounded-[10px] border border-black/10 p-[20px] !no-underline transition-all duration-200 ease-in-out hover:shadow-[0_6px_20px_rgba(220,38,38,0.18)] xl:p-[30px] 3xl:p-[40px]"
                            >
                                {icon?.url && (
                                    <div className="mb-[15px] w-[45px] xl:mb-[20px] xl:w-[55px] 2xl:w-[65px] 3xl:w-[70px]">
                                        <Image
                                            src={icon.url}
                                            width={70}
                                            height={70}
                                            alt={icon.alternativeText || title || "icon"}
                                        />
                                    </div>
                                )}
                                <div className="mb-[8px] font-medium text-black text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px]">
                                    {title}
                                </div>
                                {description && (
                                    <div className="text_1 font-normal text-[#4A5565]">
                                        {description}
                                    </div>
                                )}
                                <span className="text_1 mt-auto pt-[15px] font-bold text-[#DC2626] transition-transform duration-200 group-hover:translate-x-[3px]">
                                    Read more →
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
