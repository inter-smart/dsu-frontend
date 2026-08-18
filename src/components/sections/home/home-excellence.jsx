// "use client";
// import Image from "next/image";
// import { Text } from "@/components/ui/text";
// import { Heading } from "@/components/ui/heading";
// import { buttonVariants } from "@/components/ui/button";

// const local_data = {
//   title: "Centres of Excellence",
//   description:
//     "Our Centers of Excellence bring together advanced infrastructure, expert faculty, and industry collaboration to solve real-world challenges.",
//   excellence: [
//     {
//       id: 1,
//       specifications: [
//         {
//           title: "DGX B200",
//           text: "Supercomputers with a combined 160 GPUs",
//         },
//         {
//           title: "Jetson Family",
//           text: "Edge AI Deployment",
//         },
//         {
//           title: "GPU Workstations",
//           text: "Peak Performance Development",
//         },
//         {
//           title: "NVLink",
//           text: "Ultra-fast GPU-to-GPU communication",
//         },
//       ],
//       excellenceImage: {
//         url: "/images/centres-of-excellence/dgx-b200.jpg",
//         alternativeTxt: "DGX B200 Supercomputer",
//       },
//       excellenceContent: {
//         heading: {
//           title: "DSU Centre for",
//           highlightTxt: "NVIDIA AI Factory & Generative AI",
//         },
//         description:
//           "We have partnered with NVIDIA to create an AI architecture that enables students to build, train & deploy large-scale AI systems across vision, language, and data-intensive domains.",
//         poweredImage: {
//           url: "/images/centres-of-excellence/nvidia-logo.png",
//           alternativeTxt: "NVIDIA Logo",
//         },
//         button: {
//           link: "#",
//           label: "View All Centers",
//         },
//       },
//     },
//   ],
// };

// export default function HomeExcellence({ data = local_data }) {
//   return (
//     <section className="w-full h-auto py-[100px_140px] block">
//       <div className="container">
//         <div className="w-full h-auto mb-6.25 lg:mb-7.5 3xl:mb-10">
//           <Heading
//             aurora
//             speed={2}
//             align="center"
//             className="mb-1.25 lg:mb-2.5"
//           >
//             {data?.title}
//           </Heading>
//           <Text className={"text-center"}>{data?.description}</Text>
//         </div>
//         <div className="w-full h-auto gap-10 flex flex-wrap">
//           <div className="w-[25%]">
//             <div className="w-full h-auto gap-10 flex flex-col">
//               {data?.excellence?.specifications?.map((item) => (
//                 <div key={item?.id} className="w-auto h-auto">
//                   <div className="w-full h-auto p-[20px_25px] rounded-[10px] border border-[#D9D9D91A]/10 overflow-hidden inline">
//                     <div className="text-[25px] leading-[1.1] font-bold text-[#212121]">
//                       {item?.title}
//                     </div>
//                     <div className="text-lg leading-[1.1] font-normal text-[#4A5565]">
//                       {item?.text}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="w-[50%]">
//             <div className="w-full h-auto block">
//               {data?.excellence?.map((item) => (
//                 <div key={item?.id} className="w-auto h-auto">
//                   <div className="w-full h-auto inline">
//                     <div className="w-full h-auto aspect-875/450 rounded-[10px] overflow-hidden block">
//                       <Image
//                         src={item?.excellenceImage?.url}
//                         alt={item?.excellenceImage?.alternativeTxt}
//                         width={875}
//                         height={450}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="w-[25%]">
//             <div className="w-full h-auto block">
//               {data?.excellence?.excellenceContent?.map((item) => (
//                 <div key={item?.id} className="w-auto h-auto">
//                   <div className="w-full h-auto block">
//                     <div className="text-[32px] leading-[1.1] font-normal text-[#212121]">
//                       {item?.heading?.title}
//                       <span className="font-bold">
//                         {item?.heading?.highlightTxt}
//                       </span>
//                     </div>
//                     <div className="text-base leading-normal font-normal text-black w-full h-auto flex items-center">
//                       Powered by
//                       <span className="w-40 h-auto aspect-160/30 overflow-hidden block">
//                         <Image
//                           src={item?.poweredImage?.url}
//                           alt={item?.poweredImage?.alternativeTxt}
//                           width={160}
//                           height={30}
//                           className="w-full h-full object-contain"
//                         />
//                       </span>
//                     </div>
//                     <Text>{item?.description}</Text>
//                     <div className="mt-2.5 2xl:mt-3.75 3xl:mt-6.25">
//                       <Link
//                         href={data?.excellence?.excellenceContent?.button?.link}
//                         className={buttonVariants({
//                           variant: "default",
//                           size: "default",
//                         })}
//                       >
//                         {data?.excellence?.excellenceContent?.button?.label}
//                         <Image
//                           src="/images/icon-btn.svg"
//                           alt="home-btn"
//                           width={15}
//                           height={15}
//                           className="size-3.75"
//                           data-icon="inline-end"
//                         />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";
import { Text } from "@/components/ui/text";
import { useEffect, useState } from "react";
import { Heading } from "@/components/ui/heading";
import { buttonVariants } from "@/components/ui/button";

