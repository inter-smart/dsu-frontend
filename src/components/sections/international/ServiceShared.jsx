import { Play } from "lucide-react";

// Gradient ring with an outlined number
export function NumberBadge({ number }) {
    return (
        <span className="flex size-[64px] shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#E8302A] to-[#F97316] p-[1.5px] lg:size-[76px] 2xl:size-[92px]">
            <span className="flex size-full items-center justify-center rounded-full bg-[#FFF4E8] text-[26px] font-medium leading-none text-[#FFF4E8] [-webkit-text-stroke:1px_#F2C3A4] lg:text-[32px] 2xl:text-[40px]">
                {number}
            </span>
        </span>
    );
}

export function Eyebrow({ children }) {
    return (
        <p className="text-[13px] uppercase leading-tight tracking-[0.08em] text-[#E8402A] lg:text-[15px] 2xl:text-[18px]">
            {children}
        </p>
    );
}

export const sectionTitleClass =
    "text-[22px] font-semibold leading-tight tracking-[-0.03em] text-[#1a1a1a] lg:text-[28px] 2xl:text-[32px]";
export const bodyClass = "text-[14px] leading-[1.6] text-[#444] lg:text-[16px] 2xl:text-[18px] 2xl:leading-[29px]";

export default function SectionHeader({ number, eyebrow, title, description }) {
    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:gap-6 2xl:gap-[25px]">
            <NumberBadge number={number} />
            <div className="min-w-0">
                <Eyebrow>{eyebrow}</Eyebrow>
                <h2 className={`mt-0.5 ${sectionTitleClass}`}>{title}</h2>
                {description && <p className={`mt-1 ${bodyClass}`}>{description}</p>}
            </div>
        </div>
    );
}

// The parent needs the "group" class
export function PlayButton() {
    return (
        <span className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#333] backdrop-blur-[2px] transition-transform duration-300 group-hover:scale-110">
            <Play className="size-4 fill-current pl-0.5" />
        </span>
    );
}

export const toneClass = { blue: "bg-[#F2F6FC]", white: "bg-white" };