import Link from "next/link";
import { mainNavigation } from "@/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { Search, Globe, FileText, User, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const { topBar, mainMenu } = mainNavigation.data.attributes;

  return (
    <header className="w-full flex flex-col z-50">
      {/* Top Red Bar */}
      <div className="bg-[#9b1d20] text-white text-xs py-1 px-4 flex justify-end items-center gap-4">
        <div className="flex gap-2">
          {topBar
            .filter((t) => t.highlight)
            .map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className="bg-[#f05c2a] hover:bg-orange-600 px-3 py-1 text-white font-medium"
              >
                {item.label}
              </Link>
            ))}
        </div>
        <div className="flex items-center gap-4 border-l border-red-800 pl-4">
          <Link
            href="/tour"
            className="flex items-center gap-1 hover:text-gray-200"
          >
            Virtual Tour <Globe className="w-3 h-3" />
          </Link>
          <span className="text-red-800">|</span>
          <Link
            href="/brochure"
            className="flex items-center gap-1 hover:text-gray-200"
          >
            E-Brochure <FileText className="w-3 h-3" />
          </Link>
          <span className="text-red-800">|</span>
          <Link
            href="/login"
            className="flex items-center gap-1 hover:text-gray-200"
          >
            Login <User className="w-3 h-3" />
          </Link>
          <div className="flex items-center gap-1 cursor-pointer">
            EN <ChevronDown className="w-3 h-3" />
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Main Header Area with gradient/transparent background */}
      <div className="relative w-full bg-black/40 backdrop-blur-sm flex flex-col px-6 py-4">
        {/* Logos & Badges Row */}
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
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
            <img src="/images/naac-a-plus.png" alt="NAAC A+" className="h-12" />
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
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto mt-6">
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
    </header>
  );
}
