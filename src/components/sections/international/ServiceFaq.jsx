import { Plus, Minus } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeader, { toneClass } from "./ServiceShared";

export default function ServiceFaq({ data }) {
    const { number, tone = "blue", eyebrow, title, description, items = [], defaultOpenId } = data;

    if (!items.length) return null;

    return (
        <section id="faq" className={`w-full py-10 lg:py-12 2xl:py-[64px] ${toneClass[tone]}`}>
            <div className="container">
                <SectionHeader number={number} eyebrow={eyebrow} title={title} description={description} />

                <Accordion
                    type="single"
                    collapsible
                    defaultValue={defaultOpenId ? `faq-${defaultOpenId}` : undefined}
                    className="mt-6 rounded-[10px] border border-black/10 bg-white 2xl:mt-[48px]"
                >
                    {items.map((item) => (
                        <AccordionItem
                            key={item.id}
                            value={`faq-${item.id}`}
                            className="border-b border-black/[0.07] px-5 last:border-b-0 2xl:px-[24px]"
                        >
                            <AccordionTrigger className="group items-center gap-4 py-5 text-left text-[16px] font-medium text-[#111] no-underline! hover:no-underline! lg:text-[18px] 2xl:py-[28px] 2xl:text-[20px] [&>svg]:hidden!">
                                <span>{item.question}</span>
                                <span className="flex size-6 shrink-0 items-center justify-center text-[#333]">
                                    <Plus className="block size-4 group-aria-expanded:hidden" strokeWidth={2} />
                                    <Minus className="hidden size-4 group-aria-expanded:block" strokeWidth={2} />
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="max-w-[1200px] pb-6 text-[14px] leading-[1.7] text-[#444] lg:text-[16px] 2xl:pb-[30px] 2xl:text-[18px] 2xl:leading-[29px]">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}