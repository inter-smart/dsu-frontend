import Image from "next/image";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";

export default function ResearchEngagement({ data }) {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#061b27] pt-10 sm:pt-15 lg:pt-20 2xl:pt-25 3xl:pt-30">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[url('/images/ai-first/engagement-bg.jpg')] bg-cover bg-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(3,18,28,0.38)_0%,rgba(3,18,28,0.58)_55%,rgba(0,0,0,0.92)_100%)]"
      />
      <div className="container">
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-[15px_10px] 2xl:gap-[20px_10px] 3xl:gap-[25px_15px]">
          <div className="lg:max-w-105 2xl:max-w-130 3xl:max-w-170 pb-5 2xl:pb-10 3xl:pb-15 sm:col-span-2 lg:col-span-6 lg:self-center">
            <Heading className="text-white mb-3.75 lg:mb-6.25 2xl:mb-7.5 3xl:mb-10">
              {data?.title}
            </Heading>
            <Text className="text-white">{data?.description}</Text>
          </div>
          {data?.industries?.map((industry, index) => {
            const isAutomotive = industry.title === "Automotive & Mobility";
            const isHighlight = industry.variant === "highlight";
            const desktopOrder = isAutomotive
              ? "lg:order-1"
              : isHighlight
                ? "lg:order-2"
                : ["lg:order-3", "lg:order-4", "lg:order-5", "lg:order-6"][
                    index - 2
                  ];

            return (
              <article
                key={industry.title}
                className={`w-auto h-auto lg:col-span-3 ${desktopOrder}`}
              >
                <div className="w-full h-full p-[20px_15px] 2xl:p-[30px_20px] 3xl:p-[35px_25px] bg-white/90 border border-black/10 rounded-md 2xl:rounded-[10px] overflow-hidden block">
                  <div className="w-full h-auto pb-2.5 2xl:pb-3.75 mb-2.5 2xl:mb-3.75 border-b border-black/10 flex">
                    <div className="w-7.5 sm:w-8.75 2xl:w-10 3xl:w-12.5 h-auto aspect-square shrink-0 flex items-center justify-center">
                      <Image
                        src={industry?.icon}
                        alt="Icon"
                        width={40}
                        height={40}
                        className="size-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0 pl-2.5 2xl:pl-5">
                      <div className="text-base 2xl:text-xl 3xl:text-[25px] leading-[1.1] font-semibold text-[#212121] mb-1.25 2xl:mb-2.5">
                        {industry?.title}
                      </div>
                      <div className="text-[13px] 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-normal text-[#4A5565]">
                        {industry?.description}
                      </div>
                    </div>
                  </div>
                  {industry.focusAreas?.length > 0 && (
                    <div className="w-full h-auto block">
                      <div className="text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-semibold text-[#212121] mb-3.75">
                        Focus Areas
                      </div>
                      <ul className="space-y-2.5 2xl:space-y-3.75">
                        {industry.focusAreas.map((area) => (
                          <li
                            className="text-sm 2xl:text-[15px] 3xl:text-lg leading-1 font-normal text-[#4A5565] gap-1.25 2xl:gap-2 flex items-center"
                            key={area}
                          >
                            <span className="w-3 2xl:w-3.75 h-auto aspect-square flex items-center justify-center">
                              <Image
                                src="/images/capaa.svg"
                                alt="Icon"
                                width={15}
                                height={15}
                                className="size-full object-contain"
                              />
                            </span>
                            {area}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className="w-full h-auto mt-7.5 lg:mt-10 3xl:mt-15 border-t border-white/10">
        <div class="container">
          <div className="w-full h-auto lg:-mx-10 xl:-mx-12.5 2xl:-mx-22.5 3xl:-mx-30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {data.personas.map((persona, index) => (
              <div
                key={persona.title}
                className={`group flex flex-col p-[15px_0px] sm:p-[20px_20px] lg:p-[30px_40px] xl:p-[40px_50px] 2xl:p-[40px_90px] 3xl:p-[50px_120px] ${
                  index > 0 ? "lg:border-l lg:border-white/10" : ""
                }`}
              >
                <div className="mb-2.5 sm:mb-3.75 lg:mb-5 2xl:mb-6.25 3xl:mb-10 flex items-center gap-2.5">
                  <div className="w-7.5 2xl:w-8.75 3xl:w-11.25 h-auto aspect-square shrink-0 flex items-center justify-center">
                    <Image
                      src={persona.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="size-full object-contain"
                    />
                  </div>
                  <div className="text-[15px] lg:text-base 2xl:text-xl 3xl:text-[25px] leading-[1.1] font-semibold text-white">
                    {persona.title}
                  </div>
                </div>
                <ul className="space-y-2.5 2xl:space-y-3.75 3xl:space-y-5">
                  {persona.points?.map((point) => (
                    <li
                      key={point}
                      className="text-sm 2xl:text-base 3xl:text-lg leading-[1.5] font-normal text-white flex items-start gap-3.75 3xl:gap-5"
                    >
                      <span className="mt-px flex size-5 3xl:size-6.25 shrink-0 p-1 3xl:p-1.25 border border-white/10 items-center justify-center rounded-full bg-white/10">
                        <Image
                          src="/images/ai-first/icons/persona-check.svg"
                          alt=""
                          width={11}
                          height={11}
                          className="size-full object-contain"
                        />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
