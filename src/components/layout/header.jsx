"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";
import { useEffect, useState, useRef } from "react";
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
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const local_data = {
  topBar: {
    topBarButtons: [
      {
        id: 1,
        url: "#!",
        label: "CDSIMER",
      },
      {
        id: 2,
        url: "#!",
        label: "DSU Online",
      },
    ],
    topBarLinkIcons: [
      {
        id: 1,
        url: "#!",
        label: "Virtual Tour",
        icon: {
          url: "/images/header-360-icon.svg",
          alternativeText: "virtual Tour",
        },
      },
      {
        id: 2,
        url: "#!",
        label: "E-Brochure",
        icon: {
          url: "/images/header-brochure-icon.svg",
          alternativeText: "E-Brochure",
        },
      },
    ],
  },
  logo: {
    mainlogo: {
      link: "/",
      url: "/images/dsu-logo.svg",
      alt: "DSU Logo",
    },
    alternativelogo: {
      link: "/",
      url: "/images/header-logo-2.svg",
      alt: "DSU Logo",
    },
    logoText: "India's AI-First <br> University",
  },
  actionLinks: [
    {
      id: 1,
      url: "#!",
      label: "NVIDIA's AI Architecture",
    },
    {
      id: 2,
      url: "#!",
      label: "AI-First @ DSU",
    },
    {
      id: 3,
      url: "#!",
      label: "Centres of Excellence",
    },
  ],
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
          label: "Recognition & Rankings",
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
                {
                  id: 5,
                  url: "#!",
                  label: "AQAR",
                },
                {
                  id: 6,
                  url: "#!",
                  label: "AQAR Reports",
                },
                {
                  id: 7,
                  url: "#!",
                  label: "Quality Initiatives",
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
                  label: "Quality",
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
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        setIsScrolled(currentScrollY > 10);
        if (currentScrollY <= 10) {
          setIsHeaderVisible(true);
        } else if (currentScrollY > lastScrollY) {
          setIsHeaderVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsHeaderVisible(true);
        }
        lastScrollY = currentScrollY;
        ticking = false;
      });
      ticking = true;
    };
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
    "text-[9px] sm:text-[12px] 2xl:text-sm 3xl:text-base leading-[1.1] font-medium text-white w-auto h-auto px-[5px] sm:px-[10px] lg:px-[15px] 2xl:px-5 border-r border-white/20 gap-[5px] lg:gap-2.5 flex items-center";
  return (
    <header
      className={cn(
        "w-full h-auto block transition-all duration-800 fixed z-20 lg:z-[99] inset-[0_0_auto_0]",
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
                  href={item?.url}
                  aria-label={item?.label}
                  className="text-[8px] sm:text-xs 2xl:text-sm 3xl:text-base leading-[1.1] font-medium text-center text-white w-auto h-full lg:h-auto p-2.5 sm:p-[5px_20px] 3xl:p-[5px_30px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) rounded-[3px] 2xl:rounded-[5px] flex items-center justify-center transition-colors duration-500 hover:from-(--basecolor2) hover:to-(--basecolor)"
                >
                  {item?.label}
                </Link>
              </div>
            ))}
          </div>
          <div className="w-auto h-auto lg:gap-2.5 3xl:gap-2.5 flex items-center">
            {data?.topBar?.topBarLinkIcons?.map((item) => (
              <div key={item?.id} className="w-auto h-auto">
                <Link
                  href={item?.url}
                  aria-label={item?.label}
                  className={cn(
                    "transition-opacity duration-300 hover:opacity-70",
                    TopHeaderTextStyle,
                  )}
                >
                  <span className="w-[calc(100%-10px)] sm:w-[calc(100%-15px)]">
                    {item?.label}
                  </span>
                  {item?.icon && (
                    <span className="w-2.5 sm:w-3.75 3xl:w-5 h-auto aspect-square overflow-hidden flex items-center justify-center">
                      <Image
                        src={item?.icon?.url}
                        alt={item?.icon?.alternativeTxt || "Icon"}
                        width={20}
                        height={20}
                        className="w-full h-full object-contain"
                      />
                    </span>
                  )}
                </Link>
              </div>
            ))}
            <div className="w-auto h-auto">
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <span
                      className={cn(TopHeaderTextStyle, "cursor-pointer")}
                    />
                  }
                >
                  Login
                  <span className="w-2.5 sm:w-3.75 3xl:w-5 h-auto aspect-square overflow-hidden flex items-center justify-center">
                    <Image
                      src="/images/header-login.svg"
                      alt="login"
                      width={20}
                      height={20}
                      className="w-full h-full object-contain"
                    />
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="w-auto h-auto px-1.25 sm:px-2.5 2xl:px-2.5 border-r border-white/20">
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
            </div>
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
                <div className="w-auto h-auto">
                  <Link
                    href={data?.logo?.mainlogo?.link}
                    aria-label={data?.logo?.mainlogo?.alternativeTxt}
                    className="w-40 2xl:w-47.5 3xl:w-60 h-auto aspect-240/80 overflow-hidden flex items-center justify-center transition-transform duration-300 hover:scale-105"
                  >
                    <Image
                      src={data?.logo?.mainlogo?.url}
                      alt={data?.logo?.mainlogo?.alternativeTxt || "Logo"}
                      width={110}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </Link>
                </div>
                <div className="w-auto h-auto">
                  <Link
                    href={data?.logo?.alternativelogo?.link}
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
                <div className="w-auto h-auto">
                  <div
                    className="text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.3] font-normal text-center text-white"
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
                      href={item?.url}
                      aria-label={item?.label}
                      className="text-[10px] sm:text-[11px] 2xl:text-sm 3xl:text-lg leading-[1.1] font-bold text-center text-white w-auto h-full lg:h-10 3xl:h-12.5 p-1.25 sm:p-2.5 2xl:p-3.75 3xl:p-5 border border-[#D1D5DC80]/50 rounded-[3px] 2xl:rounded-[5px] overflow-hidden flex items-center justify-center transition-colors duration-500 hover:bg-linear-to-r hover:from-(--basecolor) hover:to-(--basecolor2) hover:border-(--basecolor2)"
                    >
                      {item?.label}
                    </Link>
                  </div>
                ))}
                <div className="w-auto 2xl:h-10 3xl:h-12.5 ml-1.25 bg-linear-to-r from-(--basecolor) to-(--basecolor2) rounded-[3px] 2xl:rounded-[5px] overflow-x-clip flex items-center relative z-0 transition-colors duration-500 hover:from-(--basecolor2) hover:to-(--basecolor)">
                  <div className="w-auto h-full">
                    <Link
                      href="/#"
                      aria-label="Register"
                      className="text-[10px] sm:text-[11px] 2xl:text-sm 3xl:text-lg leading-[1.1] font-bold text-white w-full h-full px-1.25 sm:px-2.5 lg:px-3.75 flex items-center justify-center relative z-0 before:content-[''] before:w-px before:h-[25%] sm:before:h-1/2 before:my-auto before:bg-white sm:before:bg-black/10 before:translate-y-0.75 2xl:before:translate-y-1.25 before:absolute before:z-1 before:inset-[0_0_0_auto]"
                    >
                      <span className="translate-y-0.75 2xl:translate-y-1.25">
                        NRI/Foreigners
                      </span>
                    </Link>
                  </div>
                  <div className="w-auto h-full">
                    <Link
                      href="/#"
                      aria-label="Register"
                      className="text-[10px] sm:text-[11px] 2xl:text-sm 3xl:text-lg leading-[1.1] font-medium text-white w-full h-full px-1.25 sm:px-2.5 lg:px-3.75 flex items-center justify-center"
                    >
                      <span className="translate-y-0.75 2xl:translate-y-1.25">
                        Others
                      </span>
                    </Link>
                  </div>
                  <button className="text-[10px] 2xl:text-xs 3xl:text-base leading-[1.1] font-bold text-black w-fit h-auto p-[3px_5px] mx-auto bg-white rounded-[2px] 2xl:rounded-[3px] -translate-y-1.25 overflow-hidden inline absolute z-1 inset-[0_0_auto_0]">
                    Apply Here
                  </button>
                </div>
                <div className="w-auto h-auto pl-3.75 max-lg:flex hidden">
                  <Sheet>
                    <SheetTrigger className="w-7.5 h-full aspect-square bg-linear-to-r from-(--basecolor) to-(--basecolor2) rounded-[3px] border border-[#D1D5DC80]/50 overflow-hidden flex items-center justify-center">
                      <div className="w-full h-3 flex flex-col items-center justify-between">
                        <span className="w-1/2 h-0.5 bg-white block"></span>
                        <span className="w-[25%] h-0.5 bg-white block"></span>
                        <span className="w-1/2 h-0.5 bg-white block"></span>
                      </div>
                    </SheetTrigger>
                    <SheetContent
                      className={
                        "!w-full !max-w-full bg-white dark:bg-[#0B0F14] pt-0"
                      }
                    >
                      <div className="w-full h-auto flex items-center justify-between max-lg:py-4 max-lg:px-5 border-b border-black/10 dark:border-white/10">
                        <span className="flex flex-col gap-0.5 leading-[1.1]">
                          <span className="text-[17px] 2xl:text-[19px] 3xl:text-[24px] font-bold text-black dark:text-white uppercase">
                            Dayananda Sagar University
                          </span>
                          <span className="text-[11px] 2xl:text-xs 3xl:text-sm font-semibold text-black/70 dark:text-white/60 tracking-[0.22em] uppercase">
                            University
                          </span>
                        </span>
                      </div>
                      {data?.navigationLinks?.map((item) => (
                        <NavigationMenu
                          key={item?.id}
                          item={item}
                          level={0}
                          mobileOpenPath={mobileOpenPath}
                          setMobileOpenPath={setMobileOpenPath}
                          className={cn(
                            "w-auto h-auto transition-opacity duration-400 relative z-0 hover:before:lg:w-[calc(100%-40px)] hover:before:2xl:w-[calc(100%-50px)] hover:before:3xl:w-[calc(100%-70px)] before:content-[''] before:w-0 sm:before:h-0.5 2xl:before:h-0.75 before:mx-auto before:bg-linear-to-r before:from-(--basecolor) before:to-(--basecolor2) before:transition-all before:duration-400 before:absolute before:z-1 before:inset-[auto_0_0_0]",
                            isSearchOpen && "opacity-0",
                          )}
                        />
                      ))}
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
                className={cn(
                  "w-auto h-auto lg:p-[20px_10px] xl:p-[20px_20px] 2xl:p-[20px_25px] 3xl:p-7.5 first:pl-0 last:pr-0 transition-opacity duration-400 relative z-0 hover:before:lg:w-[calc(100%-40px)] hover:before:2xl:w-[calc(100%-50px)] hover:before:3xl:w-[calc(100%-70px)] before:content-[''] before:w-0 sm:before:h-0.5 2xl:before:h-0.75 before:mx-auto before:bg-linear-to-r before:from-(--basecolor) before:to-(--basecolor2) before:transition-all before:duration-400 before:absolute before:z-1 before:inset-[auto_0_0_0]",
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
          <MegaMenuPanel
            itemId={openMenuId}
            items={data?.navigationLinks}
            activeChildId={activeChildId}
            setActiveChildId={setActiveChildId}
            onKeepOpen={keepMenuOpen}
            onLeave={scheduleCloseMenu}
          />
        </div>
      )}
    </header>
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

