import { Plus, Minus } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// Courses Offered of /international only. `catalog.schools` comes from Strapi already ordered, numbered
// and without empty schools or program groups: [{ id, number, title, courseCount, programs: [{ id, title,
// shortLabel, courses: [{ id, title }] }] }]
export default function IntlCourses({ data, catalog }) {
    const schools = catalog?.schools ?? [];

    if (!schools.length) return null;

    return (
        <section id="courses" className="w-full bg-white py-10 lg:py-14 2xl:py-[80px] scroll-mt-24">
            <div className="container">
                {/* Heading */}
                <div className="text-center">
                    {data.title && (
                        <h2 className="text-[28px] font-bold leading-tight text-[#1a1a1a] lg:text-[40px] 2xl:text-[56px]">
                            {data.title}
                        </h2>
                    )}
                    {data.subtitle && (
                        <p className="mt-2 text-[14px] text-[#555] lg:text-[15px] 2xl:mt-[12px] 2xl:text-[18px]">
                            {data.subtitle}
                        </p>
                    )}
                </div>

                {/* One school open at a time, first one open by default */}
                <Accordion
                    type="single"
                    collapsible
                    defaultValue={`school-${schools[0].id}`}
                    className="mt-8 rounded-[10px] border border-black/10 bg-[#FDFCFA] px-3 lg:mt-10 lg:px-4 2xl:mt-[55px] 2xl:px-[16px]"
                >
                    {schools.map((school) => (
                        <AccordionItem
                            key={school.id}
                            value={`school-${school.id}`}
                            className="border-b border-black/10 last:border-b-0"
                        >
                            <AccordionTrigger className="group items-center gap-4 py-3 no-underline! hover:no-underline! 2xl:py-[18px] [&>svg]:hidden!">
                                {/* span, not div: a button may only contain inline content */}
                                <span className="flex min-w-0 flex-1 items-center gap-3 lg:gap-5">
                                    {/* Number box */}
                                    <span className="flex size-11 shrink-0 items-center justify-center rounded-[6px] border border-black/10 bg-white text-[16px] font-medium text-[#222] lg:size-[60px] lg:text-[22px] 2xl:size-[72px] 2xl:text-[22px]">
                                        {school.number}
                                    </span>
                                    <span className="min-w-0 text-left">
                                        <span className="block text-[14px] font-medium leading-tight text-[#111] lg:text-[20px] 2xl:text-[22px]">
                                            {school.title}
                                        </span>
                                        <span className="mt-1 block text-[10px] font-normal text-[#666] lg:text-[15px] 2xl:text-[16px]">
                                            {school.courseCount} {school.courseCount === 1 ? "Program" : "Programs"}
                                        </span>
                                    </span>
                                </span>

                                {/* Plus when closed, minus when open. Same size and stroke so nothing jumps */}
                                <span className="mr-2 flex size-6 shrink-0 items-center justify-center text-[#333] lg:mr-2">
                                    <Plus className="block size-3 group-aria-expanded:hidden" strokeWidth={5} />
                                    <Minus className="hidden size-3 group-aria-expanded:block" strokeWidth={5} />
                                </span>
                            </AccordionTrigger>

                            <AccordionContent className="pb-5">
                                <div className="space-y-6 2xl:space-y-[32px]">
                                    {school.programs.map((program) => (
                                        <div key={program.id}>
                                            {/* Program heading with hairline */}
                                            <div className="flex items-center gap-4">
                                                <h3 className="text-[17px] font-medium text-[#4A5565] lg:text-[20px] 2xl:text-[24px]">
                                                    {program.title}
                                                </h3>
                                                <span className="h-px flex-1 bg-black/10" />
                                            </div>

                                            {/* Course rows */}
                                            <ul className="mt-4 space-y-2 lg:pl-2 2xl:mt-[28px] 2xl:space-y-[6px]">
                                                {program.courses.map((course) => (
                                                    <li
                                                        key={course.id}
                                                        className="flex items-center justify-between gap-4 rounded-[10px] border border-black/10 bg-white px-4 py-3 text-[14px] font-medium text-[#111] lg:px-7 lg:py-4 lg:text-[16px] 2xl:text-[18px] 3xl:text-[20px]"
                                                    >
                                                        <span>{course.title}</span>
                                                        {program.shortLabel && (
                                                            <span className="shrink-0 text-[12px] font-normal text-[#6B7280] lg:text-[14px] 2xl:text-[16px]">
                                                                {program.shortLabel}
                                                            </span>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
