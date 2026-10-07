"use client";

import React, { useState } from "react";
import Image from "next/image";
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

const inputStyle = `h-[40px] 2xl:h-[45px] 3xl:h-[50px] w-full border border-black/10 rounded-[4px] 2xl:rounded-[6px] border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#1f1f1f] text-[11px] xl:text-[13px] 2xl:text-[14px] font-normal placeholder:text-[#9CA3AF] text-[#212121] dark:text-[#F9FAFB] focus-visible:ring-1 focus-visible:ring-[#F97316]`;

export default function RecruiteDsu({ data }) {
    const {
        leftCard = {
            title: "Recruit the Talent That Moves Your Organisation Forward.",
            description:
                "Tell us about your hiring requirements and our Training & Placement team will connect with you to plan the next steps.",
            whatsappLabel: "WhatsApp / Placement Enquiry",
            phone: "+91 98863 94532",
            image: "/images/recruiteDsu.jpg",
        },
        formCard = {
            title: "Recruit at DSU",
            description:
                "Share your organisation and hiring requirements with our placement team.",
            buttonText: "SUBMIT RECRUITMENT ENQUIRY",
        },
    } = data || {};

    const [formData, setFormData] = useState({
        orgName: "",
        contactPerson: "",
        workEmail: "",
        phone: "",
        country: COUNTRIES[0],
        hiringType: "Campus Recruitment",
        talentArea: "Engineering & Technology",
        requirements: "",
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

    const hiringTypeOptions = [
        "Campus Recruitment",
        "Off-Campus Recruitment",
        "Internship Hiring",
        "Leadership Hiring",
    ];

    const talentAreaOptions = [
        "Engineering & Technology",
        "Management & Commerce",
        "Computer Applications (MCA/BCA)",
        "Pharmaceutical Sciences",
        "Basic & Applied Sciences",
        "Design & Architecture",
        "Nursing & Healthcare",
    ];

    return (
        <section className="relative py-[40px] sm:py-[50px] lg:py-[65px] xl:py-[85px] 2xl:py-[100px] bg-white dark:bg-[#0f1011] transition-colors duration-300">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 2xl:gap-10 items-stretch">
                    <div className="relative rounded-[4px] md:hidden lg:block sm:rounded-[6px] 2xl:rounded-[10px] overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] xl:min-h-[640px] flex flex-col justify-end shadow-md">
                        {/* Background Image */}
                        <Image
                            src={leftCard.image || "/images/corporate-connect.jpg"}
                            alt={leftCard.title || "Recruit at DSU"}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                        />

                        {/* Dark Gradient Overlay for optimal contrast */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/25 z-1" />

                        {/* Content */}
                        <div className="relative z-10 p-6 sm:p-8 xl:p-10 2xl:p-12 flex flex-col justify-end h-full">
                            <h2 className="cmn_Title text-white max-w-[85%]">
                                {leftCard.title}
                            </h2>

                            <p className="text-[13px] sm:text-[14px] xl:text-[15px] 2xl:text-[16px] text-white/85 font-normal leading-relaxed mb-6 sm:mb-8 max-w-[560px]">
                                {leftCard.description}
                            </p>

                            {/* Divider Line */}
                            <div className="w-full h-[1px] bg-white/20 mb-5 sm:mb-6" />

                            {/* WhatsApp / Placement Enquiry */}
                            <div>
                                <span className="block text-[11px] sm:text-[12px] 2xl:text-[13px] font-medium bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit mb-2 tracking-wide">
                                    {leftCard.whatsappLabel}
                                </span>

                                <a
                                    href={`https://wa.me/${leftCard.phone?.replace(/[^0-9]/g, "") || "919886394532"}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 sm:gap-3 group"
                                >
                                    {/* Green WhatsApp Icon */}
                                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-sm transition-transform group-hover:scale-105">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-4 h-4 sm:w-4.5 sm:h-4.5"
                                        >
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                    </span>

                                    <span className="text-[19px] sm:text-[21px] xl:text-[23px] 2xl:text-[25px] font-bold text-white tracking-wide group-hover:text-[#F97316] transition-colors">
                                        {leftCard.phone}
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
 
                    <div className="bg-[#FAF5EE] dark:bg-[#18181A]  dark:border-[#2C2C2E] rounded-[6px] sm:rounded-[8px] 2xl:rounded-[10px] p-4 sm:p-8 xl:p-8 2xl:p-[40px] 3xl:p-[50px] flex flex-col justify-center">
                        <div className="mb-6 sm:mb-7">
                            <h3 className="text-[24px] sm:text-[28px] xl:text-[32px] 2xl:text-[36px] font-bold text-[#1F1F1F] dark:text-white leading-tight mb-2 tracking-tight">
                                {formCard.title}
                            </h3>
                            <p className="text-[13px] sm:text-[14px] xl:text-[15px] text-[#5A6472] dark:text-[#9CA3AF] leading-relaxed">
                                {formCard.description}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4 xl:space-y-4.5">
                            {/* Row 1: Organisation Name & Contact Person */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-4.5">
                                <div>
                                    <Label htmlFor="orgName" className="block text-[11px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] font-normal text-[#212121] dark:text-[#E5E7EB] uppercase tracking-wider mb-1.5">
                                        ORGANISATION NAME *
                                    </Label>
                                    <Input
                                        id="orgName"
                                        type="text"
                                        required
                                        className={inputStyle}
                                        placeholder="Enter Name"
                                        value={formData.orgName}
                                        onChange={(e) =>
                                            setFormData({ ...formData, orgName: e.target.value })
                                        }
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="contactPerson" className="block text-[11px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] font-normal text-[#212121] dark:text-[#E5E7EB] uppercase tracking-wider mb-1.5">
                                        CONTACT PERSON *
                                    </Label>
                                    <Input
                                        id="contactPerson"
                                        type="text"
                                        required
                                        className={inputStyle}
                                        placeholder="Full Name"
                                        value={formData.contactPerson}
                                        onChange={(e) =>
                                            setFormData({ ...formData, contactPerson: e.target.value })
                                        }
                                    />
                                </div>
                            </div>

                            {/* Row 2: Work Email & Phone */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-4.5">
                                <div>
                                    <Label htmlFor="workEmail" className="block text-[11px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] font-normal text-[#212121] dark:text-[#E5E7EB] uppercase tracking-wider mb-1.5">
                                        WORK EMAIL *
                                    </Label>
                                    <Input
                                        id="workEmail"
                                        type="email"
                                        required
                                        className={inputStyle}
                                        placeholder="name@company.com"
                                        value={formData.workEmail}
                                        onChange={(e) =>
                                            setFormData({ ...formData, workEmail: e.target.value })
                                        }
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="phone" className="block text-[11px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] font-normal text-[#212121] dark:text-[#E5E7EB] uppercase tracking-wider mb-1.5">
                                        PHONE *
                                    </Label>
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
                            </div>

                            {/* Row 3: Hiring Type & Preferred Talent Area */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-4.5">
                                <div>
                                    <Label className="block text-[11px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] font-normal text-[#212121] dark:text-[#E5E7EB] uppercase tracking-wider mb-1.5">
                                        HIRING TYPE
                                    </Label>
                                    <Select
                                        value={formData.hiringType}
                                        onValueChange={(val) =>
                                            setFormData({ ...formData, hiringType: val })
                                        }
                                    >
                                        <SelectTrigger className={inputStyle}>
                                            <SelectValue placeholder="Campus Recruitment" />
                                        </SelectTrigger>
                                        <SelectContent className="max-h-[260px] bg-white dark:bg-[#1f1f1f] border border-[#E5E7EB] dark:border-[#333] rounded-[8px] shadow-lg z-50">
                                            {hiringTypeOptions.map((opt, idx) => (
                                                <SelectItem
                                                    key={idx}
                                                    value={opt}
                                                    className="text-[13px] py-2 px-3 text-[#374151] dark:text-[#D1D5DB] hover:bg-[#FFF8F0] dark:hover:bg-[#2a2a2a] cursor-pointer"
                                                >
                                                    {opt}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label className="block text-[11px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] font-normal text-[#212121] dark:text-[#E5E7EB] uppercase tracking-wider mb-1.5">
                                        PREFERRED TALENT AREA
                                    </Label>
                                    <Select
                                        value={formData.talentArea}
                                        onValueChange={(val) =>
                                            setFormData({ ...formData, talentArea: val })
                                        }
                                    >
                                        <SelectTrigger className={inputStyle}>
                                            <SelectValue placeholder="Engineering & Technology" />
                                        </SelectTrigger>
                                        <SelectContent className="max-h-[260px] bg-white dark:bg-[#1f1f1f] border border-[#E5E7EB] dark:border-[#333] rounded-[8px] shadow-lg z-50">
                                            {talentAreaOptions.map((opt, idx) => (
                                                <SelectItem
                                                    key={idx}
                                                    value={opt}
                                                    className="text-[13px] py-2 px-3 text-[#374151] dark:text-[#D1D5DB] hover:bg-[#FFF8F0] dark:hover:bg-[#2a2a2a] cursor-pointer"
                                                >
                                                    {opt}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Row 4: Hiring Requirements Textarea */}
                            <div>
                                <Label htmlFor="requirements" className="block text-[11px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] font-normal text-[#212121] dark:text-[#E5E7EB] uppercase tracking-wider mb-1.5">
                                    HIRING REQUIREMENTS *
                                </Label>
                                <Textarea
                                    id="requirements"
                                    name="requirements"
                                    value={formData.requirements}
                                    onChange={(e) =>
                                        setFormData({ ...formData, requirements: e.target.value })
                                    }
                                    rows={3}
                                    placeholder="Tell us about roles, eligibility, number of openings, salary range, preferred dates or other requirements."
                                    required
                                    className="w-full border border-black/10 rounded-[4px] 2xl:rounded-[6px] border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#1f1f1f] text-[11px] xl:text-[13px] 2xl:text-[14px] font-normal placeholder:text-[#9CA3AF] text-[#212121] dark:text-[#F9FAFB] min-h-[105px] xl:min-h-[115px] resize-none focus-visible:ring-1 focus-visible:ring-[#F97316]"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-2.5 3xl:py-4 px-6 rounded-[4px] 2xl:rounded-[6px] text-white font-bold text_1   uppercase bg-linear-to-r from-(--basecolor) to-(--basecolor2) hover:opacity-90 active:scale-[0.99] transition-all cursor-pointer shadow-sm mt-1 sm:mt-2 disabled:opacity-50"
                            >
                                {isSubmitting ? "Submitting..." : formCard.buttonText}
                            </button>

                            {submitted && (
                                <p className="text-sm font-medium text-green-600 text-center mt-2">
                                    Thank you! Your recruitment enquiry has been submitted.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
