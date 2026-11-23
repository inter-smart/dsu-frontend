import { BlocksRenderer } from "@/components/ui/blocks-renderer";
import IntlStructuredText, { isStructured } from "./intl-structured-text";
import IntlTextButtonSection from "./intl-text-button-section";
import { IntlButton } from "./intl-button-section";

// International flexible section: a title with a description below it.
// The "About DSU" closer: a text block directly followed by a button row, drawn as one centred panel
export const isCloser = (data, next) => next === "international.button-section" && !data?.profile && !isStructured(data?.description);

export default function IntlTextSection({ data, index, next, nextData }) {
    // Profile style (e.g. the Team head): "Name - Designation" shown centered under the photo
    const [name, ...role] = data.profile && data.title ? data.title.split(/\s+-\s+/) : [];
    // "Term : description" lists get cards / numbered steps, so they drop the plain side rule
    const structured = isStructured(data.description);
    // A titled text block that opens the page is its intro, so it gets the same panel as the text-button intro
    if (index === 0 && data.title && !data.profile && !structured) return <IntlTextButtonSection data={data} />;
    // The closer renders the button row's buttons too, so the gradient runs across one panel
    if (isCloser(data, next)) {
        const buttons = nextData?.buttons || (nextData ? [nextData] : []);
        return (
            <section className="py-[30px] xl:py-[40px] 3xl:py-[60px]">
                <div className="container">
                    <div className="rounded-[16px] border border-black/5 bg-[linear-gradient(135deg,#EFF6FF_0%,#F9FAFB_100%)] dark:bg-[linear-gradient(135deg,#000000_0%,#09090B_100%)] px-[16px] py-[26px] text-center dark:border-white/10 xl:rounded-[20px] xl:px-[40px] xl:py-[44px] 3xl:py-[60px]">
                        {data.title && <h2 className="cmn_Title relative inline-block pb-[12px] after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-[56px] after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-[#DC2626] after:to-[#F97316] after:content-[''] xl:pb-[16px] xl:after:w-[72px]">{data.title}</h2>}
                        {data.description?.length > 0 && (
                            <div className="text_1 typography mx-auto mt-[12px] max-w-[900px] lg:text-[14px] 2xl:text-[14.4px] 3xl:max-w-[1100px] [&_p:empty]:hidden [&_p]:mb-[8px] [&_p:last-child]:mb-0 [&_a]:font-semibold [&_a]:text-(--basecolor) [&_a]:underline [&_a]:decoration-(--basecolor2)/50 [&_a]:decoration-2 [&_a]:underline-offset-4">
                                <BlocksRenderer content={data.description} />
                            </div>
                        )}
                        {buttons.length > 0 && (
                            <div className="mt-[22px] flex flex-wrap justify-center gap-[10px] xl:mt-[30px] xl:gap-[16px]">
                                {buttons.map((button, i) => <IntlButton key={i} button={button} />)}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    }
    return (
        // A text block without a title continues the block above it, so it has no top padding
        <section className={`pb-[15px] xl:pb-[22px] 2xl:pb-[28px] 3xl:pb-[40px] ${data.title && !data.profile ? "pt-[15px] xl:pt-[22px] 2xl:pt-[28px] 3xl:pt-[40px]" : data.profile ? "pt-0" : "pt-[6px] xl:pt-[10px]"}`}>
            <div className="container">
                {data.profile && data.title ? (
                    <div className="mb-[25px] text-center ">
                        <h2 className="cmn_Title">{name}</h2>
                        {role.length > 0 && <p className="mt-[4px] text-[14px] font-semibold uppercase tracking-wide text-[#DC2626] xl:text-[16px] 3xl:text-[22px]">{role.join(" - ")}</p>}
                    </div>
                ) : data.title && <h2 className="cmn_Title relative pb-[12px] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[56px] after:rounded-full after:bg-gradient-to-r after:from-[#DC2626] after:to-[#F97316] after:content-[''] xl:pb-[16px] xl:after:w-[72px]">{data.title}</h2>}
                {data.description?.length > 0 && (
                    <div className={`text_1 ${structured ? "" : "typography"} lg:text-[14px] 2xl:text-[14.4px] [&_p:empty]:hidden [&_p]:mb-[8px] [&_p:last-child]:mb-0 [&_a]:font-semibold [&_a]:text-(--basecolor) [&_a]:underline [&_a]:decoration-(--basecolor2)/50 [&_a]:decoration-2 [&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:text-(--basecolor2) [&_a:hover]:decoration-(--basecolor2) [&_a:focus-visible]:rounded-[2px] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-2 [&_a:focus-visible]:outline-(--basecolor) ${data.profile ? "mx-auto max-w-[960px] text-center 3xl:max-w-[1200px]" : ""} ${data.title || data.profile || structured ? "" : "border-l-[3px] border-[#F97316] pl-[14px] xl:pl-[18px]"}`}>
                        {structured ? <IntlStructuredText blocks={data.description} /> : <BlocksRenderer content={data.description} />}
                    </div>
                )}
            </div>
        </section>
    );
} 