function MegaMenuPanel({
  itemId,
  items,
  activeChildId,
  setActiveChildId,
  onKeepOpen,
  onLeave,
}) {
  const item = items?.find((i) => i?.id === itemId);
  const children = item?.children || [];
  const hasChildMenu = item?.children?.length > 0;
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
  const hasColumnGroups = grandGroups.some((g) => g?.children?.length > 0);

  return (
    <div
      onMouseEnter={onKeepOpen}
      onMouseLeave={onLeave}
      className={cn(
        "h-auto absolute top-full z-50 max-w-full",
        alignRight ? "right-0" : "left-0",
      )}
    >
      <div className="w-auto h-auto max-w-full animate-in fade-in-0 zoom-in-95 slide-in-from-top-1 duration-200 ease-out">
        <div className="w-auto h-auto max-w-325 overflow-hidden shadow-[0_28px_60px_rgba(0,0,0,0.22)] rounded-b-[6px] 2xl:rounded-b-[10px]">
          <div className="w-auto h-auto max-w-full min-h-60 2xl:min-h-72.5 3xl:min-h-87.5 flex items-stretch">
            {/* ─── Red gradient sidebar ─── */}
            <nav className="w-75 2xl:w-90 3xl:w-106.25 shrink-0 bg-linear-to-br from-(--basecolor) to-(--basecolor2) lg:py-7.5 2xl:py-9 3xl:py-11.25 lg:px-4 2xl:px-6.25 3xl:px-8.75 flex flex-col justify-start gap-3.75 2xl:gap-4.5 3xl:gap-6">
              {children.map((child) => {
                const isActive = child?.id === activeChild?.id;
                return (
                  <Link
                    key={child?.id}
                    href={child?.url || "#"}
                    aria-label={child?.label}
                    onMouseEnter={() => setActiveChildId(child?.id)}
                    className={cn(
                      "w-full h-auto flex items-center gap-2.5 rounded-[4px] transition-colors duration-300",
                    )}
                  >
                    <span
                      className={cn(
                        "w-1 h-1 shrink-0 rounded-full bg-white transition-opacity duration-300",
                        isActive ? "opacity-100" : "opacity-0",
                      )}
                    />
                    <span
                      className={cn(
                        "text-[13px] 2xl:text-[15px] 3xl:text-lg leading-[1.15] text-white transition-all duration-300",
                        isActive
                          ? "font-semibold opacity-100"
                          : "font-normal opacity-75 hover:opacity-100",
                      )}
                    >
                      {child?.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* ─── Cream columns ─── */}
            <div className="w-auto h-auto min-w-0 bg-linear-to-t from-[#FFF3E0] to-[#FFF7EC] lg:py-7.5 2xl:py-9 3xl:py-11.25 lg:px-5 2xl:px-7.5 3xl:px-10">
              {hasColumnGroups ? (
                <div className="w-auto h-auto columns-3 gap-y-5 2xl:gap-y-6.25 3xl:gap-y-7.5">
                  {grandGroups.map((group) => (
                    <div
                      key={group?.id}
                      className="w-full h-auto min-w-0  w-full"
                    >
                      {group?.children?.length > 0 ? (
                        <>
                          <span className="text-[11px] 2xl:text-[13px] 3xl:text-[15px] leading-[1.2] font-bold uppercase tracking-[0.08em] bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent inline-block lg:mb-2.5 2xl:mb-3 3xl:mb-3.75">
                            {group?.label}
                          </span>
                          <ul className="w-full h-auto flex flex-col gap-1.75 2xl:gap-2 3xl:gap-2.5">
                            {group.children.map((leaf) => (
                              <li key={leaf?.id} className="w-full h-auto">
                                <Link
                                  href={leaf?.url || "#"}
                                  aria-label={leaf?.label}
                                  className="w-full h-auto inline-flex items-center gap-2 text-[12px] 2xl:text-[13.5px] 3xl:text-[17px] leading-[1.2] font-normal text-[#212121]/85 hover:text-(--basecolor2) transition-colors duration-300"
                                >
                                  <span className="w-1.75 2xl:w-2 3xl:w-2.5 h-auto aspect-square shrink-0 rounded-full bg-linear-to-tr from-(--basecolor) to-(--basecolor2)" />
                                  <span>{leaf?.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <Link
                          href={group?.url || "#"}
                          aria-label={group?.label}
                          className="w-full h-auto inline-flex items-center gap-2 text-[12px] 2xl:text-[13.5px] 3xl:text-[17px] leading-[1.2] font-normal text-[#212121]/85 hover:text-(--basecolor2) transition-colors duration-300"
                        >
                          <span className="w-1.75 2xl:w-2 3xl:w-2.5 h-auto aspect-square shrink-0 rounded-full bg-linear-to-tr from-(--basecolor) to-(--basecolor2)" />
                          <span>{group?.label}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              ) : activeChild?.children?.length > 0 ? (
                <div className="w-full h-auto max-w-62.5 2xl:max-w-72.5 3xl:max-w-90">
                  <span className="text-[11px] 2xl:text-[13px] 3xl:text-[15px] leading-[1.2] font-bold uppercase tracking-[0.08em] bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent inline-block lg:mb-2.5 2xl:mb-3 3xl:mb-3.75">
                    {activeChild?.label}
                  </span>
                  <ul className="w-full h-auto flex flex-col gap-1.75 2xl:gap-2 3xl:gap-2.5">
                    {activeChild.children.map((leaf) => (
                      <li key={leaf?.id} className="w-full h-auto">
                        <Link
                          href={leaf?.url || "#"}
                          aria-label={leaf?.label}
                          className="w-full h-auto inline-flex items-center gap-2 text-[12px] 2xl:text-[13.5px] 3xl:text-[17px] leading-[1.2] font-normal text-[#212121]/85 hover:text-(--basecolor2) transition-colors duration-300"
                        >
                          <span className="w-1.75 2xl:w-2 3xl:w-2.5 h-auto aspect-square shrink-0 rounded-full bg-linear-to-tr from-(--basecolor) to-(--basecolor2)" />
                          <span>{leaf?.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  href={activeChild?.url || "#"}
                  aria-label={activeChild?.label}
                  className="inline-flex items-center gap-2 text-[13px] 2xl:text-[15px] 3xl:text-lg leading-[1.2] font-bold bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent"
                >
                  {activeChild?.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavigationMenu({
  item,
  className,
  level = 0,
  onActivate,
  onDeactivate,
  isMenuOpen = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const hasSubmenu = item?.children?.length > 0;

  const handleMouseEnter = () => {
    if (!isMobile && hasSubmenu) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && hasSubmenu) {
      setIsOpen(false);
    }
  };

  const toggleSubmenu = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (hasSubmenu) {
      setIsOpen((prev) => !prev);
    }
  };

  if (!isMobile) {
    if (level > 0) return null;
    if (!hasSubmenu) {
      return (
        <Link
          href={item?.url || "#"}
          aria-label={item?.label}
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
        className={cn("relative z-0", className)}
        onMouseEnter={onActivate}
        onMouseLeave={onDeactivate}
      >
        <div className="w-full h-auto flex items-center justify-center gap-1.25">
          {item?.url ? (
            <Link
              href={item.url}
              aria-label={item.label}
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
              "w-[15px] h-[15px] lg:w-2 lg:h-2 2xl:w-2.5 2xl:h-2.5 3xl:w-3 3xl:h-3 lg:border-r-1 2xl:border-r-2 lg:border-b-1 2xl:border-b-2 border-white transition-transform duration-300 ease-out",
              isMenuOpen
                ? "lg:rotate-[225deg]"
                : "lg:rotate-45 -translate-y-0.5",
            )}
          />
        </div>
      </div>
    );
  }

  if (!hasSubmenu) {
    return (
      <Link
        href={item?.url || "#"}
        aria-label={item?.label}
        className={cn(
          "text-[14px] lg:text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-medium text-center text-white w-auto h-full max-lg:p-5 max-lg:border-b max-lg:border-black/10 gap-1.25 flex items-center transition-colors duration-400 hover:bg-linear-to-r hover:from-(--basecolor) hover:to-(--basecolor2) hover:bg-clip-text hover:text-transparent",
          level > 0
            ? "leading-[1.1] text-left text-black dark:text-white py-1.25 max-lg:p-[7px_20px] max-lg:border-0"
            : "leading-[1.1] text-black lg:text-white max-lg:text-left",
          className,
        )}
      >
        {level > 1 && (
          <span className="w-1.5 2xl:w-2 h-1.5 2xl:h-2 aspect-square rounded-full shrink-0 bg-linear-to-tr from-(--basecolor) to-(--basecolor2) inline-block" />
        )}
        <span>{item?.label}</span>
      </Link>
    );
  }
  return (
    <div
      className={cn("relative z-0", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          "w-full h-auto max-lg:p-5 max-lg:border-b max-lg:border-black/10 flex items-center justify-between",
          level > 0 && "py-1.25 max-lg:p-[5px_20px] max-lg:border-0",
          isOpen && "max-lg:border-0",
        )}
      >
        {item?.url ? (
          <Link
            href={item.url}
            aria-label={item.label}
            className={cn(
              "text-sm lg:text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.2] font-bold lg:font-medium transition-colors duration-400",
              level > 0
                ? cn(
                    "text-[14px] leading-[1.1] py-1.25",
                    isOpen
                      ? "bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent"
                      : "text-black dark:text-white",
                  )
                : isOpen
                  ? "bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent"
                  : "max-lg:text-[15px] max-lg:text-black text-white dark:max-lg:text-white",
            )}
          >
            <span>{item.label}</span>
          </Link>
        ) : (
          <button
            type="button"
            onClick={toggleSubmenu}
            aria-expanded={isOpen}
            className={cn(
              "text-sm lg:text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.2] font-medium text-left py-1.25 transition-colors duration-400",
              level > 0
                ? cn(
                    "text-sm leading-[1.1]",
                    isOpen
                      ? "bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent"
                      : "text-black",
                  )
                : isOpen
                  ? "bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent"
                  : "text-white",
            )}
          >
            <span>{item.label}</span>
          </button>
        )}
        <button
          type="button"
          aria-label={`${isOpen ? "Close" : "Open"} ${item.label} submenu`}
          aria-expanded={isOpen}
          onClick={toggleSubmenu}
          className={cn(
            "w-6.25 h-2.5 aspect-square ml-1 shrink-0 transition-colors duration-400 flex items-center justify-center",
          )}
        >
          <span
            className={cn(
              "w-[15px] h-[15px] lg:w-1.75 lg:h-1.75 lg:border-r-1 2xl:border-r-2 lg:border-b-1 2xl:border-b-2 border-white transition-transform duration-300 ease-out",
              isOpen && "border-(--basecolor2)",
              level === 0
                ? "rotate-90 lg:rotate-45 -translate-y-0.5"
                : "w-[15px] h-[15px] lg:w-1.25 lg:h-1.25 lg:border-r-1 lg:border-b-1 lg:border-black rotate-90 lg:-rotate-45",
              isOpen && level === 0 && "-rotate-90 lg:rotate-[225deg]",
              isOpen && level > 0 && "max-lg:-rotate-90 border-(--basecolor)",
            )}
          >
            <Image
              src={"/images/header-arrow-icon.svg"}
              width={10}
              height={5}
              alt="header-arrow-icon"
              className="w-full h-full object-contain max-lg:block hidden"
            />
          </span>
        </button>
      </div>
      {/* DESKTOP SUBMENU */}
      {!isMobile && (
        <div
          className={cn(
            "w-max h-auto transition-all duration-250 ease-out lg:absolute z-50",
            level === 0 ? "left-auto top-full" : "left-full -top-2.5 pl-3",
            isOpen
              ? "visible opacity-100 translate-y-0 pointer-events-auto"
              : "invisible opacity-0 -translate-y-2 pointer-events-none",
            level > 0 && (isOpen ? "translate-x-0" : "-translate-x-2"),
          )}
        >
          <div
            className={cn(
              "min-w-62.5 h-auto p-2.5 bg-white rounded-[5px] relative z-0",
            )}
          >
            {item.children.map((child) => (
              <NavigationMenu key={child?.id} item={child} level={level + 1} />
            ))}
          </div>
        </div>
      )}

      {/* ==============================
          MOBILE ACCORDION
      ============================== */}

      {isMobile && (
        <div
          className={cn(
            "grid transition-[grid-template-rows] lg:hidden duration-300 ease-out",
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <div
              className={cn(
                "ml-2 mb-1",
                "transition-opacity duration-300",
                isOpen ? "opacity-100" : "opacity-0",
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
      )}
    </div>
  );
}

// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { cn } from "@/lib/utils";
// import { ThemeToggle } from "../theme-toggle";
// import { useEffect, useState, useRef } from "react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// const local_data = {
//   topBar: {
//     topBarButtons: [
//       {
//         id: 1,
//         url: "#!",
//         label: "CDSIMER",
//       },
//       {
//         id: 2,
//         url: "#!",
//         label: "DSU Online",
//       },
//     ],
//     topBarLinkIcons: [
//       {
//         id: 1,
//         url: "#!",
//         label: "Virtual Tour",
//         icon: {
//           url: "/images/header-360-icon.svg",
//           alternativeText: "virtual Tour",
//         },
//       },
//       {
//         id: 2,
//         url: "#!",
//         label: "E-Brochure",
//         icon: {
//           url: "/images/header-brochure-icon.svg",
//           alternativeText: "E-Brochure",
//         },
//       },
//     ],
//   },
//   logo: {
//     mainlogo: {
//       link: "/",
//       url: "/images/dsu-logo.svg",
//       alt: "DSU Logo",
//     },
//     alternativelogo: {
//       link: "/",
//       url: "/images/header-logo-2.svg",
//       alt: "DSU Logo",
//     },
//     logoText: "India's AI-First <br> University",
//   },
//   actionLinks: [
//     {
//       id: 1,
//       url: "#!",
//       label: "NVIDIA's AI Architecture",
//     },
//     {
//       id: 2,
//       url: "#!",
//       label: "AI-First @ DSU",
//     },
//     {
//       id: 3,
//       url: "#!",
//       label: "Centres of Excellence",
//     },
//   ],
//   navigationLinks: [
//     {
//       id: 1,
//       url: "#!",
//       label: "Why DSU?",
//       children: [
//         {
//           id: 1,
//           url: "#!",
//           label: "About DSU",
//         },
//         {
//           id: 2,
//           url: "#!",
//           label: "Leadership",
//           children: [
//             {
//               id: 1,
//               url: "#!",
//               label: "Leadership-1",
//             },
//             {
//               id: 2,
//               url: "#!",
//               label: "Leadership-2",
//             },
//           ],
//         },
//         {
//           id: 3,
//           url: "#!",
//           label: "Governance",
//           children: [
//             {
//               id: 1,
//               url: "#!",
//               label: "Governance-1",
//             },
//             {
//               id: 2,
//               url: "#!",
//               label: "Governance-2",
//             },
//           ],
//         },
//         {
//           id: 4,
//           url: "#!",
//           label: "Recognition & Rankings",
//           children: [
//             {
//               id: 1,
//               url: "#!",
//               label: "Recognition & Rankings-1",
//             },
//             {
//               id: 2,
//               url: "#!",
//               label: "Recognition & Rankings-2",
//             },
//           ],
//         },
//         {
//           id: 5,
//           label: "Excellence & Quality Assurance",
//           children: [
//             {
//               id: 1,
//               label: "IQAC",
//               children: [
//                 {
//                   id: 1,
//                   url: "#!",
//                   label: "IQAC",
//                 },
//                 {
//                   id: 2,
//                   url: "#!",
//                   label: "IQAC Committee",
//                 },
//                 {
//                   id: 3,
//                   url: "#!",
//                   label: "IQAC Activities",
//                 },
//                 {
//                   id: 4,
//                   url: "#!",
//                   label: "IQAC Composition",
//                 },
//               ],
//             },
//             {
//               id: 2,
//               url: "#!",
//               label: "Student Life",
//               children: [
//                 {
//                   id: 1,
//                   url: "#!",
//                   label: "Clubs",
//                   children: [
//                     {
//                       id: 1,
//                       url: "#!",
//                       label: "Clubs",
//                     },
//                     {
//                       id: 2,
//                       url: "#!",
//                       label: "Events",
//                     },
//                   ],
//                 },
//                 {
//                   id: 2,
//                   url: "#!",
//                   label: "Events",
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: 2,
//       url: "#!",
//       label: "AI-Enabled Academics",
//     },
//     {
//       id: 3,
//       url: "#!",
//       label: "Research & Innovation",
//     },
//     {
//       id: 4,
//       url: "#!",
//       label: "Industry Collaborations",
//     },
//     {
//       id: 5,
//       url: "#!",
//       label: "Placements",
//     },
//     {
//       id: 6,
//       url: "#!",
//       label: "Admissions",
//     },
//     {
//       id: 7,
//       url: "#!",
//       label: "International Relations",
//     },
//     {
//       id: 8,
//       url: "#!",
//       label: "Locate Us",
//     },
//   ],
// };

// export default function Header({ data = local_data }) {
//   const [mobileOpenPath, setMobileOpenPath] = useState([]);
//   const [isHeaderVisible, setIsHeaderVisible] = useState(true);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const searchRef = useRef(null);
//   useEffect(() => {
//     document.body.classList.toggle("header-visible", isHeaderVisible);

//     return () => {
//       document.body.classList.remove("header-visible");
//     };
//   }, [isHeaderVisible]);
//   useEffect(() => {
//     let lastScrollY = window.scrollY;
//     let ticking = false;

//     const handleScroll = () => {
//       if (ticking) return;

//       window.requestAnimationFrame(() => {
//         const currentScrollY = window.scrollY;

//         setIsScrolled(currentScrollY > 10);
//         if (currentScrollY <= 10) {
//           setIsHeaderVisible(true);
//         } else if (currentScrollY > lastScrollY) {
//           setIsHeaderVisible(false);
//         } else if (currentScrollY < lastScrollY) {
//           setIsHeaderVisible(true);
//         }
//         lastScrollY = currentScrollY;
//         ticking = false;
//       });
//       ticking = true;
//     };
//     window.addEventListener("scroll", handleScroll, {
//       passive: true,
//     });
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   useEffect(() => {
//     if (!isSearchOpen) return;
//     const handleClickOutside = (event) => {
//       if (searchRef.current && !searchRef.current.contains(event.target)) {
//         setIsSearchOpen(false);
//       }
//     };
//     const handleScrollClose = () => {
//       setIsSearchOpen(false);
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     window.addEventListener("scroll", handleScrollClose, { passive: true });
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       window.removeEventListener("scroll", handleScrollClose);
//     };
//   }, [isSearchOpen]);
//   const isMobile = useIsMobile();
//   const TopHeaderTextStyle =
//     "text-[9px] sm:text-[12px] 2xl:text-sm 3xl:text-base leading-[1.1] font-medium text-white w-auto h-auto px-[5px] sm:px-[10px] lg:px-[15px] 2xl:px-5 border-r border-white/20 gap-[5px] lg:gap-2.5 flex items-center";
//   return (
//     <header
//       className={cn(
//         "w-full h-auto block transition-all duration-800 fixed z-20 md:z-[99] inset-[0_0_auto_0]",
//         isHeaderVisible ? "translate-y-0" : "-translate-y-full",
//         isScrolled
//           ? ["bg-black/40 backdrop-blur-xl transition-all duration-800"]
//           : ["bg-linear-to-r", "from-(--basecolor)/10", "to-(--basecolor2)/10"],
//       )}
//     >
//       <div className="w-full h-11.25 lg:h-7.5 2xl:h-8.75 3xl:h-10 bg-linear-to-r from-[#450A03] via-[#7F1D1D] to-[#B91C1C] block">
//         <div className="container h-full flex items-center justify-between lg:justify-end">
//           <div className="w-auto h-auto gap-1.25 sm:gap-1.75 2xl:gap-2.5 flex">
//             {data?.topBar?.topBarButtons?.map((item) => (
//               <div key={item?.id} className="w-auto h-auto">
//                 <Link
//                   href={item?.url}
//                   aria-label={item?.label}
//                   className="text-[8px] sm:text-xs 2xl:text-sm 3xl:text-base leading-[1.1] font-medium text-center text-white w-auto h-full lg:h-auto p-2.5 sm:p-[5px_20px] 3xl:p-[5px_30px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) rounded-[3px] 2xl:rounded-[5px] flex items-center justify-center transition-colors duration-500 hover:from-(--basecolor2) hover:to-(--basecolor)"
//                 >
//                   {item?.label}
//                 </Link>
//               </div>
//             ))}
//           </div>
//           <div className="w-auto h-auto lg:gap-2.5 3xl:gap-2.5 flex items-center">
//             {data?.topBar?.topBarLinkIcons?.map((item) => (
//               <div key={item?.id} className="w-auto h-auto">
//                 <Link
//                   href={item?.url}
//                   aria-label={item?.label}
//                   className={cn(
//                     "transition-opacity duration-300 hover:opacity-70",
//                     TopHeaderTextStyle,
//                   )}
//                 >
//                   <span className="w-[calc(100%-10px)] sm:w-[calc(100%-15px)]">
//                     {item?.label}
//                   </span>
//                   {item?.icon && (
//                     <span className="w-2.5 sm:w-3.75 3xl:w-5 h-auto aspect-square overflow-hidden flex items-center justify-center">
//                       <Image
//                         src={item?.icon?.url}
//                         alt={item?.icon?.alternativeTxt || "Icon"}
//                         width={20}
//                         height={20}
//                         className="w-full h-full object-contain"
//                       />
//                     </span>
//                   )}
//                 </Link>
//               </div>
//             ))}
//             <div className="w-auto h-auto">
//               <DropdownMenu>
//                 <DropdownMenuTrigger
//                   render={
//                     <span
//                       className={cn(TopHeaderTextStyle, "cursor-pointer")}
//                     />
//                   }
//                 >
//                   Login
//                   <span className="w-2.5 sm:w-3.75 3xl:w-5 h-auto aspect-square overflow-hidden flex items-center justify-center">
//                     <Image
//                       src="/images/header-login.svg"
//                       alt="login"
//                       width={20}
//                       height={20}
//                       className="w-full h-full object-contain"
//                     />
//                   </span>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                   <DropdownMenuItem>Profile</DropdownMenuItem>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuItem variant="destructive">
//                     Log out
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//             <div className="w-auto h-auto px-1.25 sm:px-2.5 2xl:px-2.5 border-r border-white/20">
//               <Select className="w-full h-auto">
//                 <SelectTrigger
//                   className={cn(
//                     TopHeaderTextStyle,
//                     "w-full !h-auto !p-0 border-0 gap-1.25 [&>svg]:text-bold [&>svg]:text-white max-lg:[&>svg]:translate-y-[-1px]",
//                   )}
//                 >
//                   <SelectValue
//                     className={
//                       "sm:text-xs 2xl:text-sm 3xl:text-base leading-[1.1] font-medium text-white"
//                     }
//                     placeholder="EN"
//                   />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     <SelectItem value="Tamil">Tamil</SelectItem>
//                     <SelectItem value="English">English</SelectItem>
//                     <SelectItem value="Malayalam">Malayalam</SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="w-auto h-auto flex">
//               <ThemeToggle />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-full h-auto max-lg:py-[15px_20px] lg:border-b border-white/10">
//         <div className="container">
//           <div className="w-full h-auto lg:py-3.75 2xl:py-5 flex flex-wrap items-center">
//             <div className="w-full lg:w-[45%] max-lg:mb-6.25">
//               <div className="w-full h-auto -mx-3.75 2xl:-mx-5 3xl:-mx-6.25 [&>div]:px-3.75 2xl:[&>div]:px-5 3xl:[&>div]:px-6.25 [&>div]:border-r [&>div]:border-white/10 [&>div:last-child]:border-0 flex items-center">
//                 <div className="w-auto h-auto">
//                   <Link
//                     href={data?.logo?.mainlogo?.link}
//                     aria-label={data?.logo?.mainlogo?.alternativeTxt}
//                     className="w-40 2xl:w-47.5 3xl:w-60 h-auto aspect-240/80 overflow-hidden flex items-center justify-center transition-transform duration-300 hover:scale-105"
//                   >
//                     <Image
//                       src={data?.logo?.mainlogo?.url}
//                       alt={data?.logo?.mainlogo?.alternativeTxt || "Logo"}
//                       width={110}
//                       height={80}
//                       className="w-full h-full object-contain"
//                     />
//                   </Link>
//                 </div>
//                 <div className="w-auto h-auto">
//                   <Link
//                     href={data?.logo?.alternativelogo?.link}
//                     aria-label={data?.logo?.alternativelogo?.alternativeTxt}
//                     className="w-18.75 2xl:w-22.5 3xl:w-27.5 h-auto aspect-110/50 overflow-hidden flex items-center justify-center"
//                   >
//                     <Image
//                       src={data?.logo?.alternativelogo?.url}
//                       alt={
//                         data?.logo?.alternativelogo?.alternativeTxt || "Logo"
//                       }
//                       width={110}
//                       height={80}
//                       className="w-full h-full object-contain"
//                     />
//                   </Link>
//                 </div>
//                 <div className="w-auto h-auto">
//                   <div
//                     className="text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.3] font-normal text-center text-white"
//                     dangerouslySetInnerHTML={{
//                       __html: data?.logo?.logoText,
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="w-full lg:w-[55%]">
//               <div className="w-full h-auto -mx-[2.5px] flex lg:justify-end">
//                 {data?.actionLinks?.map((item, index) => (
//                   <div
//                     key={index}
//                     className="w-auto h-auto px-[2.5px] max-lg:flex-1"
//                   >
//                     <Link
//                       href={item?.url}
//                       aria-label={item?.label}
//                       className="text-[10px] sm:text-[11px] 2xl:text-sm 3xl:text-lg leading-[1.1] font-bold text-center text-white w-auto h-full lg:h-10 3xl:h-12.5 p-1.25 sm:p-2.5 2xl:p-3.75 3xl:p-5 border border-[#D1D5DC80]/50 rounded-[3px] 2xl:rounded-[5px] overflow-hidden flex items-center justify-center transition-colors duration-500 hover:bg-linear-to-r hover:from-(--basecolor) hover:to-(--basecolor2) hover:border-(--basecolor2)"
//                     >
//                       {item?.label}
//                     </Link>
//                   </div>
//                 ))}
//                 <div className="w-auto 2xl:h-10 3xl:h-12.5 ml-1.25 bg-linear-to-r from-(--basecolor) to-(--basecolor2) rounded-[3px] 2xl:rounded-[5px] overflow-x-clip flex items-center relative z-0 transition-colors duration-500 hover:from-(--basecolor2) hover:to-(--basecolor)">
//                   <div className="w-auto h-full">
//                     <Link
//                       href="/#"
//                       aria-label="Register"
//                       className="text-[10px] sm:text-[11px] 2xl:text-sm 3xl:text-lg leading-[1.1] font-bold text-white w-full h-full px-1.25 sm:px-2.5 lg:px-3.75 flex items-center justify-center relative z-0 before:content-[''] before:w-px before:h-[25%] sm:before:h-1/2 before:my-auto before:bg-white sm:before:bg-black/10 before:translate-y-0.75 2xl:before:translate-y-1.25 before:absolute before:z-1 before:inset-[0_0_0_auto]"
//                     >
//                       <span className="translate-y-0.75 2xl:translate-y-1.25">
//                         NRI/Foreigners
//                       </span>
//                     </Link>
//                   </div>
//                   <div className="w-auto h-full">
//                     <Link
//                       href="/#"
//                       aria-label="Register"
//                       className="text-[10px] sm:text-[11px] 2xl:text-sm 3xl:text-lg leading-[1.1] font-medium text-white w-full h-full px-1.25 sm:px-2.5 lg:px-3.75 flex items-center justify-center"
//                     >
//                       <span className="translate-y-0.75 2xl:translate-y-1.25">
//                         Others
//                       </span>
//                     </Link>
//                   </div>
//                   <button className="text-[10px] 2xl:text-xs 3xl:text-base leading-[1.1] font-bold text-black w-fit h-auto p-[3px_5px] mx-auto bg-white rounded-[2px] 2xl:rounded-[3px] -translate-y-1.25 overflow-hidden inline absolute z-1 inset-[0_0_auto_0]">
//                     Apply Here
//                   </button>
//                 </div>
//                 <div className="w-auto h-auto pl-3.75 max-lg:flex hidden">
//                   <Sheet>
//                     <SheetTrigger className="w-7.5 h-full aspect-square bg-linear-to-r from-(--basecolor) to-(--basecolor2) rounded-[3px] border border-[#D1D5DC80]/50 overflow-hidden flex items-center justify-center">
//                       <div className="w-full h-3 flex flex-col items-center justify-between">
//                         <span className="w-1/2 h-0.5 bg-white block"></span>
//                         <span className="w-[25%] h-0.5 bg-white block"></span>
//                         <span className="w-1/2 h-0.5 bg-white block"></span>
//                       </div>
//                     </SheetTrigger>
//                     <SheetContent
//                       className={
//                         "!w-full !max-w-full bg-linear-to-t from-[#FFF3E0] to-[#FFF8EE] pt-[40px]"
//                       }
//                     >
//                       {data?.navigationLinks?.map((item) => (
//                         <NavigationMenu
//                           key={item?.id}
//                           item={item}
//                           level={0}
//                           mobileOpenPath={mobileOpenPath}
//                           setMobileOpenPath={setMobileOpenPath}
//                           className={cn(
//                             "w-auto h-auto transition-opacity duration-400 relative z-0 hover:before:lg:w-[calc(100%-40px)] hover:before:2xl:w-[calc(100%-50px)] hover:before:3xl:w-[calc(100%-70px)] before:content-[''] before:w-0 sm:before:h-0.5 2xl:before:h-0.75 before:mx-auto before:bg-linear-to-r before:from-(--basecolor) before:to-(--basecolor2) before:transition-all before:duration-400 before:absolute before:z-1 before:inset-[auto_0_0_0]",
//                             isSearchOpen && "opacity-0",
//                           )}
//                         />
//                       ))}
//                     </SheetContent>
//                   </Sheet>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {!isMobile && (
//         <div className="container">
//           <div className="w-full h-auto flex items-center justify-between relative z-0">
//             <Link
//               href="/"
//               aria-label="Home"
//               className={cn(
//                 "w-auto h-auto lg:py-3.75 2xl:py-5 3xl:py-7.5 inline transition-opacity duration-400 relative z-0 hover:before:w-full before:content-[''] before:w-0 sm:before:h-0.5 2xl:before:h-0.75 before:mx-auto before:bg-linear-to-r before:from-(--basecolor) before:to-(--basecolor2) before:transition-all before:duration-400 before:absolute before:z-1 before:inset-[auto_0_0_0]",
//                 isSearchOpen && "opacity-0",
//               )}
//             >
//               <span className="w-3.75 3xl:w-5 h-auto aspect-square flex items-center justify-center">
//                 <Image
//                   src={"/images/header-home.svg"}
//                   alt={"Home"}
//                   width={20}
//                   height={20}
//                   className="w-full h-full object-contain"
//                 />
//               </span>
//             </Link>
//             {data?.navigationLinks?.map((item) => (
//               <NavigationMenu
//                 key={item?.id}
//                 item={item}
//                 level={0}
//                 mobileOpenPath={mobileOpenPath}
//                 setMobileOpenPath={setMobileOpenPath}
//                 className={cn(
//                   "w-auto h-auto lg:p-[20px_10px] xl:p-[20px_20px] 2xl:p-[20px_25px] 3xl:p-[30px_35px] first:pl-0 last:pr-0 transition-opacity duration-400 relative z-0 hover:before:lg:w-[calc(100%-40px)] hover:before:2xl:w-[calc(100%-50px)] hover:before:3xl:w-[calc(100%-70px)] before:content-[''] before:w-0 sm:before:h-0.5 2xl:before:h-0.75 before:mx-auto before:bg-linear-to-r before:from-(--basecolor) before:to-(--basecolor2) before:transition-all before:duration-400 before:absolute before:z-1 before:inset-[auto_0_0_0]",
//                   isSearchOpen && "opacity-0",
//                 )}
//               />
//             ))}
//             <button
//               type="button"
//               aria-label="Open search"
//               aria-expanded={isSearchOpen}
//               onClick={() => setIsSearchOpen(true)}
//               className={cn(
//                 "w-auto h-auto inline shrink-0 transition-opacity duration-400",
//                 isSearchOpen && "opacity-0",
//               )}
//             >
//               <span className="2xl:w-3.75 3xl:w-5 h-auto aspect-square flex items-center justify-center">
//                 <Image
//                   src={"/images/header-search-icon.svg"}
//                   alt={"Search"}
//                   width={20}
//                   height={20}
//                   className="w-full h-full object-contain"
//                 />
//               </span>
//             </button>
//             <div
//               ref={searchRef}
//               className={cn(
//                 "w-full h-auto gap-5 flex items-center transition-all duration-500 ease-out absolute z-10 inset-0",
//                 isSearchOpen
//                   ? "opacity-100 visible translate-x-0"
//                   : "opacity-0 invisible pointer-events-none translate-x-4 absolute",
//               )}
//             >
//               <div className="w-full h-auto relative">
//                 <input
//                   type="search"
//                   autoFocus={isSearchOpen}
//                   placeholder="Search..."
//                   className="w-full h-12.5 px-5 pr-12 text-base text-white bg-white/10 border border-white/20 rounded-[5px] outline-none placeholder:text-white/50 focus:border-(--basecolor2) transition-colors duration-300"
//                 />
//                 <span className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
//                   <Image
//                     src="/images/header-search-icon.svg"
//                     alt="Search"
//                     width={20}
//                     height={20}
//                     className="w-full h-full object-contain"
//                   />
//                 </span>
//               </div>
//               <button
//                 type="button"
//                 aria-label="Close search"
//                 onClick={() => setIsSearchOpen(false)}
//                 className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors duration-300"
//               >
//                 <span className="relative w-4 h-4">
//                   <span className="absolute left-1/2 top-1/2 w-full h-px bg-white -translate-x-1/2 -translate-y-1/2 rotate-45" />
//                   <span className="absolute left-1/2 top-1/2 w-full h-px bg-white -translate-x-1/2 -translate-y-1/2 -rotate-45" />
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// function useIsMobile() {
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 1024px)");
//     const update = () => setIsMobile(mediaQuery.matches);
//     update();
//     mediaQuery.addEventListener("change", update);
//     return () => {
//       mediaQuery.removeEventListener("change", update);
//     };
//   }, []);
//   return isMobile;
// }

// function NavigationMenu({ item, className, level = 0 }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const isMobile = useIsMobile();
//   const hasSubmenu = item?.children?.length > 0;

//   const handleMouseEnter = () => {
//     if (!isMobile && hasSubmenu) {
//       setIsOpen(true);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (!isMobile && hasSubmenu) {
//       setIsOpen(false);
//     }
//   };

//   const toggleSubmenu = (event) => {
//     event.preventDefault();
//     event.stopPropagation();

//     if (hasSubmenu) {
//       setIsOpen((prev) => !prev);
//     }
//   };

//   if (!hasSubmenu) {
//     return (
//       <Link
//         href={item?.url || "#"}
//         aria-label={item?.label}
//         className={cn(
//           "text-[14px] lg:text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-medium text-center text-white w-auto h-full max-lg:p-5 max-lg:border-b max-lg:border-black/10 gap-1.25 flex items-center transition-colors duration-400 hover:bg-linear-to-r hover:from-(--basecolor) hover:to-(--basecolor2) hover:bg-clip-text hover:text-transparent",
//           level > 0
//             ? "leading-[1.1] text-left text-black py-1.25 max-lg:p-[5px_20px] max-lg:border-0"
//             : "leading-[1.1] text-black lg:text-white",
//           className,
//         )}
//       >
//         <span>{item?.label}</span>
//       </Link>
//     );
//   }
//   return (
//     <div
//       className={cn("relative z-0", className)}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div
//         className={cn(
//           "w-full h-auto max-lg:p-5 max-lg:border-b max-lg:border-black/10 flex items-center justify-between",
//           level > 0 && "py-1.25 max-lg:p-[5px_20px] max-lg:border-0",
//           isOpen && "max-lg:border-0",
//         )}
//       >
//         {item?.url ? (
//           <Link
//             href={item.url}
//             aria-label={item.label}
//             className={cn(
//               "text-sm lg:text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.2] font-bold lg:font-medium transition-colors duration-400",
//               level > 0
//                 ? cn(
//                   "text-[14px] leading-[1.1] py-1.25",
//                   isOpen
//                     ? "bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent"
//                     : "text-black",
//                 )
//                 : isOpen
//                   ? "bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent"
//                   : "max-lg:text-black text-white",
//             )}
//           >
//             <span>{item.label}</span>
//           </Link>
//         ) : (
//           <button
//             type="button"
//             onClick={toggleSubmenu}
//             aria-expanded={isOpen}
//             className={cn(
//               "text-sm lg:text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.2] font-medium text-left py-1.25 transition-colors duration-400",
//               level > 0
//                 ? cn(
//                   "text-sm leading-[1.1]",
//                   isOpen
//                     ? "bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent"
//                     : "text-black",
//                 )
//                 : isOpen
//                   ? "bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent"
//                   : "text-white",
//             )}
//           >
//             <span>{item.label}</span>
//           </button>
//         )}
//         <button
//           type="button"
//           aria-label={`${isOpen ? "Close" : "Open"} ${item.label} submenu`}
//           aria-expanded={isOpen}
//           onClick={toggleSubmenu}
//           className={cn(
//             "w-6.25 h-2.5 aspect-square ml-1 shrink-0 transition-colors duration-400 flex items-center justify-center",
//           )}
//         >
//           <span
//             className={cn(
//               "w-[15px] h-[15px] lg:w-1.75 lg:h-1.75 lg:border-r-1 2xl:border-r-2 lg:border-b-1 2xl:border-b-2 border-white transition-transform duration-300 ease-out",
//               isOpen && "border-(--basecolor2)",
//               level === 0
//                 ? "rotate-0 lg:rotate-45 -translate-y-0.5"
//                 : "w-[15px] h-[15px] lg:w-1.25 lg:h-1.25 lg:border-r-1 lg:border-b-1 lg:border-black rotate-0 lg:-rotate-45",
//               isOpen && level === 0 && "rotate-90 lg:rotate-[225deg]",
//               isOpen && level > 0 && "max-lg:rotate-90 border-(--basecolor)",
//             )}
//           >
//             <Image
//               src={"/images/header-arrow-icon.svg"}
//               width={10}
//               height={5}
//               alt="header-arrow-icon"
//               className="w-full h-full object-contain max-lg:block hidden"
//             />
//           </span>
//         </button>
//       </div>
//       {/* DESKTOP SUBMENU */}
//       {!isMobile && (
//         <div
//           className={cn(
//             "w-max h-auto transition-all duration-250 ease-out lg:absolute z-50",
//             level === 0 ? "left-auto top-full" : "left-full -top-2.5 pl-3",
//             isOpen
//               ? "visible opacity-100 translate-y-0 pointer-events-auto"
//               : "invisible opacity-0 -translate-y-2 pointer-events-none",
//             level > 0 && (isOpen ? "translate-x-0" : "-translate-x-2"),
//           )}
//         >
//           <div
//             className={cn(
//               "min-w-62.5 h-auto p-2.5 bg-white rounded-[5px] relative z-0",
//             )}
//           >
//             {level === 0 && (
//               <div className="absolute -z-10 left-6 -top-1 w-2 h-2 rotate-45 bg-white" />
//             )}
//             {item.children.map((child) => (
//               <NavigationMenu key={child?.id} item={child} level={level + 1} />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* ==============================
//           MOBILE ACCORDION
//       ============================== */}

//       {isMobile && (
//         <div
//           className={cn(
//             "grid transition-[grid-template-rows] lg:hidden duration-300 ease-out",
//             isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
//           )}
//         >
//           <div className="overflow-hidden">
//             <div
//               className={cn(
//                 "ml-3 mb-1",
//                 "border-l border-white/10",
//                 "transition-opacity duration-300",
//                 isOpen ? "opacity-100" : "opacity-0",
//               )}
//             >
//               {item.children.map((child) => (
//                 <NavigationMenu
//                   key={child?.id}
//                   item={child}
//                   level={level + 1}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
