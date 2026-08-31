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

import Link from "next/link";
// import { mainNavigation } from "@/data";
// import { ThemeToggle } from "@/components/theme-toggle";
// import { Search, Globe, FileText, User, ChevronDown } from "lucide-react";
// import Image from "next/image";
// import { cn } from "@/lib/utils";

// const Text_1 =
//   "text-[10.6px] 2xl:text-[12.8px] 3xl:text-[16px] leading-none font-medium tracking-tight text-white";
// const Text_2 =
//   "text-[12px] 2xl:text-[14.4px] 3xl:text-[18px] leading-none font-normal tracking-tight text-white";

// export default function Header() {
//   const { topBar, mainMenu } = mainNavigation.data.attributes;

//   return (
//     <header className="w-full h-(--header-y) absolute z-10 top-0 inset-x-0 bg- flex flex-col">
//       <div className="w-full bg-linear-to-r from-[#450A03] via-[#7F1D1D] to-[#B91C1C] py-1">
//         <div className="container">
//           <div className="flex justify-end items-center gap-[12px] 2xl:gap-[17px] 3xl:gap-[20px]">
//             <Btn1 label="CDSIMER" slug="/" />
//             <Btn1 label="DSU Online" slug="/" />
//             <Btn2 label="Virtual Tour" slug="/" icon="/images/icon-home.svg" />
//             <div className="w-[1px] h-[14px] 2xl:h-[18px] 3xl:h-[22px] bg-white/20" />
//             <Btn2
//               label="E-Brochure"
//               slug="/"
//               icon="/images/icon-brochure.svg"
//             />
//             <div className="w-[1px] h-[14px] 2xl:h-[18px] 3xl:h-[22px] bg-white/20" />
//             <Btn2 label="Login" slug="/" icon="/images/icon-user.svg" />
//             <div className="w-[1px] h-[14px] 2xl:h-[18px] 3xl:h-[22px] bg-white/20" />
//             <Link
//               href="/"
//               className={cn(
//                 Text_1,
//                 "h-[17px] 2xl:h-[20px] 3xl:h-[25px] bg-none flex justify-center items-center gap-1 px-2.5 xl:px-[12px] 2xl:px-[14px] 3xl:px-[17px]",
//               )}
//             >
//               <span>EN</span>
//               <Image
//                 src="/images/icon-dropdown.svg"
//                 alt="icon-dropdown"
//                 width={20}
//                 height={20}
//                 className="size-[10px] 2xl:size-[10px] 3xl:size-[10px]"
//               />
//             </Link>
//             <div className="w-[1px] h-[14px] 2xl:h-[18px] 3xl:h-[22px] bg-white/20" />
//             <ThemeToggle />
//           </div>
//         </div>
//       </div>
//       <div className="w-full relative flex flex-col flex-1">
//         <div className="absolute -z-1 inset-0 opacity-10 bg-linear-to-r from-[#450A03] via-[#7F1D1D] to-[#B91C1C]"></div>
//         <div className="flex-1 relative w-full border-b-1 border-white/10 flex flex-col justify-center">
//           <div className="container">
//             <div className="flex items-center justify-between w-full">
//               <div className="flex items-center gap-8">
//                 <Link href="/" className="flex items-center gap-3">
//                   <Image
//                     src="/images/brand-logo.svg"
//                     alt="DSU Logo"
//                     className="w-[164px] 2xl:w-[193px] 3xl:w-[242px] h-auto block"
//                     width={242}
//                     height={78}
//                   />
//                 </Link>
//                 <div className="h-12 w-px bg-white/20"></div>
//                 <Image
//                   src="/images/naac-logo.png"
//                   alt="naac Logo"
//                   className="w-[73px] 2xl:w-[92px] 3xl:w-[115px] h-auto block"
//                   width={115}
//                   height={51}
//                 />
//                 <div className="h-12 w-px bg-white/20"></div>
//                 <div className={cn(Text_2, "text-center")}>
//                   India's AI-First
//                   <br />
//                   University
//                 </div>
//               </div>

