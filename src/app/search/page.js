import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { searchSite } from "@/lib/api/search";

const PAGE_SIZE = 10;
const MIN_QUERY = 2;

const first = (value) => (Array.isArray(value) ? value[0] : value) ?? "";

export async function generateMetadata({ searchParams }) {
  const q = String(first((await searchParams)?.q)).trim();
  return {
    title: q ? `Search results for "${q}"` : "Search",
    robots: { index: false, follow: true },
  };
}

// /search?q=&type=&page= with only the non-empty parts
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
      <mark key={i} className="bg-transparent font-semibold text-(--basecolor) dark:text-(--basecolor2)">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

function SearchForm({ q }) {
  return (
    <form action="/search" role="search" className="relative w-full max-w-[720px]">
      <input
        type="search"
        name="q"
        defaultValue={q}
        placeholder="Search programmes, schools, faculty, news..."
        aria-label="Search the site"
        autoComplete="off"
        maxLength={100}
        className="h-12.5 2xl:h-14 w-full rounded-[5px] border border-white/30 bg-white/10 px-5 pr-14 text-base text-white outline-none backdrop-blur-sm transition-colors duration-300 placeholder:text-white/60 focus:border-white"
      />
      <button
        type="submit"
        aria-label="Search"
        className="absolute right-1.5 top-1/2 flex h-10 2xl:h-11 w-10 2xl:w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[5px] text-white transition-colors hover:bg-white/15"
      >
        <Search className="h-5 w-5" />
      </button>
    </form>
  );
}

function ResultCard({ item, q }) {
  const date = formatDate(item.date);
  return (
    <li>
      <Link
        href={item.url}
        className="group flex gap-4 2xl:gap-6 rounded-md 2xl:rounded-[10px] border border-black/10 bg-white p-4 2xl:p-6 transition-all duration-300 hover:border-(--basecolor)/40 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-white/30"
      >
        {item.image && (
          <div className="hidden sm:block h-24 w-32 2xl:h-28 2xl:w-40 shrink-0 overflow-hidden rounded-md bg-gray-100 dark:bg-white/10">
            <Image
              src={item.image}
              alt=""
              width={160}
              height={112}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs 2xl:text-[13px] font-semibold uppercase tracking-wide">
            <span className="bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent">
              {item.typeLabel}
            </span>
            {date && <span className="font-normal normal-case text-[#6A7282] dark:text-white/60">{date}</span>}
          </div>
          <h2 className="mb-1.5 text-base 2xl:text-lg 3xl:text-xl font-bold leading-snug text-[#212121] group-hover:text-(--basecolor) dark:text-white dark:group-hover:text-white/80">
            <Highlight text={item.title} query={q} />
          </h2>
          {item.description && (
            <p className="text_1 line-clamp-2">
              <Highlight text={item.description} query={q} />
            </p>
          )}
          <span className="mt-2 block truncate text-xs text-[#6A7282] dark:text-white/50">{item.url}</span>
        </div>
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
    "flex h-10 min-w-10 items-center justify-center rounded-[5px] border px-3 text-sm font-medium transition-colors";
  const idle =
    "border-black/10 text-[#212121] hover:border-(--basecolor) hover:text-(--basecolor) dark:border-white/15 dark:text-white dark:hover:border-white";
  const disabled = "pointer-events-none opacity-40";

  return (
    <nav aria-label="Search results pages" className="mt-10 flex flex-wrap items-center justify-center gap-2">
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

function Message({ title, text }) {
  return (
    <div className="rounded-md 2xl:rounded-[10px] border border-dashed border-black/15 px-6 py-14 text-center dark:border-white/15">
      <h2 className="mb-2 text-lg 2xl:text-xl font-bold text-[#212121] dark:text-white">{title}</h2>
      {text && <p className="text_1">{text}</p>}
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
      <section className="relative block w-full bg-linear-to-r from-[#450A03] via-[#7F1D1D] to-[#B91C1C]">
        <div className="container pb-10 pt-[180px] xl:pb-14 xl:pt-[200px] 2xl:pb-16 2xl:pt-[230px] 3xl:pb-20 3xl:pt-[270px]">
          <nav aria-label="Breadcrumb" className="mb-3 text-[10px] text-white xl:text-[12px] 2xl:text-[14px]">
            <Link href="/" className="font-light hover:opacity-70">
              Home
            </Link>
            <span className="mx-2 opacity-60">/</span>
            <span className="font-semibold">Search</span>
          </nav>
          <h1 className="mb-6 text-[28px] font-bold leading-tight text-white xl:text-[36px] 2xl:text-[44px]">
            {hasQuery ? (
              <>
                Results for <span className="opacity-90">&ldquo;{q}&rdquo;</span>
              </>
            ) : (
              "Search"
            )}
          </h1>
          <SearchForm q={q} />
        </div>
      </section>

      {/* data-no-reveal: results change with ?type=/&page= on the same path, which the
          scroll-reveal script does not re-scan, so its fade-in would leave new cards hidden */}
      <section data-no-reveal className="w-full py-10 xl:py-14 2xl:py-16">
        <div className="container">
          {!hasQuery ? (
            <Message
              title={q ? "Keyword too short" : "What are you looking for?"}
              text={`Enter at least ${MIN_QUERY} characters to search programmes, schools, faculty, news and pages.`}
            />
          ) : !result ? (
            <Message title="Search is unavailable" text="Please try again in a moment." />
          ) : allCount === 0 ? (
            <Message
              title={`No results for “${q}”`}
              text="Check the spelling or try a shorter, more general keyword."
            />
          ) : (
            <>
              <div className="mb-6 flex flex-wrap gap-2" role="list" aria-label="Filter results by type">
                {chips.map((chip) => {
                  const active = chip.key === type || (!chip.key && !types.some((t) => t.key === type));
                  return (
                    <Link
                      key={chip.key || "all"}
                      role="listitem"
                      href={searchHref({ q, type: chip.key })}
                      aria-current={active ? "true" : undefined}
                      className={cn(
                        "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                        active
                          ? "border-transparent bg-linear-to-r from-(--basecolor) to-(--basecolor2) text-white"
                          : "border-black/15 text-[#212121] hover:border-(--basecolor) hover:text-(--basecolor) dark:border-white/20 dark:text-white dark:hover:border-white",
                      )}
                    >
                      {chip.label} <span className="opacity-70">({chip.count})</span>
                    </Link>
                  );
                })}
              </div>

              <p className="text_1 mb-5">
                {total > 0
                  ? `Showing ${(page - 1) * PAGE_SIZE + 1}–${Math.min(page * PAGE_SIZE, total)} of ${total} result${total === 1 ? "" : "s"}`
                  : "No results on this page."}
              </p>

              {items.length > 0 ? (
                <ul className="flex flex-col gap-4">
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
            </>
          )}
        </div>
      </section>
    </>
  );
}
