"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BlocksRenderer } from "@/components/ui/blocks-renderer";
import { hasContent } from "@/lib/has-content";

export default function AboutWelcome({ data }) {
  // Hooks first: the panel cards light up one after another (same look as hover) while on screen; hover takes over.
  const panelRef = useRef(null);
  const [cycle, setCycle] = useState(0);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);
  const count = (Array.isArray(data?.innovationPanel?.items) ? data.innovationPanel.items : []).filter(
    (item) => item?.title,
  ).length;
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [count]);
  useEffect(() => {
    if (!inView || hovered || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setCycle((n) => n + 1), 2200);
    return () => clearInterval(timer);
  }, [inView, hovered, count]);
  const activeIdx = inView && !hovered && count > 0 ? cycle % count : -1;

  if (!data) return null;
  const isVideo = data?.media?.type === "video";
  const mediaUrl = isVideo ? data?.media?.video?.url : data?.media?.image?.url;
  const panel = data?.innovationPanel;
  const panelImageUrl = panel?.backgroundMedia?.image?.url;
  const panelItems = (Array.isArray(panel?.items) ? panel.items : []).filter(
    (item) => item?.title,
  );

  return (
    <section className="bg-white dark:bg-[#101010] py-[40px] 2xl:py-[50px] 3xl:py-[70px]">
      <div className="container">
        <div className="flex max-lg:flex-wrap gap-[15px]">
          {/* Left Content */}
          <div className="w-full lg:w-[calc(100%-280px)] xl:w-[calc(100%-320px)] 2xl:w-[calc(100%-350px)] 3xl:w-[calc(100%-440px)]">
            <div className="flex flex-wrap w-full h-full max-sm:gap-[15px]">
              {/* Title & Description */}
              <div data-reveal className="w-full sm:w-1/2 lg:w-[calc(100%-360px)] xl:w-[calc(100%-440px)] 2xl:w-[calc(100%-530px)] 3xl:w-[calc(100%-665px)] flex items-center">
                <div className="sm:max-w-[90%] lg:max-w-[280px] xl:max-w-[350px] 2xl:max-w-[420px] 3xl:max-w-[520px]">
                  {data?.title && (
                    <h2 className="mb-[15px] 2xl:mb-[25px] 3xl:mb-[30px] text-[25px] xl:text-[36px] 2xl:text-[44px] 3xl:text-[55px] font-bold leading-[30px] xl:leading-[40px] 2xl:leading-[50px] 3xl:leading-[60px] text-black dark:text-white">
                      {data.title}
                    </h2>
                  )}

                  {Array.isArray(data?.description) && hasContent(data.description) && (
                    <div className="text_1 leading-[1.2] text-[#4A5565] dark:text-[#9CA3AF]  typography">
                      <BlocksRenderer content={data.description} />
                    </div>
                  )}
                </div>
              </div>

              {/* Main Image / Video */}
              <div className="w-full sm:w-1/2 lg:w-[360px] xl:w-[440px] 2xl:w-[530px] 3xl:w-[665px] ">
                {mediaUrl && (
                <div data-reveal="wipe" className="group aspect-[665/500] h-full w-full overflow-hidden rounded-[10px] bg-gradient-to-br from-[#E9E3DA] to-[#D6CCBF] dark:from-[#1B1C1F] dark:to-[#2A2C31]">
                  {/* inner box is what the wipe clips, so the image can scale on hover on its own */}
                  <div className="h-full w-full">
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
                        unoptimized
                        src={data.media.image.url}
                        alt={
                          data.media.image.alternativeText ||
                          data?.title ||
                          "About DSU"
                        }
                        width={1920}
                        height={750}
                        priority
                        className="h-full w-full object-cover transition-[scale] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[scale] group-hover:scale-[1.07]"
                      />
                    )}
                  </div>
                </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Innovation Panel */}
          {panel && (
          <div ref={panelRef} className="w-full lg:w-[280px] xl:w-[320px] 2xl:w-[350px] 3xl:w-[440px] shrink-0">
            <div className="relative  w-full h-full rounded-[10px] overflow-hidden">
              {panelImageUrl && (
                <Image
                  src={panelImageUrl}
                  alt={
                    panel.backgroundMedia.image.alternativeText ||
                    data?.title ||
                    "About DSU"
                  }
                  width={1920}
                  height={750}
                  priority
                  className="h-full w-full object-cover absolute top-0 left-0 "
                />
              )}
              <div className="w-full h-full p-[15px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[25px]">
                {panel.title && (
                <div data-reveal className="text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[37px] text-white font-bold leading-[25px] xl:leading-[30px] 2xl:leading-[35px] 3xl:leading-[40px] relative mb-[20px]">
                  {panel.title}
                </div>
                )}
                {panelItems.length > 0 && (
                <div
                  data-reveal-stagger
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className="flex flex-col gap-[5px] lg:gap-[8px] xl:gap-[10px] 3xl:gap-[15px] max-w-[75%] w-full"
                >
                  {panelItems.map((item, id) => (
                    <div
                      key={id}
                      data-active={id === activeIdx}
                      className="group relative z-0 w-full overflow-hidden rounded-[10px] bg-black/15 backdrop-blur-lg border border-white/20 p-[10px_12px] 2xl:p-[12px_15px] 3xl:p-[15px_20px] transition-colors duration-500 hover:border-white data-[active=true]:border-white"
                    >
                      {/* gradient fades in for the active / hovered card */}
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 -z-1 bg-gradient-to-r from-[#DC2626] to-[#F97316] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-data-[active=true]:opacity-100"
                      />
                      <div className="text-[13px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[25px] text-white font-bold mb-[5px]">
                        {item.title}
                      </div>
                      {Array.isArray(item.description) && hasContent(item.description) && (
                        <div className="text_1 leading-[1.2] text-white [&_p]:text-white  typography">
                          <BlocksRenderer content={item.description} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                )}
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}