//               <div className="flex items-center gap-[6.6px] 2xl:gap-[8px] 3xl:gap-[10px]">
//                 <Btn3 label="NVIDIA's AI Architecture" slug="/" />
//                 <Btn3 label="AI-First @ DSU" slug="/" />
//                 <Btn3 label="Centres of Excellence" slug="/" />
//                 <div className="relative z-0 rounded-[4px] flex bg-linear-to-r from-(--basecolor) to-(--basecolor2) overflow-hidden">
//                   <div className="absolute top-0 right-1/2 translate-x-1/2 text-[10px] font-bold bg-white text-[#f05c2a] px-2 rounded-b shadow-sm z-10">
//                     Apply Here
//                   </div>
//                   <Link
//                     href="/apply/nri"
//                     className={cn(
//                       Text_2,
//                       "px-4 py-3 text-white hover:bg-orange-600 pt-5",
//                     )}
//                   >
//                     NRI/Foreigners
//                   </Link>
//                   <div className="w-px bg-white/20"></div>
//                   <Link
//                     href="/apply/others"
//                     className={cn(
//                       Text_2,
//                       "px-4 py-3 text-white hover:bg-orange-600 pt-5",
//                     )}
//                   >
//                     Others
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="container">
//           <div className="flex items-center justify-between w-full">
//             <nav className="flex items-center gap-[20px] xl:gap-[34px] 2xl:gap-[40px] 3xl:gap-[52px] [&>*]:py-[14px] xl:[&>*]:py-[19px] 2xl:[&>*]:py-[24px] 3xl:[&>*]:py-[28px]">
//               <Link href="/" className={cn(Text_2, "relative")}>
//                 <Image
//                   src="/images/icon-home.svg"
//                   alt="Home"
//                   width={20}
//                   height={20}
//                   className="size-[18px] object-contain hover:scale-110 transition-transform"
//                 />
//                 <span className="w-full h-1 absolute z-0 bottom-0 inset-x-0 scale-x-140 bg-linear-to-r from-(--basecolor) to-(--basecolor2) transition duration-500" />
//               </Link>
//               {mainMenu.map((item, idx) => (
//                 <Link
//                   key={"mainMenu" + idx}
//                   href={item.url}
//                   className={cn(
//                     Text_2,
//                     "relative flex items-center hover:text-orange-400 transition-colors",
//                   )}
//                 >
//                   {item.label}{" "}
//                   {item.label.includes("Academics") && (
//                     <ChevronDown className="w-4 h-4" />
//                   )}
//                   <span className="w-full h-1 absolute z-0 bottom-0 inset-x-0 scale-x-140 bg-linear-to-r from-(--basecolor) to-(--basecolor2) transition duration-500" />
//                 </Link>
//               ))}
//             </nav>
//             <button className="border-0 bg-none text-white hover:text-orange-400">
//               <Image
//                 src="/images/icon-search.svg"
//                 alt="Search"
//                 width={20}
//                 height={20}
//                 className="size-[16px] object-contain hover:scale-110 transition-transform"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// function Btn1({ label, slug }) {
//   return (
//     <Link
//       href={slug}
//       className={cn(
//         Text_1,
//         "h-[17px] 2xl:h-[20px] 3xl:h-[25px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) rounded-[4px] flex justify-center items-center px-2.5 xl:px-[12px] 2xl:px-[14px] 3xl:px-[17px]",
//       )}
//     >
//       <span>{label}</span>
//     </Link>
//   );
// }
// function Btn2({ label, slug, icon }) {
//   return (
//     <Link
//       href={slug}
//       className={cn(
//         Text_1,
//         "h-[17px] 2xl:h-[20px] 3xl:h-[25px] bg-none flex justify-center items-center gap-1 px-2.5 xl:px-[12px] 2xl:px-[14px] 3xl:px-[17px]",
//       )}
//     >
//       <span>{label}</span>
//       {icon && (
//         <Image
//           src={icon}
//           alt={label}
//           width={20}
//           height={20}
//           className="size-[15px] 2xl:size-[16px] 3xl:size-[18px]"
//         />
//       )}
//     </Link>
//   );
// }

// function Btn3({ label, slug }) {
//   return (
//     <Link
//       href={slug}
//       className={cn(
//         Text_1,
//         "h-[35px] 2xl:h-[42px] 3xl:h-[52px] bg-none border border-[#D1D5DC]/50 rounded-[4px] flex justify-center items-center gap-1 px-2.5 xl:px-[12px] 2xl:px-[14px] 3xl:px-[18px]",
//       )}
//     >
//       <span>{label}</span>
//     </Link>
//   );
// }

