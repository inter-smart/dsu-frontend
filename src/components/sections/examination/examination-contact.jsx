import Link from "next/link";
import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import ExaminationSidebar from "./examination-sidebar";

export default function ExaminationContact({ data, sidebar }) {
  return (
    <section className="w-full h-auto py-[20px_40px] sm:py-[30px_50px] lg:py-[60px_80px] 2xl:py-[70px_100px] 3xl:py-[90px_130px] block relative z-0">
      <div className="container">
        <div className="[--width:100%] lg:[--width:210px] 2xl:[--width:270px] 3xl:[--width:330px] w-full h-auto flex flex-wrap">
          <ExaminationSidebar data={sidebar} />
          <div className="w-full lg:w-[calc(100%-var(--width))] lg:pl-3.75 2xl:pl-5 3xl:pl-7.5">
            <div className="w-full h-auto p-[20px_20px_30px_20px] sm:p-[30px_30px_40px_30px] 2xl:p-[40px_40px_50px_40px] 3xl:p-[50px_20px_60px_50px] border border-black/10 rounded-[10px] sm:rounded-[13px] 2xl:rounded-[20px] overflow-hidden">
              <div className="w-full h-auto mb-5 sm:mb-6.25 md:mb-2.5">
                <Heading>{data?.title}</Heading>
              </div>
              <div className="[--gap:20px] sm:[--gap:30px] md:[--gap:20px] xl:[--gap:30px] 2xl:[--gap:40px] 3xl:[--gap:70px] w-full h-auto md:mx-[calc(var(--gap)*-1)_-10px] 2xl:mx-[calc(var(--gap)*-1)_-20px] flex flex-wrap">
                {data?.contacts?.map((item) => (
                  <div
                    key={item?.id}
                    className="w-full md:w-1/2 h-auto max-md:py-(--gap) md:p-[10px_10px_10px_var(--gap)] 2xl:p-[20px_20px_20px_var(--gap)] first:max-md:pt-0 max-md:not-last:border-b md:odd:border-r border-black/10 block"
                  >
                    <div className="w-full h-full block">
                      {data?.title && (
                        <div className="text-base sm:text-lg lg:text-xl 2xl:text-[25px] 3xl:text-[32px] leading-[1.2] font-semibold text-[#212121] mb-2.5 sm:mb-3.75 lg:mb-5 2xl:mb-7.5 3xl:mb-10">
                          {item?.title}
                        </div>
                      )}
                      <div className="w-full h-auto mb-5 lg:mb-7.5 2xl:mb-10 3xl:mb-15">
                        <div className="text-base lg:text-lg 2xl:text-[22px] 3xl:text-[28px] leading-[1.2] font-semibold text-[#4A5565] mb-1.25 3xl:mb-2.5">
                          {item?.addressDetail?.title}
                        </div>
                        <div
                          className="text-[13px] 2xl:text-[15px] 3xl:text-lg leading-[1.8] font-normal text-[#4A5565]"
                          dangerouslySetInnerHTML={{
                            __html: item?.addressDetail?.address ?? "",
                          }}
                        />
                      </div>
                      <div className="w-full h-auto mb-5 2xl:mb-7.5 block">
                        {item?.contactDetail?.map((item) => (
                          <div
                            key={item?.id}
                            className="w-full h-auto not-last:mb-3.75 lg:not-last:mb-5 2xl:not-last:mb-7.5 block"
                          >
                            <div className="[--icon-size:40px] sm:[--icon-size:50px] lg:[--icon-size:60px] 2xl:[--icon-size:70px] 3xl:[--icon-size:80px] w-full h-full flex sm:items-center">
                              {item?.icon && (
                                <div className="w-(--icon-size) h-auto aspect-square p-2.5 sm:p-3.25 lg:p-4.25 2xl:p-5 3xl:p-6.25 bg-neutral-400/10 rounded-[5px] overflow-hidden flex items-center justify-center">
                                  <Image
                                    src={item?.icon?.url}
                                    alt={item?.icon?.alternativeText}
                                    width={35}
                                    height={35}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                              )}
                              <div
                                className={
                                  item?.icon
                                    ? "w-[calc(100%-var(--icon-size))] pl-2.5 sm:pl-3.75 lg:pl-5 2xl:pl-7.5"
                                    : "w-full h-auto block"
                                }
                              >
                                {item?.title && (
                                  <div className="text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-medium text-[#212121] mb-0.5 sm:mb-1.25 2xl:mb-2.5">
                                    {item?.title}
                                  </div>
                                )}
                                <div className="w-full h-auto block">
                                  {item?.details?.map((detail) => (
                                    <div
                                      key={detail?.id}
                                      className="w-full h-auto 2xl:not-last:mb-1.25 3xl:not-last:mb-2.5 block"
                                    >
                                      {detail?.label && (
                                        <span className="text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-medium text-[#4A5565]">
                                          {detail?.label} -{" "}
                                        </span>
                                      )}
                                      <Link
                                        href={
                                          detail?.type === "call"
                                            ? `tel:${detail?.value}`
                                            : detail?.type === "email"
                                              ? `mailto:${detail?.value}`
                                              : "#"
                                        }
                                        className="text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-medium text-[#4A5565] transition-colors duration-300 hover:text-(--basecolor2)"
                                      >
                                        {detail?.value}
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      {item?.contactTime && (
                        <div className="text-sm 2xl:text-base 3xl:text-xl leading-[1.2] font-semibold underline bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent">
                          Contact Time: {item?.contactTime}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}