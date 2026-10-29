import Link from "next/link";

export default function CtaBanner({ data }) {
    const { text, prompt, link } = data;

    return (
        <section className="w-full bg-white py-8 lg:py-10 2xl:py-[60px]">
            <div className="container">
                <div className="rounded-[10px] bg-linear-to-b from-[#FFF7EB] to-[#FEF3E4] px-5 py-8 text-center lg:px-10 lg:py-12 2xl:px-[60px] 2xl:py-[62px]">
                    <p className="mx-auto text-[14px] leading-[1.7] text-[#444] lg:text-[16px] 2xl:text-[18px] 2xl:leading-[29px]">
                        {text}
                    </p>

                    <p className="mt-3 text-[14px] leading-[1.7] text-[#444] lg:text-[16px] 2xl:mt-[9px] 2xl:text-[18px] 2xl:leading-[29px]">
                        {prompt}{" "}
                        <Link
                            href={link.href}
                            className="font-medium text-[#F97316] no-underline! transition-opacity duration-300 hover:opacity-80"
                        >
                            {link.label}
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}