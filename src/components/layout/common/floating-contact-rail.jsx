import Image from "next/image";

const items = [
  {
    id: 1,
    label: "Download brochure",
    href: "#!",
    icon: "/images/icon-float-brochure.svg",
    className: "bg-linear-to-r from-(--basecolor) to-(--basecolor2)",
  },
  {
    id: 2,
    label: "Chat on WhatsApp",
    href: "#!",
    icon: "/images/icon-float-whatsapp.svg",
    className: "bg-[#089949]",
  },
  {
    id: 3,
    label: "Call us",
    href: "#!",
    icon: "/images/icon-float-phone.svg",
    className: "bg-[#DA3A3C]",
  },
  {
    id: 4,
    label: "Share",
    href: "#!",
    icon: "/images/icon-float-share.svg",
    className: "bg-[#7800DA]",
  },
  {
    id: 5,
    label: "360° virtual tour",
    href: "#!",
    icon: "/images/icon-float-360.svg",
    className: "bg-[#007DC5]",
  },
];

export default function FloatingContactRail() {
  return (
    <div className="fixed right-2.5 md:right-3 xl:right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2 xl:gap-2.5 3xl:gap-3.5">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.href}
          aria-label={item.label}
          className={`size-9 xl:size-10 3xl:size-12 rounded-full flex items-center justify-center shadow-[0px_3px_5px_-3px_rgba(0,0,0,0.1),0px_8px_13px_-3px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-110 ${item.className}`}
        >
          <Image
            src={item.icon}
            alt=""
            width={20}
            height={20}
            className="size-4 xl:size-4.5 3xl:size-5"
          />
        </a>
      ))}
    </div>
  );
}
