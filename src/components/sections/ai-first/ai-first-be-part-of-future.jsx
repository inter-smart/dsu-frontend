import Image from "next/image";
import Link from "next/link";

export default function BePartOfFuture({ data }) {
  return (
    <section className="relative w-full bg-[#0b0b0b] py-10 sm:py-14 lg:py-16 xl:py-20 2xl:py-24 3xl:py-28">
      {data?.backgroundImage?.url && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={data.backgroundImage.url}
            alt={data.backgroundImage.alternativeText || ""}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}
      <div className="container">
        {(data?.title || data?.description || data?.ctas?.length > 0) && (
          <div className="mb-10 flex flex-wrap items-start justify-between gap-6 xl:mb-14">
            <div className="max-w-[600px]">
              {data.title && <h2 className="cmn_Title text-white!">{data.title}</h2>}
              {data.description && <p className="text-[13px] leading-relaxed text-white/80 xl:text-[18px]">{data.description}</p>}
            </div>
            {data?.ctas?.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 xl:gap-4">
                {data.ctas.map((cta) => (
                  <Link
                    key={cta.label}
                    href={cta.href || "#"}
                    className={
                      cta.variant === "outline"
                        ? "group inline-flex items-center gap-2.5 rounded-[4px] border border-(--basecolor) px-4 py-3 text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-(--basecolor)/10 hover:shadow-lg active:translate-y-0 xl:px-5 xl:py-4 xl:text-[16px]"
                        : "group base-gradient inline-flex items-center gap-2.5 rounded-[4px] px-4 py-3 text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-(--basecolor)/30 active:translate-y-0 xl:px-5 xl:py-4 xl:text-[16px]"
                    }
                  >
                    {cta.label}
                    <Image
                      src="/images/ai-first/icons/cta-dots.svg"
                      alt=""
                      width={16}
                      height={13}
                      className="size-3.5 object-contain transition-transform duration-300 group-hover:translate-x-1 xl:size-4"
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {data?.cards?.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-6">
            {data.cards.map((card) => (
              <div
                key={card.title}
                className="group rounded-[10px] bg-white/5 p-3 transition-colors duration-300 hover:bg-white/10"
              >
                {card.image?.url && (
                  <div className="relative mb-5 aspect-[407/249] w-full overflow-hidden rounded-[10px]">
                    <Image
                      src={card.image.url}
                      alt={card.image.alternativeText || card.title}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}
                <h3 className="mb-2 px-1 text-[20px] font-semibold text-white xl:text-[25px]">
                  {card.title}
                </h3>
                <p className="px-1 pb-2 text-[13px] leading-relaxed text-white/80 xl:text-[18px]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
