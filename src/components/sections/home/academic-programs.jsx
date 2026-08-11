import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AcademicPrograms({ data }) {
  return (
    <section className="w-full py-[40px] xl:py-[60px] 2xl:py-[70px] 3xl:py-[80px] bg-linear-to-b from-[#FFF8EE] to-[#FFF3E0]">
      <div className="container">
        <div className="title_1 text-center text-[#212121] mb-1 xl:mb-2">
          {data.title}
        </div>
        <div className="text_1 text-center text-[#4A5565] mb-5 xl:mb-[25px] 2xl:mb-[31px] 3xl:mb-10">
          {data.description}
        </div>
        <div className="flex flex-wrap justify-center -mx-[4px] 2xl:-mx-[5px] 3xl:-mx-[6px]">
          {data.programItems?.map((item, idx) => (
            <div
              key={"programItems" + idx}
              className="w-1/2 sm:w-1/3 lg:w-1/5 p-[8px_4px] 2xl:p-[10px_5px] 3xl:p-[12px_6px]"
            >
              <div className="group w-full aspect-square rounded-[10px] overflow-hidden block relative z-0 p-[15px_10px] 2xl:p-[20px_15px] 3xl:p-[25px_20px]">
                <div className="absolute -z-1 inset-0 bg-linear-to-t from-black via-transparent opacity-60" />
                <Image
                  src={item?.featuredImage?.url}
                  alt={item?.featuredImage?.alternativeText}
                  fill
                  sizes="768px"
                  className="-z-2 object-cover group-hover:scale-110 transition-transform"
                />
                <div className="h-full flex flex-col justify-between">
                  <div className="size-[37px] 2xl:size-[44px] 3xl:size-[56px] bg-[#D9D9D9]/10 rounded-[10px] flex backdrop-blur-[40px]">
                    <Image
                      src={item?.icon?.url}
                      alt={item?.icon?.alternativeText}
                      width={32}
                      height={32}
                      className="w-[21px] 2xl:w-[25px] 3xl:w-[32px] m-auto object-contain"
                    />
                  </div>
                  <h3 className="text-[13px] 2xl:text-[16px] 3xl:text-[20px] leading-tight font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-[25px] 2xl:mt-[30px] 3xl:mt-[40px]">
          <Link
            href="/centres-of-excellence"
            className={buttonVariants({
              variant: "default",
              size: "default",
            })}
          >
            View All Centers
            <Image
              src="/images/icon-btn.svg"
              alt="home-btn"
              width={15}
              height={15}
              className="size-[15px]"
              data-icon="inline-end"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
