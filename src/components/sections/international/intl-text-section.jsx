import { BlocksRenderer } from "@/components/ui/blocks-renderer";

// International flexible section: a title with a description below it.
export default function IntlTextSection({ data }) {
    return (
        // A text block without a title continues the block above it, so it has no top padding
        <section className={`pb-[15px] xl:pb-[22px] 2xl:pb-[28px] 3xl:pb-[40px] ${data.title ? "pt-[15px] xl:pt-[22px] 2xl:pt-[28px] 3xl:pt-[40px]" : "pt-0"}`}>
            <div className="container">
                {data.title && <h2 className="cmn_Title">{data.title}</h2>}
                {data.description?.length > 0 && (
                    <div className="text_1 typography lg:text-[14px] 2xl:text-[14.4px] [&_p:empty]:hidden [&_p]:mb-[8px] [&_p:last-child]:mb-0">
                        <BlocksRenderer content={data.description} />
                    </div>
                )}
            </div>
        </section>
    );
} 
