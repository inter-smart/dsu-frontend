"use client";

import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function AboutWelcome({ data }) {
  const isVideo = data?.media?.type === "video";

  return (
    <section className="bg-white py-[40px] 2xl:py-[50px] 3xl:py-[70px]">
      <div className="container">
        <div className="flex max-lg:flex-wrap gap-[15px]">
          {/* Left Content */}
          <div className="w-full lg:w-[calc(100%-280px)] xl:w-[calc(100%-320px)] 2xl:w-[calc(100%-350px)] 3xl:w-[calc(100%-440px)]">
            <div className="flex flex-wrap w-full h-full max-sm:gap-[15px]">
              {/* Title & Description */}
              <div className="w-full sm:w-1/2 lg:w-[calc(100%-360px)] xl:w-[calc(100%-440px)] 2xl:w-[calc(100%-530px)] 3xl:w-[calc(100%-665px)] flex items-center">
                <div className="sm:max-w-[90%] lg:max-w-[280px] xl:max-w-[350px] 2xl:max-w-[420px] 3xl:max-w-[520px]">
                  {data?.title && (
                    <h2 className="mb-[15px] 2xl:mb-[25px] 3xl:mb-[30px] text-[25px] xl:text-[36px] 2xl:text-[44px] 3xl:text-[55px] font-bold leading-[30px] xl:leading-[40px] 2xl:leading-[50px] 3xl:leading-[60px] text-black">
                      {data.title}
                    </h2>
                  )}

                  {data?.description && (
                    <div className="text_1 leading-[1.2] text-[#4A5565]">
                      <BlocksRenderer content={data.description} />
                    </div>
                  )}
                </div>
              </div>

              {/* Main Image / Video */}
              <div className="w-full sm:w-1/2 lg:w-[360px] xl:w-[440px] 2xl:w-[530px] 3xl:w-[665px] ">
                <div className="aspect-[665/500] h-full w-full overflow-hidden rounded-[10px]">
                  {isVideo
                    ? data?.media?.video?.url && (
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="h-full w-full object-cover"
                        >
                          <source
                            src={data.media.video.url}
                            type={data.media.video.mime}
                          />
                        </video>
                      )
                    : data?.media?.image?.url && (
                        <Image
                          src={data.media.image.url}
                          alt={
                            data.media.image.alternativeText ||
                            data?.title ||
                            "About DSU"
                          }
                          width={1920}
                          height={750}
                          priority
                          className="h-full w-full object-cover"
                        />
                      )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Innovation Panel */}
          <div className="w-full lg:w-[280px] xl:w-[320px] 2xl:w-[350px] 3xl:w-[440px] shrink-0">
            <div className="relative  w-full h-full rounded-[10px] overflow-hidden">
              <Image
                src={data.innovationPanel.backgroundMedia.image.url}
                alt={
                  data.innovationPanel.backgroundMedia.image.alternativeText ||
                  data?.title ||
                  "About DSU"
                }
                width={1920}
                height={750}
                priority
                className="h-full w-full object-cover absolute top-0 left-0 "
              />
              <div className="w-full h-full p-[15px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[25px]">
                <div className="text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[37px] text-white font-bold leading-[25px] xl:leading-[30px] 2xl:leading-[35px] 3xl:leading-[40px] relative mb-[20px]">
                  {data.innovationPanel.title}
                </div>
                <div className="flex flex-col gap-[5px] lg:gap-[8px] xl:gap-[10px] 3xl:gap-[15px] max-w-[75%] w-full">
                  {data.innovationPanel.items.map((item, id) => (
                    <div
                      key={id}
                      className="w-full overflow-hidden rounded-[10px] bg-black/15 backdrop-blur-lg border border-white/20 p-[10px_12px] 2xl:p-[12px_15px] 3xl:p-[15px_20px] 
                                         transition-all duration-300 nth-child hover:bg-gradient-to-r from-[#DC2626] to-[#F97316] hover:border-white"
                    >
                      <div className="text-[13px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[25px] text-white font-bold mb-[5px]">
                        {item.title}
                      </div>
                      <div className="text_1 leading-[1.2] text-white [&_p]:text-white">
                        <BlocksRenderer content={item.description} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
