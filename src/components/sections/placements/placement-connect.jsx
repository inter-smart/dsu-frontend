import React from "react";

export default function PlacementConnect({ data }) {
    if (!data) return null;

    const {
        heading = "Contact us",
        subheading = "Dayananda Sagar Placements | Contact us for placement queries at Dayananda Sagar University, Bangalore",
        contactGroups = [],
    } = data;

    return (
        <section className="relative py-[30px] sm:py-[40px] lg:py-[50px] xl:py-[70px] 2xl:py-[90px] 3xl:py-[140px] bg-white dark:bg-[#0f1011] transition-colors duration-300">
            <div className="container">
                {/* Header: Title and Subtitle */}
                <div className="mb-[30px] sm:mb-[36px] xl:mb-[44px]">
                    {heading && (
                        <h1 className="cmn_Title tracking-tight">
                            {heading}
                        </h1>
                    )}
                    {subheading && (
                        <p className="text_1 dark:text-[#9CA3AF] mt-2 leading-relaxed">
                            {subheading}
                        </p>
                    )}
                </div>

                {/* Contact Groups */}
                {contactGroups && contactGroups.length > 0 && (
                    <div className="space-y-[35px] sm:space-y-[45px] xl:space-y-[55px]">
                        {contactGroups.map((group) => (
                            <div key={group.id || group.heading} className="w-full">
                                {/* Group Heading */}
                                {group.heading && (
                                    <h2 className="text-[18px] sm:text-[20px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] font-bold text-[#1F1F1F] dark:text-white mb-2 sm:mb-2.5">
                                        {group.heading}
                                    </h2>
                                )}

                                {/* Group Description (e.g., list of degree programs) */}
                                {group.description && (
                                    <p className="cmn_Txt font-semibold text-[#1F1F1F] dark:text-[#E2E8F0] leading-[1.6] mb-5 sm:mb-6 xl:mb-7">
                                        {group.description}
                                    </p>
                                )}

                                {/* Cards Grid */}
                                {group.contacts && group.contacts.length > 0 && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-4 3xl:gap-5">
                                        {group.contacts.map((contact) => (
                                            <div
                                                key={contact.id || contact.name}
                                                className="w-full bg-[linear-gradient(180deg,#FFF8EE_0%,#FFF3E0_100%)] dark:bg-[linear-gradient(180deg,#231A14_100%,#231A14_100%)] border border-[#E7E1D8] border-b-3 dark:border-[#38281F] rounded-[4px] sm:rounded-[6px] xl:rounded-[8px] p-5 sm:p-6 xl:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-md"
                                            >
                                                {/* Top: Name & Designation */}
                                                <div>
                                                    <h3 className="cmn_Txt font-bold text-[#212121] dark:text-white leading-tight mb-[8px]">
                                                        {contact.name}
                                                    </h3>
                                                    {contact.designation && (
                                                        <div className="text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] font-normal bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit">
                                                            {contact.designation}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Horizontal Divider */}
                                                <div className="w-full h-[1px] bg-[#EAD8CA] dark:bg-[#38281F] my-2 sm:my-5" />

                                                {/* Bottom: Contact Details (E-Mail, Phone, etc.) */}
                                                {contact.details && contact.details.length > 0 && (
                                                    <div className="flex flex-col gap-1.5 sm:gap-2">
                                                        {contact.details.map((detail) => (
                                                            <div
                                                                key={detail.id || detail.label}
                                                                className="text_1 text-[#1F1F1F] dark:text-white leading-relaxed flex flex-wrap items-baseline"
                                                            >
                                                                <span className="text_1 font-bold text-[#212121] dark:text-white mr-2 shrink-0">
                                                                    {detail.label}
                                                                </span>

                                                                {detail.values && Array.isArray(detail.values) ? (
                                                                    <span className="flex flex-wrap items-center">
                                                                        {detail.values.map((valObj, valIdx) => (
                                                                            <React.Fragment key={valIdx}>
                                                                                {valIdx > 0 && (
                                                                                    <span className="mx-1.5 text_1 text-[#4A5565] dark:text-[#64748B]">
                                                                                        |
                                                                                    </span>
                                                                                )}
                                                                                {valObj.href ? (
                                                                                    <a
                                                                                        href={valObj.href}
                                                                                        className="text_1 text-[#4A5565] dark:text-[#CBD5E1] hover:text-(--basecolor) hover:underline transition-colors font-medium"
                                                                                    >
                                                                                        {valObj.value}
                                                                                    </a>
                                                                                ) : (
                                                                                    <span className="text_1 text-[#4A5565] dark:text-[#CBD5E1] font-medium">
                                                                                        {valObj.value}
                                                                                    </span>
                                                                                )}
                                                                            </React.Fragment>
                                                                        ))}
                                                                    </span>
                                                                ) : detail.href ? (
                                                                    <a
                                                                        href={detail.href}
                                                                        className="text-[#374151] dark:text-[#CBD5E1] hover:text-(--basecolor) hover:underline transition-colors font-medium"
                                                                    >
                                                                        {detail.value}
                                                                    </a>
                                                                ) : (
                                                                    <span className="text-[#374151] dark:text-[#CBD5E1] font-medium">
                                                                        {detail.value}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
