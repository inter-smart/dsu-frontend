"use client";

import React from "react";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const defaultAiToolsData = {
    heading: "The Tools You'll Master",
    description: "Industry-standard software that accelerates every step of your AI journey",
    realWorldExamples: {
        heading: "Real-World Examples",
        list: [
            { id: 1, label: "Training neural networks 50X faster" },
            { id: 2, label: "Processing billions of data points" },
            { id: 3, label: "Rendering graphics in video games" },
            { id: 4, label: "Analyzing medical images instantly" },
            { id: 5, label: "Training self-driving cars" },
        ],
    },
    media: {
        alternativeText: "3D illustration of stacked AI chip hardware",
        mime: "image/png",
        url: "/images/tool-bg.png",
    },
    keySoftware: {
        heading: "Key Software You'll Use",
        items: [
            {
                id: 1,
                icon: {
                    alternativeText: "Framework icon",
                    url: "/images/tool-1.svg",
                },
                label: "Framework",
                title: "PyTorch & TensorFlow",
                description: "Popular AI frameworks that work great on NVIDIA GPUs",
            },
            {
                id: 2,
                icon: {
                    alternativeText: "Data Tools icon",
                    url: "/images/tool-2.svg",
                },
                label: "Data Tools",
                title: "NVIDIA RAPIDS",
                description: "Process data 50X faster using GPU acceleration",
            },
            {
                id: 3,
                icon: {
                    alternativeText: "Deployment icon",
                    url: "/images/tool-3.svg",
                },
                label: "Deployment",
                title: "TensorRT",
                description: "Make trained models run 10X faster in production",
            },
        ],
    },
    cudaSection: {
        icon: {
            alternativeText: "Code icon representing CUDA",
            url: "/images/cuda.svg",
        },
        title: "CUDA: Supercharging Your Code",
        description: "CUDA is a technology that lets you write code that runs on NVIDIA GPUs. Instead of using just one processor, your code can use thousands of tiny processors working together in parallel—like having a thousand workers tackling a problem simultaneously.",
        highlights: [
            {
                id: 1,
                icon: {
                    alternativeText: "Play icon",
                    url: "/images/play.svg",
                },
                title: "Write Once,\nRun Anywhere",
                description: "Your CUDA code works on all NVIDIA GPUs",
            },
            {
                id: 2,
                icon: {
                    alternativeText: "Industry Standard icon",
                    url: "/images/fingerprint.svg",
                },
                title: "Industry\nStandard",
                description: "Used by researchers and companies worldwide",
            },
            {
                id: 3,
                icon: {
                    alternativeText: "Speed gauge icon",
                    url: "/images/speed.svg",
                },
                title: "10-100X Speed\nBoost",
                description: "Same code runs much faster on GPUs",
            },
        ],
    },
};

