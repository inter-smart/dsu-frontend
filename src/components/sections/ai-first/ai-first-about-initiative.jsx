import Image from "next/image";

export default function AboutInitiative({ data }) {
  return (
    <section className="w-full py-10 sm:py-14 lg:py-16 xl:py-20 2xl:py-24 3xl:py-28">
      <div className="container flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-10 xl:gap-14 2xl:gap-16">
        <div className="w-full lg:w-1/2">
          {data?.title && (
            <h2 className="cmn_Title">{data.title}</h2>
          )}
          {data?.description && (
            <p className="text_1 3xl:text-[18px]">{data.description}</p>
          )}
        </div>
        {data?.image?.url && (
          <div className="relative aspect-[814/458] w-full overflow-hidden rounded-[10px] lg:w-1/2">
            <Image
              src={data.image.url}
              alt={data?.image?.alternativeText || data?.title || "AI-First Initiative"}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        )}
      </div>

      {data?.pillars?.length > 0 && (
        <div className="container mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 xl:mt-14 xl:gap-10">
          {data.pillars.map((pillar, index) => {
            return (
              <div
                key={pillar.title}
                className={
                  index > 0
                    ? "group flex flex-col gap-3 border-t border-black/10 pt-6 transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-6 xl:pl-8"
                    : "group flex flex-col gap-3 transition-transform duration-300 hover:-translate-y-1"
                }
              >
                {pillar.icon && (
                  <Image
                    src={pillar.icon}
                    alt={pillar.title}
                    width={55}
                    height={55}
                    className="size-9 object-contain xl:size-11"
                  />
                )}
                <h3 className="text-[20px] font-bold text-[#212121] dark:text-white xl:text-[25px]">
                  {pillar.title}
                </h3>
                <p className="text_1 3xl:text-[18px]">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
