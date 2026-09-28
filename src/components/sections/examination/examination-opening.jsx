"use client";
import Link from "next/link";
import Image from "next/image";
import { Dialog } from "@base-ui/react/dialog";
import { ChevronRight, X } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { buttonVariants } from "@/components/ui/button";

const local_data = {
  title: "Current Openings",
  openings: [
    {
      id: 1,
      title: "Assistant Professor",
      description: "Department of Computer Science",
      requirements: [
        "5+ Years of Teaching Experience",
        "No of Positions : 3",
        "DSU Main Campus, Bangalore",
      ],
      qualifications: [
        "Ph.D. in Computer Science / Computer Science & Engineering from a recognized university.",
        "M.Tech / M.E. in Computer Science, Artificial Intelligence, Data Science, Information Technology, or related discipline.",
      ],
      jobDescription:
        "The Assistant Professor will play a vital role in the Department of Computer Science, contributing significantly to teaching, research, and academic development. This position entails delivering high-quality education to students, fostering their intellectual growth, and providing guidance throughout their academic journey. Additionally, the Assistant Professor will support the department's growth by engaging in innovative research projects, collaborating with colleagues, and participating in community outreach initiatives. This role is essential for shaping the future of the department and ensuring that students receive a comprehensive and enriching educational experience.",
    },
    {
      id: 2,
      title: "Associate Professor",
      description: "Department of Commerce",
      requirements: [
        "3+ Years of Teaching Experience",
        "No of Positions : 2",
        "DSU Main Campus, Bangalore",
      ],
      qualifications: [
        "A Ph.D. in Commerce, Management, or a closely related discipline from a recognized university.",
        "A relevant postgraduate degree with a strong record of teaching and research in Commerce.",
      ],
      jobDescription:
        "The Associate Professor will contribute to teaching, research, and academic development in the Department of Commerce. The role includes mentoring students, supporting curriculum development, and collaborating with colleagues on research and departmental initiatives.",
    },
    {
      id: 3,
      title: "Lecturer",
      description: "Department of Mechanical Engineering",
      requirements: [
        "1+ Years of Teaching Experience",
        "No of Positions : 4",
        "DSU Main Campus, Bangalore",
      ],
      qualifications: [
        "A postgraduate degree in Mechanical Engineering or a closely related discipline.",
        "Relevant subject expertise and a commitment to effective teaching and student development.",
      ],
      jobDescription:
        "The Lecturer will deliver engaging instruction in the Department of Mechanical Engineering, support practical learning, and guide students in their academic work. The role also involves contributing to course development and departmental activities.",
    },
    {
      id: 4,
      title: "Associate Professor",
      description: "Department of Mathematics",
      requirements: [
        "7+ Years of Teaching Experience",
        "No of Positions : 2",
        "DSU Main Campus, Bangalore",
      ],
      qualifications: [
        "A Ph.D. in Mathematics or a closely related discipline from a recognized university.",
        "A strong record of teaching, research, and academic contribution in Mathematics.",
      ],
      jobDescription:
        "The Associate Professor will lead high-quality teaching and research in the Department of Mathematics, mentor students and colleagues, and contribute to curriculum development and academic leadership.",
    },
    {
      id: 5,
      title: "Lecturer",
      description: "Department of Physics",
      requirements: [
        "3+ Years of Teaching Experience",
        "No of Positions : 4",
        "DSU Main Campus, Bangalore",
      ],
      qualifications: [
        "A postgraduate degree in Physics or a closely related discipline from a recognized university.",
        "Relevant teaching experience and the ability to support practical and research-led learning.",
      ],
      jobDescription:
        "The Lecturer will teach and support learning in the Department of Physics, guide students through theoretical and practical coursework, and contribute to curriculum and departmental activities.",
    },
    {
      id: 6,
      title: "Research Fellow",
      description: "Department of Chemistry",
      requirements: [
        "PhD Required",
        "No of Positions : 1",
        "DSU Main Campus, Bangalore",
      ],
      qualifications: [
        "A Ph.D. in Chemistry or a closely related discipline from a recognized university.",
        "Experience in research methods, laboratory practice, and scholarly communication.",
      ],
      jobDescription:
        "The Research Fellow will contribute to research projects in the Department of Chemistry, conduct laboratory and literature-based work, and collaborate with faculty on analysis, reporting, and dissemination of findings.",
    },
  ],
};

