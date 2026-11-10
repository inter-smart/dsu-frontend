"use client";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { hasContent } from "@/lib/has-content";

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

 
function LeaderCard({ item, featured }) {
  const hasBio = hasContent(item.description);
  const photoBox = featured
    ? "h-[125px] w-[110px] rounded-[38px_38px_30px_30px] shadow-[0_6px_0_-2px_#DC2626] sm:h-[136px] sm:w-[120px] xl:h-[159px] xl:w-[140px] xl:rounded-[44px_44px_34px_34px] 2xl:h-[181px] 2xl:w-[160px] 2xl:rounded-[50px_50px_40px_40px] 3xl:h-[227px] 3xl:w-[200px] 3xl:rounded-[60px_60px_48px_48px]"
    : "h-[64px] w-[64px] rounded-[20px] sm:h-[72px] sm:w-[72px] xl:h-[84px] xl:w-[84px] xl:rounded-[24px] 2xl:h-[96px] 2xl:w-[96px] 2xl:rounded-[28px] 3xl:h-[120px] 3xl:w-[120px] 3xl:rounded-[34px]";
  return (
    <Link
      href={item.link ? `/leadership/${item.link}` : "/about"}
      className={`group relative flex h-full w-full items-center rounded-[14px] border border-transparent bg-white transition-[transform,box-shadow] duration-500 ${EASE} hover:-translate-y-[5px] hover:shadow-[0_16px_34px_rgba(0,0,0,0.14)] focus-visible:-translate-y-[5px] focus-visible:shadow-[0_16px_34px_rgba(0,0,0,0.14)] dark:border-white/10 dark:bg-[#18191B] dark:hover:shadow-[0_16px_34px_rgba(0,0,0,0.5)] ${
        featured
          ? "gap-[18px] p-[20px] max-sm:flex-col max-sm:text-center xl:gap-[24px] xl:p-[24px] 2xl:gap-[28px] 2xl:p-[28px] 3xl:gap-[38px] 3xl:p-[36px]"
          : "gap-[14px] p-[14px] xl:gap-[18px] xl:p-[18px] 2xl:gap-[22px] 2xl:p-[22px] 3xl:gap-[28px] 3xl:p-[28px]"
      }`}
    >
      <div className={`shrink-0 overflow-hidden bg-[#cfd6e4] ${photoBox}`}>
        {item?.image?.url && (
          <Image
            src={item.image.url}
            width={250}
            height={250}
            className={`h-full w-full object-cover object-top transition-transform duration-700 ${EASE} group-hover:scale-[1.06]`}
            alt={item.image.alternativeText || item.name || "Leader"}
          />
        )}
      </div>
      <div className={`min-w-0 flex-1 ${hasBio ? (featured ? "sm:pr-[40px] xl:pr-[48px] 2xl:pr-[56px] 3xl:pr-[70px]" : "pr-[36px] xl:pr-[44px] 3xl:pr-[56px]") : ""}`}>
        <div
          className={`font-bold leading-[1.25] text-black dark:text-white ${
            featured
              ? "text-[16px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[26px]"
              : "text-[15px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[22px]"
          }`}
        >
          {item.name}
        </div>
        {item.designation && (
          <div
            className={`mt-[4px] leading-[1.3] ${
              featured
                ? "font-semibold text-[#DC2626] text-[15px] xl:text-[16px] 2xl:text-[16px] 3xl:text-[20px]"
                : "text-[#4A5565] dark:text-[#9CA3AF] text-[15px] xl:text-[15px] 2xl:text-[15px] 3xl:text-[18px]"
            }`}
          >
            {item.designation}
          </div>
        )}
        {hasBio && (
          // on hover-capable devices the bio opens on hover / focus; touch devices always show it
          <div
            className={`grid grid-rows-[1fr] transition-[grid-template-rows,opacity] duration-700 ${EASE} [@media(hover:hover)]:grid-rows-[0fr] [@media(hover:hover)]:opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="pt-[8px] xl:pt-[10px]">
                {Array.isArray(item.description) ? (
                  <BlocksRenderer content={item.description} />
                ) : (
                  <p>{item.description}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {hasBio && (
        <span
          aria-hidden="true"
          className={`sm:absolute right-[14px] top-1/2 flex h-[30px] w-[30px] -translate-y-1/2 items-center justify-center rounded-full border border-[#DC2626]/25 bg-[#DC2626]/5 text-[#DC2626] transition-all duration-500 ${EASE} group-hover:translate-x-[6px] group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-[#DC2626] group-hover:to-[#F97316] group-hover:text-white max-sm:top-auto max-sm:bottom-[12px] max-sm:translate-y-0 xl:right-[20px] xl:h-[36px] xl:w-[36px] 2xl:right-[26px] 2xl:h-[40px] 2xl:w-[40px] 3xl:right-[32px] 3xl:h-[50px] 3xl:w-[50px]`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-[14px] w-[14px] xl:h-[16px] xl:w-[16px] 2xl:h-[18px] 2xl:w-[18px] 3xl:h-[22px] 3xl:w-[22px]">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      )}
    </Link>
  );
}

export default function AboutLeadership({ data }) {
  const leaders = (Array.isArray(data?.leaders) ? data.leaders : []).filter(
    (item) => item?.name,
  );
  if (!leaders.length) return null;
  const featuredLeaders = leaders.slice(0, 2);
  const otherLeaders = leaders.slice(2);

  return (
    <section className="bg-[#F4F6FA] dark:bg-[#101010] py-[65px] transition-colors duration-300">
      <div className="container">
        {data.heading && (
          <h2
            className="text-[25px] xl:text-[36px] 2xl:text-[44px] 3xl:text-[55px] font-bold leading-[30px] text-center mb-[10px]
                      xl:leading-[40px] 2xl:leading-[50px] 3xl:leading-[60px] text-black dark:text-white"
          >
            {data.heading}
          </h2>
        )}
        {hasContent(data.description) && (
          <div className="text_1 leading-[1.2] text-[#4A5565] dark:text-[#9CA3AF] text-center mb-[30px] 3xl:mb-[50px]">
            {Array.isArray(data.description) ? (
              <BlocksRenderer content={data.description} />
            ) : (
              <p>{data.description}</p>
            )}
          </div>
        )}
        <div className="grid gap-[12px] md:grid-cols-2 lg:gap-[20px] 3xl:gap-[28px]">
          {featuredLeaders.map((item, id) => (
            <LeaderCard key={id} item={item} featured />
          ))}
        </div>
        {otherLeaders.length > 0 && (
          <div className="mt-[12px] grid gap-[12px] sm:grid-cols-2 lg:mt-[20px] lg:grid-cols-3 lg:gap-[20px] 3xl:mt-[28px] 3xl:gap-[28px]">
            {otherLeaders.map((item, id) => (
              <LeaderCard key={id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
