import Link from "next/link";
import Image from "next/image";

export default function Journey({ data }) {
  return (
    <section className="w-full h-auto py-12.5 lg:py-15 xl:py-20 2xl:py-30 block relative z-0">
      <Image
        src={data?.background_image}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt="Journey"
        className="object-cover -z-2"
      />
      <div className="w-full h-full bg-black/70 dark:bg-linear-to-r dark:from-(--basecolor)/90 dark:to-(--basecolor2)/90 pointer-events-none absolute -z-1 inset-0" />
      <div className="container xl:max-w-290 2xl:max-w-431.25 mx-auto">
        <div className="text-[22px] sm:text-[26px] lg:text-3xl xl:text-[37px] 2xl:text-[55px] leading-normal font-bold text-center text-white mb-2.5 2xl:mb-3.75">
          {data?.title}
        </div>
        <div
          className="text-[8px] sm:text-[13px] xl:text-sm 2xl:text-lg leading-normal font-normal text-center [&>*]:text-[#FFF2F2] mb-3.75 2xl:mb-6.25"
          dangerouslySetInnerHTML={{
            __html: data?.description,
          }}
        />
        <div className="w-full h-auto gap-1.25 xl:gap-2.5 mb-2.5 sm:mb-3.75 xl:mb-5 2xl:mb-7.5 flex flex-wrap justify-center">
          <Link
            href="#!"
            className="text-[8px] sm:text-[13px] xl:text-sm 2xl:text-lg leading-normal font-bold text-[#E05128] w-auto h-5 sm:h-7.5 xl:h-8.75 2xl:h-12.5 px-2.5 sm:px-3.75 2xl:px-5 gap-2.5 xl:gap-3.75 2xl:gap-5 bg-white rounded-[3px] xl:rounded-[5px] overflow-hidden transition-colors duration-500 inline-flex items-center justify-center hover:bg-(--basecolor)/10 hover:border hover:border-[#E05128] dark:hover:border-white dark:hover:text-white"
          >
            Apply Now
            <span className="w-2.5 sm:w-3 2xl:w-3.75 h-auto aspect-square overflow-hidden flex items-center justify-center">
              <Image
                src="/images/home-journey-button-1.svg"
                width={15}
                height={15}
                alt="Arrow"
                className="w-full h-full object-contain"
              />
            </span>
          </Link>
          <Link
            href="#!"
            className="group text-[8px] sm:text-[13px] xl:text-sm 2xl:text-lg leading-normal font-bold text-black w-auto h-5 sm:h-7.5 xl:h-8.75 2xl:h-12.5 px-2.5 sm:px-3.75 2xl:px-5 gap-2.5 xl:gap-3.75 2xl:gap-5 bg-[#FDC72F] rounded-[3px] xl:rounded-[5px] overflow-hidden inline-flex items-center justify-center transition-colors duration-500 hover:bg-(--basecolor2) hover:text-white"
          >
            Talk to an Advisor
            <span className="w-2.5 sm:w-3 2xl:w-3.75 h-auto aspect-square overflow-hidden flex items-center justify-center">
              <Image
                src="/images/home-journey-button-2.svg"
                width={15}
                height={15}
                alt="Arrow"
                className="w-full h-full object-contain transition-all duration-500 group-hover:invert"
              />
            </span>
          </Link>
          <Link
            href="#!"
            className="text-[8px] sm:text-[13px] xl:text-sm 2xl:text-lg leading-normal font-bold text-white w-auto h-5 sm:h-7.5 xl:h-8.75 2xl:h-12.5 px-2.5 sm:px-3.75 2xl:px-5 gap-2.5 xl:gap-3.75 2xl:gap-5 rounded-[3px] xl:rounded-[5px] border border-white overflow-hidden inline-flex items-center justify-center transition-colors duration-500 hover:bg-(--basecolor)"
          >
            Book a Campus Visit
            <span className="w-2.5 sm:w-3 2xl:w-3.75 h-auto aspect-square overflow-hidden flex items-center justify-center">
              <Image
                src="/images/home-journey-button-3.svg"
                width={15}
                height={15}
                alt="Arrow"
                className="w-full h-full object-contain"
              />
            </span>
          </Link>
        </div>
        <div className="[--gap:20px] sm:[--gap:25px] xl:[--gap:35px] 2xl:[--gap:50px] w-full h-auto gap-(--gap) flex flex-wrap justify-center">
          {data?.certified_list?.map((item) => (
            <div
              key={item?.id}
              className="w-auto h-auto inline-flex relative z-0 last:before:hidden last:before: before:content-[''] before:w-px before:h-full before:bg-white/20 before:translate-x-[calc(var(--gap)/2)] before:absolute before:z-1 before:inset-[0_0_0_auto]"
            >
              <div className="w-full h-auto gap-2.5 flex items-center">
                {item?.icon && (
                  <div className="w-8.75 sm:w-12.5 xl:w-15 2xl:w-21.25 h-auto aspect-85/25 overflow-hidden flex items-center justify-center">
                    <Image
                      src={item?.icon}
                      width={50}
                      height={50}
                      alt={item?.label || "Journey Icon"}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div className="text-[8px] sm:text-[10px] xl:text-xs 2xl:text-sm leading-normal font-normal text-white flex-1">
                  {item?.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
