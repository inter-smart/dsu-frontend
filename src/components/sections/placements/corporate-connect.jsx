import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function CorporateConnect({ data }) {
    return (
        <section className="relative py-[20px_30px] sm:py-[20px_40px] lg:py-[50px] xl:py-[70px] 2xl:py-[90px] 3xl:py-[140px] bg-white dark:bg-[#0f1011] transition-colors duration-300">
            <div className="container">
                {/* TOP SECTION: Float Right for Image + Stats */}
                <div className="relative max-lg:flex max-lg:flex-col-reverse gap-[20px] after:content-[''] after:table after:clear-both ">
                    {/* Floated Right Block (Image + Stat Cards) */}
                    <div className="w-full lg:w-[50%] xl:w-[650px] 2xl:w-[730px] 3xl:w-[890px] lg:float-right ml-0 lg:ml-[30px] xl:ml-[45px] 2xl:ml-[55px] mb-[25px] lg:mb-[20px]">
                        {data.media && (
                            <div className="w-full rounded-[8px] xl:rounded-[10px] overflow-hidden shadow-sm mb-[15px] xl:mb-[20px]">
                                <Image
                                    src={data.media.url?.replace("program-overview", "overview") || data.media.url}
                                    width={750}
                                    height={420}
                                    alt={data.media.alternativeText || data.heading}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                        )}
                    </div>


                    <div> 

                        {data?.heading && (
                            <h2 className="cmn_Title mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px] text-black dark:text-white">
                                {data.heading}
                            </h2>
                        )}

                        {data?.description && (
                            <div className="text_1 text-[#4A5565] mb-[15px] xl:mb-[20px] 3xl:mb-[30px] dark:text-[#9CA3AF] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px]">
                                <BlocksRenderer content={data.description} />
                            </div>
                        )} 
                        {data?.list && (
                            <ul className="space-y-1 3xl:space-y-2">
                                {data?.list.map((item, id) => (
                                    <li className="text_1 text-[#212121] dark:text-[#9CA3AF] font-medium relative before:absolute before:content-[''] before:top-[8px] before:lg:top-[12px] before:left-0 before:w-[5px] before:h-[5px] before:rounded-full before:bg-[#212121] dark:before:bg-[#F97316] pl-[15px] lg:pl-[20px]" key={id}>
                                        {item.label}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
