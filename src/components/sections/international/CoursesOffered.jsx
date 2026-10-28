import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function CoursesOffered({ data }) {
    const { title, subtitle, sections = [] } = data;

    if (!sections.length) return null;

    return (
        <section id="courses" className="w-full bg-white py-10 lg:py-14 2xl:py-[80px] scroll-mt-24">
            <div className="container">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-[28px] font-bold leading-tight text-[#1a1a1a] lg:text-[40px] 2xl:text-[56px]">
                        {title}
                    </h2>
                    <p className="mt-2 text-[14px] text-[#555] lg:text-[15px] 2xl:mt-[12px] 2xl:text-[18px]">
                        {subtitle}
                    </p>
                </div>

                {/* One school open at a time, first one open by default */}
                <Accordion
                    type="single"
                    collapsible
                    defaultValue={`section-${sections[0].id}`}
                    className="mt-8 rounded-[10px] border border-black/10 bg-[#FDFCFA] px-3 lg:mt-10 lg:px-4 2xl:mt-[55px] 2xl:px-[16px]"
                >
                    {sections.map((section, index) => {
                        const groups = section.groups ?? [];
                        const count = groups.reduce((n, g) => n + (g.courses?.length ?? 0), 0);

                        return (
                            <AccordionItem
                                key={section.id}
                                value={`section-${section.id}`}
                                className="border-b border-black/10 last:border-b-0"
                            >
                                <AccordionTrigger className="group items-center gap-4 py-3 no-underline! hover:no-underline! 2xl:py-[18px] [&>svg]:hidden!">
                                    {/* span, not div: a button may only contain inline content */}
                                    <span className="flex min-w-0 flex-1 items-center gap-3 lg:gap-5">
                                        {/* Number box */}
                                        <span className="flex size-11 shrink-0 items-center justify-center rounded-[6px] border border-black/10 bg-white text-[18px] font-medium text-[#222] lg:size-[60px] lg:text-[22px] 2xl:size-[72px] 2xl:text-[22px]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span className="min-w-0 text-left">
                                            <span className="block text-[16px] font-medium leading-tight text-[#111] lg:text-[20px] 2xl:text-[22px]">
                                                {section.title}
                                            </span>
                                            <span className="mt-1 block text-[13px] font-normal text-[#666] lg:text-[15px] 2xl:text-[16px]">
                                                {count} {count === 1 ? "Program" : "Programs"}
                                            </span>
                                        </span>
                                    </span>

                                    {/* Plus when closed, minus when open. Same size and stroke so nothing jumps */}
                                    <span className="mr-2 flex size-6 shrink-0 items-center justify-center text-[#333] lg:mr-4">
                                        <Plus className="block size-4 group-aria-expanded:hidden" strokeWidth={4} />
                                        <Minus className="hidden size-4 group-aria-expanded:block" strokeWidth={4} />
                                    </span>
                                </AccordionTrigger>

                                <AccordionContent className="pb-5">
                                    <div className="space-y-6 2xl:space-y-[32px]">
                                        {groups.map((group) => (
                                            <div key={group.id}>
                                                {/* Group heading with hairline */}
                                                <div className="flex items-center gap-4">
                                                    <h4 className="text-[17px] font-medium text-[#4A5565] lg:text-[20px] 2xl:text-[24px]">
                                                        {group.title}
                                                    </h4>
                                                    <span className="h-px flex-1 bg-black/10" />
                                                </div>

                                                {/* Course rows */}
                                                <ul className="mt-4 space-y-2 lg:pl-2 2xl:mt-[28px] 2xl:space-y-[6px]">
                                                    {(group.courses ?? []).map((course) => (
                                                        <li key={course.id}>
                                                            <Link
                                                                href={course.href || "#"}
                                                                className="flex items-center justify-between gap-4 rounded-[10px] border border-black/10 bg-white px-4 py-3 text-[14px] font-medium text-[#111] no-underline! transition-colors duration-300 hover:border-(--basecolor) lg:px-7 lg:py-4 lg:text-[16px] 2xl:text-[18px] 3xl:text-[20px]"
                                                            >
                                                                <span>{course.title}</span>
                                                                <span className="shrink-0 text-[12px] font-normal text-[#6B7280] lg:text-[14px] 2xl:text-[16px]">
                                                                    {group.tag}
                                                                </span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        </section>
    );
}