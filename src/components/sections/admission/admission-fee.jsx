"use client";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const local_data = {
  title: "Find a programme that Fits Your Goals",
  description:
    "Explore undergraduate, postgraduate, doctoral, certificate, online and medical programmes at Dayananda Sagar University.",
  categories: [
    {
      id: "undergraduate",
      label: "Undergraduate",
      courses: [
        {
          id: "engineering",
          name: "School of Engineering",
          items: [
            {
              title: "B.Tech Computer Science & Engineering",
              level: "UG",
              duration: "4 Years",
              eligibility: {
                title: "Eligibility",
                description:
                  "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together, of any Board recognized by the respective State Governments / Central Government / Union Territories or any other qualification recognized as equivalent thereto.",
              },
            },
            {
              title: "B.Tech Computer Science & Engineering (Data Sciences)",
              level: "UG",
              duration: "4 Years",
            },
            {
              title: "B.Tech Computer Science & Engineering (Cyber Security)",
              level: "UG",
              duration: "4 Years",
            },
            {
              title:
                "B.Tech Computer Science & Engineering (Artificial Intelligence and Machine Learning)",
              level: "UG",
              duration: "5 Years",
            },
            {
              title: "B.Tech Robotics & AI",
              level: "UG",
              duration: "4 Years",
            },
            {
              title: "B.Tech Electronics & Communication Engineering",
              level: "UG",
              duration: "4 Years",
            },
            {
              title: "B.Tech Mechanical Engineering",
              level: "UG",
              duration: "4 Years",
            },
            {
              title: "B.Tech Computer Science & Technology",
              level: "UG",
              duration: "4 Years",
            },
            {
              title: "B.Tech Aerospace Engineering",
              level: "UG",
              duration: "4 Years",
            },
          ],
        },
        {
          id: "computer-applications",
          name: "School of Computer Applications",
          items: [
            {
              title: "Bachelor of Computer Applications",
              level: "UG",
              duration: "3 Years",
            },
            {
              title: "B.Sc. Data Science",
              level: "UG",
              duration: "3 Years",
            },
          ],
        },
        {
          id: "law",
          name: "School of Law",
          items: [
            { title: "B.A. LL.B.", level: "UG", duration: "5 Years" },
            { title: "B.B.A. LL.B.", level: "UG", duration: "5 Years" },
            { title: "LL.B.", level: "UG", duration: "3 Years" },
          ],
        },
        {
          id: "basic-applied-sciences",
          name: "School of Basic & Applied Sciences",
          items: [
            {
              title: "B.Sc. Biotechnology",
              level: "UG",
              duration: "3 Years",
            },
            { title: "B.Sc. Chemistry", level: "UG", duration: "3 Years" },
            { title: "B.Sc. Physics", level: "UG", duration: "3 Years" },
          ],
        },
        {
          id: "commerce-management",
          name: "School of Commerce & Management",
          items: [
            {
              title: "B.Sc. Biotechnology",
              level: "UG",
              duration: "3 Years",
            },
            { title: "B.Sc. Chemistry", level: "UG", duration: "3 Years" },
            { title: "B.Sc. Physics", level: "UG", duration: "3 Years" },
          ],
        },
        {
          id: "health-sciences",
          name: "School of Health Sciences",
          items: [
            {
              title: "B.Sc. Biotechnology",
              level: "UG",
              duration: "3 Years",
            },
            { title: "B.Sc. Chemistry", level: "UG", duration: "3 Years" },
            { title: "B.Sc. Physics", level: "UG", duration: "3 Years" },
          ],
        },
        {
          id: "arts-design-humanities",
          name: "School of Arts, Design & Humanities",
          items: [
            {
              title: "B.Sc. Biotechnology",
              level: "UG",
              duration: "3 Years",
            },
            { title: "B.Sc. Chemistry", level: "UG", duration: "3 Years" },
            { title: "B.Sc. Physics", level: "UG", duration: "3 Years" },
          ],
        },
        {
          id: "design-digital-transmedia",
          name: "School of Design & Digital Trans-Media",
          items: [
            {
              title: "B.Sc. Biotechnology",
              level: "UG",
              duration: "3 Years",
            },
            { title: "B.Sc. Chemistry", level: "UG", duration: "3 Years" },
            { title: "B.Sc. Physics", level: "UG", duration: "3 Years" },
          ],
        },
      ],
    },
    {
      id: "postgraduate",
      label: "Postgraduate",
      courses: [
        {
          id: "engineering",
          name: "School of Engineering",
          items: [
            {
              title: "M.Tech Computer Science & Engineering",
              level: "PG",
              duration: "2 Years",
            },
            {
              title: "M.Tech Structural Engineering",
              level: "PG",
              duration: "2 Years",
            },
          ],
        },
        {
          id: "computer-applications",
          name: "School of Computer Applications",
          items: [
            {
              title: "Master of Computer Applications",
              level: "PG",
              duration: "2 Years",
            },
            {
              title: "M.Sc. Data Science",
              level: "PG",
              duration: "2 Years",
            },
          ],
        },
        {
          id: "law",
          name: "School of Law",
          items: [{ title: "LL.M.", level: "PG", duration: "1 Year" }],
        },
      ],
    },
    {
      id: "doctoral",
      label: "Doctoral",
      courses: [
        {
          id: "engineering",
          name: "School of Engineering",
          items: [
            {
              title: "Ph.D. in Engineering",
              level: "Doctoral",
              duration: "3+ Years",
            },
          ],
        },
        {
          id: "management",
          name: "School of Commerce & Management Studies",
          items: [
            {
              title: "Ph.D. in Management",
              level: "Doctoral",
              duration: "3+ Years",
            },
          ],
        },
        {
          id: "basic-applied-sciences",
          name: "School of Basic & Applied Sciences",
          items: [
            {
              title: "Ph.D. in Basic & Applied Sciences",
              level: "Doctoral",
              duration: "3+ Years",
            },
          ],
        },
      ],
    },
    {
      id: "online",
      label: "Online Programmes",
      courses: [
        {
          id: "online-programmes",
          name: "Online Programmes",
          items: [
            { title: "Online MBA", level: "PG", duration: "2 Years" },
            { title: "Online BBA", level: "UG", duration: "3 Years" },
            { title: "Online BCA", level: "UG", duration: "3 Years" },
          ],
        },
      ],
    },
    {
      id: "medical",
      label: "Medical Programmes",
      courses: [
        {
          id: "health-sciences",
          name: "School of Health Sciences",
          items: [
            { title: "B.Sc. Nursing", level: "UG", duration: "4 Years" },
            {
              title: "Bachelor of Physiotherapy",
              level: "UG",
              duration: "4.5 Years",
            },
            { title: "M.Sc. Nursing", level: "PG", duration: "2 Years" },
          ],
        },
      ],
    },
  ],
};