export default function AiTools({ data }) {
    const toolsData = data || defaultAiToolsData;
    const heading = toolsData?.heading || defaultAiToolsData.heading;
    const description = toolsData?.description || defaultAiToolsData.description;
    const realWorldExamples = toolsData?.realWorldExamples || defaultAiToolsData.realWorldExamples;
    const media = toolsData?.media || defaultAiToolsData.media;
    const keySoftware = toolsData?.keySoftware || defaultAiToolsData.keySoftware;
    const cuda = toolsData?.cudaSection || defaultAiToolsData.cudaSection;

    return (
        <section className="relative py-[40px] md:py-[50px] lg:py-[70px] 2xl:py-[100px] 3xl:py-[100px] bg-white dark:bg-[#0c0c0e] overflow-hidden">
            <div className="container">
                {/* Top Section: Left Content, Middle 3D Graphic, Right Peach Card */}
                <div className="flex flex-col lg:flex-row items-center relative justify-between gap-[30px] lg:gap-[24px] xl:gap-[36px] 2xl:gap-[48px]">

                    {/* Left Column: Heading, Subtitle & Real-World Examples */}
                    <div className="w-full lg:w-[35%] xl:w-[34%] 2xl:w-[45%] flex flex-col justify-center">
                        <h2 className="cmn_Title mb-[10px] xl:mb-[14px] 2xl:mb-[18px]">
                            {heading}
                        </h2>

                        {description && (
                            <div className="text_1 mb-[24px] xl:mb-[30px] 2xl:mb-[36px] max-w-[360px] xl:max-w-[400px]">
                                {Array.isArray(description) ? (
                                    <BlocksRenderer
                                        content={description}
                                        blocks={{
                                            paragraph: ({ children }) => (
                                                <p className="!my-0 !text-inherit leading-relaxed">
                                                    {children}
                                                </p>
                                            ),
                                        }}
                                    />
                                ) : (
                                    <p className="!my-0 !text-inherit leading-relaxed">
                                        {description}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Real-World Examples */}
                        <div>
                            <h3 className="cmn_Txt mb-[14px] xl:mb-[18px] 2xl:mb-[20px]">
                                {realWorldExamples?.heading || "Real-World Examples"}
                            </h3>

                            <ul className="flex flex-col gap-[12px] xl:gap-[15px] 2xl:gap-[18px]">
                                {(realWorldExamples?.list || defaultAiToolsData.realWorldExamples.list).map((item) => (
                                    <li key={item.id} className="flex items-center gap-[12px] xl:gap-[14px] group">
                                        {/* Peach Circle Badge with Orange Checkmark */}
                                        <span className="w-[23px] h-[23px] xl:w-[25px] xl:h-[25px] rounded-full bg-[#FFEFE2] dark:bg-[#F97316]/20 p-[3px] border border-[#FED7AA]/70 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110">
                                            <svg className="w-full h-full object-contain" viewBox="0 0 16 16" fill="none"  >
                                                <path d="M7.02525 13.4934C6.98486 13.4934 6.94492 13.485 6.90792 13.4688C6.87092 13.4526 6.83766 13.429 6.81025 13.3993L1.01334 7.1287C0.974692 7.08689 0.949073 7.03473 0.939616 6.97859C0.930158 6.92245 0.937271 6.86477 0.960085 6.81262C0.982899 6.76046 1.02042 6.71608 1.06807 6.68492C1.11571 6.65376 1.1714 6.63716 1.22833 6.63716H4.01865C4.06054 6.63716 4.10195 6.64615 4.14007 6.66352C4.1782 6.68089 4.21215 6.70624 4.23965 6.73785L6.177 8.9667C6.38638 8.51914 6.79169 7.77392 7.50294 6.86586C8.55442 5.5234 10.5102 3.54907 13.8564 1.76678C13.921 1.73234 13.9963 1.7234 14.0672 1.74173C14.1382 1.76006 14.1997 1.80432 14.2396 1.86578C14.2795 1.92724 14.2949 2.00142 14.2827 2.07368C14.2706 2.14595 14.2318 2.21103 14.1741 2.2561C14.1613 2.26608 12.8711 3.28207 11.3863 5.14303C10.0198 6.85558 8.20325 9.65585 7.30938 13.271C7.29368 13.3345 7.25715 13.3909 7.20564 13.4312C7.15413 13.4716 7.09059 13.4935 7.02516 13.4935L7.02525 13.4934Z" fill="#F97316" fill-opacity="0.7" />
                                            </svg>
                                        </span>

                                        <span className="text_1 text-[#4A5565] dark:text-[#D1D5DB] font-normal leading-snug">
                                            {item.label}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Middle Column: 3D Stacked Hardware Graphic */}
                    <div className="absolute md:top-0 bottom-0 left-0 right-0 m-auto pointer-events-none max-sm:opacity-30  w-full lg:w-[35%] xl:w-[40%] 2xl:w-[45%] flex items-center justify-center my-2 lg:my-0">
                        <div className="relative w-full lg:left-[-12%] max-w-[320px] sm:max-w-[360px] xl:max-w-[450px] 2xl:max-w-[550px] 3xl:max-w-[750px] aspect-square flex items-center justify-center">
                            <Image
                                src={media?.url || "/images/tool-bg.png"}
                                alt={media?.alternativeText || "NVIDIA AI Hardware Tools"}
                                width={750}
                                height={750}
                                className="w-full h-full object-cover  transition-transform duration-500 hover:scale-[1.03]"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Column: Key Software You'll Use Card */}
                    <div className="w-full lg:max-w-[350px] xl:max-w-[400px] 2xl:max-w-[480px] 3xl:max-w-[620px]">
                        <div className="bg-gradient-to-r from-[#E65100]/10 via-[#FF6D00]/10 to-[#FF8F00]/10 dark:bg-[#1A1816] border border-[#FDE6D2] dark:border-[#2C2620] rounded-[10px] 2xl:rounded-[15px] 3xl:rounded-[20px] xl:rounded-[24px] 2xl:rounded-[26px] p-[10px] sm:p-[15px] xl:p-[20px] 2xl:p-[25px] 3xl:p-[30px] shadow-[0_4px_24px_rgba(249,115,22,0.06)]">
                            <h3 className="cmn_Txt mb-[16px] xl:mb-[20px] 2xl:mb-[24px]">
                                {keySoftware?.heading || "Key Software You'll Use"}
                            </h3>

                            <div className="divide-y divide-[#F1DEC9] dark:divide-[#2E2822]">
                                {(keySoftware?.items || defaultAiToolsData.keySoftware.items).map((item, idx) => (
                                    <div
                                        key={item.id || idx}
                                        className="py-[14px] xl:py-[18px] 2xl:py-[20px] first:pt-0 last:pb-0 flex items-start gap-[14px] xl:gap-[18px] group"
                                    >
                                        {/* Software Icon */}
                                        <div className="w-[35px] h-[35px] xl:w-[45px] xl:h-[45px] 2xl:w-[47px] 2xl:h-[47px] shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                                            <Image
                                                src={item.icon?.url || `/images/tool-${idx + 1}.svg`}
                                                alt={item.title || "Software Icon"}
                                                width={48}
                                                height={48}
                                                className="w-auto h-auto max-w-[30px] max-h-[40px] xl:max-w-[46px] xl:max-h-[46px] 2xl:max-w-[48px] 2xl:max-h-[48px] object-contain"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <span className="block text_1 text-[#6B7280] dark:text-[#9CA3AF] font-normal leading-none mb-[4px] xl:mb-[6px]">
                                                {item.label}
                                            </span>
                                            <h4 className="cmn_Txt font-bold text-black dark:text-white leading-tight my-[5px]">
                                                {item.title}
                                            </h4>
                                            <p className="text_1 text-[#4A5565] dark:text-[#9CA3AF] !my-0">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
 
                <div className="mt-[35px] md:mt-[45px] lg:mt-[55px] xl:mt-[65px] 2xl:mt-[75px]">
                    <div className="bg-white dark:bg-[#121215] border border-[#E5E7EB] dark:border-[#27272A] rounded-[20px] xl:rounded-[24px] 2xl:rounded-[26px] p-[20px] sm:p-[26px] lg:p-[32px] xl:p-[38px] 2xl:p-[42px] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-[28px] lg:gap-[35px] xl:gap-[50px]">

                            {/* Left Side: Orange CUDA Icon + Title & Description */}
                            <div className="flex flex-wrap items-start gap-[16px] sm:gap-[20px] xl:gap-[24px] w-full lg:w-[50%] xl:w-[48%]">
                                {/* Orange Rounded Square with White </> Symbol */}
                                <div className="w-[60px] h-[55px] sm:w-[90px] sm:h-[90px] xl:w-[98px] xl:h-[98px] 2xl:w-[104px] 2xl:h-[100px] shrink-0 rounded-[8px] xl:rounded-[10px] bg-[#F97316] flex items-center justify-center   transition-transform duration-300 hover:scale-105">
                                    <Image
                                        src={cuda?.icon?.url || "/images/cuda.svg"}
                                        alt={cuda?.icon?.alternativeText || "CUDA"}
                                        width={52}
                                        height={52}
                                        className="w-[35px] h-[35px] sm:w-[48px] sm:h-[48px] xl:w-[52px] xl:h-[52px] 2xl:w-[56px] 2xl:h-[56px] object-contain"
                                    />
                                </div>

                                <div className="sm:flex-1 max-sm:w-full">
                                    <h3 className="cmn_Txt mb-[6px] xl:mb-[8px] leading-snug">
                                        {cuda?.title || "CUDA: Supercharging Your Code"}
                                    </h3>
                                    <p className="text-[12px] xl:text-[13px] 2xl:text-[13.5px] 3xl:text-[14.5px] text-[#4A5565] dark:text-[#9CA3AF] leading-relaxed !my-0">
                                        {cuda?.description ||
                                            "CUDA is a technology that lets you write code that runs on NVIDIA GPUs. Instead of using just one processor, your code can use thousands of tiny processors working together in parallel—like having a thousand workers tackling a problem simultaneously."}
                                    </p>
                                </div>
                            </div>

                            {/* Right Side: 3 Highlights (Write Once, Industry Standard, Speed Boost) */}
                            <div className="w-full lg:w-[50%] xl:w-[52%] grid grid-cols-1 sm:grid-cols-3 gap-[20px] sm:gap-[16px] xl:gap-[24px] 2xl:gap-[28px] pt-[20px] lg:pt-0 border-t lg:border-t-0 border-[#F3F4F6] dark:border-[#27272A]">
                                {(cuda?.highlights || defaultAiToolsData.cudaSection.highlights).map((item, idx) => (
                                    <div key={item.id || idx} className="flex sm:flex-col items-start group max-sm:gap-[15px]">
                                        {/* Circular Soft Peach Icon Badge */}
                                        <div className="w-[42px] h-[42px] xl:w-[46px] xl:h-[46px] 2xl:w-[50px] 2xl:h-[50px] rounded-full bg-[#FFF2E6] dark:bg-[#F97316]/15 flex items-center justify-center mb-[10px] xl:mb-[14px] transition-transform duration-200 group-hover:scale-110">
                                            <Image
                                                src={item.icon?.url || (idx === 0 ? "/images/play.svg" : idx === 1 ? "/images/fingerprint.svg" : "/images/speed.svg")}
                                                alt={item.title || "Highlight Icon"}
                                                width={24}
                                                height={24}
                                                className="w-auto h-auto max-w-[20px] max-h-[20px] xl:max-w-[23px] xl:max-h-[23px] 2xl:max-w-[26px] 2xl:max-h-[26px] object-contain"
                                            />
                                        </div>
                                        <div className="w-auto">
                                            <h4 className="text-[13.5px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] font-bold text-black dark:text-white leading-[1.25] mb-[5px] whitespace-pre-line tracking-tight">
                                                {item.title}
                                            </h4>

                                            <p className="text-[11.5px] xl:text-[12.5px] 2xl:text-[13px] 3xl:text-[14px] text-[#64748B] dark:text-[#9CA3AF] leading-snug !my-0">
                                                {item.description}
                                            </p>
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
