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

export default function Footer({ data }) {
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
              <Select className="w-full h-auto">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select Program</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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



// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { footerData } from "@/data";
// import { Download, ChevronDown } from "lucide-react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";

// // Mobile accordion item for bottom links section
// function AccordionLinkColumn({ column, isOpen, onToggle }) {
//   return (
//     <div className="border-b border-gray-200 last:border-b-0">
//       <button
//         onClick={onToggle}
//         className="w-full flex items-center justify-between py-3 px-4 text-left"
//         aria-expanded={isOpen}
//       >
//         <h4 className="text-[#f05c2a] font-bold text-xs">{column.title}</h4>
//         <ChevronDown
//           className={`w-4 h-4 text-[#f05c2a] transition-transform duration-300 ${
//             isOpen ? "rotate-180" : ""
//           }`}
//         />
//       </button>
//       <div
//         className={`overflow-hidden transition-all duration-300 ${
//           isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <ul className="flex flex-col gap-3 px-4 pb-4">
//           {column.links.map((link, idx) => (
//             <li key={idx}>
//               <Link
//                 href={link.url}
//                 className="text-black text-[11px] font-medium hover:text-[#f05c2a] transition-colors"
//               >
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default function Footer() {
//   const { description, bottomLinks } = footerData.data.attributes;

//   // First accordion item open by default on mobile
//   const [openAccordion, setOpenAccordion] = useState(0);

//   const toggleAccordion = (idx) => {
//     setOpenAccordion(openAccordion === idx ? null : idx);
//   };

//   return (
//     <footer className="w-full flex flex-col text-sm border-t border-gray-200">
//       {/* â”€â”€â”€ TOP SECTION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
//       <div className="bg-[#fdf7f0] py-8 md:py-12 px-4 md:px-6 lg:px-20">
//         <div className="max-w-7xl mx-auto">

//           {/* â”€â”€ MOBILE: Logo + Description + Social + Brochure (hidden on desktop) â”€â”€ */}
//           <div className="flex flex-col gap-4 mb-6 lg:hidden">
//             <Link href="/" className="flex items-center gap-3">
//               <img src="/images/dsu-logo.png" alt="DSU Logo" className="h-12" />
//               <div className="flex flex-col text-black">
//                 <span className="text-base font-serif leading-tight">DAYANANDA SAGAR</span>
//                 <span className="text-lg font-serif font-bold tracking-widest leading-tight">UNIVERSITY</span>
//               </div>
//             </Link>
//             <p className="text-gray-700 leading-relaxed text-xs font-medium">{description}</p>
//             <div className="flex gap-2">
//               <a href="#" className="bg-black text-white p-2 hover:bg-gray-800 rounded-sm"><FaFacebookF className="w-4 h-4" /></a>
//               <a href="#" className="bg-[#f05c2a] text-white p-2 hover:bg-orange-600 rounded-sm"><FaTwitter className="w-4 h-4" /></a>
//               <a href="#" className="bg-black text-white p-2 hover:bg-gray-800 rounded-sm"><FaInstagram className="w-4 h-4" /></a>
//               <a href="#" className="bg-black text-white p-2 hover:bg-gray-800 rounded-sm"><FaLinkedinIn className="w-4 h-4" /></a>
//               <a href="#" className="bg-black text-white p-2 hover:bg-gray-800 rounded-sm"><FaYoutube className="w-4 h-4" /></a>
//             </div>
//             <div className="flex flex-col gap-2">
//               <h4 className="text-[#f05c2a] font-bold text-xs">DOWNLOAD BROCHURES</h4>
//               <select className="border border-gray-300 p-2 text-xs text-gray-600 rounded-sm outline-none w-full bg-white">
//                 <option>Select Program</option>
//                 <option>B.Tech</option>
//                 <option>MBA</option>
//               </select>
//               <button className="bg-[#f05c2a] hover:bg-orange-600 text-white p-2 text-xs font-semibold rounded-sm flex items-center justify-center gap-2">
//                 <Download className="w-4 h-4" /> Download PDF
//               </button>
//             </div>
//           </div>

//           {/* â”€â”€ DESKTOP: 12-col grid with Logo col + Contact col (hidden on mobile) â”€â”€ */}
//           <div className="hidden lg:grid grid-cols-12 gap-10">
//             {/* Logo & Description */}
//             <div className="col-span-3 flex flex-col gap-6">
//               <Link href="/" className="flex items-center gap-3">
//                 <img src="/images/dsu-logo.png" alt="DSU Logo" className="h-14" />
//                 <div className="flex flex-col text-black">
//                   <span className="text-lg font-serif leading-tight">DAYANANDA SAGAR</span>
//                   <span className="text-xl font-serif font-bold tracking-widest leading-tight">UNIVERSITY</span>
//                 </div>
//               </Link>
//               <p className="text-gray-700 leading-relaxed pr-4 text-xs font-medium">{description}</p>
//               <div className="flex gap-2">
//                 <a href="#" className="bg-black text-white p-2 hover:bg-gray-800 rounded-sm"><FaFacebookF className="w-4 h-4" /></a>
//                 <a href="#" className="bg-[#f05c2a] text-white p-2 hover:bg-orange-600 rounded-sm"><FaTwitter className="w-4 h-4" /></a>
//                 <a href="#" className="bg-black text-white p-2 hover:bg-gray-800 rounded-sm"><FaInstagram className="w-4 h-4" /></a>
//                 <a href="#" className="bg-black text-white p-2 hover:bg-gray-800 rounded-sm"><FaLinkedinIn className="w-4 h-4" /></a>
//                 <a href="#" className="bg-black text-white p-2 hover:bg-gray-800 rounded-sm"><FaYoutube className="w-4 h-4" /></a>
//               </div>
//               <div className="mt-4 flex flex-col gap-3">
//                 <h4 className="text-[#f05c2a] font-bold text-xs">DOWNLOAD BROCHURES</h4>
//                 <div className="flex flex-col gap-2">
//                   <select className="border border-gray-300 p-2 text-xs text-gray-600 rounded-sm outline-none w-full bg-white">
//                     <option>Select Program</option>
//                     <option>B.Tech</option>
//                     <option>MBA</option>
//                   </select>
//                   <button className="bg-[#f05c2a] hover:bg-orange-600 text-white p-2 text-xs font-semibold rounded-sm flex items-center justify-center gap-2">
//                     <Download className="w-4 h-4" /> Download PDF
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Desktop: Contact Details 3-col grid */}
//             <div className="col-span-9 grid grid-cols-3 gap-y-10 gap-x-6">
//               {/* Row 1 */}
//               <div className="flex flex-col gap-2">
//                 <h4 className="text-[#f05c2a] font-bold text-xs mb-1">ADMISSION CORNER</h4>
//                 <Link href="#" className="text-black text-xs hover:text-[#f05c2a] font-medium">Admissions details</Link>
//                 <Link href="#" className="text-black text-xs hover:text-[#f05c2a] font-medium">DSAT Admissions - Apply Online</Link>
//                 <Link href="#" className="text-black text-xs hover:text-[#f05c2a] font-medium">Direct Admissions - Apply Online</Link>
//                 <Link href="#" className="text-black text-xs hover:text-[#f05c2a] font-medium">Course Eligibility &amp; Fee Structure</Link>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <h4 className="text-[#f05c2a] font-bold text-xs mb-1">ADMISSIONS HELPLINE</h4>
//                 <p className="text-black text-xs font-medium">Email: admissions@dsu.edu.in</p>
//                 <p className="text-black text-xs font-medium">Phone: 080 46461800 / +91 6366885507</p>
//                 <h4 className="text-[#f05c2a] font-bold text-xs mt-4 mb-1">INTERNATIONAL ADMISSIONS</h4>
//                 <p className="text-black text-xs font-medium">
//                   Phone: +91 9606022152 / +91 9606022150 / <br />+91 9606022149
//                 </p>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <h4 className="text-[#f05c2a] font-bold text-xs mb-1">REGIONAL PRESENCE</h4>
//                 <p className="text-black text-xs font-medium">East Region: 8240216553</p>
//                 <p className="text-black text-xs font-medium">West Region: 9741488001</p>
//                 <p className="text-black text-xs font-medium">North Region: 7488983636</p>
//                 <p className="text-black text-xs font-medium">South Region: 9962835358</p>
//               </div>

//               {/* Row 2 */}
//               <div className="flex flex-col gap-2 pr-4">
//                 <h4 className="text-[#f05c2a] font-bold text-xs mb-1">DSU MAIN CAMPUS:</h4>
//                 <p className="text-black text-xs font-medium leading-relaxed">
//                   Devarakaggalahalli,<br />Harohalli, Kanakapura Road,<br />Bengaluru South Dt. - 562 112
//                 </p>
//                 <p className="text-black text-xs font-medium mt-2">Email: admissions@dsu.edu.in</p>
//                 <p className="text-black text-xs font-medium">Admissions Helpline: 080 46461800 /<br />080 49092800</p>
//               </div>
//               <div className="flex flex-col gap-2 pr-4">
//                 <h4 className="text-[#f05c2a] font-bold text-xs mb-1">DSU CITY INNOVATION CAMPUS:</h4>
//                 <p className="text-black text-xs font-medium leading-relaxed">
//                   Administrative &amp; Main Admission office,<br />Kudlu Gate, Hosur Road,<br />Bengaluru - 560 114
//                 </p>
//                 <p className="text-black text-xs font-medium mt-2">E-mail: admissions@dsu.edu.in | dsat@dsu.edu.in</p>
//                 <p className="text-black text-xs font-medium">
//                   Admissions Helpline: 080 46461800 / 080 49092800<br />/ +91 7760964277 / 8296316737 / 6366885507
//                 </p>
//                 <p className="text-black text-xs font-medium">Office of Registrar: 080 4909 2910 / 11</p>
//                 <p className="text-black text-xs font-medium">Office of Dean (Engineering): +91 80 4909 2986 / 32 / 33</p>
//                 <p className="text-black text-xs font-medium mt-2">Dean - MBA: 080 4909 2931</p>
//                 <p className="text-black text-xs font-medium">Enquiry EMBA: 080 4909 2930</p>
//                 <p className="text-black text-xs font-medium">Research Cell: 080 4909 2912</p>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <h4 className="text-[#f05c2a] font-bold text-xs mb-1">DSU CITY ADMISSIONS OFFICE:</h4>
//                 <p className="text-black text-xs font-medium leading-relaxed">
//                   Gate 2, 6th Floor, University Building,<br />Dental Block, Kumaraswamy Layout,<br />Bengaluru - 560111
//                 </p>
//                 <p className="text-black text-xs font-medium mt-2">E-mail: enquiry@dsu.edu.in /<br />admissions@dsu.edu.in</p>
//                 <p className="text-black text-xs font-medium">Admissions Helpline: 080 46461800 / 080<br />49092800</p>
//               </div>
//             </div>
//           </div>

//           {/* â”€â”€ MOBILE: Contact Info Grid (hidden on desktop) â”€â”€ */}
//           <div className="lg:hidden">
//             {/* Row 1: ADMISSION CORNER | ADMISSIONS HELPLINE - 2 columns */}
//             <div className="grid grid-cols-2 gap-4 border-b border-gray-200 pb-5 mb-5">
//               <div className="flex flex-col gap-2">
//                 <h4 className="text-[#f05c2a] font-bold text-xs mb-1">ADMISSION CORNER</h4>
//                 <Link href="#" className="text-black text-xs hover:text-[#f05c2a] font-medium">Admissions details</Link>
//                 <Link href="#" className="text-black text-xs hover:text-[#f05c2a] font-medium">DSAT Admissions - Apply Online</Link>
//                 <Link href="#" className="text-black text-xs hover:text-[#f05c2a] font-medium">Direct Admissions - Apply Online</Link>
//                 <Link href="#" className="text-black text-xs hover:text-[#f05c2a] font-medium">Course Eligibility &amp; Fee Structure</Link>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <h4 className="text-[#f05c2a] font-bold text-xs mb-1">ADMISSIONS HELPLINE</h4>
//                 <p className="text-black text-xs font-medium">Email: admissions@dsu.edu.in</p>
//                 <p className="text-black text-xs font-medium">Phone: 080 46461800 / +91 6366885507</p>
//                 <h4 className="text-[#f05c2a] font-bold text-xs mt-3 mb-1">INTERNATIONAL ADMISSIONS</h4>
//                 <p className="text-black text-xs font-medium">
//                   Phone: +91 9606022152 / +91 9606022150 / +91 9606022149
//                 </p>
//               </div>
//             </div>

//             {/* Row 2: REGIONAL PRESENCE - 2-col sub-grid */}
//             <div className="border-b border-gray-200 pb-5 mb-5">
//               <h4 className="text-[#f05c2a] font-bold text-xs mb-2">REGIONAL PRESENCE</h4>
//               <div className="grid grid-cols-2 gap-x-4 gap-y-1">
//                 <p className="text-black text-xs font-medium">East Region: 8240216553</p>
//                 <p className="text-black text-xs font-medium">West Region: 9741488001</p>
//                 <p className="text-black text-xs font-medium">North Region: 7488983636</p>
//                 <p className="text-black text-xs font-medium">South Region: 9962835358</p>
//               </div>
//             </div>

//             {/* Row 3: DSU MAIN CAMPUS */}
//             <div className="border-b border-gray-200 pb-5 mb-5">
//               <h4 className="text-[#f05c2a] font-bold text-xs mb-2">DSU MAIN CAMPUS</h4>
//               <p className="text-black text-xs font-medium leading-relaxed">
//                 Devarakaggalahalli, Harohalli, Kanakapura Road, Bengaluru South Dt. â€“ 562 112
//               </p>
//               <p className="text-black text-xs font-medium mt-2">Email: admissions@dsu.edu.in</p>
//               <p className="text-black text-xs font-medium">Admissions Helpline: 080 46461800 / 080 49092800</p>
//             </div>

//             {/* Row 4: DSU CITY INNOVATION CAMPUS */}
//             <div className="border-b border-gray-200 pb-5 mb-5">
//               <h4 className="text-[#f05c2a] font-bold text-xs mb-2">DSU CITY INNOVATION CAMPUS</h4>
//               <p className="text-black text-xs font-medium leading-relaxed">
//                 Administrative &amp; Main Admission office, Kudlu Gate, Hosur Road, Bengaluru - 560 114
//               </p>
//               <p className="text-black text-xs font-medium mt-2">E-mail: admissions@dsu.edu.in | dsat@dsu.edu.in</p>
//               <p className="text-black text-xs font-medium">
//                 Admissions Helpline: 080 46461800 / 080 49092800 / +91 7760964277 / 8296316737 / 6366885507
//               </p>
//               <p className="text-black text-xs font-medium">Office of Registrar: 080 4909 2910 / 11</p>
//               <p className="text-black text-xs font-medium">Office of Dean (Engineering): +91 80 4909 2986 / 32 / 33</p>
//               <p className="text-black text-xs font-medium mt-1">Dean - MBA: 080 4909 2931</p>
//               <p className="text-black text-xs font-medium">Enquiry EMBA: 080 4909 2930</p>
//               <p className="text-black text-xs font-medium">Research Cell: 080 4909 2912</p>
//             </div>

//             {/* Row 5: DSU CITY ADMISSIONS OFFICE */}
//             <div>
//               <h4 className="text-[#f05c2a] font-bold text-xs mb-2">DSU CITY ADMISSIONS OFFICE</h4>
//               <p className="text-black text-xs font-medium leading-relaxed">
//                 Gate 2, 6th Floor, University Building, Dental Block, Kumaraswamy Layout, Bengaluru - 560111
//               </p>
//               <p className="text-black text-xs font-medium mt-2">E-mail: enquiry@dsu.edu.in / admissions@dsu.edu.in</p>
//               <p className="text-black text-xs font-medium">Admissions Helpline: 080 46461800 / 080 49092800</p>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* â”€â”€â”€ BOTTOM LINKS SECTION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}

//       {/* Desktop: 5-col grid (md and above) */}
//       <div className="hidden md:block bg-white py-12 px-6 lg:px-20 border-t border-gray-200">
//         <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-8">
//           {bottomLinks.map((column) => (
//             <div
//               key={column.id}
//               className="flex flex-col gap-3 lg:border-r border-gray-200 last:border-0 pl-2"
//             >
//               <h4 className="text-[#f05c2a] font-bold text-xs mb-2">{column.title}</h4>
//               <ul className="flex flex-col gap-2">
//                 {column.links.map((link, idx) => (
//                   <li key={idx}>
//                     <Link
//                       href={link.url}
//                       className="text-black text-[11px] font-medium hover:text-[#f05c2a] transition-colors"
//                     >
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Mobile: Accordion (below md) */}
//       <div className="md:hidden bg-white border-t border-gray-200">
//         {bottomLinks.map((column, idx) => (
//           <AccordionLinkColumn
//             key={column.id}
//             column={column}
//             isOpen={openAccordion === idx}
//             onToggle={() => toggleAccordion(idx)}
//           />
//         ))}
//       </div>

//       {/* â”€â”€â”€ COPYRIGHT BAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
//       <div className="bg-[#cc2b28] text-white text-xs py-4 px-4 md:px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
//         <div className="font-medium text-center md:text-left">
//           Copyright &copy; 2026 DSU. All Rights Reserved
//         </div>
//         <div className="font-medium flex items-center gap-1">
//           Designed &amp; Developed By:{" "}
//           <span className="font-bold tracking-wide">INTER SMART</span>
//         </div>
//       </div>
//     </footer>
//   );
// }