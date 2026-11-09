// International flexible section: a YouTube video (by URL) or an uploaded video file.
function youtubeId(url = "") {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/);
    return match ? match[1] : "";
}

export default function IntlVideoSection({ data }) {
    const id = data.source === "youtube" ? youtubeId(data.youtubeUrl) : "";
    if (data.source === "youtube" && !id) return null;

    return (
        <section className="py-[30px] xl:py-[45px] 2xl:py-[60px] 3xl:py-[80px]">
            <div className="container">
                {data.title && <h2 className="cmn_Title">{data.title}</h2>}
                <div className="aspect-video w-full overflow-hidden rounded-[10px] bg-black">
                    {id ? (
                        <iframe
                            src={`https://www.youtube-nocookie.com/embed/${id}`}
                            title={data.title || "Video"}
                            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                            allowFullScreen
                            loading="lazy"
                            className="h-full w-full"
                        />
                    ) : (
                        <video controls playsInline preload="metadata" poster={data.poster?.url} className="h-full w-full">
                            <source src={data.videoFile.url} type={data.videoFile.mime} />
                        </video>
                    )}
                </div>
            </div>
        </section>
    );
}
