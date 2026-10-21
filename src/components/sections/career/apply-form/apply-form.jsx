"use client";

import { useState } from "react";
import Link from "next/link";
import StepPersonal from "./step-personal";
import StepEducation from "./step-education";
import StepExperience from "./step-experience";
import StepAddressResume from "./step-address-resume";

const STEPS = [
  { id: 1, label: "Personal" },
  { id: 2, label: "Education" },
  { id: 3, label: "Experience" },
  { id: 4, label: "Address & Resume" },
];



// `job` is the published job-opening fetched on the server for ?job={slug}, or null
export default function ApplyForm({ job }) {
  const matchedJob = job;
  const jobSlug = job?.slug || "";

  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    department: matchedJob ? matchedJob.department || "" : "",
    position: matchedJob ? matchedJob.title || "" : "",
    designation: "",
    advertisement: "",
    education: {},
    currentDesignation: "",
    currentSalary: "",
    currentLocation: "",
    experience: {},
    publications: {},
    address: "",
    resume: null,
  });

  const goNext = () => setCurrentStep((step) => Math.min(step + 1, STEPS.length));
  const goPrevious = () => setCurrentStep((step) => Math.max(step - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const honeypotField = e.target.elements.website;
    const honeypot = honeypotField ? honeypotField.value : "";

    // steps 1 to 3 are not on screen at the last step, so check them here
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.dob ||
      !formData.department ||
      !formData.position ||
      !formData.designation
    ) {
      setErrorMessage("Please fill all mandatory fields in the Personal step.");
      setCurrentStep(1);
      return;
    }
    if (!formData.address || !formData.resume) {
      setErrorMessage("Please enter your address and upload your resume.");
      return;
    }

    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      dob: formData.dob,
      department: formData.department,
      position: formData.position,
      designation: formData.designation,
      advertisement: formData.advertisement,
      jobSlug: jobSlug,
      education: formData.education,
      currentDesignation: formData.currentDesignation,
      currentSalary: formData.currentSalary,
      currentLocation: formData.currentLocation,
      experience: formData.experience,
      publications: formData.publications,
      address: formData.address,
      website: honeypot,
    };

    const body = new FormData();
    body.append("data", JSON.stringify(payload));
    body.append("resume", formData.resume);

    setSubmitting(true);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
      const response = await fetch(`${baseUrl}/api/job-applications`, {
        method: "POST",
        body: body,
      });

      if (!response.ok) {
        let message = "Something went wrong. Please try again.";
        try {
          const result = await response.json();
          if (result?.error?.message) {
            message = result.error.message;
          }
        } catch (error) {
          // keep the default message
        }
        setErrorMessage(message);
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
    } catch (error) {
      setErrorMessage("Could not reach the server. Please try again.");
    }
    setSubmitting(false);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      dob: "",
      department: matchedJob ? matchedJob.department || "" : "",
      position: matchedJob ? matchedJob.title || "" : "",
      designation: "",
      advertisement: "",
      education: {},
      currentDesignation: "",
      currentSalary: "",
      currentLocation: "",
      experience: {},
      publications: {},
      address: "",
      resume: null,
    });
    setErrorMessage("");
    setCurrentStep(1);
  };

  if (!matchedJob) {
    return (
      <section className="w-full h-auto py-10 sm:py-15 lg:py-20 2xl:py-25 3xl:py-30 block">
        <div className="container">
          <div className="w-full h-auto max-w-[720px] mx-auto text-center border border-black/10 rounded-md 2xl:rounded-[10px] p-7.5 xl:p-10">
            <h2 className="title_1 !text-2xl xl:!text-3xl mb-3.75">
              This job opening is not available
            </h2>
            <p className="text_1 mb-6.25">
              The position you are looking for may have been closed or the link is incorrect.
            </p>
            <Link
              href="/career"
              className="inline-flex h-10 xl:h-11 items-center px-5 xl:px-6.25 rounded-[4px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) text-xs xl:text-sm font-bold uppercase text-white transition-opacity duration-300 hover:opacity-90"
            >
              Back to Career
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (submitted) {
    return (
      <section className="w-full h-auto py-10 sm:py-15 lg:py-20 2xl:py-25 3xl:py-30 block">
        <div className="container">
          <div className="w-full h-auto max-w-[720px] mx-auto text-center border border-black/10 rounded-md 2xl:rounded-[10px] p-7.5 xl:p-10">
            <h2 className="title_1 !text-2xl xl:!text-3xl mb-3.75">Application Submitted</h2>
            <p className="text_1">
              Thank you{formData.name ? `, ${formData.name}` : ""}! Your application
              {matchedJob ? ` for ${matchedJob.title}` : ""} has been received. Our team will
              get in touch with you if your profile is shortlisted.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full h-auto py-10 sm:py-15 lg:py-20 2xl:py-25 3xl:py-30 block">
      <div className="container">
        <div className="w-full h-auto mb-6.25 lg:mb-7.5 2xl:mb-10">
          <h2 className="title_1 mb-2.5 xl:mb-3">Application Form</h2>
          <p className="text_1">
            Please fill all mandatory fields. DOB format: DD-MM-YYYY. Resume max: 10MB.
          </p>
        </div>

        <div className="w-full h-auto grid grid-cols-2 lg:grid-cols-4 gap-2.5 xl:gap-3.75 mb-6.25 xl:mb-7.5">
          {STEPS.map((step) => (
            <button
              key={step.id}
              type="button"
              onClick={() => setCurrentStep(step.id)}
              className={`h-12 xl:h-14 px-3.75 xl:px-5 flex items-center gap-2.5 rounded-md 2xl:rounded-[10px] border transition-colors duration-300 ${
                currentStep === step.id
                  ? "border-(--basecolor) text-[#212121] dark:text-white"
                  : "border-black/10 text-[#9CA3AF] hover:text-[#212121] dark:hover:text-white"
              }`}
            >
              <span className="text-lg xl:text-xl font-bold">
                {String(step.id).padStart(2, "0")}
              </span>
              <span className="text-xs xl:text-sm font-semibold">{step.label}</span>
            </button>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full h-auto border border-black/10 rounded-md 2xl:rounded-[10px] p-5 sm:p-7.5 xl:p-10"
        >
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            defaultValue=""
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
          />

          {currentStep === 1 && (
            <StepPersonal formData={formData} setFormData={setFormData} />
          )}
          {currentStep === 2 && <StepEducation formData={formData} setFormData={setFormData} />}
          {currentStep === 3 && <StepExperience formData={formData} setFormData={setFormData} />}
          {currentStep === 4 && (
            <StepAddressResume formData={formData} setFormData={setFormData} />
          )}

          {errorMessage && (
            <div className="w-full h-auto mt-6.25 rounded-[4px] border border-red-300 bg-red-50 p-3.75 text-sm text-red-700">
              {errorMessage}
            </div>
          )}

          <div className="w-full h-auto mt-7.5 xl:mt-10 pt-6.25 xl:pt-7.5 border-t border-black/10 flex items-center justify-between gap-3.75">
            <div>
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={goPrevious}
                  className="h-10 xl:h-11 px-5 xl:px-6.25 rounded-[4px] border border-black/10 text-xs xl:text-sm font-bold uppercase text-[#212121] dark:text-white transition-colors duration-300 hover:bg-black/5"
                >
                  Previous
                </button>
              )}
            </div>
            <div className="flex items-center gap-3.75">
              {currentStep === STEPS.length && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="h-10 xl:h-11 px-5 xl:px-6.25 rounded-[4px] border border-black/10 text-xs xl:text-sm font-bold uppercase text-[#212121] dark:text-white transition-colors duration-300 hover:bg-black/5"
                >
                  Reset
                </button>
              )}
              {currentStep < STEPS.length ? (
                <button
                  type="button"
                  onClick={goNext}
                  className="h-10 xl:h-11 px-5 xl:px-6.25 rounded-[4px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) text-xs xl:text-sm font-bold uppercase text-white transition-opacity duration-300 hover:opacity-90"
                >
                  Next {" >>"}
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  className="h-10 xl:h-11 px-5 xl:px-6.25 rounded-[4px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) text-xs xl:text-sm font-bold uppercase text-white transition-opacity duration-300 hover:opacity-90 disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Submit Application"}
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}