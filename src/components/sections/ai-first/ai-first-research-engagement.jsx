import Image from "next/image";

export default function ResearchEngagement({ data }) {
  return (
    <section className="w-full bg-gradient-to-b from-[#450a03] via-[#7f1d1d] to-[#450a03] py-10 sm:py-14 lg:py-16 xl:py-20 2xl:py-24 3xl:py-28">
      <div className="container">
        {(data?.title || data?.description) && (
          <div className="mb-10 max-w-[640px] xl:mb-14">
            {data.title && <h2 className="cmn_Title text-white!">{data.title}</h2>}
            {data.description && <p className="text-[13px] leading-relaxed text-white/80 xl:text-[18px]">{data.description}</p>}
          </div>
        )}

        {data?.industries?.length > 0 && (
          <div className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:mb-16 xl:gap-6">
            {data.industries.map((industry) => {
              const isHighlight = industry.variant === "highlight";
              return (
                <div
                  key={industry.title}
                  className={
                    isHighlight
                      ? "group rounded-[10px] border border-white/10 bg-[#f97316] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg xl:p-7"
                      : "group rounded-[10px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 xl:p-7"
                  }
                >
                  {industry.icon && (
                    <Image
                      src={industry.icon}
                      alt={industry.title}
                      width={48}
                      height={48}
                      className="mb-4 size-10 object-contain xl:size-12"
                    />
                  )}
                  <h3 className="mb-1.5 text-[20px] font-semibold text-white xl:text-[25px]">
                    {industry.title}
                  </h3>
                  <p className="mb-4 text-[14px] text-white/80 xl:text-[18px]">{industry.description}</p>
                  {industry.focusAreas?.length > 0 && (
                    <div className="border-t border-white/15 pt-4">
                      <p className="mb-2 text-[13px] font-semibold text-white xl:text-[16px]">Focus Areas</p>
                      <ul className="space-y-1.5">
                        {industry.focusAreas.map((area) => (
                          <li className="flex items-center gap-1.5 text-[13px] text-white/80 transition-transform duration-300 group-hover:translate-x-1 xl:text-[16px]" key={area}>
                            <Image
                              src={isHighlight ? "/images/ai-first/icons/focus-bullet-on-color.svg" : "/images/ai-first/icons/focus-bullet.svg"}
                              alt=""
                              width={15}
                              height={15}
                              className="size-3.5 shrink-0"
                            />
                            {area}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {data?.personas?.length > 0 && (
          <div className="grid grid-cols-1 gap-8 border-t border-white/15 pt-10 sm:grid-cols-3 xl:gap-10 xl:pt-12">
            {data.personas.map((persona) => (
              <div key={persona.title} className="group flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  {persona.icon && (
                    <Image
                      src={persona.icon}
                      alt={persona.title}
                      width={43}
                      height={43}
                      className="size-9 object-contain transition-transform duration-300 group-hover:scale-110 xl:size-11"
                    />
                  )}
                  <h3 className="text-[20px] font-semibold text-white xl:text-[25px]">
                    {persona.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {persona.points?.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-[14px] text-white transition-transform duration-300 group-hover:translate-x-1 xl:text-[18px]">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10">
                        <Image src="/images/ai-first/icons/persona-check.svg" alt="" width={14} height={14} className="size-3.5" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
