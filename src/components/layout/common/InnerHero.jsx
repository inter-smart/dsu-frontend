import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";
import AiAcademicMenubar from "@/components/sections/ai-enabled/Ai-academicMenubar";
import AiBSCMenubar from "@/components/sections/ai-enabled/BSC-nursing/bsc-Menubar";
import PlacementmenuBar from "@/components/sections/placements/PlacementmenuBar";
import AdmissionMenubar from "@/components/sections/admission/admissionMenubar";
import InternationalMenubar from "@/components/sections/international/InternationalMenubar";

// Extracts the 11-character video id from any common YouTube link
// (watch?v=, youtu.be/, /embed/, /shorts/, /live/) or a bare id. Returns "" when not YouTube.
function getYouTubeId(input) {
  const value = typeof input === "string" ? input : input?.url;
  if (typeof value !== "string") return "";
  const text = value.trim();
  if (/^[\w-]{11}$/.test(text)) return text;
  const match = text.match(
    /(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/|v\/)|youtu\.be\/)([\w-]{11})/i
  );
  return match ? match[1] : "";
}

// placementMenuItems: optional [{ label, href }] for the Placement pill menu (otherwise it loads its own)
// className: optional extra classes for the hero <section> (e.g. a page-specific hook)
export default function InnerHero({ data, placementMenuItems, className }) {
  if (!data) return null;
  const isVideo = data?.heroMedia?.mime?.includes("video");
  // YouTube: add a text field (e.g. youtubeUrl) in Strapi. A YouTube link in heroMedia.url also works.
  const youtubeId = getYouTubeId(
    data?.youtubeUrl || data?.youtube || data?.heroYoutube || data?.heroVideoUrl || data?.heroMedia?.url
  );
  const breadcrumb =
    Array.isArray(data.breadcrumb) && data.breadcrumb.length > 0
      ? data.breadcrumb
      : [{ label: "Home", href: "/" }, ...(data.title ? [{ label: data.title }] : [])];
  const hasMenubar = Boolean(
    data?.menuBar ||
      data?.AimenuBar ||
      data?.AiBscmenuBar ||
      data?.PlacementmenuBar ||
      data?.admissionMenubar || // was missing
      data?.internationalMenuItems?.length > 1
  );

  // Full class strings so Tailwind can detect them.
  // Menubar variant adds ~70px at lg+ (menubar is hidden below lg).
  const heightClass = hasMenubar
    ? "h-[330px] lg:h-[450px] xl:h-[450px] 2xl:h-[520px] 3xl:h-[820px]"
    : "h-[330px] xl:h-[350px] 2xl:h-[450px] 3xl:h-[750px]";

  return (
    <section className={cn("relative z-0 block w-full", heightClass, className)}>
      {/* Background Media */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <div className="absolute inset-0 z-10 bg-black/25" />

        {youtubeId ? (
          // YouTube background: muted, looping, no controls, scaled to cover like object-cover
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
            style={{ containerType: "size" }}
          >
            {/* poster / banner image shown behind the video while it loads */}
            {(data?.posterImage?.url || (!isVideo && data?.heroMedia?.url)) && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={data?.posterImage?.url || data.heroMedia.url}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&iv_load_policy=3`}
              title={data?.heroMedia?.alternativeText || data?.title || "Hero video"}
              tabIndex={-1}
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              loading="eager"
              className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 border-0"
              style={{
                width: "max(100cqw, calc(100cqh * 16 / 9))",
                height: "max(100cqh, calc(100cqw * 9 / 16))",
              }}
            />
          </div>
        ) : isVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={data?.posterImage?.url || undefined}
            className="h-full w-full object-cover"
          >
            <source src={data?.heroMedia?.url} type={data?.heroMedia?.mime} />
          </video>
        ) : (
          data?.heroMedia?.url && (
            <Image
              src={data.heroMedia.url}
              alt={data?.heroMedia?.alternativeText || data?.title || "Hero image"}
              width={1920}
              height={750}
              priority
              className="h-full w-full object-cover"
            />
          )
        )}
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full w-full flex-col justify-end">
        <div
          className={`container flex w-full flex-col justify-end overflow-hidden pt-[40px] xl:pt-[55px] 2xl:pt-[65px] 3xl:pt-[80px] ${
            hasMenubar
              ? "pb-[40px] lg:pb-0"
              : "pb-[40px] xl:pb-[55px] 2xl:pb-[65px] 3xl:pb-[80px]"
          }`}
        >
          {/* Breadcrumb */}
          {breadcrumb.length > 0 && (
            <Breadcrumb className="mb-0">
              <BreadcrumbList className="gap-2">
                {breadcrumb.map((item, index) => {
                  const isLast = index === breadcrumb.length - 1;

                  return (
                    <Fragment key={`${item.label}-${index}`}>
                      <BreadcrumbItem>
                        {isLast ? (
                          <BreadcrumbPage className="text-[10px] font-semibold text-white xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px]">
                            {item.label}
                          </BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink
                            render={<Link href={item.href || "#"} />}
                            className="text-[10px] font-light text-white transition-opacity hover:text-white hover:opacity-70 xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px]"
                          >
                            {item.label}
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>

                      {!isLast && (
                        <BreadcrumbSeparator>
                          <span className="block h-[7px] w-[7px] rounded-full bg-gradient-to-r from-[#DC2626] to-[#F97316]" />
                        </BreadcrumbSeparator>
                      )}
                    </Fragment>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
          )}

          {/* Title */}
          {data?.title && (
            <h1 className="w-full text-[18px] font-bold leading-tight text-white sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-[40px] 3xl:text-[60px]">
              {data.title}
            </h1>
          )}
        </div>

        <div className="max-lg:hidden">
          {data?.menuBar && (
            <AcademicMenubar
              slug={data.slug}
              hasDepartments={data.hasDepartments}
              items={data.menuItems}
              homeHref={data.menuHome}
            />
          )}
          {data?.AimenuBar && <AiAcademicMenubar data={data.menuItems} />}
          {data?.AiBscmenuBar && <AiBSCMenubar items={data.menuItems} title={data.title} />}
          {data?.PlacementmenuBar && <PlacementmenuBar />}
          {data?.admissionMenubar && <AdmissionMenubar />}
          {data?.internationalMenuItems && <InternationalMenubar items={data.internationalMenuItems} />}
        </div>
      </div>
    </section>
  );
}