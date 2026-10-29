"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Grip } from "lucide-react";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { PhoneInput, COUNTRIES } from "@/components/ui/phone-input";
import PhoneNumbers from "@/components/ui/phone-numbers";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const required = (msg) => z.string().min(1, msg);

const schema = z.object({
    name: required("Please enter your name").min(2, "Name is too short"),
    countryCode: required("Select a code"),
    phone: z.string().regex(/^\d{6,12}$/, "Enter a valid phone number"),
    email: z.string().email("Enter a valid email"),
    country: required("Select your country"),
    state: required("Enter your state"),
    city: required("Enter your city"),
    school: required("Select a school"),
    program: required("Select a program"),
    course: required("Select a course"),
    consent: z.literal(true, { message: "Please accept to continue" }),
});

const fieldClass =
    "h-[44px] w-full rounded-[3px] border border-black/15 bg-white px-4 text-[14px] text-[#222] shadow-none placeholder:text-[#9a9a9a] focus-visible:border-(--basecolor) focus-visible:ring-0 2xl:h-[45px] 2xl:text-[15px]";
const labelClass = "text-[10px] font-normal uppercase  text-[#222] 2xl:text-[11px] 3xl:text-[12px] !mb-[1px]";

// Reusable text field
function TextField({ control, name, label, placeholder, type = "text" }) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={`enquiry-${name}`} className={labelClass}>
                        {label} *
                    </FieldLabel>
                    <Input
                        {...field}
                        id={`enquiry-${name}`}
                        type={type}
                        placeholder={placeholder}
                        aria-invalid={fieldState.invalid}
                        className={fieldClass}
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
        />
    );
}

// Reusable select field
function SelectField({ control, name, label, placeholder, options }) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={`enquiry-${name}`} className={labelClass}>
                        {label} *
                    </FieldLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger
                            id={`enquiry-${name}`}
                            aria-invalid={fieldState.invalid}
                            className={`${fieldClass} justify-between`}
                        >
                            <SelectValue placeholder={placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            {options.map((option) => (
                                <SelectItem key={option} value={option}>
                                    {option}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
        />
    );
}

export default function EnquiryForm({ data, className = "" }) {
    const { title, consent, submitLabel, countryCodes, countries, schools, programs, courses, action } = data;
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            countryCode: countryCodes[0],
            phone: "",
            email: "",
            country: "",
            state: "",
            city: "",
            school: "",
            program: "",
            course: "",
            consent: false,
        },
    });

    async function onSubmit(values) {
        setStatus("sending");
        try {
            const res = await fetch(action, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
            if (!res.ok) throw new Error("Request failed");
            setStatus("success");
            reset();
        } catch {
            setStatus("error");
        }
    }

    const phoneError = errors.phone || errors.countryCode;

    return (
        <div
            className={`rounded-[4px] bg-[#F5F5F5] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.2)] lg:p-7 2xl:px-[40px] 2xl:pb-[40px] 2xl:pt-[30px] ${className}`}
        >
            <h2 className="text-[26px] font-bold leading-tight tracking-[-0.03em] text-[#1a1a1a] lg:text-[32px] 2xl:text-[36px]">
                {title}
            </h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="mt-3 space-y-3 2xl:mt-[10px] 2xl:space-y-[16px]"
            >
                <TextField control={control} name="name" label="Name" placeholder="Enter Your Name" />

                <div className="grid gap-3 sm:grid-cols-2 2xl:gap-[16px] [&>div]:gap-[2px]">
                    {/* Phone: country code + number */}
                    {/* Phone: same PhoneInput as the contact page */}
                    <Field data-invalid={!!phoneError}>
                        <FieldLabel htmlFor="enquiry-phone" className={labelClass}>
                            Phone *
                        </FieldLabel>
                        <Controller
                            control={control}
                            name="countryCode"
                            render={({ field: codeField }) => (
                                <Controller
                                    control={control}
                                    name="phone"
                                    render={({ field }) => (
                                        <PhoneInput
                                            id="enquiry-phone"
                                            placeholder="000 000 0000"
                                            value={field.value}
                                            selectedCountry={
                                                COUNTRIES.find((c) => c.dialCode === codeField.value) || COUNTRIES[0]
                                            }
                                            aria-invalid={!!phoneError}
                                            className={`${fieldClass} p-0 [&>button]:bg-transparent`}
                                            onCountryChange={(country) => codeField.onChange(country.dialCode)}
                                            onChange={(e) => field.onChange(e.target.value.replace(/\D/g, ""))}
                                        />
                                    )}
                                />
                            )}
                        />
                        {phoneError && <FieldError errors={[phoneError]} />}
                    </Field>

                    <TextField control={control} name="email" label="Email ID" type="email" placeholder="Enter Your Email ID" />
                    <SelectField control={control} name="country" label="Select Country" placeholder="Select Country" options={countries} />
                    <TextField control={control} name="state" label="Enter State" placeholder="Enter State" />
                    <TextField control={control} name="city" label="Enter City" placeholder="Enter City" />
                    <SelectField control={control} name="school" label="Select School Applying For" placeholder="Select School" options={schools} />
                    <SelectField control={control} name="program" label="Select Program" placeholder="Select Program" options={programs} />
                    <SelectField control={control} name="course" label="Select Course" placeholder="Select Course" options={courses} />
                </div>

                {/* Consent */}
                <Controller
                    control={control}
                    name="consent"
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <div className="flex items-start gap-[10px]">
                                <Checkbox
                                    id="enquiry-consent"
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    aria-invalid={fieldState.invalid}
                                    className="mt-[3px] size-[14px] shrink-0 rounded-[2px] border border-[#767676] bg-white text-[#222] shadow-none outline-none transition-colors focus-visible:ring-2 focus-visible:ring-(--basecolor)/40 data-[state=checked]:border-(--basecolor) data-[state=checked]:bg-(--basecolor) data-[state=checked]:text-white data-[checked]:border-(--basecolor) data-[checked]:bg-(--basecolor) data-[checked]:text-white aria-invalid:border-red-500 lg:mt-[4px] 2xl:size-[15px] [&_svg]:size-[11px]"
                                />
                                <FieldLabel
                                    htmlFor="enquiry-consent"
                                    className="block cursor-pointer text-[13px] font-normal normal-case leading-snug text-[#444] lg:text-[14px] 2xl:text-[15px] tracking-normal"
                                >
                                    {consent}
                                </FieldLabel>
                            </div>
                            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                />

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
                        <p role="status" className="text-[14px] text-green-700">
                            Thank you. We will contact you shortly.
                        </p>
                    )}
                    {status === "error" && (
                        <p role="alert" className="text-[14px] text-red-600">
                            Something went wrong. Please try again.
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
}