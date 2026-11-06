import { useState } from "react";

// Shared form validators (ported from the WordPress jQuery rules).
// Each returns an error message, or "" when the value is valid.

const LETTERS = "\\u0900-\\u097F\\u00C0-\\u024Fa-zA-Z";
const NAME_RE = new RegExp(`^[${LETTERS}\\s'.\\-]+$`);
const SUBJECT_RE = new RegExp(`^[${LETTERS}0-9\\s',.\\-]+$`);
const HAS_LETTER_RE = new RegExp(`[${LETTERS}]`);
const TEXT_RE = /^[a-zA-Z0-9\s.,!?'"()\-:;@#&%$*]+$/;
const SQL_RE = /literal|select|insert|update|delete|drop|union|--|;|\/\*|\*\/|exec|xp_/i;
const UNSAFE_RE = /[<>$%^&*#@!~`]/;
const EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
const PHONE_RE = /^[+]?[\d\s().-]{7,20}$/;

export const MAX = { name: 50, email: 256, subject: 50, message: 500 };

// collapse repeated spaces and trim, as the WordPress blur/submit handlers did
export const clean = (v) => String(v ?? "").trim().replace(/\s{2,}/g, " ");

const tooShort = "Minimum 2 characters required.";

export function validateName(value, required = true) {
    const v = clean(value);
    if (!v) return required ? "Please enter your name." : "";
    if (v.length < 2) return tooShort;
    if (v.length > MAX.name) return `Please enter no more than ${MAX.name} characters.`;
    if (!NAME_RE.test(v)) return "Only letters and spaces are allowed.";
    return "";
}

export function validateEmail(value, required = true) {
    const v = clean(value);
    if (!v) return required ? "Please enter your email address." : "";
    if (v.length > MAX.email) return `Please enter no more than ${MAX.email} characters.`;
    if (!EMAIL_RE.test(v)) return "Please enter a valid email address.";
    return "";
}

export function validatePhone(value, required = true) {
    const v = clean(value);
    if (!v) return required ? "Please enter your phone number." : "";
    const digits = v.replace(/\D/g, "");
    if (!PHONE_RE.test(v) || digits.length < 7 || digits.length > 15 || /^(\d)\1+$/.test(digits)) {
        return "Please enter a valid phone number with 7–15 digits.";
    }
    return "";
}

export function validateSubject(value, required = false) {
    const v = clean(value);
    if (!v) return required ? "This field is required." : "";
    if (v.length < 2) return tooShort;
    if (v.length > MAX.subject) return `Please enter no more than ${MAX.subject} characters.`;
    if (UNSAFE_RE.test(v)) return "Invalid input. Special characters and tags are not allowed.";
    if (!SUBJECT_RE.test(v) || !HAS_LETTER_RE.test(v)) {
        return "Only letters, numbers, spaces, and common punctuation are allowed.";
    }
    return "";
}

export function validateMessage(value, required = false) {
    const v = clean(value);
    if (!v) return required ? "Please enter a message." : "";
    if (v.length < 2) return tooShort;
    if (v.length > MAX.message) return `Please enter no more than ${MAX.message} characters.`;
    if (/[<>]/.test(v)) return "Invalid input. Special characters and tags are not allowed.";
    if (!TEXT_RE.test(v) || SQL_RE.test(v)) {
        return "Only letters, numbers, spaces, and common punctuation are allowed.";
    }
    return "";
}

// Runs { field: (value) => message } rules over values; returns { field: message } for invalid ones.
export function validateAll(values, rules) {
    const errors = {};
    for (const key of Object.keys(rules)) {
        const message = rules[key](values[key], values);
        if (message) errors[key] = message;
    }
    return errors;
}

// Per-field error state: validate(name, values) on blur/change, validateForm(values) on submit.
export function useFieldErrors(rules) {
    const [errors, setErrors] = useState({});
    const validate = (name, values) =>
        setErrors((prev) => ({ ...prev, [name]: rules[name](values[name], values) }));
    const validateForm = (values) => {
        const next = validateAll(values, rules);
        setErrors(next);
        return next;
    };
    return { errors, validate, validateForm };
}
