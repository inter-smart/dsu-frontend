"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";
// import { cn } from "@/lib/utils";
// import { motion, AnimatePresence } from "motion/react";
// import { buttonVariants } from "@/components/ui/button";

// export default function HomeExcellence({ data }) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
//   const infoItems = data?.infoItems || [];
//   const activeItem = infoItems[activeIndex];
//   const timerRef = useRef(null);

//   const startTimer = () => {
//     if (timerRef.current) clearInterval(timerRef.current);
//     timerRef.current = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % infoItems.length);
//     }, 5000);
//   };

//   useEffect(() => {
//     if (infoItems.length > 0 && !isHovered) {
//       startTimer();
//     }
//     return () => {
//       if (timerRef.current) clearInterval(timerRef.current);
//     };
//   }, [infoItems.length, isHovered]);

//   const handleCardClick = (index) => {
//     setActiveIndex(index);
//     startTimer(); // Reset timer on manual click
//   };

//   const getStackIndex = (itemIndex) => {
//     return (itemIndex - activeIndex + infoItems.length) % infoItems.length;
//   };

//   if (!infoItems.length || !activeItem) return null;

//   return (
//     <section className="w-full pt-[40px] xl:pt-[66px] 2xl:pt-[80px] 3xl:pt-[100px] pb-[60px] xl:pb-[90px] 2xl:pb-[110px] 3xl:pb-[135px]">
//       <div className="container">
//         <div className="title_1 text-center mb-1 xl:mb-2">{data.title}</div>
//         <div className="text_1 text-center mb-5 xl:mb-[25px] 2xl:mb-[31px] 3xl:mb-10">
//           {data.description}
//         </div>
//         <div className="flex flex-wrap items-center gap-[26px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[35px] mt-15 xl:mt-[75px] 2xl:mt-[90px] 3xl:mt-[115px]">
//           {/* Left Cards */}
//           <div className="flex-1 flex flex-col gap-3">
//             {activeItem.gpuSpec && (
//               <InfoItem
//                 title={activeItem.gpuSpec.title}
//                 disc={activeItem.gpuSpec.description}
//               />
//             )}
//             {activeItem.familySpec && (
//               <InfoItem
//                 title={activeItem.familySpec.title}
//                 disc={activeItem.familySpec.description}
//               />
//             )}
//             {activeItem.workstationSpec && (
//               <InfoItem
//                 title={activeItem.workstationSpec.title}
//                 disc={activeItem.workstationSpec.description}
//               />
//             )}
//             {activeItem.nvlinkSpec && (
//               <InfoItem
//                 title={activeItem.nvlinkSpec.title}
//                 disc={activeItem.nvlinkSpec.description}
//               />
//             )}
//             {/* Fallback for the old mock structure to keep UI populated if specs are missing */}
//             {!activeItem.gpuSpec &&
//               infoItems.map((item, index) => {
//                 const isActive = index === activeIndex;
//                 return (
//                   <div
//                     key={item.id}
//                     onClick={() => handleCardClick(index)}
//                     className={cn(
//                       "w-full rounded-[7px] border p-[12px] xl:p-[16px] 2xl:p-[20px] 3xl:p-[25px] cursor-pointer transition-all duration-300",
//                       isActive
//                         ? "bg-white border-[#f05c2a] shadow-md"
//                         : "bg-[#d9d9d9]/10 border-black/10 hover:border-black/30",
//                     )}
//                   >
//                     <div
//                       className={cn(
//                         "text-[10.6px] 2xl:text-[12.8px] 3xl:text-[16px] leading-none font-bold tracking-tight text-end mb-1 xl:mb-2 transition-colors",
//                         isActive ? "text-[#f05c2a]" : "text-black",
//                       )}
//                     >
//                       {item.cardTitle}
//                     </div>
//                     <div className="text-[12px] 2xl:text-[14.4px] 3xl:text-[18px] leading-none font-normal tracking-tight text-end text-[#4A5565]">
//                       {item.cardSubtitle}
//                     </div>
//                   </div>
//                 );
//               })}
//           </div>

//           {/* Featured Image Stacked Slider */}
//           <div
//             className="w-[468px] xl:w-[584px] 2xl:w-[700px] 3xl:w-[876px] perspective-1000"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <div className="w-full aspect-[876/446] relative z-0">
//               {infoItems.map((item, index) => {
//                 const stackIndex = getStackIndex(index);
//                 const isVisible = stackIndex < 5;

