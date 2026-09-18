import Image from "next/image";
import Link from "next/link";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function IQACChairmanMessage({ data }) {
    return (
        <section className="relative py-[40px] xl:py-[65px] 2xl:py-[90px] 3xl:py-[120px] bg-white">
            <div className="container">
                <div className="flex flex-wrap m-auto max-md:gap-[15px] m-auto relative lg:max-w-[90%]">
                    <div className="absolute top-[30px] md:top-0 right-[30px] md:right-0 w-[60px] 2xl:w-[90px] h-[60px] 2xl:h-[90px] flex items-center pointer-events-none">
                        <svg viewBox="0 0 90 90" fill="none" >
                            <g opacity="0.1" clipPath="url(#clip0_5049_218163)">
                                <path d="M38.2503 8.96484H2.25014C1.00731 8.96484 0 9.97215 0 11.215V47.2151C0 48.4573 1.00731 49.4646 2.25014 49.4646H31.4559C31.4999 62.9647 21.5401 71.9646 11.25 71.9646C10.0072 71.9646 8.99986 72.9719 8.99986 74.2147V78.715C8.99986 79.9578 10.0072 80.9651 11.25 80.9651C24.7433 80.9651 40.4997 71.9646 40.4997 49.4646V11.215C40.4997 9.97215 39.4924 8.96484 38.2503 8.96484Z" fill="black" />
                                <path d="M87.8433 8.96484H51.8432C50.6011 8.96484 49.5938 9.97215 49.5938 11.215V47.2151C49.5938 48.4573 50.6011 49.4646 51.8432 49.4646H81.0497C81.0936 62.9647 71.1331 71.9646 60.8438 71.9646C59.6009 71.9646 58.5936 72.9719 58.5936 74.2147V78.715C58.5936 79.9578 59.6009 80.9651 60.8438 80.9651C74.337 80.9651 90.0935 71.9646 90.0935 49.4646V11.215C90.0935 9.97215 89.0862 8.96484 87.8433 8.96484Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_5049_218163">
                                    <rect width="90" height="90" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                    <div className="w-full md:w-[200px] lg:w-[225px] xl:w-[280px] 2xl:w-[335px] 3xl:w-[420px]  ">
                        <div className="w-full lg:aspect-[420/420] mb-[15px] rounded-[10px] overflow-hidden">
                            <Image src={data?.image.url} width={420} height={414} className="w-full h-full object-cover" alt={data.name} />
                        </div>

                    </div>
                    <div className="md:w-[calc(100%-200px)] lg:w-[calc(100%-225px)] xl:w-[calc(100%-280px)] 2xl:w-[calc(100%-335px)] 3xl:w-[calc(100%-420px)]
                    md:pl-[40px] lg:pl-[30px] xl:pl-[50px] 2xl:pl-[60px] 3xl:pl-[80px] flex items-center">
                        <div className="w-full">
                            <div className="cmn_Title">{data?.title}</div>

                            <div className="text_1 leading-[1.2] text-[#4A5565] [&_p]:text-[#4A5565] mb-[30px] 3xl:mb-[50px] [&_p]:mb-[15px] [&_p]:xl:mb-[25px] [&_p]:3xl:mb-[30px]
                        w-full max-w-[550px] xl:max-w-[590px] 2xl:max-w-[790px] 3xl:max-w-[820px]">
                                <BlocksRenderer content={data.description} />
                            </div>
                            <div className="text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] text-black font-bold mb-[6px]">
                                {data.name}
                            </div>
                            <div className="text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-[#4A5565] font-normal relative pb-[8px] ">
                                {data.designation}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
