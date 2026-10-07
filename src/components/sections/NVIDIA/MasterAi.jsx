import Image from "next/image";
import Link from "next/link";

export default function MasterAi({ data }) {
  return (
    <section className="relative w-full py-14 sm:py-16 lg:py-20 xl:py-24 2xl:py-28 3xl:py-32">
      {data?.image?.url && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={data.image.url}
            alt={data.image.alternativeText || data?.title || "Ready to build your future with AI"}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
      )}

      <div className="container flex flex-col items-center text-center">
        {data?.title && (
          <h2 className="mb-4 max-w-[895px] text-[26px] font-bold text-white sm:text-[32px] xl:text-[40px] 3xl:text-[55px]">
            {data.title}
          </h2>
        )}
        {data?.description && (
          <p className="mb-8 max-w-[800px] text-[14px] leading-relaxed text-[#fff2f2] sm:text-[16px] xl:text-[18px]">
            {data.description}
          </p>
        )}
        {data?.ctas?.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-3 xl:gap-4">
            {data.ctas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href || "#"}
                className={
                  cta.variant === "white"
                    ? "group inline-flex items-center gap-2.5 rounded-[4px] border border-white !bg-white px-5 py-3 text-[13px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-(--basecolor) to-(--basecolor2) transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 xl:px-6 xl:py-4 xl:text-[16px]"
                    : "group base-gradient inline-flex items-center gap-2.5 rounded-[4px] px-5 py-3 text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-(--basecolor)/30 active:translate-y-0 xl:px-6 xl:py-4 xl:text-[16px]"
                }
              >
                {cta.label}
                <Image
                  src={
                    cta.variant === "white"
                      ? "/images/ai-first/icons/cta-dots-gradient.svg"
                      : "/images/ai-first/icons/cta-dots.svg"
                  }
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
