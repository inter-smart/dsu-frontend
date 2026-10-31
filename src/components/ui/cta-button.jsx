import Link from "next/link";
import Image from "@/components/ui/safe-image";
import { buttonVariants } from "@/components/ui/button";
import { safeHref } from "@/lib/utils";

// A CMS button ({ label, url, target }). Renders nothing when it is switched off or has no label or link.
export default function CtaButton({ button, icon = "/images/icon-btn.svg", className }) {
  if (!button?.label || !button?.url) return null;

  const newTab = button.target === "_blank";

  return (
    <Link
      href={safeHref(button.url)}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={buttonVariants({
        variant: "default",
        size: "default",
        className,
      })}
    >
      {button.label}
      <Image
        src={icon}
        alt=""
        width={15}
        height={15}
        className="size-3.75"
        data-icon="inline-end"
      />
    </Link>
  );
}
