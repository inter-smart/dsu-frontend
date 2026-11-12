
// "use client";

// import Image from "next/image";
// import { BlocksRenderer } from "@strapi/blocks-react-renderer";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Autoplay } from "swiper/modules";

// export default function HistoryPillers({ data }) {
//     return (
//         <section className="relative py-[40px] xl:py-[50px] 2xl:py-[60px] 3xl:py-[80px] dark:bg-[#101010]">
//             <div className="container">
//                 <div className="text-center m-auto max-w-[950px]">
//                     <h2 className="cmn_Title text-[#212121] dark:text-white mb-[15px] xl:mb-[25px] 2xl:mb-[35px] 3xl:mb-[45px]">
//                         {data?.title} <br />
//                         {data?.titleContinuation}
//                     </h2>
//                     <div className="text_1 leading-[1.2] mb-[25px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px] [&_p]:mb-[20px] [&_p]:xl:mb-[25px] [&_p]:2xl:mb-[30px] [&_p]:3xl:mb-[40px]   typography">
//                         <BlocksRenderer content={data?.description || []} />
//                     </div>
//                 </div>

//                 <div className="w-full">
//                     <Swiper
//                         modules={[Autoplay]}
//                         slidesPerView={1}
//                         spaceBetween={10}
//                         speed={500}
//                         autoplay={{
//                             delay: 3000,
//                             disableOnInteraction: false,
//                             pauseOnMouseEnter: true,
//                         }}
//                         breakpoints={{
                            
