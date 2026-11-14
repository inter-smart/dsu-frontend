import { CARD, DoctoralSection, GRAD, H3, PAD, TEXT } from "./ui";

// Cards with large durations (value) and what they apply to (label)
export default function DurationSection({ data }) {
  if (!data?.cards?.length) return null;

  return (
    <DoctoralSection data={data}>
      <div data-reveal className="grid gap-[10px] sm:gap-[15px] 2xl:gap-[20px] md:grid-cols-2 lg:grid-cols-3">
        {data.cards.map((card, i) => (
          <article key={card.id ?? i} className={`${CARD} ${PAD}`}>
            <h3 className={H3}>{card.title}</h3>
            {card.description && <p className={`${TEXT} mt-[6px]`}>{card.description}</p>}
            {card.values?.length > 0 && (
              <dl className="mt-[18px] flex flex-wrap gap-x-[30px] gap-y-[12px]">
                {card.values.map((v, j) => (
                  <div key={j} className="flex flex-col-reverse">
                    {v.label && <dt className="text_1 mt-[4px]">{v.label}</dt>}
                    <dd className={`${GRAD} text-[30px] xl:text-[38px] 3xl:text-[46px] leading-none`}>{v.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </article>
        ))}
      </div>
    </DoctoralSection>
  );
}
