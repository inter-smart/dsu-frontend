// import Link from "next/link";
// import { footerData } from "@/data";
// import { Download } from "lucide-react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";

// export default function Footer() {
//   const { description, bottomLinks } = footerData.data.attributes;

//   return (
//     <footer className="w-full flex flex-col text-sm border-t border-gray-200">
//       {/* Top Section */}
//       <div className="bg-[#fdf7f0] py-12 px-6 lg:px-20">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
//           {/* Logo & Description */}
//           <div className="lg:col-span-3 flex flex-col gap-6">
//             <Link href="/" className="flex items-center gap-3">
//               <img src="/images/dsu-logo.png" alt="DSU Logo" className="h-14" />
//               <div className="flex flex-col text-black">
//                 <span className="text-lg font-serif leading-tight">
//                   DAYANANDA SAGAR
//                 </span>
//                 <span className="text-xl font-serif font-bold tracking-widest leading-tight">
//                   UNIVERSITY
//                 </span>
//               </div>
//             </Link>
//             <p className="text-gray-700 leading-relaxed pr-4 text-xs font-medium">
//               {description}
//             </p>
//             <div className="flex gap-2">
//               <a
//                 href="#"
//                 className="bg-black text-white p-2 hover:bg-gray-800 rounded-sm"
//               >
//                 <FaFacebookF className="w-4 h-4" />
//               </a>
//               <a
//                 href="#"
//                 className="bg-[#f05c2a] text-white p-2 hover:bg-orange-600 rounded-sm"
//               >
//                 <FaTwitter className="w-4 h-4" />
//               </a>
//               <a
//                 href="#"
//                 className="bg-black text-white p-2 hover:bg-gray-800 rounded-sm"
//               >
//                 <FaInstagram className="w-4 h-4" />
//               </a>
//               <a
//                 href="#"
//                 className="bg-black text-white p-2 hover:bg-gray-800 rounded-sm"
//               >
//                 <FaLinkedinIn className="w-4 h-4" />
//               </a>
//               <a
//                 href="#"
//                 className="bg-black text-white p-2 hover:bg-gray-800 rounded-sm"
//               >
//                 <FaYoutube className="w-4 h-4" />
//               </a>
//             </div>

//             <div className="mt-4 flex flex-col gap-3">
//               <h4 className="text-[#f05c2a] font-bold text-xs">
//                 DOWNLOAD BROCHURES
//               </h4>
//               <div className="flex flex-col gap-2">
//                 <select className="border border-gray-300 p-2 text-xs text-gray-600 rounded-sm outline-none w-full bg-white">
//                   <option>Select Program</option>
//                   <option>B.Tech</option>
//                   <option>MBA</option>
//                 </select>
//                 <button className="bg-[#f05c2a] hover:bg-orange-600 text-white p-2 text-xs font-semibold rounded-sm flex items-center justify-center gap-2">
//                   <Download className="w-4 h-4" /> Download PDF
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Contact Details Grid */}
//           <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-6">
//             {/* Top Row Contacts */}
//             <div className="flex flex-col gap-2">
//               <h4 className="text-[#f05c2a] font-bold text-xs mb-1">
//                 ADMISSION CORNER
//               </h4>
//               <Link
//                 href="#"
//                 className="text-black text-xs hover:text-[#f05c2a] font-medium"
//               >
//                 Admissions details
//               </Link>
//               <Link
//                 href="#"
//                 className="text-black text-xs hover:text-[#f05c2a] font-medium"
//               >
//                 DSAT Admissions - Apply Online
//               </Link>
//               <Link
//                 href="#"
//                 className="text-black text-xs hover:text-[#f05c2a] font-medium"
//               >
//                 Direct Admissions - Apply Online
//               </Link>
//               <Link
//                 href="#"
//                 className="text-black text-xs hover:text-[#f05c2a] font-medium"
//               >
//                 Course Eligibility & Fee Structure
//               </Link>
//             </div>

