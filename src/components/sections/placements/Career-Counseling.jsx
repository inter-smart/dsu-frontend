"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const getText = (block) => (block?.children || []).map((c) => c.text).join("");

// Builds cards from any of these shapes:
// 1. `cards` from Strapi                             -> one card per item
// 2. Top-level heading/subheading + content blocks   -> one card
// 3. Flat blocks containing H2 headings              -> one card per H2
// Both shapes can be mixed: blocks before the first H2 stay in the first card.
function buildSections(data) {
    // Strapi shape: repeatable cards, each with its own heading, subheading and content
    if (Array.isArray(data?.cards)) {
        return data.cards
            .filter((card) => card?.heading || card?.content?.length)
            .map((card) => ({
                heading: card.heading,
                subheading: card.subheading,
                blocks: Array.isArray(card.content) ? card.content : [],
            }));
    }

    const sections = [];
    let current = null;

    if (data?.heading || data?.subheading) {
        current = {
            heading: data.heading,
            subheading: data.subheading,
            blocks: [],
        };
        sections.push(current);
    }

    (data?.content || []).forEach((block) => {
        if (block?.type === "heading" && block?.level === 2) {
            current = { heading: getText(block), subheading: null, blocks: [] };
            sections.push(current);
            return;
        }

        if (!current) {
            current = { heading: null, subheading: null, blocks: [] };
            sections.push(current);
        }
        current.blocks.push(block);
    });

    return sections;
}

export default function CareerCounselling({ data }) {
    if (!data) return null;

    const sections = buildSections(data);
    if (sections.length === 0) return null;

    // A single card looks better full width; multiple cards sit side by side.
    const colClass =
        sections.length === 1 ? "w-full" : "w-full lg:w-1/2";

    return (
        <section
            id={data?.id}
            className="relative py-[30px] sm:py-[40px] xl:py-[55px] 2xl:py-[70px] bg-white dark:bg-[#0f1011] transition-colors duration-300"
        >
            <div className="container">
                <div className="flex flex-wrap -mx-[15px]">
                    {sections.map((section, index) => (
                        <div
                            key={`${section.heading || "section"}-${index}`}
                            className={`${colClass} px-[15px] mb-[30px]`}
                        >
                            <div className="rich-card h-full">
                                {section.heading && (
                                    <h2 className="cmn_Title text-black dark:text-white">
                                        {section.heading}
                                    </h2>
                                )}
                                {section.subheading && (
                                    <p className="rich-subtitle">{section.subheading}</p>
                                )}
                                {section.blocks.length > 0 && (
                                    <div className="text_1 rich-text mt-[20px] xl:mt-[28px]">
                                        <BlocksRenderer content={section.blocks} />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}