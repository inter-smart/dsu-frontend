"use client";

import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export default function JobDetailModal({ job, open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-linear-to-b from-[#FFF9F2] to-[#FFF3E0] dark:from-[#1c1815] dark:to-[#131416]">
        <DialogTitle className="title_1 !text-2xl xl:!text-3xl 2xl:!text-4xl text-center mb-2.5 xl:mb-3.75">
          Job Details
        </DialogTitle>
        {job && (
          <div>
            <div className="w-full h-auto border-t border-black/10 pt-5 xl:pt-6.25 mb-5 xl:mb-6.25">
              <h3 className="text-xl xl:text-2xl 2xl:text-3xl leading-tight font-bold text-[#212121] dark:text-white mb-1.5">
                {job.title}
              </h3>
              <div className="text-sm xl:text-base font-semibold text-[#212121] dark:text-gray-200 mb-3.75 xl:mb-5">
                {job.department}
              </div>
              <ul className="flex flex-wrap gap-x-7.5 gap-y-2 xl:gap-x-10">
                {job.stats?.map((stat, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm xl:text-base text-[#4A5565] dark:text-gray-300"
                  >
                    <Image
                      src="/images/icon-chevron-bullet.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="size-3.5 xl:size-4 shrink-0"
                    />
                    {stat}
                  </li>
                ))}
              </ul>
            </div>

            {job.qualifications?.length > 0 && (
              <div className="mb-5 xl:mb-6.25">
                <h4 className="text-base xl:text-lg font-bold text-[#212121] dark:text-white mb-2.5">
                  Essential Qualifications
                </h4>
                <ul className="list-disc pl-5 flex flex-col gap-1.5 text-sm xl:text-base text-[#4A5565] dark:text-gray-300">
                  {job.qualifications.map((qualification, index) => (
                    <li key={index}>{qualification}</li>
                  ))}
                </ul>
              </div>
            )}

            {job.description && (
              <div className="mb-6.25 xl:mb-7.5">
                <h4 className="text-base xl:text-lg font-bold text-[#212121] dark:text-white mb-2.5">
                  Job Description
                </h4>
                <p className="text-sm xl:text-base leading-relaxed text-[#4A5565] dark:text-gray-300">
                  {job.description}
                </p>
              </div>
            )}

            <Link
              href={`/career/apply?job=${job.slug}`}
              className="inline-flex h-10 xl:h-11 px-5 xl:px-6 items-center justify-center rounded-[4px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) text-xs xl:text-sm font-bold uppercase text-white transition-opacity duration-300 hover:opacity-90"
            >
              Apply Now
            </Link>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
