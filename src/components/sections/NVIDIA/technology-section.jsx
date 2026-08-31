"use client";
import Image from "next/image";
import { useState } from "react";

export default function TechnologySection({ data }) {
    const [imageError, setImageError] = useState(false);

    return (
        <section className="relative py-[40px] md:py-[70px] lg:py-[90px] xl:py-[100px] 2xl:py-[120px] bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row   justify-between gap-[35px] md:gap-[50px] lg:gap-[60px] xl:gap-[80px]">

                    {/* Left Column - Tech Stack Diagram Card */}
                    <div className="w-full lg:w-1/2 xl:w-[54%]">
                        <div className="relative w-full h-full overflow-hidden rounded-[8px]">
                            <Image src={data?.media?.url} className="w-full h-full object-cover" width={680} height={350} alt={data?.media?.alternativeText}/>
                        </div>
                    </div>

                    {/* Right Column - Title, Subtitle, & Features List */}
                    <div className="w-full lg:w-1/2 xl:w-[46%]">
                        <h2 className="cmn_Title mb-[15px] xl:mb-[20px] 2xl:mb-[30px] 3xl:mb-[35px] lg:max-w-[300px] xl:max-w-[380px] 2xl:max-w-[480px] 3xl:max-w-[580px]">
                            {data?.heading || "The Technology Behind Your AI Future"}
                        </h2>

                        <p className="text_1 mb-[15px]">
                            {data?.subheading || "NVIDIA technology and DSU's world-class infrastructure empower every student to build, train, deploy and innovate."}
                        </p>

                        <div className="flex flex-col gap-[14px] md:gap-[18px] lg:gap-[20px]">
                            {data?.features?.map((item) => (
                                <div key={item.id || item.title} className="flex items-center gap-[14px] md:gap-[18px] group">
                                    {/* Orange Eye / Diamond Icon */}
                                    <div className="flex-shrink-0 w-[24px] h-[24px] md:w-[28px] md:h-[28px] lg:w-[30px] lg:h-[30px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.7875 9.90973C20.4995 9.6142 20.024 9.6112 19.7269 9.89773C17.7857 11.7954 11.6171 13.5011 9.52585 13.5011C7.83067 13.5011 4.64883 11.1009 1.91254 7.81401C2.4541 7.52298 3.00316 7.20944 3.55822 6.89441C5.62243 5.71829 7.75866 4.50016 9.52585 4.50016C11.6366 4.50016 14.5154 6.18484 16.2091 7.58148C14.6894 8.91062 12.1556 10.6373 10.0134 10.6373C8.01669 10.6373 6.96658 9.10564 6.55103 8.29256C7.09859 7.92202 8.07969 7.36546 9.0383 7.36546C10.4799 7.36546 11.9486 8.60459 11.9636 8.61659C12.2801 8.88662 12.7527 8.84612 13.0197 8.53408C13.2882 8.22055 13.2537 7.748 12.9402 7.47797C12.8637 7.41197 11.041 5.8638 9.0383 5.8638C7.03558 5.8638 5.21289 7.41197 5.13488 7.47797C4.90236 7.67749 4.81535 7.99853 4.91436 8.28806C4.96837 8.44558 6.2675 12.1375 10.0119 12.1375C13.6288 12.1375 17.4302 8.51758 17.8502 8.10504C17.9942 7.96252 18.0767 7.7675 18.0752 7.56498C18.0737 7.36096 17.9912 7.16744 17.8442 7.02643C16.2136 5.46926 12.5142 3 9.52585 3C7.36112 3 5.04937 4.31714 2.81414 5.59227C2.00105 6.05582 1.19697 6.51487 0.419886 6.89441C0.217364 6.99342 0.0703488 7.17944 0.0193434 7.39996C-0.031662 7.62049 0.0193434 7.85151 0.158858 8.03003C2.87264 11.4999 6.82256 15.0013 9.52585 15.0013C11.9036 15.0013 18.4368 13.2581 20.7755 10.9703C21.0711 10.6808 21.0771 10.2053 20.7875 9.90973Z" fill="#F97316" />
                                            <path d="M23.2515 0H9.75008C9.33604 0 9 0.336035 9 0.750079V17.2518C9 17.6659 9.33604 18.0019 9.75008 18.0019H23.2515C23.6655 18.0019 24.0016 17.6659 24.0016 17.2518V0.750079C24.0016 0.336035 23.6655 0 23.2515 0ZM22.5014 16.5017H10.5002V1.50016H22.5014V16.5017Z" fill="#F97316" />
                                        </svg>

                                    </div>

                                    {/* Item Label */}
                                    <span className="text-[13px] md:text-[14px] lg:text-[18px] xl:text-[20px] 3xl:text-[23px] font-bold text-[#1F2937] tracking-tight">
                                        {item.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