export default function ExaminationOpening({ data = local_data }) {
  return (
    <section className="w-full h-auto py-10 sm:py-12.5 lg:py-17.5 2xl:py-20 3xl:py-25 bg-linear-to-br from-[#EFF6FF] to-[#F9FAFB] block">
      <div class="container">
        <Heading
          align="center"
          className="mb-5 sm:mb-7.5 lg:mb-10 2xl:mb-15 3xl:mb-22.5"
        >
          {data?.title}
        </Heading>
        <div className="[--gap:5px] 2xl:[--gap:10px] w-full h-auto -mx-(--gap) flex flex-wrap">
          {data?.openings.map((item) => (
            <div
              key={item?.id}
              className="w-full sm:w-1/2 lg:w-1/3 h-auto p-(--gap) block"
            >
              <div className="w-full h-full p-[20px_20px_20px_15px] sm:p-[30px_30px_30px_15px] 3xl:p-[40px_40px_40px_20px] bg-white rounded-[6px] 2xl:rounded-[10px] overflow-hidden block">
                <div className="w-full h-auto mb-5 sm:mb-7.5 2xl:mb-10 3xl:mb-12.5">
                  <div className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-[45px] leading-[1.1] font-bold text-[#212121] mb-2.5 sm:mb-3.75 2xl:mb-5 3xl:mb-7.5">
                    {item?.title}
                  </div>
                  <div className="text-sm 2xl:text-base 3xl:text-xl leading-[1.1] font-semibold text-[#212121]">
                    {item?.description}
                  </div>
                </div>
                <div className="w-full h-auto mb-5 sm:mb-6.25 lg:mb-7.5 3xl:mb-10 block">
                  {item?.requirements.map((item) => (
                    <div
                      key={item?.id}
                      className="w-full h-auto not-last:mb-2.5 sm:not-last:mb-3.75 2xl:not-last:mb-5 3xl:not-last:mb-7.5 block"
                    >
                      <div className="[--size:13px] 2xl:[--size:15px] 3xl:[--size:20px] text-sm 2xl:text-base 3xl:text-xl leading-[1.1] font-normal text-[#4A5565] pl-[calc(var(--size)+10px)] relative z-0 before:content-[''] before:size-(--size) before:bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2217%22%20height%3D%2221%22%20viewBox%3D%220%200%2017%2021%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M0%2019.6893L6.94444%2010.4256L0%201.16192L1.09931%200L16.7399%2010.4256L1.09931%2020.8513L0%2019.6893ZM4.147%2016.8695L13.8084%2010.4256L4.147%203.98175L8.97772%2010.4256L4.147%2016.8695Z%22%20fill%3D%22url(%23paint0_linear_5391_125707)%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22paint0_linear_5391_125707%22%20x1%3D%228.36997%22%20y1%3D%220%22%20x2%3D%228.36997%22%20y2%3D%2220.8513%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23DC2626%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23F97316%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E')] before:bg-no-repeat before:bg-center before:bg-contain before:translate-y-px before:absolute before:z-1 before:inset-[0_auto_0_0]">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full h-auto gap-2.5 lg:gap-3.75 flex flex-wrap">
                  <Dialog.Root>
                    <Dialog.Trigger
                      className={buttonVariants({
                        variant: "outline",
                        size: "default",
                        className:
                          "border-transparent! text-[#212121]! transition-shadow duration-200 hover:shadow-[0_0_0_3px_rgba(220,38,38,0.20)]",
                      })}
                      style={{
                        background:
                          "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, var(--basecolor), var(--basecolor2)) border-box",
                        border: "2px solid transparent",
                        color: "#212121",
                      }}
                    >
                      View Detail
                      <Image
                        src="/images/icon-btn.svg"
                        alt="home-btn"
                        width={15}
                        height={15}
                        className="size-3.75 brightness-0"
                        data-icon="inline-end"
                      />
                    </Dialog.Trigger>
                    <Dialog.Portal>
                      <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/35" />
                      <Dialog.Popup className="w-full max-h-[90dvh] overflow-y-auto fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div class="container">
                          <div className="w-full h-full bg-linear-to-b from-[#FFF8EE] to-[#FFF3E0] block">
                            <div className="w-full h-auto py-[70px_50px] border-b border-black/10 relative z-0">
                              <Dialog.Title className="text-[55px] leading-[1.1] font-bold text-center text-[#212121]">
                                Job Details
                              </Dialog.Title>
                              <Dialog.Close
                                aria-label="Close job details"
                                className="absolute right-4 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded text-[#F0442E] transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#168BFF]"
                              >
                                <X className="size-5" />
                              </Dialog.Close>
                            </div>
                            <div className="px-6 py-7 md:px-10 md:py-9">
                              <h3 className="mb-1 text-2xl font-bold leading-tight md:text-[28px]">
                                {item?.title}
                              </h3>
                              <p className="mb-5 text-sm font-semibold text-[#212121] md:text-base">
                                {item?.description}
                              </p>
                              <ul className="mb-7 grid gap-x-6 gap-y-3 text-sm text-[#5D6775] md:grid-cols-3">
                                {item?.requirements.map((requirement) => (
                                  <li
                                    key={requirement}
                                    className="flex items-start gap-2"
                                  >
                                    <ChevronRight
                                      aria-hidden="true"
                                      className="mt-0.5 size-4 shrink-0 text-[#F0442E]"
                                    />
                                    <span>{requirement}</span>
                                  </li>
                                ))}
                              </ul>
                              <div className="mb-7">
                                <h4 className="mb-2 text-sm font-semibold text-[#4A5565]">
                                  Essential Qualifications
                                </h4>
                                <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[#5D6775]">
                                  {item?.qualifications.map((qualification) => (
                                    <li key={qualification}>{qualification}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mb-7">
                                <h4 className="mb-1 text-sm font-semibold text-[#4A5565]">
                                  Job Description
                                </h4>
                                <p className="text-sm leading-6 text-[#5D6775]">
                                  {item?.jobDescription}
                                </p>
                              </div>
                              <Link
                                href={item?.button?.link || "#"}
                                className={buttonVariants({
                                  variant: "default",
                                  size: "default",
                                })}
                              >
                                Apply Now
                                <Image
                                  src="/images/icon-btn.svg"
                                  alt=""
                                  width={15}
                                  height={15}
                                  className="size-3.75"
                                  data-icon="inline-end"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Dialog.Popup>
                    </Dialog.Portal>
                  </Dialog.Root>
                  <Link
                    href={item?.button?.link || "#"}
                    className={buttonVariants({
                      variant: "default",
                      size: "default",
                    })}
                  >
                    Apply Now
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