//                             478: {
//                                 slidesPerView: 1.3,
//                                 spaceBetween: 15,
//                             },
//                             578: {
//                                 slidesPerView: 2,
//                                 spaceBetween: 15,
//                             },
//                             768: {
//                                 slidesPerView: 2,
//                                 spaceBetween: 20,
//                             },
//                         }}
//                         className="w-full"
//                     >
//                         {data?.items?.map((itemList, idx) => (
//                             <SwiperSlide key={idx} className="!h-auto" >
//                                 <div className="relative w-full h-full group p-[20px] lg:p-[25px_30px] xl:p-[30px_35px] 2xl:p-[35px_40px] 3xl:p-[45px_50px] border border-[#f97416bb] dark:border-white/10 rounded-[10px] dark:bg-[#18191B]">
//                                     <div className="flex flex-wrap gap-[12px] 2xl:gap-[15px] 3xl:gap-[20px] items-center mb-[10px] lg:mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]">
//                                         {itemList.image && (
//                                             <div className="w-[75px] xl:w-[95px] 2xl:w-[112px] 3xl:w-[140px] h-[75px] xl:h-[95px] 2xl:h-[112px] 3xl:h-[140px] rounded-full flex items-center justify-center">
//                                                 <Image src={itemList.image} width={140} height={140} alt={itemList.name || ""} />
//                                             </div>
//                                         )}
//                                         <div className="w-[calc(100%-75px)] xl:w-[calc(100%-95px)] 2xl:w-[calc(100%-112px)] 3xl:w-[calc(100%-140px)]">
//                                             <div className="text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] 3xl:text-[28px] text-[#212121] dark:text-white font-bold">{itemList.name}</div>
//                                             <div className="text_1">{itemList.designation}</div>
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <BlocksRenderer content={Array.isArray(itemList.description) ? itemList.description : []} />
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>
//             </div>
//         </section>
//     )
// }
"use client";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function HistoryPillers({ data }) {
    const items = Array.isArray(data?.items) ? data.items : [];

    return (
        <section className="relative py-[40px] xl:py-[50px] 2xl:py-[60px] 3xl:py-[80px] bg-white dark:bg-[#101010]">
            <div className="container">
                {/* heading + intro */}
                <div className="text-center m-auto max-w-[950px]">
                    <h2 className="cmn_Title text-[#212121] dark:text-white mb-[15px] xl:mb-[25px] 2xl:mb-[35px] 3xl:mb-[45px]">
                        {data?.title} <br />
                        {data?.titleContinuation}
                    </h2>
                    <div className="text_1 leading-[1.2] mb-[25px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px] [&_p]:mb-[20px] [&_p]:xl:mb-[25px] [&_p]:2xl:mb-[30px] [&_p]:3xl:mb-[40px] typography">
                        <BlocksRenderer content={data?.description || []} />
                    </div>
                </div>

                {/* one person after another */}
                <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-[20px] xl:max-w-[1180px] xl:gap-[26px] 2xl:max-w-[1280px] 2xl:gap-[32px] 3xl:max-w-[1500px] 3xl:gap-[40px]">
                    {items.map((itemList, idx) => {
                        const isReversed = idx % 2 === 1;
                        const hasText =
                            Array.isArray(itemList?.description) && itemList.description.length > 0;

                        return (
                            <article
                                key={idx}
                                data-reveal
                                className={`group relative overflow-hidden rounded-[14px] border border-[#F97316]/30 bg-gradient-to-br from-[#FFF8EE] to-white p-[18px] shadow-[0_8px_24px_rgba(120,70,20,0.08)] transition-shadow duration-500 hover:shadow-[0_14px_36px_rgba(220,38,38,0.14)] sm:p-[24px] lg:flex lg:items-start lg:gap-[32px] xl:rounded-[16px] xl:gap-[40px] xl:p-[32px] 2xl:gap-[50px] 2xl:p-[38px] 3xl:gap-[64px] 3xl:p-[50px] dark:border-white/10 dark:from-[#18191B] dark:to-[#18191B] dark:shadow-none ${
                                    isReversed ? "lg:flex-row-reverse" : ""
                                }`}
                            >
                                {/* soft brand glow in the corner */}
                                <span
                                    aria-hidden="true"
                                    className={`pointer-events-none absolute -top-[120px] h-[220px] w-[220px] rounded-full bg-[#F97316]/10 blur-3xl dark:bg-[#F97316]/5 ${
                                        isReversed ? "-left-[100px]" : "-right-[100px]"
                                    }`}
                                />

                                {/* photo with offset gradient frame */}
                                {itemList?.image && (
                                    <div className="relative mx-auto mb-[22px] w-full max-w-[190px] shrink-0 sm:max-w-[220px] lg:mx-0 lg:mb-0 lg:w-[210px] lg:max-w-none xl:w-[250px] 2xl:w-[290px] 3xl:w-[350px]">
                                        <span
                                            aria-hidden="true"
                                            className={`absolute inset-0 rounded-[12px] bg-gradient-to-br from-[#DC2626] to-[#F97316] xl:rounded-[14px] ${
                                                isReversed
                                                    ? "-translate-x-[8px] translate-y-[8px] xl:-translate-x-[7px] xl:translate-y-[8px]"
                                                    : "translate-x-[8px] translate-y-[8px] xl:translate-x-[7px] xl:translate-y-[8px]"
                                            }`}
                                        />
                                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[12px] bg-[#FFF1E0] ring-1 ring-black/5 xl:rounded-[14px] dark:bg-white/10 dark:ring-white/10">
                                            <Image
                                                src={itemList.image}
                                                width={350}
                                                height={438}
                                                alt={itemList.name || ""}
                                                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* name, role, story */}
                                <div className="relative min-w-0 flex-1 text-center lg:text-left">
                                    <h3 className="text-[18px] font-bold leading-[1.2] text-[#212121] sm:text-[21px] xl:text-[25px] 2xl:text-[29px] 3xl:text-[37px] dark:text-white">
                                        {itemList?.name}
                                    </h3>

                                    {itemList?.designation && (
                                        <div className="mt-[6px] text-[13px] text-[#6A7282] xl:mt-[8px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px] dark:text-white/60">
                                            {itemList.designation}
                                        </div>
                                    )}

                                    {hasText && (
                                        <div className="mt-[14px] border-t border-[#F97316]/25 pt-[14px] text-left xl:mt-[18px] xl:pt-[18px] 3xl:mt-[24px] 3xl:pt-[24px] dark:border-white/10 [&_p]:mb-[10px] [&_p]:text-[13px] [&_p]:leading-[1.6] [&_p]:text-[#4A5565] xl:[&_p]:mb-[14px] xl:[&_p]:text-[14px] 2xl:[&_p]:text-[15px] 3xl:[&_p]:text-[18px] dark:[&_p]:text-[#9CA3AF] [&_p:last-child]:mb-0">
                                            <BlocksRenderer content={itemList.description} />
                                        </div>
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}