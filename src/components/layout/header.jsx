import Link from "next/link";
import { mainNavigation } from "@/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { Search, Globe, FileText, User, ChevronDown } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Text_1 =
  "text-[10.6px] 2xl:text-[12.8px] 3xl:text-[16px] leading-none font-medium text-white";

export default function Header() {
  const { topBar, mainMenu } = mainNavigation.data.attributes;

  return (
    <header className="w-full flex flex-col z-50">
      {/* Top Red Bar */}
      <div className="w-full bg-linear-to-r from-[#450A03] via-[#7F1D1D] to-[#B91C1C]">
        <div className="container">
          <div className="flex justify-end items-center gap-[12px] 2xl:gap-[17px] 3xl:gap-[20px]">
            <BtnSmall label="CDSIMER" slug="/" />
            <BtnSmall label="DSU Online" slug="/" />
            <BtnSmall2
              label="Virtual Tour"
              slug="/"
              icon="/images/icon-home.svg"
            />
            <BtnSmall2
              label="E-Brochure"
              slug="/"
              icon="/images/icon-brochure.svg"
            />
            <BtnSmall2 label="Login" slug="/" icon="/images/icon-user.svg" />
            <BtnSmall2 label="EN" slug="/" icon="/images/icon-dropdown.svg" />
            <ThemeToggle />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="relative w-full bg-black/40 backdrop-blur-sm flex flex-col py-4">
          {/* Logos & Badges Row */}
          <div className="flex items-center justify-between w-full">
            {/* Logos */}
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/images/brand-logo.svg"
                  alt="DSU Logo"
                  className="w-[242px] h-auto block"
                  width={242}
                  height={78}
                />
              </Link>
              <div className="h-12 w-px bg-white/20"></div>
              <Image
                src="/images/naac-logo.png"
                alt="naac Logo"
                className="w-[115px] h-auto block"
                width={115}
                height={51}
              />
              <div className="h-12 w-px bg-white/20"></div>
              <div className="text-white text-sm font-light leading-tight">
                India's AI-First
                <br />
                University
              </div>
            </div>

            {/* Excellence Badges & CTA */}
            <div className="flex items-center gap-2">
              <div className="border border-white/30 text-white px-4 py-2 text-sm font-medium">
                NVIDIA's AI Architecture
              </div>
              <div className="border border-white/30 text-white px-4 py-2 text-sm font-medium">
                AI-First @ DSU
              </div>
              <div className="border border-white/30 text-white px-4 py-2 text-sm font-medium">
                Centres of Excellence
              </div>
              <div className="flex bg-[#f05c2a] text-white overflow-hidden ml-2 relative">
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
            <button className="text-white hover:text-orange-400">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function BtnSmall({ label, slug }) {
  return (
    <Link
      href={slug}
      className={cn(
        Text_1,
        "w-full h-[17px] 2xl:h-[20px] 3xl:h-[25px] bg-linear-to-r from-[#DC2626] to-[#F97316] rounded-[4px] px-2 flex justify-center items-center",
      )}
    >
      <span>{label}</span>
    </Link>
  );
}
function BtnSmall2({ label, slug, icon }) {
  return (
    <Link
      href={slug}
      className={cn(
        Text_1,
        "w-full h-[17px] 2xl:h-[20px] 3xl:h-[25px] bg-none flex justify-center items-center gap-2",
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
