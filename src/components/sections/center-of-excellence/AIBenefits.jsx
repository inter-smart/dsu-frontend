import { withLineBreaks, plainTitle } from "@/lib/line-breaks";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function AIBenefits({ data }) {
    if (!data) return null;

    const items = Array.isArray(data?.items) ? data.items : [];
 
    const defaultOpen = items
        .map((item, index) => ({ value: String(item?.id ?? index), open: item?.open !== false }))
        .filter((entry) => entry.open)
        .map((entry) => entry.value);

    return (
        <section className="relative py-[40px] xl:py-[50px] 2xl:py-[60px] 3xl:py-[70px] bg-linear-to-b from-[#F0F5FF] to-[#F6F9FC] dark:from-[#0f1011] dark:to-[#0f1011] transition-colors duration-300">
            <div className="container">

                {/* Heading (left) + paragraph (right) */}
                {(data?.heading || data?.description) && (
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[15px] lg:gap-[40px]">
                        {data?.heading && (
                            <h2 className="cmn_Title font-bold leading-[1.1] text-[#212121] dark:text-white whitespace-pre-line">
                                {withLineBreaks(data.heading)}
                            </h2>
                        )}
                        {data?.description && (
                            <p className="text_1 leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF] lg:w-[48%] xl:w-[40%] 2xl:w-[38%] shrink-0">
                                {data.description}
                            </p>
                        )}
                    </div>
                )}

                {items.length > 0 && (
                    // shadcn Accordion, several items can be open at once
                    <Accordion
                        multiple
                        defaultValue={defaultOpen}
                        className="mt-[25px] xl:mt-[45px] gap-[14px] xl:gap-[20px]"
                    >
                        {items.map((item, index) => {
                            const value = String(item?.id ?? index);

                            return (
                                <AccordionItem
                                    key={value}
                                    value={value} 
                                    className="rounded-[10px] border last:border-b border-black/[0.06] dark:border-white/10 bg-white dark:bg-[#18191B] shadow-[0_1px_3px_rgba(0,0,0,0.04)] has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#F97316]/40"
                                >
                                    <AccordionTrigger 
                                        className="items-center rounded-[10px] border-transparent px-[18px] py-[18px] xl:px-[24px] xl:py-[22px] aria-expanded:pb-[8px] xl:aria-expanded:pb-[10px] text-left hover:no-underline focus-visible:ring-0 focus-visible:border-transparent [&_svg]:hidden! after:content-['+'] aria-expanded:after:content-['−'] after:text-[26px] after:leading-none after:font-normal after:text-[#212121] dark:after:text-white after:shrink-0 after:ml-[16px]"
                                    >
                                        <span className="text-[18px] xl:text-[22px] 2xl:text-[24px] font-medium leading-[1.3] text-[#212121] dark:text-white">
                                            {withLineBreaks(item?.title)}
                                        </span>
                                    </AccordionTrigger>

                                    {item?.description && (
                                        <AccordionContent className="px-[18px] pt-0 pb-[18px] xl:px-[24px] xl:pb-[24px]">
                                            <p className="text_1 leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF]">
                                                {item.description}
                                            </p>
                                        </AccordionContent>
                                    )}
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                )}
            </div>
        </section>
    );
}