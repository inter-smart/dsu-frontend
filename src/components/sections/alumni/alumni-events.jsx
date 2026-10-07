"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { buttonVariants } from "@/components/ui/button";
import AiAcademicMenubar from "../ai-enabled/Ai-academicMenubar";
import LibrarySidebar from "../ai-enabled/library/library-sidemenubar";
import { getAlumniEventsPaged } from "@/lib/api/index";

export default function AlumniEvents({ data }) {
  const [items, setItems] = useState(data?.events ?? []);
  const [pagination, setPagination] = useState(data?.pagination ?? null);
  const [loading, setLoading] = useState(false);

  const hasMore = pagination && pagination.page < pagination.pageCount;

  const loadMore = async () => {
    if (!hasMore || loading) return;
    setLoading(true);
    try {
      const res = await getAlumniEventsPaged(
        pagination.page + 1,
        pagination.pageSize,
      );
      if (res?.data && res?.pagination) {
        setItems((prev) => {
          const seen = new Set(prev.map((item) => item?.documentId));
          return [
            ...prev,
            ...res.data.filter((item) => !seen.has(item?.documentId)),
          ];
        });
        setPagination(res.pagination);
      }
    } finally {
      setLoading(false);
    }
  };

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
            <div className="w-full h-auto p-[20px_20px_30px_20px] sm:p-[30px_30px_40px_30px] 2xl:p-[40px_40px_50px_40px] 3xl:p-[50px_50px_60px_50px] border border-black/10 rounded-[10px] sm:rounded-[13px] 2xl:rounded-[20px] overflow-hidden">
              <div className="w-full h-auto mb-5 sm:mb-6.25 lg:mb-7.5 2xl:mb-10 3xl:mb-12.5">
                <div className="w-full h-auto mb-2.5 sm:mb-3.75 lg:mb-5 2xl:mb-8.75 max-sm:gap-2.5 flex items-center flex-wrap justify-between">
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
              <div className="w-full lg:max-w-[90%] h-auto block">
                <div className="w-full h-auto gap-2.5 lg:gap-3.75 3xl:gap-5 grid grid-cols-1 sm:grid-cols-2">
                  {items.map((item) => (
                    <div
                      key={item?.documentId ?? item?.id}
                      className="w-full h-auto block"
                    >
                      <div className="group w-full h-full rounded-md 2xl:rounded-[10px] overflow-hidden block">
                        <div className="w-full h-auto aspect-570/220 overflow-hidden block">
                          {item?.media?.url && (
                            <Image
                              src={item.media.url}
                              alt={item?.media?.alternativeText}
                              width={570}
                              height={220}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                            />
                          )}
                        </div>
                        <div className="w-full h-auto p-5 2xl:p-6.25 3xl:p-7.5 bg-linear-to-t from-[#FFF3E0] to-[#FFF8EE] block">
                          <div className="text-base 2xl:text-lg 3xl:text-2xl leading-[1.1] font-bold text-[#212121] mb-2.5 3xl:mb-3.75 line-clamp-1">
                            {item?.title}
                          </div>
                          <Link
                            href={`/alumni/events/${item?.link}`}
                            className="text-sm 2xl:text-[15px] leading-[1.1] font-bold bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit transition-opacity duration-400 hover:opacity-70"
                          >
                            Read More {">"}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {hasMore && (
                  <div className="mt-7.5 sm:mt-10 2xl:mt-12.5 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={loadMore}
                      disabled={loading}
                      className={buttonVariants({
                        variant: "default",
                        size: "default",
                      })}
                    >
                      {loading ? "Loading..." : "Load More"}
                      <Image
                        src="/images/icon-btn.svg"
                        alt=""
                        width={15}
                        height={15}
                        className="size-3.75"
                        data-icon="inline-end"
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
