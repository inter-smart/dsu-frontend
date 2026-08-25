
"use client";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";

export default function HistoryNewpahse({ data }) {
    const isVideo = data?.media?.mime?.includes("video");

    return (
        <section className="relative py-[40px] xl:py-[50px] 2xl:py-[70px] 3xl:py-[100px] z-0 before:absolute before:content-[''] before:left-0 before:top-0 before:z-1 before:w-full before:h-full before:bg-[rgba(7,7,7,0.7)] before:pointer-events-none">

            {isVideo ? (
                <video autoPlay muted loop playsInline className="h-full w-full object-cover absolute top-0 left-0 ">
                    <source src={data?.media?.url} type={data?.media?.mime} />
                </video>
            ) : (
                data?.media?.url && (
                    <Image
                        src={data.media.url}
                        alt={data?.media?.alternativeText || data?.title || "Hero image"}
                        width={1920}
                        height={750}
                        priority
                        className="h-full w-full object-cover absolute top-0 left-0"
                    />
                )
            )}
            <div className="container">
                <div className="max-w-[500px] xl:max-w-[500px] 2xl:max-w-[600px] 3xl:max-w-[890px] m-auto relative z-10 text-center"> 
                     <h2 className="cmn_Title text-white mb-[15px] xl:mb-[25px] 2xl:mb-[35px] 3xl:mb-[45px]">
                                {data.title}
                            </h2>
                      <div className="text_1 leading-[1.2] text-white mb-[25px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px] [&_p]:mb-[20px] [&_p]:xl:mb-[25px] [&_p]:2xl:mb-[30px] [&_p]:3xl:mb-[40px] [&_p]:text-white">
                                <BlocksRenderer content={data.description} />
                            </div>
                </div>
            </div>
        </section >
    )
}
