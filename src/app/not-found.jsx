import Link from "next/link";

export const metadata = {
    title: "Page not found",
    robots: { index: false },
};

// Animated scene (replaces the GIF). Uses SVG animation, so no CSS or image file is needed.
function LostCapAnimation() {
    return (
        <svg viewBox="0 0 200 200" className="absolute inset-0 size-full" fill="none" aria-hidden="true">
            <defs>
                <linearGradient id="nf-brand" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#DC2626" />
                    <stop offset="1" stopColor="#F97316" />
                </linearGradient>
                <radialGradient id="nf-bg" cx="50%" cy="40%" r="75%">
                    <stop offset="0" stopColor="#FFFFFF" />
                    <stop offset="1" stopColor="#FFE9D2" />
                </radialGradient>
            </defs>

            {/* Background */}
            <rect width="200" height="200" fill="url(#nf-bg)" />

            {/* Shadow under the cap: shrinks as the cap rises */}
            <ellipse cx="100" cy="124" rx="30" ry="4.5" fill="#DC2626" opacity="0.14">
                <animate
                    attributeName="rx"
                    values="30;22;30"
                    dur="2.4s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keyTimes="0;0.5;1"
                    keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
                />
            </ellipse>

            {/* Graduation cap: floats up and down with a slight tilt */}
            <g>
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0 0; 0 -12; 0 0"
                    dur="2.4s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keyTimes="0;0.5;1"
                    keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
                />
                <g transform="translate(47 36) scale(2.2)">
                    <g>
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            values="-5 24 24; 5 24 24; -5 24 24"
                            dur="2.4s"
                            repeatCount="indefinite"
                            calcMode="spline"
                            keyTimes="0;0.5;1"
                            keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
                        />
                        <path d="M24 9 3 19l21 10 21-10L24 9Z" fill="url(#nf-brand)" />
                        <path
                            d="M11 24.5V32c0 2.6 5.8 5.5 13 5.5S37 34.6 37 32v-7.5L24 30.7 11 24.5Z"
                            fill="#DC2626"
                            opacity="0.8"
                        />
                        <path d="M43 20.5V32" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
                        <circle cx="43" cy="34" r="2.5" fill="#F97316" />
                    </g>
                </g>
            </g>

            {/* Magnifying glass: sweeps left and right, searching */}
            <g>
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="62 152; 138 152; 62 152"
                    dur="3.2s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keyTimes="0;0.5;1"
                    keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
                />
                <line x1="13" y1="13" x2="31" y2="31" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round" />
                <circle cx="0" cy="0" r="19" fill="#FFFFFF" fillOpacity="0.55" stroke="url(#nf-brand)" strokeWidth="6" />
                <path d="M-9 -5 A11 11 0 0 1 -2 -11" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
            </g>

            {/* Question marks fading in and out */}
            <g fontFamily="system-ui, sans-serif" fontWeight="800" fill="#F97316">
                <text x="34" y="62" fontSize="24" opacity="0">
                    ?
                    <animate attributeName="opacity" values="0;1;0" dur="2.4s" begin="0s" repeatCount="indefinite" />
                </text>
                <text x="152" y="58" fontSize="30" opacity="0">
                    ?
                    <animate attributeName="opacity" values="0;1;0" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
                </text>
                <text x="162" y="112" fontSize="20" opacity="0">
                    ?
                    <animate attributeName="opacity" values="0;1;0" dur="2.4s" begin="1.6s" repeatCount="indefinite" />
                </text>
            </g>
        </svg>
    );
}

export default function NotFound() {
    return (
        <section className="relative flex   w-full items-center overflow-hidden bg-[#FFF9F2] py-[200px_100px] 2xl:py-[250px_100px] 3xl:py-[300px_100px] ">
            {/* Soft brand glow behind the number */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[18%] size-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.22)_0%,rgba(220,38,38,0.08)_45%,transparent_70%)] lg:size-[620px] 2xl:size-[760px]"
            />

            <div className="container relative z-10 ">
                <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
                    {/* 4 [animation] 4  (everything inside is sized in em from the font-size below) */}
                    <div
                        aria-hidden="true"
                        className="flex select-none items-center justify-center text-[110px] font-extrabold leading-none tracking-[-0.04em] sm:text-[150px] lg:text-[200px] 2xl:text-[260px]"
                    >
                        <span className="bg-linear-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent">
                            4
                        </span>

                        {/* Gradient ring + round animation */}
                        <span className="mx-[0.03em] block size-[0.72em] shrink-0 rounded-full bg-linear-to-r from-[#DC2626] to-[#F97316] p-[0.025em] shadow-[0_10px_40px_rgba(220,38,38,0.25)]">
                            <span className="relative block size-full overflow-hidden rounded-full bg-white">
                                <LostCapAnimation />
                            </span>
                        </span>

                        <span className="bg-linear-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent">
                            4
                        </span>
                    </div>

                    <h1 className="mt-2 text-[26px] font-bold leading-tight text-[#1a1a1a] md:text-[30px] lg:text-[35px] 2xl:mt-[10px] 2xl:text-[42px]">
                        This page took a different path
                    </h1>

                    <p className="mt-3 max-w-[560px] text-[14px] leading-[1.7] text-[#555] lg:text-[16px] 2xl:mt-[18px] 2xl:max-w-[620px] 2xl:text-[18px] 2xl:leading-[29px]">
                        The page you are looking for may have moved, been renamed or no longer exists. Check the
                        address, or continue from one of the links below.
                    </p>

                    {/* Primary actions */}
                    <div className="mt-6 flex  flex-col items-center gap-3 w-auto sm:flex-row lg:mt-8 2xl:mt-[36px] 2xl:gap-[14px]">
                        <Link
                            href="/"
                            className="inline-flex h-[44px] w-full items-center justify-center rounded-[3px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) px-7 text-[15px] font-medium text-white transition-opacity duration-300 hover:opacity-90 sm:w-auto 2xl:h-[50px] 2xl:px-[34px] 2xl:text-[18px]"
                        >
                            Back to Home
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex h-[44px] w-full items-center justify-center rounded-[3px] border border-(--basecolor) bg-white px-7 text-[15px] font-medium text-(--basecolor) transition-colors duration-300 hover:bg-(--basecolor) hover:text-white sm:w-auto 2xl:h-[50px] 2xl:px-[34px] 2xl:text-[18px]"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}