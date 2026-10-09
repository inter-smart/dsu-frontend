"use client"; 
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function AdmissionTransportation({ data }) {
    return (
        <section className='relative py-[40px] xl:py-[50px] 2xl:py-[70px] 3xl:py-[90px] bg-white '>
            <div className="container">
                <div className="flex items-center gap-2 mb-2.5">
                    <span className="w-[20px] sm:w-[24px] 2xl:w-[28px] 3xl:w-[32px] h-[3px] bg-gradient-to-r from-[#DC2626] to-[#F97316] rounded-full" />
                    <span className="text-[11px] sm:text-[12px] 2xl:text-[13px] 3xl:text-[15px] font-normal uppercase tracking-[0.1em] bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent">
                        {data.eyebrow}
                    </span>
                </div>
                <h2 className='cmn_Title mb-[45px]'>
                    {data.heading}
                </h2> 
                {data.points.map((item,id) => (
                    <div className="w-full bg-white relative pl-[20px] lg:pl-[25px] mb-[30px] last-of-type:mb-0 after:absolute after:left-0 after:content-[''] after:top-0 after:h-full after:w-[5px] after:lg:w-[8px] after:bg-gradient-to-r after:from-[#DC2626] after:to-[#F97316]">
                        <div className="cmn_Txt mb-[12px]">{item.title}</div>
                        <p className="text_1">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