const local_data = {
  title: "Centres of Excellence",
  description:
    "Our Centers of Excellence bring together advanced infrastructure, expert faculty, and industry collaboration to solve real-world challenges.",
  excellence: [
    {
      id: 1,
      specifications: [
        {
          title: "DGX B200",
          text: "Supercomputers with a combined 160 GPUs",
        },
        {
          title: "Jetson Family",
          text: "Edge AI Deployment",
        },
        {
          title: "GPU Workstations",
          text: "Peak Performance Development",
        },
        {
          title: "NVLink",
          text: "Ultra-fast GPU-to-GPU communication",
        },
      ],
      excellenceImage: {
        url: "/images/home-excellence-1.jpg",
        alternativeTxt: "DGX B200 Supercomputer",
      },
      excellenceContent: {
        heading: {
          title: "DSU Centre for",
          highlightTxt: "NVIDIA AI Factory & Generative AI",
        },
        description:
          "We have partnered with NVIDIA to create an AI architecture that enables students to build, train & deploy large-scale AI systems across vision, language, and data-intensive domains.",
        poweredImage: {
          url: "/images/centres-of-excellence/nvidia-logo.png",
          alternativeTxt: "NVIDIA Logo",
        },
        button: {
          link: "#",
          label: "View All Centers",
        },
      },
    },
    {
      id: 2,
      specifications: [
        {
          title: "DGX B2002",
          text: "Supercomputers with a combined 160 GPUs",
        },
        {
          title: "Jetson Family2",
          text: "Edge AI Deployment",
        },
        {
          title: "GPU Workstations2",
          text: "Peak Performance Development",
        },
        {
          title: "NVLink2",
          text: "Ultra-fast GPU-to-GPU communication",
        },
      ],
      excellenceImage: {
        url: "/images/home-excellence-1.jpg",
        alternativeTxt: "DGX B200 Supercomputer",
      },
      excellenceContent: {
        heading: {
          title: "DSU Centre for",
          highlightTxt: "NVIDIA AI Factory & Generative AI",
        },
        description:
          "We have partnered with NVIDIA to create an AI architecture that enables students to build, train & deploy large-scale AI systems across vision, language, and data-intensive domains.",
        poweredImage: {
          url: "/images/centres-of-excellence/nvidia-logo.png",
          alternativeTxt: "NVIDIA Logo",
        },
        button: {
          link: "#",
          label: "View All Centers",
        },
      },
    },
  ],
};

