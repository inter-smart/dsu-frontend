

"use client";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";


export default function ArchitectureSection({ data }) {
    return (
        <section className="relative py-[40px] xl:py-[50px] 2xl:py-[70px] 3xl:py-[90px] bg-gradient-to-b from-[#FFF8EE] to-[#FFF3E0] ">
            <div className="container">
                <div className="lg:max-w-[60%] m-auto mb-[20px]  md:mb-[25px] lg:mb-[40px] xl:mb-[60px] 2xl:mb-[80px] 3xl:mb-[125px]">
                    <h2 className=" text-[25px] xl:text-[36px] 2xl:text-[44px] 3xl:text-[55px] font-bold leading-[30px] text-center mb-[10px]
                                xl:leading-[40px] 2xl:leading-[50px] 3xl:leading-[60px] text-black  ">
                        {data.heading}
                    </h2>
                    <div className="text_1 leading-[1.2] text-[#4A5565] text-center mb-[30px] 3xl:mb-[50px]">
                        <BlocksRenderer content={data.subheading} />
                    </div>
                </div>
                <div className="flex flex-wrap max-lg:gap-[20px]">
                    <div className="w-full lg:w-1/2">
                        <h2 className=" text-[25px] xl:text-[36px] 2xl:text-[44px] 3xl:text-[55px] font-bold leading-[30px] mb-[10px]
                                xl:leading-[40px] 2xl:leading-[50px] 3xl:leading-[60px] text-black  ">
                            {data?.contentBlock.heading}
                        </h2>
                        <div className="text_1 leading-[1.2] text-[#4A5565]  mb-[30px] 3xl:mb-[50px]">
                            <BlocksRenderer content={data?.contentBlock.description} />
                        </div>
                        <div className="w-full border border-[rgb(0,0,0,0.1)] rounded-[8px] xl:rounded-[14px] 2xl:rounded-[15px] 3xl:rounded-[17px] overflow-hidden p-[10px] xl:p-[15px] 2xl:p-[20px] bg-gradient-to-r from-[rgb(230,81,0,0.1)] via-[rgb(255,109,0,0.1)] to-[rgb(255,143,0,0.1)]">
                            <div className="text-[12px] xl:text-[15px] 2xl:text-[18px] 3xl:text-[20px] text-black font-bold mb-[5px] xl:mb-[8px] 2xl:mb-[12px] 3xl:mb-[15px]">
                                {data?.contentBlock?.highlightBox.title}
                            </div>
                            <div className="text_1 leading-[1.2] text-[#4A5565]">
                                <BlocksRenderer content={data?.contentBlock?.highlightBox.description} />
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="relative w-full h-full overflow-hidden rounded-[8px] lg:max-w-[80%] lg:ml-auto">
                            <Image src={data?.media?.url} className="w-full h-full object-cover" width={680} height={350} alt={data?.media?.alternativeText} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
