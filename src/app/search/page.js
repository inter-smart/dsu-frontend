import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { searchSite } from "@/lib/api/search";

const PAGE_SIZE = 10;
const MIN_QUERY = 2;
const POPULAR = ["Admissions", "B.Tech", "Faculty", "Placements", "Research", "Hostel"];

const first = (value) => (Array.isArray(value) ? value[0] : value) ?? "";

export async function generateMetadata({ searchParams }) {
  const q = String(first((await searchParams)?.q)).trim();
  return {
    title: q ? `Search results for "${q}"` : "Search",
    robots: { index: false, follow: true },
  };
}
 
function searchHref({ q, type, page }) {
  const params = new URLSearchParams();
  if (q) params.set("q", q);
  if (type) params.set("type", type);
  if (page > 1) params.set("page", String(page));
  return `/search?${params}`;
}

function formatDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

// Wraps every occurrence of the keyword in <mark>
function Highlight({ text, query }) {
  if (!text || !query) return text || null;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = String(text).split(new RegExp(`(${escaped})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark
        key={i}
        className="rounded-[2px] bg-amber-200/80 px-0.5 font-semibold text-inherit dark:bg-amber-400/25 dark:text-white"
      >
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

function SearchForm({ q }) {
  return (
    <form action="/search" role="search" className="w-full max-w-[820px]">
      <div className="flex items-center gap-2 rounded-2xl bg-white p-2 shadow-[0_24px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/50 transition-shadow duration-300 focus-within:ring-4 focus-within:ring-white/30 2xl:p-2.5 dark:bg-[#1A1A1A]">
        <Search
          aria-hidden="true"
          className="ml-4 h-5 w-5 shrink-0 text-(--basecolor) 2xl:h-6 2xl:w-6 dark:text-white/70"
        />
        <input
          type="search"
          name="q"
          defaultValue={q}
          placeholder="Search programmes, schools, faculty, news..."
          aria-label="Search the site"
          autoComplete="off"
          maxLength={100}
          className="h-13 min-w-0 flex-1 bg-transparent px-2 text-base text-[#212121] outline-none placeholder:text-[#9CA3AF] 2xl:h-10 2xl:text-xl dark:text-white dark:placeholder:text-white/40"
        />
        <button
          type="submit"
          aria-label="Search"
          className="h-13 shrink-0 cursor-pointer rounded-xl bg-linear-to-r from-(--basecolor) to-(--basecolor2) px-7 text-sm font-semibold text-white transition-opacity duration-300 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--basecolor) 2xl:h-12 2xl:px-5 2xl:text-base"
        >
          Search
        </button>
      </div>
    </form>
  );
}

function Suggestions({ light = false }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span
        className={cn(
          "mr-1 text-sm",
          light ? "text-white/70" : "text-[#6A7282] dark:text-white/60",
        )}
      >
        Popular searches
      </span>
      {POPULAR.map((term) => (
        <Link
          key={term}
          href={searchHref({ q: term })}
          className={cn(
            "rounded-lg border px-3 py-1.5 text-sm transition-colors duration-200",
            light
              ? "border-white/25 text-white hover:bg-white hover:text-(--basecolor)"
              : "border-black/10 bg-white text-[#212121] hover:border-(--basecolor) hover:text-(--basecolor) dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-white",
          )}
        >
          {term}
        </Link>
      ))}
    </div>
  );
}

function ResultCard({ item, q }) {
  const date = formatDate(item.date);
  return (
    <li className="border-b border-black/8 last:border-b-0 dark:border-white/10">
      <Link
        href={item.url}
        className="group relative flex items-start gap-5 px-5 py-5 transition-colors duration-200 hover:bg-[#FAFAFB] 2xl:gap-7 2xl:px-8 2xl:py-7 dark:hover:bg-white/5"
      >
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs 2xl:text-[13px]">
            <span className="inline-flex items-center gap-2 font-semibold text-(--basecolor) dark:text-(--basecolor2)">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
              {item.typeLabel}
            </span>
            {date && (
              <>
                <span aria-hidden="true" className="text-black/25 dark:text-white/25">
                  |
                </span>
                <span className="text-[#6A7282] dark:text-white/60">{date}</span>
              </>
            )}
          </div>

          <h2 className="mb-1.5 text-lg font-bold leading-snug text-[#212121] decoration-(--basecolor)/50 decoration-2 underline-offset-4 group-hover:underline 2xl:text-xl 3xl:text-2xl dark:text-white dark:decoration-white/50">
            <Highlight text={item.title} query={q} />
          </h2>

          {item.description && (
            <p className="text_1 line-clamp-2 max-w-[70ch]">
              <Highlight text={item.description} query={q} />
            </p>
          )}

          <div className="mt-3 flex items-center gap-3">
            <span className="truncate text-xs text-[#6A7282]/80 dark:text-white/50">{item.url}</span>
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 shrink-0 text-(--basecolor) opacity-0 transition-all duration-200 group-hover:opacity-100 dark:text-white"
            />
          </div>
        </div>

        {item.image && (
          <div className="hidden h-24 w-32 shrink-0 overflow-hidden rounded-lg bg-gray-100 ring-1 ring-black/5 sm:block 2xl:h-28 2xl:w-40 dark:bg-white/10 dark:ring-white/10">
            <Image
              src={item.image}
              alt=""
              width={160}
              height={112}
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </Link>
    </li>
  );
}

function Pagination({ q, type, page, pageCount }) {
  if (pageCount <= 1) return null;

  // first, last and two either side of the current page
  const pages = [];
  for (let p = 1; p <= pageCount; p++) {
    if (p === 1 || p === pageCount || Math.abs(p - page) <= 2) pages.push(p);
    else if (pages[pages.length - 1] !== "…") pages.push("…");
  }

  const base =
    "flex h-10 min-w-10 items-center justify-center rounded-lg border px-3 text-sm font-medium transition-colors duration-200";
  const idle =
    "border-black/10 bg-white text-[#212121] hover:border-(--basecolor) hover:text-(--basecolor) dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-white";
  const disabled = "pointer-events-none opacity-40";

  return (
    <nav aria-label="Search results pages" className="mt-8 flex flex-wrap items-center justify-center gap-1.5">
      <Link
        href={searchHref({ q, type, page: page - 1 })}
        aria-label="Previous page"
        aria-disabled={page <= 1}
        className={cn(base, idle, page <= 1 && disabled)}
      >
        <ChevronLeft className="h-4 w-4" />
      </Link>
      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`gap-${i}`} className="px-1 text-[#6A7282]">
            …
          </span>
        ) : (
          <Link
            key={p}
            href={searchHref({ q, type, page: p })}
            aria-current={p === page ? "page" : undefined}
            className={cn(
              base,
              p === page
                ? "border-transparent bg-linear-to-r from-(--basecolor) to-(--basecolor2) text-white"
                : idle,
            )}
          >
            {p}
          </Link>
        ),
      )}
      <Link
        href={searchHref({ q, type, page: page + 1 })}
        aria-label="Next page"
        aria-disabled={page >= pageCount}
        className={cn(base, idle, page >= pageCount && disabled)}
      >
        <ChevronRight className="h-4 w-4" />
      </Link>
    </nav>
  );
}

function Message({ title, text, children }) {
  return (
    <div className="mx-auto flex max-w-[780px] flex-col items-center rounded-2xl border border-black/10 bg-white px-6 py-14 text-center 2xl:py-20 dark:border-white/15 dark:bg-white/5">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-(--basecolor)/10 text-(--basecolor) dark:bg-white/10 dark:text-white">
        <Search className="h-6 w-6" />
      </div>
      <h2 className="mb-2 text-xl font-bold text-[#212121] 2xl:text-2xl dark:text-white">{title}</h2>
      {text && <p className="text_1 max-w-[520px]">{text}</p>}
      {children && <div className="mt-7 flex justify-center">{children}</div>}
    </div>
  );
}

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const q = String(first(params?.q)).trim().slice(0, 100);
  const type = String(first(params?.type)).trim();
  const page = Math.max(1, Number.parseInt(first(params?.page), 10) || 1);

  const hasQuery = q.length >= MIN_QUERY;
  const result = hasQuery ? await searchSite({ q, type, page, pageSize: PAGE_SIZE }) : null;

  const items = result?.data || [];
  const types = result?.types || [];
  const total = result?.pagination?.total || 0;
  const pageCount = result?.pagination?.pageCount || 0;
  const allCount = types.reduce((sum, t) => sum + t.count, 0);

  const chips = [{ key: "", label: "All", count: allCount }, ...types];

  return (
    <>
      <section className="relative block w-full overflow-hidden bg-[#2B0704] after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-linear-to-r after:from-(--basecolor) after:via-(--basecolor2) after:to-[#F97316]">
        {/* warm glow from the bottom left, red light from the top right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_70%_at_0%_100%,rgba(249,115,22,0.28),transparent_70%),radial-gradient(60%_80%_at_90%_0%,rgba(185,28,28,0.65),transparent_70%)]"
        />

        {/* fine grid, fading out away from the top right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-size-[56px_56px] mask-[radial-gradient(ellipse_at_top_right,black,transparent_75%)]"
        />

        {/* outlined oversized word, sits behind the content */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 right-[2%] hidden select-none text-[110px] font-extrabold leading-none tracking-tight text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.12)] md:block xl:text-[150px] 2xl:-bottom-8 2xl:text-[190px]"
        >
          Search
        </span>

        <div className="container relative z-10 pb-8 pt-[180px] xl:pb-10 xl:pt-[200px] 2xl:pb-12 2xl:pt-[230px] 3xl:pb-12 3xl:pt-[270px]">
          <nav aria-label="Breadcrumb" className="mb-4 text-[11px] text-white xl:text-[12px] 2xl:text-[14px]">
            <Link href="/" className="font-light transition-opacity hover:opacity-70">
              Home
            </Link>
            <span className="mx-2 opacity-60">/</span>
            <span className="font-semibold">Search</span>
          </nav>

          <h1 className="mb-2 max-w-[900px] text-white">
            {hasQuery ? (
              <>
                <span className="mb-1 block text-sm font-normal text-white/70 xl:text-base 2xl:text-lg">
                  Search results for
                </span>
                <span className="block break-words text-[28px] font-extrabold leading-[1.05] xl:text-[40px] 2xl:text-[52px]">
                  &ldquo;{q}&rdquo;
                </span>
              </>
            ) : (
              <span className="block text-[28px] font-extrabold leading-[1.05] xl:text-[40px] 2xl:text-[52px]">
                What are you looking for?
              </span>
            )}
          </h1>

          <p className="mb-6 max-w-[560px] text-sm text-white/75 xl:text-base 2xl:mb-7">
            {hasQuery && result && allCount > 0
              ? `${allCount} result${allCount === 1 ? "" : "s"} found across the site`
              : "Find programmes, schools, faculty, news and pages."}
          </p>

          <SearchForm q={q} />

          {!hasQuery && (
            <div className="mt-5">
              <Suggestions light />
            </div>
          )}
        </div>
      </section>

      {/* data-no-reveal: results change with ?type=/&page= on the same path, which the
          scroll-reveal script does not re-scan, so its fade-in would leave new cards hidden */}
      <section data-no-reveal className="w-full bg-[#F4F5F7] py-10 xl:py-14 2xl:py-16 dark:bg-[#101010]">
        <div className="container">
          {!hasQuery ? (
            <Message
              title={q ? "Keyword too short" : "What are you looking for?"}
              text={`Enter at least ${MIN_QUERY} characters to search programmes, schools, faculty, news and pages.`}
            >
              <Suggestions />
            </Message>
          ) : !result ? (
            <Message title="Search is unavailable" text="Please try again in a moment." />
          ) : allCount === 0 ? (
            <Message
              title={`No results for “${q}”`}
              text="Check the spelling or try a shorter, more general keyword."
            >
              <Suggestions />
            </Message>
          ) : (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 2xl:grid-cols-[280px_minmax(0,1fr)] 2xl:gap-14">
              {/* filters: horizontal chips on mobile, sticky list on desktop */}
              <aside>
                <nav aria-label="Filter results by type" className="lg:sticky lg:top-28">
                  <div className="mb-3 hidden text-sm font-bold text-[#212121] lg:block dark:text-white">
                    Filter by type
                  </div>
                  <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-2 lg:mx-0 lg:flex-col lg:gap-0.5 lg:overflow-visible lg:border-l lg:border-black/10 lg:px-0 lg:pb-0 dark:lg:border-white/15">
                    {chips.map((chip) => {
                      const active = chip.key === type || (!chip.key && !types.some((t) => t.key === type));
                      return (
                        <Link
                          key={chip.key || "all"}
                          href={searchHref({ q, type: chip.key })}
                          aria-current={active ? "true" : undefined}
                          className={cn(
                            "flex shrink-0 items-center justify-between gap-3 rounded-full border px-4 py-2 text-sm transition-colors duration-200",
                            "lg:-ml-px lg:rounded-none lg:border-0 lg:border-l-2 lg:px-4 lg:py-2.5",
                            active
                              ? "border-transparent bg-(--basecolor) font-semibold text-white lg:border-l-(--basecolor) lg:bg-(--basecolor)/8 lg:text-(--basecolor) dark:bg-white dark:text-[#101010] dark:lg:border-l-white dark:lg:bg-white/10 dark:lg:text-white"
                              : "border-black/10 bg-white text-[#4A5565] hover:text-(--basecolor) lg:border-l-transparent lg:bg-transparent dark:border-white/15 dark:bg-white/5 dark:text-white/80 dark:hover:text-white",
                          )}
                        >
                          <span>{chip.label}</span>
                          <span
                            className={cn(
                              "text-xs tabular-nums",
                              active ? "opacity-80" : "text-[#6A7282] dark:text-white/50",
                            )}
                          >
                            {chip.count}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </nav>
              </aside>

              {/* results */}
              <div className="min-w-0">
                <p className="text_1 mb-4">
                  {total > 0
                    ? `Showing ${(page - 1) * PAGE_SIZE + 1}–${Math.min(page * PAGE_SIZE, total)} of ${total} result${total === 1 ? "" : "s"}`
                    : "No results on this page."}
                </p>

                {items.length > 0 ? (
                  <ul className="overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/10 dark:bg-white/5">
                    {items.map((item) => (
                      <ResultCard key={item.id} item={item} q={q} />
                    ))}
                  </ul>
                ) : (
                  <Message
                    title="No results here"
                    text="Try another filter, or go back to the first page."
                  />
                )}

                <Pagination q={q} type={type} page={page} pageCount={pageCount} />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}