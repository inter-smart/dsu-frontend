export default function ServiceIntro({ data }) {
    const { title, description } = data;

    return (
        <section className="w-full bg-white py-10 lg:py-14 2xl:py-[75px]">
            <div className="container grid gap-5 lg:grid-cols-2 lg:gap-10 2xl:gap-[35px]">
                <h2 className="whitespace-pre-line text-[28px] font-bold leading-[1.12] tracking-[-0.03em] text-[#1a1a1a] lg:text-[40px] 2xl:text-[56px] 2xl:leading-[60px]">
                    {title}
                </h2>
                <p className="text-[14px] leading-[1.7] text-[#444] lg:text-[16px] 2xl:text-[18px] 2xl:leading-[29px]">
                    {description}
                </p>
            </div>
        </section>
    );
}