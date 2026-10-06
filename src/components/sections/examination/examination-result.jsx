import Link from "next/link";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import LibrarySidebar from "../ai-enabled/library/library-sidemenubar";
import AiAcademicMenubar from "../ai-enabled/Ai-academicMenubar";

export default function ExaminationResult({ data }) {
  return (
    <section className="w-full h-auto py-[20px_40px] sm:py-[30px_50px] lg:py-[60px_70px] 2xl:py-[70px_90px] 3xl:py-[90px_130px] block relative z-0">
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
            <div className="w-full h-auto p-[20px_20px_0px_20px] sm:p-[30px_30px_0px_30px] 2xl:p-[40px_40px_0px_40px] 3xl:p-[50px_50px_0px_50px] border border-black/10 rounded-[10px] sm:rounded-[13px] 2xl:rounded-[20px] overflow-hidden">
              <div className="w-full h-auto mb-6.25 lg:mb-7.5 2xl:mb-10 3xl:mb-12.5 space-y-3.75 lg:space-y-3.75 3xl:space-y-7.5">
                <Heading>{data?.title}</Heading>
                <Text>{data?.description}</Text>
              </div>
              <div className="w-full h-auto block">
                {data?.results?.map((item) => (
                  <div
                    key={item?.id}
                    className="w-full h-auto border-b border-black/10 last:border-b-0 first:[&_a]:pt-0 block"
                  >
                    <Link
                      href={item?.url || "#"}
                      className="text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.2] font-medium text-[#212121] py-2.5 sm:py-3.75 2xl:py-5 gap-1.5 2xl:gap-2.5 transition-colors duration-300 hover:text-(--basecolor2) flex relative z-0 before:content-[''] before:size-2.75 2xl:before:size-3.75 before:shrink-0 before:border-[1.5px] before:border-transparent before:[background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#DC2626,#F97316)_border-box] before:rounded-full before:translate-y-[1.5px] 3xl:before:translate-y-0.5 before:inline-block"
                    >
                      {item?.label}
                      {item?.isNew && (
                        <span className="text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-semibold bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit">
                          New
                        </span>
                      )}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