//             <div className="flex flex-col gap-2">
//               <h4 className="text-[#f05c2a] font-bold text-xs mb-1">
//                 ADMISSIONS HELPLINE
//               </h4>
//               <p className="text-black text-xs font-medium">
//                 Email: admissions@dsu.edu.in
//               </p>
//               <p className="text-black text-xs font-medium">
//                 Phone: 080 46461800 / +91 6366885507
//               </p>
//               <h4 className="text-[#f05c2a] font-bold text-xs mt-4 mb-1">
//                 INTERNATIONAL ADMISSIONS
//               </h4>
//               <p className="text-black text-xs font-medium">
//                 Phone: +91 9606022152 / +91 9606022150 / <br />
//                 +91 9606022149
//               </p>
//             </div>

//             <div className="flex flex-col gap-2">
//               <h4 className="text-[#f05c2a] font-bold text-xs mb-1">
//                 REGIONAL PRESENCE
//               </h4>
//               <p className="text-black text-xs font-medium">
//                 East Region: 8240216553
//               </p>
//               <p className="text-black text-xs font-medium">
//                 West Region: 9741488001
//               </p>
//               <p className="text-black text-xs font-medium">
//                 North Region: 7488983636
//               </p>
//               <p className="text-black text-xs font-medium">
//                 South Region: 9962835358
//               </p>
//             </div>

//             {/* Bottom Row Contacts */}
//             <div className="flex flex-col gap-2 md:col-span-1 pr-4">
//               <h4 className="text-[#f05c2a] font-bold text-xs mb-1">
//                 DSU MAIN CAMPUS:
//               </h4>
//               <p className="text-black text-xs font-medium leading-relaxed">
//                 Devarakaggalahalli,
//                 <br />
//                 Harohalli, Kanakapura Road,
//                 <br />
//                 Bengaluru South Dt. - 562 112
//               </p>
//               <p className="text-black text-xs font-medium mt-2">
//                 Email: admissions@dsu.edu.in
//               </p>
//               <p className="text-black text-xs font-medium">
//                 Admissions Helpline: 080 46461800 /<br />
//                 080 49092800
//               </p>
//             </div>

//             <div className="flex flex-col gap-2 md:col-span-1 pr-4">
//               <h4 className="text-[#f05c2a] font-bold text-xs mb-1">
//                 DSU CITY INNOVATION CAMPUS:
//               </h4>
//               <p className="text-black text-xs font-medium leading-relaxed">
//                 Administrative & Main Admission office,
//                 <br />
//                 Kudlu Gate, Hosur Road,
//                 <br />
//                 Bengaluru - 560 114
//               </p>
//               <p className="text-black text-xs font-medium mt-2">
//                 E-mail: admissions@dsu.edu.in | dsat@dsu.edu.in
//               </p>
//               <p className="text-black text-xs font-medium">
//                 Admissions Helpline: 080 46461800 / 080 49092800
//                 <br />/ +91 7760964277 / 8296316737 / 6366885507
//               </p>
//               <p className="text-black text-xs font-medium">
//                 Office of Registrar: 080 4909 2910 / 11
//               </p>
//               <p className="text-black text-xs font-medium">
//                 Office of Dean (Engineering): +91 80 4909 2986 / 32 / 33
//               </p>
//               <p className="text-black text-xs font-medium mt-2">
//                 Dean - MBA: 080 4909 2931
//               </p>
//               <p className="text-black text-xs font-medium">
//                 Enquiry EMBA: 080 4909 2930
//               </p>
//               <p className="text-black text-xs font-medium">
//                 Research Cell: 080 4909 2912
//               </p>
//             </div>

