"use client";

import { useState } from "react";
import MediaCoverageCard from "@/components/layout/common/media-coverage-card";
import { getMediaCoverageItemsPaged } from "@/lib/api/media-coverage";

export default function MediaCoverage({ data }) {
  const [items, setItems] = useState(data?.items || []);
  const [pagination, setPagination] = useState(data?.pagination || null);
  const [loading, setLoading] = useState(false);

  const hasMore = pagination ? pagination.page < pagination.pageCount : false;

  async function loadMore() {
    if (!pagination || loading) return;
    setLoading(true);
    const res = await getMediaCoverageItemsPaged(
      pagination.page + 1,
      pagination.pageSize
    );
    if (res?.data) {
      setItems((prev) => [
        ...prev,
        ...res.data.filter((n) => !prev.some((p) => p.id === n.id)),
      ]);
      setPagination(res.pagination);
    }
    setLoading(false);
  }

  return (
    <section className="w-full h-auto py-10 sm:py-15 lg:py-20 2xl:py-25 3xl:py-30 block">
      <div className="container">
        <div className="w-full h-auto mb-6.25 lg:mb-7.5 2xl:mb-10">
          <h2 className="title_1 mb-2.5 xl:mb-3 2xl:mb-3.5">{data?.title}</h2>
          {data?.description && (
            <p className="text_1 max-w-[820px]">{data.description}</p>
          )}
        </div>
        <div className="w-full h-auto gap-3.75 sm:gap-[15px_10px] lg:gap-[20px_15px] 2xl:gap-[25px_15px] 3xl:gap-[30px_20px] grid sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item?.id} className="w-full h-auto">
              <MediaCoverageCard item={item} />
            </div>
          ))}
        </div>
        {(hasMore || !pagination) && (
          <div className="mt-10 sm:mt-15 lg:mt-17.5 2xl:mt-22.5 3xl:mt-27.5 flex items-center justify-center">
            {pagination ? (
              <button
                type="button"
                onClick={loadMore}
                disabled={loading}
                className="text-base 2xl:text-lg 3xl:text-[18px] leading-normal font-medium text-[#F97316] transition-opacity duration-300 hover:opacity-70 disabled:opacity-50"
              >
                {loading ? "Loading..." : "Load More >>"}
              </button>
            ) : (
              <a
                href={data?.loadMoreLink || "#!"}
                className="text-base 2xl:text-lg 3xl:text-[18px] leading-normal font-medium text-[#F97316] transition-opacity duration-300 hover:opacity-70"
              >
                Load More {" >>"}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}