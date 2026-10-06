"use client";
import Link from "next/link";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const local_data = {};

export default function AdmissionProgramme({ data }) {
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
          <TabsList className="w-full h-auto! mb-5 2xl:mb-7.5 3xl:mb-8.75 gap-2.5 2xl:gap-3.75 p-0 bg-transparent rounded-none flex flex-wrap justify-start">
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
                {items?.courses.map((item) => (
                  <AccordionItem
                    key={item?.id}
                    value={item?.id}
                    className="[--gap:10px_15px] lg:[--gap:15px_20px] 2xl:[--gap:20px_30px] 3xl:[--gap:25px_40px] w-full h-auto bg-linear-to-b from-[#FFF8EE] to-[#FFF3E0] border border-black/10 rounded-md 2xl:rounded-[10px] overflow-hidden"
                  >
                    <AccordionTrigger className="2xl:text-xl 3xl:text-[25px] leading-[1.1] font-semibold text-[#212121] w-full h-auto p-(--gap) items-center hover:no-underline [&>svg]:hidden! after:ml-3 after:text-lg after:font-bold after:content-['+'] after:content-text-inherit aria-expanded:after:content-['-']">
                      {item?.name}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="w-full h-auto p-(--gap) pt-0 gap-1.25 flex flex-col">
                        {item?.items.map((item) => (
                          <Link
                            key={item?.link}
                            href={item?.link}
                            className="text-sm 2xl:text-base 3xl:text-xl leading-[1.4] font-medium text-[#212121] w-full h-auto p-[10px_15px] 2xl:p-[15px_20px] 3xl:p-[15px_30px] bg-white rounded-[10px] 2xl:rounded-[15px] border border-[#E3E9EF] overflow-hidden !no-underline flex items-center justify-between transition-colors duration-300 hover:bg-(--basecolor2)/10 hover:border-(--basecolor)"
                          >
                            <span>{item?.title}</span>
                            <span className="text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-normal text-[#4A5565] shrink-0">
                              {items?.label}
                            </span>
                          </Link>
                        ))}
                      </div>
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