// NEW HEADER
// ("use client");
// import CountUp from "react-countup";
// import Fade from "embla-carousel-fade";
// import useEmblaCarousel from "embla-carousel-react";
// import { useEffect, useCallback, useState, useRef } from "react";

// const local_data = {
//   title: "International Collaborations",
//   description: "Click on any Country Flag to view DSU's partner universities.",
//   statistics: [
//     { id: 1, value: 50, suffix: "+", label: "Partner Universities" },
//     { id: 2, value: 9, suffix: "+", label: "Countries" },
//     { id: 3, value: 12, suffix: "+", label: "Student Exchange Programs" },
//     { id: 4, value: 8, suffix: "+", label: "Global Research Initiatives" },
//     { id: 5, value: 20, suffix: "+", label: "Faculty Exchange Collaboration" },
//   ],
//   countries: [
//     {
//       id: 1,
//       name: "United States of America",
//       flag: "https://flagcdn.com/w80/us.png",
//       flagAlt: "USA Flag",
//       posX: "18%",
//       posY: "38%",
//       image: "/images/collab-usa.jpg",
//       description:
//         "USA collaborations give students access to world-class education, advanced research, and strong industry networks, enhancing global learning and career opportunities.",
//       partners: [
//         "Northeastern University",
//         "University of Evansville",
//         "LeTourneau University",
//         "University of South Carolina Aiken",
//         "Worcester Polytechnic Institute",
//         "Georgia Institute of Technology",
//       ],
//       moreLink: "/collaborations/usa",
//     },
//     {
//       id: 2,
//       name: "United Kingdom",
//       flag: "https://flagcdn.com/w80/gb.png",
//       flagAlt: "UK Flag",
//       posX: "43%",
//       posY: "22%",
//       image: "/images/collab-uk.jpg",
//       description:
//         "UK partnerships offer DSU students exposure to globally ranked institutions, fostering academic excellence and cultural diversity through collaborative research and exchange.",
//       partners: [
//         "University of Leeds",
//         "Coventry University",
//         "University of Hertfordshire",
//         "Brunel University London",
//       ],
//       moreLink: "/collaborations/uk",
//     },
//     {
//       id: 3,
//       name: "Germany",
//       flag: "https://flagcdn.com/w80/de.png",
//       flagAlt: "Germany Flag",
//       posX: "46%",
//       posY: "26%",
//       image: "/images/collab-germany.jpg",
//       description:
//         "Germany's engineering and research excellence enriches DSU's academic programs, providing students hands-on experience with Europe's innovation leaders.",
//       partners: [
//         "TU Dresden",
//         "Hochschule Rhein-Waal",
//         "Hochschule Furtwangen University",
//       ],
//       moreLink: "/collaborations/germany",
//     },
//     {
//       id: 4,
//       name: "Russia",
//       flag: "https://flagcdn.com/w80/ru.png",
//       flagAlt: "Russia Flag",
//       posX: "58%",
//       posY: "18%",
//       image: "/images/collab-russia.jpg",
//       description:
//         "Russia's world-class STEM universities partner with DSU to drive collaborative research and student exchange, strengthening academic ties across continents.",
//       partners: [
//         "Lomonosov Moscow State University",
//         "Peter the Great St. Petersburg Polytechnic University",
//       ],
//       moreLink: "/collaborations/russia",
//     },
//     {
//       id: 5,
//       name: "Malaysia",
//       flag: "https://flagcdn.com/w80/my.png",
//       flagAlt: "Malaysia Flag",
//       posX: "72%",
//       posY: "55%",
//       image: "/images/collab-malaysia.jpg",
//       description:
//         "Malaysia collaborations provide DSU students with access to Southeast Asia's growing academic hubs, enriching global perspectives in science and technology.",
//       partners: [
//         "Universiti Teknologi Malaysia",
//         "Universiti Putra Malaysia",
//         "Taylor's University",
//       ],
//       moreLink: "/collaborations/malaysia",
//     },
//     {
//       id: 6,
//       name: "Sri Lanka",
//       flag: "https://flagcdn.com/w80/lk.png",
//       flagAlt: "Sri Lanka Flag",
//       posX: "67%",
//       posY: "57%",
//       image: "/images/collab-srilanka.jpg",
//       description:
//         "Sri Lanka partnerships strengthen South Asian academic bonds, enabling joint research and cultural exchange to nurture globally competent graduates.",
//       partners: [
//         "University of Moratuwa",
//         "University of Colombo",
//         "University of Kelaniya",
//       ],
//       moreLink: "/collaborations/sri-lanka",
//     },
//     {
//       id: 7,
//       name: "South Africa",
//       flag: "https://flagcdn.com/w80/za.png",
//       flagAlt: "South Africa Flag",
//       posX: "50%",
//       posY: "72%",
//       image: "/images/collab-southafrica.jpg",
//       description:
//         "South Africa collaborations connect DSU with Africa's leading academic institutions, driving sustainable development research and cross-cultural innovation.",
//       partners: [
//         "University of Cape Town",
//         "Stellenbosch University",
//         "University of Pretoria",
//       ],
//       moreLink: "/collaborations/south-africa",
//     },
//     {
//       id: 8,
//       name: "Australia",
//       flag: "https://flagcdn.com/w80/au.png",
//       flagAlt: "Australia Flag",
//       posX: "78%",
//       posY: "72%",
//       image: "/images/collab-australia.jpg",
//       description:
//         "Australian university partnerships bring DSU students world-class research opportunities in technology, engineering, and sustainability in the Asia-Pacific region.",
//       partners: [
//         "Curtin University",
//         "University of Southern Queensland",
//         "Charles Darwin University",
//       ],
//       moreLink: "/collaborations/australia",
//     },
//   ],
// };

