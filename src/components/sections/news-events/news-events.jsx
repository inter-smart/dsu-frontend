"use client";

import { useState } from "react";
import Image from "next/image";
import { Heading } from "@/components/ui/heading";
import NewsCard from "@/components/layout/common/news-card";
import { getNewsEventsPaged } from "@/lib/api/index";

export default function NewsEvents({ data }) {
  const [items, setItems] = useState(data?.newsEvents ?? []);
  const [pagination, setPagination] = useState(data?.pagination ?? null);
  const [loading, setLoading] = useState(false);

  const hasMore = pagination && pagination.page < pagination.pageCount;

  const loadMore = async () => {
    if (!hasMore || loading) return;
    setLoading(true);
    try {
      const res = await getNewsEventsPaged(
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
    <section className="w-full h-auto py-10 sm:py-15 lg:py-20 2xl:py-25 3xl:py-30 block">
      <div className="container">
        <div className="w-full h-auto mb-6.25 lg:mb-7.5 2xl:mb-10">
          <Heading className="mb-0">{data?.title}</Heading>
        </div>
        <div className="w-full h-auto gap-3.75 sm:gap-[15px_10px] lg:gap-[20px_15px] 2xl:gap-[25px_15px] 3xl:gap-[30px_20px] grid sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item?.documentId ?? item?.id} className="w-full h-auto">
              <NewsCard item={item} />
            </div>
          ))}
        </div>
        {hasMore && (
          <div className="mt-10 sm:mt-15 lg:mt-17.5 2xl:mt-22.5 3xl:mt-27.5 flex items-center justify-center">
            <button
              type="button"
              onClick={loadMore}
              disabled={loading}
              className="group/button inline-flex shrink-0 items-center justify-center rounded-sm border bg-clip-padding outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 text-[12px] 2xl:text-[14.4px] 3xl:text-[18px] leading-none font-bold whitespace-nowrap text-white bg-linear-to-r from-(--basecolor) to-(--basecolor2) text-white border-transparent hover:bg-primary/80 h-[34px] 2xl:h-[40px] 3xl:h-[50px] gap-2 2xl:gap-4 3xl:gap-5 px-3 2xl:px-4 3xl:px-5 transition-colors duration-300 ease-in-out hover:from-(--basecolor2) hover:to-(--basecolor)"
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
    </section>
  );
}
