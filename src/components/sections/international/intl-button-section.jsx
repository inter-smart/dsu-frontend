import Link from "next/link";
import Image from "@/components/ui/safe-image";
import { buttonVariants } from "@/components/ui/button";
import { safeHref } from "@/lib/utils";

const ALIGN = { left: "justify-start", center: "justify-center", right: "justify-end" };

// International flexible section: one button with an uploaded icon; links to a URL or an uploaded file.
export default function IntlButtonSection({ data }) {
    const newTab = data.isExternal || data.isFile;

    return (
        <section className="py-[15px] xl:py-[25px] 3xl:py-[35px]">
            <div className={`container flex ${ALIGN[data.alignment] || ALIGN.left}`}>
                <Link
                    href={safeHref(data.url)}
                    target={newTab ? "_blank" : undefined}
                    rel={newTab ? "noopener noreferrer" : undefined}
                    className={buttonVariants({ variant: "default", size: "default" })}
                >
                    {data.label}
                    <Image
                        src={data.icon?.url || "/images/icon-btn.svg"}
                        alt=""
                        width={15}
                        height={15}
                        className="size-3.75"
                        data-icon="inline-end"
                    />
                </Link>
            </div>
        </section>
    );
}