// export default function HomeCollaborations({ data = local_data }) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [pulsingIndex, setPulsingIndex] = useState(0);
//   const pulseRef = useRef(null);

//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, duration: 20 }, [
//     Fade(),
//   ]);

//   useEffect(() => {
//     emblaApi?.scrollTo(activeIndex, true);
//   }, [emblaApi, activeIndex]);

//   const onEmblaSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setActiveIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     emblaApi.on("select", onEmblaSelect);
//     emblaApi.on("reInit", onEmblaSelect);
//     return () => {
//       emblaApi.off("select", onEmblaSelect);
//       emblaApi.off("reInit", onEmblaSelect);
//     };
//   }, [emblaApi, onEmblaSelect]);

//   useEffect(() => {
//     if (!data?.countries?.length) return;
//     pulseRef.current = setInterval(
//       () => setPulsingIndex((prev) => (prev + 1) % data.countries.length),
//       900,
//     );
//     return () => clearInterval(pulseRef.current);
//   }, [data?.countries?.length]);

//   return (
//     <section className="w-full h-auto py-[35px_10px] sm:py-12.5 lg:py-17.5 2xl:py-22.5 3xl:py-27.5 block overflow-hidden">
//       <style>{`
//         @keyframes collab-breathe {
//           0%, 100% { transform: scale(1);    }
//           50%       { transform: scale(1.08); }
//         }
//         @keyframes collab-wave {
//           0%   { transform: scale(0.85); opacity: 0.7; }
//           100% { transform: scale(2.6);  opacity: 0;   }
//         }
//       `}</style>

//       <div className="container">
//         <div className="w-full flex flex-col lg:flex-row rounded-[12px] lg:rounded-[16px] 2xl:rounded-[20px] overflow-hidden shadow-2xl min-h-[480px] lg:min-h-[560px] 2xl:min-h-[640px] 3xl:min-h-[720px]">
//           {/* ━━━━━━━━━━━━━━━━━━ LEFT PANEL ━━━━━━━━━━━━━━━━━━ */}
//           <div
//             className="w-full lg:w-[52%] relative flex flex-col p-5 sm:p-7 lg:p-8 2xl:p-10 3xl:p-12 overflow-hidden"
//             style={{
//               background:
//                 "linear-gradient(135deg,#E53000 0%,#CC3D00 50%,#B83200 100%)",
//             }}
//           >
//             {/* Dotted world-map texture */}
//             <div
//               className="absolute inset-0 z-0 opacity-[0.18] pointer-events-none"
//               style={{
//                 backgroundImage:
//                   "radial-gradient(circle,rgba(255,255,255,0.7) 1px,transparent 1px)",
//                 backgroundSize: "18px 18px",
//               }}
//             />
//             {/* Radial vignette */}
//             <div
//               className="absolute inset-0 z-0 pointer-events-none"
//               style={{
//                 background:
//                   "radial-gradient(ellipse at center,transparent 35%,rgba(140,18,0,0.55) 100%)",
//               }}
//             />

