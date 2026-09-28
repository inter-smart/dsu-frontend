"use client";

import { useEffect, useMemo, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import GalleryCard from "./gallery-card";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const FILTERS = ["All", "Events", "Campus", "Sports", "Videos"];

export default function Gallery({ data }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return data?.items || [];
    if (activeFilter === "Videos") return data?.items?.filter((item) => item?.isVideo) || [];
    return data?.items?.filter((item) => item?.category === activeFilter) || [];
  }, [data?.items, activeFilter]);

  useEffect(() => {
    Fancybox.bind("[data-fancybox^='gallery-']", {
      Hash: false,
    });

    return () => {
      Fancybox.unbind("[data-fancybox^='gallery-']");
      Fancybox.close();
    };
  }, []);

  return (
    <section className="w-full h-auto py-10 sm:py-15 lg:py-20 2xl:py-25 3xl:py-30 block">
      <div className="container">
        <div className="w-full h-auto mb-6.25 lg:mb-7.5 2xl:mb-10 flex flex-wrap items-start justify-between gap-5">
          <div>
            <h2 className="title_1 mb-2.5 xl:mb-3 2xl:mb-3.5">{data?.title}</h2>
            {data?.description && <p className="text_1 max-w-[820px]">{data.description}</p>}
          </div>
          <div className="flex flex-wrap gap-2 xl:gap-2.5">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 xl:px-5 xl:py-2.5 rounded-[10px] border text-sm xl:text-base font-medium leading-normal transition-colors duration-300 ${
                  activeFilter === filter
                    ? "bg-linear-to-r from-(--basecolor) to-(--basecolor2) border-(--basecolor)/20 text-white"
                    : "bg-white dark:bg-white/5 border-(--basecolor)/20 text-[#212121] dark:text-white hover:opacity-70"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full h-auto gap-x-3.75 gap-y-8.75 sm:gap-x-[15px] sm:gap-y-10 lg:gap-x-[20px] lg:gap-y-12.5 2xl:gap-x-[25px] 2xl:gap-y-15 3xl:gap-x-[30px] 3xl:gap-y-17.5 grid sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div key={item?.id} className="w-full h-auto">
              <GalleryCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
