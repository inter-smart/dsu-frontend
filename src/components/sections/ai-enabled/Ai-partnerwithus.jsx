import Link from "next/link";

export default function AiPartnerwithus({ data }) {
    return (
        <section className="relative py-[40px] xl:py-[50px_60px] 2xl:py-[70px_90px] 3xl:py-[95px_105px] bg-[linear-gradient(135deg,#EFF6FF_0%,#F9FAFB_100%)]">
            <div className="container">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-auto lg:max-w-[65%] xl:max-w-[57%]">
                        <div className="cmn_Title">{data.heading}</div>
                        <p className="text_1">{data.description}</p>
                    </div>
                    <div className="w-auto">
                        <div className="flex flex-wrap gap-[10px]">
                            {data.buttons.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.link || "#!"}
                                    className={`group text_1 font-bold capitalize relative flex h-[30px] w-fit mt-[25px] 2xl:mt-[30px] min-w-[130px] 2xl:min-w-[175px] items-center justify-center gap-[10px] overflow-hidden rounded-[6px] transition-all duration-500 hover:-translate-y-[2px] xl:h-[35px] 2xl:h-[40px] 2xl:gap-[10px] 2xl:rounded-[4px] 3xl:h-[50px] px-[10px] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full ${
                                        item.type === "primary"
                                            ? "bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)] before:via-white/25"
                                            : "bg-white border border-[#F97316] bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit transition-opacity  hover:border-[#F97316] hover:shadow-[0_8px_25px_rgba(220,38,38,0.08)] before:via-[#F97316]/10"
                                    }`}
                                >
                                    <span className="relative z-[1] transition-transform duration-300">
                                        {item.label}
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
                                            <circle cx="5.12232" cy="0.919192" r="0.919192" fill={item.type === "primary" ? "white" : "#DC2626"} />
                                            <circle cx="5.12232" cy="4.33325" r="0.919192" fill={item.type === "primary" ? "white" : "#DC2626"} />
                                            <circle cx="5.12232" cy="7.74732" r="0.919192" fill={item.type === "primary" ? "white" : "#DC2626"} />
                                            <circle cx="9.32349" cy="4.33325" r="0.919192" fill={item.type === "primary" ? "white" : "#DC2626"} />
                                            <circle cx="0.919192" cy="4.33325" r="0.919192" fill={item.type === "primary" ? "white" : "#DC2626"} />
                                        </svg>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}