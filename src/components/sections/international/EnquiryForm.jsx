"use client";

import { useState } from "react";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { validateName, validateEmail, validatePhone } from "@/lib/form-validation";
import { PhoneInput, COUNTRIES } from "@/components/ui/phone-input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";


const EMPTY_VALUES = {
    name: "",
    phone: "",
    email: "",
    country: "",
    state: "",
    city: "",
    schoolId: "",
    programId: "",
    courseId: "",
    consent: false,
    website: "",
};

// Order of the fields in the form: the first invalid one gets the focus
const FIELD_ORDER = [
    "name",
    "phone",
    "email",
    "country",
    "state",
    "city",
    "schoolId",
    "programId",
    "courseId",
    "consent",
];

// Choices are validated the moment they change; text fields on blur
const INSTANT_FIELDS = ["country", "schoolId", "programId", "courseId", "consent"];

const fieldClass =
    "h-[44px] w-full rounded-[3px] border border-black/15 bg-white px-4 text-[14px] text-[#222] shadow-none placeholder:text-[#9a9a9a] focus-visible:border-(--basecolor) focus-visible:ring-0 2xl:h-[45px] 2xl:text-[15px]";
const labelClass = "text-[10px] font-normal uppercase  text-[#222] 2xl:text-[11px] 3xl:text-[12px] !mb-[1px]";
const hintClass = "text-[12px] lg:text-[14px] 2xl:text-[12px] leading-snug text-[#666]";

// The message for one field, or "" when it is valid
function validateField(name, values) {
    const value = typeof values[name] === "string" ? values[name].trim() : values[name];

    if (name === "name") return validateName(value);
    if (name === "phone") return validatePhone(value);
    if (name === "email") return validateEmail(value);
    if (name === "country" && !value) return "Select your country";
    if (name === "state") {
        if (!value) return "Enter your state";
        if (value.length > 100) return "State must be 100 characters or fewer";
    }
    if (name === "city") {
        if (!value) return "Enter your city";
        if (value.length > 100) return "City must be 100 characters or fewer";
    }
    if (name === "schoolId" && !value) return "Select a school";
    if (name === "programId" && !value) return "Select a program";
    if (name === "courseId" && !value) return "Select a course";
    if (name === "consent" && value !== true) return "Please accept to continue";

    return "";
}

function RequiredMark() {
    return <span aria-hidden="true"> *</span>;
}

// Text input with its label and inline error
function TextField({ name, label, placeholder, type = "text", autoComplete, maxLength, values, errors, onChange, onBlur }) {
    const errorId = `enquiry-${name}-error`;

    return (
        <Field data-invalid={!!errors[name]}>
            <FieldLabel htmlFor={`enquiry-${name}`} className={labelClass}>
                {label}
                <RequiredMark />
            </FieldLabel>
            <Input
                id={`enquiry-${name}`}
                name={name}
                type={type}
                value={values[name]}
                placeholder={placeholder}
                autoComplete={autoComplete}
                maxLength={maxLength}
                aria-required="true"
                aria-invalid={!!errors[name]}
                aria-describedby={errors[name] ? errorId : undefined}
                onChange={(e) => onChange(name, e.target.value)}
                onBlur={() => onBlur(name)}
                className={fieldClass}
            />
            {errors[name] && <FieldError id={errorId} errors={[{ message: errors[name] }]} />}
        </Field>
    );
}

// Select with its label, inline error and an optional hint shown while it is disabled.
// options: [{ value, label }]
function SelectField({ name, label, placeholder, options, hint, disabled, values, errors, onChange }) {
    const errorId = `enquiry-${name}-error`;
    const hintId = `enquiry-${name}-hint`;
    const describedBy = [errors[name] ? errorId : "", disabled && hint ? hintId : ""].join(" ").trim();

    function labelFor(value) {
        for (let i = 0; i < options.length; i++) {
            if (options[i].value === value) return options[i].label;
        }
        return placeholder;
    }

    return (
        <Field data-invalid={!!errors[name]}>
            <FieldLabel htmlFor={`enquiry-${name}`} className={labelClass}>
                {label}
                <RequiredMark />
            </FieldLabel>
            <Select
                value={values[name]}
                disabled={disabled}
                onValueChange={(value) => {
                    // a programmatic reset reports an empty value: it is not a choice by the visitor
                    if (!value) return;
                    onChange(name, value);
                }}
            >
                <SelectTrigger
                    id={`enquiry-${name}`}
                    aria-required="true"
                    aria-invalid={!!errors[name]}
                    aria-describedby={describedBy || undefined}
                    className={`${fieldClass} justify-between`}
                >
                    <SelectValue placeholder={placeholder}>
                        {(value) => (value ? labelFor(value) : placeholder)}
                    </SelectValue>
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            {disabled && hint && (
                <p id={hintId} className={hintClass}>
                    {hint}
                </p>
            )}
            {errors[name] && <FieldError id={errorId} errors={[{ message: errors[name] }]} />}
        </Field>
    );
}

