
"use client";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
export default function HistoryDetails({ data }) {
    return (
        <section className='relative bg-gradient-to-b from-[#FFF8EE] to-[#FFF3E0]'>
            <div className="container">
                <div className="lg:w-[calc(100%-350px)] xl:w-[calc(100%-440px)] 2xl:w-[calc(100%-530px)] 3xl:w-[calc(100%-660px)] py-[40px] xl:py-[50px] 2xl:py-[70px] 3xl:py-[95px]">
                    <div className="text_1 leading-[1.2] text-[#4A5565] mb-[25px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px] [&_p]:mb-[20px] [&_p]:xl:mb-[25px] [&_p]:2xl:mb-[30px] [&_p]:3xl:mb-[40px] [&_p]:text-[#4A5565]">
                        <BlocksRenderer
                            content={data?.description}
                            modifiers={{
                                semibold: ({ children }) => (
                                    <strong className="font-semibold italic text-[#F97316]">
                                        {children}
                                    </strong>
                                ),
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full lg:max-w-[350px] xl:max-w-[440px] 2xl:max-w-[530px] 3xl:max-w-[660px] overflow-hidden absolute top-0 right-0 h-full max-lg:opacity-[0.10]">
                <Image src={data?.image.url} width={660} height={860} className="w-full h-full object-cover" alt={data?.image.alternativeText} />
            </div>
        </section>
    )
}
