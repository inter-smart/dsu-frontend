import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { hasContent } from "@/lib/has-content";


const renderText = (value) =>
    Array.isArray(value) ? <BlocksRenderer content={value} /> : value;


export default function InnovationObjectives({ data }) {
    if (!data) return null;

    const items = (Array.isArray(data?.items) ? data.items : []).filter(
        (item) => item?.title,
    );
    if (items.length === 0) return null;

    return (
        <section className="relative py-[40px] xl:py-[55px] 2xl:py-[65px] 3xl:py-[80px] bg-gradient-to-br from-[#EAF3FD] to-[#F7F8FC] dark:from-[#101010] dark:to-[#101010] transition-colors duration-300">
            <div className="container">

                {data?.heading && (
                    <h2 className="text-[20px] sm:text-[22px] xl:text-[26px] 2xl:text-[26px] 3xl:text-[32px] font-semibold leading-[1.3] mb-[30px] xl:mb-[40px] 2xl:mb-[50px] 3xl:mb-[60px] text-[#212121] dark:text-white">
                        {data.heading}
                    </h2>
                )}

                <div
                    data-reveal-stagger
                    className="grid grid-cols-1 lg:grid-cols-[57.2%_minmax(0,1fr)] gap-y-[25px] xl:gap-y-[35px] 2xl:gap-y-[50px] 3xl:gap-y-[60px]"
                >
                    {items.map((item, idx) => {
                        const hasBody = Array.isArray(item?.description)
                            ? hasContent(item.description)
                            : Boolean(item?.description);

                        return (
                            <div
                                key={item.id ?? idx}
                                className="group relative pl-[14px] sm:pl-[16px] 2xl:pl-[18px] 3xl:pl-[22px] lg:pr-[30px] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[4px] 2xl:before:w-[5px] before:rounded-[1px] before:bg-gradient-to-b before:from-[#DC2626] before:to-[#F97316] before:content-[''] before:transition-all before:duration-300 hover:before:w-[7px]"
                            >
                                <div className="text-[16px] sm:text-[17px] xl:text-[18px] 2xl:text-[18px] 3xl:text-[22px] font-semibold leading-[1.4] text-[#212121] dark:text-white">
                                    {item.title}
                                </div>
                                {hasBody && (
                                    <div className="mt-[2px] text-[14px] sm:text-[15px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[21px] leading-[1.55] text-[#4A5565] dark:text-[#9CA3AF] [&_p]:text-[#4A5565] dark:[&_p]:text-[#9CA3AF] typography">
                                        {renderText(item.description)}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}