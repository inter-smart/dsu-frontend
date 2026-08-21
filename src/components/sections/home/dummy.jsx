
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

"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Search, Globe, FileText, User, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Text_1 =
  "text-[10.6px] 2xl:text-[12.8px] 3xl:text-[16px] leading-none font-medium tracking-tight text-white";
const Text_2 =
  "text-[12px] 2xl:text-[14.4px] 3xl:text-[18px] leading-none font-normal tracking-tight text-white";

const localNavigation = {
  topBarLeft: [
    { id: 1, label: "CDSIMER", url: "/" },
    { id: 2, label: "DSU Online", url: "/" },
  ],
  topBarRight: [
    { id: 3, label: "Virtual Tour", url: "/", icon: "/images/icon-home.svg" },
    { id: 4, label: "E-Brochure", url: "/", icon: "/images/icon-brochure.svg", hiddenSm: true },
    { id: 5, label: "Login", url: "/", icon: "/images/icon-user.svg", hiddenSm: true },
  ],
  languages: [
    { code: "EN", label: "English" },
    { code: "HI", label: "Hindi" },
    { code: "KN", label: "Kannada" },
  ],
  actionLinks: [
    { id: 1, label: "NVIDIA's AI Architecture", url: "/" },
    { id: 2, label: "AI-First @ DSU", url: "/" },
    { id: 3, label: "Centres of Excellence", url: "/" },
  ],
  mainMenu: [
    {
      id: 1,
      label: "Why DSU?",
      url: "/",
      submenus: [
        { id: "1-1", label: "About DSU", url: "/" },
        { id: "1-2", label: "Leadership", url: "/" },
        { id: "1-3", label: "Governance", url: "/" },
        { id: "1-4", label: "Recognition & Rankings", url: "/" },
        {
          id: "1-5",
          label: "Excellence & Quality Assurance",
          url: "/",
          submenus: [
            {
              id: "1-5-1",
              label: "IQAC",
              url: "/",
              submenus: [
                { id: "1-5-1-1", label: "IQAC", url: "/" },
                { id: "1-5-1-2", label: "IQAC Committee", url: "/" },
                { id: "1-5-1-3", label: "IQAC Activities", url: "/" },
                { id: "1-5-1-4", label: "IQAC Composition", url: "/" },
              ]
            },
            { id: "1-5-2", label: "AQAR", url: "/" },
            { id: "1-5-3", label: "Feedback", url: "/" },
            { id: "1-5-4", label: "Quality Process", url: "/" },
          ]
        }
      ]
    },
    { id: 2, label: "AI-Enabled Academics", url: "/", submenus: [] },
    { id: 3, label: "Research & Innovation", url: "/" },
    { id: 4, label: "Industry Collaboration", url: "/" },
    { id: 5, label: "Placements", url: "/" },
    { id: 6, label: "Admissions", url: "/" },
    { id: 7, label: "International Relations", url: "/" },
    { id: 8, label: "Locate Us", url: "/" },
  ],
};

