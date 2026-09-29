import Image from "next/image";
import Link from "next/link";

export default function ShapeFuture({ data }) {
  return (
    <section className="w-full bg-[#0b0b0b] px-4 pb-10 sm:pb-14 lg:pb-16 xl:pb-20 2xl:pb-24 3xl:pb-28">
      <div className="container">
        <div className="group relative overflow-hidden rounded-[20px]">
          {data?.image?.url && (
            <div className="relative h-[360px] w-full sm:h-[420px] xl:h-[480px] 2xl:h-[540px] 3xl:h-[620px]">
              <Image
                src={data.image.url}
                alt={data.image.alternativeText || data?.title || "Shape India's AI Future"}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
            </div>
          )}

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center sm:px-10">
            {data?.title && (
              <h2 className="mb-4 text-[26px] font-bold text-white sm:text-[32px] xl:text-[40px] 3xl:text-[55px]">
                {data.title}
              </h2>
            )}
            {data?.description && (
              <p className="mb-6 max-w-[770px] text-[14px] leading-relaxed text-white sm:text-[16px] xl:text-[18px]">
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
        </div>
      </div>
    </section>
  );
}
