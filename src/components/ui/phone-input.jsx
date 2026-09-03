"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const COUNTRIES = [
    { name: "India", code: "IN", dialCode: "+91", flag: "🇮🇳" },
    { name: "United States", code: "US", dialCode: "+1", flag: "🇺🇸" },
    { name: "United Kingdom", code: "GB", dialCode: "+44", flag: "🇬🇧" },
    { name: "United Arab Emirates", code: "AE", dialCode: "+971", flag: "🇦🇪" },
    { name: "Canada", code: "CA", dialCode: "+1", flag: "🇨🇦" },
    { name: "Australia", code: "AU", dialCode: "+61", flag: "🇦🇺" },
    { name: "Singapore", code: "SG", dialCode: "+65", flag: "🇸🇬" },
    { name: "Saudi Arabia", code: "SA", dialCode: "+966", flag: "🇸🇦" },
    { name: "Qatar", code: "QA", dialCode: "+974", flag: "🇶🇦" },
    { name: "Oman", code: "OM", dialCode: "+968", flag: "🇴🇲" },
    { name: "Kuwait", code: "KW", dialCode: "+965", flag: "🇰🇼" },
    { name: "Bahrain", code: "BH", dialCode: "+973", flag: "🇧🇭" },
    { name: "Germany", code: "DE", dialCode: "+49", flag: "🇩🇪" },
    { name: "France", code: "FR", dialCode: "+33", flag: "🇫🇷" },
    { name: "Malaysia", code: "MY", dialCode: "+60", flag: "🇲🇾" },
    { name: "Nepal", code: "NP", dialCode: "+977", flag: "🇳🇵" },
    { name: "Sri Lanka", code: "LK", dialCode: "+94", flag: "🇱🇰" },
    { name: "Bangladesh", code: "BD", dialCode: "+880", flag: "🇧🇩" },
    { name: "New Zealand", code: "NZ", dialCode: "+64", flag: "🇳🇿" },
    { name: "South Africa", code: "ZA", dialCode: "+27", flag: "🇿🇦" },
    { name: "Japan", code: "JP", dialCode: "+81", flag: "🇯🇵" },
    { name: "China", code: "CN", dialCode: "+86", flag: "🇨🇳" },
    { name: "Indonesia", code: "ID", dialCode: "+62", flag: "🇮🇩" },
    { name: "Philippines", code: "PH", dialCode: "+63", flag: "🇵🇭" },
    { name: "Thailand", code: "TH", dialCode: "+66", flag: "🇹🇭" },
    { name: "Vietnam", code: "VN", dialCode: "+84", flag: "🇻🇳" },
    { name: "Nigeria", code: "NG", dialCode: "+234", flag: "🇳🇬" },
    { name: "Kenya", code: "KE", dialCode: "+254", flag: "🇰🇪" },
    { name: "Brazil", code: "BR", dialCode: "+55", flag: "🇧🇷" },
    { name: "Mexico", code: "MX", dialCode: "+52", flag: "🇲🇽" },
    { name: "Italy", code: "IT", dialCode: "+39", flag: "🇮🇹" },
    { name: "Spain", code: "ES", dialCode: "+34", flag: "🇪🇸" },
    { name: "Netherlands", code: "NL", dialCode: "+31", flag: "🇳🇱" },
    { name: "Switzerland", code: "CH", dialCode: "+41", flag: "🇨🇭" },
    { name: "Sweden", code: "SE", dialCode: "+46", flag: "🇸🇪" },
    { name: "Ireland", code: "IE", dialCode: "+353", flag: "🇮🇪" },
];

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
                    <span className="text-base leading-none">{selectedCountry.flag}</span>
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
                    <div className="absolute top-[calc(100%+6px)] left-0 w-[280px] sm:w-[300px] max-h-[300px] bg-white dark:bg-[#1f1f1f] border border-[#E5E7EB] dark:border-[#333] rounded-[10px] shadow-2xl z-50 overflow-hidden flex flex-col animate-in fade-in-0 zoom-in-95 duration-150">
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
                        <div className="overflow-y-auto flex-1 p-1 scrollbar-thin">
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
                                                <span className="text-base leading-none">{country.flag}</span>
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
