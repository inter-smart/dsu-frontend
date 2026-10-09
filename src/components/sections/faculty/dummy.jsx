"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

function FacultyCard({ member }) {
  return (
    <article className="relative flex min-h-[146px] flex-col justify-between rounded-md border border-[#e9e2da] bg-white shadow-[0_1px_2px_rgba(30,30,30,0.05)] transition hover:border-[#f97316] hover:shadow-md">
      <span className="absolute left-0 top-[9px] rounded-r-full bg-[#fff0e8] px-1.5 py-0.5 text-[8px] leading-none text-[#76655d]">
        {member.category.label}
      </span>
      <div className="px-2 pb-2 pt-[10px] text-center">
        <Link
          href={member.href}
          aria-label={`View ${member.name}'s profile`}
          className="relative mx-auto mb-1.5 block size-[63px] overflow-hidden rounded-full bg-[#eee]"
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="63px"
            className="object-cover"
          />
        </Link>
        <Link
          href={member.href}
          className="line-clamp-1 text-[9px] font-semibold text-[#252525] hover:text-[#df321e]"
        >
          {member.name}
        </Link>
        <p className="mt-0.5 line-clamp-1 text-[8px] font-medium leading-tight text-[#e43b27]">
          {member.designation}
        </p>
        <p className="mt-0.5 line-clamp-1 text-[7px] leading-tight text-[#667085]">
          {member.department}
        </p>
      </div>
      <div className="flex min-h-[25px] items-center justify-between gap-2 border-t border-[#f0ece8] px-2 py-1">
        <span className="truncate text-[8px] text-[#525252]">
          {member.qualification}
        </span>
        <Link
          href={member.href}
          className="flex shrink-0 items-center gap-1 text-[8px] text-[#292929] hover:text-[#e43b27]"
        >
          View Profile <ArrowRight size={11} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export default function FacultyDirectoryListing() {
  const local_data = {
    facalties: [
      {
        category: { label: "Regular Faculty" },
        faculty: [
          {
            id: 1,
            name: "Dr. Aanya Sharma",
            school: "Engineering",
            department: "Computer Science & Engineering",
            designation: "Professor",
            qualification: "Ph.D",
            image: "/images/avatar-1.jpg",
            href: "#",
            expertiseAreas: ["Artificial Intelligence", "Machine Learning"],
          },
          {
            id: 5,
            name: "Dr. Diya Iyer",
            school: "Computer Applications",
            department: "B.Sc in Cyber History",
            designation: "Associate Professor",
            qualification: "Ph.D",
            image: "/images/avatar-1.jpg",
            href: "#",
            expertiseAreas: ["Cybersecurity", "Blockchain"],
          },
          {
            id: 9,
            name: "Dr. Nikhil Patel",
            school: "Computer Applications",
            department: "M.Sc in Cyber History",
            designation: "Assistant Professor",
            qualification: "Ph.D",
            image: "/images/avatar-1.jpg",
            href: "#",
            expertiseAreas: ["Cybersecurity", "Big Data"],
          },
          {
            id: 13,
            name: "Dr. Kabir Joshi",
            school: "Basic & Applied Sciences",
            department: "Applied Sciences",
            designation: "Professor",
            qualification: "Ph.D",
            image: "/images/avatar-1.jpg",
            href: "#",
            expertiseAreas: ["IoT", "Machine Learning"],
          },
          {
            id: 17,
            name: "Dr. Omar Fernandes",
            school: "Medical Education & Research",
            department: "Medical Education",
            designation: "Associate Professor",
            qualification: "M.D, Ph.D",
            image: "/images/avatar-1.jpg",
            href: "#",
            expertiseAreas: ["Machine Learning", "IoT"],
          },
        ],
      },
      {
        category: { label: "Research Supervisors" },
        faculty: [
          {
            id: 2,
            name: "Dr. Aarav Rao",
            school: "Engineering",
            department: "Electrical & Electronics Engineering",
            designation: "Research Professor",
            qualification: "Ph.D",
            image: "/images/avatar-1.jpg",
            href: "#",
            expertiseAreas: ["Cloud Computing", "IoT"],
          },
          {
            id: 6,
            name: "Dr. Ishaan Kapoor",
            school: "Computer Applications",
            department: "BCA in AI & DS",
            designation: "Professor & Research Supervisor",
            qualification: "Ph.D",
            image: "/images/avatar-1.jpg",
            href: "#",
            expertiseAreas: ["Artificial Intelligence", "Product Engineering"],
          },
          {
            id: 10,
            name: "Dr. Riya Menon",
            school: "School of Law",
            department: "Law",
            designation: "Research Professor",
            qualification: "Ph.D",
            image: "/images/avatar-1.jpg",
            href: "#",
            expertiseAreas: ["Blockchain", "Artificial Intelligence"],
          },
          {
            id: 14,
            name: "Dr. Tara Bose",
            school: "Health Sciences",
            department: "Health Sciences",
            designation: "Research Professor",
            qualification: "Ph.D",
            image: "/images/avatar-1.jpg",
            href: "#",
            expertiseAreas: ["Data Science", "Artificial Intelligence"],
          },
          {
            id: 18,
            name: "Dr. Leela Krishnan",
            school: "Online Degree Programs (BBA, BCA & B.Com)",
            department: "Online Programs",
            designation: "Professor & Research Supervisor",
            qualification: "Ph.D",
            image: "/images/avatar-1.jpg",
            href: "#",
            expertiseAreas: ["Distributed Systems", "Cybersecurity"],
          },
        ],
      },
      {
        category: { label: "Visiting Professors" },
        faculty: [
          {
            id: 3,
            name: "Dr. Anika Mehta",
            school: "Computer Applications",
            department: "Bachelor of Computer Applications",
            designation: "Visiting Professor",
            qualification: "M.C.A, Ph.D",
            image: "/images/avatar-1.jpg",
            href: "#",
            expertiseAreas: ["Cybersecurity", "Data Science"],
          },
          {
            id: 7,
            name: "Dr. Kavya Reddy",
            school: "Computer Applications",
            department: "Master of Computer Applications",
            designation: "Adjunct Professor",
            qualification: "M.C.A, Ph.D",
            image: "/images/avatar-1.jpg",
            href: "#",
            expertiseAreas: ["Machine Learning", "Distributed Systems"],
          },
          {
            id: 11,
            name: "Dr. Vihaan Singh",
            school: "Commerce & Management Studies",
            department: "Commerce",
            designation: "Visiting Professor",
            qualification: "M.Com, Ph.D",
            image: "/images/avatar-1.jpg",
            href: "#",
            expertiseAreas: ["Big Data", "Product Engineering"],
          },
          {
            id: 15,
            name: "Dr. Neil Bhat",
            school: "Arts, Design and Humanities",
            department: "Arts & Humanities",
            designation: "Adjunct Professor",
            qualification: "M.A, Ph.D",
            image: "/images/avatar-1.jpg",
            href: "#",
            expertiseAreas: ["Product Engineering", "Blockchain"],
          },
        ],
      },
      {
        category: { label: "Industry Mentors" },
        faculty: [
          {
            id: 4,
            name: "Dr. Arjun Nair",
            school: "Computer Applications",
            department: "B.Sc in Data Science",
            designation: "Industry Mentor",
            qualification: "M.Tech, MBA",
            image: "/images/avatar-1.jpg",
            href: "#",
            expertiseAreas: ["Big Data", "Data Science"],
          },
          {
            id: 8,
            name: "Dr. Mira Das",
            school: "Computer Applications",
            department: "M.Sc in Data Science",
            designation: "Lead Industry Mentor",
            qualification: "M.Sc, MBA",
            image: "/images/avatar-1.jpg",
            href: "#",
            expertiseAreas: ["Data Science", "Cloud Computing"],
          },
          {
            id: 12,
            name: "Dr. Zoya Kulkarni",
            school: "Commerce & Management Studies",
            department: "Management",
            designation: "Industry Mentor",
            qualification: "M.B.A, Ph.D",
            image: "/images/avatar-1.jpg",
            href: "#",
            expertiseAreas: ["Cloud Computing", "Distributed Systems"],
          },
          {
            id: 16,
            name: "Dr. Sara Khanna",
            school: "Design & Digital Trans Media",
            department: "Design",
            designation: "Lead Industry Mentor",
            qualification: "M.Des, MBA",
            image: "/images/avatar-1.jpg",
            href: "#",
            expertiseAreas: ["Product Engineering", "Cloud Computing"],
          },
        ],
      },
    ],
  };
  const facultyMembers = local_data.facalties.flatMap((group) =>
    group.faculty.map((member) => ({
      ...member,
      category: group.category,
    })),
  );
  const categories = [
    { label: "All" },
    ...local_data.facalties.map((group) => group.category),
  ];
  const departmentMap = facultyMembers.reduce((schools, member) => {
    if (!schools.has(member.school)) {
      schools.set(member.school, new Set());
    }
    schools.get(member.school).add(member.department);
    return schools;
  }, new Map());
  const departments = Array.from(departmentMap, ([name, children]) => ({
    name,
    children: Array.from(children),
  }));
  const expertiseAreas = Array.from(
    new Set(facultyMembers.flatMap((member) => member.expertiseAreas)),
  );
  const initialVisibleCount = 9;
  const loadMoreCount = 9;

  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeDepartment, setActiveDepartment] = useState("");
  const [selectedDepartmentItem, setSelectedDepartmentItem] = useState("");
  const [activeExpertise, setActiveExpertise] = useState("");
  const [expandedDepartment, setExpandedDepartment] = useState(
    "Computer Applications",
  );
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const searchTerm = query.trim().toLowerCase();
  const filteredFaculty = facultyMembers.filter((member) => {
    const matchesQuery =
      !searchTerm ||
      [
        member.name,
        member.designation,
        member.department,
        member.expertiseAreas.join(" "),
      ]
        .join(" ")
        .toLowerCase()
        .includes(searchTerm);
    const matchesCategory =
      activeCategory === "All" ||
      member.category.label === activeCategory;
    const matchesDepartment =
      !activeDepartment ||
      member.department.toLowerCase().includes(activeDepartment.toLowerCase());
    const matchesExpertise =
      !activeExpertise || member.expertiseAreas.includes(activeExpertise);

    return (
      matchesQuery && matchesCategory && matchesDepartment && matchesExpertise
    );
  });

  const resetFilters = () => {
    setQuery("");
    setActiveCategory("All");
    setActiveDepartment("");
    setSelectedDepartmentItem("");
    setActiveExpertise("");
    setVisibleCount(initialVisibleCount);
  };

  const chooseCategory = (category) => {
    setActiveCategory(category);
    setVisibleCount(initialVisibleCount);
  };

  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#262626]">
      <div
        aria-hidden="true"
        className="relative h-[44px] bg-[#06172a]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 25% 0%, rgba(16,102,144,.7), transparent 38%), radial-gradient(circle at 75% 10%, rgba(16,92,128,.7) 1px, transparent 2px)",
          backgroundSize: "auto, 9px 9px",
        }}
      />
      <section className="relative z-10 mx-auto -mt-[34px] w-[calc(100%-32px)] max-w-[1408px] rounded-xl border border-[#f1e8df] bg-white px-4 py-3 shadow-[0_8px_25px_rgba(30,24,20,0.08)] sm:px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
          <label className="flex min-w-0 flex-1 items-center gap-2 border-b border-[#f17b5a] pb-1.5">
            <span className="sr-only">Search faculty by name or expertise</span>
            <input
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setVisibleCount(initialVisibleCount);
              }}
              placeholder="Search by Name or Field of Expertise..."
              className="w-full bg-transparent text-[10px] outline-none placeholder:text-[#929292]"
            />
            <Search
              size={14}
              className="shrink-0 text-[#f04b2b]"
              aria-hidden="true"
            />
          </label>
          <div className="flex flex-nowrap items-center gap-1.5 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible md:pb-0 lg:gap-2">
            {categories.map((category) => (
              <button
                key={category.label}
                type="button"
                onClick={() => chooseCategory(category.label)}
                className={`whitespace-nowrap rounded-full border px-2.5 py-1 text-[9px] transition ${
                  activeCategory === category.label
                    ? "border-transparent bg-gradient-to-r from-[#e72b24] to-[#ff741c] font-semibold text-white"
                    : "border-[#f1ded4] bg-white text-[#343434] hover:border-[#ee8b6d]"
                }`}
              >
                {category.label}
                <span
                  className={`ml-1 ${activeCategory === category.label ? "text-white/75" : "text-[#87909e]"}`}
                >
                  (
                  {category.label === "All"
                    ? facultyMembers.length
                    : local_data.facalties.find(
                        (group) =>
                          group.category.label === category.label,
                      ).faculty.length}
                  )
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto grid w-[calc(100%-32px)] max-w-[1408px] grid-cols-1 gap-4 pb-12 pt-7 sm:w-[calc(100%-48px)] md:grid-cols-[minmax(170px,22%)_1fr] xl:gap-5">
        <aside>
          <button
            type="button"
            aria-expanded={mobileFiltersOpen}
            aria-controls="faculty-directory-filters"
            onClick={() => setMobileFiltersOpen((open) => !open)}
            className="mb-3 flex w-full items-center justify-between rounded-lg border border-[#eee5dc] bg-white px-3 py-3 text-left text-[11px] font-semibold md:hidden"
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
            id="faculty-directory-filters"
            className={`${mobileFiltersOpen ? "block" : "hidden"} space-y-3 md:block`}
          >
            <section className="overflow-hidden rounded-lg border border-[#eee5dc] bg-white">
              <h2 className="bg-gradient-to-r from-[#e92624] to-[#ff741c] px-3 py-3 text-[11px] font-semibold text-white">
                Browse by School / Departments
              </h2>
              <div>
                {departments.map((department) => {
                  const isExpanded = expandedDepartment === department.name;

                  return (
                    <div
                      key={department.name}
                      className="border-t border-[#eee8e1]"
                    >
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        onClick={() =>
                          setExpandedDepartment(
                            isExpanded ? "" : department.name,
                          )
                        }
                        className="flex w-full items-center justify-between gap-2 px-3 py-[9px] text-left text-[9px] font-medium hover:bg-[#fff8f3]"
                      >
                        <span>{department.name}</span>
                        {isExpanded ? (
                          <ChevronDown size={11} />
                        ) : (
                          <ChevronRight size={11} />
                        )}
                      </button>
                      {isExpanded && (
                        <ul className="space-y-0.5 px-3 pb-2">
                          {department.children.map((child) => (
                            <li key={child}>
                              <button
                                type="button"
                                onClick={() => {
                                  setActiveDepartment(child);
                                  setSelectedDepartmentItem(child);
                                  setVisibleCount(initialVisibleCount);
                                }}
                                className={`w-full py-0.5 text-left text-[8px] leading-tight transition hover:text-[#e63221] ${
                                  selectedDepartmentItem === child
                                    ? "font-medium text-[#e63221]"
                                    : "text-[#5d6672]"
                                }`}
                              >
                                {child}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="rounded-lg border border-[#eee5dc] bg-white p-3">
              <h2 className="mb-2 text-[10px] font-semibold">
                Popular Expertise Areas
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {expertiseAreas.map((area) => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => {
                      setActiveExpertise(activeExpertise === area ? "" : area);
                      setVisibleCount(initialVisibleCount);
                    }}
                    className={`rounded-full px-2 py-1 text-[7px] transition ${
                      activeExpertise === area
                        ? "bg-[#ee452b] text-white"
                        : "bg-[#fff0e9] text-[#655e5c] hover:bg-[#ffe2d4]"
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </section>
            <button
              type="button"
              onClick={resetFilters}
              className="flex w-full items-center justify-center gap-1 text-[9px] font-semibold text-[#e43b27] underline underline-offset-2"
            >
              <X size={11} aria-hidden="true" /> Reset all filters
            </button>
          </div>
        </aside>

        <section aria-label="Faculty directory results">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-[9px]">
            <p>
              <strong>{filteredFaculty.length}</strong> Faculty members found
            </p>
            <p className="text-[#7d8795]">
              Showing {Math.min(visibleCount, filteredFaculty.length)} Results
              Of {filteredFaculty.length || 0}
            </p>
          </div>

          {filteredFaculty.length ? (
            <>
              <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 md:grid-cols-3 xl:gap-4">
                {filteredFaculty.slice(0, visibleCount).map((member) => (
                  <FacultyCard key={member.id} member={member} />
                ))}
              </div>
              {visibleCount < filteredFaculty.length && (
                <div className="mt-7 flex justify-center">
                  <button
                    type="button"
                    onClick={() =>
                      setVisibleCount((count) => count + loadMoreCount)
                    }
                    className="rounded-sm bg-gradient-to-r from-[#e92624] to-[#ff741c] px-3 py-2 text-[9px] font-semibold text-white transition hover:brightness-105"
                  >
                    Load More
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
        </section>
      </div>
    </main>
  );
}