export default function HomeExcellence({ data = local_data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const items = data?.excellence || [];
  const activeItem = items?.[activeIndex] ?? items?.[0] ?? {};
  const activeSpecs = activeItem?.specifications ?? [];

  useEffect(() => {
    if (!items?.length || isDragging) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items?.length, isDragging]);

  const getStackIndex = (itemIndex) => {
    return (itemIndex - activeIndex + items.length) % items.length;
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentOffset = e.clientX - dragStart;
    setDragOffset(currentOffset);
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);

    const dragDistance = e.clientX - dragStart;
    const threshold = 50; // Minimum drag distance to trigger change

    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        // Dragged right - go to previous slide
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
      } else {
        // Dragged left - go to next slide
        setActiveIndex((prev) => (prev + 1) % items.length);
      }
    }

    setDragOffset(0);
  };

  return (
    <section className="w-full h-auto py-[100px_140px] block">
      <div className="container">
        <div className="w-full h-auto mb-6.25 lg:mb-7.5 3xl:mb-10">
          <Heading
            aurora
            speed={2}
            align="center"
            className="mb-1.25 lg:mb-2.5"
          >
            {data?.title}
          </Heading>
          <Text className="text-center">{data?.description}</Text>
        </div>

        <div className="w-full h-auto gap-10 flex flex-wrap">
          <div className="w-[25%]">
            <div className="w-full h-auto gap-10 flex flex-col">
              {activeSpecs?.map((item, index) => (
                <div
                  key={`${activeItem?.id ?? activeIndex}-spec-${item?.title ?? index}`}
                  className="w-auto h-auto"
                >
                  <div className="w-full h-auto p-[20px_25px] rounded-[10px] border border-[#D9D9D91A]/10 overflow-hidden inline">
                    <div className="text-[25px] leading-[1.1] font-bold text-[#212121]">
                      {item?.title}
                    </div>
                    <div className="text-lg leading-[1.1] font-normal text-[#4A5565]">
                      {item?.description ?? item?.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[50%]">
            <div
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              className="w-full min-w-0 h-auto block"
            >
              <div className="w-full h-auto aspect-875/450 relative z-0">
                {items?.map((item, index) => {
                  const stackIndex = getStackIndex(index);
                  const isVisible = stackIndex < 5;
                  return (
                    <div
                      key={item?.id}
                      className="absolute inset-0 rounded-[10px] overflow-hidden transition-all duration-500"
                      style={{
                        transform: isVisible
                          ? `translateY(-${stackIndex * 30}px) scale(${1 - stackIndex * 0.08})`
                          : `translateY(-${5 * 30}px) scale(${1 - 5 * 0.08})`,
                        zIndex: items.length - stackIndex,
                        opacity: isVisible ? 1 - stackIndex * 0.12 : 0,
                        pointerEvents: "none",
                      }}
                    >
                      <Image
                        src={item?.excellenceImage?.url}
                        alt={
                          item?.excellenceImage?.alternativeTxt ||
                          "Excellence image"
                        }
                        width={875}
                        height={450}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-[25%]">
            {/* <div className="w-full h-auto block">
              {data?.excellence?.excellenceContent?.map((item) => (
                <div key={item?.id} className="w-auto h-auto">
                  <div className="w-full h-auto block">
                    <div className="text-[32px] leading-[1.1] font-normal text-[#212121]">
                      {item?.heading?.title}
                      <span className="font-bold">
                        {item?.heading?.highlightTxt}
                      </span>
                    </div>
                    <div className="text-base leading-normal font-normal text-black w-full h-auto flex items-center">
                      Powered by
                      <span className="w-40 h-auto aspect-160/30 overflow-hidden block">
                        <Image
                          src={item?.poweredImage?.url}
                          alt={item?.poweredImage?.alternativeTxt}
                          width={160}
                          height={30}
                          className="w-full h-full object-contain"
                        />
                      </span>
                    </div>
                    <Text>{item?.description}</Text>
                    <div className="mt-2.5 2xl:mt-3.75 3xl:mt-6.25">
                      <Link
                        href={data?.excellence?.excellenceContent?.button?.link}
                        className={buttonVariants({
                          variant: "default",
                          size: "default",
                        })}
                      >
                        {data?.excellence?.excellenceContent?.button?.label}
                        <Image
                          src="/images/icon-btn.svg"
                          alt="home-btn"
                          width={15}
                          height={15}
                          className="size-3.75"
                          data-icon="inline-end"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
            <div
              key={activeItem?.id || activeIndex}
              className="animate-in fade-in slide-in-from-right-3 duration-500"
            >
              <div className="text-sm leading-[1.2] font-normal text-[#212121] lg:text-base">
                {activeItem?.subtitle || "DSU Centre for"}
              </div>

              <Heading
                as="h3"
                className="text-2xl leading-[1.05] font-bold text-[#212121] lg:text-[26px] xl:text-[28px]"
              >
                {activeItem?.title || activeItem?.contentTitle}
              </Heading>

              {activeItem?.poweredByLogo?.url && (
                <div className="mt-3 flex items-center gap-2 text-xs font-medium text-[#212121]">
                  <Image
                    src={activeItem?.poweredByLogo?.url}
                    alt={
                      activeItem?.poweredByLogo?.alternativeText || "Powered By"
                    }
                    width={100}
                    height={30}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              )}

              {activeItem?.poweredBy && (
                <div className="mt-3 flex items-center gap-2 text-xs font-medium text-[#212121]">
                  <span>Powered By</span>

                  <span className="text-base font-bold">
                    {activeItem?.poweredBy}
                  </span>
                </div>
              )}

              <Text className="mt-8 text-xs leading-[1.5] text-[#4A5565] lg:text-sm">
                {activeItem?.description || activeItem?.contentDescription}
              </Text>

              <a
                href={activeItem?.buttonUrl || "#"}
                className="mt-7 inline-flex items-center rounded-[3px] bg-gradient-to-r from-[#E52B2B] to-[#FF7518] px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
              >
                {activeItem?.buttonText || "View All Centers"}

                <span className="ml-1">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
