import Link from "next/link";
import Image from "next/image";

export default function FacultyProfessorInfo({ data }) {
  return (
    <section className="w-full h-auto py-10 3xl:py-12.5 dark:bg-[#101010] block">
      <div className="container">
        <Link
          href="/faculty-directory"
          className="group w-fit h-auto mb-3.75 sm:mb-5 2xl:mb-7.5 3xl:mb-8.75 flex items-center"
        >
          <div className="w-3 3xl:w-3.75 h-auto aspect-square overflow-hidden flex items-center justify-center">
            <Image
              src={"/images/faculty-back-bn.svg"}
              alt="Back-Btn"
              width={15}
              height={15}
              className="w-full h-full object-contain group-hover:[filter:brightness(0)_saturate(100%)_invert(30%)_sepia(94%)_saturate(5405%)_hue-rotate(350deg)_brightness(90%)_contrast(90%)]"
            />
          </div>
          <div className="text-[15px] 3xl:text-lg leading-[1.1] font-medium text-[#212121] dark:text-white pl-2.5 group-hover:underline group-hover:underline-offset-2 group-hover:text-(--basecolor)">
            Back to Faculty Directory
          </div>
        </Link>
        <div className="[--imageWidth:120px] sm:[--imageWidth:170px] lg:[--imageWidth:190px] 2xl:[--imageWidth:250px] 3xl:[--imageWidth:310px] w-full h-auto p-[15px_20px] sm:p-[20px_40px] lg:p-[30px_60px] 2xl:p-[30px_80px] 3xl:p-[40px_100px] mb-5 sm:mb-7.5 lg:mb-10 2xl:mb-12.5 3xl:mb-15 rounded-[5px] border border-black/10 dark:border-white/10 dark:bg-[#18191B] overflow-hidden flex flex-wrap items-center">
          <div className="w-(--imageWidth) h-auto aspect-square rounded-md 2xl:rounded-[10px] overflow-hidden block">
            <Image
              src={data?.professorImage?.url}
              alt={data?.professorImage?.alternativeText}
              width={310}
              height={310}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:max-w-137.5 2xl:max-w-162.5 3xl:max-w-212.5 flex-1 pl-5 sm:pl-12.5 lg:pl-40 2xl:pl-52.5 3xl:pl-65">
            <div className="w-full h-auto space-y-1.25 2xl:space-y-2.5 mb-2.5 sm:mb-3.75 2xl:mb-5 3xl:mb-7.5">
              <div className="text-[22px] sm:text-3xl lg:text-[34px] 2xl:text-[44px] 3xl:text-[55px] leading-[1.1] font-bold text-[#212121] dark:text-white">
                {data?.professorName}
              </div>
              <div className="text-sm 2xl:text-lg 3xl:text-[22px] leading-[1.1] font-medium bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit">
                {data?.designation}
              </div>
            </div>
            <div className="w-full h-auto py-2.5 sm:py-3.75 2xl:py-5 3xl:py-7.5 space-y-2.5 2xl:space-y-3.75 3xl:space-y-5 border-y border-black/10 dark:border-white/10">
              <div className="text-[13px] 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-normal text-[#4A5565] dark:text-[#9CA3AF]">
                Qualifications :
                <span className="font-semibold">{data?.qualification}</span>
              </div>
              <div className="text-[13px] 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-normal text-[#4A5565] dark:text-[#9CA3AF]">
                Department :
                <span className="font-semibold">
                  {[data?.department, data?.school].filter(Boolean).join(", ")}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="typhography [&_p]:leading-[1.8] [&_p]:text-[#4A5565] [&_p]:mb-2.5 sm:[&_p]:mb-3.75 2xl:[&_p]:mb-5 3xl:[&_p]:mb-7.5"
          dangerouslySetInnerHTML={{
            __html: data?.bio || "",
          }}
        />
        <span className="text-sm 2xl:text-lg 3xl:text-[22px] leading-[1.1] font-medium bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit">
          BEST WISHES !
        </span>
      </div>
    </section>
  );
}
