import Link from "next/link";
import Image from "@/components/ui/safe-image";
import { buttonVariants } from "@/components/ui/button";
import { safeHref } from "@/lib/utils";

const ALIGN = { left: "justify-start", center: "justify-center", right: "justify-end" };

function IntlButton({ button }) {
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
export default function IntlButtonSection({ data }) {
    const buttons = data.buttons || [data];

    return (
        <section className="py-[15px] xl:py-[25px] 3xl:py-[35px]">
            <div className={`container flex flex-wrap gap-[12px] xl:gap-[18px] ${ALIGN[data.alignment] || ALIGN.left}`}>
                {buttons.map((button, i) => <IntlButton key={i} button={button} />)}
            </div>
        </section>
    );
}
