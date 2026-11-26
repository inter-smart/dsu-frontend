import Link from "next/link";
import Image from "next/image";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { buttonVariants } from "@/components/ui/button";
import AiAcademicMenubar from "../ai-enabled/Ai-academicMenubar";
import LibrarySidebar from "../ai-enabled/library/library-sidemenubar";
import AlumniFileList from "./alumni-file-list";

export default function AlumniNewsletter({ data }) {
  return (
    <section className="w-full h-auto py-[20px_40px] sm:py-[30px_50px] lg:py-[60px_80px] 2xl:py-[70px_100px] 3xl:py-[90px_30px] block relative z-0">
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
            <div className="w-full h-auto p-[20px_20px_30px_20px] sm:p-[30px_30px_70px_30px] 2xl:p-[40px_40px_90px_40px] 3xl:p-[50px_50px_110px_50px] border border-black/10 rounded-[10px] sm:rounded-[13px] 2xl:rounded-[20px] overflow-hidden">
              <div className="w-full h-auto mb-5 sm:mb-6.25 lg:mb-5 2xl:mb-7.5">
                <div className="w-full h-auto mb-2.5 sm:mb-3.75 lg:mb-3.75 2xl:mb-6.25 max-sm:gap-2.5 flex items-center flex-wrap justify-between">
                  <Heading>{data?.title}</Heading>
                  {data?.button && (
                    <Link
                      href={data.button.link || "#"}
                      {...(data.button.isExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className={buttonVariants({
                        variant: "default",
                        size: "default",
                      })}
                    >
                      {data.button.label}
                      <Image
                        src="/images/icon-btn.svg"
                        alt="home-btn"
                        width={15}
                        height={15}
                        className="size-3.75"
                        data-icon="inline-end"
                      />
                    </Link>
                  )}
                </div>
                <Text className={"text-[#4A5565]"}>{data?.description}</Text>
              </div>
              <AlumniFileList items={data?.newsLetter} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
