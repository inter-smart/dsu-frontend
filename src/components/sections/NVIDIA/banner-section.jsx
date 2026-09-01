import Image from "next/image";
import Link from "next/link";
export default function BannerSection({ data }) {
    const isVideo = data?.heroMedia?.mime?.includes("video");

    return (
        <section className="relative block h-[500px] w-full md:h-[600px] lg:h-screen">
            {/* Background Media */}
            <div className="absolute inset-0 z-0 h-full w-full">
                <div className="absolute inset-0 z-10 bg-black/40" />

                {isVideo ? (
                    <video autoPlay muted loop playsInline className="h-full w-full object-cover">
                        <source src={data?.heroMedia?.url} type={data?.heroMedia?.mime} />
                    </video>
                ) : (
                    data?.heroMedia?.url && (
                        <Image
                            src={data.heroMedia.url}
                            alt={data?.heroMedia?.alternativeText || data?.title || "Hero image"}
                            width={1920}
                            height={750}
                            priority
                            className="h-full w-full object-cover"
                        />
                    )
                )}
            </div>
            <div className="container flex items-end h-full py-[45px]">
                <div className="flex items-end justify-between flex-wrap relative z-10 w-full gap-[10px]">
                    <div className="w-auto lg:max-w-[420px] xl:max-w-[515px] 2xl:max-w-[605px] 3xl:max-w-[780px]">
                        <div className="flex items-center gap-[10px] mb-[5px]">
                            <span className="text-[16px] text-white font-bold ">Powered by :</span>
                            <Image src={data?.poweredBy?.logo?.url} width={95} height={75} alt={data?.powerBy?.logo?.alternativeText} />
                        </div>
                        <div className="text-[20px] md:text-[26px] lg:text-[32px] xl:text-[41px] 2xl:text-[48px] 3xl:text-[60px] text-white font-bold mb-[8px] leading-tight">
                            {data?.heading}
                        </div>
                        <div className="text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[23px] text-white font-normal">
                            {data?.subheading}
                        </div>
                    </div>
                    <div className="w-auto">
                        <div className="flex items-center gap-[10px] 2xl:gap-[15px] 3xl:gap-[20px] mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]">
                            {data?.stats.map((item) => (
                                <div className="w-auto h-full ">
                                    <div className="w-full h-full text-center min-w-[75px] xl:min-w-[75px] 2xl:min-w-[85px] 3xl:min-w-[95px] bg-transparent backdrop-blur-lg border border-[rgba(255,255,255,0.2)] rounded-[10px] p-[12px] xl:p-[14px] 2xl:p-[15px] 3xl:p-[15px_20px]">
                                        <div className="text-[13px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[25px] text-white font-bold">
                                            {item.value}
                                        </div>
                                        <div className="text_1 text-white mb-0">{item.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href={data?.cta.url}
                            className="group relative lg:ml-auto flex h-[30px] w-fit min-w-[160px] items-center justify-center gap-[10px] overflow-hidden rounded-[6px] bg-gradient-to-r from-[#DC2626] to-[#F97316] text_1 font-bold capitalize text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)] xl:h-[35px] xl:min-w-[155px] 2xl:h-[40px] 2xl:min-w-[185px] 2xl:gap-[20px] 2xl:rounded-[4px] 3xl:h-[50px] 3xl:min-w-[230px] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full"
                        >
                            <span className="relative z-[1] transition-transform duration-300 group-hover:translate-x-[-2px]">
                                {data?.cta.text}
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


        </section>
    )
}
