
"use client"; 

import Image from "next/image";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function SdgIntroduction({ data }) {
    return (
        <section className="relative py-[40px_60px] xl:py-[55px_80px] 2xl:py-[65px_100px] 3xl:py-[75px_170px]">
            <div className="container">
                <div className="flex flex-wrap max-lg:mb-[30px]">
                    <div className="w-full lg:w-3/4">
                        <h2 className="cmn_Title mb-[25px] 2xl:mb-[40px]">{data.heading}</h2>
                        <div className="text_1 leading-[1.2] text-[#4A5565] [&>_p]:mb-[15px] [&>_p]:2xl:mb-[25px] mb-[25px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px] lg:max-w-[80%]">
                            <BlocksRenderer content={data.description} />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/4">
                        <div className="w-full sm:max-w-[50%] lg:max-w-[90%] mx-auto flex items-center justify-center">
                            <Image src={data?.media.url} className="object-cover w-full h-full" width={530} height={430} alt={data?.media.alternativeText} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap lg:-m-[4px] md:-m-[5px] lg:-m-[7px] xl:-m-[10px] 3xl:-m-[15px] w-full">
                    {data?.goals.map((item, id) => (
                        <div className="w-1/3 sm:w-1/4 lg:w-1/5 p-[4px] md:p-[5px] lg:p-[7px] xl:p-[10px] 3xl:p-[15px]" key={id}>
                            <Link href={item.url} className="w-full h-full relative">
                                <Image src={item.image.url} className="object-cover w-full h-full" width={530} height={430} alt={item?.image.alternativeText} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
