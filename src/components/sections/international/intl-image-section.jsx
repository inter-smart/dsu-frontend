// International flexible section: one centered image (e.g. a poster).
export default function IntlImageSection({ data }) {
    const { image, size } = data;
    const width = size === "small" ? "max-w-[220px] xl:max-w-[280px] rounded-full aspect-square object-cover object-top" : size === "medium" ? "max-w-[480px] rounded-[10px]" : "max-w-[900px] rounded-[10px]";
    if (!image?.url) return null;
    return (
        <section className={size === "small" ? "pb-0 pt-[15px] xl:pt-[22px] 3xl:pt-[40px]" : "py-[15px] xl:py-[22px] 2xl:py-[28px] 3xl:py-[40px]"}>
            <div className="container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image.url} alt={image.alt || ""} loading="lazy" className={`mx-auto h-auto w-full ${width}`} />
            </div>
        </section>
    );
}
