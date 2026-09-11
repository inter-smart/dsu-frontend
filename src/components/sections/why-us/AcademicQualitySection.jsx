"use client";

import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AcademicQualitySection({ data }) {
    const tabs = data?.tabs || [];
    const defaultTab = tabs.find((t) => t.active)?.value || tabs[0]?.value;

    return (
        <section className="relative py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[120px]">
            <div className="container">
                <Tabs defaultValue={defaultTab} className="w-full">
                    <TabsList variant="line" className="gap-[4px] sm:gap-[8px] bg-transparent p-0 mb-[25px] xl:mb-[40px] 2xl:mb-[50px] 3xl:mb-[60px] flex-wrap">
                        {tabs.map((tab) => (
                            <TabsTrigger
                                key={tab.id}
                                value={tab.value}
                                className="h-[35px] xl:h-[40px] 2xl:h-[48px] 3xl:h-[56px] px-[12px] sm:px-[18px] xl:px-[25px] 2xl:px-[30px] 3xl:px-[35px]
                                    min-w-fit rounded-none border-0 overflow-hidden !no-underline flex items-center justify-center 
                                    text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-medium text-[#4A5565]
                                    transition-all duration-200 ease-in-out
                                    data-active:text-[#212121] data-active:font-bold
                                    data-[state=active]:text-[#212121] data-[state=active]:font-bold"
                            >
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {tabs.map((tab) => {
                        const tabData = data?.tabContent?.[tab.value];
                        if (!tabData) return <TabsContent key={tab.id} value={tab.value}><p className="text_1 text-gray-400 py-[14px]">No content available.</p></TabsContent>;

                        const defaultAccordionItem = tabData?.bestPractices?.find((bp) => bp.expanded)?.value ||
                            (tabData?.bestPractices?.[1]?.value || tabData?.bestPractices?.[0]?.value);

                        return (
                            <TabsContent key={tab.id} value={tab.value} className="mt-[10px]">
                                {/* Section Heading */}
                                {tabData?.heading && (
                                    <h2 className="cmn_Title">{tabData.heading}</h2>
                                )}

                                {/* Description */}
                                {tabData?.description && (
                                    <p className="text_1 leading-[1.5] text-[#4A5565] mb-[20px] xl:mb-[30px] 2xl:mb-[35px] 3xl:mb-[45px]">
                                        {tabData.description}
                                    </p>
                                )}

                                {/* Quick Links */}
                                {tabData?.quickLinks && tabData.quickLinks.length > 0 && (
                                    <div className="mb-[25px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px]">
                                        {tabData.quickLinks.map((link, idx) => (
                                            <div key={idx} className="mb-[6px] xl:mb-[8px] 2xl:mb-[10px]">
                                                <Link
                                                    href={link.url || "#"}
                                                    className="text_1 text-[#212121] font-bold underline underline-offset-3 hover:text-[#F97316] transition-colors"
                                                >
                                                    {link.label}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Accordion - Best Practices */}
                                {tabData?.bestPractices && tabData.bestPractices.length > 0 && (
                                    <Accordion type="single" collapsible defaultValue={defaultAccordionItem} className="w-full flex flex-col gap-[10px] xl:gap-[15px] 2xl:gap-[20px]">
                                        {tabData.bestPractices.map((practice) => (
                                            <AccordionItem
                                                key={practice.id}
                                                value={practice.value}
                                                className="border border-[#FDE5DC] bg-[#FFF9F6] rounded-[8px] lg:rounded-[10px] xl:rounded-[12px] 2xl:rounded-[15px] 3xl:rounded-[19px] overflow-hidden"
                                            >
                                                <AccordionTrigger
                                                    className="relative p-[12px_15px] md:p-[14px_18px] xl:p-[18px_25px] 2xl:p-[20px_30px] 3xl:p-[24px_35px] font-semibold !text-[#212121] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] hover:no-underline pr-[35px] md:pr-[40px] xl:pr-[50px] 2xl:pr-[55px] 3xl:pr-[65px]
                                                        after:absolute after:right-[15px] after:md:right-[18px] after:xl:right-[25px] after:2xl:right-[30px] after:3xl:right-[35px] after:top-1/2 after:-translate-y-1/2 after:content-['+'] after:text-[18px] after:xl:text-[22px] after:2xl:text-[24px] after:font-bold after:text-[#212121] 
                                                        data-[state=open]:after:!content-['-'] data-[panel-open]:after:!content-['-'] aria-expanded:after:!content-['-'] data-open:after:!content-['-'] [&>svg]:!hidden"
                                                >
                                                    {practice.title}
                                                </AccordionTrigger>

                                                <AccordionContent className="px-[15px] md:px-[18px] xl:px-[25px] 2xl:px-[30px] 3xl:px-[35px] pb-[15px] xl:pb-[20px] 2xl:pb-[25px] 3xl:pb-[30px] pt-0">
                                                    {/* Description */}
                                                    {practice.description && (
                                                        <p className="text_1 leading-[1.5] text-[#4A5565] mb-[15px] xl:mb-[20px] 2xl:mb-[25px]">
                                                            {practice.description}
                                                        </p>
                                                    )}

                                                    {/* Key Highlights */}
                                                    {practice.highlights && practice.highlights.length > 0 && (
                                                        <div className="mb-[15px] xl:mb-[20px] 2xl:mb-[25px]">
                                                            <h4 className="text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[18px] font-bold text-[#212121] mb-[10px] xl:mb-[12px]">
                                                                Key Highlights
                                                            </h4>
                                                            <ul className="flex flex-col gap-[4px] xl:gap-[6px] 2xl:gap-[8px]">
                                                                {practice.highlights.map((item, idx) => (
                                                                    <li
                                                                        key={idx}
                                                                        className="text_1 leading-[1.5] text-[#4A5565] pl-[14px] relative before:content-['•'] before:absolute before:left-0 before:top-0 before:text-[#4A5565]"
                                                                    >
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {/* Documents */}
                                                    {practice.documents && practice.documents.length > 0 && (
                                                        <div>
                                                            <h4 className="text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[18px] font-bold text-[#212121] mb-[10px] xl:mb-[12px]">
                                                                Documents
                                                            </h4>
                                                            <div className="flex flex-wrap gap-[10px] xl:gap-[15px] 2xl:gap-[20px]">
                                                                {practice.documents.map((doc) => (
                                                                    <Link
                                                                        key={doc.id}
                                                                        href={doc.url || "#"}
                                                                        className="flex items-center gap-[8px] xl:gap-[10px] 2xl:gap-[12px] py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] px-[12px] xl:px-[15px] 2xl:px-[18px] 3xl:px-[20px] border border-black/10 rounded-[6px] xl:rounded-[8px] hover:border-[#F97316]/50 transition-colors group/doc min-w-[200px] xl:min-w-[240px] 2xl:min-w-[280px] 3xl:min-w-[320px] !no-underline"
                                                                    >
                                                                        <div className="w-[16px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px] h-[20px] xl:h-[22px] 2xl:h-[26px] 3xl:h-[30px] flex items-center justify-center shrink-0">
                                                                            <svg className="w-full h-full object-contain" viewBox="0 0 24 33" fill="none">
                                                                                <path d="M18.5366 33H4.8742C3.58148 33 2.34171 32.4209 1.42762 31.3901C0.51353 30.3593 0 28.9612 0 27.5034V5.49656C0 4.03878 0.51353 2.64071 1.42762 1.60991C2.34171 0.5791 3.58148 0 4.8742 0L12.3181 0C13.4018 0.00423079 14.4536 0.41411 15.3085 1.16531L21.527 6.61031C22.1151 7.12266 22.5909 7.78068 22.9176 8.5335C23.2442 9.28632 23.413 10.1138 23.4108 10.9519V27.4519C23.4168 28.178 23.2952 28.8983 23.053 29.5712C22.8107 30.244 22.4527 30.856 21.9994 31.3719C21.5462 31.8878 21.0069 32.2973 20.4125 32.5767C19.8181 32.8562 19.1805 33 18.5366 33ZM4.8742 2.19656C4.09808 2.19656 3.35376 2.54424 2.80496 3.16311C2.25616 3.78198 1.94785 4.62135 1.94785 5.49656V27.5034C1.94785 28.3787 2.25616 29.218 2.80496 29.8369C3.35376 30.4558 4.09808 30.8034 4.8742 30.8034H18.5366C19.3127 30.8034 20.057 30.4558 20.6058 29.8369C21.1546 29.218 21.4629 28.3787 21.4629 27.5034V11.0034C21.4644 10.4995 21.3628 10.002 21.1662 9.54955C20.9695 9.09707 20.683 8.70179 20.329 8.39438L14.1105 2.93906C13.5884 2.47931 12.9439 2.23217 12.2815 2.23781L4.8742 2.19656Z" fill="#4A5565" />
                                                                                <path d="M16.5792 12.0962H6.83079C6.69497 12.1111 6.55788 12.0938 6.42835 12.0453C6.29882 11.9969 6.17971 11.9184 6.07866 11.815C5.97761 11.7116 5.89687 11.5855 5.84161 11.4448C5.78636 11.304 5.75781 11.1519 5.75781 10.998C5.75781 10.8441 5.78636 10.6919 5.84161 10.5512C5.89687 10.4105 5.97761 10.2843 6.07866 10.1809C6.17971 10.0775 6.29882 9.99904 6.42835 9.9506C6.55788 9.90217 6.69497 9.88483 6.83079 9.89969H16.5792C16.715 9.88483 16.8521 9.90217 16.9816 9.9506C17.1112 9.99904 17.2303 10.0775 17.3313 10.1809C17.4324 10.2843 17.5131 10.4105 17.5684 10.5512C17.6236 10.6919 17.6522 10.8441 17.6522 10.998C17.6522 11.1519 17.6236 11.304 17.5684 11.4448C17.5131 11.5855 17.4324 11.7116 17.3313 11.815C17.2303 11.9184 17.1112 11.9969 16.9816 12.0453C16.8521 12.0938 16.715 12.1111 16.5792 12.0962Z" fill="#4A5565" />
                                                                                <path d="M16.5797 17.6028H6.83128C6.58926 17.5763 6.36465 17.4492 6.20123 17.2462C6.0378 17.0431 5.94727 16.7787 5.94727 16.5045C5.94727 16.2303 6.0378 15.9659 6.20123 15.7629C6.36465 15.5599 6.58926 15.4327 6.83128 15.4062H16.5797C16.8217 15.4327 17.0463 15.5599 17.2097 15.7629C17.3732 15.9659 17.4637 16.2303 17.4637 16.5045C17.4637 16.7787 17.3732 17.0431 17.2097 17.2462C17.0463 17.4492 16.8217 17.5763 16.5797 17.6028Z" fill="#4A5565" />
                                                                                <path d="M14.6316 27.5023H8.77889C8.00277 27.5023 7.25844 27.1547 6.70965 26.5358C6.16085 25.9169 5.85254 25.0776 5.85254 24.2023C5.85254 23.3271 6.16085 22.4878 6.70965 21.8689C7.25844 21.25 8.00277 20.9023 8.77889 20.9023H14.6316C15.4077 20.9023 16.152 21.25 16.7008 21.8689C17.2496 22.4878 17.5579 23.3271 17.5579 24.2023C17.5579 25.0776 17.2496 25.9169 16.7008 26.5358C16.152 27.1547 15.4077 27.5023 14.6316 27.5023ZM8.77889 23.0989C8.53687 23.1254 8.31226 23.2525 8.14883 23.4556C7.98541 23.6586 7.89487 23.923 7.89487 24.1972C7.89487 24.4714 7.98541 24.7358 8.14883 24.9388C8.31226 25.1418 8.53687 25.269 8.77889 25.2955H14.6316C14.8736 25.269 15.0982 25.1418 15.2616 24.9388C15.4251 24.7358 15.5156 24.4714 15.5156 24.1972C15.5156 23.923 15.4251 23.6586 15.2616 23.4556C15.0982 23.2525 14.8736 23.1254 14.6316 23.0989H8.77889Z" fill="#4A5565" />
                                                                            </svg>
                                                                        </div>
                                                                        <span className="text_1 text-[#212121] !no-underline flex-1">{doc.label}</span>
                                                                        <div className="w-[10px] 2xl:w-[14px] 3xl:w-[16px] h-[10px] 2xl:h-[12px] 3xl:h-[14px] flex shrink-0 group-hover/doc:translate-x-[3px] transition-transform">
                                                                            <svg className="w-full h-full object-contain" viewBox="0 0 20 18" fill="none">
                                                                                <path d="M19.1973 7.80308L12.1519 0.330392C11.9508 0.117084 11.6827 0 11.3969 0C11.1108 0 10.8429 0.117252 10.6418 0.330392L10.0021 1.00901C9.80113 1.22198 9.69042 1.50645 9.69042 1.80976C9.69042 2.1129 9.80113 2.40695 10.0021 2.61993L14.1123 6.98888H1.05396C0.465202 6.98888 0 7.47774 0 8.10236V9.06174C0 9.68635 0.465202 10.2245 1.05396 10.2245H14.1589L10.0022 14.6179C9.80128 14.8312 9.69057 15.1079 9.69057 15.4112C9.69057 15.7142 9.80128 15.9949 10.0022 16.2081L10.6419 16.8845C10.843 17.0978 11.1109 17.2141 11.3971 17.2141C11.6829 17.2141 11.9509 17.0963 12.152 16.883L19.1975 9.41047C19.3991 9.19649 19.5099 8.91084 19.5091 8.6072C19.5098 8.30254 19.3991 8.01673 19.1973 7.80308Z" fill="#212121" />
                                                                            </svg>
                                                                        </div>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                )}
                            </TabsContent>
                        );
                    })}
                </Tabs>
            </div>
        </section>
    );
}
