"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import ExaminationSidebar from "./examination-sidebar";
import { getExaminationTimetablePaged } from "@/lib/api";

function TimetableSection({ slug, section, hidden = false }) {
  const [items, setItems] = useState(section?.results ?? []);
  const [pagination, setPagination] = useState(section?.pagination ?? null);
  const [loading, setLoading] = useState(false);

  const hasMore = pagination && pagination.page < pagination.pageCount;

  const loadMore = async () => {
    if (!hasMore || loading) return;
    setLoading(true);
    try {
      const res = await getExaminationTimetablePaged(
        slug,
        section?.id,
        pagination.page + 1,
        pagination.pageSize,
      );
      if (res?.data && res?.pagination) {
        setItems((prev) => [...prev, ...res.data]);
        setPagination(res.pagination);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      hidden={hidden}
      className="w-full h-auto p-[20px_20px_0px_20px] sm:p-[30px_30px_0px_30px] 2xl:p-[40px_40px_0px_40px] 3xl:p-[50px_50px_0px_50px] border border-black/10 rounded-[10px] sm:rounded-[13px] 2xl:rounded-[20px] overflow-hidden">
      <div className="w-full h-auto mb-6.25 lg:mb-7.5 2xl:mb-10 3xl:mb-12.5 space-y-3.75 lg:space-y-3.75 3xl:space-y-7.5">
        <Heading>{section?.title}</Heading>
        <Text>{section?.description}</Text>
      </div>
      <div className="w-full h-auto block">
        {items.map((item) => (
          <div
            key={item?.id}
            className={`w-full h-auto border-b border-black/10 first:[&_a]:pt-0 block${hasMore ? "" : " last:border-b-0"}`}
          >
            <Link
              href={item?.url || "#"}
              {...(item?.isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
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
        {hasMore && (
          <button
            type="button"
            onClick={loadMore}
            disabled={loading}
            className="text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.2] font-medium text-center text-(--basecolor2) w-full h-auto py-7.5 lg:py-[40px_30px] 2xl:py-[50px_30px] 3xl:py-[60px_40px] transition-colors hover:text-(--basecolor) disabled:opacity-60"
          >
            {loading ? "Loading..." : "Load More >>"}
          </button>
        )}
      </div>
    </div>
  );
}

export default function ExaminationTimeTable({ slug, data, sidebar }) {
  const sections = data?.sections || [];
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const contentRef = useRef(null);
  const lenis = useLenis();

  const subItems = sections.map((section) => ({
    id: section?.id,
    label: section?.title,
  }));

  // show the chosen section; bring its top into view if scrolled past it
  const selectSection = (id) => {
    setActiveId(id);
    const target = contentRef.current;
    if (!target || target.getBoundingClientRect().top >= 0) return;
    if (lenis) {
      lenis.scrollTo(target, { offset: -100 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full h-auto py-[20px_40px] sm:py-[30px_50px] lg:py-[60px_70px] 2xl:py-[70px_90px] 3xl:py-[90px_130px] block relative z-0">
      <div className="container">
        <div className="[--width:100%] lg:[--width:210px] 2xl:[--width:270px] 3xl:[--width:330px] w-full h-auto flex flex-wrap">
          <ExaminationSidebar
            data={sidebar}
            subItems={subItems}
            activeSubId={activeId}
            onSubItemClick={selectSection}
          />
          <div
            ref={contentRef}
            className="w-full lg:w-[calc(100%-var(--width))] lg:pl-3.75 2xl:pl-5 3xl:pl-7.5"
          >
            {/* section switcher for mobile (desktop uses the sidebar sub-menu) */}
            {subItems.length > 1 && (
              <div className="flex flex-wrap gap-2 mb-5 lg:hidden">
                {subItems.map((item) => {
                  const isActive = item.id === activeId;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => selectSection(item.id)}
                      aria-pressed={isActive}
                      className={`group inline-flex p-[2px] rounded-[10px] h-[35px] transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-gradient-to-r from-[#DC2626] to-[#F97316]"
                          : "bg-gradient-to-r from-[rgba(220,38,38,0.2)] to-[rgba(249,115,22,0.2)]"
                      }`}
                    >
                      <span
                        className={`flex items-center justify-center w-full h-full px-[14px] rounded-[7px] text-[13px] font-medium whitespace-nowrap transition-all duration-300 ${
                          isActive
                            ? "bg-transparent text-white"
                            : "bg-white text-black group-hover:text-[#DC2626]"
                        }`}
                      >
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* all sections stay mounted so "Load More" progress survives switching */}
            {sections.map((section) => (
              <TimetableSection
                key={section?.id}
                slug={slug}
                section={section}
                hidden={section?.id !== activeId}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
