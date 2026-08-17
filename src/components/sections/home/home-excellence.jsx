// "use client";
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

import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";

export default function HomeExcellence({ data }) {
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
          <Text>{data?.description}</Text>
        </div>
        <div className="w-full h-auto gap-10 flex flex-wrap">
          <div className="w-[20%]">

          </div>
          <div className="w-[60%]">

          </div>
          <div className="w-[20%]">
            
          </div>
        </div>
      </div>
    </section>
  );
}
