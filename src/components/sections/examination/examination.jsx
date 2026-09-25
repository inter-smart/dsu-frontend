import Link from "next/link";
import Image from "next/image";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { buttonVariants } from "@/components/ui/button";
import LibrarySidebar from "../ai-enabled/library/library-sidemenubar";
import AiAcademicMenubar from "../ai-enabled/Ai-academicMenubar";

export default function Examination({ data }) {
  return (
    <section className="w-full h-auto py-10 sm:py-12.5 lg:py-[60px_70px] 2xl:py-[70px_90px] 3xl:py-[90px_110px] block relative z-0">
      <div className="container">
        <div className="[--width:100%] lg:[--width:210px] 2xl:[--width:270px] 3xl:[--width:330px] w-full h-auto flex flex-wrap">
          <div className="w-(--width)">
            <LibrarySidebar data={data?.sidebar} />
            <AiAcademicMenubar
              className="[&>div]:px-0 block lg:hidden"
              data={data?.sidebar}
            />
          </div>
          <div className="w-full lg:w-[calc(100%-var(--width))] lg:pl-3.75 2xl:pl-5 3xl:pl-7.5">
            <div className="w-full h-auto p-[20px_10px_30px_20px] sm:p-[30px_20px_50px_30px] 2xl:p-[40px_20px_70px_40px] 3xl:p-[50px_20px_90px_50px] border border-black/10 rounded-[10px] sm:rounded-[13px] 2xl:rounded-[20px] overflow-hidden">
              <div className="w-full h-auto mb-6.25 lg:mb-7.5 2xl:mb-10 3xl:mb-12.5 space-y-3.75 lg:space-y-5 3xl:space-y-7.5">
                <Heading>{data?.title}</Heading>
                <Text>{data?.description}</Text>
                <Link
                  href={data?.button?.link || "#"}
                  className={buttonVariants({
                    variant: "default",
                    size: "default",
                  })}
                >
                  {data?.button?.label}
                  <Image
                    src="/images/icon-btn.svg"
                    alt="home-btn"
                    width={15}
                    height={15}
                    className="size-3.75"
                    data-icon="inline-end"
                  />
                </Link>
              </div>
              <div>
                <div className="text-base 2xl:text-xl 3xl:text-[25px] leading-[1.1] font-bold text-[#212121] mb-3.75">
                  {data?.unversity?.title}
                </div>
                <div className="w-full h-auto space-y-2.5 2xl:space-y-3.75">
                  {data?.unversity?.universityList?.map((item, index) => (
                    <div
                      key={index}
                      className="text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.2] font-normal text-[#4A5565] gap-1.5 2xl:gap-2.5 flex relative z-0 before:content-[''] before:size-2.75 2xl:before:size-3.75 before:shrink-0 before:border-[1.5px] before:border-transparent before:[background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#DC2626,#F97316)_border-box] before:rounded-full before:translate-y-[1.5px] 3xl:before:translate-y-0.5 before:inline-block"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
