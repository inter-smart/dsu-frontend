"use client";
import Link from "next/link";
import { ctaLinkProps } from "@/lib/schools/link-props";
import Image from "next/image";
import { Text } from "../ui/text";
import PhoneNumbers from "../ui/phone-numbers";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const DEFAULT_SOCIAL_ICONS = {
  facebook: { light: "/images/social-icon-1.svg", dark: "/images/social-icon-1-dark.svg" },
  twitter: { light: "/images/social-icon-2.svg", dark: "/images/social-icon-2-dark.svg" },
  x: { light: "/images/social-icon-2.svg", dark: "/images/social-icon-2-dark.svg" },
  instagram: { light: "/images/social-icon-3.svg", dark: "/images/social-icon-3-dark.svg" },
  linkedin: { light: "/images/social-icon-4.svg", dark: "/images/social-icon-4-dark.svg" },
  youtube: { light: "/images/social-icon-5.svg", dark: "/images/social-icon-5-dark.svg" },
};

const local_data = {
  logo: {
    light: {
      url: "/images/dsu-footer-logo.svg",
      alternativeText: "DSU Logo",
    },
    dark: {
      url: "/images/dsu-footer-logo-dark.svg",
      alternativeText: "DSU Logo",
    },
  },
  description:
    "Empowering minds. Transforming lives. Building an Al-driven future through innovation, research and excellence",
  socialLinks: [
    {
      id: 1,
      link: "/",
      icon: {
        light: "/images/social-icon-1.svg",
        dark: "/images/social-icon-1-dark.svg",
        alternativeText: "Facebook",
      },
    },
    {
      id: 2,
      link: "/",
      icon: {
        light: "/images/social-icon-2.svg",
        dark: "/images/social-icon-2-dark.svg",
        alternativeText: "Twitter",
      },
    },
    {
      id: 3,
      link: "/",
      icon: {
        light: "/images/social-icon-3.svg",
        dark: "/images/social-icon-3-dark.svg",
        alternativeText: "Instagram",
      },
    },
    {
      id: 4,
      link: "/",
      icon: {
        light: "/images/social-icon-4.svg",
        dark: "/images/social-icon-4-dark.svg",
        alternativeText: "LinkedIn",
      },
    },
    {
      id: 5,
      link: "/",
      icon: {
        light: "/images/social-icon-5.svg",
        dark: "/images/social-icon-5-dark.svg",
        alternativeText: "Youtube",
      },
    },
  ],
  topRow: [
    {
      title: "ADMISSION CORNER",
      items: [
        [{ text: "Admissions details", href: "#" }],
        [{ text: "DSAT Admissions - Apply Online", href: "#" }],
        [{ text: "Direct Admissions - Apply Online", href: "#" }],
        [{ text: "Course Eligibility & Fee Structure", href: "#" }],
      ],
    },
    {
      title: "ADMISSIONS HELPLINE",
      items: [
        [
          { text: "Email: " },
          {
            text: "admissions@dsu.edu.in",
            href: "mailto:admissions@dsu.edu.in",
            bold: true,
          },
        ],
        [
          { text: "Phone: " },
          { text: "080 46461800", href: "tel:08046461800", bold: true },
          { text: " / " },
          { text: "+91 6366885507", href: "tel:+916366885507", bold: true },
        ],
        [{ text: "INTERNATIONAL ADMISSIONS", innerTitle: true }],
        [
          { text: "Phone: " },
          { text: "+91 9606022152", href: "tel:+919606022152", bold: true },
          { text: " / " },
          { text: "+91 9606022150", href: "tel:+919606022150", bold: true },
          { text: " / " },
          { text: "+91 9606022149", href: "tel:+919606022149", bold: true },
        ],
      ],
    },
    {
      title: "REGIONAL PRESENCE",
      items: [
        [
          { text: "East Region: " },
          { text: "8240216553", href: "tel:8240216553", bold: true },
        ],
        [
          { text: "West Region: " },
          { text: "9741488001", href: "tel:9741488001", bold: true },
        ],
        [
          { text: "North Region: " },
          { text: "7488983636", href: "tel:7488983636", bold: true },
        ],
        [
          { text: "South Region: " },
          { text: "9962835358", href: "tel:9962835358", bold: true },
        ],
      ],
    },
  ],
  bottomRow: [  
    {
      title: "DSU MAIN CAMPUS:",
      items: [
        [
          {
            text: "Devarakaggalahalli,\nHarohalli, Kanakapura Road,\nBengaluru South Dt. – 562 112",
          },
        ],
        [
          {
            bold: true,
            text: "Email: ",
          },
          {
            text: "admissions@dsu.edu.in",
            href: "mailto:admissions@dsu.edu.in",
            bold: true,
          },
        ],
        [
          {
            bold: true,
            text: "Admissions Helpline: ",
          },
          { text: "080 46461800", href: "tel:08046461800", bold: true },
          { text: " / " },
          { text: "080 49092800", href: "tel:08049092800", bold: true },
        ],
        // ADDED: View Location (replace the map link with your exact one)
        [
          {
            text: "View Location",
            href: "https://www.google.com/maps/search/?api=1&query=Dayananda+Sagar+University+Harohalli",
            location: true,
            bold: true,
          },
        ],
      ],
    },
    {
      title: "DSU CITY INNOVATION CAMPUS:",
      items: [
        [
          {
            text: "Administrative & Main Admission office,\nKudlu Gate, Hosur Road,\nBengaluru - 560 114",
          },
        ],
        [
          {
            bold: true,
            text: "E-mail: ",
          },
          {
            text: "admissions@dsu.edu.in",
            href: "mailto:admissions@dsu.edu.in",
            bold: true,
          },
          { text: " | " },
          {
            text: "dsat@dsu.edu.in",
            href: "mailto:dsat@dsu.edu.in",
            bold: true,
          },
        ],
        [
          {
            bold: true,
            text: "Admissions Helpline: ",
          },
          { text: "080 46461800", href: "tel:08046461800", bold: true },
          { text: " / " },
          { text: "080 49092800", href: "tel:08049092800", bold: true },
          { text: " / " },
          { text: "+91 7760964277", href: "tel:+917760964277", bold: true },
          { text: " / " },
          { text: "8296316737", href: "tel:8296316737", bold: true },
          { text: " / " },
          { text: "6366885507", href: "tel:6366885507", bold: true },
        ],
        [
          {
            bold: true,
            text: "Office of Registrar: ",
          },
          {
            href: "tel:080 4909 2910 / 11",
            text: "080 4909 2910 / 11",
            bold: true,
          },
        ],
        [
          {
            bold: true,
            text: "Office of Dean (Engineering): ",
          },
          {
            href: "tel:+91 80 4909 2986 / 32 / 33",
            text: "+91 80 4909 2986 / 32 / 33",
            bold: true,
          },
        ],
        [
          {
            bold: true,
            text: "Dean - MBA: ",
          },
          {
            href: "tel:080 4909 2931",
            text: "080 4909 2931",
            bold: true,
          },
        ],
        [
          {
            bold: true,
            text: "Enquiry EMBA: ",
          },
          {
            href: "tel:080 4909 2930",
            text: "080 4909 2930",
            bold: true,
          },
        ],
        [
          {
            bold: true,
            text: "Research Cell: ",
          },
          {
            href: "tel:080 4909 2912",
            text: "080 4909 2912",
            bold: true,
          },
        ],
        // ADDED: View Location (replace the map link with your exact one)
        [
          {
            text: "View Location",
            href: "https://www.google.com/maps/search/?api=1&query=Dayananda+Sagar+University+Kudlu+Gate+Bengaluru",
            location: true,
            bold: true,
          },
        ],
      ],
    },
    {
      title: "DSU CITY ADMISSIONS OFFICE:",
      items: [
        [
          {
            text: "Gate 2, 6th Floor, University Building,\nDental Block, Kumaraswamy Layout,\nBengaluru - 560111",
          },
        ],
        [
          {
            bold: true,
            text: "E-mail: ",
          },
          {
            text: "enquiry@dsu.edu.in",
            href: "mailto:enquiry@dsu.edu.in",
            bold: true,
          },
          { text: " / " },
          {
            text: "admissions@dsu.edu.in",
            href: "mailto:admissions@dsu.edu.in",
            bold: true,
          },
        ],
        [
          {
            bold: true,
            text: "Admissions Helpline: ",
          },
          { text: "080 46461800", href: "tel:08046461800", bold: true },
          { text: " / " },
          { text: "080 49092800", href: "tel:08049092800", bold: true },
        ],
        // ADDED: View Location (replace the map link with your exact one)
        [
          {
            text: "View Location",
            href: "https://www.google.com/maps/search/?api=1&query=Dayananda+Sagar+University+Kumaraswamy+Layout+Bengaluru",
            location: true,
            bold: true,
          },
        ],
      ],
    },
  ],
  bottomLinks: [
    {
      id: 1,
      title: "AI & INNOVATION",
      links: [
        { label: "AI Factory", url: "#" },
        { label: "Centres of Excellence", url: "#" },
        { label: "Research Labs", url: "#" },
        { label: "Innovation Hub", url: "#" },
        { label: "Startups & Incubation", url: "#" },
        { label: "Funded Research Projects", url: "#" },
        { label: "Publications & Patents", url: "#" },
      ],
    },
    {
      id: 2,
      title: "STUDENT & ACADEMICS",
      links: [
        { label: "AI-Enabled Academics", url: "#" },
        { label: "Undergraduate Programs", url: "#" },
        { label: "Postgraduate Programs", url: "#" },
        { label: "Doctoral Studies", url: "#" },
        { label: "Schools & Deitemments", url: "#" },
        { label: "Academic Calendar", url: "#" },
        { label: "Examinations", url: "#" },
        { label: "International Programs", url: "#" },
      ],
    },
    {
      id: 3,
      title: "COMMUNITY",
      links: [
        { label: "Alumni Network", url: "#" },
        { label: "Testimonials", url: "#" },
        { label: "Student Stories", url: "#" },
        { label: "Clubs & Communities", url: "#" },
        { label: "Community Activities", url: "#" },
        { label: "Events & Workshops", url: "#" },
        { label: "Media Coverage", url: "#" },
        { label: "Gallery (Photo & Video)", url: "#" },
        { label: "News Letter", url: "#" },
      ],
    },
    {
      id: 4,
      title: "SUPPORT & CAREERS",
      links: [
        { label: "Placements & Careers", url: "#" },
        { label: "Current Openings", url: "#" },
        { label: "Recruit from DSU", url: "#" },
        { label: "Career Development", url: "#" },
        { label: "FAQs", url: "#" },
        { label: "Downloads", url: "#" },
        { label: "Contact Us", url: "#" },
        { label: "Enquiry Form", url: "#" },
      ],
    },
    {
      id: 5,
      title: "COMPLIANCE & QUICK LINKS",
      links: [
        { label: "IQAC", url: "#" },
        { label: "NIRF", url: "#" },
        { label: "NAAC", url: "#" },
        { label: "Anti Ragging Cell", url: "#" },
        { label: "Grievances", url: "#" },
        { label: "Ombudsperson", url: "#" },
        { label: "Ethics Committee", url: "#" },
        { label: "IT Policy", url: "#" },
        { label: "Institutional Development Plan", url: "#" },
        { label: "Annual Audit Reports", url: "#" },
        { label: "Mandatory Disclosures", url: "#" },
      ],
    },
  ],
  bottomLinks: [
    {
      id: 1,
      title: "AI & INNOVATION",
      links: [
        { label: "AI Factory", url: "#" },
        { label: "Centres of Excellence", url: "#" },
        { label: "Research Labs", url: "#" },
        { label: "Innovation Hub", url: "#" },
        { label: "Startups & Incubation", url: "#" },
        { label: "Funded Research Projects", url: "#" },
        { label: "Publications & Patents", url: "#" },
      ],
    },
    {
      id: 2,
      title: "STUDENT & ACADEMICS",
      links: [
        { label: "AI-Enabled Academics", url: "#" },
        { label: "Undergraduate Programs", url: "#" },
        { label: "Postgraduate Programs", url: "#" },
        { label: "Doctoral Studies", url: "#" },
        { label: "Schools & Deitemments", url: "#" },
        { label: "Academic Calendar", url: "#" },
        { label: "Examinations", url: "#" },
        { label: "International Programs", url: "#" },
      ],
    },
    {
      id: 3,
      title: "COMMUNITY",
      links: [
        { label: "Alumni Network", url: "#" },
        { label: "Testimonials", url: "#" },
        { label: "Student Stories", url: "#" },
        { label: "Clubs & Communities", url: "#" },
        { label: "Community Activities", url: "#" },
        { label: "Events & Workshops", url: "#" },
        { label: "Media Coverage", url: "#" },
        { label: "Gallery (Photo & Video)", url: "#" },
        { label: "News Letter", url: "#" },
      ],
    },
    {
      id: 4,
      title: "SUPPORT & CAREERS",
      links: [
        { label: "Placements & Careers", url: "#" },
        { label: "Current Openings", url: "#" },
        { label: "Recruit from DSU", url: "#" },
        { label: "Career Development", url: "#" },
        { label: "FAQs", url: "#" },
        { label: "Downloads", url: "#" },
        { label: "Contact Us", url: "#" },
        { label: "Enquiry Form", url: "#" },
      ],
    },
    {
      id: 5,
      title: "COMPLIANCE & QUICK LINKS",
      links: [
        { label: "IQAC", url: "#" },
        { label: "NIRF", url: "#" },
        { label: "NAAC", url: "#" },
        { label: "Anti Ragging Cell", url: "#" },
        { label: "Grievances", url: "#" },
        { label: "Ombudsperson", url: "#" },
        { label: "Ethics Committee", url: "#" },
        { label: "IT Policy", url: "#" },
        { label: "Institutional Development Plan", url: "#" },
        { label: "Annual Audit Reports", url: "#" },
        { label: "Mandatory Disclosures", url: "#" },
      ],
    },
  ],
};

