import Link from "next/link";
import { mainNavigation } from "@/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { Search, Globe, FileText, User, ChevronDown } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Text_1 =
  "text-[10.6px] 2xl:text-[12.8px] 3xl:text-[16px] leading-none font-medium tracking-tight text-white";
const Text_2 =
  "text-[12px] 2xl:text-[14.4px] 3xl:text-[18px] leading-none font-normal tracking-tight text-white";

export default function Header() {
  const { topBar, mainMenu } = mainNavigation.data.attributes;

  return (
    <header className="w-full h-(--header-y) fixed z-10 top-0 inset-x-0 bg- flex flex-col">
      <div className="w-full bg-linear-to-r from-[#450A03] via-[#7F1D1D] to-[#B91C1C] py-1">
        <div className="container">
          <div className="border border-red-500 flex justify-end items-center gap-[12px] 2xl:gap-[17px] 3xl:gap-[20px]">
            <Btn1 label="CDSIMER" slug="/" />
            <Btn1 label="DSU Online" slug="/" />
            <Btn2 label="Virtual Tour" slug="/" icon="/images/icon-home.svg" />
            <div className="w-[1px] h-[14px] 2xl:h-[18px] 3xl:h-[22px] bg-white/20" />
            <Btn2
              label="E-Brochure"
              slug="/"
              icon="/images/icon-brochure.svg"
            />
            <div className="w-[1px] h-[14px] 2xl:h-[18px] 3xl:h-[22px] bg-white/20" />
            <Btn2 label="Login" slug="/" icon="/images/icon-user.svg" />
            <div className="w-[1px] h-[14px] 2xl:h-[18px] 3xl:h-[22px] bg-white/20" />
            <Btn2 label="EN" slug="/" icon="/images/icon-dropdown.svg" />
            <div className="w-[1px] h-[14px] 2xl:h-[18px] 3xl:h-[22px] bg-white/20" />
            <ThemeToggle />
          </div>
        </div>
      </div>
      <div className="w-full bg-linear-to-r from-[#450A03]/10 via-[#7F1D1D]/10 to-[#B91C1C]/10">
        <div className="container">
          <div className="border border-red-500  relative w-full flex flex-col py-4">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center gap-3">
                  <Image
                    src="/images/brand-logo.svg"
                    alt="DSU Logo"
                    className="w-[164px] 2xl:w-[193px] 3xl:w-[242px] h-auto block"
                    width={242}
                    height={78}
                  />
                </Link>
                <div className="h-12 w-px bg-white/20"></div>
                <Image
                  src="/images/naac-logo.png"
                  alt="naac Logo"
                  className="w-[73px] 2xl:w-[92px] 3xl:w-[115px] h-auto block"
                  width={115}
                  height={51}
                />
                <div className="h-12 w-px bg-white/20"></div>
                <div className={cn(Text_2, "text-center")}>
                  India's AI-First
                  <br />
                  University
                </div>
              </div>

              <div className="flex items-center gap-[6.6px] 2xl:gap-[8px] 3xl:gap-[10px]">
                <Btn3 label="NVIDIA's AI Architecture" slug="/" />
                <Btn3 label="AI-First @ DSU" slug="/" />
                <Btn3 label="Centres of Excellence" slug="/" />
                <div className="rounded-[4px] flex bg-linear-to-r from-[#DC2626] to-[#F97316] overflow-hidden">
                  <div className="absolute top-0 right-1/2 translate-x-1/2 text-[10px] font-bold bg-white text-[#f05c2a] px-2 rounded-b shadow-sm z-10">
                    Apply Here
                  </div>
                  <Link
                    href="/apply/nri"
                    className="px-4 py-3 text-sm font-medium hover:bg-orange-600 pt-5"
                  >
                    NRI/Foreigners
                  </Link>
                  <div className="w-px bg-white/20"></div>
                  <Link
                    href="/apply/others"
                    className="px-4 py-3 text-sm font-medium hover:bg-orange-600 pt-5"
                  >
                    Others
                  </Link>
                </div>
              </div>
            </div>

            {/* Navigation Menu Row */}
            <div className="flex items-center justify-between w-full mt-6">
              <Link href="/" className="text-white hover:text-orange-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </Link>
              <nav className="flex items-center gap-6 text-white text-sm font-medium">
                {mainMenu.map((item) => (
                  <Link
                    key={item.id}
                    href={item.url}
                    className="flex items-center gap-1 hover:text-orange-400 transition-colors"
                  >
                    {item.label}{" "}
                    {item.label.includes("Academics") && (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Link>
                ))}
              </nav>
              <button className="border-0 bg-none text-white hover:text-orange-400">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Btn1({ label, slug }) {
  return (
    <Link
      href={slug}
      className={cn(
        Text_1,
        "h-[17px] 2xl:h-[20px] 3xl:h-[25px] bg-linear-to-r from-[#DC2626] to-[#F97316] rounded-[4px] flex justify-center items-center px-2.5 xl:px-[12px] 2xl:px-[14px] 3xl:px-[17px]",
      )}
    >
      <span>{label}</span>
    </Link>
  );
}
function Btn2({ label, slug, icon }) {
  return (
    <Link
      href={slug}
      className={cn(
        Text_1,
        "h-[17px] 2xl:h-[20px] 3xl:h-[25px] bg-none flex justify-center items-center gap-2 px-2.5 xl:px-[12px] 2xl:px-[14px] 3xl:px-[17px]",
      )}
    >
      <span>{label}</span>
      {icon && (
        <Image
          src={icon}
          alt={label}
          width={20}
          height={20}
          className="size-[15px] 2xl:size-[16px] 3xl:size-[18px]"
        />
      )}
    </Link>
  );
}

function Btn3({ label, slug }) {
  return (
    <Link
      href={slug}
      className={cn(
        Text_1,
        "h-[35px] 2xl:h-[42px] 3xl:h-[52px] bg-none border border-[#D1D5DC]/50 rounded-[4px] flex justify-center items-center gap-2 px-2.5 xl:px-[12px] 2xl:px-[14px] 3xl:px-[18px]",
      )}
    >
      <span>{label}</span>
    </Link>
  );
}
