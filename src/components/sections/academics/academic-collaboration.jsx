"use client";
 
import Link from "next/link";

export default function AcademicCollaboration({ data }) {
    return (
        <section className="relative py-[20px_40px] lg:py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px] ">
            <div className="container">
                <div className="relative max-lg:flex max-lg:flex-col-reverse  after:content-[''] after:table after:clear-both ">
                    <div className="w-full lg:w-[580px] xl:w-[650px] 2xl:w-[750px] 3xl:w-[950px]  lg:float-right lg:pl-[40px]  ">
                        <div className="flex flex-wrap justify-center -m-[4px] lg:-m-[5px] xl:-m-[8px] 3xl:-m-[10px]">
                            {data?.stats.map((stat, idx) => (
                                <div className="p-[4px] lg:p-[5px] xl:p-[8px] 3xl:p-[10px] max-sm:flex-grow-1 w-1/3 sm:w-1/6 lg:w-1/3 lg:mb-[15px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[35px]">
                                    <div
                                        key={idx}
                                        className="bg-white  border border-[rgba(249,115,22,0.3)] text-center rounded-[8px] w-full h-full
                                        p-[10px] sm:p-[12px] xl:p-[16px] flex flex-col justify-center 
                                        shadow-[0_2px_8px_rgba(0,0,0,0.03)] min-h-[70px] xl:min-[80px] 2xl:min-h-[90px] 3xl:min-h-[100px]"
                                    >
                                        <div className="text-[16px] sm:text-[18px] xl:text-[24px] 2xl:text-[28px] font-bold bg-gradient-to-r from-[#DC2626]  to-[#F97316]   bg-clip-text text-transparent leading-none mb-[4px] xl:mb-[6px]">
                                            {stat.value}
                                        </div>
                                        <div className="text_1">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full max-lg:mb-[20px]">
                        <div className="cmn_Title mb-[25px]">{data.heading}</div>
                        <p>{data.description}</p>
                        {data.cta && (
                            <Link href={data.cta.file.url}
                                className="group relative flex h-[30px] mt-[15px] w-fit min-w-[130px] items-center justify-center gap-[10px] overflow-hidden rounded-[4px] bg-gradient-to-r from-[#DC2626] to-[#F97316] text_1 font-bold capitalize text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)] xl:h-[35px]  2xl:h-[40px] 2xl:gap-[10px] 2xl:rounded-[4px] 3xl:h-[50px] px-[10px]  before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full"
                            >
                                <span className="relative z-[1] transition-transform duration-300  ">
                                    {data.cta.label}
                                </span>

                                <div className="relative z-[1] flex h-[13px] w-[15px] items-center justify-center transition-all duration-300 group-hover:translate-x-[4px] group-hover:scale-110">
                                    <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.44218 16.8096H2.48282C1.82434 16.8096 1.19282 16.5146 0.727202 15.9895C0.261582 15.4644 0 14.7523 0 14.0097V2.79984C0 2.05728 0.261582 1.34513 0.727202 0.820055C1.19282 0.294983 1.82434 0 2.48282 0L6.2746 0C6.82663 0.00215508 7.3624 0.21094 7.79783 0.593588L10.9654 3.36716C11.265 3.62815 11.5074 3.96333 11.6738 4.3468C11.8402 4.73027 11.9261 5.15176 11.925 5.57867V13.9835C11.9281 14.3533 11.8661 14.7202 11.7427 15.063C11.6193 15.4057 11.4369 15.7175 11.2061 15.9802C10.9752 16.243 10.7005 16.4516 10.3977 16.5939C10.095 16.7363 9.7702 16.8096 9.44218 16.8096ZM2.48282 1.11889C2.08748 1.11889 1.70834 1.29599 1.42879 1.61123C1.14924 1.92647 0.992197 2.35402 0.992197 2.79984V14.0097C0.992197 14.4555 1.14924 14.8831 1.42879 15.1983C1.70834 15.5136 2.08748 15.6907 2.48282 15.6907H9.44218C9.83752 15.6907 10.2167 15.5136 10.4962 15.1983C10.7758 14.8831 10.9328 14.4555 10.9328 14.0097V5.60494C10.9335 5.34826 10.8818 5.09484 10.7816 4.86436C10.6815 4.63387 10.5355 4.43252 10.3552 4.27593L7.18761 1.4971C6.92169 1.26291 6.59336 1.13703 6.25597 1.1399L2.48282 1.11889Z" fill="white" />
                                        <path d="M8.44189 6.16155H3.47624C3.40706 6.16912 3.33723 6.16029 3.27125 6.13562C3.20527 6.11094 3.14459 6.07098 3.09312 6.0183C3.04165 5.96561 3.00052 5.90137 2.97237 5.82969C2.94423 5.75802 2.92969 5.6805 2.92969 5.60211C2.92969 5.52372 2.94423 5.4462 2.97237 5.37452C3.00052 5.30285 3.04165 5.2386 3.09312 5.18592C3.14459 5.13323 3.20527 5.09327 3.27125 5.0686C3.33723 5.04393 3.40706 5.0351 3.47624 5.04267H8.44189C8.51108 5.0351 8.5809 5.04393 8.64688 5.0686C8.71286 5.09327 8.77354 5.13323 8.82501 5.18592C8.87648 5.2386 8.91761 5.30285 8.94576 5.37452C8.9739 5.4462 8.98844 5.52372 8.98844 5.60211C8.98844 5.6805 8.9739 5.75802 8.94576 5.82969C8.91761 5.90137 8.87648 5.96561 8.82501 6.0183C8.77354 6.07098 8.71286 6.11094 8.64688 6.13562C8.5809 6.16029 8.51108 6.16912 8.44189 6.16155Z" fill="white" />
                                        <path d="M8.44719 8.96679H3.48155C3.35827 8.9533 3.24386 8.88853 3.16061 8.78511C3.07737 8.68169 3.03125 8.54702 3.03125 8.40734C3.03125 8.26767 3.07737 8.133 3.16061 8.02958C3.24386 7.92615 3.35827 7.86139 3.48155 7.8479H8.44719C8.57047 7.86139 8.68489 7.92615 8.76813 8.02958C8.85138 8.133 8.89749 8.26767 8.89749 8.40734C8.89749 8.54702 8.85138 8.68169 8.76813 8.78511C8.68489 8.88853 8.57047 8.9533 8.44719 8.96679Z" fill="white" />
                                        <path d="M7.44844 14.0096H4.46719C4.07185 14.0096 3.6927 13.8325 3.41316 13.5173C3.13361 13.202 2.97656 12.7745 2.97656 12.3287C2.97656 11.8828 3.13361 11.4553 3.41316 11.14C3.6927 10.8248 4.07185 10.6477 4.46719 10.6477H7.44844C7.84378 10.6477 8.22292 10.8248 8.50247 11.14C8.78201 11.4553 8.93906 11.8828 8.93906 12.3287C8.93906 12.7745 8.78201 13.202 8.50247 13.5173C8.22292 13.8325 7.84378 14.0096 7.44844 14.0096ZM4.46719 11.7666C4.34391 11.7801 4.2295 11.8448 4.14625 11.9483C4.063 12.0517 4.01689 12.1864 4.01689 12.326C4.01689 12.4657 4.063 12.6004 4.14625 12.7038C4.2295 12.8072 4.34391 12.872 4.46719 12.8855H7.44844C7.57172 12.872 7.68613 12.8072 7.76937 12.7038C7.85262 12.6004 7.89874 12.4657 7.89874 12.326C7.89874 12.1864 7.85262 12.0517 7.76937 11.9483C7.68613 11.8448 7.57172 11.7801 7.44844 11.7666H4.46719Z" fill="white" />
                                    </svg>

                                </div>


                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
