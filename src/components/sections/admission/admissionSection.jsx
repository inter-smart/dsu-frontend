"use client";

import Link from "next/link";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function AdmissionSection({data}) {
    return (
        <section className='relative bg-[linear-gradient(135deg,#EFF6FF_0%,#F9FAFB_100%)] dark:bg-[linear-gradient(135deg,#000,#000)] py-[40px] xl:py-[50px] 2xl:py-[60px] 3xl:py-[80px]'>
            <div className="container">
                <div className="flex flex-wrap -m-[5px] 3xl:-m-[10px]">
                    {data?.cards.map((item, id) => (
                        <div className="w-full sm:w-1/2" key={id}>
                            <div className="p-[5px] 3xl:p-[10px]">
                                <div className="w-full h-full bg-[linear-gradient(180deg,#FFF8EE_0%,#FFF3E0_100%)] border border-black/10 rounded-[8px] p-[15px] xl:p-[20px_25px] 2xl:p-[30px_35px] 3xl:p-[40px_45px]">
                                     
                                    <div className="text-[12px] lg:text-[16px] xl:text-[20px] 2xl:text-[25px] 3xl:text-[31px] font-semibold text-[#212121] mb-[8px]">
                                        {item.heading}
                                    </div>
                                    <p>{item.description}</p>
                                     <Link
                                        key={item?.button.id}
                                        href={item?.button.href}
                                        className= "group relative mt-[20px] flex h-[30px] w-fit items-center justify-center gap-[10px] overflow-hidden rounded-[6px] bg-gradient-to-r from-[#DC2626] to-[#F97316] text_1 font-bold capitalize text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)] xl:h-[35px]  2xl:h-[40px] 2xl:gap-[10px] 2xl:rounded-[4px] 3xl:h-[50px] px-[20px]  before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full"
                                        
                                    >
                                        <span className="relative z-[1] transition-transform duration-300">
                                            {item.button.label}
                                        </span>

                                          <div className="relative z-[1] flex h-[13px] w-[15px] items-center justify-center transition-all duration-300 group-hover:translate-x-[4px] group-hover:scale-110">
                                                <svg
                                                    width="11"
                                                    height="9"
                                                    viewBox="0 0 11 9"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="transition-transform duration-300 group-hover:rotate-180"
                                                >
                                                    <circle cx="5.12232" cy="0.919192" r="0.919192" fill="white" />
                                                    <circle cx="5.12232" cy="4.33325" r="0.919192" fill="white" />
                                                    <circle cx="5.12232" cy="7.74732" r="0.919192" fill="white" />
                                                    <circle cx="9.32349" cy="4.33325" r="0.919192" fill="white" />
                                                    <circle cx="0.919192" cy="4.33325" r="0.919192" fill="white" />
                                                </svg>
                                            </div>
                                         
                                    </Link>
                                   
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
