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
    "h-[44px] w-full rounded-[3px] border border-black/15 bg-white px-4 text-[14px] text-[#222] shadow-none placeholder:text-[#9a9a9a] focus-visible:border-(--basecolor) focus-visible:ring-0 2xl:h-[46px] 2xl:text-[15px]";
const labelClass = "text-[12px] font-normal uppercase tracking-normal text-[#222] 2xl:text-[14px]";

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

                <div className="grid gap-3 sm:grid-cols-2 2xl:gap-[16px]">
                    {/* Phone: country code + number */}
                    <Field data-invalid={!!phoneError}>
                        <FieldLabel htmlFor="enquiry-phone" className={labelClass}>
                            Phone *
                        </FieldLabel>
                        <div className="flex">
                            <Controller
                                control={control}
                                name="countryCode"
                                render={({ field }) => (
                                    <Select value={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger
                                            aria-label="Country code"
                                            className={`${fieldClass} w-[92px] shrink-0 rounded-r-none border-r-0 px-3`}
                                        >
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {countryCodes.map((code) => (
                                                <SelectItem key={code} value={code}>
                                                    {code}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            <Controller
                                control={control}
                                name="phone"
                                render={({ field }) => (
                                    <Input
                                        {...field}
                                        id="enquiry-phone"
                                        type="tel"
                                        inputMode="numeric"
                                        placeholder="000 000 0000"
                                        aria-invalid={!!errors.phone}
                                        className={`${fieldClass} rounded-l-none`}
                                    />
                                )}
                            />
                        </div>
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
                            <div className="flex items-start gap-3">
                                <Checkbox
                                    id="enquiry-consent"
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                    aria-invalid={fieldState.invalid}
                                    className="mt-1 size-4 rounded-[2px] border-black/40 bg-white data-[state=checked]:border-(--basecolor) data-[state=checked]:bg-(--basecolor)"
                                />
                                <FieldLabel
                                    htmlFor="enquiry-consent"
                                    className="cursor-pointer !text_1 "
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
                        <Grip className="size-3.5 text-white/80" strokeWidth={2} />
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