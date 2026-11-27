"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Search, X, LayoutGrid, Newspaper } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import NewsCard from "@/components/layout/common/news-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getDepartmentNewsPaged, getNewsEventsPaged, getSchoolNewsPaged } from "@/lib/api";

const ALL = "all";

// Category label of a news item. Adjust to your CMS field if needed.
const getCategory = (item) => {
  const c = item?.category ?? item?.type;
  if (!c) return null;
  if (typeof c === "string") return c;
  return c?.name ?? c?.title ?? null;
};

const getItemId = (item) => String(item?.documentId ?? item?.id);

// Inline styles so the title always wraps, whatever the SelectItem component does.
const wrapTextStyle = { whiteSpace: "normal", overflowWrap: "anywhere", wordBreak: "normal" };

export default function NewsEvents({ data, schoolSlug, departmentSlug }) {
  const [items, setItems] = useState(data?.newsEvents ?? []);
  const [pagination, setPagination] = useState(data?.pagination ?? null);
  const [loading, setLoading] = useState(false);

  // filters
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL);
  const [newsId, setNewsId] = useState(ALL);

  const hasMore = pagination && pagination.page < pagination.pageCount;

  const categories = useMemo(
    () => [...new Set(items.map(getCategory).filter(Boolean))],
    [items]
  );

  // News list shown in the second dropdown: only the items of the selected category
  const newsOptions = useMemo(
    () => items.filter((item) => category === ALL || getCategory(item) === category),
    [items, category]
  );

  const selectedNews = useMemo(
    () => items.find((item) => getItemId(item) === newsId),
    [items, newsId]
  );

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      if (category !== ALL && getCategory(item) !== category) return false;
      if (newsId !== ALL && getItemId(item) !== newsId) return false;
      if (q && !(item?.title || "").toLowerCase().includes(q)) return false;
      return true;
    });
  }, [items, query, category, newsId]);

  const isAllActive = !query && category === ALL && newsId === ALL;

  const resetFilters = () => {
    setQuery("");
    setCategory(ALL);
    setNewsId(ALL);
  };

  const loadMore = async () => {
    if (!hasMore || loading) return;
    setLoading(true);
    try {
      const fetchPage = departmentSlug
        ? (page, size) => getDepartmentNewsPaged(departmentSlug, page, size)
        : schoolSlug
          ? (page, size) => getSchoolNewsPaged(schoolSlug, page, size)
          : getNewsEventsPaged;
      const res = await fetchPage(pagination.page + 1, pagination.pageSize);
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

  const selectTriggerClass =
    "!h-10 sm:!h-12 w-full sm:w-[220px] gap-1.5 sm:gap-2 rounded-full border border-(--basecolor)/20 bg-[#FFF8EE] dark:bg-white/5  !text_1 font-medium !text-[#212121] dark:!text-white hover:border-(--basecolor) focus:border-(--basecolor) transition-colors pl-3 pr-2.5 sm:pr-3 [&>span]:truncate [&>span]:flex-1 [&>span]:text-left";

  // Dropdown panel: nearly full screen width on mobile (never wider than the screen),
  // height limited to the space available so the list scrolls inside it.
  // The viewport inside is forced to the panel width so long titles cannot push it wider.
  const selectContentBase =
    "!max-w-[calc(100vw-32px)] !max-h-[min(60vh,var(--radix-select-content-available-height))] overflow-x-hidden rounded-2xl border border-(--basecolor)/15 bg-white dark:bg-[#2a2a2a] p-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.18)] [&_[data-radix-select-viewport]]:!w-full [&_[data-radix-select-viewport]]:!min-w-0 [&_[data-radix-select-viewport]]:!max-w-full [&_[data-radix-select-viewport]]:overflow-x-hidden";
  const categoryContentClass = `${selectContentBase} !w-[calc(100vw-32px)] sm:!w-[260px]`;
  const newsContentClass = `${selectContentBase} !w-[calc(100vw-32px)] sm:!w-[400px]`;

  // Dropdown rows: rounded, brand tint on hover, brand coloured bold text when selected.
  // pr-9 keeps the text clear of the check icon.
  const selectItemClass =
    "mb-0.5 last:mb-0 !w-full !max-w-full items-start rounded-xl px-3 py-1.5 !pr-9 !text_1  font-medium leading-snug text-[#212121] dark:text-white cursor-pointer transition-colors focus:!bg-(--basecolor)/10 focus:!text-(--basecolor) data-[state=checked]:!bg-(--basecolor)/10 data-[state=checked]:!text-(--basecolor) data-[state=checked]:!font-semibold";

  // Text wrapper inside each row
  const itemTextClass = "block min-w-0 max-w-full flex-1 text-left !text_1";

  // labels are hidden on mobile to keep the bar compact
 
  const chipClass =
    "inline-flex shrink-0 items-center gap-1.5 max-w-[200px] sm:max-w-[240px] pl-3 pr-1.5 py-1 rounded-full bg-(--basecolor)/10 text-xs font-medium text-[#212121] dark:text-white";

  const chipCloseClass =
    "size-5 shrink-0 rounded-full flex items-center justify-center text-(--basecolor) hover:bg-(--basecolor) hover:text-white transition-colors cursor-pointer";

  return (
    <section className="w-full h-auto py-[0_10px] sm:py-15 lg:py-20 2xl:py-25 3xl:py-30 block">
      <div className="container">
        {/* Filter bar: pulled up over the bottom edge of the banner.
            Mobile overlaps only ~24px so the banner title stays visible.
            From sm up the negative top margin = section top padding (60 / 80 / 100 / 120px) + ~20px overlap,
            so the bar only touches the bottom edge of the banner and stays clear of the banner title.
            Change the "20" part to overlap more or less. */}
        <div className="relative z-10 w-full h-auto -mt-[24px] sm:-mt-[80px] lg:-mt-[100px] 2xl:-mt-[120px] 3xl:-mt-[140px] mb-6 sm:mb-10 lg:mb-12 2xl:mb-15 rounded-[16px] sm:rounded-[20px] pt-[3px] sm:pt-[4px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) shadow-[0_10px_30px_rgba(0,0,0,0.14)] sm:shadow-[0_12px_40px_rgba(0,0,0,0.14)]">
          <div className="w-full bg-white dark:bg-[#2a2a2a] rounded-b-[14px] rounded-t-[13px] sm:rounded-b-[18px] sm:rounded-t-[17px] p-3 sm:p-5 lg:px-8 lg:py-6 flex flex-col gap-3 sm:gap-5">
            <div className="flex flex-col lg:flex-row lg:items-end gap-3 sm:gap-5 lg:gap-8">
              {/* Filters (left): one compact row on mobile */}
              <div className="flex items-end gap-2 sm:flex-wrap sm:gap-3 lg:gap-4">
                <button
                  type="button"
                  onClick={resetFilters}
                  aria-pressed={isAllActive}
                  className={`h-10 sm:h-11 lg:h-13 px-4 sm:px-6 shrink-0 rounded-full border text-[13px] sm:text_1 font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isAllActive
                      ? "bg-linear-to-r from-(--basecolor) to-(--basecolor2) text-white border-transparent shadow-[0_4px_12px_rgba(220,38,38,0.25)]"
                      : "bg-white dark:bg-transparent border-(--basecolor)/30 text-[#212121] dark:text-white hover:border-(--basecolor)"
                  }`}
                >
                  All
                </button>

                {categories.length > 0 && (
                  <div className="flex-1 min-w-0 sm:flex-none"> 
                    <Select
                      value={category}
                      onValueChange={(v) => {
                        setCategory(v);
                        setNewsId(ALL); // the news list depends on the category
                      }}
                    >
                      <SelectTrigger aria-label="Select news category" className={selectTriggerClass}>
                        <LayoutGrid aria-hidden="true" className="hidden sm:block size-4 shrink-0 text-(--basecolor)" />
                        <SelectValue placeholder="Category">
                          {category === ALL ? "Categories" : category}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent
                        position="popper"
                        align="start"
                        sideOffset={8}
                        collisionPadding={16}
                        className={categoryContentClass}
                      >
                        <SelectItem value={ALL} className={selectItemClass}>
                          <span className={itemTextClass} style={wrapTextStyle}>All Categories</span>
                        </SelectItem>
                        {categories.map((c) => (
                          <SelectItem key={c} value={c} className={selectItemClass}>
                            <span className={itemTextClass} style={wrapTextStyle}>{c}</span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="flex-1 min-w-0 sm:flex-none"> 
                  <Select value={newsId} onValueChange={setNewsId}>
                    <SelectTrigger aria-label="Select news" className={selectTriggerClass}>
                      <Newspaper aria-hidden="true" className="hidden sm:block size-4 shrink-0 text-(--basecolor)" />
                      <SelectValue placeholder="News">
                        {newsId === ALL ? "News" : selectedNews?.title}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent
                      position="popper"
                      align="start"
                      sideOffset={8}
                      collisionPadding={16}
                      className={newsContentClass}
                    >
                      <SelectItem value={ALL} className={selectItemClass}>
                        <span className={itemTextClass} style={wrapTextStyle}>All News</span>
                      </SelectItem>
                      {newsOptions.map((item) => (
                        <SelectItem
                          key={getItemId(item)}
                          value={getItemId(item)}
                          className={selectItemClass}
                        >
                          <span className={itemTextClass} style={wrapTextStyle}>{item?.title}</span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Search (right on desktop, on top on mobile) */}
              <div className="w-full max-lg:order-first lg:ml-auto lg:max-w-[580px] lg:flex-1 lg:pl-8 lg:border-l lg:border-[#E5E5E5] dark:lg:border-white/15">
               
                <div className="relative">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by news title..."
                    aria-label="Search news"
                    className={`w-full h-10 xl:h-13 pl-4 sm:pl-5 bg-[#FFF8EE] dark:bg-white/5 border border-(--basecolor)/20 rounded-full outline-none  text_1 text-[#212121] dark:text-white placeholder:italic placeholder:text-[#4A5565] dark:placeholder:text-gray-400 focus:border-(--basecolor) focus:ring-2 focus:ring-(--basecolor)/20 transition-all ${
                      query ? "pr-[76px] sm:pr-[84px]" : "pr-12 sm:pr-14"
                    }`}
                  />
                  {query && (
                    <button
                      type="button"
                      onClick={() => setQuery("")}
                      aria-label="Clear search"
                      className="absolute right-10 sm:right-12 top-1/2 -translate-y-1/2 size-6 rounded-full flex items-center justify-center text-[#4A5565] dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <X aria-hidden="true" className="size-3.5" />
                    </button>
                  )}
                  <span
                    aria-hidden="true"
                    className="absolute right-1 top-1/2 -translate-y-1/2 size-8 sm:size-9 rounded-full bg-linear-to-r from-(--basecolor) to-(--basecolor2) flex items-center justify-center pointer-events-none"
                  >
                    <Search className="size-4 text-white" />
                  </span>
                </div>
              </div>
            </div>

            {/* Result summary + active filter chips (only while a filter is active).
                One scrollable line on mobile, wraps from sm up. */}
            {!isAllActive && (
              <div className="flex flex-nowrap sm:flex-wrap items-center gap-2 pt-3 sm:pt-4 border-t border-[#E5E5E5] dark:border-white/15 overflow-x-auto sm:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <span className="shrink-0 text-xs sm:text-[13px] font-medium text-[#4A5565] dark:text-gray-300 mr-1">
                  {filteredItems.length} of {items.length}
                </span>

                {query && (
                  <span className={chipClass}>
                    <span className="truncate">&ldquo;{query}&rdquo;</span>
                    <button type="button" onClick={() => setQuery("")} aria-label="Remove search filter" className={chipCloseClass}>
                      <X aria-hidden="true" className="size-3" />
                    </button>
                  </span>
                )}
                {category !== ALL && (
                  <span className={chipClass}>
                    <span className="truncate">{category}</span>
                    <button
                      type="button"
                      onClick={() => {
                        setCategory(ALL);
                        setNewsId(ALL);
                      }}
                      aria-label="Remove category filter"
                      className={chipCloseClass}
                    >
                      <X aria-hidden="true" className="size-3" />
                    </button>
                  </span>
                )}
                {newsId !== ALL && (
                  <span className={chipClass}>
                    <span className="truncate">{selectedNews?.title}</span>
                    <button type="button" onClick={() => setNewsId(ALL)} aria-label="Remove news filter" className={chipCloseClass}>
                      <X aria-hidden="true" className="size-3" />
                    </button>
                  </span>
                )}

                <button
                  type="button"
                  onClick={resetFilters}
                  className="shrink-0 ml-auto pl-2 text-xs font-bold uppercase bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent hover:opacity-50 transition-opacity cursor-pointer"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="w-full h-auto mb-6.25 lg:mb-7.5 2xl:mb-10">
          {data?.title && <Heading className="mb-0 dark:text-white">{data.title}</Heading>}
        </div>

        <div className="w-full h-auto gap-3.75 sm:gap-[15px_10px] lg:gap-[20px_15px] 2xl:gap-[25px_15px] 3xl:gap-[30px_20px] grid sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div key={item?.documentId ?? item?.id} className="w-full h-auto">
              <NewsCard item={item} />
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="w-full py-10 text-center text-[#4A5565] dark:text-gray-300">
            <p className="mb-3">No news found for the selected filters.</p>
            <button
              type="button"
              onClick={resetFilters}
              className="text-sm font-bold uppercase bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent hover:opacity-50 transition-opacity cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        )}

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