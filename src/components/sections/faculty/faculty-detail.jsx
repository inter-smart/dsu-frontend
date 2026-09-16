import Link from "next/link";
import Image from "next/image";

export default function FacultyDetail({ data }) {
  return (
    <section className="w-full h-auto py-[50px_100px] block">
      <div className="container">
        <Link
          href="/faculty"
          className="group w-fit h-auto mb-8.75 flex items-center"
        >
          <div className="w-3.75 h-auto aspect-square overflow-hidden flex items-center justify-center">
            <Image
              src={"/images/faculty-back-bn.svg"}
              alt="Back-Btn"
              width={15}
              height={15}
              className="w-full h-full object-contain group-hover:[filter:brightness(0)_saturate(100%)_invert(30%)_sepia(94%)_saturate(5405%)_hue-rotate(350deg)_brightness(90%)_contrast(90%)]"
            />
          </div>
          <div className="text-lg leading-[1.1] font-medium text-[#212121] pl-2.5 group-hover:underline group-hover:underline-offset-2 group-hover:text-(--basecolor)">
            Back to Faculty Directory
          </div>
        </Link>
        <div className="[--imageWidth:310px] w-full h-auto p-[40px_100px] mb-15 rounded-[5px] border border-black/10 overflow-hidden flex flex-wrap items-center">
          <div className="w-(--imageWidth h-auto aspect-square rounded-[10px] overflow-hidden block">
            <Image
              src={data?.professorInfo?.professorImage?.url}
              alt={data?.professorInfo?.professorImage?.alternativeText}
              width={310}
              height={310}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 pl-65">
            <div className="w-full h-auto space-y-5 mb-7.5">
              <div className="text-[55px] leading-[1.1] font-bold text-[#212121]">
                {data?.professorInfo?.professorName}
              </div>
              <div className="text-[22px] leading-[1.1] font-medium bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit">
                {data?.professorInfo?.designation}
              </div>
            </div>
            <div className="w-full h-auto py-7.5 space-y-5 border-y border-black/10">
              <div className="text-lg leading-[1.1] font-normal text-[#4A5565]">
                Qualifications :
                <span className="font-semibold">
                  {data?.professorInfo?.qualification}
                </span>
              </div>
              <div className="text-lg leading-[1.1] font-normal text-[#4A5565]">
                Department :
                <span className="font-semibold">
                  {data?.professorInfo?.department}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="typhography">{data?.professorInfo?.bio}</div>
      </div>
    </section>
  );
}
