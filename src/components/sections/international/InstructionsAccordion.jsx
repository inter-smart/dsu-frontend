"use client";

import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function InstructionsAccordion({ data }) {
    const { title, items = [], defaultOpen } = data;

    return (
        <section id="instructions" className="relative w-full overflow-hidden bg-[#F3F5F8] py-8 lg:py-12 2xl:py-[60px]">
            {/* Background image */}
            <Image
                src="/images/course-bg-1.png"
                alt=""
                fill
                sizes="100vw"
                className="pointer-events-none -z-0 select-none object-cover object-center"
                aria-hidden="true"
            />

            <div className="container relative z-10">
                <h2 className="text-[28px] font-bold leading-tight text-[#1a1a1a] md:text-[30px] lg:text-[35px] 2xl:text-[42px] 3xl:text-[52px]">
                    {title}
                </h2>

                <Accordion
                    type="single"
                    collapsible
                    defaultValue={defaultOpen}
                    className="mt-6 overflow-hidden rounded-[14px] border border-[#E6E8EC] bg-white lg:mt-8 2xl:mt-[50px]"
                >
                    {items.map((item) => (
                        <AccordionItem
                            key={item.id}
                            value={item.id}
                            className="border-b border-[#EBEBEB] last:border-b-0"
                        >
                            <AccordionTrigger
                                className="group min-h-[64px] items-center gap-4 rounded-none px-4 py-3 text-[16px] font-semibold leading-snug text-[#111] hover:no-underline focus-visible:ring-inset data-[state=open]:min-h-[62px] data-[state=open]:py-0 lg:px-5 2xl:min-h-[82px] 2xl:px-6 2xl:text-[20px] 2xl:data-[state=open]:min-h-[62px] [&>svg]:!hidden"
                            >
                                {item.title}
                                <span className="mr-1 shrink-0 text-[#333] 2xl:mr-[28px]" aria-hidden="true">
                                    <Plus className="size-4 group-data-[state=open]:hidden" strokeWidth={4} />
                                    <Minus className="hidden size-3.5 group-data-[state=open]:block" strokeWidth={4} />
                                </span>
                            </AccordionTrigger>

                            <AccordionContent className="px-4 pb-6 pt-1 text-[14px] leading-[1.7] text-[#4B5563] lg:px-5 2xl:px-6 2xl:pb-[49px] 2xl:pt-[11px] 2xl:text-[18px] 2xl:leading-[29px]">
                                {item.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}