//             <div className="flex flex-col gap-2 md:col-span-1">
//               <h4 className="text-[#f05c2a] font-bold text-xs mb-1">
//                 DSU CITY ADMISSIONS OFFICE:
//               </h4>
//               <p className="text-black text-xs font-medium leading-relaxed">
//                 Gate 2, 6th Floor, University Building,
//                 <br />
//                 Dental Block, Kumaraswamy Layout,
//                 <br />
//                 Bengaluru - 560111
//               </p>
//               <p className="text-black text-xs font-medium mt-2">
//                 E-mail: enquiry@dsu.edu.in /<br />
//                 admissions@dsu.edu.in
//               </p>
//               <p className="text-black text-xs font-medium">
//                 Admissions Helpline: 080 46461800 / 080
//                 <br />
//                 49092800
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Links Section */}
//       <div className="bg-white py-12 px-6 lg:px-20 border-t border-gray-200">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
//           {bottomLinks.map((column) => (
//             <div
//               key={column.id}
//               className="flex flex-col gap-3 lg:border-r border-gray-200 last:border-0 pl-2"
//             >
//               <h4 className="text-[#f05c2a] font-bold text-xs mb-2">
//                 {column.title}
//               </h4>
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

//       {/* Copyright Bar */}
//       <div className="bg-[#cc2b28] text-white text-xs py-4 px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center">
//         <div className="font-medium">
//           Copyright © 2026 DSU. All Rights Reserved
//         </div>
//         <div className="font-medium flex items-center gap-1">
//           Designed & Developed By:{" "}
//           <span className="font-bold tracking-wide">INTER SMART</span>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const local_data = {
  logo: {
    url: "/images/brand-logo.svg",
  },
  description:
    "Empowering minds. Transforming lives. Building an Al-driven future through innovation, research and excellence",
  social_links: [
    {
      id: 1,
      url: "#!",
      icon: "/images/social-link-1.svg",
    },
    {
      id: 2,
      url: "#!",
      icon: "/images/social-link-2.svg",
    },
    {
      id: 3,
      url: "#!",
      icon: "/images/social-link-3.svg",
    },
    {
      id: 4,
      url: "#!",
      icon: "/images/social-link-4.svg",
    },
    {
      id: 5,
      url: "#!",
      icon: "/images/social-link-5.svg",
    },
  ],
  items: [
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "System", value: "system" },
  ],
};

export default function Footer({ data = local_data }) {
  return (
    <footer className="w-full h-auto py-[85px_0] bg-linear-to-b from-[#FFF8EE] to-[#FFF3E0] block">
      <div className="container max-w-[1725px] mx-auto">
        <div className="[--width:350px] w-full h-auto p-[50px] bg-[#FFEACC] rounded-[10px] flex flex-wrap">
          <div className="w-(--width) h-auto">
            <Link
              href="/"
              className="w-[290px] h-auto aspect-290/95 mb-[40px] overflow-hidden block"
            >
              <Image
                src={data?.logo?.url}
                width={290}
                height={95}
                className="w-full h-full object-contain"
                alt="DSU logo"
              />
            </Link>
            <div className="text-[16px] leading-[1.2] font-normal text-black mb-[25px]">
              {data?.description}
            </div>
            <div className="w-full h-auto mb-[90px] gap-[10px] flex flex-wrap">
              {data?.social_links?.map((item) => (
                <div key={item?.id} className="w-auto h-auto">
                  <Link
                    href={item?.url}
                    className="w-[50px] h-auto aspect-square p-[10px] bg-black rounded-[5px] overflow-hidden transition duration-300 flex items-center justify-center hover:bg-linear-to-r from-[#DC2626] to-[#F97316]"
                  >
                    <Image
                      src={item?.icon}
                      width={25}
                      height={25}
                      className="w-full h-full object-contain"
                      alt="Social link"
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className="">
              <div className="text-[18px] leading-normal font-medium bg-linear-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent">
                DOWNLOAD BROCHURES
              </div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {data?.items.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="w-[calc(100%-var(--width)]">
            <div className="w-full h-auto flex flex-wrap">
              {data?.links?.map((item) => (
                <div key={item?.id} className="w-1/3">
                  <div className="w-full h-full block">
                    <div className="text-[18px] leading-normal font-medium bg-linear-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent">
                      {item?.label}
                    </div>
                    {item?.links?.map((link) => (
                      <Link
                        href={link?.url}
                        key={link?.id}
                        className="text-[14px] leading-[1.2] font-normal text-black mb-[10px] block"
                      >
                        {link?.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