//                 return (
//                   <motion.div
//                     key={"infoItems" + index}
//                     className="absolute inset-0 rounded-[6px] overflow-hidden shadow-2xl origin-bottom"
//                     initial={false}
//                     animate={{
//                       scale: isVisible ? 1 - stackIndex * 0.05 : 0.8,
//                       y: isVisible ? -(stackIndex * 40) : -120,
//                       zIndex: infoItems.length - stackIndex,
//                       opacity: isVisible ? 1 - stackIndex * 0.1 : 0,
//                       filter: `brightness(${isVisible ? 1 - stackIndex * 0.15 : 0.2})`,
//                     }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 120,
//                       damping: 18,
//                     }}
//                   >
//                     <Image
//                       src={
//                         item.featuredImage?.data?.attributes?.url ||
//                         item.featuredImage?.url
//                       }
//                       alt={
//                         item.featuredImage?.data?.attributes?.alternativeText ||
//                         item.cardTitle ||
//                         "Featured Image"
//                       }
//                       fill
//                       sizes="876px"
//                       className="object-cover"
//                     />
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Right Content */}
//           <div className="flex-1">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeItem.id || activeIndex}
//                 className="w-full"
//                 initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                   filter: "blur(0px)",
//                   transition: { duration: 0.5, ease: "easeOut" },
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: -15,
//                   filter: "blur(6px)",
//                   transition: { duration: 0.25, ease: "easeIn" },
//                 }}
//               >
//                 <motion.div
//                   initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                     filter: "blur(0px)",
//                     transition: {
//                       duration: 0.45,
//                       delay: 0.08,
//                       ease: "easeOut",
//                     },
//                   }}
//                   exit={{
//                     opacity: 0,
//                     y: -10,
//                     filter: "blur(4px)",
//                     transition: { duration: 0.2, ease: "easeIn" },
//                   }}
//                   className="text-[16px] xl:text-[20px] 2xl:text-[25px] 3xl:text-[31px] leading-tight font-normal tracking-tight text-black mb-2.5 xl:mb-[15px]"
//                 >
//                   {activeItem.subtitle}{" "}
//                   <span className="text-[20px] text-[27px] 2xl:text-[33px] 3xl:text-[41px] font-bold text-black inline-block">
//                     {activeItem.title}
//                   </span>
//                 </motion.div>

//                 {activeItem.poweredByLogo && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
//                     animate={{
//                       opacity: 1,
//                       y: 0,
//                       filter: "blur(0px)",
//                       transition: {
//                         duration: 0.45,
//                         delay: 0.12,
//                         ease: "easeOut",
//                       },
//                     }}
//                     exit={{
//                       opacity: 0,
//                       y: -10,
//                       filter: "blur(4px)",
//                       transition: { duration: 0.2, ease: "easeIn" },
//                     }}
//                   >
//                     <Image
//                       src={
//                         activeItem.poweredByLogo?.data?.attributes?.url ||
//                         activeItem.poweredByLogo?.url
//                       }
//                       alt={
//                         activeItem.poweredByLogo?.data?.attributes
//                           ?.alternativeText || "Powered By Logo"
//                       }
//                       width={255}
//                       height={30}
//                       className="w-[100px] 2xl:w-[120px] 3xl:w-[150px] object-contain mb-4 xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px]"
//                     />
//                   </motion.div>
//                 )}

//                 <motion.div
//                   initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                     filter: "blur(0px)",
//                     transition: {
//                       duration: 0.45,
//                       delay: 0.16,
//                       ease: "easeOut",
//                     },
//                   }}
//                   exit={{
//                     opacity: 0,
//                     y: -10,
//                     filter: "blur(4px)",
//                     transition: { duration: 0.2, ease: "easeIn" },
//                   }}
//                   className="text_1 text-black mb-5 xl:mb-[25px] 2xl:mb-[31px] 3xl:mb-10"
//                   dangerouslySetInnerHTML={{ __html: activeItem.description }}
//                 />

