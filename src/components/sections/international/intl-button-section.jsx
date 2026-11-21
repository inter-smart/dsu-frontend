import Link from "next/link";
import Image from "@/components/ui/safe-image";
import { buttonVariants } from "@/components/ui/button";
import { safeHref } from "@/lib/utils";
import { isStructured } from "./intl-structured-text";

export function IntlButton({ button }) {
    const newTab = button.isExternal || button.isFile;
    return (
        <Link
            href={safeHref(button.url)}
            target={newTab ? "_blank" : undefined}
            rel={newTab ? "noopener noreferrer" : undefined}
            className={buttonVariants({ variant: "default", size: "default" })}
        >
            {button.label}
            <Image
                src={button.icon?.url || "/images/icon-btn.svg"}
                alt=""
                width={15}
                height={15}
                className="size-3.75"
                data-icon="inline-end"
            />
        </Link>
    );
}

// International flexible section: one button, or a row of buttons (data.buttons), each with an uploaded icon.
export default function IntlButtonSection({ data, prev, prevData }) {
    const buttons = data.buttons || [data];
    // Under a plain text block (the "About DSU" closer) the text section already draws these buttons in its panel
    if (prev === "international.text-section" && !prevData?.profile && !isStructured(prevData?.description)) return null;

    return (
        <section className="py-[10px_30px] xl:py-[14px_40px] 3xl:py-[20px_60px]">
            <div className={`container flex flex-wrap gap-[12px] xl:gap-[18px]`}>
                {buttons.map((button, i) => <IntlButton key={i} button={button} />)}
            </div>
        </section>
    );
}
