import Link from "next/link";
import Image from "next/image";

const local_data = {
  background_image: "/images/home-journey.webp",
  title: "Start Your Journey With Us",
  description:
    "<p>Take the next step toward a future-ready education supported by innovation, <br> research, and industry collaboration.</p>",
  certified_list: [
    {
      id: 1,
      icon: "/images/rating-star.svg",
      label: "NAAC A+ Accredited",
    },
    {
      id: 2,
      label: "UGC Recognized",
    },
  ],
};

export default function Journey({ data = local_data }) {
  return (
    <section className="w-full h-auto py-[50px] lg:py-[60px] xl:py-[80px] 2xl:py-[120px] block relative z-0">
      <Image
        src={data?.background_image}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt="Journey"
        className="object-cover -z-2"
      />
      <div className="w-full h-full bg-black/70 dark:bg-[#DC2626]/50 pointer-events-none absolute -z-1 inset-0" />
      <div className="container xl:max-w-[1160px] 2xl:max-w-[1725px] mx-auto">
        <div className="text-[22px] sm:text-[26px] lg:text-[30px] xl:text-[37px] 2xl:text-[55px] leading-normal font-bold text-center text-white mb-[10px] 2xl:mb-[15px]">
          {data?.title}
        </div>
        <div
          className="text-[8px] sm:text-[13px] xl:text-[14px] 2xl:text-[18px] leading-normal font-normal text-center mb-[15px] 2xl:mb-[25px]"
          dangerouslySetInnerHTML={{
            __html: data?.description,
          }}
        />
        <div className="w-full h-auto gap-[5px] xl:gap-[10px] mb-[10px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[30px] flex flex-wrap justify-center">
          <Link
            href="#!"
            className="text-[8px] sm:text-[13px] xl:text-[14px] 2xl:text-[18px] leading-normal font-bold text-[#E05128] w-auto h-[20px] sm:h-[30px] xl:h-[35px] 2xl:h-[50px] px-[10px] sm:px-[15px] 2xl:px-[20px] gap-[10px] xl:gap-[15px] 2xl:gap-[20px] bg-white rounded-[3px] xl:rounded-[5px] overflow-hidden transition duration-500 inline-flex items-center justify-center hover:bg-transparent hover:border-1 hover:border-[#E05128]"
          >
            Apply Now
            <span className="w-[10px] sm:w-[12px] 2xl:w-[15px] h-auto aspect-square overflow-hidden flex items-center justify-center">
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
            className="text-[8px] sm:text-[13px] xl:text-[14px] 2xl:text-[18px] leading-normal font-bold text-black w-auto h-[20px] sm:h-[30px] xl:h-[35px] 2xl:h-[50px] px-[10px] sm:px-[15px] 2xl:px-[20px] gap-[10px] xl:gap-[15px] 2xl:gap-[20px] bg-[#FDC72F] rounded-[3px] xl:rounded-[5px] overflow-hidden inline-flex items-center justify-center"
          >
            Talk to an Advisor
            <span className="w-[10px] sm:w-[12px] 2xl:w-[15px] h-auto aspect-square overflow-hidden flex items-center justify-center">
              <Image
                src="/images/home-journey-button-2.svg"
                width={15}
                height={15}
                alt="Arrow"
                className="w-full h-full object-contain"
              />
            </span>
          </Link>
          <Link
            href="#!"
            className="text-[8px] sm:text-[13px] xl:text-[14px] 2xl:text-[18px] leading-normal font-bold text-white w-auto h-[20px] sm:h-[30px] xl:h-[35px] 2xl:h-[50px] px-[10px] sm:px-[15px] 2xl:px-[20px] gap-[10px] xl:gap-[15px] 2xl:gap-[20px] rounded-[3px] xl:rounded-[5px] border-1 border-white overflow-hidden inline-flex items-center justify-center"
          >
            Book a Campus Visit
            <span className="w-[10px] sm:w-[12px] 2xl:w-[15px] h-auto aspect-square overflow-hidden flex items-center justify-center">
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
              className="w-auto h-auto inline-flex relative z-0 last:before:hidden last:before: before:content-[''] before:w-[1px] h-full before:bg-white/20 before:translate-x-[calc(var(--gap)/2)] before:absolute before:z-1 before:inset-[0_0_0_auto]"
            >
              <div className="w-full h-auto gap-[10px] flex items-center">
                {item?.icon && (
                  <div className="w-[35px] sm:w-[50px] xl:w-[60px] 2xl:w-[85px] h-auto aspect-[85/25] overflow-hidden flex items-center justify-center">
                    <Image
                      src={item?.icon}
                      width={50}
                      height={50}
                      alt={item?.label}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div className="text-[8px] sm:text-[10px] xl:text-[12px] 2xl:text-[14px] leading-normal font-normal text-white flex-1">
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