//                 <motion.div
//                   initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                     filter: "blur(0px)",
//                     transition: {
//                       duration: 0.45,
//                       delay: 0.2,
//                       ease: "easeOut",
//                     },
//                   }}
//                   exit={{
//                     opacity: 0,
//                     y: -10,
//                     filter: "blur(4px)",
//                     transition: { duration: 0.2, ease: "easeIn" },
//                   }}
//                 >
//                   <Link
//                     href="/centres-of-excellence"
//                     className={buttonVariants({
//                       variant: "default",
//                       size: "default",
//                     })}
//                   >
//                     View All Centers
//                     <Image
//                       src="/images/icon-btn.svg"
//                       alt="home-btn"
//                       width={15}
//                       height={15}
//                       className="size-[15px]"
//                       data-icon="inline-end"
//                     />
//                   </Link>
//                 </motion.div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function InfoItem({ title, disc }) {
//   return (
//     <div
//       className={cn(
//         "rounded-[7px] border p-[12px] xl:p-[16px] 2xl:p-[20px] 3xl:p-[25px] cursor-pointer transition-all duration-300 bg-[#d9d9d9]/10 border-black/10 hover:border-black/30",
//       )}
//     >
//       <div
//         className={cn(
//           "text-[10.6px] 2xl:text-[12.8px] 3xl:text-[16px] leading-none font-bold tracking-tight text-end mb-1 xl:mb-2 transition-colors text-black",
//         )}
//       >
//         {title}
//       </div>
//       <div className="text-[12px] 2xl:text-[14.4px] 3xl:text-[18px] leading-none font-normal tracking-tight text-end text-[#4A5565]">
//         {disc}
//       </div>
//     </div>
//   );
// }

// import { Text } from "@/components/ui/text";
// import { Heading } from "@/components/ui/heading";

// const local_data = {
//   title: "Centres of Excellence",
//   description:
//     "Our Centers of Excellence bring together advanced infrastructure, expert faculty, and industry collaboration to solve real-world challenges.",

//   excellence: [
//     {
//       id: 1,
//       title: "DGX B200",
//       description: "Supercomputers with a combined 160 GPUs",
//       contentTitle: "NVIDIA AI Factory & Generative AI",
//       contentDescription:
//         "We have partnered with NVIDIA to create an AI architecture that enables students to build, train & deploy large-scale AI systems across vision, language, and data-intensive domains.",
//       poweredBy: "NVIDIA",
//       buttonText: "View All Centers",
//       buttonUrl: "#",
//       specs: [
//         {
//           title: "DGX B200",
//           description: "Supercomputers with a combined 160 GPUs",
//         },
//         {
//           title: "Jetson Family",
//           description: "Edge AI Deployment",
//         },
//         {
//           title: "GPU Workstations",
//           description: "Peak Performance Development",
//         },
//         {
//           title: "NVLink",
//           description: "Ultra-fast GPU-to-GPU communication",
//         },
//       ],
//       excellenceImage: {
//         url: "/images/centres-of-excellence/dgx-b200.jpg",
//         alternativeTxt: "DGX B200 Supercomputer",
//       },
//     },
//     {
//       id: 2,
//       title: "Jetson Family",
//       description: "Edge AI Deployment",
//       contentTitle: "Edge AI & Intelligent Robotics",
//       contentDescription:
//         "Advanced edge AI platforms empower students and researchers to develop intelligent robotics, computer vision, and real-time AI applications.",
//       poweredBy: "NVIDIA",
//       buttonText: "View All Centers",
//       buttonUrl: "#",
//       specs: [
//         {
//           title: "Robotics Integration",
//           description: "Advanced robotics systems",
//         },
//         {
//           title: "Computer Vision",
//           description: "Real-time processing",
//         },
//         {
//           title: "Edge Computing",
//           description: "IoT deployment",
//         },
//         {
//           title: "AI Acceleration",
//           description: "Neural network inference",
//         },
//       ],
//       excellenceImage: {
//         url: "/images/centres-of-excellence/jetson-family.jpg",
//         alternativeTxt: "Jetson Family Edge AI Deployment",
//       },
//     },
//     {
//       id: 3,
//       title: "GPU Workstations",
//       description: "Peak Performance Development",
//       contentTitle: "High Performance Computing",
//       contentDescription:
//         "High-performance GPU workstations provide the computing power required for advanced AI research, simulation, visualization, and data-intensive workloads.",
//       poweredBy: "NVIDIA",
//       buttonText: "View All Centers",
//       buttonUrl: "#",
//       specs: [
//         {
//           title: "RTX GPUs",
//           description: "Professional graphics cards",
//         },
//         {
//           title: "CUDA Cores",
//           description: "Parallel computing",
//         },
//         {
//           title: "High Memory",
//           description: "384GB RAM systems",
//         },
//         {
//           title: "Fast Storage",
//           description: "NVMe SSD arrays",
//         },
//       ],
//       excellenceImage: {
//         url: "/images/centres-of-excellence/gpu-workstations.jpg",
//         alternativeTxt: "GPU Workstations",
//       },
//     },
//     {
//       id: 4,
//       title: "NVLink",
//       description: "Ultra-fast GPU-to-GPU communication",
//       contentTitle: "Advanced GPU Computing",
//       contentDescription:
//         "NVLink enables ultra-fast GPU-to-GPU communication for scalable AI models, scientific computing, simulations, and demanding data-intensive applications.",
//       poweredBy: "NVIDIA",
//       buttonText: "View All Centers",
//       buttonUrl: "#",
//       specs: [
//         {
//           title: "NVLink Topology",
//           description: "High-speed interconnects",
//         },
//         {
//           title: "Multi-GPU Scaling",
//           description: "Seamless clustering",
//         },
//         {
//           title: "Low Latency",
//           description: "Sub-microsecond transfers",
//         },
//         {
//           title: "Bandwidth",
//           description: "Up to 1.8TB/s throughput",
//         },
//       ],
//       excellenceImage: {
//         url: "/images/centres-of-excellence/nvlink.jpg",
//         alternativeTxt: "NVLink GPU-to-GPU Communication",
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
//           <div className="w-[20%]">
//             <div className="w-full h-auto gap-10 flex flex-col">
//               {data?.excellence?.map((item) => (
//                 <div key={item?.id} className="w-auto h-auto">
//                   <div className="w-full h-auto p-[20px_25px] rounded-[10px] border border-[#D9D9D91A]/10 overflow-hidden inline">
//                     <div className="text-[25px] leading-[1.1] font-bold text-[#212121]">
//                       {item?.title}
//                     </div>
//                     <div className="text-lg leading-[1.1] font-normal text-[#4A5565]">
//                       {item?.description}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="w-[60%]">
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
//           <div className="w-[20%]">
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
//         </div>
//       </div>
//     </section>
//   );
// }

