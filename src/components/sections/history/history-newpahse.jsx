import Image from "next/image";

export default function HistoryNewpahse({ data }) {
    const isVideo = data?.media?.mime?.includes("video");

    return (
        <section className="relative py-[100px] z-0 before:absolute before:content-[''] before:left-0 before:top-0 before:z-1 before:w-full before:h-full before:bg-[rgba(7,7,7,0.7)] before:pointer-events-none">

            {isVideo ? (
                <video autoPlay muted loop playsInline className="h-full w-full object-cover absolute top-0 left-0 ">
                    <source src={data?.media?.url} type={data?.media?.mime} />
                </video>
            ) : (
                data?.media?.url && (
                    <Image
                        src={data.media.url}
                        alt={data?.media?.alternativeText || data?.title || "Hero image"}
                        width={1920}
                        height={750}
                        priority
                        className="h-full w-full object-cover absolute top-0 left-0"
                    />
                )
            )}
            <div className="container">
                <div className="max-w-[590px] m-auto">

                </div>
            </div>
        </section >
    )
}
