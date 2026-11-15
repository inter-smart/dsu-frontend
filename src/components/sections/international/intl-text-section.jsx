import { BlocksRenderer } from "@/components/ui/blocks-renderer";

// International flexible section: a title with a description below it.
export default function IntlTextSection({ data }) {
    // Profile style (e.g. the Team head): "Name - Designation" shown centered under the photo
    const [name, ...role] = data.profile && data.title ? data.title.split(/\s+-\s+/) : [];
    return (
        // A text block without a title continues the block above it, so it has no top padding
        <section className={`pb-[15px] xl:pb-[22px] 2xl:pb-[28px] 3xl:pb-[40px] ${data.title && !data.profile ? "pt-[15px] xl:pt-[22px] 2xl:pt-[28px] 3xl:pt-[40px]" : "pt-0"}`}>
            <div className="container">
                {data.profile && data.title ? (
                    <div className="mb-[12px] text-center">
                        <h2 className="cmn_Title">{name}</h2>
                        {role.length > 0 && <p className="mt-[4px] text-[14px] font-semibold uppercase tracking-wide text-[#DC2626] xl:text-[16px] 3xl:text-[22px]">{role.join(" - ")}</p>}
                    </div>
                ) : data.title && <h2 className="cmn_Title">{data.title}</h2>}
                {data.description?.length > 0 && (
                    <div className="text_1 typography lg:text-[14px] 2xl:text-[14.4px] [&_p:empty]:hidden [&_p]:mb-[8px] [&_p:last-child]:mb-0">
                        <BlocksRenderer content={data.description} />
                    </div>
                )}
            </div>
        </section>
    );
} 