//             {/* Title & Description */}
//             <div className="relative z-10 mb-3">
//               <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] 2xl:text-[44px] 3xl:text-[54px] leading-[1.1] font-bold text-white mb-2 max-w-[85%]">
//                 {data?.title}
//               </h2>
//               <p className="text-xs sm:text-sm 2xl:text-base text-white/80 font-normal">
//                 {data?.description}
//               </p>
//             </div>

//             {/* ── Map markers ── */}
//             <div className="relative z-10 flex-1 w-full mt-1 mb-4 min-h-[220px] sm:min-h-[260px] lg:min-h-0">
//               {data?.countries?.map((country, index) => (
//                 <button
//                   key={country.id}
//                   onClick={() => setActiveIndex(index)}
//                   aria-label={"Select " + country.name}
//                   className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
//                   style={{
//                     left: country.posX,
//                     top: country.posY,
//                     zIndex: activeIndex === index ? 20 : 10,
//                     // Outer button: smooth spring-lift for active/pulsing/idle
//                     transform:
//                       activeIndex === index
//                         ? "scale(1.22)"
//                         : pulsingIndex === index
//                           ? "scale(1.1)"
//                           : "scale(1)",
//                     transition:
//                       "transform 0.55s cubic-bezier(0.34,1.56,0.64,1)",
//                   }}
//                 >
//                   {/* ── Premium sonar wave — ACTIVE ONLY ── */}
//                   {activeIndex === index && (
//                     <>
//                       {/* Ring 1 — fires immediately */}
//                       <span
//                         className="absolute inset-0 rounded-full pointer-events-none"
//                         style={{
//                           backgroundColor: "rgba(255,255,255,0.5)",
//                           animation:
//                             "collab-wave 1.8s cubic-bezier(0.215,0.61,0.355,1) infinite",
//                         }}
//                       />
//                       {/* Ring 2 — offset by 0.6s */}
//                       <span
//                         className="absolute inset-0 rounded-full pointer-events-none"
//                         style={{
//                           backgroundColor: "rgba(255,255,255,0.35)",
//                           animation:
//                             "collab-wave 1.8s cubic-bezier(0.215,0.61,0.355,1) 0.6s infinite",
//                         }}
//                       />
//                       {/* Ring 3 — offset by 1.2s */}
//                       <span
//                         className="absolute inset-0 rounded-full pointer-events-none"
//                         style={{
//                           backgroundColor: "rgba(255,255,255,0.2)",
//                           animation:
//                             "collab-wave 1.8s cubic-bezier(0.215,0.61,0.355,1) 1.2s infinite",
//                         }}
//                       />
//                     </>
//                   )}

//                   {/* Flag circle — breathes continuously at its own pace */}
//                   <div
//                     className="relative rounded-full overflow-hidden"
//                     style={{
//                       width: "48px",
//                       height: "48px",
//                       border:
//                         activeIndex === index
//                           ? "2.5px solid #fff"
//                           : "2px solid rgba(255,255,255,0.65)",
//                       boxShadow:
//                         activeIndex === index
//                           ? "0 0 0 3px rgba(255,255,255,0.28), 0 6px 22px rgba(0,0,0,0.55)"
//                           : "0 2px 10px rgba(0,0,0,0.38)",
//                       transition:
//                         "border-color 0.4s ease, box-shadow 0.4s ease",
//                       animation: `collab-breathe ${[1.8, 2.4, 1.5, 2.9, 2.1, 1.6, 2.7, 2.3][index % 8]}s ease-in-out infinite`,
//                     }}
//                   >
//                     {/* eslint-disable-next-line @next/next/no-img-element */}
//                     <img
//                       src={country.flag}
//                       alt={country.flagAlt}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   {/* Hover tooltip */}
//                   <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
//                     <div className="bg-black/80 text-white text-[10px] lg:text-xs font-medium px-2 py-1 rounded-md backdrop-blur-sm">
//                       {country.name}
//                     </div>
//                   </div>
//                 </button>
//               ))}
//             </div>