export default function Footer({ data = local_data, brochures = [] }) {
  const [brochureId, setBrochureId] = useState("");
  const selectedBrochure = brochures.find((b) => b.id === brochureId);
  const handleDownload = async () => {
    if (!selectedBrochure) return;
    const { url, title } = selectedBrochure;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("download failed");
      const blobUrl = URL.createObjectURL(await res.blob());
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `${title} Brochure${(url.match(/\.[a-z0-9]+(?=$|\?)/i) || [".pdf"])[0]}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };
  const [openAccordion, setOpenAccordion] = useState(null);

  const [openGroup, setOpenGroup] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  return (
    <footer className="w-full h-auto pt-6.25 sm:pt-10 lg:pt-15 2xl:pt-17.5 3xl:pt-21.25 bg-linear-to-t from-[#FFF3E0] to-[#FFF8EE] dark:bg-none dark:bg-[#212121] block">
      <div className="container">
        <div className="[--width:100%] lg:[--width:250px] 2xl:[--width:280px] 3xl:[--width:350px] w-full h-auto sm:p-5 lg:p-7.5 2xl:p-10 3xl:p-12.5 bg-[#FFEACC] dark:bg-[#343434] rounded-[10px] lg:rounded-[7px] 2xl:rounded-[10px] dark:border dark:border-white/10 overflow-hidden flex flex-wrap">
          <div className="w-(--width) h-auto max-lg:mb-10 max-sm:mb-0 max-sm:p-5">
            <div className="w-72.5 lg:w-47.5 2xl:w-57.5 3xl:w-72.5 h-auto aspect-290/95 mb-3.75 lg:mb-5 2xl:mb-7.5 3xl:mb-10 overflow-hidden block">
              {data?.logo?.light?.url && (
                <Image
                  src={data?.logo?.light?.url}
                  alt={data?.logo?.light?.alternativeText || "DSU Logo"}
                  width={290}
                  height={95}
                  className="w-full h-full object-contain dark:hidden"
                />
              )}

              {data?.logo?.dark?.url && (
                <Image
                  src={data?.logo?.dark?.url}
                  alt={data?.logo?.dark?.alternativeText || "DSU Logo"}
                  width={290}
                  height={95}
                  className="w-full h-full object-contain hidden dark:block"
                />
              )}
            </div>

            {
              data?.description && (

            <Text
              size="p1"
              className="text-sm lg:text-[11px] 2xl:text-xs 3xl:text-base mb-3.75 2xl:mb-5"
            >
              {data?.description}
            </Text>
            )}
            <div className="w-full h-auto mb-7.5 sm:mb-12.5 lg:mb-15 2xl:mb-17.5 3xl:mb-22.5 gap-2.5 lg:gap-1.75 2xl:gap-2.5 flex flex-wrap">
              {data?.socialLinks?.length > 0 && data.socialLinks.map((item) => {
                // CMS icons may be empty (not uploaded yet): fall back to the bundled icon of that network
                const fallback = DEFAULT_SOCIAL_ICONS[item?.icon?.alternativeText?.toLowerCase()];
                const light = item?.icon?.light || fallback?.light;
                const dark = item?.icon?.dark || fallback?.dark;
                const label = item?.icon?.alternativeText || "Social link";
                return (
                <div key={item?.id} className="w-auto h-auto">
                  <Link
                    href={item?.link || "#"}
                    {...(item?.openInNewTab === false ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                    aria-label={label}
                    className="group w-11.25 lg:w-8.75 2xl:w-10 3xl:w-11.25 h-auto aspect-square p-2.5 lg:p-2 2xl:p-2.5 bg-black dark:bg-white rounded-[5px] overflow-hidden transition-colors duration-400 flex items-center justify-center hover:bg-linear-to-r hover:from-(--basecolor) hover:to-(--basecolor2)"
                  >
                    {light && (
                      <Image
                        src={light}
                        alt={label}
                        width={45}
                        height={45}
                        className="w-full h-full object-contain dark:hidden"
                      />
                    )}
                    {dark && (
                      <Image
                        src={dark}
                        alt={label}
                        width={45}
                        height={45}
                        className="w-full h-full object-contain hidden dark:block group-hover:filter-[brightness(0)_saturate(100%)_invert(100%)_sepia(0%)_saturate(7487%)_hue-rotate(66deg)_brightness(106%)_contrast(100%)]"
                      />
                    )}
                  </Link>
                </div>
                );
              })}
            </div>
            {brochures.length > 0 && (
            <div className="w-full h-auto block max-2xl:max-w-full">
              <div className="text-lg lg:text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-medium bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit mb-3.75 lg:mb-2.5 3xl:mb-3.75">
                DOWNLOAD BROCHURES
              </div>
              <div className="w-full h-auto mb-2.5">
                <Select className="w-full h-auto" value={brochureId} onValueChange={setBrochureId}>
                  <SelectTrigger aria-label="Select program" className="!text-sm lg:!text-xs 2xl:!text-[13px] 3xl:!text-base !font-light !text-black dark:!text-white w-full !h-11.25 lg:!h-8.75 3xl:!h-11.25 rounded-[5px] border-[#C7C7C7] [&>svg]:text-black dark:[&>svg]:text-white">
                    <SelectValue placeholder="Select Program">{selectedBrochure?.title}</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select Program</SelectLabel>
                      {brochures.map((b) => (
                        <SelectItem key={b.id} value={b.id}>
                          {b.title}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Button
                disabled={!selectedBrochure}
                onClick={handleDownload}
                className="w-full !h-10 rounded-[5px] lg:gap-2.5 2xl:gap-3.75"
              >
                <span className="w-4.25 h-auto aspect-square overflow-hidden block">
                  <Image
                    src={"/images/download-icon.svg"}
                    alt="Download Icon"
                    width={15}
                    height={15}
                    className="w-full h-full object-contain"
                  />
                </span>
                Download PDF
              </Button>
            </div>
            )}
          </div>
          <div className="w-(--width) lg:w-[calc(100%-var(--width))] max-sm:p-[10px_10px_25px_10px] lg:pl-10 xl:pl-15 2xl:pl-17.5 3xl:pl-22.5">
            {/* below lg: "Helpline" and "Contact" accordions with stacked cards; lg+: the original grids */}
            <FooterGroup
              title="Helpline"
              open={openGroup === "helpline"}
              onToggle={() => setOpenGroup(openGroup === "helpline" ? null : "helpline")}
              className="max-lg:mb-2.5 lg:pb-8.75 2xl:pb-10 3xl:pb-12.5 lg:mb-7.5 3xl:mb-10 lg:border-b lg:border-[#D4D4D4]"
              gridClassName="grid-cols-1 lg:grid-cols-3 gap-[25px] lg:gap-7.5 2xl:gap-10 3xl:gap-17.5"
            >
              {data?.topRow?.length > 0 && data.topRow.map((item, index) => (
                <LinkCard key={`top-${index}`} items={item} />
              ))}
            </FooterGroup>
            <FooterGroup
              title="Contact"
              open={openGroup === "contact"}
              onToggle={() => setOpenGroup(openGroup === "contact" ? null : "contact")}
              gridClassName="grid-cols-1 lg:grid-cols-3 gap-[25px] lg:gap-7.5 2xl:gap-10 3xl:gap-17.5"
            >
              {data?.bottomRow?.length > 0 && data.bottomRow.map((item, index) => (
                <LinkCard key={`bottom-${index}`} items={item} />
              ))}
            </FooterGroup>
          </div>
        </div>
        <div className="w-full h-auto my-[40px_30px] lg:my-[20px_30px] 2xl:my-[20px_40px] 3xl:my-[30px_50px] lg:border border-[#D4D4D4] lg:rounded-[7px] 2xl:rounded-[10px] overflow-hidden">
          <div className="w-full h-full grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.4fr)_minmax(0,0.85fr)_minmax(0,0.85fr)_minmax(0,1.15fr)] gap-1 lg:gap-1 2xl:gap-2 3xl:gap-2">
             {data?.bottomLinks.length>0 && data?.bottomLinks?.map((item, index) => (
              <div
                key={index}
                className="lg:[--gap:25px] 2xl:[--gap:30px] 3xl:[--gap:40px] w-full h-full p-[10px_15px] lg:py-(--gap) lg:first:pl-(--gap) max-lg:border max-lg:border-(--basecolor)/10 md:border-r lg:border-[#D4D4D4] lg:last:border-0 block"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full h-auto flex items-center justify-between"
                  aria-expanded={openAccordion === index}
                >
                  <div
                    className={`text-base lg:text-sm 2xl:text-[15px] 3xl:text-lg font-medium text-left bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit lg:mb-3.75 3xl:mb-5 uppercase ${openAccordion === index && "max-lg:mb-3.75"}`}
                  >
                    {item.title}
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#212121] dark:text-white lg:hidden transition-transform duration-300 ease-in-out ${
                      openAccordion === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:grid-rows-[1fr] ${
                    openAccordion === index
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="w-full h-auto block">
                      {item.links.map((item, index) => (
                        <li key={index}>
                          <Link
                            href={item?.url || "#"}
                            {...ctaLinkProps(item)}
                            className="text-[15px] lg:text-xs 2xl:text-[13px] 3xl:text-[15px] leading-[1.7] font-normal text-black dark:text-[#FFFF] py-2.5 lg:py-1.25 3xl:py-1.5 transition-colors duration-300 block hover:text-(--basecolor) dark:hover:text-(--basecolor)"
                          >
                            {item?.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-auto py-5 lg:py-6.25 2xl:py-7.5 3xl:py-10 bg-linear-to-r from-(--basecolor) to-(--basecolor2) block">
        <div className="container">
          <div className="w-full h-auto max-lg:gap-2.5 flex max-lg:flex-col items-center justify-center lg:justify-between">
            <div className="text-base lg:text-[13px] 3xl:text-base   font-normal text-white">
              Copyright © 2026 DSU. All Rights Reserved
            </div>
            <div className="text-sm lg:text-xs 3xl:text-sm font-normal text-white gap-2.5 flex items-center">
              Designed & developed By:
              <Link
                href={"https://www.intersmartsolution.com/"}
                aria-label="Intersmart Link"
                target="_blank"
                className="w-27.5 lg:w-22.5 3xl:w-27.5 h-auto aspect-110/15 overflow-hidden flex items-center justify-center"
              >
                <Image
                  src={"/images/footer-intersmart-logo.svg"}
                  alt="Intersmart Logo"
                  width={110}
                  height={15}
                  className="w-full h-full object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Accordion below lg (header button + collapsible); from lg up it is a plain wrapper around the grid
function FooterGroup({ title, open, onToggle, className = "", gridClassName, children }) {
  return (
    <div className={`w-full h-auto max-lg:p-[10px_15px] max-lg:border max-lg:border-(--basecolor)/10 ${className}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full h-auto flex items-center justify-between lg:hidden"
      >
        <span className={`text-base leading-[1.1] font-medium text-left bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit uppercase ${open ? "mb-3.75" : ""}`}>
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#212121] dark:text-white transition-transform duration-300 ease-in-out ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      <div
        className={`max-lg:grid max-lg:transition-[grid-template-rows] max-lg:duration-500 max-lg:ease-[cubic-bezier(0.4,0,0.2,1)] ${open ? "max-lg:grid-rows-[1fr]" : "max-lg:grid-rows-[0fr]"}`}
      >
        <div className="max-lg:overflow-hidden">
          <div className={`w-full h-auto grid ${gridClassName}`}>{children}</div>
        </div>
      </div>
    </div>
  );
}

