"use client";
import Link from "next/link";
import Image from "next/image";
import { Text } from "../ui/text";
import { useState } from "react";
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
  admissionCorner: {
    items: [
      {
        bold: true,
        text: "Email: ",
      },
      {
        bold: true,
        text: "admissions@dsu.edu.in",
        href: "mailto:admissions@dsu.edu.in",
      },
      {
        bold: true,
        text: "Phone: ",
      },
      {
        bold: true,
        text: "080 46461800",
        href: "tel:08046461800",
      },
      {
        bold: true,
        text: " / ",
      },
      {
        bold: true,
        text: "+91 6366885507",
        href: "tel:+916366885507",
      },
    ],
  },
};

// Mobile accordion item for bottom links section
function AccordionLinkColumn({ column, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-3 px-4 text-left"
        aria-expanded={isOpen}
      >
        <h4 className="text-[#f05c2a] font-bold text-xs">{column.title}</h4>
        <ChevronDown
          className={`w-4 h-4 text-[#f05c2a] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-3 px-4 pb-4">
          {column.links.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.url}
                className="text-black text-[11px] font-medium hover:text-[#f05c2a] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Footer({ data = local_data }) {
  const [openAccordion, setOpenAccordion] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenAccordion(openAccordion === idx ? null : idx);
  };

  return (
    <footer className="w-full h-auto py-[85px_5px] bg-linear-to-t from-[#FFF3E0] to-[#FFF8EE] block">
      <div className="container">
        <div className="[--width:350px] w-full h-auto flex flex-wrap">
          <div className="w-(--width) h-auto">
            <div className="w-72.5 h-auto aspect-290/95 mb-10 overflow-hidden block">
              <Image
                src={data?.logo?.url}
                alt={data?.logo?.alternativeTxt}
                width={290}
                height={95}
                className="w-full h-full object-contain"
              />
            </div>
            <Text size="p1" className="mb-5">
              {data?.description}
            </Text>
            <div className="w-full h-auto mb-22.5 gap-2.5 flex flex-wrap">
              {data?.socialLinks?.map((item) => (
                <div key={item?.id} className="w-auto h-auto">
                  <Link
                    href={item?.link}
                    aria-label={item?.alternativeTxt}
                    className="w-11.25 h-auto aspect-square bg-black rounded-[5px] overflow-hidden transition duration-500 flex items-center justify-center hover:bg-linear-to-r hover:from-(--basecolor) hover:to-(--basecolor2)"
                  >
                    <Image
                      src={item?.socialIcon?.url}
                      alt={item?.socialIcon?.alternativeTxt}
                      width={45}
                      height={45}
                      className="w-full h-full object-contain"
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className="w-full h-auto block">
              <div className="text-lg leading-[1.1] font-medium bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit mb-3.75">
                DOWNLOAD BROCHURES
              </div>
              <div className="w-full h-auto mb-2.5">
                <Select className="w-full h-auto">
                  <SelectTrigger className="w-full">
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
              <Button className="w-full gap-3.75">
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
          <div className="w-[calc(100%-var(--width))] pl-17.5">
            <div className="w-full h-auto [&>*]:w1/3 flex flex-wrap">
              <div className="w-auto h-auto">
                <LinkCard items={data?.admissionCorner} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: 5-col grid (md and above) */}
      {/* <div className="hidden md:block bg-white py-12 px-6 lg:px-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-8">
          {bottomLinks.map((column) => (
            <div
              key={column.id}
              className="flex flex-col gap-3 lg:border-r border-gray-200 last:border-0 pl-2"
            >
              <h4 className="text-[#f05c2a] font-bold text-xs mb-2">{column.title}</h4>
              <ul className="flex flex-col gap-2">
                {column.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.url}
                      className="text-black text-[11px] font-medium hover:text-[#f05c2a] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div> */}

      {/* Mobile: Accordion (below md) */}
      {/* <div className="md:hidden bg-white border-t border-gray-200">
        {bottomLinks.map((column, idx) => (
          <AccordionLinkColumn
            key={column.id}
            column={column}
            isOpen={openAccordion === idx}
            onToggle={() => toggleAccordion(idx)}
          />
        ))}
      </div> */}
    </footer>
  );
}

function LinkCard({ items }) {
  return (
    <div className="w-full h-auto block">
      <div className="text-lg leading-[1.1] font-medium bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit mb-3.75">
        {items?.title}
      </div>
      <div className="w-full h-auto block">
        {items?.items?.map((item, index) => (
          <div
            key={index}
            className={`py-1.25 ${
              item?.bold ? "font-semibold" : "font-normal"
            }`}
          >
            {item?.href ? <Link href={item.href}>{item.text}</Link> : item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
