import Image from "next/image";
import { cn } from "@/lib/utils";

export function SliderArrow({ dir, onClick, label, className = "" }) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={label}
            className={cn("w-[30px] h-[38px] shrink-0 border border-[#D9D9D9] dark:border-white/10 flex items-center justify-center transition-opacity duration-500 hover:opacity-50 cursor-pointer", className)}
        >
            <Image
                src={dir === "prev" ? "/images/left-arrow-button.svg" : "/images/right-arrow-button.svg"}
                width={10}
                height={18}
                alt=""
                className="w-[9px] h-auto"
            />
        </button>
    );
}

export function FilterPill({ active, onClick, children }) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={active}
            className={`group shrink-0 p-[2px] rounded-[10px] h-[38px] 2xl:h-[42px] 3xl:h-[48px] whitespace-nowrap transition-all duration-300 cursor-pointer ${active
                ? "bg-linear-to-r from-(--basecolor) to-(--basecolor2)"
                : "bg-linear-to-r from-[rgba(220,38,38,0.2)] to-[rgba(249,115,22,0.2)] hover:from-(--basecolor) hover:to-(--basecolor2)"
                }`}
        >
            <span
                className={`flex items-center justify-center h-full px-[18px] 2xl:px-[24px] 3xl:px-[38px] rounded-[8px] text-[13px] 2xl:text-[15px] 3xl:text-[18px] font-medium transition-colors duration-300 ${active
                    ? "text-white"
                    : "bg-white dark:bg-[#1f1f1f] text-[#212121] dark:text-white group-hover:text-(--basecolor)"
                    }`}
            >
                {children}
            </span>
        </button>
    );
}