// data: { title, consentText, submitLabel, catalog }. catalog: { schools: [{ id, title, programs: [{ id,
// title, courses: [{ id, title }] }] }] }; undefined while it is loading.
export default function EnquiryForm({ data, className = "" }) {
    const { title, consentText, submitLabel, catalog } = data;

    const [values, setValues] = useState(EMPTY_VALUES);
    const [phoneCountry, setPhoneCountry] = useState(COUNTRIES[0]);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | sending | success | error
    const [serverMessage, setServerMessage] = useState("");

    const schools = catalog ? catalog.schools : [];
    const catalogLoading = catalog === undefined || catalog === null;

    const school = schools.find((s) => s.id === values.schoolId);
    const programs = school ? school.programs : [];
    const program = programs.find((p) => p.id === values.programId);
    const courses = program ? program.courses : [];

    const countryOptions = COUNTRIES.map((c) => ({ value: c.name, label: c.name }));
    const schoolOptions = schools.map((s) => ({ value: s.id, label: s.title }));
    const programOptions = programs.map((p) => ({ value: p.id, label: p.title }));
    const courseOptions = courses.map((c) => ({ value: c.id, label: c.title }));

    function changeValue(name, value) {
        const next = Object.assign({}, values);
        next[name] = value;

        // changing a choice clears the choices that depend on it
        if (name === "schoolId") {
            next.programId = "";
            next.courseId = "";
        }
        if (name === "programId") {
            next.courseId = "";
        }
        setValues(next);

        // choices are checked at once; text is re-checked only after an error was shown,
        // so the message clears as soon as it is fixed
        const nextErrors = Object.assign({}, errors);
        if (errors[name] || INSTANT_FIELDS.includes(name)) nextErrors[name] = validateField(name, next);
        if (name === "schoolId") {
            delete nextErrors.programId;
            delete nextErrors.courseId;
        }
        if (name === "programId") delete nextErrors.courseId;
        setErrors(nextErrors);

        if (status === "success") setStatus("idle");
    }

    function blurField(name) {
        const current = Object.assign({}, values);

        // text fields are trimmed when the visitor leaves them
        if (typeof current[name] === "string" && current[name] !== current[name].trim()) {
            current[name] = current[name].trim();
            setValues(current);
        }

        const nextErrors = Object.assign({}, errors);
        nextErrors[name] = validateField(name, current);
        setErrors(nextErrors);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (status === "sending") return;

        const trimmedValues = Object.assign({}, values);
        const names = Object.keys(trimmedValues);
        for (let i = 0; i < names.length; i++) {
            if (typeof trimmedValues[names[i]] === "string") {
                trimmedValues[names[i]] = trimmedValues[names[i]].trim();
            }
        }
        setValues(trimmedValues);

        const nextErrors = {};
        let firstInvalid = "";
        for (let i = 0; i < FIELD_ORDER.length; i++) {
            const message = validateField(FIELD_ORDER[i], trimmedValues);
            if (message) {
                nextErrors[FIELD_ORDER[i]] = message;
                if (!firstInvalid) firstInvalid = FIELD_ORDER[i];
            }
        }
        setErrors(nextErrors);

        if (firstInvalid) {
            setStatus("idle");
            setServerMessage("");
            const element = document.getElementById(`enquiry-${firstInvalid}`);
            if (element) element.focus();
            return;
        }

        setStatus("sending");
        setServerMessage("");

        try {
            const response = await fetch(`${STRAPI_URL}/api/international-enquiries`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    data: {
                        name: trimmedValues.name,
                        dialCode: phoneCountry.dialCode,
                        phone: trimmedValues.phone,
                        email: trimmedValues.email,
                        country: trimmedValues.country,
                        state: trimmedValues.state,
                        city: trimmedValues.city,
                        schoolId: trimmedValues.schoolId,
                        programId: trimmedValues.programId,
                        courseId: trimmedValues.courseId,
                        consent: trimmedValues.consent,
                        website: trimmedValues.website,
                    },
                }),
            });

            if (response.ok) {
                setStatus("success");
                setValues(EMPTY_VALUES);
                setPhoneCountry(COUNTRIES[0]);
                setErrors({});
                return;
            }

            // 400 and 429 carry a message written for the visitor
            let message = "Something went wrong. Please try again.";
            try {
                const body = await response.json();
                if (body && body.error && body.error.message && response.status < 500) {
                    message = body.error.message;
                }
            } catch {
                // the default message stays
            }
            setServerMessage(message);
            setStatus("error");
        } catch {
            setServerMessage("We could not reach the server. Please check your connection and try again.");
            setStatus("error");
        }
    }

    const schoolHint = catalogLoading ? "Loading schools..." : schools.length === 0 ? "No courses are open for enquiry right now." : "";

    return (
        <div
            className={`rounded-[4px] bg-[#F5F5F5] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.2)] lg:p-7 2xl:px-[40px] 2xl:pb-[40px] 2xl:pt-[30px] ${className}`}
        >
            <h2 className="text-[26px] font-bold leading-tight tracking-[-0.03em] text-[#1a1a1a] lg:text-[32px] 2xl:text-[36px]">
                {title}
            </h2>

            <form
                onSubmit={handleSubmit}
                noValidate
                className="relative mt-3 space-y-3 2xl:mt-[10px] 2xl:space-y-[16px]"
            >
                <TextField
                    name="name"
                    label="Name"
                    placeholder="Enter Your Name"
                    autoComplete="name"
                    maxLength={100}
                    values={values}
                    errors={errors}
                    onChange={changeValue}
                    onBlur={blurField}
                />

                <div className="grid gap-3 sm:grid-cols-2 2xl:gap-[16px] [&>div]:gap-[2px]">
                    {/* Phone: country code + number, same PhoneInput as the contact page */}
                    <Field data-invalid={!!errors.phone}>
                        <FieldLabel htmlFor="enquiry-phone" className={labelClass}>
                            Phone
                            <RequiredMark />
                        </FieldLabel>
                        <PhoneInput
                            id="enquiry-phone"
                            placeholder="000 000 0000"
                            value={values.phone}
                            selectedCountry={phoneCountry}
                            autoComplete="tel-national"
                            inputMode="numeric"
                            maxLength={15}
                            aria-required="true"
                            aria-invalid={!!errors.phone}
                            aria-describedby={errors.phone ? "enquiry-phone-error" : undefined}
                            className={`${fieldClass} p-0 [&>button]:bg-transparent`}
                            onCountryChange={(country) => setPhoneCountry(country)}
                            onChange={(e) => changeValue("phone", e.target.value.replace(/\D/g, ""))}
                            onBlur={() => blurField("phone")}
                        />
                        {errors.phone && <FieldError id="enquiry-phone-error" errors={[{ message: errors.phone }]} />}
                    </Field>

                    <TextField
                        name="email"
                        label="Email ID"
                        type="email"
                        placeholder="Enter Your Email ID"
                        autoComplete="email"
                        maxLength={254}
                        values={values}
                        errors={errors}
                        onChange={changeValue}
                        onBlur={blurField}
                    />
                    <SelectField
                        name="country"
                        label="Select Country"
                        placeholder="Select Country"
                        options={countryOptions}
                        values={values}
                        errors={errors}
                        onChange={changeValue}
                        onBlur={blurField}
                    />
                    <TextField
                        name="state"
                        label="Enter State"
                        placeholder="Enter State"
                        autoComplete="address-level1"
                        maxLength={100}
                        values={values}
                        errors={errors}
                        onChange={changeValue}
                        onBlur={blurField}
                    />
                    <TextField
                        name="city"
                        label="Enter City"
                        placeholder="Enter City"
                        autoComplete="address-level2"
                        maxLength={100}
                        values={values}
                        errors={errors}
                        onChange={changeValue}
                        onBlur={blurField}
                    />
                    <SelectField
                        name="schoolId"
                        label="Select School Applying For"
                        placeholder={catalogLoading ? "Loading..." : "Select School"}
                        options={schoolOptions}
                        disabled={schools.length === 0}
                        hint={schoolHint}
                        values={values}
                        errors={errors}
                        onChange={changeValue}
                        onBlur={blurField}
                    />
                    <SelectField
                        name="programId"
                        label="Select Program"
                        placeholder="Select Program"
                        options={programOptions}
                        disabled={!school}
                        hint="Select a school first"
                        values={values}
                        errors={errors}
                        onChange={changeValue}
                        onBlur={blurField}
                    />
                    <SelectField
                        name="courseId"
                        label="Select Course"
                        placeholder="Select Course"
                        options={courseOptions}
                        disabled={!program}
                        hint="Select a program first"
                        values={values}
                        errors={errors}
                        onChange={changeValue}
                        onBlur={blurField}
                    />
                </div>

                {/* Honeypot: hidden from people and screen readers, bots fill it */}
                <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden">
                    <label htmlFor="enquiry-website">Website</label>
                    <input
                        id="enquiry-website"
                        name="website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={values.website}
                        onChange={(e) => changeValue("website", e.target.value)}
                    />
                </div>

                {/* Consent */}
                <Field data-invalid={!!errors.consent}>
                    <div className="flex items-start gap-[10px]">
                        <Checkbox
                            id="enquiry-consent"
                            checked={values.consent}
                            onCheckedChange={(checked) => changeValue("consent", checked === true)}
                            aria-required="true"
                            aria-invalid={!!errors.consent}
                            aria-describedby={errors.consent ? "enquiry-consent-error" : undefined}
                            className="mt-[3px] size-[14px] shrink-0 rounded-[2px] border border-[#767676] bg-white text-[#222] shadow-none outline-none transition-colors focus-visible:ring-2 focus-visible:ring-(--basecolor)/40 data-[state=checked]:border-(--basecolor) data-[state=checked]:bg-(--basecolor) data-[state=checked]:text-white data-[checked]:border-(--basecolor) data-[checked]:bg-(--basecolor) data-[checked]:text-white aria-invalid:border-red-500 lg:mt-[4px] 2xl:size-[15px] [&_svg]:size-[11px]"
                        />
                        <FieldLabel
                            htmlFor="enquiry-consent"
                            className="block cursor-pointer text-[13px] font-normal normal-case leading-snug text-[#444] lg:text-[14px] 2xl:text-[15px] tracking-normal"
                        >
                            {consentText}
                            <RequiredMark />
                        </FieldLabel>
                    </div>
                    {errors.consent && (
                        <FieldError id="enquiry-consent-error" errors={[{ message: errors.consent }]} />
                    )}
                </Field>

                {/* Submit */}
                <div className="flex flex-wrap items-center gap-4 pt-1">
                    <Button
                        type="submit"
                        disabled={status === "sending"}
                        className="h-[40px] gap-3 rounded-[3px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) px-5 text-[14px] font-medium text-white transition-opacity duration-300 hover:opacity-90 disabled:opacity-60 2xl:text-[15px]"
                    >
                        {status === "sending" ? "Sending..." : submitLabel}
                        <div className="size-[16px] flex items-center justify-center">
                            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7.68152" cy="1.37879" r="1.37879" fill="white" />
                                <circle cx="7.68152" cy="6.49988" r="1.37879" fill="white" />
                                <circle cx="7.68152" cy="11.621" r="1.37879" fill="white" />
                                <circle cx="13.9852" cy="6.49988" r="1.37879" fill="white" />
                                <circle cx="1.37879" cy="6.49988" r="1.37879" fill="white" />
                            </svg>
                        </div>
                    </Button>

                    {status === "success" && (
                        <p role="status" className="text-[14px] text-green-700 lg:text-[16px] xl:text-[16px] 2xl:text-[14px]">
                            Thank you. We will contact you shortly.
                        </p>
                    )}
                    {status === "error" && (
                        <p role="alert" className="text-[14px] text-red-600 lg:text-[16px] xl:text-[16px] 2xl:text-[14px]">
                            {serverMessage}
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
}
