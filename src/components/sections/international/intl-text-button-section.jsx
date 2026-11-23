import { BlocksRenderer } from "@/components/ui/blocks-renderer";
import { IntlButton } from "./intl-button-section";

// International flexible section: a themed intro panel with a title, a description and one button below them.
export default function IntlTextButtonSection({ data }) {
    const hasDescription = data.description?.length > 0;

    return (
        <section className="pt-[15px] pb-[8px] xl:pt-[22px] xl:pb-[12px] 3xl:pt-[40px] 3xl:pb-[20px]">
            <div className="container">
                <div className="relative overflow-hidden rounded-[12px] border border-[#F97316]/20 bg-gradient-to-br from-[#FFF8EE] to-[#FFF1E0] py-[20px] pl-[24px] pr-[20px] dark:border-white/10 dark:from-[#18191B] dark:to-[#18191B] xl:rounded-[16px] xl:py-[30px] xl:pl-[36px] xl:pr-[30px] 3xl:py-[44px] 3xl:pl-[50px]">
                    <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[6px] bg-gradient-to-b from-[#DC2626] to-[#F97316]" />
                    {data.title && <h2 className="cmn_Title">{data.title}</h2>}
                    {hasDescription && (
                        <div className="text_1 typography lg:text-[14px] 2xl:text-[14.4px] [&_p:empty]:hidden [&_p]:mb-[8px] [&_p:last-child]:mb-0 [&_a]:font-semibold [&_a]:text-(--basecolor) [&_a]:underline [&_a]:decoration-(--basecolor2)/50 [&_a]:decoration-2 [&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:text-(--basecolor2) [&_a:hover]:decoration-(--basecolor2) [&_a:focus-visible]:rounded-[2px] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-2 [&_a:focus-visible]:outline-(--basecolor)">
                            <BlocksRenderer content={data.description} />
                        </div>
                    )}
                    {data.button && <div className="mt-[16px] xl:mt-[22px]"><IntlButton button={data.button} /></div>}
                </div>
            </div>
        </section>
    );
}
