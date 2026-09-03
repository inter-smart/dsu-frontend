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
import { Mail, PhoneCall, Star } from "lucide-react";

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
        <section className="relative py-[40px] xl:py-[55px] 2xl:py-[70px] 3xl:py-[90px]">
            <div className="container">
                {/* Section Title */}
                <h1 className="text-[28px] md:text-[36px] xl:text-[44px] 2xl:text-[50px] font-bold text-[#212121] dark:text-[#F9FAFB] leading-tight mb-[25px] xl:mb-[35px]">
                    {data?.pageTitle || "Contact"}
                </h1>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] xl:gap-[32px] 2xl:gap-[40px] items-stretch">
                    {/* Left Column: Form Card */}
                    <div className="bg-white dark:bg-[#1a1a1a] border border-[#E5E7EB] dark:border-[#333] rounded-[16px] xl:rounded-[20px] p-[24px_20px] sm:p-[30px_25px] xl:p-[35px_30px] 2xl:p-[40px_35px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                        <div>
                            <h2 className="text-[22px] xl:text-[25px] 2xl:text-[28px] font-bold text-[#212121] dark:text-[#F9FAFB] leading-tight mb-[20px] xl:mb-[25px]">
                                {data?.formTitle || "Enquire Now for More"}
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-4 xl:space-y-5">
                                {/* Name */}
                                <div>
                                    <Label htmlFor="name">NAME *</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        required
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
                                        <Label htmlFor="phone">PHONE *</Label>
                                        <PhoneInput
                                            id="phone"
                                            required
                                            placeholder="000 000 0000"
                                            value={formData.phone}
                                            selectedCountry={formData.country}
                                            className="w-full"
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
                                        <Label htmlFor="email">EMAIL ID *</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            placeholder="Enter Your Email ID"
                                            value={formData.email}
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
                                        <Label>SELECT COURSE</Label>
                                        <Select
                                            value={formData.course}
                                            onValueChange={(val) =>
                                                setFormData({ ...formData, course: val })
                                            }
                                        >
                                            <SelectTrigger className="w-full h-[42px] 2xl:h-[46px] rounded-[8px] border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#1f1f1f] px-3.5 text-[13px] 2xl:text-[14px] text-[#212121] dark:text-[#F9FAFB]">
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
                                        <Label>SELECT STATE</Label>
                                        <Select
                                            value={formData.state}
                                            onValueChange={(val) =>
                                                setFormData({ ...formData, state: val })
                                            }
                                        >
                                            <SelectTrigger className="w-full h-[42px] 2xl:h-[46px] rounded-[8px] border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#1f1f1f] px-3.5 text-[13px] 2xl:text-[14px] text-[#212121] dark:text-[#F9FAFB]">
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
                                    <Label htmlFor="message">MESSAGE</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Write Here..."
                                        value={formData.message}
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
                                        className="inline-flex items-center justify-center gap-2.5 h-[40px] 2xl:h-[44px] px-6 rounded-[8px] bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white text-[13px] 2xl:text-[14px] font-semibold tracking-wide hover:opacity-95 transition-all shadow-[0_4px_12px_rgba(220,38,38,0.25)] cursor-pointer disabled:opacity-50"
                                    >
                                        <span>{isSubmitting ? "Submitting..." : "Submit"}</span>
                                        {/* Grid Dots SVG */}
                                        <svg
                                            className="w-3.5 h-3.5 fill-current opacity-90"
                                            viewBox="0 0 16 16"
                                        >
                                            <circle cx="2" cy="2" r="1.5" />
                                            <circle cx="8" cy="2" r="1.5" />
                                            <circle cx="14" cy="2" r="1.5" />
                                            <circle cx="2" cy="8" r="1.5" />
                                            <circle cx="8" cy="8" r="1.5" />
                                            <circle cx="14" cy="8" r="1.5" />
                                            <circle cx="2" cy="14" r="1.5" />
                                            <circle cx="8" cy="14" r="1.5" />
                                            <circle cx="14" cy="14" r="1.5" />
                                        </svg>
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
                    <div className="bg-[#FFF9F2] dark:bg-[#1c1815] border border-[#FDEEE0] dark:border-[#2e2620] rounded-[16px] xl:rounded-[20px] p-[24px_20px] sm:p-[30px_25px] xl:p-[35px_30px] 2xl:p-[40px_35px] flex flex-col justify-between">
                        <div>
                            {/* Heading */}
                            <h2 className="text-[24px] xl:text-[28px] 2xl:text-[34px] font-bold text-[#212121] dark:text-[#F9FAFB] leading-tight mb-[10px] xl:mb-[12px]">
                                {contactInfo.title}
                            </h2>

                            {/* Subtitle */}
                            <p className="text-[12px] 2xl:text-[13.5px] text-[#4A5565] dark:text-[#D1D5DB] leading-relaxed mb-[24px] xl:mb-[28px]">
                                {contactInfo.description}
                            </p>

                            {/* Inner White Contact Card */}
                            <div className="bg-white dark:bg-[#151515] border border-[#F3E5D8] dark:border-[#333] rounded-[12px] xl:rounded-[16px] p-[20px] xl:p-[24px] 2xl:p-[28px] space-y-4 xl:space-y-5">
                                {/* Address */}
                                <div>
                                    <p className="text-[12px] 2xl:text-[13px] text-[#374151] dark:text-[#D1D5DB] leading-relaxed">
                                        {contactInfo.address}
                                    </p>
                                </div>

                                {/* Get Directions Link */}
                                <div>
                                    <Link
                                        href={contactInfo.mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[#F97316] hover:text-[#DC2626] font-bold text-[13px] 2xl:text-[14px] underline underline-offset-4 transition-colors"
                                    >
                                        {/* Map Pin Icon */}
                                        <span className="flex items-center justify-center w-5 h-5">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="w-5 h-5"
                                            >
                                                <path
                                                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                                                    fill="#EA4335"
                                                />
                                                <circle cx="12" cy="9" r="3" fill="#FFFFFF" />
                                            </svg>
                                        </span>
                                        <span>Get Directions</span>
                                    </Link>
                                </div>

                                {/* Divider */}
                                <div className="border-t border-[#F3E5D8] dark:border-[#2a2a2a] pt-4 xl:pt-5 space-y-3.5 xl:space-y-4">
                                    {/* Email */}
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-[38px] h-[38px] 2xl:w-[42px] 2xl:h-[42px] rounded-[10px] bg-[#F9FAFB] dark:bg-[#222] border border-[#E5E7EB] dark:border-[#333] shrink-0 text-[#374151] dark:text-[#D1D5DB]">
                                            <Mail className="w-[18px] h-[18px] 2xl:w-[20px] 2xl:h-[20px] text-[#4B5563] dark:text-[#9CA3AF]" />
                                        </div>
                                        <div>
                                            <div className="text-[12px] 2xl:text-[13px] font-bold text-[#212121] dark:text-white leading-tight">
                                                E-Mail:
                                            </div>
                                            <a
                                                href={`mailto:${contactInfo.email}`}
                                                className="text-[12px] 2xl:text-[13px] text-[#4A5565] dark:text-[#D1D5DB] hover:text-[#DC2626] transition-colors"
                                            >
                                                {contactInfo.email}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Helpline */}
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center justify-center w-[38px] h-[38px] 2xl:w-[42px] 2xl:h-[42px] rounded-[10px] bg-[#F9FAFB] dark:bg-[#222] border border-[#E5E7EB] dark:border-[#333] shrink-0 text-[#374151] dark:text-[#D1D5DB]">
                                            <PhoneCall className="w-[18px] h-[18px] 2xl:w-[20px] 2xl:h-[20px] text-[#4B5563] dark:text-[#9CA3AF]" />
                                        </div>
                                        <div>
                                            <div className="text-[12px] 2xl:text-[13px] font-bold text-[#212121] dark:text-white leading-tight">
                                                Admissions Helpline:
                                            </div>
                                            <div className="text-[12px] 2xl:text-[13px] text-[#4A5565] dark:text-[#D1D5DB]">
                                                {contactInfo.helpline}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Accreditation Badge */}
                        <div className="flex items-center gap-1.5 mt-6 xl:mt-8 text-[#374151] dark:text-[#9CA3AF] text-[11px] xl:text-[12px] font-medium">
                            <div className="flex items-center gap-0.5 text-[#F59E0B]">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-current text-[#F59E0B]" />
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
