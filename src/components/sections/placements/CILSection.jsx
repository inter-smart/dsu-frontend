"use client";

import "swiper/css";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function CILsection({ data }) {
    return (
        <section className='relative py-[40px] xl:py-[50px] 2xl:py-[60px] 3xl:py-[80px] bg-[linear-gradient(135deg,#EFF6FF_0%,#F9FAFB_100%)] dark:bg-[linear-gradient(135deg,#212121_0%,#212121_100%)] '>
            <div className="container">
                <div className="cmn_Title dark:text-white">
                    {data.heading}
                </div>
                <div className="text_1 dark:text-[#9CA3AF] mb-[25px]">{data.subheading}</div>
                <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px]">
                    <BlocksRenderer content={data.description} />
                </div>
                {data.programSection && (
                    <div className="w-full">
                        <div className="text-[16px] xl:text-[20px] 2xl:text-[25px] 3xl:text-[30px] text-black dark:text-white font-semibold my-[25px]">{data?.programSection.heading}</div>
                        <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px]">
                            <BlocksRenderer content={data?.programSection.description} />
                        </div>
                        <Accordion type="single" collapsible defaultValue="item-2" className="mt-[30px] w-full xl:mt-[40px]">
                            {data?.accordion?.map((item) => (
                                <AccordionItem key={item.id} value={`item-${item.id}`} className="p-[8px_10px] md:p-[10px_15px] xl:p-[15px] 3xl:p-[20px] border border-[#E5E9EE] dark:border-white/10 dark:bg-[#18191B] rounded-[6px] mb-[10px] xl:mb-[20px]">
                                    <AccordionTrigger
                                        className="relative p-0 font-medium !text-black dark:!text-white text-[11px] hover:no-underline md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[20px] pr-[10px] md:pr-[15px] 2xl:pr-[25px] after:absolute after:right-[5px] after:md:right-[10px] after:2xl:right-[20px] after:top-1/2 after:-translate-y-1/2 after:content-['+'] after:text-[18px] after:font-bold after:text-base2 dark:after:text-white data-[state=open]:after:!content-['-'] data-[panel-open]:after:!content-['-'] aria-expanded:after:!content-['-'] [&>svg]:!hidden"
                                    >
                                        <div className="w-full">
                                            <div className="cmn_Txt text-[#212121] dark:text-white font-semibold mb-[4px]">
                                                {item.question}
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    {item?.answer?.length > 0 && (
                                        <AccordionContent className="p-0 pt-[10px] 2xl:pt-[12px] 3xl:pt-[15px] text-[12px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] [&_p]:text-[12px] [&_p]:xl:text-[12px] [&_p]:2xl:text-[16px] [&_p]:3xl:text-[20px] [&_p]:text-[#4A5565] dark:[&_p]:text-[#9CA3AF] [&_p]:leading-normal [&_p]:font-normal [&_p]:mb-[30px] [&_p]:last-of-type:mb-[10px] text-[#797979] dark:text-[#9CA3AF]">
                                            <div className="w-full">
                                                {item.answer.map((ans, index) => (
                                                    <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px]">
                                                        <BlocksRenderer content={[ans]} />
                                                    </div>
                                                ))}
                                            </div>
                                        </AccordionContent>
                                    )}
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                )}

            </div>
        </section>
    )
}