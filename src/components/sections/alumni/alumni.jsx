import Link from "next/link";
import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import { buttonVariants } from "@/components/ui/button";
import AiAcademicMenubar from "../ai-enabled/Ai-academicMenubar";
import LibrarySidebar from "../ai-enabled/library/library-sidemenubar";

export default function Alumni({ data }) {
  return (
    <section className="w-full h-auto py-[20px_40px] sm:py-[30px_50px] lg:py-[60px_80px] 2xl:py-[70px_100px] 3xl:py-[90px_30px] block relative z-0">
      <div className="container">
        <div className="[--width:100%] lg:[--width:210px] 2xl:[--width:270px] 3xl:[--width:330px] w-full h-auto flex flex-wrap">
          <div className="w-(--width)">
            <LibrarySidebar data={data?.sidebar} />
            <AiAcademicMenubar
              className="[&>div]:px-0 block lg:hidden"
              data={data?.sidebar}
            />
          </div>
          <div className="w-full lg:w-[calc(100%-var(--width))] lg:pl-3.75 2xl:pl-5 3xl:pl-7.5">
            <div className="w-full h-auto p-[20px_20px_30px_20px] sm:p-[30px_30px_60px_30px] 2xl:p-[40px_40px_70px_40px] 3xl:p-[50px_50px_80px_50px] border border-black/10 rounded-[10px] sm:rounded-[13px] 2xl:rounded-[20px] overflow-hidden">
              <div className="[--image-size:180px] sm:[--image-size:220px] lg:[--image-size:280px] xl:[--image-size:330px] 2xl:[--image-size:390px] 3xl:[--image-size:500px] w-full h-auto mb-3.75 sm:mb-5 lg:mb-7.5 2xl:mb-10 3xl:mb-12.5 flex sm:items-center flex-col sm:flex-row">
                <div className="w-full sm:w-[calc(100%-var(--image-size))] sm:pr-5 lg:pr-15 2xl:pr-17.5 3xl:pr-22.5 max-sm:mb-3.75">
                  <Heading>{data?.title}</Heading>
                </div>
                <div className="w-(--image-size) h-auto aspect-500/160 overflow-hidden block">
                  <Image
                    src={data?.logo?.url}
                    alt={data?.logo?.alternativeText}
                    width={500}
                    height={160}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div
                className="w-full h-auto [&_p:last-child]:mb-0 [&_p]:mb-2.5 sm:[&_p]:mb-3.75 2xl:[&_p]:mb-5 3xl:[&_p]:mb-7.5"
                dangerouslySetInnerHTML={{ __html: data?.alumniContent || "" }}
              />
              <Link
                href={data?.button?.link || "#"}
                className={buttonVariants({
                  variant: "default",
                  size: "default",
                  className:
                    "my-5 sm:my-[30px_20px] 2xl:my-[40px_30px] 3xl:my-[50px_40px]",
                })}
              >
                {data?.button?.label}
                <Image
                  src="/images/icon-btn.svg"
                  alt="home-btn"
                  width={15}
                  height={15}
                  className="size-3.75"
                  data-icon="inline-end"
                />
              </Link>
              <div className="w-full h-auto block">
                <div className="text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-semibold text-[#212121] mb-2.5 2xl:mb-3.75">
                  {data?.alumniTitle}
                </div>
                <div
                  className="[&_li]:text-xs 2xl:[&_li]:text-sm 3xl:[&_li]:text-lg text-[#4A5565] w-full h-auto mb-3.75 sm:mb-5 2xl:mb-7.5 [&_ul]:pl-3.75 3xl:[&_ul]:pl-5 [&_ul]:space-y-1.25 [&_li]:list-disc sm:gap-3.75 gap-3.75 lg:gap-5 2xl:gap-6.25 3xl:gap-8.75 flex flex-col"
                  dangerouslySetInnerHTML={{
                    __html: data?.alumniContentList || "",
                  }}
                />
                <div className="w-full h-full p-[10px_20px] sm:p-[40px_30px] lg:p-[50px_40px] 2xl:p-[70px_50px] 3xl:p-[80px_70px] bg-[#212121] rounded-md 2xl:rounded-[10px] overflow-hidden block relative z-0">
                  <Image
                    src={data?.missionVisionImage?.url}
                    alt={data?.missionVisionImage?.alternativetext}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="w-full h-auto sm:-mx-5 lg:-mx-10 2xl:-mx-12.5 flex flex-wrap">
                    {data?.misionVision?.map((item) => (
                      <div
                        key={item?.id}
                        className="w-full sm:w-1/2 h-auto max-sm:py-6.25 sm:px-5 lg:px-15 2xl:px-17.5 block relative z-0 last:before:hidden before:content-[''] before:w-full sm:before:w-px before:h-px sm:before:h-full before:bg-linear-to-r sm:before:bg-linear-to-b before:from-transparent before:via-white/80 before:to-transparent before:absolute before:z-1 before:inset-[auto_0_0_0] sm:before:inset-[0_0_0_auto]"
                      >
                        <div className="w-full h-full block">
                          <div className="w-12.5 2xl:w-15 3xl:w-17.5 h-auto aspect-70/60 2xl:p-0.75 mb-2.5 sm:mb-3.75 lg:mb-5 2xl:mb-6.25 3xl:mb-7.5 bg-white/20 rounded-[6px] 2xl:rounded-[10px] backdrop-blur-[2px] shadow-[inset_1px_1px_1px_rgba(255,255,255,0.7),inset_-1px_-1px_1px_rgba(0,0,0,0.3),inset_1px_1px_1px_rgba(255,255,255,0.2)] overflow-hidden flex items-center justify-center">
                            <Image
                              src={item?.icon?.url}
                              alt={item?.icon?.alternativeText}
                              width={45}
                              height={45}
                              className="w-full h-full p-2.5 object-contain"
                            />
                          </div>
                          <div className="text-base 2xl:text-xl 3xl:text-[25px] leading-[1.1] font-bold text-white mb-2.5 sm:mb-3.75 3xl:mb-5">
                            {item?.title}
                          </div>
                          <div className="text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.4] font-normal text-white">
                            {item?.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
