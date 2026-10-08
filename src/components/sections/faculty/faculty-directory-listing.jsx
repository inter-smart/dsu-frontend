"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { getFacultyList } from "@/lib/api/index";

const PAGE_SIZE = 9;

// Strapi data ({ filters, faculty, pagination }): search, filters and "Load More" run
// in the backend via GET /api/faculties, filter values are ids.
// `local_data` fallback ({ facalties }): everything runs in the browser, values are labels.
export default function FacultyDirectoryListing({ data }) {
  const isServer = Boolean(data?.pagination);

  const facultyMembers = isServer
    ? []
    : (data?.facalties ?? []).flatMap((group) =>
        group.faculty.map((member) => ({
          ...member,
          category: group.category,
        })),
      );
  const categories = isServer
    ? [
        { value: "", label: "All", count: data.filters?.total ?? 0 },
        ...(data.filters?.categories ?? []).map((category) => ({
          value: category.id,
          label: category.label,
          count: category.count,
        })),
      ]
    : [
        { value: "", label: "All", count: facultyMembers.length },
        ...(data?.facalties ?? []).map((group) => ({
          value: group.category.label,
          label: group.category.label,
          count: group.faculty.length,
        })),
      ];
  const departments = isServer
    ? (data.filters?.departments ?? []).map((school) => ({
        name: school.name,
        children: school.children.map((child) => ({
          value: child.id,
          label: child.name,
        })),
      }))
    : Array.from(
        facultyMembers.reduce((schools, member) => {
          if (!schools.has(member.school)) {
            schools.set(member.school, new Set());
          }
          schools.get(member.school).add(member.department);
          return schools;
        }, new Map()),
        ([name, children]) => ({
          name,
          children: Array.from(children, (child) => ({
            value: child,
            label: child,
          })),
        }),
      );
  const expertiseAreas = isServer
    ? (data.filters?.expertiseAreas ?? []).map((area) => ({
        value: area.id,
        label: area.title,
      }))
    : Array.from(
        new Set(facultyMembers.flatMap((member) => member.expertiseAreas ?? [])),
        (area) => ({ value: area, label: area }),
      );
  const initialVisibleCount = PAGE_SIZE;
  const loadMoreCount = PAGE_SIZE;

  // `query` is the input text, `searchQuery` the applied search (search icon / Enter)
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [activeDepartment, setActiveDepartment] = useState("");
  const [activeExpertise, setActiveExpertise] = useState("");
  const [expandedDepartment, setExpandedDepartment] = useState(
    departments[0]?.name ?? "",
  );
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  // server mode: the loaded cards and the backend's { page, pageCount, total, showing }
  const [items, setItems] = useState(data?.faculty ?? []);
  const [pagination, setPagination] = useState(data?.pagination ?? null);
  const [loading, setLoading] = useState(false);
  const requestId = useRef(0);

  const filterParams = {
    search: searchQuery,
    category: activeCategory,
    department: activeDepartment,
    expertise: activeExpertise,
  };
  // page 1 for the initial (empty) filters is already rendered by the server
  const lastFilterKey = useRef(
    JSON.stringify({ search: "", category: "", department: "", expertise: "" }),
  );

  const loadPage = async (page, append) => {
    const id = ++requestId.current;
    setLoading(true);
    try {
      const res = await getFacultyList({
        ...filterParams,
        page,
        pageSize: PAGE_SIZE,
      });
      // a newer search / filter change replaced this request
      if (id !== requestId.current) return;
      if (res?.data && res?.pagination) {
        setItems((prev) => {
          if (!append) return res.data;
          const seen = new Set(prev.map((item) => item?.documentId));
          return [
            ...prev,
            ...res.data.filter((item) => !seen.has(item?.documentId)),
          ];
        });
        setPagination(res.pagination);
      }
    } finally {
      if (id === requestId.current) setLoading(false);
    }
  };

  // refetch page 1 whenever the search or a filter changes (no page reload)
  useEffect(() => {
    if (!isServer) return;
    const key = JSON.stringify(filterParams);
    if (key === lastFilterKey.current) return;
    lastFilterKey.current = key;
    loadPage(1, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isServer, searchQuery, activeCategory, activeDepartment, activeExpertise]);

  const searchTerm = searchQuery.toLowerCase();
  const filteredFaculty = isServer
    ? []
    : facultyMembers.filter((member) => {
        const matchesQuery =
          !searchTerm || member.name.toLowerCase().includes(searchTerm);
        const matchesCategory =
          !activeCategory || member.category.label === activeCategory;
        const matchesDepartment =
          !activeDepartment || member.department === activeDepartment;
        const matchesExpertise =
          !activeExpertise ||
          (member.expertiseAreas ?? []).includes(activeExpertise);

        return (
          matchesQuery &&
          matchesCategory &&
          matchesDepartment &&
          matchesExpertise
        );
      });

  const visibleFaculty = isServer
    ? items
    : filteredFaculty.slice(0, visibleCount);
  const totalCount = isServer
    ? (pagination?.total ?? 0)
    : filteredFaculty.length;
  const showingCount = isServer
    ? (pagination?.showing ?? items.length)
    : Math.min(visibleCount, filteredFaculty.length);
  const hasMore = isServer
    ? Boolean(pagination && pagination.page < pagination.pageCount)
    : visibleCount < filteredFaculty.length;

  const loadMore = () => {
    if (isServer) {
      if (hasMore && !loading) loadPage(pagination.page + 1, true);
    } else {
      setVisibleCount((count) => count + loadMoreCount);
    }
  };

  const resetFilters = () => {
    setQuery("");
    setSearchQuery("");
    setActiveCategory("");
    setActiveDepartment("");
    setActiveExpertise("");
    setVisibleCount(initialVisibleCount);
  };

  const applySearch = (event) => {
    event.preventDefault();
    setSearchQuery(query.trim());
    setVisibleCount(initialVisibleCount);
  };

  const chooseCategory = (category) => {
    setActiveCategory(category);
    setVisibleCount(initialVisibleCount);
  };
  return (
    <section className="w-full h-auto sm:py-[0_50px] 2xl:py-[0_60px] 3xl:py-[0_80px] bg-linear-to-t from-[#FFF3E0]/50 to-[#FFF8EE]/50 block">
      <div className="container">
        <div className="sm:[--gap:15px] lg:[--gap:20px] 2xl:[--gap:30px] 3xl:[--gap:35px] [--rounded:10px] sm:[--rounded:15px] lg:[--rounded:20px] 2xl:[--rounded:25px] 3xl:[--rounded:30px] w-full h-auto p-[15px_20px] sm:p-[20px_25px] lg:p-[25px_30px] 2xl:p-[30px_40px] 3xl:p-[35px_50px] mb-3.75 sm:mb-5 lg:mb-5 2xl:mb-10 3xl:mb-12.5 rounded-(--rounded) translate-y-[-15%] xl:-translate-y-1/2 flex flex-wrap items-center relative z-20 before:size-full before:rounded-(--rounded) before:bg-linear-to-r before:from-(--basecolor) before:to-(--basecolor2) before:-translate-y-0.75 2xl:before:-translate-y-1.25 before:absolute before:-z-2 before:inset-0 after:size-full after:bg-white after:rounded-(--rounded) after:absolute after:-z-1 after:inset-0">
          <div className="w-full md:w-[35%] md:pr-(--gap) max-md:mb-5">
            <form
              role="search"
              onSubmit={applySearch}
              className="w-full h-auto py-2.5 [border-bottom:2px_solid] 2xl:[border-bottom:3px_solid] [border-image:linear-gradient(to_right,#e52d27,#f0742b)_1] flex items-center"
            >
              <input
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  // emptying the box (or its clear button) drops the applied search
                  if (!event.target.value.trim()) {
                    setSearchQuery("");
                    setVisibleCount(initialVisibleCount);
                  }
                }}
                placeholder="Search by Faculty Name..."
                aria-label="Search by Faculty Name"
                className="text-[13px] 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-normal text-[#4A5565] outline-none placeholder:italic placeholder:font-light placeholder:text-[#4A5565] w-full h-auto bg-transparent"
              />
              <button
                type="submit"
                aria-label="Search"
                className="shrink-0 cursor-pointer"
              >
                <Search
                  size={18}
                  className="text-[#f04b2b]"
                  aria-hidden="true"
                />
              </button>
            </form>
          </div>
          <div className="w-full md:w-[65%] md:pl-(--gap) md:border-l border-black/10">
            <div className="w-full h-auto pb-1 md:pb-0 gap-1.5 lg:gap-2.5 3xl:gap-3.75 overflow-x-auto flex md:flex-wrap md:overflow-visible no-scrollbar flex-nowrap items-center">
              {categories.map((category) => (
                <button
                  key={category.label}
                  type="button"
                  onClick={() => chooseCategory(category.value)}
                  className={`text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-medium whitespace-nowrap text-[#212121] w-auto h-auto p-2.5 2xl:p-3 3xl:p-3.75 border border-transparent rounded-full transition-all ${
                    activeCategory === category.value
                      ? "bg-linear-to-r from-(--basecolor) to-(--basecolor2) text-white"
                      : "text-[#1e293b] hover:opacity-90 [border:1px_solid_transparent] [background:linear-gradient(#fff,#fff)_padding-box,linear-gradient(to_right,#f7a8b8,#ffe5cf)_border-box]"
                  }`}
                >
                  {category.label}
                  <span
                    className={`ml-1 font-normal ${
                      activeCategory === category.value
                        ? "text-white"
                        : "text-[#66738A]"
                    }`}
                  >
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="[--width:100%] lg:[--width:280px] 2xl:[--width:340px] 3xl:[--width:420px] w-full h-auto flex flex-wrap">
          <div className="w-(--width) max-lg:mb-5">
            <button
              type="button"
              aria-expanded={mobileFiltersOpen}
              aria-controls="faculty-directory-filters"
              onClick={() => setMobileFiltersOpen((open) => !open)}
              className="mb-3 flex w-full items-center justify-between rounded-lg border border-[#eee5dc] bg-white px-3 py-3 text-left text-[11px] font-semibold lg:hidden"
            >
              <span className="flex items-center gap-2">
                <SlidersHorizontal size={14} aria-hidden="true" />
                Browse departments & expertise
              </span>
              {mobileFiltersOpen ? (
                <ChevronDown size={14} />
              ) : (
                <ChevronRight size={14} />
              )}
            </button>
            <div
              className={`${mobileFiltersOpen ? "block" : "hidden"} lg:block`}
            >
              <div className="[--spacing:15px] lg:[--spacing:20px] 2xl:[--spacing:25px] 3xl:[--spacing:30px] w-full h-auto mb-[15px] lg:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px] bg-white border border-[#E7E1D8] rounded-[10px] 2xl:rounded-[15px] 3xl:rounded-[20px] overflow-hidden">
                <div className="text-sm 2xl:text-lg 3xl:text-[22px] leading-[1.1] font-medium text-white w-full h-auto p-[20px_var(--spacing)] 2xl:p-[25px_var(--spacing)] 3xl:p-[30px_var(--spacing)] bg-linear-to-r from-(--basecolor) to-(--basecolor2)">
                  Browse by School / Departments
                </div>
                <div>
                  {departments.map((department) => {
                    const isExpanded = expandedDepartment === department.name;
                    return (
                      <div
                        key={department.name}
                        className="w-full h-auto border-b border-[#E7E1D8] last:border-0"
                      >
                        <button
                          type="button"
                          aria-expanded={isExpanded}
                          onClick={() =>
                            setExpandedDepartment(
                              isExpanded ? "" : department.name,
                            )
                          }
                          className="text-[13px] 2xl:text-sm 3xl:text-base leading-[1.4] font-medium text-left text-[#212121] w-full gap-2 p-[10px_var(--spacing)] 2xl:p-[15px_var(--spacing)] 3xl:p-[20px_var(--spacing)] flex items-center justify-between"
                        >
                          <span>{department.name}</span>
                          {isExpanded ? (
                            <div className="size-[11px] 2xl:size-[12px] 3xl:size-[13px] shrink-0 flex items-center justify-center">
                              <Image
                                src={"/images/ChevronDown.svg"}
                                alt="ChevronDown"
                                width={10}
                                height={10}
                                className="size-full object-contain"
                              />
                            </div>
                          ) : (
                            <div className="size-[11px] 2xl:size-[12px] 3xl:size-[13px] shrink-0 flex items-center justify-center">
                              <Image
                                src={"/images/ChevronRight.svg"}
                                alt="ChevronDown"
                                width={10}
                                height={10}
                                className="size-full object-contain"
                              />
                            </div>
                          )}
                        </button>
                        {isExpanded && (
                          <ul className="w-full h-auto p-[0_var(--spacing)_10px_var(--spacing)] lg:p-[0_var(--spacing)_20px_var(--spacing)]">
                            {department.children.map((child) => (
                              <li key={child.value}>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setActiveDepartment(child.value);
                                    setVisibleCount(initialVisibleCount);
                                  }}
                                  className={`text-[13px] 2xl:text-sm 3xl:text-base leading-[1.1] font-normal text-left text-[#4A5565] 2xl:py-[7px] 3xl:py-[10px] transition-colors duration-300 hover:text-(--basecolor) ${
                                    activeDepartment === child.value &&
                                    "text-[#e63221]"
                                  }`}
                                >
                                  {child.label}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-full h-auto p-[20px_15px] lg:p-[25px_15px] 2xl:p-[30px_15px] 3xl:p-[35px_20px] bg-white border border-[#E7E1D8] rounded-[15px] 2xl:rounded-[20px] overflow-hidden">
                <div className="text-base 2xl:text-lg 3xl:text-[22px] leading-[1.1] font-medium text-[#212121] mb-3.75 lg:mb-6.25">
                  Popular Expertise Areas
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {expertiseAreas.map((area) => (
                    <button
                      key={area.value}
                      type="button"
                      onClick={() => {
                        setActiveExpertise(
                          activeExpertise === area.value ? "" : area.value,
                        );
                        setVisibleCount(initialVisibleCount);
                      }}
                      className={`text-[10px] 2xl:text-sm 3xl:text-base leading-[1.1] font-medium text-[#4A5565] w-auto h-auto p-[10px_20px] border border-[#F97316]/10 rounded-full transition ${
                        activeExpertise === area.value
                          ? "bg-[#ee452b] text-white"
                          : "bg-[#fff0e9] text-[#655e5c] hover:bg-[#ffe2d4]"
                      }`}
                    >
                      {area.label}
                    </button>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={resetFilters}
                className="text-base 2xl:text-lg 3xl:text-xl leading-[1.2] font-semibold text-center underline underline-offset-2 text-[#e43b27] w-full h-auto py-3.75 2xl:py-5 transition-all duration-300 hover:opacity-70"
              >
                Reset all filters
              </button>
            </div>
          </div>
          <div className="w-(--width) lg:w-[calc(100%-var(--width))] lg:pl-6.25 2xl:pl-7.5">
            <div className="text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-normal text-[#565656] w-full h-auto mb-5 2xl:mb-7.5 3xl:mb-8.75 gap-5 flex flex-wrap items-center justify-between">
              <div>
                <strong className="text-[#212121]">{totalCount}</strong>{" "}
                Faculty members found
              </div>
              <div className="text-[#66738A]">
                Showing {showingCount} Results Of {totalCount}
              </div>
            </div>
            {visibleFaculty.length ? (
              <>
                <div
                  aria-busy={loading}
                  className={`transition-opacity duration-300 ${loading ? "opacity-50" : ""} w-full h-auto gap-[15px_10px] sm:gap-[25px_20px] lg:gap-[30px_25px] 2xl:gap-[35px_30px] 3xl:gap-[45px_35px] grid grid-cols-1 min-[468px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3`}
                >
                  {visibleFaculty.map((member) => (
                    <FacultyCard key={member.documentId ?? member.id} member={member} />
                  ))}
                </div>
                {hasMore && (
                  <div className="w-fit h-auto mx-auto mt-7.5 lg:mt-10 2xl:mt-12.5 3xl:mt-17.5">
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
                        alt="home-btn"
                        width={15}
                        height={15}
                        className="size-3.75"
                        data-icon="inline-end"
                      />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="rounded-lg border border-[#eee5dc] bg-white px-5 py-12 text-center">
                <p className="text-sm font-medium">
                  No faculty members match these filters.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-3 text-xs font-semibold text-[#e43b27] underline underline-offset-2"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FacultyCard({ member }) {
  return (
    <div className="[--gap:15px] 2xl:[--gap:25px] [--rounded:6px] 2xl:[--rounded:10px] w-full h-full bg-white rounded-(--rounded) border border-[#E7E1D8] block relative z-0 before:size-full before:bg-[#E7E1D8] before:rounded-(--rounded) before:translate-y-0.75 2xl:before:translate-y-1 before:absolute before:-z-1 before:inset-0 after:size-full after:bg-white after:rounded-(--rounded) after:absolute after:-z-1 after:inset-0 hover:before:bg-linear-to-r hover:before:from-(--basecolor) hover:before:to-(--basecolor2) hover:border-transparent hover:[background:linear-gradient(#fff,#fff)_padding-box,linear-gradient(to_right,#e52d27,#f0742b)_border-box] [border:1px_solid_#E7E1D8] 2xl:[border:2px_solid_#E7E1D8]">
      <span className="text-[10px] 2xl:text-[13px] 3xl:text-base leading-[1.1] font-normal text-[#4A5565] w-auto h-auto p-[5px_10px] my-(--gap) rounded-[0_100px_100px_0] bg-linear-to-r from-(--basecolor)/10 to-(--basecolor2)/10 absolute z-1 inset-[0_auto_auto_0]">
        {member?.category?.label}
      </span>
      <div className="w-full h-auto py-3.75 lg:py-6.25 border-b border-black/10">
        <div className="w-22.5 sm:w-25 2xl:w-30 3xl:w-37.5 h-auto mx-auto mb-2.5 2xl:mb-3.75 3xl:mb-5 aspect-square rounded-full overflow-hidden block">
          <Image
            src={member?.image}
            alt={member?.name}
            width={150}
            height={150}
            className="size-full object-cover"
          />
        </div>
        <div className="w-full h-auto text-center">
          <div className="text-[15px] 2xl:text-base 3xl:text-xl leading-[1.1] font-semibold text-[#212121] mb-1.25 3xl:mb-2.5">
            {member?.name}
          </div>
          <div className="text-[13px] sm:text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-normal bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit mx-auto mb-1.25">
            {member?.designation}
          </div>
          <div className="text-[13px] sm:text-sm 2xl:text-[13px] 3xl:text-base leading-[1.1] font-normal text-[#4A5565]">
            {member?.department}
          </div>
        </div>
      </div>
      <div className="w-full h-auto p-3.75 2xl:p-5 flex flex-wrap items-center justify-between">
        <span className="text-[13px] 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-normal text-[#4A5565]">
          {member?.qualification}
        </span>
        <Link
          href={member?.href}
          className="text-[13px] 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-normal text-[#212121] gap-1.25 2xl:gap-1.75 shrink-0 flex items-center transition-colors duration-300 hover:text-[#e43b27]"
        >
          View Profile{" "}
          <ArrowRight size={20} aria-hidden="true" className="w-3.75 2xl:w-5" />
        </Link>
      </div>
    </div>
  );
}
