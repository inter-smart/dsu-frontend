import { ctaLinkProps } from "@/lib/schools/link-props";

// CMS-driven button ({ label, url, isExternal }); renders nothing when the link is empty.
export default function AcademicCta({ cta, className = "" }) {
    if (!cta?.url) return null;

    return (
        <a
            href={cta.url}
            {...ctaLinkProps(cta)}
            className={`group relative flex h-[30px] w-fit min-w-[140px] 2xl:min-w-[162px] items-center justify-center gap-[10px] overflow-hidden rounded-[4px] bg-gradient-to-r from-[#DC2626] to-[#F97316] text_1 font-bold capitalize text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)] xl:h-[35px] 2xl:h-[40px] 3xl:h-[50px] px-[10px] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full ${className}`}
        >
            <span className="relative z-[1] transition-transform duration-300">{cta.label}</span>
            <div className="relative z-[1] flex h-[13px] w-[15px] items-center justify-center transition-all duration-300 group-hover:translate-x-[4px] group-hover:scale-110">
                <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.68348" cy="1.37879" r="1.37879" fill="white" />
                    <circle cx="7.68348" cy="6.49988" r="1.37879" fill="white" />
                    <circle cx="7.68348" cy="11.621" r="1.37879" fill="white" />
                    <circle cx="13.9843" cy="6.49988" r="1.37879" fill="white" />
                    <circle cx="1.37879" cy="6.49988" r="1.37879" fill="white" />
                </svg>
            </div>
        </a>
    );
}
