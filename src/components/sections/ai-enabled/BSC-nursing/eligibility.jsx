

"use client";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function Aieligibility({ data }) {
    return (
        <section className="realtive py-[10px_0px] xl:py-[50px_0] 2xl:py-[70px_0] 3xl:py-[90px_0]">
            <div className="container">
                {data?.heading && (
                    <h2 className="cmn_Title mb-[15px] xl:mb-[20px] 2xl:mb-[25px] text-black dark:text-white">
                        {data.heading}
                    </h2>
                )}

                {data?.description && (
                    <div className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.6] xl:leading-[1.7] space-y-[14px] xl:space-y-[18px]">
                        <BlocksRenderer content={data.description} />
                    </div>
                )}
                <div className="w-full overflow-x-auto mt-[25px] pb-[10px]">
                    <div className="min-w-[700px] rounded-[8px] border border-[#707070] overflow-hidden">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-[#F97A22] text-white">
                                    {data?.seatsSection?.tableHeaders?.map((column) => (
                                        <th
                                            key={column}
                                            className="border-r border-white/40 px-[15px] py-[12px] text-left text_1 font-medium last:border-r-0 text-white"
                                        >
                                            {column}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {data?.seatsSection?.tableRows?.map((row) => (
                                    <tr key={row.id} className="border-b border-[#707070] last:border-b-0">
                                        <td className="border-r border-[#707070] px-[15px] py-[13px] text-left text_1 text-[#212121] font-medium first-of-type:md:w-[30%] last-of-type:md:w-[30%] last:border-r-0 lg:text-[15px]">
                                            {row.programme}
                                        </td>
                                        <td className="border-r border-[#707070] px-[15px] py-[13px] text-left text_1 text-[#212121] font-medium first-of-type:md:w-[30%] last-of-type:md:w-[30%]  last:border-r-0 lg:text-[15px]">
                                            {row.level}
                                        </td>
                                        <td className="border-r border-[#707070] px-[15px] py-[13px] text-left text_1 text-[#212121] font-medium first-of-type:md:w-[30%] last-of-type:md:w-[30%]  last:border-r-0 lg:text-[15px]">
                                            {row.duration}
                                        </td>
                                        <td className="border-r border-[#707070] px-[15px] py-[13px] text-left text_1 text-[#212121] font-medium first-of-type:md:w-[30%] last-of-type:md:w-[30%]  last:border-r-0 lg:text-[15px]">
                                            {row.intake}
                                        </td>
                                        <td className="border-r border-[#707070] px-[15px] py-[13px] text-left text_1 text-[#212121] font-medium first-of-type:md:w-[30%] last-of-type:md:w-[30%]  last:border-r-0 lg:text-[15px] leading-[1.6]">
                                            {row.eligibility}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
