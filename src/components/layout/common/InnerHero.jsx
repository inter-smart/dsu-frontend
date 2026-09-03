import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";

export default function InnerHero({ data }) {
  const isVideo = data?.heroMedia?.mime?.includes("video");

  return (
    <section className="relative block h-[350px] w-full md:h-[450px] xl:h-[500px] 2xl:h-[600px] 3xl:h-[750px]">
      {/* Background Media */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <div className="absolute inset-0 z-10 bg-black/40" />

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
      <div className=" relative z-20 flex w-full flex-col justify-end h-full">
        <div
          className={`flex container w-full flex-col justify-end overflow-hidden pt-[40px] xl:pt-[55px] 2xl:pt-[65px] 3xl:pt-[80px] ${data?.menuBar ? "pb-[40px] md:pb-0" : "pb-[40px] xl:pb-[55px] 2xl:pb-[65px] 3xl:pb-[80px]"
            }`}
        >
          {/* Breadcrumb */}
          {data?.breadcrumb?.length > 0 && (
            <Breadcrumb className="mb-3 md:mb-5">
              <BreadcrumbList className="gap-2">
                {data.breadcrumb.map((item, index) => {
                  const isLast = index === data.breadcrumb.length - 1;

                  return (
                    <Fragment key={`${item.label}-${index}`}>
                      <BreadcrumbItem>
                        {isLast ? (
                          <BreadcrumbPage className="text-[10px] xl:text-[12px]2xl:text-[14px] 3xl:text-[18px] font-semibold text-white">
                            {item.label}
                          </BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink asChild className="text-[10px] xl:text-[12px]2xl:text-[14px] 3xl:text-[18px] font-light text-white transition-opacity hover:text-white hover:opacity-70">
                            <Link href={item.href || "#"}>{item.label}</Link>
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>

                      {!isLast && (
                        <BreadcrumbSeparator>
                          <span className="block w-[7px] h-[7px] rounded-full bg-gradient-to-r from-[#DC2626] to-[#F97316]" />
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
            <h1 className="w-full text-[18px] font-bold leading-[1] text-white sm:text-[22px] md:text-[26px] lg:text-[32px]  xl:text-[40px] 3xl:text-[60px]">
              {data.title}
            </h1>
          )}
        </div>
        <div className="max-md:hidden">
          {data?.menuBar && (
            <AcademicMenubar />
          )}
        </div>
      </div>

    </section>
  );
}