export default function HomeExcellence({ data = local_data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const items = data?.infoItems || data?.excellence || [];
  const activeItem = items?.[activeIndex] ?? items?.[0] ?? {};
  const activeSpecs = activeItem?.specs ?? [];

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
    <section className="block w-full h-auto py-[100px_140px]">
      <div className="container">
        {/* Heading */}
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

        {/* Content */}
        <div className="grid w-full h-auto items-center gap-6 lg:grid-cols-[225px_minmax(0,1fr)_250px] 3xl:grid-cols-[225px_minmax(0,875px)_250px] 3xl:gap-10">

          <div className="order-2 w-full h-auto lg:order-1">
            <div className="flex w-full h-auto flex-col gap-3 lg:gap-5">
              {activeSpecs.map((spec, idx) => (
                <div
                  key={`${activeIndex}-${spec?.title || "spec"}-${idx}`}
                  className={[
                    "spec-card-flip relative w-full h-auto rounded-[10px] border p-3 text-left transition-all duration-500 lg:px-3.5 lg:py-3.5",
                    idx === 0
                      ? "border-[#D9D9D9] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.06)]"
                      : "border-[#D9D9D9]/60 bg-white",
                  ].join(" ")}
                  style={{ animationDelay: `${idx * 120}ms` }}
                >
                  <div className="text-base leading-[1.1] font-bold text-[#212121] lg:text-lg">
                    {spec?.title}
                  </div>
                  <div className="mt-1 text-xs leading-[1.3] font-normal text-[#4A5565] lg:text-sm">
                    {spec?.description}
                  </div>
                  {idx === 0 && (
                    <span className="absolute top-1/2 right-0 h-8 w-0.5 -translate-y-1/2 rounded-full bg-[#F15A24]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Image Slider - Stacked Cards with Drag */}
          <div
            className="order-1 min-w-0 w-full lg:order-2 relative cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div className="relative w-full aspect-[875/450]">
              {items?.map((item, index) => {
                const stackIndex = getStackIndex(index);
                const isVisible = stackIndex < 5; // Only show 5 stacked images

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
                      src={
                        item?.excellenceImage?.url || item?.featuredImage?.url
                      }
                      alt={
                        item?.excellenceImage?.alternativeTxt ||
                        item?.featuredImage?.alternativeText ||
                        ""
                      }
                      fill
                      sizes="(max-width: 1024px) 100vw, 875px"
                      className="h-full w-full object-cover select-none"
                      draggable={false}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content */}
          <div className="order-3 w-full h-auto">
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
