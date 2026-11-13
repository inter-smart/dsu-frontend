"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function CareerCounselling({ data }) {
    if (!data) return null;

    const hasBlocks = Array.isArray(data?.content) && data.content.length > 0;

    return (
        <section
            id={data?.id}
            className="relative py-[30px] sm:py-[40px] xl:py-[55px] 2xl:py-[70px] bg-white dark:bg-[#0f1011] transition-colors duration-300"
        >
            <div className="container">
                <div className="rich-card">
                    {data?.heading && (
                        <h2 className="cmn_Title text-black dark:text-white">{data.heading}</h2>
                    )}
                    {data?.subheading && <p className="rich-subtitle">{data.subheading}</p>}
                    {hasBlocks && (
                        <div className="text_1 rich-text mt-[20px] xl:mt-[28px]">
                            <BlocksRenderer content={data.content} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}