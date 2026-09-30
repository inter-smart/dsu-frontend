import Image from "next/image";

export default function AiLeadership({ data }) {
  return (
    <section className="relative w-full py-10 sm:py-14 lg:py-16 xl:py-20 2xl:py-24 3xl:py-28">
      {data?.image?.url && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={data.image.url}
            alt={data.image.alternativeText || "Building India's AI Leadership"}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/95 dark:bg-black/85" />
        </div>
      )}

      <div className="container">
        {(data?.title || data?.description) && (
          <div className="mb-10 max-w-[1032px] xl:mb-14">
            {data.title && <h2 className="cmn_Title">{data.title}</h2>}
            {data.description && <p className="text_1 3xl:text-[18px]">{data.description}</p>}
          </div>
        )}

        {data?.cards?.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8">
            {data.cards.map((card) => (
              <div
                key={card.title}
                className="group rounded-[10px] bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(0,0,0,0.15)] dark:bg-[#1a1a1a] xl:p-9"
              >
                {card.icon && (
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={58}
                    height={58}
                    className="mb-4 size-12 object-contain transition-transform duration-300 group-hover:scale-110 xl:size-14"
                  />
                )}
                <h3 className="mb-4 text-[20px] font-semibold text-[#212121] dark:text-white xl:text-[25px]">
                  {card.title}
                </h3>
                <ul className="space-y-3">
                  {card.points?.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-[14px] text-[#4a5565] transition-transform duration-300 group-hover:translate-x-1 dark:text-white/80 xl:text-[18px]">
                      <Image
                        src="/images/ai-first/icons/focus-bullet.svg"
                        alt=""
                        width={15}
                        height={15}
                        className="mt-1 size-3.5 shrink-0"
                      />
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
