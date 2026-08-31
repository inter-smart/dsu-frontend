import Image from "next/image";

export default function AboutVision({ data }) {
    const media = data?.heroMedia;
    const values = data?.values;
    return (
        <section className="relative py-[40px] lg:py-[40px_50px] xl:py-[40px_60px] 2xl:py-[50px_80px] 3xl:py-[60px_100px] before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-black/40 before:z-10 before:pointer-events-none">
            <Image
                src={media?.url}
                alt={media?.alternativeText || "Vision"}
                fill
                priority
                className="object-cover absolute top-0 left-0 w-full "
                sizes="100vw"
            />
            <div className="container">
                <div className="flex gap-[10px] sm:gap-[40px] lg:max-w-[90%] relative z-10 max-md:flex-wrap">
                    <div className="w-full md:w-1/2 relative after:absolute after:content-[''] after:top-0 after:bottom-0 after:right-0 after:h-full after:m-auto after:w-[1px]
                        after:bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,white_51.44%,rgba(153,153,153,0)_100%)] max-md:after:hidden">
                        <div className="w-full md:pt-[30px] xl:pt-[40px] 2xl:pt-[60px] 3xl:pt-[80px]">
                            <div className="text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-[#F57F2A] uppercase relative pl-[40px] mb-[22px] before:absolute before:content-[''] 
                                    before:top-0 before:left-0 before:bottom-0 before:m-auto before:h-[4px] 
                                    before:w-[30px] before:bg-gradient-to-r before:from-[#DC2626]
                                    before:to-[#F97316] ">
                                {data.label}
                            </div>
                            <h2 className="mb-[25px] md:mb-[55px] 2xl:mb-[90px] 3xl:mb-[120px] text-[25px] xl:text-[36px] 2xl:text-[44px] 3xl:text-[55px] font-bold leading-[30px]
                                xl:leading-[40px] 2xl:leading-[50px] 3xl:leading-[60px] text-white max-w-[230px] xl:max-w-[300px] 2xl:max-w-[400px] 3xl:max-w-[510px]">
                                    {data.heading}
                            </h2>

                            <div className="flex max-sm:flex-wrap gap-[10px] sm:gap-[20px] 3xl:gap-[30px]">
                                {data?.items.map((item, idx) => (
                                    <div className="w-full sm:w-1/2 max-sm:border border-white/20 max-sm:p-[20px] max-sm:rounded-[20px] max-sm:after:hidden relative after:absolute after:content-[''] after:top-0 after:bottom-0 after:right-0 after:h-full after:m-auto after:w-[1px]
                                     after:bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,white_51.44%,rgba(153,153,153,0)_100%)]  last:[&::after]:hidden " key={idx}>
                                        <div className="w-full h-full relative [&_p]:text-white group">
                                            <div className="w-[40px] h-[35px] xl:w-[52px] xl:h-[42px] 2xl:w-[62px] 2xl:h-[52px] 3xl:h-[65px] 3xl:w-[78px] bg-white/20 flex border border-white rounded-[6px] xl:rounded-[7px] 2xl:rounded-[8px] 3xl:rounded-[10px] flex items-center justify-center mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]
                                            group-hover:bg-gradient-to-r group-hover:from-[#DC2626] group-hover:to-[#F97316]">
                                                <Image src={item.icon} width={78} height={65} alt={item.alt} className="max-w-[19px] xl:max-w-[21px] 2xl:max-w-[25px] 3xl:max-w-[34px] " />
                                            </div>
                                            <div className="w-full max-w-[95%]">
                                                <div className="text-[13px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[25px] text-white font-bold mb-[8px]">
                                                    {item.title}
                                                </div>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="w-full h-full relative [&_p]:text-white group max-sm:border border-white/20 max-sm:p-[20px] max-sm:rounded-[20px] ">
                            <div className="w-[40px] h-[35px] xl:w-[52px] xl:h-[42px] 2xl:w-[62px] 2xl:h-[52px] 3xl:h-[62px] 3xl:w-[78px] flex border border-white bg-white/20 rounded-[6px] xl:rounded-[7px] 2xl:rounded-[8px] 3xl:rounded-[10px] flex items-center justify-center mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]
                            group-hover:bg-gradient-to-r group-hover:from-[#DC2626] group-hover:to-[#F97316]">
                                <Image src={values.icon} width={78} height={65} alt={values.alt} className="max-w-[19px] xl:max-w-[21px] 2xl:max-w-[25px] 3xl:max-w-[34px] " />
                            </div>
                            <div className="w-full max-w-[95%]">
                                <div className="text-[13px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[25px]   text-white font-bold mb-[15px] md:mb-[20px] xl:mb-[25px] 2xl:mb-[35px] 3xl:mb-[40px]">
                                    {values.title}
                                </div>
                                <p>{values.description}</p>
                                {values.principles.map((item, idx) => (
                                    <div className="w-full mb-[20px] [&_p]:font-normal" key={idx}>
                                        <div className="text-1 text-white font-bold mb-[5px]">
                                            {item.title}
                                        </div>
                                        <p>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
