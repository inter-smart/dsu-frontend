"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import PhoneNumbers from "@/components/ui/phone-numbers";
import { BlocksRenderer } from "@/components/ui/blocks-renderer";

export default function AdmissionContact({ data }) {
  const contactData = data;
  const heading = contactData?.heading;
  const description = contactData?.description;
  const mainOffice = contactData?.mainOffice;
  const campuses =
    contactData?.campuses &&
    contactData.campuses.length > 0 &&
    contactData.campuses;

  const visitCampus = contactData?.visitCampus;
  const visitCampuses = visitCampus?.campuses || [];

  const addressCol =
    mainOffice?.columns?.find((col) =>
      col.label?.toUpperCase().includes("ADDRESS"),
    ) || mainOffice?.columns?.[0];
  const helplineCol =
    mainOffice?.columns?.find((col) =>
      col.label?.toUpperCase().includes("HELPLINE"),
    ) || mainOffice?.columns?.[1];
  const emailCol =
    mainOffice?.columns?.find((col) =>
      col.label?.toUpperCase().includes("EMAIL"),
    ) || mainOffice?.columns?.[2];

  // Server tags each button with its slot; styling follows the slot, not the order.
  const enquireBtn = mainOffice?.buttons?.find((b) => b.variant === "primary");
  const whatsappBtn = mainOffice?.buttons?.find(
    (b) => b.variant === "secondary",
  );

  return (
    <section className="[--text-color:#212121] dark:[--text-color:#ffffff] w-full h-auto py-10 sm:py-12.5 lg:py-17.5 2xl:py-22.5 3xl:py-27.5 bg-white dark:bg-[#101010] block">
      <div className="container">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 xl:mb-10">
          <h2 className="cmn_Title leading-[1.15] font-bold text-(--text-color) tracking-tight">
            {heading}
          </h2>

          {description && (
            <div className="typography mt-2.5 2xl:mt-3 text_1 leading-relaxed text-[#4A5565] dark:text-[#9CA3AF] max-w-4xl">
              {Array.isArray(description) ? (
                <BlocksRenderer
                  content={description}
                  blocks={{
                    paragraph: ({ children }) => (
                      <p className="!my-0 !text-inherit leading-relaxed text_1">
                        {children}
                      </p>
                    ),
                  }}
                />
              ) : (
                <p className="!my-0 !text-inherit leading-relaxed  text_1">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Administrative & Main Admission Office Banner */}
        {mainOffice && (
          <div className="w-full bg-[#FFF7EE] dark:bg-[#18191B] border border-[#FED7AA]/50 dark:border-white/10 rounded-[8px] sm:rounded-[10px] 2xl:rounded-[14px] p-[20px_15px_15px_15px] sm:p-[25px_20px_20px_20px] lg:p-[30px_25px_25px_25px] 2xl:p-[40px_35px_35px_30px] 3xl:p-[50px_45px_45px_40px] mb-8 sm:mb-10 xl:mb-12">
            {/* Banner Title & Subtitle */}
            <div className="w-full h-auto mb-3.75 sm:mb-5 flex justify-between flex-wrap">
              <div className="w-auto">
                <h3 className="text-base sm:text-lg lg:text-xl 2xl:text-[25px] 3xl:text-[32px] leading-[1.1] font-semibold text-(--text-color)">
                  {mainOffice.heading}
                </h3>
                {mainOffice.subtitle && (
                  <p className="text_1 leading-[1.1] font-normal text-[#4A5565] dark:text-[#9CA3AF] mt-1.5 sm:mt-2 ">
                    {mainOffice.subtitle}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-3.5">
                {enquireBtn && (
                  <Link
                    href={enquireBtn.href || "#"}
                    target={enquireBtn.isExternal ? "_blank" : undefined}
                    rel={enquireBtn.isExternal ? "noopener noreferrer" : undefined}
                    className="group relative inline-flex h-[36px] sm:h-[40px] xl:h-[44px] 3xl:h-[50px] items-center justify-center gap-[10px] overflow-hidden rounded-[5px] bg-gradient-to-r from-[#DC2626] to-[#F97316] px-[20px] sm:px-[24px] text_1 font-bold capitalize text-white transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.35)] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full"
                  >
                    <span className="relative z-[1] transition-transform duration-300">
                      {enquireBtn.label}
                    </span>

                    <div className="relative z-[1] flex h-[13px] w-[15px] items-center justify-center transition-all duration-300 group-hover:translate-x-[3px] group-hover:scale-110">
                      <svg
                        width="11"
                        height="9"
                        viewBox="0 0 11 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300 group-hover:rotate-180"
                      >
                        <circle
                          cx="5.12232"
                          cy="0.919192"
                          r="0.919192"
                          fill="white"
                        />
                        <circle
                          cx="5.12232"
                          cy="4.33325"
                          r="0.919192"
                          fill="white"
                        />
                        <circle
                          cx="5.12232"
                          cy="7.74732"
                          r="0.919192"
                          fill="white"
                        />
                        <circle
                          cx="9.32349"
                          cy="4.33325"
                          r="0.919192"
                          fill="white"
                        />
                        <circle
                          cx="0.919192"
                          cy="4.33325"
                          r="0.919192"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </Link>
                )}

                {whatsappBtn && (
                  <Link
                    href={whatsappBtn.href || "#"}
                    target={whatsappBtn.isExternal ? "_blank" : undefined}
                    rel={whatsappBtn.isExternal ? "noopener noreferrer" : undefined}
                    className="group relative flex h-[36px] sm:h-[40px] xl:h-[44px] 3xl:h-[50px]  w-fit items-center justify-center gap-[10px] overflow-hidden rounded-[6px] bg-gradient-to-r from-[#DC2626] to-[#F97316] text_1 font-bold capitalize text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)] xl:h-[35px]  2xl:h-[40px] 2xl:gap-[10px] 2xl:rounded-[4px] 3xl:h-[50px] p-[1px] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full"
                  >
                    <div className="w-full bg-[#FFF7EE] h-full overflow-hidden rounded-[4px] flex items-center gap-[10px] px-6">
                      <span className="relative z-[1] text-black transition-transform duration-300 w-full  ">
                        {whatsappBtn.label}
                      </span>

                      <div className="relative z-[1] flex h-[25px] w-[25px] items-center justify-center transition-all duration-300 group-hover:translate-x-[4px] group-hover:scale-110">
                        <svg
                          className="w-full h-full object-cover"
                          viewBox="0 0 17 17"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_5987_109481)">
                            <path
                              d="M0.337077 16.1797C0.247414 16.1797 0.160449 16.144 0.096404 16.0779C0.00404493 15.9835 -0.0249437 15.8446 0.0229212 15.7213L1.27887 12.455C0.440896 11.1532 0 9.64781 0 8.08984C0 3.62897 3.62897 0 8.08984 0C12.5507 0 16.1797 3.62897 16.1797 8.08984C16.1797 12.5507 12.5507 16.1797 8.08984 16.1797C6.57704 16.1797 5.10402 15.7577 3.82043 14.9568L0.450335 16.1601C0.413256 16.1736 0.375504 16.1797 0.337077 16.1797ZM3.8629 14.2469C3.92762 14.2469 3.99166 14.2651 4.04694 14.3015C5.25368 15.0896 6.65187 15.5062 8.08984 15.5062C12.1786 15.5062 15.5055 12.1793 15.5055 8.09052C15.5055 4.00178 12.1786 0.674828 8.08984 0.674828C4.0011 0.674828 0.674154 4.00178 0.674154 8.09052C0.674154 9.57231 1.10966 11.0029 1.93482 12.2271C1.99617 12.3181 2.00898 12.4341 1.96988 12.5366L0.915501 15.2783L3.74964 14.2664C3.78605 14.2536 3.82447 14.2469 3.8629 14.2469Z"
                              fill="#212121"
                            />
                            <path
                              d="M10.1104 12.1328C9.05126 12.1328 7.01801 10.8661 6.16386 10.0119C5.3097 9.1571 4.04297 7.12385 4.04297 6.06543C4.04297 4.976 4.96993 4.04297 5.72835 4.04297H6.40251C6.5306 4.04297 6.6479 4.11578 6.70453 4.23106C6.7052 4.23173 7.11104 5.0569 7.37666 5.57465C7.67598 6.15914 7.11306 6.84677 6.79284 7.17104C6.90745 7.46497 7.17509 8.04744 7.65171 8.52407C8.12834 9.0007 8.71081 9.26901 9.00474 9.38294C9.32833 9.06204 10.016 8.49845 10.6011 8.79912C11.1189 9.06541 11.9434 9.47058 11.944 9.47058C12.06 9.52788 12.1328 9.64519 12.1328 9.77327V10.4474C12.1328 11.2065 11.1991 12.1328 10.1104 12.1328ZM5.72835 4.71712C5.34746 4.71712 4.71712 5.34746 4.71712 6.06543C4.71712 6.84677 5.81869 8.71216 6.64116 9.53462C7.5398 10.4333 9.38766 11.4587 10.1104 11.4587C10.8283 11.4587 11.4587 10.8283 11.4587 10.4474V9.98294C11.1823 9.84676 10.6605 9.58788 10.293 9.39912C10.1353 9.31418 9.65597 9.65193 9.35193 9.99642C9.26496 10.0948 9.12946 10.1326 9.00541 10.0969C8.96294 10.0847 7.96452 9.78945 7.17509 9.00002C6.38565 8.21059 6.09105 7.21217 6.07824 7.16969C6.04183 7.0443 6.08161 6.90947 6.17869 6.82318C6.52251 6.51914 6.85823 6.04183 6.77599 5.88139C6.5879 5.51532 6.3297 4.99353 6.19352 4.71712H5.72835Z"
                              fill="#212121"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_5987_109481">
                              <rect
                                width="16.1797"
                                height="16.1797"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            </div>

            {/* 3 White Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3.5 2xl:gap-5 mb-5 sm:mb-6">
              {/* Address Card */}
              {addressCol && (
                <div className="bg-white dark:bg-[#202225] rounded-[6px] 2xl:rounded-[8px] p-4 sm:p-5 2xl:p-6 border border-black/10 dark:border-white/10 flex flex-col justify-between shadow-xs">
                  <div className="text_1 font-semibold tracking-wider text-[#212121] dark:text-gray-400 uppercase mb-2">
                    {addressCol.label}
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-[13px] 2xl:text-[15px] 3xl:text-[18px] leading-snug font-normal text-[#4A5565] dark:text-gray-200">
                      {addressCol.value?.includes("Bengaluru") ? (
                        <>
                          <span>
                            {addressCol.value.split("Bengaluru")[0].trim()}
                          </span>
                          <br />
                          <span>
                            Bengaluru{addressCol.value.split("Bengaluru")[1]}
                          </span>
                        </>
                      ) : (
                        addressCol.value
                      )}
                    </div>
                    {addressCol.directions && (
                      <Link
                        href={addressCol.directions.href || "/"}
                        aria-label="Get Directions"
                        className="group inline-flex items-center shrink-0"
                      >
                        <div className="w-5 2xl:w-6 3xl:w-7 h-auto aspect-35/25 overflow-hidden flex items-center justify-center">
                          <Image
                            src="/images/direction-icon.svg"
                            alt="Directions"
                            width={35}
                            height={25}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text_1 leading-[1.1] font-semibold bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit pl-1.5 transition-all duration-300 group-hover:underline">
                          {addressCol.directions.label}
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              )}

              {/* Admissions Helpline Card */}
              {helplineCol && (
                <div className="bg-white dark:bg-[#202225] rounded-[6px] 2xl:rounded-[8px] p-4 sm:p-5 2xl:p-6 border border-black/10 dark:border-white/10 flex flex-col justify-between shadow-xs">
                  <div className="text_1 font-semibold tracking-wider text-[#212121] dark:text-gray-400 uppercase mb-3">
                    {helplineCol.label}
                  </div>
                  <div className="text_1 leading-snug font-normal text-[#4A5565] dark:text-gray-200 flex flex-col gap-1">
                    {helplineCol.values?.map((item, idx) => (
                      <PhoneNumbers
                        key={idx}
                        value={item.value}
                        className="w-fit"
                        linkClassName="hover:text-(--basecolor) transition-colors hover:underline"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Email Card */}
              {emailCol && (
                <div className="bg-white dark:bg-[#202225] rounded-[6px] 2xl:rounded-[8px] p-4 sm:p-5 2xl:p-6 border border-black/10 dark:border-white/10 flex flex-col  shadow-xs">
                  <div className="text_1 tracking-wider font-semibold text-[#212121] dark:text-gray-400 uppercase mb-2">
                    {emailCol.label}
                  </div>
                  <div className="text_1 leading-snug font-normal text-[#4A5565] dark:text-gray-200">
                    {emailCol.values?.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href || `mailto:${item.value}`}
                        className="hover:text-(--basecolor) transition-colors hover:underline break-all"
                      >
                        {item.value}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        )}

        {/* Campus Cards Grid (Exact font size & styling matching contact.jsx) */}
        {/* Campus Cards Grid */}
<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2.5 lg:gap-3.75 2xl:gap-5">
  {(campuses || [])?.map((item, index) => {
    const iconUrl = item?.icon?.url;

    return (
      <div
        key={item?.id || index}
        className="w-full h-full flex flex-col bg-white dark:bg-[#18191B] border border-black/10 dark:border-white/10 rounded-[7px] 2xl:rounded-[12px] overflow-hidden"
      >
        {/* Accent bar */}
        <div className="w-full h-1 bg-linear-to-r from-(--basecolor) to-(--basecolor2)" />

        {/* Header */}
        <div className="w-full p-4 sm:p-5 lg:p-6 2xl:p-7.5 3xl:p-9">
          <div className="[--icon-size:40px] sm:[--icon-size:44px] lg:[--icon-size:50px] 2xl:[--icon-size:58px] 3xl:[--icon-size:68px] w-full flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
            <div className="w-(--icon-size) h-(--icon-size) shrink-0 p-2 2xl:p-2.5 rounded-[8px] 2xl:rounded-[12px] bg-(--basecolor)/10 flex items-center justify-center">
              {iconUrl && (
                <Image
                  src={iconUrl}
                  alt={item?.icon?.alternativeText || ""}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            <div className="min-w-0">
              <div className="text-lg sm:text-xl lg:text-[24px] 2xl:text-[30px] 3xl:text-[36px] leading-[1.1] font-bold text-(--text-color)">
                {item?.name}
              </div>
              <div className="mt-0.5 text-sm sm:text-base lg:text-lg 2xl:text-xl 3xl:text-2xl leading-[1.2] font-medium text-[#4A5565] dark:text-[#9CA3AF]">
                {item?.subtitle}
              </div>
            </div>
          </div>

          <div className="text_1 leading-snug font-normal text-[#4A5565] dark:text-[#9CA3AF]">
            {item?.address}
          </div>

          {item?.directions && (
            <Link
              href={item?.directions?.href || "/"}
              aria-label="Get Directions"
              target="_blank"
              className="group mt-3 lg:mt-4 inline-flex items-center gap-1.5 py-1.5 pl-2.5 pr-4 rounded-full border border-black/10 dark:border-white/15 transition-colors duration-300 hover:border-(--basecolor) hover:bg-(--basecolor)/5"
            >
              <div className="w-5.5 2xl:w-6.5 h-auto aspect-35/25 shrink-0 overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/direction-icon.svg"
                  alt="Directions"
                  width={35}
                  height={25}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text_1 leading-[1.1] font-semibold bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent">
                {item?.directions?.label}
              </span>
            </Link>
          )}
        </div>

        {/* Contact panel */}
        <div className="w-full flex-1 px-4 sm:px-5 lg:px-6 2xl:px-7.5 3xl:px-9 py-1 bg-[#F7F8FA] dark:bg-white/3 border-t border-black/10 dark:border-white/10">
          <div className="w-full divide-y divide-black/10 dark:divide-white/10">
            {/* Email */}
            {item?.email && (
              <div className="w-full flex items-start gap-3 py-2.5 lg:py-3">
                <div className="w-8 lg:w-9 2xl:w-10 h-auto aspect-square shrink-0 p-1.75 2xl:p-2 rounded-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center">
                  <Image
                    src="/images/contact-inner-icon-1.svg"
                    alt="Email Icon"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain dark:invert"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm 2xl:text-base leading-[1.2] font-medium text-[#4A5565] dark:text-[#9CA3AF] mb-0.5">
                    {item.email.label}
                  </div>
                  <div className="text_1 leading-snug font-semibold text-[#212121] dark:text-white flex flex-wrap gap-y-0.5">
                    {item.email.values?.map((emailVal, idx) => (
                      <span
                        key={idx}
                        className="pr-3 mr-3 border-r border-black/20 dark:border-white/25 last:pr-0 last:mr-0 last:border-r-0"
                      >
                        <Link
                          href={emailVal.href || `mailto:${emailVal.value}`}
                          className="break-all transition-colors hover:underline hover:text-(--basecolor)"
                        >
                          {emailVal.value}
                        </Link>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Phone contacts */}
            {item?.contacts?.map((contact, cIdx) => (
              <div
                key={contact?.id || cIdx}
                className="w-full flex items-start gap-3 py-2.5 lg:py-3"
              >
                <div className="w-8 lg:w-9 2xl:w-10 h-auto aspect-square shrink-0 p-1.75 2xl:p-2 rounded-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center">
                  <Image
                    src="/images/contact-inner-icon-2.svg"
                    alt="Phone Icon"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain dark:invert"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm 2xl:text-base leading-[1.2] font-medium text-[#4A5565] dark:text-[#9CA3AF] mb-1.5">
                    {contact.label}
                  </div>
                  <div className="text_1 leading-snug font-medium text-[#212121] dark:text-white flex flex-wrap gap-y-0.5">
                    {contact.values?.map((phoneVal, vIdx) => (
                      <span
                        key={vIdx}
                        className="pr-3 mr-3 border-r border-black/20 dark:border-white/25 last:pr-0 last:mr-0 last:border-r-0"
                      >
                        <PhoneNumbers
                          value={phoneVal.value}
                          linkClassName="transition-colors hover:underline hover:text-(--basecolor)"
                        />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  })}
</div>

        {visitCampuses.length > 0 && (
          <>
            {/* Divider before Visit Campus */}
            <div className="w-full h-[1px] bg-[#E5E7EB] dark:bg-white/10 my-8 sm:my-10 lg:my-14" />

            {/* Visit Campus Section */}
            <div className="w-full h-auto">
              <div className="mb-6 sm:mb-8">
                {visitCampus?.heading && (
                  <h2 className="text-2xl sm:text-3xl lg:text-[36px] 2xl:text-[42px] 3xl:text-[48px] leading-[1.15] font-bold text-(--text-color) tracking-tight">
                    {visitCampus.heading}
                  </h2>
                )}
                {visitCampus?.description && (
                  <p className="mt-2 sm:mt-2.5 text_1 leading-relaxed text-[#4A5565] dark:text-[#9CA3AF] ">
                    {visitCampus.description}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 lg:gap-5">
                {visitCampuses.map((visitItem, vIdx) => (
                  <Link
                    key={visitItem.id || vIdx}
                    href={visitItem.href || visitItem.directions?.href || "/"}
                    target="_blank"
                    className="group flex items-center justify-between bg-white dark:bg-[#18191B] border border-[#FED7AA]/60 dark:border-white/10 hover:border-[#EA580C]/40 rounded-[6px] sm:rounded-[8px] px-4 sm:px-5 py-3 sm:py-3.5 transition-all duration-200 shadow-2xs hover:shadow-xs"
                  >
                    <span className="text_1 font-semibold text-[#1E1E1E] dark:text-white leading-tight">
                      {visitItem.name}
                    </span>
                    <span className="text_1 font-semibold text-[#EA580C] group-hover:text-[#C2410C] transition-colors leading-tight">
                      Get Directions &gt;
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
