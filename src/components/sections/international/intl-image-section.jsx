// International flexible section: one centered image (e.g. a poster).
export default function IntlImageSection({ data }) {
    const { image } = data;
    if (!image?.url) return null;
    return (
        <section className="py-[15px] xl:py-[22px] 2xl:py-[28px] 3xl:py-[40px]">
            <div className="container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image.url} alt={image.alt || ""} loading="lazy" className="mx-auto h-auto w-full max-w-[900px] rounded-[10px]" />
            </div>
        </section>
    );
}
