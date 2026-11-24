import Image from "next/image";

export default function AIEnvironments({ data }) {
    if (!data) return null;

    const items = Array.isArray(data?.items) ? data.items : [];

    return (
        <section className="relative py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[100px] bg-linear-to-b from-[#EEF4FF] to-[#F6F9FC] dark:from-[#0f1011] dark:to-[#0f1011] transition-colors duration-300">
            <div className="container">

                {/* Heading (left) + paragraph (right) */}
                {(data?.heading || data?.description) && (
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[15px] lg:gap-[40px]">
                        {data?.heading && (
                            <h2 className="cmn_Title font-bold leading-[1.1] text-[#212121] dark:text-white whitespace-pre-line">
                                {data.heading}
                            </h2>
                        )}
                        {data?.description && (
                            <p className="!text_1 leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF] lg:w-[48%] xl:w-[40%] 2xl:w-[38%] shrink-0">
                                {data.description}
                            </p>
                        )}
                    </div>
                )}

                {/* Rows: image + card, the side alternates (set imagePosition: "left" | "right" to override) */}
                {items.length > 0 && (
                    <div className="mt-[25px] xl:mt-[45px] flex flex-col gap-[18px] xl:gap-[22px]">
                        {items.map((item, index) => {
                            const imageRight =
                                item?.imagePosition === "right" ||
                                (item?.imagePosition !== "left" && index % 2 === 1);
                            const bullets = Array.isArray(item?.bullets) ? item.bullets : [];

                            return (
                                <div
                                    key={item?.id ?? index}
                                    className="flex flex-col lg:flex-row gap-[18px] xl:gap-[22px]"
                                >
                                    {/* Image: on top on mobile, left or right on lg+ */}
                                    {item?.image?.url && (
                                        <div
                                            className={
                                                "relative min-h-[350px] sm:min-h-[450px] overflow-hidden rounded-[8px] bg-[#e5e7eb] dark:bg-[#18191B] lg:grow lg:min-w-0 lg:basis-[calc(50%-9px)] xl:basis-[calc(50%-11px)]" + // CHANGED: was lg:flex-1 lg:min-w-0
                                                (imageRight ? " lg:order-2" : "")
                                            }
                                        >
                                            <Image
                                                src={item.image.url}
                                                alt={item.image.alternativeText || item?.title || "Environment"}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                                className="object-cover object-top"
                                            />
                                        </div>
                                    )}

                                    {/* Card */}
                                    <div className="rounded-[8px] bg-white dark:bg-[#18191B] px-[22px] py-[28px] xl:px-[35px] xl:py-[40px] 2xl:px-[45px] 2xl:py-[50px] 2xl:min-h-[414px] flex flex-col justify-center lg:grow lg:min-w-0 lg:basis-[calc(50%-9px)] xl:basis-[calc(50%-11px)]"> {/* CHANGED: was lg:flex-1 lg:min-w-0 */}
                                        {item?.title && (
                                            <h3 className="text-[24px] xl:text-[30px] 2xl:text-[36px] font-semibold leading-[1.2] text-[#212121] dark:text-white">
                                                {item.title}
                                            </h3>
                                        )}
                                        {item?.description && (
                                            <p className="!text_1 mt-[12px] xl:mt-[16px] leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF] 2xl:max-w-[92%]">
                                                {item.description}
                                            </p>
                                        )}
                                        {bullets.length > 0 && (
                                            <ul className="list-none p-0 m-0 mt-[20px] xl:mt-[28px] flex flex-col gap-[14px] xl:gap-[18px]">
                                                {bullets.map((bullet, bulletIndex) => (
                                                    <li
                                                        key={bulletIndex}
                                                        className="flex items-center gap-[12px] xl:gap-[14px] !text_1 font-semibold leading-[1.3] text-[#212121] dark:text-white"
                                                    >
                                                        <span
                                                            aria-hidden="true"
                                                            className="size-[8px] xl:size-[10px]   shrink-0 rounded-full bg-linear-to-br from-[#DC2626] to-[#F97316]"
                                                        />
                                                       <span>{bullet}</span> 
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}