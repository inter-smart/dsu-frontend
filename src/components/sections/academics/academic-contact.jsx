"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PhoneInput, COUNTRIES } from "@/components/ui/phone-input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"; 

const inputStyle = `h-[40px] 2xl:h-[45px] 3xl:h-[60px] w-full border border-black/10 rounded-[3px] 2xl:rounded-[4px] 3xl:rounded-[5px] border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#1f1f1f]  text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[16px]  font-normal placeholder:text-[#4A5565] text-[#212121] dark:text-[#F9FAFB]`

export default function AcademicContact({ data }) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        country: COUNTRIES[0],
        email: "",
        course: "",
        state: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 800);
    };

    const contactInfo = data?.info || {
        title: "Start Your Journey With Us",
        description:
            "Take the next step toward a future-ready education supported by innovation, research, and industry collaboration.",
        address:
            "Gate 2, 6th Floor, University Building, Dental Block, Kumaraswamy Layout, Bengaluru - 560 111",
        mapUrl: "https://maps.google.com/?q=Dayananda+Sagar+University+Kumaraswamy+Layout+Bengaluru",
        email: "admissions@dsu.edu.in",
        helpline: "080 46461800 / 080 49092800",
        accreditations: "NAAC A+ Accredited  |  UGC Recognized",
    };

    const courseOptions = data?.courses || [
        "Bachelor of Computer Applications (BCA)",
        "Master of Computer Applications (MCA)",
        "B.Tech in Computer Science & Engineering",
        "B.Tech in AI & Machine Learning",
        "B.Tech in Data Science",
        "M.Tech in Computer Science",
        "Ph.D in Computer Applications",
    ];

    const stateOptions = data?.states || [
        "Karnataka",
        "Andhra Pradesh",
        "Delhi",
        "Gujarat",
        "Kerala",
        "Maharashtra",
        "Tamil Nadu",
        "Telangana",
        "Uttar Pradesh",
        "West Bengal",
        "Other",
    ];

    return (
        <section className="relative py-[20px_40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px]">
            <div className="container">
                {/* Section Title */}
                <h1 className="cmn_Title mb-[25px] xl:mb-[35px]">
                    {data?.pageTitle || "Contact"}
                </h1>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] xl:gap-[32px] 2xl:gap-[40px] items-stretch">
                    {/* Left Column: Form Card */}
                    <div className="bg-white dark:bg-[#1a1a1a] border border-black/10 dark:border-[#333] rounded-[4px] 2xl:rounded-[8px] xl:rounded-[10px] p-[24px_20px] sm:p-[30px_25px] xl:p-[35px_30px] 2xl:p-[40px_35px] 3xl:p-[65px_50px] shadow-[inset_3px_3px_10px_rgba(0,0,0,0.1)] flex flex-col justify-between">
                        <div>
                            <h2 className="text-[22px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[45px] font-bold text-[#212121] dark:text-[#F9FAFB] leading-tight mb-[20px] xl:mb-[25px]">
                                {data?.formTitle || "Enquire Now for More"}
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-4 xl:space-y-5">
                                {/* Name */}
                                <div>
                                    <Label htmlFor="name" className="text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[16px]  font-normal text-[#212121]">NAME *</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        required
                                        className={inputStyle}
                                        placeholder="Enter Your Name"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                    />
                                </div>

                                {/* Phone & Email row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-5">
                                    {/* Phone */}
                                    <div>
                                        <Label htmlFor="phone" className="text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[16px]  font-normal text-[#212121]">PHONE *</Label>
                                        <PhoneInput
                                            id="phone"
                                            required
                                            placeholder="000 000 0000"
                                            value={formData.phone}
                                            selectedCountry={formData.country}
                                           className={`${inputStyle} [&>button]:bg-transparent`}
                                            onCountryChange={(country) =>
                                                setFormData({ ...formData, country })
                                            }
                                            onChange={(e) =>
                                                setFormData({ ...formData, phone: e.target.value })
                                            }
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <Label htmlFor="email" className="text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[16px]  font-normal text-[#212121]">EMAIL ID *</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            placeholder="Enter Your Email ID"
                                            value={formData.email}
                                            className={inputStyle}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>

                                {/* Select Course & Select State row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-5">
                                    {/* Course */}
                                    <div>
                                        <Label className="text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[16px]  font-normal text-[#212121]">SELECT COURSE</Label>
                                        <Select
                                            value={formData.course}
                                            onValueChange={(val) =>
                                                setFormData({ ...formData, course: val })
                                            }
                                        >
                                            <SelectTrigger className={inputStyle}>
                                                <SelectValue placeholder="Select Course" />
                                            </SelectTrigger>
                                            <SelectContent className="max-h-[260px] bg-white dark:bg-[#1f1f1f] border border-[#E5E7EB] dark:border-[#333] rounded-[8px] shadow-lg z-50">
                                                {courseOptions.map((course, idx) => (
                                                    <SelectItem
                                                        key={idx}
                                                        value={course}
                                                        className="text-[13px] py-2 px-3 text-[#374151] dark:text-[#D1D5DB] hover:bg-[#FFF8F0] dark:hover:bg-[#2a2a2a] cursor-pointer"
                                                    >
                                                        {course}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {/* State */}
                                    <div>
                                        <Label className="text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[16px]  font-normal text-[#212121]">SELECT STATE</Label>
                                        <Select
                                            value={formData.state}
                                            onValueChange={(val) =>
                                                setFormData({ ...formData, state: val })
                                            }
                                        >
                                            <SelectTrigger className={inputStyle}>
                                                <SelectValue placeholder="Select State" />
                                            </SelectTrigger>
                                            <SelectContent className="max-h-[260px] bg-white dark:bg-[#1f1f1f] border border-[#E5E7EB] dark:border-[#333] rounded-[8px] shadow-lg z-50">
                                                {stateOptions.map((state, idx) => (
                                                    <SelectItem
                                                        key={idx}
                                                        value={state}
                                                        className="text-[13px] py-2 px-3 text-[#374151] dark:text-[#D1D5DB] hover:bg-[#FFF8F0] dark:hover:bg-[#2a2a2a] cursor-pointer"
                                                    >
                                                        {state}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <Label htmlFor="message" className="text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[16px] font-normal text-[#212121]">MESSAGE</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Write Here..."
                                        value={formData.message}
                                        className="rounded-[3px] 2xl:rounded-[4px] 3xl:rounded-[5px] "
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="pt-1">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group relative flex h-[30px] w-fit min-w-[130px] items-center justify-center gap-[10px] overflow-hidden rounded-[6px] bg-gradient-to-r from-[#DC2626] to-[#F97316] text_1 font-bold capitalize text-white transition-all duration-500 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(220,38,38,0.3)] xl:h-[35px]  2xl:h-[40px] 2xl:gap-[10px] 2xl:rounded-[4px] 3xl:h-[50px] px-[10px]  before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full"
                                    >
                                        <span className="relative z-[1] transition-transform duration-300  ">
                                            {isSubmitting ? "Submitting..." : "Submit"}</span>

                                        <div className="relative z-[1] flex h-[13px] w-[15px] items-center justify-center transition-all duration-300 group-hover:translate-x-[4px] group-hover:scale-110">
                                            <svg
                                                width="11"
                                                height="9"
                                                viewBox="0 0 11 9"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="transition-transform duration-300 group-hover:rotate-180"
                                            >
                                                <circle cx="5.12232" cy="0.919192" r="0.919192" fill="white" />
                                                <circle cx="5.12232" cy="4.33325" r="0.919192" fill="white" />
                                                <circle cx="5.12232" cy="7.74732" r="0.919192" fill="white" />
                                                <circle cx="9.32349" cy="4.33325" r="0.919192" fill="white" />
                                                <circle cx="0.919192" cy="4.33325" r="0.919192" fill="white" />
                                            </svg>
                                        </div>


                                    </button>

                                    {submitted && (
                                        <p className="text-[12px] text-green-600 font-medium mt-2">
                                            Thank you! Your enquiry has been submitted successfully.
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right Column: Journey Info Card */}
                    <div className="bg-[#FFF9F2] dark:bg-[#1c1815] border border-[#FDEEE0] dark:border-[#2e2620] rounded-[4px] 2xl:rounded-[8px] xl:rounded-[10px] p-[24px_20px] sm:p-[30px_25px] xl:p-[35px_30px] 2xl:p-[40px_35px] flex flex-col justify-between">
                        <div>
                            {/* Heading */}
                            <h2 className="cmn_Title mb-[10px] xl:mb-[12px]">
                                {contactInfo.title}
                            </h2>

                            {/* Subtitle */}
                            <p className="text_1 mb-[24px] xl:mb-[28px] lg:max-w-[85%]">
                                {contactInfo.description}
                            </p>

                            {/* Inner White Contact Card */}
                            <div className="bg-white dark:bg-[#151515]   rounded-[3px] xl:rounded-[5px] p-[20px] xl:p-[24px] 2xl:p-[28px] space-y-4 xl:space-y-5">
                                {/* Address */}
                                <div>
                                    <p className="text_1 max-w-[80%]">
                                        {contactInfo.address}
                                    </p>
                                </div>

                                {/* Get Directions Link */}
                                <div>
                                    <Link
                                        href={contactInfo.mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 hover:text-[#DC2626] font-bold text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] underline underline-offset-4 transition-colors 
                                        bg-gradient-to-r from-[#DC2626] to-[#F97316] bg-clip-text text-transparent  mb-[10px] 3xl:mb-[20px]"
                                    >
                                        {/* Map Pin Icon */}
                                        <span className="flex items-center justify-center w-[34px] h-[24px]">
                                            <svg className="w-full h-full object-cover" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.024 4.12573C15.4168 4.12573 14.1094 5.43327 14.1094 7.04037C14.1094 8.64766 15.4169 9.9553 17.024 9.9553C18.6311 9.9553 19.9387 8.64766 19.9387 7.04037C19.9388 5.43318 18.6312 4.12573 17.024 4.12573Z" fill="url(#paint0_linear_4946_100664)" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2917 20.4981C17.2163 20.5717 17.1185 20.6084 17.0207 20.6084C16.923 20.6084 16.8252 20.5717 16.7498 20.4981C16.7015 20.451 15.5803 19.3526 14.1998 17.6512H12.3516L14.0184 24.0811H20.7925L27.4074 17.6512H19.8417C18.4612 19.3526 17.34 20.4509 17.2917 20.4981Z" fill="url(#paint1_linear_4946_100664)" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6149 17.8868L2.25781 24.0812H13.2207L11.6149 17.8868Z" fill="url(#paint2_linear_4946_100664)" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M34.2545 24.0812L29.1197 17.6512H28.5212L21.9062 24.0812H34.2545Z" fill="url(#paint3_linear_4946_100664)" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M-0.210938 24.0812H0.849961L10.5629 17.6512H4.92395L-0.210938 24.0812Z" fill="url(#paint4_linear_4946_100664)" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0251 0C13.1429 0 9.98438 3.15829 9.98438 7.04043C9.98438 10.4485 12.5443 14.3485 14.6919 17.0202C15.6975 18.2714 16.5941 19.2252 17.0251 19.6688C17.4561 19.2252 18.3527 18.2714 19.3583 17.0202C21.5058 14.3485 24.0658 10.4485 24.0658 7.04034C24.0658 3.15829 20.9074 0 17.0251 0ZM17.0251 10.7313C14.9901 10.7313 13.3345 9.07556 13.3345 7.04043C13.3345 5.00549 14.9901 3.34987 17.0251 3.34987C19.06 3.34987 20.7157 5.0054 20.7157 7.04043C20.7157 9.07556 19.0601 10.7313 17.0251 10.7313Z" fill="url(#paint5_linear_4946_100664)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_4946_100664" x1="14.1094" y1="7.04051" x2="19.9387" y2="7.04051" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#DC2626" />
                                                        <stop offset="1" stop-color="#F97316" />
                                                    </linearGradient>
                                                    <linearGradient id="paint1_linear_4946_100664" x1="12.3516" y1="20.8662" x2="27.4074" y2="20.8662" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#DC2626" />
                                                        <stop offset="1" stop-color="#F97316" />
                                                    </linearGradient>
                                                    <linearGradient id="paint2_linear_4946_100664" x1="2.25781" y1="20.984" x2="13.2207" y2="20.984" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#DC2626" />
                                                        <stop offset="1" stop-color="#F97316" />
                                                    </linearGradient>
                                                    <linearGradient id="paint3_linear_4946_100664" x1="21.9062" y1="20.8662" x2="34.2545" y2="20.8662" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#DC2626" />
                                                        <stop offset="1" stop-color="#F97316" />
                                                    </linearGradient>
                                                    <linearGradient id="paint4_linear_4946_100664" x1="-0.210938" y1="20.8662" x2="10.5629" y2="20.8662" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#DC2626" />
                                                        <stop offset="1" stop-color="#F97316" />
                                                    </linearGradient>
                                                    <linearGradient id="paint5_linear_4946_100664" x1="9.98438" y1="9.83442" x2="24.0658" y2="9.83442" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#DC2626" />
                                                        <stop offset="1" stop-color="#F97316" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>

                                        </span>
                                        <span>Get Directions</span>
                                    </Link>
                                </div>

                                {/* Divider */}
                                <div className="space-y-3.5 xl:space-y-4">
                                    {/* Email */}
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-[35px] xl:w-[45px] 2xl:w-[50px] 3xl:w-[65px] h-[30px] xl:h-[38px] 2xl:h-[45px] 3xl:h-[58px] p-[5px] xl:p-[10px] 2xl:p-[12px] rounded-[4px] bg-[#F9FAFB] dark:bg-[#222] border border-[#E5E7EB] dark:border-[#333] shrink-0 text-[#374151] dark:text-[#D1D5DB]">
                                            <svg className="w-full h-full object-cover" viewBox="0 0 37 19" fill="none" >
                                                <path d="M15.6094 0.5H32.9531C34.9085 0.5 36.5 2.09145 36.5 4.04688C36.5 4.30682 36.4713 4.56798 36.415 4.81738V4.81934L34.1025 15.2236V15.2246C33.7485 16.8305 32.2892 18 30.6406 18H13.2969C11.3415 18 9.75 16.4085 9.75 14.4531C9.75 14.1932 9.77867 13.932 9.83496 13.6826V13.6807L12.1475 3.27637V3.27539C12.5015 1.66947 13.9608 0.5 15.6094 0.5ZM33.0625 4.54688L23.8193 10.8486C23.6083 10.992 23.3669 11.0625 23.125 11.0625C22.8428 11.0625 22.5642 10.9668 22.3379 10.7783H22.3369L15.0938 4.75879L14.4639 4.23535L14.2861 5.03418L12.2441 14.2178L12.2344 14.2637L12.2324 14.3105C12.2224 14.6328 12.3112 14.9383 12.5098 15.1709C12.7107 15.4061 12.9959 15.5312 13.2969 15.5312H30.6406C31.2131 15.5312 31.6005 15.108 31.6924 14.6904L31.6934 14.6914L33.832 5.06836L34.1064 3.83594L33.0625 4.54688ZM1.73438 12.0625H5.20312C5.88436 12.0625 6.4375 12.6156 6.4375 13.2969C6.4375 13.9781 5.88436 14.5312 5.20312 14.5312H1.73438C1.05314 14.5312 0.5 13.9781 0.5 13.2969C0.5 12.6156 1.05314 12.0625 1.73438 12.0625ZM17.8682 3.85352L22.9092 8.04395L23.1992 8.28418L23.5107 8.07227L29.6553 3.88184L30.9941 2.96875H16.8037L17.8682 3.85352ZM1.73438 3.96875H7.51562C8.19686 3.96875 8.75 4.52189 8.75 5.20312C8.75 5.88436 8.19686 6.4375 7.51562 6.4375H1.73438C1.05314 6.4375 0.5 5.88436 0.5 5.20312C0.5 4.52189 1.05314 3.96875 1.73438 3.96875Z" fill="#212121" stroke="white" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text_1 text-[#212121] font-medium dark:text-white leading-tight mb-[4px]">
                                                 E-Mail:
                                            </div>
                                            <a
                                                href={`mailto:${contactInfo.email}`}
                                                className="text_1 text-[#4A5565] dark:text-[#D1D5DB] dark:text-[#D1D5DB] hover:text-[#DC2626] transition-colors"
                                            >
                                                {contactInfo.email}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Helpline */}
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-[35px] xl:w-[45px] 2xl:w-[50px] 3xl:w-[65px] h-[30px] xl:h-[38px] 2xl:h-[45px] 3xl:h-[58px] p-[5px] xl:p-[10px] 2xl:p-[12px]  rounded-[4px] bg-[#F9FAFB] dark:bg-[#222] border border-[#E5E7EB] dark:border-[#333] shrink-0 text-[#374151] dark:text-[#D1D5DB]">
                                            <svg className="w-full h-full object-cover" viewBox="0 0 32 32" fill="none"  >
                                                <path d="M17.5039 1.80664C24.5311 1.80664 30.248 7.52357 30.248 14.5508C30.2479 15.0012 29.8824 15.3671 29.4316 15.3672C28.9807 15.3672 28.6154 15.0013 28.6152 14.5508C28.6152 8.42431 23.6304 3.43945 17.5039 3.43945C17.053 3.43945 16.6875 3.07397 16.6875 2.62305C16.6875 2.17212 17.053 1.80664 17.5039 1.80664Z" fill="#212121" stroke="white" stroke-width="0.5" />
                                                <path d="M17.5039 5.21423C22.6521 5.21423 26.8396 9.40206 26.8398 14.5502C26.8398 15.0008 26.4744 15.3666 26.0234 15.3666C25.5726 15.3664 25.207 15.0007 25.207 14.5502C25.2068 10.3028 21.7511 6.84705 17.5039 6.84705C17.0529 6.84705 16.6875 6.48128 16.6875 6.03064C16.6876 5.57995 17.0529 5.21423 17.5039 5.21423Z" fill="#212121" stroke="white" stroke-width="0.5" />
                                                <path d="M17.5039 8.62244C20.7728 8.62244 23.4315 11.2813 23.4316 14.5502C23.4316 15.0008 23.0662 15.3666 22.6152 15.3666C22.1644 15.3664 21.7988 15.0007 21.7988 14.5502C21.7987 12.182 19.8719 10.2552 17.5039 10.2552C17.053 10.2552 16.6875 9.88976 16.6875 9.43884C16.6875 8.98792 17.053 8.62244 17.5039 8.62244Z" fill="#212121" stroke="white" stroke-width="0.5" />
                                                <path d="M17.5039 12.0303C18.8938 12.0303 20.0244 13.1606 20.0244 14.5508C20.0243 15.0012 19.6588 15.3671 19.208 15.3672C18.7571 15.3672 18.3917 15.0013 18.3916 14.5508C18.3916 14.0616 17.9931 13.6631 17.5039 13.6631C17.0529 13.6631 16.6875 13.2973 16.6875 12.8467C16.6875 12.3958 17.053 12.0303 17.5039 12.0303Z" fill="#212121" stroke="white" stroke-width="0.5" />
                                                <path d="M11.2539 19.5C11.7049 19.5 12.0702 19.8657 12.0703 20.3164C12.0703 20.7673 11.7048 21.1328 11.2539 21.1328C10.803 21.1328 10.4375 20.7673 10.4375 20.3164C10.4376 19.8657 10.8029 19.5 11.2539 19.5Z" fill="#212121" stroke="white" stroke-width="0.5" />
                                                <path d="M4.11133 6.34387C4.87329 5.58244 6.10541 5.58238 6.86719 6.34387L11.2734 10.7501C12.0353 11.512 12.035 12.7454 11.2734 13.507L9.41016 15.3712C9.28296 15.4984 9.19761 15.6931 9.17676 15.9103C9.15602 16.1272 9.20139 16.3426 9.30469 16.5031C9.60478 16.9688 9.92774 17.4278 10.2637 17.8673C10.5373 18.2254 10.4683 18.7372 10.1104 19.0109L10.1113 19.0118C9.7532 19.2858 9.24071 19.2171 8.9668 18.8595H8.96582C8.60357 18.3854 8.25636 17.8901 7.93262 17.3878C7.3056 16.4144 7.4431 15.0277 8.25488 14.2159L10.1191 12.3517C10.2421 12.2286 10.242 12.0285 10.1191 11.9054L5.71289 7.49915V7.49817C5.58905 7.3744 5.38914 7.37462 5.26562 7.49817V7.49915L3.64258 9.12122C2.37913 10.3845 2.02777 12.3012 2.76074 13.8868C4.93321 18.5872 9.19867 24.9313 17.2617 28.8976L18.0537 29.2736C19.687 30.0225 21.6306 29.678 22.8887 28.42L24.5381 26.7716C24.6611 26.6486 24.6609 26.4475 24.5381 26.3243L20.1318 21.9181C20.0086 21.795 19.8079 21.7949 19.6846 21.9181L17.8203 23.7814C17.0086 24.5931 15.6229 24.7316 14.6494 24.1046C14.1285 23.769 13.618 23.4084 13.125 23.0294L12.6377 22.6447C12.2879 22.3601 12.2354 21.8458 12.5195 21.4962L12.5762 21.4337C12.8686 21.141 13.3412 21.1115 13.6689 21.3781C14.2622 21.8612 14.8896 22.3167 15.5332 22.7316C15.6938 22.8349 15.9091 22.8811 16.126 22.8605C16.3434 22.8397 16.5387 22.7544 16.666 22.6271L18.5303 20.7628C19.2904 20.0028 20.5271 20.0026 21.2871 20.7628L25.6924 25.1691C26.4525 25.9291 26.4524 27.1656 25.6924 27.9259L24.043 29.5734L24.0439 29.5743C22.2971 31.3212 19.6145 31.7857 17.373 30.7579C10.1084 27.4279 4.57086 21.6955 1.27832 14.5724C0.25695 12.3631 0.745527 9.70975 2.48828 7.96692L4.11035 6.34387H4.11133Z" fill="#212121" stroke="white" stroke-width="0.5" />
                                            </svg>

                                        </div>
                                        <div>
                                            <div className="text_1 text-[#212121] font-medium dark:text-white leading-tight mb-[4px]">
                                                Admissions Helpline:
                                            </div>
                                            <div className="text_1 text-[#4A5565] dark:text-[#D1D5DB]">
                                                {contactInfo.helpline}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Accreditation Badge */}
                        <div className="flex items-center gap-1.5 mt-6 xl:mt-8 text-[#212121] dark:text-[#9CA3AF] text-[11px] xl:text-[12px] 2xl:text-[14px] font-medium">
                            <div className="flex items-center gap-0.5 text-[#F59E0B]">
                                {[...Array(5)].map((_, i) => (
                                    // <Star key={i} className="w-3.5 h-3.5 fill-current text-[#F59E0B]" />
                                    <span className="text-[#FDC72F]">★</span>
                                ))}
                            </div>
                            <span className="ml-1">{contactInfo.accreditations}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
