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

// placementMenuItems: optional [{ label, href }] for the Placement pill menu (otherwise it loads its own)
// className: optional extra classes for the hero <section> (e.g. a page-specific hook)
export default function InnerHero({ data, placementMenuItems, className }) {
  if (!data) return null;
  const isVideo = data?.heroMedia?.mime?.includes("video");
  const breadcrumb =
    Array.isArray(data.breadcrumb) && data.breadcrumb.length > 0
      ? data.breadcrumb
      : [{ label: "Home", href: "/" }, ...(data.title ? [{ label: data.title }] : [])];
  const hasMenubar = Boolean(
    data?.menuBar ||
      data?.AimenuBar ||
      data?.AiBscmenuBar ||
      data?.PlacementmenuBar ||
      data?.admissionMenubar // was missing
  );

  // Full class strings so Tailwind can detect them.
  // Menubar variant adds ~70px at lg+ (menubar is hidden below lg).
  const heightClass = hasMenubar
    ? "h-[330px] lg:h-[450px] xl:h-[450px] 2xl:h-[520px] 3xl:h-[820px]"
    : "h-[330px] xl:h-[350px] 2xl:h-[450px] 3xl:h-[750px]";

  return (
    <section className={`relative z-0 block w-full ${heightClass}`}>
      {/* Background Media */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <div className="absolute inset-0 z-10 bg-black/25" />

        {isVideo ? (
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
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
                            asChild
                            className="text-[10px] font-light text-white transition-opacity hover:text-white hover:opacity-70 xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px]"
                          >
                            <Link href={item.href || "#"}>{item.label}</Link>
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
          {data?.menuBar && <AcademicMenubar />}
          {data?.AimenuBar && <AiAcademicMenubar />}
          {data?.AiBscmenuBar && <AiBSCMenubar />}
          {data?.PlacementmenuBar && <PlacementmenuBar />}
          {data?.admissionMenubar && <AdmissionMenubar />}
        </div>
      </div>
    </section>
  );
}