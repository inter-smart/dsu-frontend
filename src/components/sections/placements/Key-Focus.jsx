"use client";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function KeyFocus({ data }) {
    const primaryImage = data?.media;
    return (
        <section className="relative py-[5px_40px] xl:py-[5px_60px] 2xl:py-[20px_70px] 3xl:py-[30px_90px] ">
            <div className="container">
                <div className="flex flex-wrap justify-between mb-[30px] 2xl:mb-[45px]">
                    {data.heading && (
                        <div className="text-[18px] lg:text-[25px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[45px] font-semibold">
                            {data.heading}
                        </div>
                    )}
                    {data.description && (
                        <div className="text_1 text-[#4A5565] w-full lg:w-[45%] ml-auto dark:text-[#9CA3AF] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px]">
                            <BlocksRenderer content={data.description} />
                        </div>
                    )}
                </div>
                <div className="relative lg:flex flex-wrap">
                    {primaryImage && (
                        <div className="w-full lg:w-[35%] max-lg:hidden">
                            <div className="w-full h-full rounded-[8px] xl:rounded-[10px] overflow-hidden shadow-sm">
                                <Image
                                    src={primaryImage.url}
                                    width={750}
                                    height={420}
                                    alt={primaryImage.alternativeText || data.heading}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    )}
                    <div className="w-full lg:w-[65%]  flex-1">
                        <Accordion type="single" collapsible defaultValue="item-2">
                            {data?.accordion?.map((item) => (
                                <AccordionItem key={item.id} value={`item-${item.id}`} className="p-[8px_10px] md:p-[15px] xl:p-[18px] 3xl:p-[20px_25px] border border-[#9fa2a76b] rounded-[6px] mb-[10px] xl:mb-[20px] last-of-type:mb-0">
                                    <AccordionTrigger
                                        className="relative p-0 font-medium !text-black text-[11px] hover:no-underline md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[20px] pr-[10px] md:pr-[15px] 2xl:pr-[25px] after:absolute after:right-[5px] after:md:right-[10px] after:2xl:right-[20px] after:top-1/2 after:-translate-y-1/2 after:content-['+'] after:text-[18px] after:font-bold after:text-base2 dark:after:text-white data-[state=open]:after:!content-['-'] data-[panel-open]:after:!content-['-'] aria-expanded:after:!content-['-'] [&>svg]:!hidden"
                                    >
                                        <div className="w-full">
                                            <div className="cmn_Txt text-[#212121] dark:text-white font-semibold">
                                                {item.question}
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    {item?.answer?.length > 0 && (
                                        <AccordionContent className="p-0 pt-[10px] 2xl:pt-[12px] 3xl:pt-[15px] text-[12px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] [&_p]:text-[12px] [&_p]:xl:text-[12px] [&_p]:2xl:text-[16px] [&_p]:3xl:text-[20px] [&_p]:text-[#4A5565] [&_p]:leading-normal [&_p]:font-normal [&_p]:mb-[30px] [&_p]:last-of-type:mb-[10px] text-[#797979]">
                                            <div className="w-full">
                                                <BlocksRenderer content={item.answer} />
                                            </div>
                                        </AccordionContent>
                                    )}
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}