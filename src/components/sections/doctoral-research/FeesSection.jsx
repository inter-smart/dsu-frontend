import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { hasContent } from "@/lib/has-content";
import { Bullets, CARD, DoctoralSection, FACT, GRAD, H3_BIG, LABEL, PAD, TEXT } from "./ui";

// Fee cards and a note, then the fellowship: heading, text, cards (amount per group) and points
export default function FeesSection({ data }) {
  if (!data) return null;
  const { fees = [], note, fellowship } = data;

  return (
    <DoctoralSection data={data}>
      {fees.length > 0 && (
        <div data-reveal className="grid gap-[10px] sm:gap-[15px] 2xl:gap-[20px] md:grid-cols-2">
          {fees.map((fee, i) => (
            <article key={i} className={`${CARD} ${PAD}`}>
              {fee.label && <p className={LABEL}>{fee.label}</p>}
              <p className={`${GRAD} mt-[6px] text-[28px] xl:text-[36px] 3xl:text-[44px] leading-[1.1]`}>{fee.value}</p>
            </article>
          ))}
        </div>
      )}
      {hasContent(note) && (
        <div data-reveal className="text_1 mt-[15px] [&_a]:font-medium [&_a]:!text-[#DC2626] [&_a]:underline [&_a]:underline-offset-2">
          <BlocksRenderer content={note} />
        </div>
      )}

      {fellowship && (
        <div className={fees.length ? "mt-[35px] xl:mt-[50px]" : ""}>
          {(fellowship.heading || fellowship.description) && (
            <div data-reveal className="mb-[20px] max-w-[1000px]">
              {fellowship.heading && <h3 className={H3_BIG}>{fellowship.heading}</h3>}
              {fellowship.description && <p className={`${TEXT} mt-[8px]`}>{fellowship.description}</p>}
            </div>
          )}
          {fellowship.cards.length > 0 && (
            <div data-reveal className="grid gap-[10px] sm:gap-[15px] 2xl:gap-[20px] md:grid-cols-2">
              {fellowship.cards.map((card, i) => (
                <article key={card.id ?? i} className={`${CARD} ${PAD}`}>
                  <h4 className="text-[17px] xl:text-[20px] 3xl:text-[25px] font-bold text-[#212121] dark:text-white">{card.title}</h4>
                  {card.amounts.length > 0 && (
                    <dl className="mt-[14px] grid grid-cols-2 gap-[10px]">
                      {card.amounts.map((a, j) => (
                        <div key={j} className={FACT}>
                          {a.label && <dt className={LABEL}>{a.label}</dt>}
                          <dd className="text-[20px] xl:text-[24px] font-bold text-[#212121] dark:text-white">
                            {a.value}
                            {fellowship.amountSuffix && <span className="text-[13px] font-normal"> {fellowship.amountSuffix}</span>}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </article>
              ))}
            </div>
          )}
          <Bullets items={fellowship.points} className="mt-[20px]" />
        </div>
      )}
    </DoctoralSection>
  );
}