export default function AdmissionFee({ data = local_data }) {
  return (
    <section className="block h-auto w-full py-[10px_40px] sm:py-[10px_50px] lg:py-15 2xl:py-20 3xl:py-25">
      <div className="container">
        <div className="w-full h-auto block mb-5 sm:mb-7.5 lg:mb-10 2xl:mb-12.5 3xl:mb-15">
          <Heading className="mb-2.5 lg:mb-3.75 2xl:mb-5 3xl:mb-6.25">
            {data?.title}
          </Heading>
          <Text>{data?.description}</Text>
        </div>
        <Tabs defaultValue={data?.categories[0]?.id} className="w-full">
          <TabsList className="w-full h-auto! mb-5 2xl:mb-7.5 3xl:mb-15 gap-2.5 2xl:gap-3.75 p-0 bg-transparent rounded-none flex flex-wrap justify-start">
            {data?.categories.map((items) => (
              <TabsTrigger
                key={items?.id}
                value={items?.id}
                className="text-[13px] 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-medium text-center text-[#212121] w-auto h-8.75 2xl:h-10 3xl:h-12.5 px-6.25 2xl:px-7.5 3xl:px-10 flex-none rounded-md 2xl:rounded-[10px] border border-[#F3D8CC] bg-white hover:bg-(--basecolor2)/20 data-active:border-transparent data-active:bg-linear-to-r data-active:from-(--basecolor) data-active:to-(--basecolor2) data-active:text-white data-active:shadow-none data-active:pointer-events-none"
              >
                {items?.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {data?.categories.map((items) => (
            <TabsContent key={items?.id} value={items?.id}>
              <Accordion
                defaultValue={[items?.courses[0]?.id]}
                className="w-full h-auto gap-1.25 2xl:gap-2.5"
              >
                {items?.courses.map((item, index) => (
                  <AccordionItem
                    key={item?.id}
                    value={item?.id}
                    className="[--gap:10px_15px] lg:[--gap:15px_20px] 2xl:[--gap:20px_30px] 3xl:[--gap:20px] w-full h-auto bg-linear-to-b from-[#FFF8EE]/30 to-[#FFF3E0]/30 border border-black/10 rounded-md 2xl:rounded-[10px] overflow-hidden"
                  >
                    <AccordionTrigger className="w-full h-auto p-(--gap) items-center hover:no-underline [&>svg]:hidden! after:ml-3 after:text-lg after:font-bold after:content-['+'] after:content-text-inherit aria-expanded:after:content-['-']">
                      <div className="w-full h-auto flex items-center">
                        <div className="text-[25px] leading-[1.6] font-semibold text-[#4A5565] w-auto h-auto aspect-square p-[10px_20px] shrink-0 bg-white rounded-[10px] border border-black/10 overflow-hidden flex items-center justify-center">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div className="flex-1 pl-7.5">
                          <div className="text-[22px] leading-[1.2] font-semibold text-[#212121] mb-3.75">
                            {item?.name}
                          </div>
                          <div className="text-lg leading-[1.1] font-normal text-[#4A5565]">
                            {String(item?.items?.length || 0).padStart(2, "0")}{" "}
                            Programs
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="w-full h-auto p-(--gap) pt-0">
                      <div className="w-full h-auto mb-2.5 flex items-center gap-2.5">
                        <span className="text-sm 2xl:text-base leading-[1.2] font-semibold text-[#4A5565] shrink-0">
                          {items?.label === "Online Programmes" ||
                          items?.label === "Medical Programmes"
                            ? items?.label
                            : `${items?.label} Program`}
                        </span>
                        <span className="w-full h-px bg-black/10" />
                      </div>
                      <Accordion
                        defaultValue={[item?.items[0]?.title]}
                        className="gap-3.75"
                      >
                        {item?.items.map((item) => (
                          <AccordionItem
                            key={item?.title}
                            value={item?.title}
                            className="w-full h-auto bg-white rounded-[10px] 2xl:rounded-[15px] border border-[#E3E9EF] overflow-hidden hover:border-(--basecolor) hover:bg-(--basecolor2)/10 transition-colors duration-300"
                          >
                            <AccordionTrigger className="text-sm 2xl:text-base 3xl:text-xl leading-[1.4] font-medium text-[#212121] w-full h-auto p-[0_15px] 2xl:p-[0_20px] 3xl:px-6.25 border-0 rounded-none overflow-hidden no-underline! flex items-center justify-between transition-colors duration-300 [&>svg]:hidden! after:ml-3 after:text-lg after:font-bold after:content-['+'] aria-expanded:after:content-['-']">
                              <div className="w-full h-auto py-2.5 2xl:py-3.75 3xl:py-5 flex items-center">
                                <div className="w-1/2 h-auto gap-1.75 2xl:gap-2.5 flex flex-col">
                                  <span className="text-sm 2xl:text-base 3xl:text-xl leading-[1.2] font-medium text-[#212121] max-w-[80%]">
                                    {item?.title}
                                  </span>
                                  <span className="text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-normal text-[#4A5565] shrink-0 flex items-center gap-2">
                                    {item?.level}
                                    {item?.duration && (
                                      <>
                                        <span className="size-2.5 rounded-full bg-linear-to-r from-(--basecolor) to-(--basecolor2)" />
                                        {item?.duration}
                                      </>
                                    )}
                                  </span>
                                </div>
                                <div className="w-1/2">
                                  <div className="w-full h-auto gap-3.75 grid grid-cols-3 [&>div]:p-3.75">
                                    <div className="w-full h-full gap-3.75 bg-linear-to-b from-[#FFF8EE]/30 to-[#FFF3E0]/30 border border-black/10 rounded-md 2xl:rounded-[10px] overflow-hidden flex flex-col justify-between">
                                      <div className="text-xs leading-[1.2] font-semibold text-[#4A5565]">
                                        {item?.cetFeeLabel || "CET Total Fee"}
                                      </div>
                                      <div className="text-lg leading-[1.2] font-medium text-[#212121]">
                                        {item?.cetFeeValue || "-"}
                                      </div>
                                    </div>
                                    <div className="w-full h-full gap-3.75 bg-linear-to-b from-[#FFF8EE]/30 to-[#FFF3E0]/30 border border-black/10 rounded-md 2xl:rounded-[10px] overflow-hidden flex flex-col justify-between">
                                      <div className="text-xs leading-[1.2] font-semibold text-[#4A5565]">
                                        {item?.rankingLabel ||
                                          "Ranking Based on JEE Mains / Uniguage / Comed-K"}
                                      </div>
                                      <div className="text-lg leading-[1.2] font-medium text-[#212121]">
                                        {item?.rankingValue || "-"}
                                      </div>
                                    </div>
                                    <div className="w-full h-full gap-3.75 bg-linear-to-b from-[#FFF8EE]/30 to-[#FFF3E0]/30 border border-black/10 rounded-md 2xl:rounded-[10px] overflow-hidden flex flex-col justify-between">
                                      <div className="text-xs leading-[1.2] font-semibold text-[#4A5565]">
                                        {item?.totalFeeLabel ||
                                          "Others Total Fee"}
                                      </div>
                                      <div className="text-lg leading-[1.2] font-medium text-[#212121]">
                                        {item?.totalFeeValue || "-"}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="w-full h-auto p-[10px_15px] 2xl:p-[15px_20px] 3xl:p-[20px_25px]">
                                <div className="text-sm 2xl:text-base 3xl:text-xl leading-[1.2] font-medium text-[#212121] mb-2.5">
                                  {item?.eligibility?.title || "Eligibility"}
                                </div>
                                <div className="text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.6] font-normal text-[#4A5565]">
                                  {item?.eligibility?.description ||
                                    "Please refer to the programme-specific admission requirements."}
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
