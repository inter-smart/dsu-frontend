"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
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
import { ThemeToggle } from "../theme-toggle";

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
        },
        {
          id: 2,
          url: "#!",
          label: "Leadership",
          children: [
            {
              id: 1,
              url: "#!",
              label: "Leadership-1",
            },
            {
              id: 2,
              url: "#!",
              label: "Leadership-2",
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
              url: "#!",
              label: "Student Life",
              children: [
                {
                  id: 1,
                  url: "#!",
                  label: "Clubs",
                  children: [
                    {
                      id: 1,
                      url: "#!",
                      label: "Clubs",
                    },
                    {
                      id: 2,
                      url: "#!",
                      label: "Events",
                    },
                  ],
                },
                {
                  id: 2,
                  url: "#!",
                  label: "Events",
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

  const TopHeaderTextStyle =
    "text-[12px] 2xl:text-sm 3xl:text-base leading-[1.1] font-medium text-white w-auto h-auto lg:px-[15px] 2xl:px-5 border-r border-white/20 gap-2.5 flex items-center";
  return (
    <header
      className={cn(
        "w-full h-auto block transition-all duration-800 fixed z-50 inset-[0_0_auto_0]",
        isHeaderVisible ? "translate-y-0" : "-translate-y-full",
        isScrolled
          ? ["bg-black/40 backdrop-blur-xl transition-all duration-800"]
          : ["bg-linear-to-r", "from-(--basecolor)/10", "to-(--basecolor2)/10"],
      )}
    >
      <div className="w-full 2xl:h-8.75 3xl:h-10 bg-linear-to-r from-[#450A03] via-[#7F1D1D] to-[#B91C1C] block">
        <div className="container h-full flex items-center justify-end">
          <div className="w-auto h-auto gap-1.75 2xl:gap-2.5 flex">
            {data?.topBar?.topBarButtons?.map((item) => (
              <div key={item?.id} className="w-auto h-auto">
                <Link
                  href={item?.url}
                  aria-label={item?.label}
                  className="sm:text-xs 2xl:text-sm 3xl:text-base leading-[1.1] font-medium text-white w-auto h-auto lg:p-[5px_20px] 3xl:p-[5px_30px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) rounded-[3px] 2xl:rounded-[5px] flex"
                >
                  {item?.label}
                </Link>
              </div>
            ))}
          </div>
          <div className="w-auto h-auto gap-1.25 3xl:gap-2.5 flex items-center">
            {data?.topBar?.topBarLinkIcons?.map((item) => (
              <div key={item?.id} className="w-auto h-auto">
                <Link
                  href={item?.url}
                  aria-label={item?.label}
                  className={cn(TopHeaderTextStyle)}
                >
                  {item?.label}
                  {item?.icon && (
                    <span className="sm:w-3.75 3xl:w-5 h-auto aspect-square overflow-hidden flex items-center justify-center">
                      <Image
                        src={item?.icon?.url}
                        alt={item?.icon?.alternativeTxt}
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
                  <span className="sm:w-3.75 3xl:w-5 h-auto aspect-square overflow-hidden flex items-center justify-center">
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
            <div className="w-auto h-auto 2xl:px-2.5">
              <Select className="w-full h-auto">
                <SelectTrigger
                  className={cn(
                    TopHeaderTextStyle,
                    "w-full h-auto p-0 border-0 gap-1.25 [&>svg]:text-white",
                  )}
                >
                  <SelectValue
                    className={"sm:text-xs 2xl:text-sm 3xl:text-base leading-[1.1] font-medium text-white"}
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
      <div className="w-full h-auto border-b border-white/10">
        <div className="container">
          <div className="w-full h-auto lg:py-3.75 2xl:py-5 flex items-center">
            <div className="w-[45%]">
              <div className="w-full h-auto lg:-mx-3.75 2xl:-mx-5 3xl:-mx-6.25 lg:[&>div]:px-3.75 2xl:[&>div]:px-5 3xl:[&>div]:px-6.25 [&>div]:border-r [&>div]:border-white/10 [&>div:last-child]:border-0 flex items-center">
                <div className="w-auto h-auto">
                  <Link
                    href={data?.logo?.mainlogo?.link}
                    aria-label={data?.logo?.mainlogo?.alternativeTxt}
                    className="lg:w-40 2xl:w-47.5 3xl:w-60 h-auto aspect-240/80 overflow-hidden flex items-center justify-center"
                  >
                    <Image
                      src={data?.logo?.mainlogo?.url}
                      alt={data?.logo?.mainlogo?.alternativeTxt}
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
                    className="lg:w-18.75 2xl:w-22.5 3xl:w-27.5 h-auto aspect-110/50 overflow-hidden flex items-center justify-center"
                  >
                    <Image
                      src={data?.logo?.alternativelogo?.url}
                      alt={data?.logo?.alternativelogo?.alternativeTxt}
                      width={110}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </Link>
                </div>
                <div className="w-auto h-auto">
                  <div
                    className="lg:text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.3] font-normal text-center text-white"
                    dangerouslySetInnerHTML={{
                      __html: data?.logo?.logoText,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="w-[55%]">
              <div className="w-full h-auto -mx-[2.5px] flex justify-end">
                {data?.actionLinks?.map((item, index) => (
                  <div key={index} className="w-auto h-auto px-[2.5px]">
                    <Link
                      href={item?.url}
                      aria-label={item?.label}
                      className="sm:text-[11px] 2xl:text-sm 3xl:text-lg leading-[1.1] font-bold text-center text-white w-auto lg:h-10 3xl:h-12.5 p-2.5 2xl:p-3.75 3xl:p-5 border border-[#D1D5DC80]/50 rounded-[3px] 2xl:rounded-[5px] overflow-hidden flex items-center justify-center"
                    >
                      {item?.label}
                    </Link>
                  </div>
                ))}
                <div className="w-auto 2xl:h-10 3xl:h-12.5 ml-1.25 bg-linear-to-r from-(--basecolor) to-(--basecolor2) rounded-[3px] 2xl:rounded-[5px] overflow-x-clip flex items-center relative z-0">
                  <div className="w-auto h-full">
                    <Link
                      href="/#"
                      aria-label="Register"
                      className="text-[11px] 2xl:text-sm 3xl:text-lg leading-[1.1] font-bold text-white w-full h-full px-3.75 flex items-center justify-center relative z-0 before:content-[''] before:w-px before:h-1/2 before:my-auto before:bg-black/10 before:absolute before:z-1 before:inset-[0_0_0_auto]"
                    >
                      <span className="translate-y-0.75 2xl:translate-y-1.25">NRI/Foreigners</span>
                    </Link>
                  </div>
                  <div className="w-auto h-full">
                    <Link
                      href="/#"
                      aria-label="Register"
                      className="text-[11px] 2xl:text-sm 3xl:text-lg leading-[1.1] font-medium text-white w-full h-full px-3.75 flex items-center justify-center"
                    >
                      <span className="translate-y-0.75 2xl:translate-y-1.25">Others</span>
                    </Link>
                  </div>
                  <button className="text-[10px] 2xl:text-xs 3xl:text-base leading-[1.1] font-bold text-black w-fit h-auto p-[3px_5px] mx-auto bg-white rounded-[2px] 2xl:rounded-[3px] -translate-y-1.25 overflow-hidden inline absolute z-1 inset-[0_0_auto_0]">
                    Apply Here
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
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
              className={cn(
                "w-auto h-auto lg:p-[20px_20px] 2xl:p-[20px_25px] 3xl:p-[30px_35px] first:pl-0 last:pr-0 transition-opacity duration-400 relative z-0 hover:before:lg:w-[calc(100%-40px)] hover:before:2xl:w-[calc(100%-50px)] hover:before:3xl:w-[calc(100%-70px)] before:content-[''] before:w-0 sm:before:h-0.5 2xl:before:h-0.75 before:mx-auto before:bg-linear-to-r before:from-(--basecolor) before:to-(--basecolor2) before:transition-all before:duration-400 before:absolute before:z-1 before:inset-[auto_0_0_0]",
                isSearchOpen && "opacity-0",
              )}
            />
          ))}
          <button
            type="button"
            aria-label="Open search"
            aria-expanded={isSearchOpen}
            onClick={() => setIsSearchOpen(true)}
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
                  alt=""
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
    </header>
  );
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);
  return isMobile;
}

function NavigationMenu({ item, className, level = 0 }) {
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

  if (!hasSubmenu) {
    return (
      <Link
        href={item?.url || "#"}
        aria-label={item?.label}
        className={cn(
          "lg:text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-medium text-center text-white w-auto h-full gap-1.25 flex items-center transition-colors duration-400 hover:bg-linear-to-r hover:from-(--basecolor) hover:to-(--basecolor2) hover:bg-clip-text hover:text-transparent",
          level > 0
            ? "text-sm leading-[1.1] text-left text-black py-1.25"
            : "text-lg leading-[1.1] text-white",
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          "w-full h-auto flex items-center justify-between",
          level > 0 && "py-1.25",
        )}
      >
        {item?.url ? (
          <Link
            href={item.url}
            aria-label={item.label}
            className={cn(
              "lg:text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.2] font-medium transition-colors duration-400",
              level > 0
                ? cn(
                    "text-sm leading-[1.1] py-1.25",
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
          </Link>
        ) : (
          <button
            type="button"
            onClick={toggleSubmenu}
            aria-expanded={isOpen}
            className={cn(
              "lg:text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.2] font-medium text-left py-1.25 transition-colors duration-400",
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
              "w-1.25 2xl:w-1.75 h-1.75 border-r-1 2xl:border-r-2 border-b-1 2xl:border-b-2 border-white transition-transform duration-300 ease-out",
              isOpen && "border-(--basecolor2)",
              level === 0
                ? "rotate-45 -translate-y-0.5"
                : "w-1.25 h-1.25 border-r-1 border-b-1 border-black -rotate-45",
              isOpen && level === 0 && "rotate-[225deg]",
              isOpen &&
                level > 0 &&
                "max-sm:rotate-[45deg] border-(--basecolor)",
            )}
          />
        </button>
      </div>
      {/* DESKTOP SUBMENU */}
      {!isMobile && (
        <div
          className={cn(
            "w-full h-auto transition-all duration-250 ease-out absolute z-50",
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
            {level === 0 && (
              <div className="absolute -z-10 left-6 -top-1 w-2 h-2 rotate-45 bg-white" />
            )}
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
            "grid transition-[grid-template-rows] duration-300 ease-out",
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <div
              className={cn(
                "ml-3 mb-1",
                "border-l border-white/10",
                "transition-opacity duration-300",
                isOpen ? "opacity-100" : "opacity-0",
              )}
            >
              {item.children.map((child) => (
                <NavigationMenu
                  key={child?.id}
                  item={child}
                  level={level + 1}
                  className={"text-sm text-black hover:text-(--basecolor2)"}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