//             {/* ── Statistics row ── */}
//             <div className="relative z-10 flex flex-wrap items-end gap-x-3 gap-y-2 sm:gap-x-5 lg:gap-x-4 2xl:gap-x-6 mt-auto pt-3 border-t border-white/20">
//               {data?.statistics?.map((stat) => (
//                 <div key={stat.id} className="flex flex-col items-start">
//                   <div className="text-[20px] sm:text-[24px] lg:text-[22px] 2xl:text-[28px] 3xl:text-[34px] font-bold text-white leading-[1.1]">
//                     <CountUp
//                       start={0}
//                       end={stat.value}
//                       duration={2.5}
//                       suffix={stat.suffix ?? "+"}
//                       enableScrollSpy
//                       scrollSpyOnce
//                     />
//                   </div>
//                   <div className="text-[10px] sm:text-xs 2xl:text-sm text-white/75 font-normal leading-tight max-w-[90px] lg:max-w-[110px]">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ━━━━━━━━━━━━━━━━━━ RIGHT PANEL ━━━━━━━━━━━━━━━━━━ */}
//           <div className="w-full lg:w-[48%] relative min-h-[380px] lg:min-h-0 bg-[#1a1a1a] overflow-hidden">
//             <div className="w-full h-full overflow-hidden" ref={emblaRef}>
//               <div className="flex h-full touch-pan-y">
//                 {data?.countries?.map((country, idx) => (
//                   <div
//                     key={country.id}
//                     className="min-w-0 flex-[0_0_100%] h-full relative z-0 overflow-hidden"
//                     aria-hidden={idx !== activeIndex}
//                   >
//                     <div className="absolute inset-0 z-0">
//                       {/* eslint-disable-next-line @next/next/no-img-element */}
//                       <img
//                         src={country.image}
//                         alt={country.name}
//                         className="w-full h-full object-cover"
//                         onError={(e) => {
//                           e.currentTarget.style.display = "none";
//                         }}
//                       />
//                       <div
//                         className="absolute inset-0"
//                         style={{
//                           background:
//                             "linear-gradient(to top,rgba(0,0,0,0.92) 0%,rgba(0,0,0,0.45) 50%,rgba(0,0,0,0.32) 100%)",
//                         }}
//                       />
//                       <div
//                         className="absolute inset-0"
//                         style={{
//                           background:
//                             "linear-gradient(to bottom,rgba(0,0,0,0.55) 0%,transparent 35%)",
//                         }}
//                       />
//                     </div>

//                     <div className="relative z-10 flex flex-col h-full p-5 lg:p-7 2xl:p-8 3xl:p-10">
//                       <div className="flex items-center gap-3 mb-3">
//                         <div
//                           className="w-9 h-9 lg:w-11 lg:h-11 rounded-full overflow-hidden shrink-0 shadow-lg"
//                           style={{ border: "2px solid rgba(255,255,255,0.6)" }}
//                         >
//                           {/* eslint-disable-next-line @next/next/no-img-element */}
//                           <img
//                             src={country.flag}
//                             alt={country.flagAlt}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                         <h3 className="text-base lg:text-lg 2xl:text-xl 3xl:text-2xl font-bold text-white leading-tight">
//                           {country.name}
//                         </h3>
//                       </div>

//                       <p className="text-xs lg:text-sm 2xl:text-[15px] text-white/80 leading-relaxed max-w-[92%]">
//                         {country.description}
//                       </p>

