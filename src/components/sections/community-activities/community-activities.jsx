"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CommunityActivities({ data }) {
  const firstOpenItem = data?.items?.find((item) => item?.defaultOpen);
  const defaultOpen = firstOpenItem ? [`item-${firstOpenItem.id}`] : [];

  return (
    <section className="w-full h-auto py-10 sm:py-15 lg:py-20 2xl:py-25 3xl:py-30 block">
      <div className="container">
        <div className="w-full h-auto mb-6.25 lg:mb-7.5 2xl:mb-10">
          <h2 className="title_1 mb-2.5 xl:mb-3 2xl:mb-3.5">{data?.title}</h2>
          {data?.description && (
            <p className="text_1 max-w-[820px]">{data.description}</p>
          )}
        </div>
        <Accordion
          defaultValue={defaultOpen}
          className="gap-3.75 xl:gap-5 flex flex-col"
        >
          {data?.items?.map((item) => (
            <AccordionItem
              key={item?.id}
              value={`item-${item?.id}`}
              className="last:border-b-0 border border-black/10 rounded-md 2xl:rounded-[10px] p-[18px_20px] xl:p-[22px_25px] 3xl:p-[28px_35px]"
            >
              <AccordionTrigger className="p-0 hover:no-underline after:content-['+'] after:text-2xl xl:after:text-3xl 3xl:after:text-[32px] after:font-semibold after:leading-none after:text-[#212121] dark:after:text-white data-[panel-open]:after:content-['-'] [&>svg]:!hidden">
                <div>
                  <div className="text-sm xl:text-base 3xl:text-lg text-[#4A5565] dark:text-gray-300 mb-1.5 xl:mb-2">
                    {item?.date}
                  </div>
                  <div className="text-lg xl:text-xl 2xl:text-2xl 3xl:text-[30px] leading-tight font-semibold text-[#212121] dark:text-white">
                    {item?.title}
                  </div>
                </div>
              </AccordionTrigger>
              {(item?.description || item?.image) && (
                <AccordionContent className="pt-4 xl:pt-5">
                  <div className="flex flex-col lg:flex-row items-start gap-5 lg:gap-7.5 3xl:gap-10">
                    <div
                      className={item?.image ? "w-full lg:flex-1" : "w-full"}
                    >
                      {item?.description && (
                        <p className="text_1 mb-3.75 xl:mb-5">
                          {item.description}
                        </p>
                      )}
                      <Link
                        href={item?.link || "#!"}
                        className="text-sm 3xl:text-[15px] leading-normal font-bold uppercase bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit transition-opacity duration-500 hover:opacity-50"
                      >
                        Read More {" > "}
                      </Link>
                    </div>
                    {item?.image && (
                      <div className="w-full lg:w-[260px] xl:w-[300px] 2xl:w-[340px] 3xl:w-[383px] aspect-383/202 shrink-0 rounded-md 2xl:rounded-[8px] overflow-hidden">
                        <Image
                          src={item.image}
                          width={383}
                          height={202}
                          alt={item?.title || "Community activity"}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
