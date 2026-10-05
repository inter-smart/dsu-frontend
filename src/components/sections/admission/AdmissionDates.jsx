import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const defaultDatesData = {
    heading: "Important Dates",
    description: [
        {
            type: "paragraph",
            children: [
                {
                    type: "text",
                    text: "Keep track of admission, entrance examination and course commencement information.",
                },
            ],
        },
    ],
    groups: [],
    note: {
        title: "Dates may vary by programme",
        description:
            "Admission deadlines and entrance examination schedules can change by programme or admission route. Check the official DSU site for the latest updates before applying or making travel arrangements.",
    },
};

export default function AdmissionDates({ data }) {
    const datesData = data || defaultDatesData;
    const heading = datesData?.heading || defaultDatesData.heading;
    const description = datesData?.description || defaultDatesData.description;
    const groups = datesData?.groups || [];
    const note = datesData?.note || defaultDatesData.note;

    return (
        <section className="relative bg-white dark:bg-[#101010] py-[30px] sm:py-[40px] lg:py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px]">
            <div className="container">
                {/* Main Heading & Description */}
                <div className="mb-8 sm:mb-10 xl:mb-14 2xl:mb-16 3xl:mb-20">
                    <h2 className="cmn_Title leading-[1.15] font-bold text-[#1E1E1E] dark:text-white tracking-tight">
                        {heading}
                    </h2>
                    {description && description.length > 0 && (
                        <div className="text_1 text-[#6B7280] dark:text-[#9CA3AF] leading-[1.6] max-w-[700px]">
                            <BlocksRenderer content={description} />
                        </div>
                    )}
                </div>

                {/* Date Groups */}
                <div className="flex flex-col gap-5 sm:gap-5 xl:gap-7 2xl:gap-8 3xl:gap-10 last-of-type:mb-0">
                    {groups.map((group) => (
                        <div key={group.id} className="border-b border-black/10 pb-[30px] xl:pb-[40px] 2xl:pb-[50px] 3xl:pb-[65px]">
                            {/* Group Heading */}
                            <h3 className="text-lg sm:text-xl lg:text-[22px] 2xl:text-[26px] 3xl:text-[30px] font-bold text-[#1E1E1E] dark:text-white tracking-tight mb-5 sm:mb-6 xl:mb-8 2xl:mb-10">
                                {group.heading}
                            </h3>

                            {/* Date Items */}
                            <div className="flex flex-col gap-1.5 sm:gap-2">
                                {group.items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="relative flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0 overflow-hidden border border-[#F0F0F0] dark:border-white/8 rounded-[4px] sm:rounded-[6px] dark:bg-[#141414] p-[15px] xl:p-[20px] 2xl:p-[25px] 3xl:p-[30px]"
                                    >
                                        {/* Date Label - Gradient Text */}
                                        <div className="shrink-0 sm:w-[130px] md:w-[150px] lg:w-[170px] xl:w-[190px] 2xl:w-[210px] 3xl:w-[240px]">
                                            <span className="text-[11px] sm:text-[12px] 2xl:text-[16px] 3xl:text-[20px] font-semibold uppercase tracking-[0.05em] bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent">
                                                {item.date}
                                            </span>
                                        </div>

                                        {/* Title & Description */}
                                        <div className="flex-1 min-w-0">
                                            <h4 className="cmn_Txt font-semibold text-[#1E1E1E] dark:text-white leading-[1.3]">
                                                {item.title}
                                            </h4>
                                            {item.description && (
                                                <p className="mt-0.5 sm:mt-1 text_1 text-[#6B7280] dark:text-[#9CA3AF] leading-[1.5]">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>

                {/* Bottom Note */}
                {note && (
                    <div className="mt-2 sm:mt-6 xl:mt-8 2xl:mt-10 3xl:mt-12">
                        <div className="w-full h-full p-[20px] 2xl:p-[25px] 3xl:p-[30px] rounded-[3px] xl:rounded-[4px] 2xl:rounded-[6px] 3xl:rounded-[10px] bg-[linear-gradient(180deg,#FFF8EE_0%,#FFF3E0_100%)]">
                            <h4 className="text-[12px] sm:text-[13px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[22px] font-semibold text-[#1E1E1E] dark:text-white">
                                {note.title}
                            </h4>
                            <p className="mt-1 sm:mt-1.5 text-[11px] sm:text-[12px] 2xl:text-[13px] 3xl:text-[15px] text-[#6B7280] dark:text-[#9CA3AF] leading-[1.6] max-w-[800px]">
                                {note.description}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
