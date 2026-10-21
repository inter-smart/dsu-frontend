"use client";

import { useState } from "react";
import LibrarySidebar from "./library-sidemenubar";
import Image from "next/image";
import { getDepartmentLibraryGalleryPaged } from "@/lib/api";
import { toGalleryItems } from "@/lib/schools/department-adapters";

// Pages come from the API (`data.pagination`); without it (static reference page) every item is shown.
export default function LibraryGallery({ data, menu, departmentSlug, pageSlug }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const [items, setItems] = useState(data?.gallery ?? []);
    const [pagination, setPagination] = useState(data?.pagination ?? null);
    const [loading, setLoading] = useState(false);
    const isVideo = data?.gallery?.image?.mime?.includes("video");

    const hasMore = Boolean(departmentSlug && pageSlug && pagination && pagination.page < pagination.pageCount);

    const loadMore = async () => {
        if (!hasMore || loading) return;
        setLoading(true);
        try {
            const res = await getDepartmentLibraryGalleryPaged(departmentSlug, pageSlug, pagination.page + 1, pagination.pageSize);
            if (res?.data && res?.pagination) {
                setItems((prev) => {
                    const seen = new Set(prev.map((item) => item.id));
                    return [...prev, ...toGalleryItems(res.data, res.pagination).filter((item) => !seen.has(item.id))];
                });
                setPagination(res.pagination);
            }
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="relative py-[20px_60px] xl:py-[55px_80px] 2xl:py-[65px_100px] 3xl:py-[75px_170px]">
            <div className="container">
                <div className="cmnFlx">
                    <div className="leftBx lg:sticky lg:top-[140px] lg:left-0 lg:h-full">
                        <LibrarySidebar
                            data={menu}
                            isOpen={isMobileSidebarOpen}
                            onClose={() => setIsMobileSidebarOpen(false)}
                        />
                    </div>
                    <div className="rtBx">
                        <div className="w-full lg:h-full rounded-[10px] border border-black/10 p-[15px] md:p-[20px] lg:p-[25px] xl:p-[35px_30px] 2xl:p-[40px_40px] 3xl:p-[50px]">
                            <h2 className="cmn_Title mb-[20px]">
                                {data.heading}
                            </h2>
                            <div className="flex flex-wrap -m-[5px] 2xl:-m-[7px]">
                                {items.map((item) => (
                                    <div key={item.id} className="w-1/2 sm:w-1/3 flex-grow-1 p-[5px] 2xl:p-[7px]">
                                        <div className="w-full h-full rounded-[6px] xl:rounded-[8px] 2xl:rounded-[10px] overflow-hidden">
                                            {isVideo ? (
                                                <video autoPlay muted loop playsInline className="h-full w-full object-cover">
                                                    <source src={item?.image?.url} type={item?.image?.mime} />
                                                </video>
                                            ) : (
                                                item?.image?.url && (
                                                    <Image
                                                        src={item?.image?.url}
                                                        alt={item?.image?.alternativeText || "Hero image"}
                                                        width={410}
                                                        height={270}
                                                        priority
                                                        className="h-full w-full object-cover"
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {hasMore && (
                                <div className="mt-3 sm:mt-4 lg:mt-4.5 2xl:mt-6.5 3xl:mt-7.5 flex items-center justify-center">
                                    <button
                                        type="button"
                                        onClick={loadMore}
                                        disabled={loading}
                                        className="cursor-pointer text-base 2xl:text-lg 3xl:text-[18px] leading-normal font-medium text-[#F97316] transition-opacity duration-300 hover:opacity-70 disabled:pointer-events-none disabled:opacity-50"
                                    >
                                        {loading ? "Loading..." : <>Load More {" >>"}</>}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
