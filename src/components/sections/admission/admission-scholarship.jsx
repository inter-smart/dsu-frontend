"use client";
import { Check } from "lucide-react";
import { Text } from "@/components/ui/text";
import Autoplay from "embla-carousel-autoplay";
import { Heading } from "@/components/ui/heading";
import useEmblaCarousel from "embla-carousel-react";

export default function AdmissionScholarship({ data }) {
  const [criteriaEmblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      breakpoints: {
        "(min-width: 640px)": { align: "start" },
      },
    },
    [
      Autoplay({
        delay: 3500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );
  return (
    <section className="w-full h-auto py-10 sm:py-12.5 lg:py-[70px_60px] 2xl:py-[80px_70px] 3xl:py-[110px_90px] block">
      <div className="container">
        <div className="w-full h -auto block mb-5 sm:mb-6.25 2xl:mb-7.5 3xl:mb-10">
          <Heading className="mb-2.5 2xl:mb-3.75 3xl:mb-5">
            {data?.title}
          </Heading>
          <Text>{data?.description}</Text>
        </div>
        <div className="w-full h-auto pb-7.5 sm:pb-10 lg:pb-12.5 2xl:pb-15 3xl:pb-18.75 mb-7.5 sm:mb-10 lg:mb-15 2xl:mb-17.5 3xl:mb-22.5 border-b border-black/30 grid grid-cols-1 gap-2.5 lg:gap-3.75 3xl:gap-5 lg:grid-cols-2">
          <div className="w-full h-full p-[20px_15px] sm:p-[25px_15px] 2xl:p-[30px_20px] rounded-md 2xl:rounded-[10px] border border-black/10 overflow-hidden block">
            <div className="w-full h-auto pb-3.75 sm:pb-5 3xl:pb-7.5 mb-3.75 sm:mb-5 3xl:mb-7.5 gap-2.5 border-b border-black/10 flex flex-col">
              <div className="text-[15px] 3xl:text-lg leading-[1.1] font-semibold text-[#212121]">
                {data?.dsatScholarship?.title}
              </div>
              <div className="text-lg 2xl:text-[22px] 3xl:text-[28px] leading-[1.1] font-semibold bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit">
                {data?.dsatScholarship?.amount}
              </div>
              <div className="text-sm 3xl:text-base leading-[1.7] font-normal text-[#4A5565]">
                {data?.dsatScholarship?.label}
              </div>
            </div>
            <div className="text-sm 3xl:text-base leading-[1.6] font-normal text-[#4A5565] mb-3.75 lg:mb-6.25 2xl:mb-7.5 3xl:mb-10">
              {data?.dsatScholarship?.description}
            </div>
            <ul className="space-y-2.5 3xl:space-y-3.75">
              {data?.dsatScholarship?.eligibility?.map((item) => (
                <li
                  key={item}
                  className="text-sm 3xl:text-lg leading-[1.6] font-normal text-[#4A5565] gap-2.5 3xl:gap-3.75 flex"
                >
                  <Check
                    aria-hidden="true"
                    className="size-3.75 3xl:size-5 shrink-0 text-[#F04426] translate-y-0.75 3xl:translate-y-1.25"
                    strokeWidth={2}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full h-full p-[20px_15px] sm:p-[25px_15px] 2xl:p-[30px_20px] rounded-md 2xl:rounded-[10px] border border-black/10 overflow-hidden block">
            <div className="w-full h-auto mb-5 gap-2.5 flex flex-col">
              <div className="text-[15px] 3xl:text-lg leading-[1.1] font-semibold text-[#212121]">
                {data?.otherScholarships?.title}
              </div>
              <div className="text-sm 3xl:text-base leading-[1.7] font-normal text-[#4A5565]">
                {data?.otherScholarships?.description}
              </div>
            </div>
            <div className="w-full h-auto border border-black/10 rounded-md 2xl:rounded-[10px] overflow-hidden">
              <table className="[--x-axis-gap:15px] sm:[--x-axis-gap:20px] lg:[--x-axis-gap:25px] 2xl:[--x-axis-gap:35px] w-full border-collapse text-left text-[12px] text-[#4A5565]">
                <thead>
                  <tr className="text-[15px] 3xl:text-lg leading-[1.1] font-semibold text-[#212121] border-b border-black/10">
                    {data?.otherScholarships?.tableHeaders?.map((header) => (
                      <th
                        key={header}
                        className="py-3.75 2xl:py-5 px-(--x-axis-gap)"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data?.otherScholarships?.amounts?.map((item) => (
                    <tr
                      key={item.academicPercentage}
                      className="text-[13px] 3xl:text-base leading-[1.1] font-normal text-[#4A5565]"
                    >
                      <td className="py-1.25 2xl:py-2.5 px-(--x-axis-gap)">
                        {item.academicPercentage}
                      </td>
                      <td className="py-1.25 2xl:py-2.5 px-(--x-axis-gap)">
                        {item.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-[13px] 3xl:text-sm leading-[1.7] font-normal text-[#4A5565] mt-3.75 2xl:mt-6.25">
              {data?.otherScholarships?.footnote}
            </div>
          </div>
        </div>
        <div className="w-full h-auto block">
          <div className="w-full h-auto block mb-5 sm:mb-7.5 2xl:mb-10 3xl:mb-12.5">
            <Heading className="mb-2.5 2xl:mb-3.75 3xl:mb-5">
              {data?.education?.title}
            </Heading>
            <Text>{data?.education?.description}</Text>
          </div>
          <div className="w-full h-auto overflow-hidden" ref={criteriaEmblaRef}>
            <div className="[--slide--sapcing:10px] sm:[--slide--sapcing:15px] 3xl:[--slide--sapcing:20px] ml-[calc(var(--slide--sapcing)*-1)] flex touch-pan-y touch-pinch-zoom">
              {data?.educationLoans?.map((item) => (
                <div
                  key={item?.id}
                  className="pl-(--slide--sapcing) min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_calc(100%/2)]"
                >
                  <div className="w-full h-full p-[20px_15px] lg:p-[30px_20px] 2xl:p-[40px_30px] rounded-md 2xl:rounded-[10px] border border-[#212121]/10 block hover:border-(--basecolor) hover:bg-(--basecolor2)/10 transition-colors duration-300">
                    <div className="text-xl sm:text-[22px] lg:text-[27px] 2xl:text-[32px] 3xl:text-[40px] leading-[1.4] font-semibold text-[#212121] mb-3.75 3xl:mb-6.25">
                      {item?.title}
                    </div>
                    <div className="text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.6] font-normal text-[#4A5565]">
                      {item?.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