// ADDED: true for a "View Location" entry (flagged with location: true, or the CMS text "View Location")
const isLocationItem = (item) =>
  Boolean(item?.location) || /^\s*view\s+location\s*$/i.test(item?.text || "");

function LinkCard({ items }) {
  return (
    <div className="w-full h-auto lg:first:pl-5 block">
      <div className="text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-medium bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit mb-2.5 3xl:mb-3.75 uppercase">
        {items?.title}
      </div>
      <div className="w-full h-auto flex flex-col">
        {items?.items?.map((item, index) => (
          <div
            key={index}
            className="text-[13px] lg:text-xs 2xl:text-[13px] 3xl:text-[15px] leading-[1.4] text-black dark:text-white whitespace-pre-line"
          >
            {item?.map((item, index) =>
              /* ADDED: View Location link with a map-pin icon */
              isLocationItem(item) ? (
                <span key={index} className="leading-[1.6] pr-1.25 inline-block font-medium">
                  <Link
                    href={item?.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 py-0.5 min-h-6 hover:text-(--basecolor) transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-3.5 2xl:size-4 3xl:size-5 shrink-0 text-(--basecolor2) group-hover:text-(--basecolor) transition-colors"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {item?.text}
                  </Link>
                </span>
              ) : item?.innerTitle ? (
                <span
                  key={index}
                  className="text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-medium bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit my-[15px_10px] lg:my-[20px_10px] 2xl:my-[30px_15px] uppercase inline-block"
                >
                  {item.text}
                </span>
              ) : (
                <span
                  key={index}
                  className={`leading-[1.6] pr-1.25 inline-block ${item?.bold ? "font-medium" : "font-normal"}`}
                >
                  {item.href?.startsWith("tel:") && item.text?.includes("/") ? (
                    <PhoneNumbers
                      value={item.text}
                      linkClassName="py-0.5 min-h-6 inline-block hover:text-(--basecolor) transition-colors"
                    />
                  ) : item.href ? (
                    <Link
                      href={item?.href}
                      {...(item?.openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="py-0.5 min-h-6 inline-block hover:text-(--basecolor) transition-colors"
                    >
                      {item?.text}
                    </Link>
                  ) : (
                    item?.text
                  )}
                </span>
              ),
            )}
          </div>
        ))}
      </div>
    </div>
  );
}