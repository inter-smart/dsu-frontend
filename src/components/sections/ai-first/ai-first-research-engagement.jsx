import Image from "next/image";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";

export default function ResearchEngagement({ data }) {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#061b27] 3xl:pt-30">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[url('/images/ai-first/engagement-bg.jpg')] bg-cover bg-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(3,18,28,0.38)_0%,rgba(3,18,28,0.58)_55%,rgba(0,0,0,0.92)_100%)]"
      />
      <div className="container">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-2.5 xl:gap-[25px_15px]">
          <div className="max-w-170 pb-15 sm:col-span-2 lg:col-span-6 lg:self-center lg:pr-8 xl:pr-12">
            <Heading className="text-white mb-10">{data?.title}</Heading>
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
                className={`group flex flex-col rounded-md border border-white/70 bg-white/90 text-[#29343d] lg:col-span-3 ${desktopOrder}`}
              >
                <div className="w-full h-full p-[35px_25px] block">
                  <div className="w-full h-auto pb-3.75 mb-3.75 border-b border-black/10 flex">
                    <div className="w-12.5 h-auto aspect-square shrink-0 flex items-center justify-center">
                      <Image
                        src={industry?.icon}
                        alt="Icon"
                        width={40}
                        height={40}
                        className="size-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0 pl-5">
                      <div className="text-[25px] leading-[1.1] font-semibold text-[#212121] mb-2.5">
                        {industry?.title}
                      </div>
                      <div className="text-lg leading-[1.1] font-normal text-[#4A5565]">
                        {industry?.description}
                      </div>
                    </div>
                  </div>
                  {industry.focusAreas?.length > 0 && (
                    <div className="w-full h-auto block">
                      <div className="text-lg leading-[1.1] font-semibold text-[#212121] mb-3.75">
                        Focus Areas
                      </div>
                      <ul className="space-y-3.75">
                        {industry.focusAreas.map((area) => (
                          <li
                            className="text-lg leading-1 font-normal text-[#4A5565] gap-2 flex items-center"
                            key={area}
                          >
                            <span className="w-3.75 h-auto aspect-square flex items-center justify-center">
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
      <div className="w-full h-auto mt-15 border-t border-white/20">
        <div class="container">
          <div className="w-full h-auto -mx-30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {data.personas.map((persona, index) => (
              <div
                key={persona.title}
                className={`group flex flex-col p-[50px_120px] ${
                  index > 0 ? "lg:border-l lg:border-white/15" : ""
                }`}
              >
                <div className="mb-10 flex items-center gap-2.5">
                  <div className="w-11.25 h-auto aspect-square shrink-0 flex items-center justify-center">
                    <Image
                      src={persona.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="size-full object-contain"
                    />
                  </div>
                  <div className="text-[15px] 3xl:text-[25px] leading-[1.1] font-semibold text-white">
                    {persona.title}
                  </div>
                </div>
                <ul className="space-y-2">
                  {persona.points?.map((point) => (
                    <li
                      key={point}
                      className="text-lg leading-[1.1] font-normal text-white flex items-start gap-5"
                    >
                      <span className="mt-px flex size-4.25 shrink-0 items-center justify-center rounded-full bg-white/20">
                        <Image
                          src="/images/ai-first/icons/persona-check.svg"
                          alt=""
                          width={11}
                          height={11}
                          className="size-2.75"
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