const ResponsiveMenuItem = ({ item, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubmenus = item.submenus && item.submenus.length > 0;

  const toggleOpen = (e) => {
    if (hasSubmenus && window.innerWidth < 1024) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  const isLevel0 = level === 0;
  const isLevel1 = level === 1;
  const isLevel2 = level === 2;
  const isLevel3 = level === 3;

  return (
    <div
      className={cn(
        "group relative w-full lg:w-auto",
        isLevel0 ? "border-b border-gray-200 lg:border-none" : ""
      )}
      onMouseEnter={() => window.innerWidth >= 1024 && setIsOpen(true)}
      onMouseLeave={() => window.innerWidth >= 1024 && setIsOpen(false)}
    >
      <Link
        href={item.url}
        onClick={toggleOpen}
        className={cn(
          "flex justify-between items-center w-full transition-colors lg:w-auto",
          // Desktop styles
          isLevel0 ? "lg:py-[24px] lg:text-[12px] 2xl:lg:text-[14.4px] 3xl:lg:text-[18px] lg:text-white lg:font-normal lg:hover:text-orange-400" : "",

          // Mobile styles
          isLevel0 ? "py-[16px] text-[18px] font-bold text-[#1c1c1c] lg:normal-case" : "",
          isLevel0 && isOpen ? "text-[#e04523]" : "",

          isLevel1 ? "py-[10px] lg:px-4 lg:py-2 text-[16px] lg:text-sm lg:text-black lg:hover:bg-gray-100" : "",
          isLevel1 && isOpen ? "text-[#e04523] font-bold lg:font-normal" : (isLevel1 ? "text-[#1c1c1c]" : ""),

          isLevel2 ? "py-[8px] pl-4 lg:pl-0 lg:px-4 lg:py-2 text-[16px] lg:text-sm lg:hover:bg-gray-100 text-[#1c1c1c] font-bold lg:font-normal" : "",
          isLevel2 && isOpen ? "text-[#e04523]" : "",

          isLevel3 ? "py-[8px] pl-8 flex items-center gap-2 lg:px-4 lg:py-2 lg:pl-4 text-[16px] lg:text-sm text-[#1c1c1c] lg:hover:bg-gray-100" : "",
          isLevel3 && item.label === "IQAC Committee" ? "text-[#e04523] font-bold lg:font-normal lg:text-black" : ""
        )}
      >
        <span className="flex items-center gap-2 relative">
          {isLevel3 && (
            <span className={cn(
              "w-[14px] h-[14px] rounded-full border-[1.5px] lg:hidden",
              item.label === "IQAC Committee" ? "border-[#e04523]" : "border-[#e04523]"
            )}></span>
          )}
          {item.label}
          {/* Desktop hover underline */}
          {isLevel0 && (
            <span className="hidden lg:block w-full h-1 absolute z-0 bottom-0 inset-x-0 scale-x-140 bg-linear-to-r from-(--basecolor) to-(--basecolor2) transition duration-500 opacity-0 group-hover:opacity-100" />
          )}
        </span>

        {hasSubmenus && (
          <ChevronDown
            className={cn(
              "w-5 h-5 lg:w-4 lg:h-4 transition-transform lg:ml-1",
              isOpen ? "rotate-0 text-[#e04523] lg:text-current" : "-rotate-90 text-[#1c1c1c] lg:rotate-0 lg:text-current"
            )}
          />
        )}
      </Link>

      {hasSubmenus && (
        <div className={cn(
          "flex-col w-full lg:w-auto",
          // Desktop styles: absolute dropdown
          "lg:absolute lg:bg-white lg:shadow-xl lg:min-w-[240px] lg:z-50 lg:rounded lg:py-2 lg:border lg:border-gray-100",
          isLevel0 ? "lg:top-full lg:left-0" : "lg:top-0 lg:left-[95%]",
          // Show on hover (desktop) or click (mobile)
          isOpen ? "flex" : "hidden",
          // Mobile specific vertical line indentation
          isLevel1 ? "border-l-2 border-[#f5b8a5] ml-3 pl-3 my-2 lg:border-none lg:ml-0 lg:pl-0 lg:my-0" : ""
        )}>
          {item.submenus.map((sub) => (
            <ResponsiveMenuItem key={sub.id} item={sub} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const LanguageSwitcher = ({ languages }) => {
  const [activeLang, setActiveLang] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      setIsOpen(false);
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, []);

  return (
    <div className="relative z-[60]" ref={ref}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(Text_1, "h-[17px] 2xl:h-[20px] 3xl:h-[25px] bg-none flex justify-center items-center gap-1 px-2.5 hover:text-orange-400 transition-colors cursor-pointer")}
      >
        <span>{activeLang.code}</span>
        <ChevronDown className={cn("w-3 h-3 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-1 flex flex-col bg-white shadow-lg rounded overflow-hidden min-w-[100px] border border-gray-100">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setActiveLang(lang);
                setIsOpen(false);
              }}
              className="px-4 py-2 text-left text-sm text-gray-700 hover:bg-orange-50 hover:text-[#e04523] transition-colors"
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // Sticky header state
  const [isVisible, setIsVisible] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setIsSticky(false);
        setIsVisible(true);
      } else {
        setIsSticky(true);
        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false); // scrolling down
        } else {
          setIsVisible(true);  // scrolling up
        }
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Search click outside
  const searchRef = useRef(null);
  useEffect(() => {
    const listener = (event) => {
      if (!searchRef.current || searchRef.current.contains(event.target)) return;
      setIsSearchOpen(false);
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, []);

  const { topBar, mainMenu } = localNavigation;

  return (
    <header className={cn(
      "w-full h-(--header-y) z-50 flex flex-col transition-transform duration-300",
      isSticky ? "fixed top-0 inset-x-0 shadow-lg bg-[#590C05]" : "absolute top-0 inset-x-0",
      !isVisible && isSticky ? "-translate-y-full" : "translate-y-0"
    )}>
      {/* Top Bar - Single HTML */}
      <div className="w-full bg-linear-to-r from-[#450A03] via-[#7F1D1D] to-[#B91C1C] py-1">
        <div className="container flex flex-wrap lg:flex-nowrap justify-between lg:justify-end items-center gap-[12px] 2xl:gap-[17px] 3xl:gap-[20px]">
          <div className="flex order-1 lg:order-none items-center gap-[12px]">
            {localNavigation.topBarLeft.map((item) => (
              <Btn1 key={item.id} label={item.label} slug={item.url} />
            ))}
          </div>

          <div className="flex order-2 lg:order-none items-center gap-[12px] 2xl:gap-[17px] 3xl:gap-[20px]">
            {localNavigation.topBarRight.map((item) => {
              if (item.id === 5) {
                return (
                  <React.Fragment key={item.id}>
                    <Btn2 
                      label={isLoggedIn ? "Logout" : "Login"} 
                      onClick={() => setIsLoggedIn(!isLoggedIn)}
                      icon={item.icon} 
                      className={item.hiddenSm ? "hidden sm:flex" : ""}
                    />
                    <div className={cn("w-[1px] h-[14px] 2xl:h-[18px] 3xl:h-[22px] bg-white/20", item.hiddenSm ? "hidden sm:block" : "")} />
                  </React.Fragment>
                );
              }
              return (
                <React.Fragment key={item.id}>
                  <Btn2
                    label={item.label}
                    slug={item.url}
                    icon={item.icon}
                    className={item.hiddenSm ? "hidden sm:flex" : ""}
                  />
                  <div className={cn("w-[1px] h-[14px] 2xl:h-[18px] 3xl:h-[22px] bg-white/20", item.hiddenSm ? "hidden sm:block" : "")} />
                </React.Fragment>
              );
            })}

            <LanguageSwitcher languages={localNavigation.languages} />
            <div className="w-[1px] h-[14px] 2xl:h-[18px] 3xl:h-[22px] bg-white/20" />
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="w-full relative flex flex-col flex-1 z-40 bg-transparent">
        <div className="absolute -z-1 inset-0 opacity-10 bg-linear-to-r from-[#450A03] via-[#7F1D1D] to-[#B91C1C]"></div>

        {/* Middle Section */}
        <div className="flex-1 relative w-full border-b-1 border-white/10 flex flex-col justify-center bg-transparent">
          <div className="container py-3 lg:py-0">
            <div className="flex items-center justify-between w-full">
              {/* Logos */}
              <div className="flex items-center gap-3 lg:gap-8">
                <Link href="/" className="flex items-center">
                  <Image src="/images/brand-logo.svg" alt="DSU Logo" className="w-[140px] lg:w-[164px] 2xl:w-[193px] 3xl:w-[242px] h-auto block" width={242} height={78} />
                </Link>
                <div className="h-8 lg:h-12 w-px bg-white/20"></div>
                <Image src="/images/naac-logo.png" alt="naac Logo" className="w-[50px] lg:w-[73px] 2xl:w-[92px] 3xl:w-[115px] h-auto block" width={115} height={51} />
                <div className="hidden sm:block h-8 lg:h-12 w-px bg-white/20"></div>
                <div className={cn(Text_2, "hidden sm:block text-center text-[10px] lg:text-[12px]")}>
                  India's AI-First<br />University
                </div>
              </div>

              {/* Right Side Buttons & Hamburger */}
              <div className="flex items-center gap-[6.6px] 2xl:gap-[8px] 3xl:gap-[10px]">
                <div className="hidden lg:flex items-center gap-[6.6px] 2xl:gap-[8px] 3xl:gap-[10px]">
                  {localNavigation.actionLinks.map(link => (
                    <Btn3 key={link.id} label={link.label} slug={link.url} />
                  ))}
                </div>

                <div className="relative z-0 rounded-[4px] flex bg-linear-to-r from-(--basecolor) to-(--basecolor2) overflow-hidden scale-[0.85] lg:scale-100 origin-right">
                  <div className="absolute top-0 right-1/2 translate-x-1/2 text-[8px] lg:text-[10px] font-bold bg-white text-[#f05c2a] px-2 rounded-b shadow-sm z-10">
                    Apply Here
                  </div>
                  <Link href="/apply/nri" className={cn(Text_2, "px-3 lg:px-4 py-2 lg:py-3 text-white hover:bg-orange-600 pt-4 lg:pt-5 text-[10px] lg:text-[12px]")}>
                    NRI/Foreigners
                  </Link>
                  <div className="w-px bg-white/20"></div>
                  <Link href="/apply/others" className={cn(Text_2, "px-3 lg:px-4 py-2 lg:py-3 text-white hover:bg-orange-600 pt-4 lg:pt-5 text-[10px] lg:text-[12px]")}>
                    Others
                  </Link>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden bg-linear-to-r from-[#f05c2a] to-[#d94819] p-1.5 rounded text-white relative z-50 ml-1"
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SINGLE HTML Navigation Bar / Mobile Overlay */}
        <div className={cn(
          "w-full transition-all duration-300",
          mobileMenuOpen ? "fixed inset-x-0 bottom-0 top-[90px] sm:top-[100px] bg-[#FDF9F1] overflow-y-auto shadow-inner p-4 z-30" : "hidden lg:block",
          "lg:static lg:bg-transparent lg:shadow-none lg:overflow-visible lg:z-auto lg:p-0 lg:block"
        )}>
          <div className="container lg:h-full">
            {/* Mobile Extra Links shown inside the overlay */}
            <div className="lg:hidden flex flex-wrap gap-2 mb-6 border-b border-gray-300 pb-4 justify-center mt-4">
              {localNavigation.actionLinks.map(link => (
                <Btn3 key={link.id} label={link.label} slug={link.url} textColor="text-black" borderColor="border-gray-300" />
              ))}
            </div>

            <nav className={cn(
              "flex flex-col lg:flex-row lg:items-center w-full",
              "gap-0 lg:gap-[20px] xl:gap-[34px] 2xl:gap-[40px] 3xl:gap-[52px]",
              "pb-20 lg:pb-0"
            )}>
              <div className="hidden lg:flex">
                <Link href="/" className={cn(Text_2, "relative py-[14px] xl:py-[19px] 2xl:py-[24px] 3xl:py-[28px] group")}>
                  <Image src="/images/icon-home.svg" alt="Home" width={20} height={20} className="size-[18px] object-contain hover:scale-110 transition-transform" />
                  <span className="w-full h-1 absolute z-0 bottom-0 inset-x-0 scale-x-140 bg-linear-to-r from-(--basecolor) to-(--basecolor2) transition duration-500 opacity-0 group-hover:opacity-100" />
                </Link>
              </div>

              <div className="flex flex-col lg:flex-row w-full lg:w-auto">
                {mainMenu.map((item) => (
                  <ResponsiveMenuItem key={item.id} item={item} />
                ))}
              </div>

              <div className="relative hidden lg:block" ref={searchRef}>
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="flex items-center justify-center w-10 h-10 border-0 bg-white/5 hover:bg-white/10 rounded-full text-white hover:text-orange-400 transition-colors group"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5 text-current group-hover:scale-110 transition-transform" />
                </button>

                {/* Search Overlay */}
                {isSearchOpen && (
                  <div className="absolute top-full right-0 w-[400px] mt-2 bg-white shadow-2xl rounded-lg p-4 z-[60] flex items-center gap-2 border border-gray-100">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Search DSU..." 
                      className="flex-1 bg-transparent border-none outline-hidden text-black placeholder:text-gray-400"
                      autoFocus
                    />
                    <button onClick={() => setIsSearchOpen(false)} className="text-gray-400 hover:text-red-500">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

function Btn1({ label, slug, className }) {
  return (
    <Link
      href={slug}
      className={cn(
        Text_1,
        "h-[17px] 2xl:h-[20px] 3xl:h-[25px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) rounded-[4px] flex justify-center items-center px-2.5 xl:px-[12px] 2xl:px-[14px] 3xl:px-[17px]",
        className
      )}
    >
      <span>{label}</span>
    </Link>
  );
}

function Btn2({ label, slug, icon, className, onClick }) {
  const content = (
    <>
      <span>{label}</span>
      {icon && (
        <Image
          src={icon}
          alt={label}
          width={20}
          height={20}
          className="size-[15px] 2xl:size-[16px] 3xl:size-[18px] group-hover:brightness-125 group-hover:scale-110 transition-all duration-300"
        />
      )}
    </>
  );

  const classes = cn(
    "text-[10.6px] 2xl:text-[12.8px] 3xl:text-[16px] leading-none font-medium tracking-tight text-white/90 hover:text-orange-400 transition-colors group cursor-pointer",
    "h-[17px] 2xl:h-[20px] 3xl:h-[25px] bg-none flex justify-center items-center gap-1 px-2.5 xl:px-[12px] 2xl:px-[14px] 3xl:px-[17px]",
    className
  );

  if (onClick) {
    return (
      <button onClick={onClick} className={classes}>
        {content}
      </button>
    );
  }

  return (
    <Link href={slug} className={classes}>
      {content}

    </Link>
  );
}

function Btn3({ label, slug, textColor = "text-white", borderColor = "border-[#D1D5DC]/50", className }) {
  return (
    <Link
      href={slug}
      className={cn(
        "text-[10.6px] 2xl:text-[12.8px] 3xl:text-[16px] leading-none font-medium tracking-tight transition-all duration-300",
        textColor,
        "hover:text-orange-400 hover:border-orange-400 hover:bg-orange-400/5",
        "h-[35px] 2xl:h-[42px] 3xl:h-[52px] bg-none border rounded-[4px] flex justify-center items-center gap-1 px-2.5 xl:px-[12px] 2xl:px-[14px] 3xl:px-[18px]",
        borderColor,
        className
      )}
    >
      <span>{label}</span>
    </Link>
  );
}
