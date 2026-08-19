import React from 'react'

export default function HistoryNewpahse({ data }) {
    const isVideo = data?.heroMedia?.mime?.includes("video");

    return (
        <section className="relative before:absolute before:content-[''] before:left-0 before:top-0 before:w-full before:h-full before:bg-[rgba(7,7,7,0.7)] before:pointer-events-none">

            {isVideo ? (
                <video autoPlay muted loop playsInline className="h-full w-full object-cover absolute top-0 left-0 ">
                    <source src={data?.heroMedia?.url} type={data?.heroMedia?.mime} />
                </video>
            ) : (
                data?.heroMedia?.url && (
                    <Image
                        src={data.heroMedia.url}
                        alt={data?.heroMedia?.alternativeText || data?.title || "Hero image"}
                        width={1920}
                        height={750}
                        priority
                        className="h-full w-full object-cover absolute top-0 left-0"
                    />
                )
            )}
            <div className="container">
                <div className="max-w-[590px] m-a"></div>
            </div>
        </section >
    )
}
