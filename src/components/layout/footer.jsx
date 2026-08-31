"use client";
import Link from "next/link";
import Image from "next/image";
import { Text } from "../ui/text";
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

export default function Footer({ data = local_data }) {
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  return (
    <footer className="w-full h-auto pt-6.25 sm:pt-10 lg:pt-15 2xl:pt-17.5 3xl:pt-21.25 bg-linear-to-t from-[#FFF3E0] to-[#FFF8EE] dark:bg-none dark:bg-[#212121] block">
      <div className="container">
        <div className="[--width:100%] lg:[--width:250px] 2xl:[--width:280px] 3xl:[--width:350px] w-full h-auto sm:p-5 lg:p-7.5 2xl:p-10 3xl:p-12.5 bg-[#FFEACC] dark:bg-[#343434] rounded-[10px] lg:rounded-[7px] 2xl:rounded-[10px] dark:border dark:border-white/10 overflow-hidden flex flex-wrap">
          <div className="w-(--width) h-auto max-lg:mb-10 max-sm:mb-0 max-sm:p-5">
            <div className="w-72.5 lg:w-47.5 2xl:w-57.5 3xl:w-72.5 h-auto aspect-290/95 mb-3.75 lg:mb-5 2xl:mb-7.5 3xl:mb-10 overflow-hidden block">
              <Image
                src={data?.logo?.light?.url}
                alt={data?.logo?.light?.alternativeText || "DSU Logo"}
                width={290}
                height={95}
                className="w-full h-full object-contain dark:hidden"
              />
              <Image
                src={data?.logo?.dark?.url}
                alt={data?.logo?.dark?.alternativeText || "DSU Logo"}
                width={290}
                height={95}
                className="w-full h-full object-contain hidden dark:block"
              />
            </div>
            <Text
              size="p1"
              className="text-sm lg:text-[11px] 2xl:text-xs 3xl:text-base mb-3.75 2xl:mb-5"
            >
              {data?.description}
            </Text>
            <div className="w-full h-auto mb-7.5 sm:mb-12.5 lg:mb-15 2xl:mb-17.5 3xl:mb-22.5 gap-2.5 lg:gap-1.75 2xl:gap-2.5 flex flex-wrap">
              {data?.socialLinks?.map((item) => (
                <div key={item?.id} className="w-auto h-auto">
                  <Link
                    href={item?.link}
                    aria-label={item?.alternativeTxt}
                    className="group w-11.25 lg:w-8.75 2xl:w-10 3xl:w-11.25 h-auto aspect-square p-2.5 lg:p-2 2xl:p-2.5 bg-black dark:bg-white rounded-[5px] overflow-hidden transition-colors duration-400 flex items-center justify-center hover:bg-linear-to-r hover:from-(--basecolor) hover:to-(--basecolor2)"
                  >
                    <Image
                      src={item?.icon?.light}
                      alt={item?.icon?.alternativeText || "Icon"}
                      width={45}
                      height={45}
                      className="w-full h-full object-contain dark:hidden"
                    />
                    <Image
                      src={item?.icon?.dark}
                      alt={item?.icon?.alternativeText || "Icon"}
                      width={45}
                      height={45}
                      className="w-full h-full object-contain hidden dark:block group-hover:filter-[brightness(0)_saturate(100%)_invert(100%)_sepia(0%)_saturate(7487%)_hue-rotate(66deg)_brightness(106%)_contrast(100%)]"
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className="w-full h-auto block max-lg:max-w-100">
              <div className="text-lg lg:text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-medium bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit mb-3.75 lg:mb-2.5 3xl:mb-3.75">
                DOWNLOAD BROCHURES
              </div>
              <div className="w-full h-auto mb-2.5">
                <Select className="w-full h-auto">
                  <SelectTrigger className="!text-sm lg:!text-xs 2xl:!text-[13px] 3xl:!text-base !font-light !text-black dark:!text-white w-full !h-11.25 lg:!h-8.75 3xl:!h-11.25 rounded-[5px] border-[#C7C7C7] [&>svg]:text-black dark:[&>svg]:text-white">
                    <SelectValue placeholder="Select Program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select Program</SelectLabel>
                      <SelectItem value="apple">BE</SelectItem>
                      <SelectItem value="banana">B.Tech</SelectItem>
                      <SelectItem value="blueberry">Bcom</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full !h-10 rounded-[5px] lg:gap-2.5 2xl:gap-3.75">
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
          </div>
          <div className="w-(--width) lg:w-[calc(100%-var(--width))] max-sm:p-[10px_10px_25px_10px] lg:pl-10 xl:pl-15 2xl:pl-17.5 3xl:pl-22.5">
            <div className="w-full h-auto pb-3.75 lg:pb-8.75 2xl:pb-10 3xl:pb-12.5 mb-3.75 lg:mb-7.5 3xl:mb-10 border-b border-[#D4D4D4] grid grid-cols-2 lg:grid-cols-3 gap-[25px_5px] sm:gap-5 lg:gap-7.5 2xl:gap-10 3xl:gap-17.5">
              {data?.topRow?.map((item, index) => (
                <LinkCard key={`top-${index}`} items={item} />
              ))}
            </div>
            <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px_5px] sm:gap-5 lg:gap-7.5 2xl:gap-10 3xl:gap-17.5">
              {data?.bottomRow?.map((item, index) => (
                <LinkCard key={`bottom-${index}`} items={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-auto my-[40px_30px] lg:my-[20px_30px] 2xl:my-[20px_40px] 3xl:my-[30px_50px] lg:border border-[#D4D4D4] lg:rounded-[7px] 2xl:rounded-[10px] overflow-hidden">
          <div className="w-full h-full grid grid-cols-1 lg:grid-cols-5 gap-2.5 lg:gap-7.5 2xl:gap-12.5 3xl:gap-15">
            {data?.bottomLinks?.map((item, index) => (
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
                    className={`text-base lg:text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-medium text-left bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit lg:mb-3.75 3xl:mb-5 uppercase ${openAccordion === index && "max-lg:mb-3.75"}`}
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
                            className="text-[15px] lg:text-xs 2xl:text-[13px] 3xl:text-[15px] leading-[1.2] font-normal text-black dark:text-[#FFC7C7] py-1.25 3xl:py-2 transition-colors duration-300 block hover:text-(--basecolor) dark:hover:text-(--basecolor)"
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
            <div className="text-base lg:text-[13px] 3xl:text-base leading-[1.1] font-normal text-white">
              Copyright © 2026 DSU. All Rights Reserved
            </div>
            <div className="text-sm lg:text-xs 3xl:text-sm leading-[1.1] font-normal text-white gap-2.5 flex items-center">
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
              item?.innerTitle ? (
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
                  {item.href ? (
                    <Link
                      href={item?.href}
                      className="py-0.5 inline-block hover:text-(--basecolor) transition-colors"
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
