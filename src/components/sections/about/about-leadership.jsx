
"use client";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";

export default function AboutLeadership({ data }) {
    const featuredLeaders = data?.leaders?.slice(0, 2);
    const otherLeaders = data?.leaders?.slice(2);
    return (
        <section className='bg-[#F4F6FA] py-[65px]'>
            <div className="container">
                <h2 className="text-[25px] xl:text-[36px] 2xl:text-[44px] 3xl:text-[55px] font-bold leading-[30px] text-center mb-[10px]
                            xl:leading-[40px] 2xl:leading-[50px] 3xl:leading-[60px] text-black  ">
                    {data.heading}
                </h2>
                <div className="text_1 leading-[1.2] text-[#4A5565] text-center mb-[30px] 3xl:mb-[50px]">
                    <BlocksRenderer content={data.description} />
                </div>
                <div className="flex flex-wrap -m-[5px] lg:-m-[10px]">
                    {featuredLeaders.map((item, id) => (
                        <div className="w-full md:w-1/2 p-[5px] lg:p-[10px]" key={id}>
                            <Link href="/" className=" flex flex-wrap items-center p-[20px_15px] lg:p-[25px_15px] xl:p-[30px_20px] 2xl:p-[35px_25px] 3xl:p-[44px_30px] bg-white w-full h-full rounded-[10px] hover:bg-gradient-to-b hover:from-[#FFF8EE] hover:to-[#FFF3E0]
                            max-sm:text-center">
                                <div className="w-[165px] xl:w-[200px] 2xl:w-[250px] 3xl:w-[310px] max-sm:m-auto  max-sm:mb-[10px] ">
                                    <div className="w-full h-full overflow-hidden rounded-[35px] lg:rounded-[55px] xl:rounded-[65px] 2xl:rounded-[85px] 3xl:rounded-[95px] pb-[10px] border-b-[2px] border-[#DC2626]">
                                        <Image src={item?.image.url} width="250" height="250" class="w-full h-full object-cover  rounded-[35px] lg:rounded-[55px] xl:rounded-[65px] 2xl:rounded-[85px] 3xl:rounded-[95px]" alt={item?.image.alternativeText} />

                                    </div>
                                </div>
                                <div className="w-full sm:w-[calc(100%-165px)] xl:w-[calc(100%-200px)] 2xl:w-[calc(100%-250px)] 3xl:w-[calc(100%-310px)] sm:pl-[30px]">
                                    <div className="text-[13px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[25px] text-black font-bold mb-[6px]">
                                        {item.name}
                                    </div>
                                    <div className="text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-[#DC2626] font-semibold relative pb-[8px] mb-[10px] sm:mb-[20px] lg:mb-[30px] after:absolute after:bottom-0 after:content-[''] after:left-0 after:h-[3px]
                                     after:w-[30px] after:bg-gradient-to-r after:from-[#DC2626] after:to-[#F97316] max-sm:after:m-auto max-sm:after:right-0">
                                        {item.designation}
                                    </div>
                                    <p>{item.description}</p>
                                    <div className="w-[28px] h-[20px] max-sm:m-auto !mt-[30px]">
                                        <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.776 9.0405L19.901 0.2905C19.733 0.105 19.4967 0 19.25 0H14C13.6535 0 13.3403 0.203 13.2003 0.518C13.0603 0.83475 13.118 1.204 13.349 1.4595L18.3348 7H0.875C0.392 7 0 7.392 0 7.875V11.375C0 11.858 0.392 12.25 0.875 12.25H18.3348L13.349 17.7887C13.118 18.046 13.0585 18.4153 13.2003 18.7302C13.3403 19.047 13.6535 19.25 14 19.25H19.25C19.4985 19.25 19.733 19.1432 19.901 18.9613L27.776 10.2113C28.0752 9.87875 28.0752 9.37125 27.776 9.0405Z" fill="#212121" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                    {otherLeaders.map((item, id) => (
                        <div className="w-full w-1/2 md:w-1/3 p-[5px] lg:p-[10px]" key={id}>
                            <Link href="/" className=" flex flex-wrap items-center p-[20px_10px] lg:p-[8px_12px] xl:p-[10px_15px] 2xl:p-[12px_20px] 3xl:p-[15px_25px] bg-white w-full h-full rounded-[10px] hover:bg-gradient-to-b hover:from-[#FFF8EE] hover:to-[#FFF3E0]
                            max-sm:text-center">
                                <div className="w-[115px] xl:w-[145px] 2xl:w-[175px] 3xl:w-[215px] max-sm:m-auto  max-sm:mb-[10px] ">
                                    <div className="w-full h-full overflow-hidden rounded-[25px] lg:rounded-[35px] xl:rounded-[45px] 2xl:rounded-[55px] 3xl:rounded-[65px] pb-[10px] border-b-[2px] border-[#DC2626]">
                                        <Image src={item?.image.url} width="250" height="250" class="w-full h-full object-cover  rounded-[25px] lg:rounded-[35px] xl:rounded-[45px] 2xl:rounded-[55px] 3xl:rounded-[65px]" alt={item?.image.alternativeText} />

                                    </div>
                                </div>
                                <div className="w-full sm:w-[calc(100%-115px)] xl:w-[calc(100%-145px)] 2xl:w-[calc(100%-175px)] 3xl:w-[calc(100%-215px)] sm:pl-[30px]">
                                    <div className="text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-black font-bold mb-[6px]">
                                        {item.name}
                                    </div>
                                    <div className="text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#4A5565] font-normal relative pb-[8px] mb-[10px] sm:mb-[20px] lg:mb-[30px]  ">
                                        {item.designation}
                                    </div>
                                    <p>{item.description}</p>
                                    <div className="w-[22px] xl:w-[28px] h-[15px] xl:h-[20px] max-sm:m-auto !mt-[30px]">
                                        <svg   viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.776 9.0405L19.901 0.2905C19.733 0.105 19.4967 0 19.25 0H14C13.6535 0 13.3403 0.203 13.2003 0.518C13.0603 0.83475 13.118 1.204 13.349 1.4595L18.3348 7H0.875C0.392 7 0 7.392 0 7.875V11.375C0 11.858 0.392 12.25 0.875 12.25H18.3348L13.349 17.7887C13.118 18.046 13.0585 18.4153 13.2003 18.7302C13.3403 19.047 13.6535 19.25 14 19.25H19.25C19.4985 19.25 19.733 19.1432 19.901 18.9613L27.776 10.2113C28.0752 9.87875 28.0752 9.37125 27.776 9.0405Z" fill="#212121" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}

                </div>


            </div>
        </section>
    )
}
