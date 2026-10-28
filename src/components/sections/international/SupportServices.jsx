import SectionHeader, { toneClass } from "./ServiceShared";

export default function SupportServices({ data }) {
    const { number, tone = "blue", eyebrow, title, description, cards } = data;

    return (
        <section id="student-support" className={`w-full py-10 lg:py-12 2xl:py-[70px] ${toneClass[tone]}`}>
            <div className="container">
                <SectionHeader number={number} eyebrow={eyebrow} title={title} description={description} />

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 2xl:mt-[36px] 2xl:gap-[44px]">
                    {cards.map((card) => (
                        <article key={card.id} className="rounded-[8px] border border-black/10 bg-white p-5 lg:p-6 2xl:px-[24px] 2xl:py-[28px]">
                            <h3 className="text-[18px] font-medium leading-tight tracking-[-0.02em] text-[#111] lg:text-[22px] 2xl:text-[26px]">
                                {card.title}
                            </h3>
                            <p className="mt-3 text-[14px] leading-[1.6] text-[#444] lg:text-[16px] 2xl:mt-[20px] 2xl:text-[18px] 2xl:leading-[29px]">
                                {card.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}