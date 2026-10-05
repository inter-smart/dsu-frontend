import { Heading } from "@/components/ui/heading";
import { ShineBorder } from "@/components/ui/shine-border";
import { Text } from "@/components/ui/text";
import Image from "next/image";
import Link from "next/link";

export default function BePartOfFuture({ data }) {
  return (
    <section className="relative w-full py-10 sm:py-14 lg:py-16 xl:py-20 2xl:py-[60px_170px] 3xl:py-[80px_210px]">
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
          <div className="mb-10 flex 3xl:items-center flex-wrap justify-between gap-6 2xl:mb-12.5 3xl:mb-20">
            <div className="sm:w-[50%] [&>*]:text-white 3xl:flex 3xl:items-center gap-2.5">
              <Heading>{data.title}</Heading>
              <Text>{data.description}</Text>
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
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3.75 2xl:gap-3.75 3xl:gap-5">
            {data.cards.map((card) => (
              <div
                key={card.title}
                className="group rounded-md 2xl:rounded-[10px] bg-white/5 p-2.5 transition-colors duration-300 hover:bg-white/10 backdrop-blur-[10px] relative z-0"
              >
                <ShineBorder shineColor={["#909191"]} />
                {card.image?.url && (
                  <div className="relative mb-5 aspect-[407/249] w-full overflow-hidden rounded-md 2xl:rounded-[10px]">
                    <Image
                      src={card.image.url}
                      alt={card.image.alternativeText || card.title}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}
                <div className="w-full h-auto py-[0px_20px] 2xl:py-[10px_30px] 3xl:py-[10px_50px]">
                <h3 className="mb-2 px-1 text-base font-semibold text-white 2xl:text-xl 3xl:text-[25px]">
                  {card.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-white/80 2xl:text-base 3xl:text-lg">
                  {card.description}
                </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
