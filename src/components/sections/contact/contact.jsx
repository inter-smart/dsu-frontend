import Link from "next/link";
import Image from "next/image";

export default function Contact({ data }) {
  return (
    <section className="[--text-color:#212121] w-full h-auto py-10 sm:py-12.5 lg:py-17.5 2xl:py-22.5 3xl:py-27.5 bg-linear-to-br from-[#EFF6FF] to-[#F9FAFB] block">
      <div className="container">
        <div className="w-full h-auto md:-mx-1.25 2xl:-mx-2.5 flex flex-wrap">
          {data?.contact?.map((item) => (
            <div
              key={item?.id}
              className="w-full md:w-1/2 h-auto p-1.25 2xl:p-2.5 block"
            >
              <div className="w-full h-full p-[20px_15px_15px_15px] sm:p-[30px_25px_20px_20px] lg:p-[40px_20px_30px_25px] 2xl:p-[50px_40px_40px_30px] 3xl:p-[60px_50px_50px_40px] bg-white border border-black/10 rounded-[5px] sm:rounded-[7px] 2xl:rounded-[10px] overflow-hidden block">
                <div className="w-full h-auto mb-2.5 lg:mb-3.75 3xl:mb-5">
                  <div className="[--icon-size:30px] sm:[--icon-size:35px] lg:[--icon-size:40px] 2xl:[--icon-size:50px] 3xl:[--icon-size:60px] w-full h-auto mb-2.5 lg:mb-3.75 2xl:mb-5 3xl:mb-7.5 flex items-center">
                    <div className="w-(--icon-size) h-auto aspect-square overflow-hidden flex items-center justify-center">
                      <Image
                        src={item?.icon?.url}
                        alt={item?.icon?.alternativeText || "Icon"}
                        width={60}
                        height={60}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="w-[calc(100%-var(--icon-size))] pl-2.5 lg:pl-3.75 2xl:pl-5 3xl:pl-6.25">
                      <div className="text-lg sm:text-xl lg:text-[27px] 2xl:text-[32px] 3xl:text-[40px] leading-[1.1] font-bold text-(--text-color)">
                        {item?.mainTitle}
                      </div>
                    </div>
                  </div>
                  <div className="text-base sm:text-lg lg:text-xl 2xl:text-[25px] 3xl:text-[32px] leading-[1.1] font-semibold text-(--text-color) mb-2.5 2xl:mb-3.75 3xl:mb-5">
                    {item?.title}
                  </div>
                  <div className="text-[13px] 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-normal text-[#4A5565] mb-2.5 lg:mb-3.75 3xl:mb-5">
                    {item?.address}
                  </div>
                  {item?.directionLink && (
                    <Link
                      href={item?.directionLink || "/"}
                      aria-label="Get Directions"
                      className="group w-full h-auto flex items-center"
                    >
                      <div className="w-6.25 2xl:w-7.5 3xl:w-8.75 h-auto aspect-35/25 overflow-hidden flex items-center justify-center">
                        <Image
                          src={"/images/direction-icon.svg"}
                          alt="Directions"
                          width={35}
                          height={25}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-sm 2xl:text-[17px] 3xl:text-xl leading-[1.1] font-semibold bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit pl-1.75 2xl:pl-2.5 transition-all duration-300 group-hover:underline">
                        Get Directions
                      </div>
                    </Link>
                  )}
                </div>
                <div className="w-full h-auto py-3.75 sm:py-5 2xl:py-7.5 3xl:py-8.75 -mx-1.25 border-y border-black/10 flex flex-wrap">
                  {item?.contactDetails?.map((item, index) => (
                    <div
                      key={item?.id || index}
                      className={`cn h-auto py-1.25 sm:p-[7px_5px] 2xl:p-[10px_5px] flex items-center ${
                        index === 0 ? "w-full" : "w-full lg:w-1/2"
                      }`}
                    >
                      <div className="[--icon-size:35px] lg:[--icon-size:40px] 2xl:[--icon-size:50px] 3xl:[--icon-size:60px] group w-full h-full flex items-center">
                        <div className="w-(--icon-size) h-auto aspect-square p-1.75 lg:p-2 2xl:p-2.75 3xl:p-3.25 bg-[#BABABA]/10 rounded-[5px] border border-black/10 overflow-hidden flex items-center justify-center transition-colors duration-300 group-hover:bg-(--basecolor2)/20 group-hover:border-(--basecolor2)">
                          <Image
                            src={
                              item?.icon?.url || "/images/icon-placeholder.svg"
                            }
                            alt={item?.icon?.alternativeTxt || "Icon"}
                            width={60}
                            height={60}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="w-[calc(100%-var(--icon-size))] pl-2.5">
                          <div className="text-[13px] 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-medium text-[#212121] mb-1.25 2xl:mb-2.5">
                            {item?.label}
                          </div>
                          <div className="text-[13px] 2xl:text-[15px] 3xl:text-lg leading-snug font-medium text-[#4A5565] flex flex-wrap items-center gap-y-1">
                            {item?.values?.map((value, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center"
                              >
                                <Link
                                  href={
                                    item?.type === "email"
                                      ? `mailto:${value}`
                                      : `tel:${value.replace(/\s+/g, "")}`
                                  }
                                  className="transition-colors hover:underline hover:text-(--basecolor)"
                                >
                                  {value}
                                </Link>
                                {index < item.values.length - 1 && (
                                  <span className="mx-1 text-[#4A5565]">
                                    {item?.type === "email" ? "|" : "/"}
                                  </span>
                                )}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full h-auto mt-3.75 sm:mt-5 lg:mt-6.25 2xl:mt-7.5 3xl:mt-8.75 block">
                  <div className="w-full h-auto mb-2.5 2xl:mb-3.75 3xl:mb-5">
                    <div className="text-base sm:text-lg lg:text-xl 2xl:text-[25px] 3xl:text-[32px] leading-[1.1] font-semibold text-(--text-color) mb-2.5 2xl:mb-3.75 3xl:mb-5">
                      {item?.infoCenter?.title}
                    </div>
                    <div className="text-[13px] 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-normal text-[#4A5565] mb-2.5 lg:mb-3.75 3xl:mb-5">
                      {item?.infoCenter?.address}
                    </div>
                    {item?.infoCenter?.directionLink && (
                      <Link
                        href={item?.infoCenter?.directionLink || "/"}
                        aria-label="Get Directions"
                        className="group w-full h-auto flex items-center"
                      >
                        <div className="w-6.25 2xl:w-7.5 3xl:w-8.75 h-auto aspect-35/25 overflow-hidden flex items-center justify-center">
                          <Image
                            src={"/images/direction-icon.svg"}
                            alt="Directions"
                            width={35}
                            height={25}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-sm 2xl:text-[17px] 3xl:text-xl leading-[1.1] font-semibold bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit pl-1.75 2xl:pl-2.5 transition-all duration-300 group-hover:underline">
                          Get Directions
                        </div>
                      </Link>
                    )}
                  </div>
                  <div className="w-full h-auto flex flex-wrap">
                    {item?.infoCenter?.contactDetails?.map((item) => (
                      <div
                        key={item?.id}
                        className="w-full h-auto py-1.25 sm:py-1.75 2xl:py-2.5 block"
                      >
                        <div className="[--icon-size:35px] lg:[--icon-size:40px] 2xl:[--icon-size:50px] 3xl:[--icon-size:60px] group w-full h-full flex items-center">
                          <div className="w-(--icon-size) h-auto aspect-square p-1.75 lg:p-2 2xl:p-2.75 3xl:p-3.25 bg-[#BABABA]/10 rounded-[5px] border border-black/10 overflow-hidden flex items-center justify-center transition-colors duration-300 group-hover:bg-(--basecolor2)/20 group-hover:border-(--basecolor2)">
                            <Image
                              src={
                                item?.icon?.url ||
                                "/images/icon-placeholder.svg"
                              }
                              alt={item?.icon?.alternativeTxt || "Icon"}
                              width={60}
                              height={60}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="w-[calc(100%-var(--icon-size))] pl-2.5">
                            <div className="text-[13px] 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-medium text-[#212121] mb-1.25 2xl:mb-2.5">
                              {item?.label}
                            </div>
                            <div className="text-[13px] 2xl:text-[15px] 3xl:text-lg leading-snug font-medium text-[#4A5565] flex flex-wrap items-center gap-y-1">
                              {item?.values?.map((value, index) => (
                                <span
                                  key={index}
                                  className="inline-flex items-center"
                                >
                                  <Link
                                    href={
                                      item?.type === "email"
                                        ? `mailto:${value}`
                                        : `tel:${value.replace(/\s+/g, "")}`
                                    }
                                    className="transition-colors hover:underline hover:text-(--basecolor)"
                                  >
                                    {value}
                                  </Link>
                                  {index < item.values.length - 1 && (
                                    <span className="mx-1 text-[#4A5565]">
                                      {item?.type === "email" ? "|" : "/"}
                                    </span>
                                  )}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
