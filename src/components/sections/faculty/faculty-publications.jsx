import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";

// publications with a link: `link.isExternal` (admin toggle) opens it in a new tab,
// otherwise the same tab; no link -> plain row
export default function FacultyPublications({ data }) {
  return (
    <section className="w-full h-auto py-10 2xl:py-12.5 3xl:py-17.5 bg-linear-to-t from-[#FFF3E0]/50 to-[#FFF8EE]/50 block">
      <div className="container">
        <div className="w-full h-auto mb-5 2xl:mb-6.25 3xl:mb-7.5 space-y-2.5 lg:space-y-3.75 3xl:space-y-5">
          <Heading>{data?.title}</Heading>
          {data?.description && (
            <Text
              className="typography"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          )}
        </div>
        <div className="[--gap:10px] 2xl:[--gap:20px] w-full h-auto gap-1.25 2xl:gap-2.5 flex flex-col">
          {data?.publications?.map((item, index) => {
            const link = item?.link;
            const Item = link?.url ? (link.isExternal ? "a" : Link) : "div";
            return (
              <div key={item?.id ?? index} className="w-full h-auto block">
                <Item
                  {...(link?.url
                    ? {
                        href: link.url,
                        "aria-label": item?.title,
                        ...(link.isExternal
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {}),
                      }
                    : {})}
                  className={`w-full h-full p-[10px_15px_10px_15px] sm:p-[10px_35px_10px_15px] 2xl:p-5 2xl:pr-15 bg-white flex items-center ${
                    link?.url
                      ? "transition-colors duration-300 hover:bg-(--basecolor2)/10"
                      : ""
                  }`}
                >
                  <span className="text-base 2xl:text-xl 3xl:text-[25px] leading-[1.1] font-medium text-[#4A5565] pr-(--gap)">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="text-[13px] 2xl:text-base 3xl:text-lg leading-[1.1] font-medium w-full h-auto pl-(--gap) space-y-1.25 2xl:space-y-2.5 3xl:space-y-3.75 border-l border-black/10">
                    <div className="text-[#212121]">{item?.title}</div>
                    <div className="text-[#4A5565]">{item?.source}</div>
                  </div>
                  {link?.url && (
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4.25 2xl:size-5 shrink-0 text-[#212121]"
                      strokeWidth={2.5}
                    />
                  )}
                </Item>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
