import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { IntlButton } from "./intl-button-section";

// International flexible section: a title with one button at the far right of it, and a description below.
export default function IntlTextButtonSection({ data }) {
    const hasDescription = data.description?.length > 0;

    return (
        <section className="pt-[15px] pb-[8px] xl:pt-[20px] xl:pb-[10px] 3xl:pt-[30px] 3xl:pb-[14px]">
            <div className="container">
                {(data.title || data.button) && (
                    <div className={`flex flex-wrap items-center justify-between gap-x-[20px] gap-y-[10px] ${hasDescription ? "mb-[10px]" : ""}`}>
                        {data.title && <h2 className="cmn_Title !mb-0">{data.title}</h2>}
                        {data.button && <div className="ml-auto shrink-0"><IntlButton button={data.button} /></div>}
                    </div>
                )}
                {hasDescription && (
                    <div className="text_1 typography lg:text-[14px] 2xl:text-[14.4px] [&_p:empty]:hidden [&_p]:mb-[8px] [&_p:last-child]:mb-0">
                        <BlocksRenderer content={data.description} />
                    </div>
                )}
            </div>
        </section>
    );
}
