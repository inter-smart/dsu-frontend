import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

// Department Research Areas page: heading, intro and one card per area.
export default function DepartmentResearchAreas({ data }) {
    if (!data?.areas?.length) return null;

    return (
        <section className="relative py-[20px_60px] xl:py-[55px_80px] 2xl:py-[65px_100px] 3xl:py-[75px_100px]">
            <div className="container">
                {data.heading && <h2 className="cmn_Title mb-[15px] xl:mb-[20px] text-black dark:text-white">{data.heading}</h2>}
                {data.description && (
                    <div className="typography text_1 mb-[25px] text-[#4A5565] dark:text-white/80">
                        <BlocksRenderer content={data.description} />
                    </div>
                )}
                <div className="grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
                    {data.areas.map((area, i) => (
                        <div
                            key={area.id ?? i}
                            className="rounded-[15px] border border-[#F3DFD2] bg-white p-[20px] dark:border-white/10 dark:bg-[#1a1a1a]"
                        >
                            {area.icon?.url && (
                                <Image src={area.icon.url} alt={area.icon.alternativeText || area.title || ""} width={48} height={48} className="mb-[12px] h-[48px] w-[48px] object-contain" />
                            )}
                            <div className="font-bold">{area.title}</div>
                            {area.description && <p className="mt-[8px] text-[#4A5565] dark:text-white/80">{area.description}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
