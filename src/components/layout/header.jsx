"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";
import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom"; // ADDED
import { ChevronRight, ChevronDown, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

// ADDED: flyout items shown to the right of "Pro-Vice Chancellor" (replace labels/urls)
const proViceChancellorSubMenu = [
  { id: 1, url: "#!", label: "Prof. R Janardhan" },
  { id: 2, url: "#!", label: "Dr. Prakash S" }, 
];

const local_data = {
  // topBar: {
  //   topBarButtons: [
  //     {
  //       id: 1,
  //       url: "#!",
  //       label: "CDSIMER",
  //     },
  //     {
  //       id: 2,
  //       url: "#!",
  //       label: "DSU Online",
  //     },
  //   ],
  //   topBarLinkIcons: [
  //     {
  //       id: 1,
  //       url: "#!",
  //       label: "Virtual Tour",
  //       isExternal: false,
  //     },
  //     {
  //       id: 2,
  //       url: "#!",
  //       label: "E-Brochure",
  //       isExternal: false,
  //     },
  //   ],
  // },
  // logo: {
  //   mainlogo: {
  //     link: "/",
  //     url: "/images/dsu-logo.svg",
  //     alt: "DSU Logo",
  //   },
  //   alternativelogo: {
  //     link: "/",
  //     url: "/images/header-logo-2.svg",
  //     alt: "DSU Logo",
  //   },
  //   logoText: "India's AI-First <br> University",
  // },
  // actionLinks: [
  //   {
  //     id: 1,
  //     url: "#!",
  //     label: "NVIDIA's AI Architecture",
  //   },
  //   {
  //     id: 2,
  //     url: "#!",
  //     label: "AI-First @ DSU",
  //   },
  //   {
  //     id: 3,
  //     url: "#!",
  //     label: "Centres of Excellence",
  //   },
  // ],
  navigationLinks: [
    {
      id: 1,
      url: "#!",
      label: "Why DSU?",
      children: [
        {
          id: 1,
          url: "#!",
          label: "About DSU",
          children: [
            {
              id: 1,
              url: "#!",
              label: "Chancellor",
            },
            {
              id: 2,
              url: "#!",
              label: "Pro Chancellor",
            },
            {
              id: 3,
              url: "#!",
              label: "Vice Chancellor",
            },
            {
              id: 4,
              url: "#!",
              label: "Pro-Vice Chancellor",
              subMenu: proViceChancellorSubMenu, // ADDED
            },
            {
              id: 5,
              url: "#!",
              label: "Registrar",
            },
            {
              id: 6,
              url: "#!",
              label: "COE",
            },
            {
              id: 7,
              url: "#!",
              label: "Finance Officer",
            },
          ],
        },
        {
          id: 2,
          url: "#!",
          label: "Leadership",
          children: [
            {
              id: 1,
              url: "#!",
              label: "Chancellor",
            },
            {
              id: 2,
              url: "#!",
              label: "Pro Chancellor",
            },
            {
              id: 3,
              url: "#!",
              label: "Vice Chancellor",
            },
            {
              id: 4,
              url: "#!",
              label: "Pro-Vice Chancellor",
              subMenu: proViceChancellorSubMenu, // ADDED
            },
            {
              id: 5,
              url: "#!",
              label: "Registrar",
            },
            {
              id: 6,
              url: "#!",
              label: "COE",
            },
            {
              id: 7,
              url: "#!",
              label: "Finance Officer",
            },
          ],
        },
        {
          id: 3,
          url: "#!",
          label: "Governance",
          children: [
            {
              id: 1,
              url: "#!",
              label: "Governance-1",
            },
            {
              id: 2,
              url: "#!",
              label: "Governance-2",
            },
          ],
        },
        {
          id: 4,
          url: "#!",
          label: "Recognition and Rankings",
          children: [
            {
              id: 1,
              url: "#!",
              label: "Recognition & Rankings-1",
            },
            {
              id: 2,
              url: "#!",
              label: "Recognition & Rankings-2",
            },
          ],
        },
        {
          id: 5,
          url: "#!",
          label: "Excellence & Quality Assurance",
          children: [
            {
              id: 1,
              label: "IQAC",
              children: [
                {
                  id: 1,
                  url: "#!",
                  label: "IQAC",
                },
                {
                  id: 2,
                  url: "#!",
                  label: "IQAC Committee",
                },
                {
                  id: 3,
                  url: "#!",
                  label: "IQAC Activities",
                },
                {
                  id: 4,
                  url: "#!",
                  label: "IQAC Composition",
                },
              ],
            },
            {
              id: 2,
              label: "Feedback",
              children: [
                {
                  id: 1,
                  url: "#!",
                  label: "Student Feedback",
                },
                {
                  id: 2,
                  url: "#!",
                  label: "Faculty Feedback",
                },
                {
                  id: 3,
                  url: "#!",
                  label: "Alumni Feedback",
                },
                {
                  id: 4,
                  url: "#!",
                  label: "Employer Feedback",
                },
                {
                  id: 5,
                  url: "#!",
                  label: "Stakeholder Feedback",
                },
                {
                  id: 6,
                  url: "#!",
                  label: "Feedback Analysis",
                },
                {
                  id: 7,
                  url: "#!",
                  label: "Action Taken Reports",
                },
              ],
            },
            {
              id: 3,
              label: "Quality Process",
              children: [
                {
                  id: 1,
                  url: "#!",
                  label: "Academic Audit",
                },
                {
                  id: 2,
                  url: "#!",
                  label: "Administrative Audit",
                },
                {
                  id: 3,
                  url: "#!",
                  label: "Best Practices",
                },
                {
                  id: 4,
                  url: "#!",
                  label: "Institutional Distinctiveness",
                },
              ],
            },
            {
              id: 4,
              label: "AQAR",
              children: [
                {
                  id: 1,
                  url: "#!",
                  label: "AQAR Reports",
                },
                {
                  id: 2,
                  url: "#!",
                  label: "Quality Initiatives",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      url: "#!",
      label: "AI-Enabled Academics",
      children: [
        {
          id: 1,
          url: "#!",
          label: "Undergraduate",
          children: [
            { id: 1, url: "#!", label: "B.Tech Programs" },
            { id: 2, url: "#!", label: "B.Sc AI & Data Science" },
            { id: 3, url: "#!", label: "B.Des Interaction Design" },
            { id: 4, url: "#!", label: "BBA Technology Management" },
          ],
        },
        {
          id: 2,
          url: "#!",
          label: "Postgraduate",
          children: [
            { id: 1, url: "#!", label: "M.Tech Artificial Intelligence" },
            { id: 2, url: "#!", label: "M.Sc Data Science" },
            { id: 3, url: "#!", label: "MBA AI & Analytics" },
          ],
        },
        {
          id: 3,
          url: "#!",
          label: "Doctoral",
          children: [
            { id: 1, url: "#!", label: "PhD Programmes" },
            { id: 2, url: "#!", label: "Integrated PhD" },
            { id: 3, url: "#!", label: "Research Fellowships" },
          ],
        },
        {
          id: 4,
          url: "#!",
          label: "AI Curriculum",
          children: [
            { id: 1, url: "#!", label: "AI + Domain Majors" },
            { id: 2, url: "#!", label: "Interdisciplinary Learning" },
            { id: 3, url: "#!", label: "Industry Certifications" },
            { id: 4, url: "#!", label: "Capstone Projects" },
          ],
        },
      ],
    },
    {
      id: 3,
      url: "#!",
      label: "Research & Innovation",
    },
    {
      id: 4,
      url: "#!",
      label: "Industry Collaborations",
    },
    {
      id: 5,
      url: "#!",
      label: "Placements",
      children: [
        {
          id: 1,
          url: "#!",
          label: "Undergraduate Admissions",
        },
        {
          id: 2,
          url: "#!",
          label: "Undergraduate Admissions",
        },
      ]
    },
    {
      id: 6,
      url: "#!",
      label: "Admissions",
      children: [
        {
          id: 1,
          url: "#!",
          label: "Undergraduate Admissions",
          children: [
            { id: 1, url: "#!", label: "Eligibility" },
            { id: 2, url: "#!", label: "Application Process" },
            { id: 3, url: "#!", label: "Entrance Exams" },
            { id: 4, url: "#!", label: "Fee Structure" },
          ],
        },
        {
          id: 2,
          url: "#!",
          label: "Postgraduate Admissions",
          children: [
            { id: 1, url: "#!", label: "Eligibility" },
            { id: 2, url: "#!", label: "Application Process" },
            { id: 3, url: "#!", label: "Entrance Exams" },
            { id: 4, url: "#!", label: "Scholarships" },
          ],
        },
        {
          id: 3,
          url: "#!",
          label: "International Admissions",
          children: [
            { id: 1, url: "#!", label: "Eligibility" },
            { id: 2, url: "#!", label: "Application Process" },
            { id: 3, url: "#!", label: "Visa Support" },
            { id: 4, url: "#!", label: "Fee Structure" },
          ],
        },
        {
          id: 4,
          url: "#!",
          label: "Scholarships",
          children: [
            { id: 1, url: "#!", label: "Merit Scholarships" },
            { id: 2, url: "#!", label: "Need-Based Aid" },
            { id: 3, url: "#!", label: "Sports Quota" },
          ],
        },
      ],
    },
    {
      id: 7,
      url: "#!",
      label: "International Relations",
    },
    {
      id: 8,
      url: "#!",
      label: "Locate Us",
    },
  ],
};

const TOP_BAR_ICONS = [
  { src: "/images/header-360-icon.svg", alt: "Virtual Tour" },
  { src: "/images/header-brochure-icon.svg", alt: "E-Brochure" },
];

export default function Header({ data = local_data }) {
  const [mobileOpenPath, setMobileOpenPath] = useState([]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [activeChildId, setActiveChildId] = useState(null);
  const closeMenuTimer = useRef(null);
  const openMenu = (id) => {
    clearTimeout(closeMenuTimer.current);
    setOpenMenuId(id);
  };
  const scheduleCloseMenu = () => {
    clearTimeout(closeMenuTimer.current);
    closeMenuTimer.current = setTimeout(() => setOpenMenuId(null), 180);
  };
  const keepMenuOpen = () => clearTimeout(closeMenuTimer.current);
  useEffect(() => {
    return () => clearTimeout(closeMenuTimer.current);
  }, []);
  useEffect(() => {
    document.body.classList.toggle("header-visible", isHeaderVisible);

    return () => {
      document.body.classList.remove("header-visible");
    };
  }, [isHeaderVisible]);
  useEffect(() => {
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      window.requestAnimationFrame(() => {
        const currentScrollY = Math.max(0, window.scrollY);
        setIsScrolled(currentScrollY > 10);

        if (currentScrollY <= 10) {
          setIsHeaderVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
          setIsHeaderVisible(false);
          setOpenMenuId(null);
        } else if (currentScrollY < lastScrollY) {
          setIsHeaderVisible(true);
        }

        lastScrollY = currentScrollY;
        ticking = false;
      });
      ticking = true;
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (!isSearchOpen) return;
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    const handleScrollClose = () => {
      setIsSearchOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScrollClose, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScrollClose);
    };
  }, [isSearchOpen]);
  const isMobile = useIsMobile();
  const TopHeaderTextStyle =
    "text-[9px] sm:text-[12px] 2xl:text-[14px] 3xl:text-[16px] leading-[1.1] font-medium text-white w-auto h-auto px-[5px] sm:px-[10px] lg:px-[15px] 2xl:px-5 border-r border-white/20 gap-[5px] lg:gap-2.5 flex items-center";
  return (
    <header
      className={cn(
        "w-full h-auto block transition-all duration-800 fixed z-20 lg:z-[9999] inset-[0_0_auto_0]",
        isHeaderVisible ? "translate-y-0" : "-translate-y-full",
        isScrolled
          ? ["bg-black/40 backdrop-blur-xl transition-all duration-800"]
          : ["bg-linear-to-r", "from-(--basecolor)/10", "to-(--basecolor2)/10"],
      )}
    >
      <div className="w-full h-11.25 lg:h-7.5 2xl:h-8.75 3xl:h-10 bg-linear-to-r from-[#450A03] via-[#7F1D1D] to-[#B91C1C] block">
        <div className="container h-full flex items-center justify-between lg:justify-end">
          <div className="w-auto h-auto gap-1.25 sm:gap-1.75 2xl:gap-2.5 flex">
            {data?.topBar?.topBarButtons?.map((item) => (
              <div key={item?.id} className="w-auto h-auto">
                <Link
                  href={item?.url || "#"}
                  aria-label={item?.label}
                  {...(item?.isExternal && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="text-[8px] sm:text-xs 2xl:text-sm 3xl:text-base leading-[1.1] font-medium text-center text-white w-auto h-full lg:h-auto p-2.5 sm:p-[5px_20px] 3xl:p-[5px_30px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) rounded-[3px] 2xl:rounded-[5px] flex items-center justify-center transition-colors duration-500 hover:from-(--basecolor2) hover:to-(--basecolor)"
                >
                  {item?.label}
                </Link>
              </div>
            ))}
          </div>
          <div className="w-auto h-auto lg:gap-2.5 3xl:gap-2.5 flex items-center">
            {data?.topBar?.topBarLinkIcons?.map((item, index) => (
              <div key={item?.id} className="w-auto h-auto">
                <Link
                  href={item?.url || "#"}
                  aria-label={item?.label}
                  {...(item?.isExternal && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className={cn(
                    "transition-opacity duration-300 hover:opacity-70",
                    TopHeaderTextStyle,
                  )}
                >
                  <span className="w-[calc(100%-10px)] sm:w-[calc(100%-15px)]">
                    {item?.label}
                  </span>
                  {TOP_BAR_ICONS[index] && (
                    <span className="w-2.5 sm:w-3.75 3xl:w-5 h-auto aspect-square overflow-hidden flex items-center justify-center">
                      <Image
                        src={TOP_BAR_ICONS[index].src}
                        alt={TOP_BAR_ICONS[index].alt}
                        width={20}
                        height={20}
                        className="w-full h-full object-contain"
                      />
                    </span>
                  )}
                </Link>
              </div>
            ))}
            <LoginButton
              button={data?.topBar?.loginButton}
              className={TopHeaderTextStyle}
              iconSrc="/images/header-login.svg"
              iconClassName="w-2.5 sm:w-3.75 3xl:w-5 h-auto aspect-square overflow-hidden flex items-center justify-center"
            />
            {/* <div className="w-auto h-auto px-1.25 sm:px-2.5 2xl:px-2.5 border-r border-white/20">
              <Select className="w-full h-auto">
                <SelectTrigger
                  className={cn(
                    TopHeaderTextStyle,
                    "w-full !h-auto !p-0 border-0 gap-1.25 [&>svg]:text-bold [&>svg]:text-white max-lg:[&>svg]:translate-y-[-1px]",
                  )}
                >
                  <SelectValue
                    className={
                      "sm:text-xs 2xl:text-sm 3xl:text-base leading-[1.1] font-medium text-white"
                    }
                    placeholder="EN"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Tamil">Tamil</SelectItem>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Malayalam">Malayalam</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div> */}
            <div className="w-auto h-auto flex">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto max-lg:py-[15px_20px] lg:border-b border-white/10">
        <div className="container">
          <div className="w-full h-auto lg:py-3.75 2xl:py-5 flex flex-wrap items-center">
            <div className="w-full lg:w-[45%] max-lg:mb-6.25">
              <div className="w-full h-auto -mx-3.75 2xl:-mx-5 3xl:-mx-6.25 [&>div]:px-3.75 2xl:[&>div]:px-5 3xl:[&>div]:px-6.25 [&>div]:border-r [&>div]:border-white/10 [&>div:last-child]:border-0 flex items-center">
                {data?.logo?.mainlogo?.url && (
                  <div className="w-auto h-auto">
                    <Link
                      href={data?.logo?.mainlogo?.link || "/"}
                      {...(data?.logo?.mainlogo?.isExternal && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      aria-label={data?.logo?.mainlogo?.alternativeTxt}
                      className="w-40 2xl:w-47.5 3xl:w-60 h-auto aspect-240/80 overflow-hidden flex items-center justify-center transition-transform duration-300 hover:scale-105"
                    >
                     {data?.logo?.mainlogo?.url &&
                      <Image
                        src={data?.logo?.mainlogo?.url}
                        alt={
                          data?.logo?.mainlogo?.alternativeTxt ||
                          data?.logo?.mainlogo?.alt ||
                          "Logo"
                        }
                        width={110}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                     }
                      </Link>
                  </div>
                )}

                {data?.logo?.alternativelogo?.url && (
                  <div className="w-auto h-auto">
                    <Link
                      href={data?.logo?.alternativelogo?.link || "/"}
                      {...(data?.logo?.alternativelogo?.isExternal && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      aria-label={data?.logo?.alternativelogo?.alternativeTxt}
                      className="w-18.75 2xl:w-22.5 3xl:w-27.5 h-auto aspect-110/50 overflow-hidden flex items-center justify-center"
                    >
                      <Image
                        src={data?.logo?.alternativelogo?.url}
                        alt={
                          data?.logo?.alternativelogo?.alternativeTxt || "Logo"
                        }
                        width={110}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </Link>
                  </div>
                )}
                <div className="w-auto h-auto m-auto">
                  <div
                    className="max-sm:text-[9px] text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.3] font-normal text-center text-white"
                    dangerouslySetInnerHTML={{
                      __html: data?.logo?.logoText,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[55%]">
              <div className="w-full h-auto -mx-[2.5px] flex lg:justify-end">
                {data?.actionLinks?.map((item, index) => (
                  <div
                    key={index}
                    className="w-auto h-auto px-[2.5px] max-lg:flex-1"
                  >
                    <Link
                      href={item?.url || "#"}
                      aria-label={item?.label}
                      className="text-[9px] sm:text-[11px] 2xl:text-sm 3xl:text-lg leading-[1.1] font-bold text-center text-white w-auto h-full lg:h-10 3xl:h-12.5 p-1.25 sm:p-2.5 2xl:p-3.75 3xl:p-5 border border-[#D1D5DC80]/50 rounded-[3px] 2xl:rounded-[5px] overflow-hidden flex items-center justify-center transition-colors duration-500 hover:bg-linear-to-r hover:from-(--basecolor) hover:to-(--basecolor2) hover:border-(--basecolor2)"
                    >
                      {item?.label}
                    </Link>
                  </div>
                ))}
                <ApplyButtons buttons={data?.applyButtons} variant="desktop" />
                <div className="w-auto h-auto pl-0.75 max-lg:flex hidden">
                  <Sheet>
                    <SheetTrigger className="w-7.5 h-full aspect-square bg-linear-to-r from-(--basecolor) to-(--basecolor2) rounded-[3px] border border-[#D1D5DC80]/50 overflow-hidden flex items-center justify-center">
                      <div className="w-full h-3 flex flex-col items-center justify-between">
                        <span className="w-1/2 h-0.5 bg-white block"></span>
                        <span className="w-[25%] h-0.5 bg-white block"></span>
                        <span className="w-1/2 h-0.5 bg-white block"></span>
                      </div>
                    </SheetTrigger>
                    <SheetContent className="!w-full !max-w-full h-full max-h-screen bg-[#fff7eb] dark:bg-[#18181b] p-0 border-0 flex flex-col overflow-hidden [&>button]:hidden z-[100]">
                      {/* STICKY TOP HEADER SECTION */}
                      <div className="w-full shrink-0 bg-[#fff7eb] dark:bg-[#18181b]">
                        {/* Top Red-Orange Banner Bar */}
                        <div className="w-full bg-linear-to-r from-(--basecolor) to-(--basecolor2) px-3 py-2.5 flex items-center justify-between text-white shrink-0">
                          <div className="flex items-center gap-2 min-w-0">
                            <Link
                              href="/"
                              className="w-30 flex items-center gap-1.5 shrink-0"
                            >
                              <Image
                                src="/images/dsu-logo.svg"
                                alt="DSU Logo"
                                width={32}
                                height={32}
                                className="size-full object-contain"
                              />
                            </Link>
                            <div className="h-6 w-[1px] bg-white/30 shrink-0" />
                            <div className="w-15 flex items-center shrink-0">
                              <Image
                                src="/images/header-logo-2.svg"
                                alt="NAAC A+"
                                width={32}
                                height={22}
                                className="size-full object-contain"
                              />
                            </div>
                            <div className="h-6 w-[1px] bg-white/30 shrink-0" />
                            <span className="text-[9.5px] leading-tight font-medium opacity-95 shrink-0">
                              India&apos;s AI-First
                              <br />
                              University
                            </span>
                          </div>
                          <SheetClose className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors text-white shrink-0 ml-1">
                            <X size={18} />
                          </SheetClose>
                        </div>

                        {/* Utility Bar */}
                        <div className="w-full bg-[#FFF4E8] dark:bg-[#232427] border-b border-black/8 dark:border-white/0 px-3 py-2 flex items-center justify-between text-[11px] font-medium text-[#333] dark:text-white/90 overflow-x-auto">
                          <div className="flex items-center gap-1.5 shrink-0 text-black dark:text-white">
                            <Link
                              href="#!"
                              className="flex items-center gap-1 hover:text-(--basecolor)"
                            >
                              <span className="dark:text-white">
                                Virtual Tour
                              </span>
                              <Image
                                src="/images/header-360-icon-black.svg"
                                alt="Tour"
                                width={13}
                                height={13}
                                className="w-3.5 h-3.5 dark:invert"
                              />
                            </Link>
                            <span className="text-black/20 dark:text-white/20">
                              |
                            </span>
                            <Link
                              href="#!"
                              className="flex items-center gap-1 hover:text-(--basecolor)"
                            >
                              <span>E-Brochure</span>
                              <Image
                                src="/images/header-brochure-icon-black.svg"
                                alt="Brochure"
                                width={13}
                                height={13}
                                className="w-3.5 h-3.5 dark:invert"
                              />
                            </Link>
                            {isValidLoginButton(data?.topBar?.loginButton) && (
                              <>
                                <span className="text-black/20 dark:text-white/20">
                                  |
                                </span>
                                <LoginButton
                                  button={data?.topBar?.loginButton}
                                  className="flex items-center gap-1 hover:text-(--basecolor) cursor-pointer"
                                  iconSrc="/images/header-login-black.svg"
                                  iconClassName="w-3.5 h-3.5 flex items-center justify-center dark:invert"
                                />
                              </>
                            )}
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0 ml-2">
                            <ThemeToggle iconClassName="max-lg:invert" />
                          </div>
                        </div>

                        {/* Action Links Pills */}
                        <div className="w-full bg-[#FFFBF7] dark:bg-[#18181b] px-3 pt-2.5 pb-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                          {data?.actionLinks?.map((item, index) => (
                            <Link
                              key={index}
                              href={item?.url || "#"}
                              className="px-3 py-2 rounded-[3px] border border-[#ea580c] dark:border-[#ea580c] text-[11.5px] font-bold text-black dark:text-white shrink-0 hover:bg-(--basecolor)/10 transition-colors"
                            >
                              {item?.label}
                            </Link>
                          ))}
                        </div>

                        {/* Main Buttons (Apply Here, CDSIMER, DSU Online) */}
                        <div className="w-full px-2.5 pb-3 pt-2 flex items-center justify-between gap-2">
                          <ApplyButtons
                            buttons={data?.applyButtons}
                            variant="mobile"
                          />
                          <div className="flex items-center gap-1.25">
                            <Link
                              href="/#"
                              className="h-11.25 px-3 bg-linear-to-r from-(--basecolor) to-(--basecolor2) text-white text-[11px] font-bold rounded-[2px] flex items-center justify-center shrink-0 shadow-xs hover:opacity-90"
                            >
                              CDSIMER
                            </Link>
                            <Link
                              href="/#"
                              className="h-11.25 px-3 bg-linear-to-r from-(--basecolor) to-(--basecolor2) text-white text-[11px] font-bold rounded-[2px] flex items-center justify-center shrink-0 shadow-xs hover:opacity-90"
                            >
                              DSU Online
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* SCROLLABLE NAVIGATION MENU LIST */}
                      <div className="w-full flex-1 overflow-y-auto bg-[#fff7eb] dark:bg-[#18181b] border-t border-black/8 dark:border-white/0 pb-12">
                        {data?.navigationLinks?.map((item) => (
                          <NavigationMenu
                            key={item?.id}
                            item={item}
                            level={0}
                          />
                        ))}
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!isMobile && (
        <div className="container relative">
          <div className="w-full h-auto flex items-center justify-between relative z-0">
            <Link
              href="/"
              aria-label="Home"
              className={cn(
                "w-auto h-auto lg:py-3.75 2xl:py-5 3xl:py-7.5 inline transition-opacity duration-400 relative z-0 hover:before:w-full before:content-[''] before:w-0 sm:before:h-0.5 2xl:before:h-0.75 before:mx-auto before:bg-linear-to-r before:from-(--basecolor) before:to-(--basecolor2) before:transition-all before:duration-400 before:absolute before:z-1 before:inset-[auto_0_0_0]",
                isSearchOpen && "opacity-0",
              )}
            >
              <span className="w-3.75 3xl:w-5 h-auto aspect-square flex items-center justify-center">
                <Image
                  src={"/images/header-home.svg"}
                  alt={"Home"}
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </span>
            </Link>
            {data?.navigationLinks?.map((item) => (
              <NavigationMenu
                key={item?.id}
                item={item}
                level={0}
                mobileOpenPath={mobileOpenPath}
                setMobileOpenPath={setMobileOpenPath}
                onActivate={() => openMenu(item?.id)}
                onDeactivate={scheduleCloseMenu}
                isMenuOpen={openMenuId === item?.id}
                items={data?.navigationLinks}
                activeChildId={activeChildId}
                setActiveChildId={setActiveChildId}
                keepMenuOpen={keepMenuOpen}
                scheduleCloseMenu={scheduleCloseMenu}
                className={cn(
                  "w-auto h-auto lg:p-[20px_10px] xl:p-[20px_20px] 2xl:p-5 3xl:p-7.5 first:pl-0 last:pr-0 transition-opacity duration-400 relative hover:before:lg:w-[calc(100%-40px)] hover:before:2xl:w-[calc(100%-50px)] hover:before:3xl:w-[calc(100%-70px)] before:content-[''] before:w-0 sm:before:h-0.5 2xl:before:h-0.75 before:mx-auto before:bg-linear-to-r before:from-(--basecolor) before:to-(--basecolor2) before:transition-all before:duration-400 before:absolute before:z-1 before:inset-[auto_0_0_0]",
                  openMenuId === item?.id
                    ? "z-50 before:lg:w-[calc(100%-40px)] before:2xl:w-[calc(100%-50px)] before:3xl:w-[calc(100%-70px)]"
                    : "z-0",
                  isSearchOpen && "opacity-0",
                )}
              />
            ))}
            <button
              type="button"
              aria-label="Open search"
              aria-expanded={isSearchOpen}
              onClick={() => {
                setOpenMenuId(null);
                setIsSearchOpen(true);
              }}
              className={cn(
                "w-auto h-auto inline shrink-0 transition-opacity duration-400",
                isSearchOpen && "opacity-0",
              )}
            >
              <span className="2xl:w-3.75 3xl:w-5 h-auto aspect-square flex items-center justify-center">
                <Image
                  src={"/images/header-search-icon.svg"}
                  alt={"Search"}
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </span>
            </button>
            <div
              ref={searchRef}
              className={cn(
                "w-full h-auto gap-5 flex items-center transition-all duration-500 ease-out absolute z-10 inset-0",
                isSearchOpen
                  ? "opacity-100 visible translate-x-0"
                  : "opacity-0 invisible pointer-events-none translate-x-4 absolute",
              )}
            >
              <div className="w-full h-auto relative">
                <input
                  type="search"
                  autoFocus={isSearchOpen}
                  placeholder="Search..."
                  className="w-full h-12.5 px-5 pr-12 text-base text-white bg-white/10 border border-white/20 rounded-[5px] outline-none placeholder:text-white/50 focus:border-(--basecolor2) transition-colors duration-300"
                />
                <span className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                  <Image
                    src="/images/header-search-icon.svg"
                    alt="Search"
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </span>
              </div>
              <button
                type="button"
                aria-label="Close search"
                onClick={() => setIsSearchOpen(false)}
                className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors duration-300"
              >
                <span className="relative w-4 h-4">
                  <span className="absolute left-1/2 top-1/2 w-full h-px bg-white -translate-x-1/2 -translate-y-1/2 rotate-45" />
                  <span className="absolute left-1/2 top-1/2 w-full h-px bg-white -translate-x-1/2 -translate-y-1/2 -rotate-45" />
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// Valid = has a label and either a url (plain link) or at least one sub item (dropdown).
function isValidLoginButton(button) {
  if (!button?.label?.trim()) return false;
  if (button?.subItems?.length) return true;
  return Boolean(button?.url?.trim());
}

function LoginButton({ button, className, iconSrc, iconClassName }) {
  if (!isValidLoginButton(button)) return null;

  const content = (
    <>
      <span>{button.label}</span>
      <span className={iconClassName}>
        <Image
          src={iconSrc}
          alt=""
          width={20}
          height={20}
          className="w-full h-full object-contain"
        />
      </span>
    </>
  );

  // Sub buttons present -> dropdown only, the button itself is not a link
  if (button.subItems?.length) {
    return (
      <div className="w-auto h-auto">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<button type="button" className={cn(className, "cursor-pointer")} />}
          >
            {content}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {button.subItems.map((sub, index) => (
              <DropdownMenuItem
                key={sub?.id ?? index}
                render={
                  <Link
                    href={sub?.url || "#"}
                    {...(sub?.isExternal && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  />
                }
              >
                {sub?.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  return (
    <div className="w-auto h-auto">
      <Link
        href={button.url}
        aria-label={button.label}
        {...(button.isExternal && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
        className={cn(className, "transition-opacity duration-300 hover:opacity-70")}
      >
        {content}
      </Link>
    </div>
  );
}

const isValidButton = (b) => Boolean(b?.label?.trim() && b?.url?.trim());

const externalProps = (b) =>
  b?.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

// NRI/Foreigners + Others + "Apply Here" badge. Each one only shows with a label and url.
function ApplyButtons({ buttons, variant = "desktop" }) {
  const { applyHere, nri, others } = buttons || {};
  const showApply = isValidButton(applyHere);
  const showNri = isValidButton(nri);
  const showOthers = isValidButton(others);
  if (!showApply && !showNri && !showOthers) return null;

  const isMobile = variant === "mobile";
  const textSize = isMobile
    ? "text-[15px] sm:text-[11px]"
    : "text-[10px] sm:text-[11px]";

  return (
    <div
      className={cn(
        "w-auto ml-1.25 bg-linear-to-r from-(--basecolor) to-(--basecolor2) rounded-[3px] 2xl:rounded-[5px] overflow-x-clip flex items-center relative z-0 transition-colors duration-500 hover:from-(--basecolor2) hover:to-(--basecolor)",
        isMobile
          ? "h-11.25 2xl:h-10 3xl:h-12.5"
          : "2xl:h-10 3xl:h-12.5",
      )}
    >
      {showNri && (
        <div className="w-auto h-full">
          <Link
            href={nri.url}
            aria-label={nri.label}
            {...externalProps(nri)}
            className={cn(
              textSize,
              "2xl:text-sm 3xl:text-lg leading-[1.1] font-bold text-white w-full h-full px-1.25 sm:px-2.5 lg:px-3.75 flex items-center justify-center relative z-0",
              showOthers &&
                "before:content-[''] before:w-px before:h-[25%] sm:before:h-1/2 before:my-auto before:bg-white sm:before:bg-black/10 before:translate-y-0.75 2xl:before:translate-y-1.25 before:absolute before:z-1 before:inset-[0_0_0_auto]",
            )}
          >
            <span className="translate-y-0.75 2xl:translate-y-1.25">
              {nri.label}
            </span>
          </Link>
        </div>
      )}
      {showOthers && (
        <div className="w-auto h-full">
          <Link
            href={others.url}
            aria-label={others.label}
            {...externalProps(others)}
            className={cn(
              textSize,
              "2xl:text-sm 3xl:text-lg leading-[1.1] font-medium text-white w-full h-full px-1.25 sm:px-2.5 lg:px-3.75 flex items-center justify-center",
            )}
          >
            <span className="translate-y-0.75 2xl:translate-y-1.25">
              {others.label}
            </span>
          </Link>
        </div>
      )}
      {showApply && (
        <Link
          href={applyHere.url}
          aria-label={applyHere.label}
          {...externalProps(applyHere)}
          className={cn(
            "text-[10px] 2xl:text-xs 3xl:text-base leading-[1.1] font-bold w-fit h-auto p-[3px_5px] mx-auto rounded-[2px] 2xl:rounded-[3px] -translate-y-1.25 overflow-hidden inline absolute z-1 inset-[0_0_auto_0]",
            isMobile
              ? "text-black dark:text-white bg-[#fff7eb] dark:bg-[#18181b]"
              : "text-black bg-white",
          )}
        >
          {applyHere.label}
        </Link>
      )}
    </div>
  );
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);
  return isMobile;
}

// True when a menu url points at the page being viewed. Placeholders ("#", "#!") never match.
function isActiveUrl(url, pathname) {
  if (!url || !pathname || url.startsWith("#")) return false;
  let path = url;
  try {
    path = new URL(url, "http://x").pathname;
  } catch {}
  const clean = (p) => (p.length > 1 ? p.replace(/\/+$/, "") : p);
  return clean(path) === clean(pathname);
}

// Flyout items of a leaf: the static `subMenu` key, or the CMS's nested `children`.
function getFlyoutItems(leaf) {
  if (leaf?.subMenu?.length) return leaf.subMenu;
  if (leaf?.children?.length) return leaf.children;
  return [];
}

function MegaMenuPanel({
  itemId,
  items,
  activeChildId,
  setActiveChildId,
  onKeepOpen,
  onLeave,
}) {
  const pathname = usePathname();
  const item = items?.find((i) => i?.id === itemId);
  const children = item?.children || [];
  const hasChildMenu = children.length > 0;
  const itemIndex = items?.findIndex((i) => i?.id === itemId) ?? -1;
  const alignRight = itemIndex >= 0 && itemIndex >= (items?.length || 0) / 2;

  useEffect(() => {
    if (!hasChildMenu) return;
    const preferred = children.find((c) => c?.children?.length) || children[0];
    setActiveChildId((prev) => {
      if (children.some((c) => c?.id === prev)) return prev;
      return preferred?.id ?? null;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId]);

  if (!item || !hasChildMenu) return null;

  const activeChild =
    children.find((c) => c?.id === activeChildId) || children[0] || {};
  const grandGroups = activeChild?.children || [];
  // Column layout only when several headings each hold their own list (Excellence & Quality
  // Assurance). A lone item with children, or one mixed with plain links, is a flyout leaf.
  const hasColumnGroups =
    grandGroups.length > 1 && grandGroups.every((g) => g?.children?.length > 0);

  // Group columns for multi-column layouts like Excellence & Quality Assurance:
  // each group (CMS order) goes into the currently shortest of up to 3 columns,
  // so IQAC + AQAR stack in column 1, Feedback and Quality Process fill the rest.
  let columns = [];
  if (hasColumnGroups) {
    const filled = grandGroups.filter((g) => g?.children?.length > 0);
    const colsCount = Math.min(filled.length, 3);
    columns = Array.from({ length: colsCount }, () => []);
    const heights = Array(colsCount).fill(0);
    filled.forEach((group) => {
      const target = heights.indexOf(Math.min(...heights));
      columns[target].push(group);
      heights[target] += 1 + group.children.length;
    });
  }

  const renderLeafItem = (leaf) => {
    // Leaf with a flyout submenu (e.g. Pro-Vice Chancellor)
    if (getFlyoutItems(leaf).length) {
      return (
        <SubMenuLeaf
          key={leaf?.id || leaf?.label}
          leaf={leaf}
          onKeepOpen={onKeepOpen}
        />
      );
    }

    const isHighlight = isActiveUrl(leaf?.url, pathname);

    return (
      <li key={leaf?.id || leaf?.label} className="w-full list-none">
        <Link
          href={leaf?.url || "#!"}
          aria-label={leaf?.label}
          {...externalProps(leaf)}
          className={cn(
            "w-full inline-flex items-center gap-2 text-[13px] 2xl:text-[14px] 3xl:text-[15px] leading-snug text-[#262626] rounded-[5px] px-2.5 py-[5px] transition-all duration-150 group",
            isHighlight
              ? "bg-[#FFE8D6] font-medium"
              : "hover:bg-[#FFE8D6] hover:font-medium",
          )}
        >
          {/* Delicate hollow circle bullet */}
          <span className="w-[8px] h-[8px] shrink-0 rounded-full border-[1.5px] border-[#ea580c]" />
          <span className="truncate">{leaf?.label}</span>
        </Link>
      </li>
    );
  };

  return (
    <div
      onMouseEnter={onKeepOpen}
      onMouseLeave={onLeave}
      className={cn(
        "w-max h-auto absolute top-full z-50 pt-1",
        alignRight ? "right-0" : "left-0",
      )}
    >
      {/* Smooth entrance animation */}
      <div
        className="w-auto h-auto"
        style={{
          animation: "megaMenuIn 0.18s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        <style>{`
          @keyframes megaMenuIn {
            from { opacity: 0; transform: translateY(-4px) scale(0.99); }
            to   { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}</style>
        <div className="w-fit overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.22)] rounded-b-[8px]">
          <div className="w-fit flex items-stretch">
            {/* ─── Vibrant Orange/Red Gradient Sidebar ─── */}
            <nav className="w-[260px] 2xl:w-[280px] 3xl:w-[320px] shrink-0 bg-linear-to-r from-(--basecolor) to-(--basecolor2) py-5 flex flex-col justify-start">
              {children.map((child) => {
                const isActive = child?.id === activeChild?.id;
                if (!child?.children?.length) {
                  return (
                    <Link
                      key={child?.id}
                      href={child?.url || "#!"}
                      aria-label={child?.label}
                      {...externalProps(child)}
                      onMouseEnter={() => setActiveChildId(child?.id)}
                      className={cn(
                        "w-full text-left flex items-center px-6 2xl:px-7 py-3 2xl:py-3.5 transition-colors duration-150 select-none",
                        isActive ? "bg-white/20" : "hover:bg-white/10",
                      )}
                    >
                      <span
                        className={cn(
                          "text-[14px] 2xl:text-[15px] 3xl:text-[16px] leading-tight text-white whitespace-nowrap",
                          isActive ? "font-semibold" : "font-normal opacity-95",
                        )}
                      >
                        {child?.label}
                      </span>
                    </Link>
                  );
                }
                return (
                  <button
                    key={child?.id}
                    type="button"
                    onMouseEnter={() => setActiveChildId(child?.id)}
                    onClick={() => setActiveChildId(child?.id)}
                    className={cn(
                      "w-full text-left flex items-center px-6 2xl:px-7 py-3 2xl:py-3.5 transition-colors duration-150 cursor-pointer select-none",
                      isActive ? "bg-white/20" : "hover:bg-white/10",
                    )}
                  >
                    <span
                      className={cn(
                        "text-[14px] 2xl:text-[15px] 3xl:text-[16px] leading-tight text-white whitespace-nowrap",
                        isActive ? "font-semibold" : "font-normal opacity-95",
                      )}
                    >
                      {child?.label}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* ─── Warm Cream / Ivory Right Panel ─── */}
            {activeChild?.children?.length > 0 && (

            <div className="bg-[#FFF8EE] py-7 px-8 2xl:px-10 flex-1 min-w-0 text-[#262626]">
              {hasColumnGroups ? (
                <div className="flex items-start gap-x-8 2xl:gap-x-10 3xl:gap-x-12">
                  {columns.map((colGroups, colIdx) => (
                    <div
                      key={colIdx}
                      className="w-[190px] 2xl:w-[210px] 3xl:w-[240px] shrink-0 flex flex-col gap-5"
                    >
                      {colGroups.map((group) => (
                        <div
                          key={group?.id || group?.label}
                          className="w-full"
                        >
                          {group?.label && (
                            <span className="text-[12px] 2xl:text-[13px] 3xl:text-[14px] font-bold uppercase tracking-[0.06em] text-[#ea580c] inline-block mb-2.5">
                              {group?.label}
                            </span>
                          )}
                          <ul className="flex flex-col gap-[3px] p-0 m-0">
                            {group?.children?.map((leaf) =>
                              renderLeafItem(leaf),
                            )}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ) : activeChild?.children?.length > 0 ? (
                <div className="w-[220px] 2xl:w-[250px] 3xl:w-[280px] shrink-0">
                  <span className="text-[12px] 2xl:text-[13px] 3xl:text-[14px] font-bold uppercase tracking-[0.06em] text-[#ea580c] inline-block mb-2.5">
                    {activeChild?.label}
                  </span>
                  <ul className="flex flex-col gap-[3px] p-0 m-0">
                    {activeChild.children.map((leaf) => renderLeafItem(leaf))}
                  </ul>
                </div>
              ) : (
                <Link
                  href={activeChild?.url || "#!"}
                  aria-label={activeChild?.label}
                  {...externalProps(activeChild)}
                  className="inline-flex items-center gap-2 text-[13px] 2xl:text-[15px] font-bold text-[#ea580c] hover:underline"
                >
                  {activeChild?.label}
                </Link>
              )}
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Flyout for items with a subMenu (Pro-Vice Chancellor). Rendered in a portal so the
// mega panel's overflow-hidden can't clip it. White card, thin orange border and a
// left-pointing notch aligned to the parent row, flush with the mega panel's right edge.
const FLYOUT_PAD_TOP = 14; // same as pt-3.5, so the first item lines up with the parent row
const FLYOUT_NOTCH = 12; // same as size-3
const FLYOUT_MAX_WIDTH = 300; // widest breakpoint, only used to decide whether to flip left

function SubMenuLeaf({ leaf, onKeepOpen }) {
  const rowRef = useRef(null);
  const linkRef = useRef(null);
  const closeTimer = useRef(null);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, x: 0, flip: false, notchTop: 0, bridge: 0 });
  // The row is current if its own page or any flyout page is the one being viewed
  const isCurrent =
    isActiveUrl(leaf?.url, pathname) ||
    getFlyoutItems(leaf).some((sub) => isActiveUrl(sub?.url, pathname));

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const openSub = () => {
    clearTimeout(closeTimer.current);
    onKeepOpen?.();

    const link = linkRef.current;
    if (link) {
      const linkRect = link.getBoundingClientRect();
      // The flyout sits flush against the mega panel's right edge
      const panel = link.closest(".overflow-hidden");
      const panelRect = (panel || link).getBoundingClientRect();
      const viewportWidth = document.documentElement.clientWidth;
      const flip = panelRect.right + FLYOUT_MAX_WIDTH > viewportWidth;

      // 1px border + padding puts the first item exactly level with the parent row
      const top = Math.max(8, linkRect.top - FLYOUT_PAD_TOP - 1);
      const rowCenter = linkRect.top + linkRect.height / 2;

      setPos({
        top,
        x: flip ? viewportWidth - panelRect.left : panelRect.right,
        flip,
        // Notch is centred on the parent row
        notchTop: rowCenter - (top + 1) - FLYOUT_NOTCH / 2,
        // Invisible hover bridge across the gap between the row and the card
        bridge: Math.max(
          0,
          flip ? linkRect.left - panelRect.left : panelRect.right - linkRect.right,
        ),
      });
    }
    setIsOpen(true);
  };

  const closeSub = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <li
      ref={rowRef}
      onMouseEnter={openSub}
      onMouseLeave={closeSub}
      className="w-full list-none"
    >
      <Link
        ref={linkRef}
        href={leaf?.url || "#!"}
        aria-label={leaf?.label}
        aria-haspopup="true"
        aria-expanded={isOpen}
        {...externalProps(leaf)}
        className={cn(
          "w-full inline-flex items-center gap-2 text-[13px] 2xl:text-[14px] 3xl:text-[15px] leading-snug rounded-[5px] px-2.5 py-[5px] transition-all duration-150",
          isOpen
            ? "bg-[#FFE8D6] font-semibold text-[#ea580c]"
            : isCurrent
              ? "bg-[#FFE8D6] font-medium text-[#262626]"
              : "text-[#262626] hover:bg-[#FFE8D6] hover:font-medium",
        )}
      >
        <span className="w-[8px] h-[8px] shrink-0 rounded-full border-[1.5px] border-[#ea580c]" />
        <span className="truncate flex-1">{leaf?.label}</span>
        <ChevronRight
          size={16}
          strokeWidth={2.5}
          className="mr-1.5 shrink-0 text-[#ea580c]"
        />
      </Link>

      {isOpen &&
        createPortal(
          <div
            onMouseEnter={() => {
              clearTimeout(closeTimer.current);
              onKeepOpen?.();
            }}
            onMouseLeave={closeSub}
            className="fixed z-[10000] w-[245px] 2xl:w-[264px] 3xl:w-[300px]"
            style={{ top: pos.top, [pos.flip ? "right" : "left"]: pos.x }}
          >
            {/* Invisible bridge so the menu stays open while the mouse crosses the gap */}
            <span
              aria-hidden="true"
              className="absolute inset-y-0"
              style={{
                width: pos.bridge + 2,
                [pos.flip ? "left" : "right"]: "100%",
              }}
            />

            <div
              className="relative rounded-[8px] border border-[#ea580c] bg-white px-2.5 pb-5 pt-3.5 shadow-[0_20px_45px_rgba(0,0,0,0.22)]"
              style={{
                animation: "megaMenuIn 0.18s cubic-bezier(0.16,1,0.3,1) both",
              }}
            >
              {/* Notch pointing at the parent row */}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute size-3 rotate-45 bg-white",
                  pos.flip
                    ? "-right-[7px] border-r border-t border-[#ea580c]"
                    : "-left-[7px] border-b border-l border-[#ea580c]",
                )}
                style={{ top: pos.notchTop }}
              />

              <ul className="flex flex-col gap-[3px] p-0 m-0">
                {getFlyoutItems(leaf).map((sub) => (
                  <li key={sub?.id || sub?.label} className="w-full list-none">
                    <Link
                      href={sub?.url || "#!"}
                      aria-label={sub?.label}
                      {...externalProps(sub)}
                      className={cn(
                        "w-full inline-flex items-center gap-2 text-[13px] 2xl:text-[14px] 3xl:text-[15px] leading-snug text-[#262626] rounded-[5px] px-2.5 py-[5px] transition-all duration-150 hover:bg-[#FFE8D6] hover:font-medium",
                        isActiveUrl(sub?.url, pathname) &&
                          "bg-[#FFE8D6] font-medium",
                      )}
                    >
                      <span className="w-[8px] h-[8px] shrink-0 rounded-full border-[1.5px] border-[#ea580c]" />
                      <span className="truncate">{sub?.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>,
          document.body,
        )}
    </li>
  );
}

function NavigationMenu({
  item,
  className,
  level = 0,
  onActivate,
  onDeactivate,
  isMenuOpen = false,
  items,
  activeChildId,
  setActiveChildId,
  keepMenuOpen,
  scheduleCloseMenu,
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const hasSubmenu = item?.children?.length > 0;

  const toggleSubmenu = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (hasSubmenu) {
      setIsOpen((prev) => !prev);
    }
  };

  // ──────────────────────────────────────────
  // MOBILE NAVIGATION MENU RENDERER
  // ──────────────────────────────────────────
  if (isMobile) {
    // ADDED (mobile): leaf with flyout submenu -> accordion on mobile
    if (item?.subMenu?.length > 0 && !hasSubmenu) {
      return (
        <div className="w-full flex flex-col">
          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={`${isOpen ? "Close" : "Open"} ${item.label} submenu`}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setIsOpen((prev) => !prev);
            }}
            className={cn(
              "w-full flex items-center gap-2 py-1.5 px-3 text-[13px] text-left rounded-md transition-colors duration-200",
              isOpen
                ? "bg-[#FFE8D6] dark:bg-white/10 font-medium text-black dark:text-white"
                : "text-[#333] dark:text-white/90 hover:bg-[#FFE8D6]/60 dark:hover:bg-white/5",
            )}
          >
            <span className="w-[7px] h-[7px] shrink-0 rounded-full border-[1.5px] border-(--basecolor) flex-none" />
            <span className="truncate flex-1">{item?.label}</span>
            {isOpen ? (
              <ChevronDown size={15} className="shrink-0 text-(--basecolor)" />
            ) : (
              <ChevronRight
                size={15}
                className="shrink-0 text-black/60 dark:text-white/60"
              />
            )}
          </button>

          <div
            className={cn(
              "grid transition-[grid-template-rows] duration-300 ease-out",
              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
          >
            <div className="overflow-hidden">
              <div
                className={cn(
                  "ml-4 pl-2 border-l-2 border-(--basecolor)/30 py-1 my-1 flex flex-col gap-0.5 transition-opacity duration-300",
                  isOpen ? "opacity-100" : "opacity-0",
                )}
              >
                {item.subMenu.map((sub) => (
                  <Link
                    key={sub?.id || sub?.label}
                    href={sub?.url || "#!"}
                    aria-label={sub?.label}
                    {...externalProps(sub)}
                    className="w-full flex items-center gap-2 py-1.5 px-3 text-[13px] rounded-md text-[#333] dark:text-white/90 hover:bg-[#FFE8D6]/60 dark:hover:bg-white/5 transition-colors duration-200"
                  >
                    <span className="w-[7px] h-[7px] shrink-0 rounded-full border-[1.5px] border-(--basecolor) flex-none" />
                    <span className="truncate">{sub?.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Leaf item (no submenus)
    if (!hasSubmenu) {
      if (level === 0) {
        return (
          <Link
            href={item?.url || "#!"}
            aria-label={item?.label}
            {...externalProps(item)}
            className={cn(
              "w-full flex items-center justify-between px-5 py-3.5 border-b border-black/8 dark:border-white/10",
              "text-sm font-medium text-[#212121] dark:text-white hover:text-(--basecolor) transition-colors duration-200",
              className,
            )}
          >
            <span>{item?.label}</span>
            <ChevronRight
              size={16}
              className="shrink-0 text-black/60 dark:text-white/60"
            />
          </Link>
        );
      }

      const isHighlight = isActiveUrl(item?.url, pathname);

      return (
        <Link
          href={item?.url || "#!"}
          aria-label={item?.label}
          {...externalProps(item)}
          className={cn(
            "w-full flex items-center gap-2 py-1.5 px-3 text-[13px] rounded-md transition-colors duration-200",
            isHighlight
              ? "bg-[#FFE8D6] dark:bg-white/10 font-medium text-black dark:text-white"
              : "text-[#333] dark:text-white/90 hover:bg-[#FFE8D6]/60 dark:hover:bg-white/5",
          )}
        >
          <span className="w-[7px] h-[7px] shrink-0 rounded-full border-[1.5px] border-(--basecolor) flex-none" />
          <span className="truncate">{item?.label}</span>
        </Link>
      );
    }

    // Items WITH submenus (Accordion toggles)
    return (
      <div
        className={cn(
          "w-full flex flex-col",
          level === 0 && "border-b border-black/8 dark:border-white/10",
          className,
        )}
      >
        <div
          onClick={toggleSubmenu}
          className={cn(
            "w-full flex items-center justify-between cursor-pointer select-none transition-colors",
            level === 0
              ? "px-5 py-3.5"
              : level === 1
                ? "px-5 py-2.5 hover:bg-black/5 dark:hover:bg-white/5"
                : "py-2 px-3",
          )}
        >
          <span
            className={cn(
              level === 0
                ? cn(
                  "text-sm font-medium transition-colors",
                  isOpen
                    ? "bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent font-bold"
                    : "text-[#212121] dark:text-white",
                )
                : level === 1
                  ? cn(
                    "text-[13.5px] font-semibold transition-colors",
                    isOpen
                      ? "text-(--basecolor)"
                      : "text-[#212121] dark:text-white",
                  )
                  : "text-xs font-bold uppercase tracking-wider text-[#ea580c]",
            )}
          >
            {item?.label}
          </span>
          <button
            type="button"
            aria-label={`${isOpen ? "Close" : "Open"} ${item.label} submenu`}
            aria-expanded={isOpen}
            className="w-6 h-6 shrink-0 flex items-center justify-center text-black/60 dark:text-white/60"
          >
            {isOpen ? (
              <ChevronDown
                size={level === 0 ? 18 : 15}
                className="text-(--basecolor)"
              />
            ) : (
              <ChevronRight
                size={level === 0 ? 18 : 15}
              />
            )}
          </button>
        </div>

        {/* Collapsible Accordion Body */}
        <div
          className={cn(
            "grid transition-[grid-template-rows] duration-300 ease-out",
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <div
              className={cn(
                "transition-opacity duration-300",
                isOpen ? "opacity-100" : "opacity-0",
                level === 0
                  ? "pb-3 pt-1 flex flex-col bg-black/[0.02] dark:bg-white/[0.02]"
                  : level === 1
                    ? "ml-4 pl-2 border-l-2 border-(--basecolor)/30 py-1 my-1 flex flex-col"
                    : "pl-2 py-1 flex flex-col gap-0.5",
              )}
            >
              {item.children.map((child) => (
                <NavigationMenu
                  key={child?.id}
                  item={child}
                  level={level + 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isMobile) {
    if (level > 0) return null;
    if (!hasSubmenu) {
      return (
        <Link
          href={item?.url || "#"}
          aria-label={item?.label}
          {...externalProps(item)}
          className={cn(
            "text-[14px] lg:text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-medium text-center text-white w-auto h-full gap-1.25 flex items-center transition-colors duration-400 hover:bg-linear-to-r hover:from-(--basecolor) hover:to-(--basecolor2) hover:bg-clip-text hover:text-transparent",
            className,
          )}
        >
          <span>{item?.label}</span>
        </Link>
      );
    }
    return (
      <div
        className={cn("relative", isMenuOpen ? "z-50" : "z-0", className)}
        onMouseEnter={onActivate}
        onMouseLeave={onDeactivate}
      >
        <div className="w-full h-auto flex items-center justify-center gap-1.25">
          {item?.url ? (
            <Link
              href={item?.url || "#"}
              aria-label={item.label}
              {...externalProps(item)}
              className="text-sm lg:text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.2] font-bold lg:font-medium text-white transition-colors duration-400"
            >
              <span>{item.label}</span>
            </Link>
          ) : (
            <button
              type="button"
              aria-haspopup="true"
              className="text-sm lg:text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.2] font-medium text-white transition-colors duration-400"
            >
              <span>{item.label}</span>
            </button>
          )}
          <span
            className={cn(
              "w-[15px] h-[15px] lg:w-2 lg:h-2 lg:border-r-1 2xl:border-r-2 lg:border-b-1 2xl:border-b-2 border-white transition-transform duration-300 ease-out",
              isMenuOpen
                ? "lg:rotate-[225deg]"
                : "lg:rotate-45 -translate-y-0.5",
            )}
          />
        </div>
        {isMenuOpen && (
          <MegaMenuPanel
            itemId={item?.id}
            items={items}
            activeChildId={activeChildId}
            setActiveChildId={setActiveChildId}
            onKeepOpen={keepMenuOpen}
            onLeave={scheduleCloseMenu}
          />
        )}
      </div>
    );
  }
}