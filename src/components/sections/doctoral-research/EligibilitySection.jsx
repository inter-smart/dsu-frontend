import { Bullets, CARD, DoctoralSection, GRAD, H3, PAD, TEXT } from "./ui";

// Eligibility cards (title + minimum marks, criteria, relaxation note) and a box of points
export default function EligibilitySection({ data }) {
  if (!data) return null;
  const { cards = [], box } = data;

  return (
    <DoctoralSection data={data}>
      {cards.length > 0 && (
        <div data-reveal className="grid gap-[10px] sm:gap-[15px] 2xl:gap-[20px] md:grid-cols-2">
          {cards.map((card, i) => (
            <article key={card.id ?? i} className={`${CARD} ${PAD}`}>
              <div className="flex items-baseline justify-between gap-[12px] border-b border-[#F3DFD2] dark:border-white/10 pb-[14px]">
                <h3 className={H3}>{card.title}</h3>
                {card.value && <span className={`${GRAD} text-[28px] xl:text-[36px] 3xl:text-[44px] leading-none`}>{card.value}</span>}
              </div>
              {card.description && <p className={`${TEXT} mt-[14px]`}>{card.description}</p>}
              {card.note && (
                <p className="mt-[12px] rounded-[8px] bg-[#FFF8EE] dark:bg-white/5 px-[12px] py-[8px] font-medium !text-[#B45309] dark:!text-[#FDBA74]">
                  {card.note}
                </p>
              )}
            </article>
          ))}
        </div>
      )}
      {box && (
        <div data-reveal className={`${CARD} ${PAD} ${cards.length ? "mt-[25px] xl:mt-[35px]" : ""}`}>
          {box.heading && <h3 className={`${H3} mb-[14px]`}>{box.heading}</h3>}
          <Bullets items={box.points} />
        </div>
      )}
    </DoctoralSection>
  );
}
