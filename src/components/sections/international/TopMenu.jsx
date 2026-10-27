import Link from "next/link";

export default function TopMenu({ data }) {
    return (
        <nav
            aria-label="Page sections"
            className="sticky top-0 z-30 w-full border-b border-black/10 bg-white"
        >
            <div className="container">
                <ul className="flex items-stretch overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {data.map((item) => (
                        <li
                            key={item.id}
                            className="relative flex flex-auto shrink-0 after:absolute after:right-0 after:top-1/2 after:h-[55%] after:w-px after:-translate-y-1/2 after:bg-black/10 last:after:hidden"
                        >
                            <Link
                                href={item.href}
                                className="flex w-full items-center justify-center whitespace-nowrap px-5 py-4 text-center text-[14px] font-medium text-[#111] transition-colors duration-300 hover:bg-linear-to-r hover:from-(--basecolor) hover:to-(--basecolor2) hover:bg-clip-text hover:text-transparent lg:py-5 lg:text-[15px] 2xl:py-[28px] 2xl:text-[18px]"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}