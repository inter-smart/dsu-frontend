import { BlocksRenderer } from "@strapi/blocks-react-renderer";

// International flexible section: a title with a description below it.
export default function IntlTextSection({ data }) {
    return (
        <section className="py-[15px] xl:py-[22px] 2xl:py-[28px] 3xl:py-[40px]">
            <div className={`container ${data.alignment === "center" ? "text-center" : ""}`}>
                {data.title && <h2 className="text-[22px] font-bold leading-[1.25] text-black dark:text-white xl:text-[28px] 2xl:text-[32px] 3xl:text-[40px] mb-[8px] xl:mb-[10px]">{data.title}</h2>}
                {data.description?.length > 0 && (
                    <div className="text_1 typography lg:text-[14px] 2xl:text-[14.4px] [&_p:empty]:hidden [&_p]:mb-[8px] [&_p:last-child]:mb-0">
                        <BlocksRenderer content={data.description} />
                    </div>
                )}
            </div>
        </section>
    );
}
