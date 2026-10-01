import Image from "next/image";
import Link from "next/link";

export default function AiFirstHero({ data }) {
  return (
    <section className="relative block h-[420px] w-full sm:h-[520px] md:h-[600px] lg:h-[680px] xl:h-[750px] 2xl:h-[850px] 3xl:h-[990px]">
      <div className="absolute inset-0 z-0 h-full w-full">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-black/10" />
        {data?.heroMedia?.url && (
          <Image
            src={data.heroMedia.url}
            alt={data?.heroMedia?.alternativeText || data?.title || "Hero image"}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>

      <div className="container relative z-20 flex h-full w-full flex-col justify-end pb-[40px] sm:pb-[55px] lg:pb-[70px] xl:pb-[85px] 2xl:pb-[95px] 3xl:pb-[110px]">
        {data?.title && (
          <h1 className="mb-2 w-full max-w-[900px] text-[26px] font-bold leading-tight text-white sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[50px] 2xl:text-[55px] 3xl:text-[61px]">
            {data.title}
          </h1>
        )}
        {data?.subtitle && (
          <p className="mb-6 w-full max-w-[750px] text-[14px] leading-relaxed text-white sm:text-[16px] md:text-[18px] xl:text-[20px] 3xl:text-[23px]">
            {data.subtitle}
          </p>
        )}

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
    </section>
  );
}
