"use client";

import { useState } from "react";
import JobCard from "./job-card";
import JobDetailModal from "./job-detail-modal";

export default function CareerOpenings({ data }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [open, setOpen] = useState(false);

  const handleViewDetail = (job) => {
    setSelectedJob(job);
    setOpen(true);
  };

  return (
    <section className="w-full h-auto py-10 sm:py-15 lg:py-20 2xl:py-25 3xl:py-30 bg-[#F4F6FA] dark:bg-black block">
      <div className="container">
        <h2 className="title_1 text-center mb-6.25 lg:mb-7.5 2xl:mb-10">{data?.title}</h2>
        <div className="w-full h-auto gap-5 xl:gap-6.25 2xl:gap-7.5 grid sm:grid-cols-2 lg:grid-cols-3">
          {data?.jobs?.map((job) => (
            <JobCard key={job.id} job={job} onViewDetail={handleViewDetail} />
          ))}
        </div>
      </div>
      <JobDetailModal job={selectedJob} open={open} onOpenChange={setOpen} />
    </section>
  );
}
