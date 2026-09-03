"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const COUNTRIES = [
    { name: "India", code: "in", dialCode: "+91" },
    { name: "United States", code: "us", dialCode: "+1" },
    { name: "United Kingdom", code: "gb", dialCode: "+44" },
    { name: "United Arab Emirates", code: "ae", dialCode: "+971" },
    { name: "Canada", code: "ca", dialCode: "+1" },
    { name: "Australia", code: "au", dialCode: "+61" },
    { name: "Singapore", code: "sg", dialCode: "+65" },
    { name: "Saudi Arabia", code: "sa", dialCode: "+966" },
    { name: "Qatar", code: "qa", dialCode: "+974" },
    { name: "Oman", code: "om", dialCode: "+968" },
    { name: "Kuwait", code: "kw", dialCode: "+965" },
    { name: "Bahrain", code: "bh", dialCode: "+973" },
    { name: "Germany", code: "de", dialCode: "+49" },
    { name: "France", code: "fr", dialCode: "+33" },
    { name: "Malaysia", code: "my", dialCode: "+60" },
    { name: "Nepal", code: "np", dialCode: "+977" },
    { name: "Sri Lanka", code: "lk", dialCode: "+94" },
    { name: "Bangladesh", code: "bd", dialCode: "+880" },
    { name: "New Zealand", code: "nz", dialCode: "+64" },
    { name: "South Africa", code: "za", dialCode: "+27" },
    { name: "Japan", code: "jp", dialCode: "+81" },
    { name: "China", code: "cn", dialCode: "+86" },
    { name: "Indonesia", code: "id", dialCode: "+62" },
    { name: "Philippines", code: "ph", dialCode: "+63" },
    { name: "Thailand", code: "th", dialCode: "+66" },
    { name: "Vietnam", code: "vn", dialCode: "+84" },
    { name: "Nigeria", code: "ng", dialCode: "+234" },
    { name: "Kenya", code: "ke", dialCode: "+254" },
    { name: "Brazil", code: "br", dialCode: "+55" },
    { name: "Mexico", code: "mx", dialCode: "+52" },
    { name: "Italy", code: "it", dialCode: "+39" },
    { name: "Spain", code: "es", dialCode: "+34" },
    { name: "Netherlands", code: "nl", dialCode: "+31" },
    { name: "Switzerland", code: "ch", dialCode: "+41" },
    { name: "Sweden", code: "se", dialCode: "+46" },
    { name: "Ireland", code: "ie", dialCode: "+353" },
];

function FlagImage({ code, alt, className = "w-5 h-3.5" }) {
    const [hasError, setHasError] = useState(false);
    const countryCode = code?.toLowerCase() || "in";

    if (hasError) {
        return (
            <span className={cn("inline-flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-[10px] font-bold rounded-[2px]", className)}>
                {countryCode.toUpperCase()}
            </span>
        );
    }

    return (
        <img
            src={`https://flagcdn.com/w40/${countryCode}.png`}
            srcSet={`https://flagcdn.com/w80/${countryCode}.png 2x`}
            alt={alt || countryCode}
            width={20}
            height={14}
            onError={() => setHasError(true)}
            className={cn("object-cover rounded-[2px] shadow-xs shrink-0", className)}
            loading="lazy"
        />
    );
}

