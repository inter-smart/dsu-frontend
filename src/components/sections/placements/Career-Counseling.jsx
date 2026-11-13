"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

 
const blockStyles = {
    paragraph: ({ children }) => (
        <p className="text_1   dark:text-[#9CA3AF] ">
            {children}
        </p>
    ),
     
    list: ({ children, format }) =>
        format === "ordered" ? (
            <ol className="list-decimal space-y-[10px] text_1 dark:text-[#9CA3AF]">
                {children}
            </ol>
        ) : (
            <ul className="flex flex-col gap-[10px] xl:gap-[12px] my-[3px] !ml-0 !pl-0">
                {children}
            </ul>
        ),
    "list-item": ({ children }) => (
        <li className="text_1 flex items-start gap-[12px] mb-0 ">
            <span
                aria-hidden="true"
                className="mt-[9px] lg:mt-[11px] w-[7px] h-[7px] shrink-0 rounded-full bg-gradient-to-r from-[#DC2626] to-[#F97316]"
            />
            <span className="min-w-0">{children}</span>
        </li>
    ),
};

export default function CareerCounselling({ data }) {
    if (!data) return null;

    const hasContent = Array.isArray(data?.content) && data.content.length > 0;

    return (
        <section
            id={data?.id || "career-counselling"}
            className="relative py-[30px] sm:py-[40px] xl:py-[55px] 2xl:py-[70px] bg-white dark:bg-[#0f1011] transition-colors duration-300"
        >
            <div className="container">
                <div className="relative overflow-hidden rounded-[12px] xl:rounded-[16px] border border-black/10 dark:border-white/10 bg-[#FFF8EE] dark:bg-white/[0.04] shadow-sm">
                    {/* brand accent bar on the left */}
                    <span
                        aria-hidden="true"
                        className="absolute inset-[0_auto_0_0] w-[4px] xl:w-[5px] bg-gradient-to-b from-[#DC2626] to-[#F97316]"
                    />
                    {/* soft glow in the corner */}
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-[90px] -right-[60px] w-[280px] h-[200px] rounded-full bg-[#F97316]/10 blur-3xl"
                    />

                    <div className="relative px-[20px] sm:px-[30px] xl:px-[45px] 2xl:px-[50px] py-[25px] sm:py-[35px] xl:py-[40px]">
                        {/* Heading block */}
                        <div className="mb-[20px] xl:mb-[28px]">
                            <div className="flex items-center gap-[12px] xl:gap-[16px]">
                               
                                {data?.heading && (
                                    <h2 className="cmn_Title text-black dark:text-white">
                                        {data.heading}
                                    </h2>
                                )}
                            </div>

                            {data?.subheading && (
                                <div className="mt-[10px] xl:mt-[14px] flex items-center gap-[8px]">
                                    <span className="w-[18px] xl:w-[24px] h-[2px] bg-[#DC2626] shrink-0" />
                                    <p className="italic text-[14px] xl:text-[17px] 2xl:text-[19px] font-medium bg-gradient-to-r from-[#DC2626] from-[70%] to-[#F97316] bg-clip-text text-transparent">
                                        {data.subheading}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Text editor content. A paragraph that follows the list is shown as a closing callout. */}
                        {hasContent && (
                            <div
                                className="space-y-[14px] xl:space-y-[18px] typography
                                [&>ul+p]:mt-[22px] xl:[&>ul+p]:mt-[28px]  "
                            >
                                <BlocksRenderer content={data.content} blocks={blockStyles} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}