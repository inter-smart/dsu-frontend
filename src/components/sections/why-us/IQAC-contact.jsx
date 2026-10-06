"use client";

export default function IQACContact({ data }) {
    if (!data) return null;

    return (
        <div
            className="relative bg-[#EEF2F6] dark:bg-[#0f1011] py-[35px] xl:py-[45px] 2xl:py-[55px] 3xl:py-[65px]  "
        >
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-[25px] xl:gap-[30px] 2xl:gap-[35px] 3xl:gap-[40px]">

                    {/* Left Column - Title & Description */}
                    <div className="lg:w-[30%] xl:w-[28%] shrink-0 flex flex-col justify-center">
                        <h3 className="cmn_Title">
                            {data?.title}
                        </h3>
                        <p className="text_1 leading-[1.65] text-[#4A5565] dark:text-[#9CA3AF]">
                            {data?.description}
                        </p>
                    </div>

                    {/* Right Column - Cards */}
                    <div className="flex-1 flex flex-col sm:flex-row gap-[16px] xl:gap-[20px] 2xl:gap-[24px]">

                        {/* Address Card */}
                        <div className="flex-1 bg-white dark:bg-[#1F1F1F] rounded-[8px] xl:rounded-[10px] 2xl:rounded-[12px] p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[36px] shadow-[0_2px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)] border border-transparent dark:border-white/5">
                            <h4 className="text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] font-bold text-[#111827] dark:text-white mb-[12px] xl:mb-[16px]">
                                {data?.address?.label}
                            </h4>
                            <div className="text_1 leading-[1.7] text-[#4A5565] dark:text-[#9CA3AF]">
                                {data?.address?.lines?.map((line, idx) => (
                                    <span key={idx} className="block">
                                        {line}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Email & Phone Stacked */}
                        <div className="flex-1 flex flex-col gap-[16px] xl:gap-[20px] 2xl:gap-[24px]">
                            {/* Email Card */}
                            <div className="flex-1 bg-white dark:bg-[#1F1F1F] rounded-[8px] xl:rounded-[10px] 2xl:rounded-[12px] p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[36px] flex flex-col gap-[15px] shadow-[0_2px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)] border border-transparent dark:border-white/5">
                                <div className="w-full">
                                    <h4 className="text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] font-bold text-[#111827] dark:text-white mb-[8px] xl:mb-[10px]">
                                        {data?.email?.label}
                                    </h4>
                                    <a
                                        href={`mailto:${data?.email?.value}`}
                                        className="text_1 leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF] hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors duration-200 !no-underline"
                                    >
                                        {data?.email?.value}
                                    </a>
                                </div>
                                <div className="w-full">
                                    <h4 className="text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] font-bold text-[#111827] dark:text-white mb-[8px] xl:mb-[10px]">
                                        {data?.phone?.label}
                                    </h4>
                                    <a
                                        href={`tel:${data?.phone?.value?.replace(/\s/g, '')}`}
                                        className="text_1 leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF] hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors duration-200 !no-underline"
                                    >
                                        {data?.phone?.value}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