export const PhoneInput = React.forwardRef(
    (
        {
            value = "",
            onChange,
            selectedCountry = COUNTRIES[0],
            onCountryChange,
            placeholder = "000 000 0000",
            className,
            required = false,
            id = "phone",
            name = "phone",
            ...props
        },
        ref
    ) => {
        const [isOpen, setIsOpen] = useState(false);
        const [searchQuery, setSearchQuery] = useState("");
        const dropdownRef = useRef(null);
        const searchInputRef = useRef(null);

        // Close on outside click
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setIsOpen(false);
                }
            };
            if (isOpen) {
                document.addEventListener("mousedown", handleClickOutside);
            }
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [isOpen]);

        // Focus search on open
        useEffect(() => {
            if (isOpen && searchInputRef.current) {
                setTimeout(() => {
                    searchInputRef.current?.focus();
                }, 50);
            } else {
                setSearchQuery("");
            }
        }, [isOpen]);

        const filteredCountries = COUNTRIES.filter(
            (c) =>
                c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.dialCode.includes(searchQuery) ||
                c.code.toLowerCase().includes(searchQuery.toLowerCase())
        );

        const handleSelectCountry = (country) => {
            if (onCountryChange) {
                onCountryChange(country);
            }
            setIsOpen(false);
        };

        return (
            <div
                ref={dropdownRef}
                className={cn(
                    "relative flex h-[42px] 2xl:h-[46px] w-full rounded-[8px] border border-[#E5E7EB] dark:border-[#333] bg-white dark:bg-[#1f1f1f] focus-within:border-[#F97316] focus-within:ring-1 focus-within:ring-[#F97316] transition-colors",
                    className
                )}
            >
                {/* Country Trigger Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="flex items-center gap-1.5 px-3 bg-[#F9FAFB] dark:bg-[#252525] hover:bg-[#F3F4F6] dark:hover:bg-[#2c2c2c] border-r border-[#E5E7EB] dark:border-[#333] rounded-l-[7px] select-none shrink-0 text-[12px] 2xl:text-[13px] font-medium text-[#374151] dark:text-[#D1D5DB] transition-colors cursor-pointer outline-none"
                    aria-label={`Select country code, currently ${selectedCountry.name} ${selectedCountry.dialCode}`}
                    aria-expanded={isOpen}
                >
                    <FlagImage code={selectedCountry.code} alt={selectedCountry.name} className="w-[18px] h-[13px] 2xl:w-[20px] 2xl:h-[14px]" />
                    <ChevronDown className="w-3 h-3 text-[#6B7280] transition-transform duration-200" />
                    <span className="font-semibold text-[#111827] dark:text-[#F3F4F6]">
                        {selectedCountry.dialCode}
                    </span>
                </button>

                {/* Phone Number Input */}
                <input
                    ref={ref}
                    id={id}
                    name={name}
                    type="tel"
                    required={required}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full bg-transparent px-3.5 py-2 text-[13px] 2xl:text-[14px] text-[#212121] dark:text-[#F9FAFB] placeholder:text-[#9CA3AF] dark:placeholder:text-[#6B7280] outline-none rounded-r-[7px]"
                    {...props}
                />

                {/* Country Dropdown Popover */}
                {isOpen && (
                    <div className="absolute top-[calc(100%+6px)] left-0 w-full max-h-[300px] bg-white dark:bg-[#1f1f1f] border border-[#E5E7EB] dark:border-[#333] rounded-[10px] shadow-2xl z-50 overflow-hidden flex flex-col animate-in fade-in-0 zoom-in-95 duration-150">
                        {/* Search Box */}
                        <div className="p-2 border-b border-[#E5E7EB] dark:border-[#333] bg-[#F9FAFB] dark:bg-[#252525]">
                            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-[6px] bg-white dark:bg-[#191919] border border-[#E5E7EB] dark:border-[#3a3a3a]">
                                <Search className="w-3.5 h-3.5 text-[#9CA3AF] shrink-0" />
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    placeholder="Search country or code..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-transparent text-[12px] text-[#212121] dark:text-[#F3F4F6] placeholder:text-[#9CA3AF] outline-none"
                                />
                            </div>
                        </div>

                        {/* Country List */}
                        <div
                            data-lenis-prevent="true"
                            data-lenis-prevent-touch="true"
                            onWheel={(e) => e.stopPropagation()}
                            className="overflow-y-auto max-h-[220px] flex-1 p-1 overscroll-contain touch-pan-y scrollbar-thin"
                        >
                            {filteredCountries.length > 0 ? (
                                filteredCountries.map((country) => {
                                    const isSelected = selectedCountry.code === country.code;
                                    return (
                                        <button
                                            key={country.code}
                                            type="button"
                                            onClick={() => handleSelectCountry(country)}
                                            className={cn(
                                                "w-full flex items-center justify-between px-2.5 py-2 rounded-[6px] text-left text-[12px] 2xl:text-[13px] hover:bg-[#FFF8F0] dark:hover:bg-[#2c2c2c] transition-colors cursor-pointer",
                                                isSelected &&
                                                    "bg-[#FFF2E6] dark:bg-[#38281d] text-[#EA580C] font-semibold"
                                            )}
                                        >
                                            <div className="flex items-center gap-2.5 truncate mr-2">
                                                <FlagImage code={country.code} alt={country.name} className="w-[18px] h-[13px]" />
                                                <span className="text-[#374151] dark:text-[#E5E7EB] truncate">
                                                    {country.name}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1.5 shrink-0 text-[#6B7280] dark:text-[#9CA3AF]">
                                                <span className="text-[11px] font-mono font-medium">
                                                    {country.dialCode}
                                                </span>
                                                {isSelected && (
                                                    <Check className="w-3.5 h-3.5 text-[#EA580C]" />
                                                )}
                                            </div>
                                        </button>
                                    );
                                })
                            ) : (
                                <div className="p-4 text-center text-[12px] text-[#9CA3AF]">
                                    No country found
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        );
    }
);

PhoneInput.displayName = "PhoneInput";
