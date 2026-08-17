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

export default function InnerHero({ data }) {
  const isVideo = data?.heroMedia?.mime?.includes("video");

  return (
    <section className="relative block h-[300px] w-full md:h-[400px] xl:h-[500px] 2xl:h-[600px] 3xl:h-[750px]">
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
      <div className="container relative z-20 h-full">
        <div className="flex h-full w-full flex-col justify-end overflow-hidden py-[40px] xl:py-[55px] 2xl:py-[65px] 3xl:py-[80px]">
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
            <h1 className="w-full max-w-[260px] text-[18px] font-bold leading-[1] text-white sm:text-[22px] md:text-[26px] lg:text-[32px] xl:max-w-[325px] xl:text-[40px] 2xl:max-w-[390px] 2xl:text-[48px] 3xl:max-w-[500px] 3xl:text-[60px]">
              {data.title}
            </h1>
          )}
        </div>
      </div>
    </section>
  );
}