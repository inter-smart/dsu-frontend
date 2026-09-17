"use client";

import Image from "next/image";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function AiLaboratory({data}) {
  return (
     <section className="realtive  py-[10px_40px] xl:py-[50px] 2xl:py-[70px] 3xl:py-[90px]">
        <div className="container">
            <div className="relative max-lg:flex max-lg:flex-col-reverse gap-[20px] after:content-[''] after:table after:clear-both ">
                <div className="w-full lg:w-[450px] xl:w-[500px] 2xl:w-[600px] 3xl:w-[750px]  lg:float-right ml-0 lg:ml-[30px] xl:ml-[45px] 2xl:ml-[55px] mb-[25px] lg:mb-[20px]">
                    <div className="w-full rounded-[10px] bg-gradient-to-r from-[#FFF8EE] to-[#FFF3E0] overflow-hidden p-[15px_20px] lg:p-[15px_25px] xl:p-[15px_40px] 2xl:p-[20px_50px] 3xl:p-[30px_60px]">
                        <div className="cmn_Title">{data?.highlightCard.number}</div>
                        <div className="text-[13px] lg:text-[18px] xl:text-[20px] 2xl:text-[25px] 3xl:text-[30px]  font-bold mb-[12px]">{data?.highlightCard.title}</div>
                        <p className="text-[#4A5565]">{data?.highlightCard.description}</p>
                    </div>
                </div>
                <div className="w-full">
                    <div className="cmn_Title mb-[25px]">{data.heading}</div>
                        <div className="text_1 leading-[1.2] text-[#4A5565] [&_p]:mb-[15px] [&_p]:3xl:mb-[20px]">
                            <BlocksRenderer content={data.description} />
                        </div>
                </div>
            </div>
        </div>
     </section>
  )
}
