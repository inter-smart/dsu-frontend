import Image from "next/image";

export default function AiLeadership({ data }) {
  return (
    <section className="relative w-full py-10 sm:py-14 lg:py-22.5 xl:py-27.5 2xl:py-32.5 3xl:py-42.5">
      <div className="container">
        <div className="[--width:100%] lg:[--width:320px] xl:[--width:380px] 2xl:[--width:450px] 3xl:[--width:570px] w-full h-auto flex flex-wrap">
          <div className="w-(--width)">
            <div className="w-full h-80 lg:h-full rounded-md 2xl:rounded-[10px] overflow-hidden block max-lg:mb-7.5">
              <Image
                src={data?.image?.url}
                alt={
                  data?.image?.alternativeText ||
                  "Building India's AI Leadership"
                }
                width={570}
                height={570}
                className="size-full object-cover"
              />
            </div>
          </div>
          <div className="w-(--width) lg:w-[calc(100%-var(--width))] lg:pl-5 2xl:pl-7.5">
            {(data?.title || data?.description) && (
              <div className="mb-3.75 max-w-[1032px] sm:mb-5 lg:mb-7.5 2xl:mb-8.75 3xl:mb-12.5">
                {data.title && (
                  <h2 className="cmn_Title !mb-1.25">{data.title}</h2>
                )}
                {data.description && (
                  <p className="text_1 3xl:text-[18px]">{data.description}</p>
                )}
              </div>
            )}
            {data?.cards?.length > 0 && (
              <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 lg:gap-3.75 3xl:gap-5">
                {data.cards.map((card) => (
                  <div
                    key={card.title}
                    className="group w-full h-full rounded-md 2xl:rounded-[10px] bg-white p-[20px_15px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(0,0,0,0.15)] dark:bg-[#1a1a1a] lg:p-[30px_15px] 2xl:p-9 flex flex-col gap-7.5 sm:gap-10 lg:gap-12.5 xl:gap-17.5 2xl:gap-22.5 3xl:gap-27.5"
                  >
                    <div className="size-8.75 sm:size-10 2xl:size-12.5 3xl:size-15 h-auto aspect-square flex items-center justify-center">
                      {card.icon && (
                        <Image
                          src={card.icon}
                          alt={card.title}
                          width={58}
                          height={58}
                          className="size-full object-contain"
                        />
                      )}
                    </div>
                    <div className="w-full h-auto block">
                      <h3 className="mb-2.5 sm:mb-3.75 font-semibold text-[#212121] dark:text-white lg:text-base 2xl:text-xl 3xl:text-[25px]">
                        {card.title}
                      </h3>
                      <ul className="space-y-2.5 2xl:space-y-3.75">
                        {card.points?.map((point) => (
                          <li
                            className="text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.2] font-normal text-[#4A5565] gap-1.25 2xl:gap-2 flex"
                            key={point}
                          >
                            <span className="size-3 2xl:size-3.75 translate-y-0.5 flex items-center justify-center">
                              <Image
                                src="/images/capaa.svg"
                                alt="Icon"
                                width={15}
                                height={15}
                                className="size-full object-contain"
                              />
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