//                       <div className="mt-auto">
//                         <h4 className="text-sm lg:text-base 2xl:text-lg font-bold text-white mb-3">
//                           Partner Universities
//                         </h4>
//                         <div className="flex flex-wrap gap-2">
//                           {country.partners?.slice(0, 5).map((uni, i) => (
//                             <span
//                               key={i}
//                               className="text-[11px] lg:text-xs 2xl:text-sm font-medium text-white/90 rounded-md px-2.5 py-1.5 leading-tight"
//                               style={{
//                                 background: "rgba(255,255,255,0.1)",
//                                 backdropFilter: "blur(6px)",
//                                 border: "1px solid rgba(255,255,255,0.2)",
//                               }}
//                             >
//                               {uni}
//                             </span>
//                           ))}
//                           {(country.partners?.length ?? 0) > 5 && (
//                             <a
//                               href={country.moreLink}
//                               className="text-[11px] lg:text-xs 2xl:text-sm font-bold text-white rounded-md px-3 py-1.5 leading-tight transition-colors duration-300"
//                               style={{
//                                 background: "rgba(255,255,255,0.15)",
//                                 backdropFilter: "blur(6px)",
//                                 border: "1px solid rgba(255,255,255,0.3)",
//                               }}
//                             >
//                               + {(country.partners?.length ?? 0) - 5} More
//                             </a>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

("use client");
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
        [{ text: "INTERNATIONAL ADMISSIONS", bold: true }],
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
          { text: "Email: " },
          {
            text: "admissions@dsu.edu.in",
            href: "mailto:admissions@dsu.edu.in",
            bold: true,
          },
        ],
        [
          { text: "Admissions Helpline: " },
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
          { text: "E-mail: " },
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
          { text: "Admissions Helpline: " },
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
          { text: "Office of Registrar: " },
          { text: "080 4909 2910 / 11", bold: true },
        ],
        [
          { text: "Office of Dean (Engineering): " },
          { text: "+91 80 4909 2986 / 32 / 33", bold: true },
        ],
        [{ text: "Dean - MBA: " }, { text: "080 4909 2931", bold: true }],
        [{ text: "Enquiry EMBA: " }, { text: "080 4909 2930", bold: true }],
        [{ text: "Research Cell: " }, { text: "080 4909 2912", bold: true }],
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
          { text: "E-mail: " },
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
          { text: "Admissions Helpline: " },
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
        { label: "Schools & Departments", url: "#" },
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
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {data?.topRow?.map((item, index) => (
                <LinkCard key={`top-${index}`} items={item} />
              ))}
            </div>
            <div className="w-full h-[1px] bg-black/10 my-10"></div>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {data?.bottomRow?.map((item, index) => (
                <LinkCard key={`bottom-${index}`} items={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full mt-10 pt-10 border-t border-black/10">
          <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-4 lg:gap-8">
            {data?.bottomLinks?.map((column, idx) => (
              <div
                key={idx}
                className="flex flex-col md:border-r border-black/10 last:border-0 md:pr-4 border-b border-black/10 md:border-b-0"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between py-4 px-2 md:p-0 md:mb-4 text-left"
                  aria-expanded={openAccordion === idx}
                >
                  <h4 className="text-[#f05c2a] font-bold text-[13px] uppercase">
                    {column.title}
                  </h4>
                  <ChevronDown
                    className={`w-4 h-4 text-[#f05c2a] md:hidden transition-transform duration-300 ${openAccordion === idx ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 md:!max-h-none md:!opacity-100 ${openAccordion === idx
                      ? "max-h-[500px] opacity-100 mb-4 md:mb-0"
                      : "max-h-0 opacity-0"
                    }`}
                >
                  <ul className="flex flex-col gap-2.5 px-2 md:p-0">
                    {column.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          href={link.url || "#"}
                          className="text-[#111] text-[13px] hover:text-[#f05c2a] transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function LinkCard({ items }) {
  return (
    <div className="w-full h-auto block mb-5">
      <div className="text-lg leading-[1.1] font-medium bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit mb-3.75 uppercase">
        {items?.title}
      </div>
      <div className="w-full h-auto flex flex-col gap-2.5">
        {items?.items?.map((item, index) => (
          <div
            key={index}
            className="text-[13px] text-[#111] leading-relaxed whitespace-pre-line"
          >
            {item?.map((item, index) => (
              <span
                key={index}
                className={item?.bold ? "font-medium" : "font-normal"}
              >
                {item.href ? (
                  <Link
                    href={item?.href}
                    className="hover:text-(--basecolor) transition-colors"
                  >
                    {item?.text}
                  </Link>
                ) : (
                  item?.text
                )}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
