import { BTN, Badge, CARD, DoctoralSection, H3, LABEL, LinkTo, PAD, TEXT, TEXT_LINK } from "./ui";

// Numbered application steps (with a button or text link) beside a bank details box
export default function ApplicationSection({ data }) {
  if (!data) return null;
  const { steps = [], bank } = data;
  if (!steps.length && !bank) return null;

  return (
    <DoctoralSection data={data}>
      <div className={`grid gap-[20px] xl:gap-[30px] ${steps.length && bank ? "lg:grid-cols-[1.4fr_1fr]" : ""}`}>
        {steps.length > 0 && (
          <ol data-reveal-stagger className="flex flex-col gap-[15px]">
            {steps.map((step, i) => (
              <li key={step.id ?? i} className={`${CARD} flex gap-[14px] p-[18px] xl:p-[24px]`}>
                <Badge n={i + 1} />
                <div className="min-w-0">
                  <h3 className="text-[17px] xl:text-[20px] 3xl:text-[25px] font-bold text-[#212121] dark:text-white">{step.title}</h3>
                  {step.description && <p className={`${TEXT} mt-[4px]`}>{step.description}</p>}
                  {step.link &&
                    (step.link.style === "text" ? (
                      <LinkTo link={step.link} className={`${TEXT_LINK} mt-[8px] block break-all text_1`} />
                    ) : (
                      <LinkTo link={step.link} className={BTN} />
                    ))}
                </div>
              </li>
            ))}
          </ol>
        )}
        {bank && (
          <div data-reveal className={`${CARD} ${PAD} h-fit`}>
            {bank.heading && <h3 className={`${H3} mb-[14px]`}>{bank.heading}</h3>}
            <dl className="divide-y divide-[#F3DFD2] dark:divide-white/10">
              {bank.details.map((d, i) => (
                <div key={i} className="py-[10px] first:pt-0 last:pb-0">
                  {d.label && <dt className={LABEL}>{d.label}</dt>}
                  <dd className="text_1 break-words font-semibold !text-[#212121] dark:!text-white">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </DoctoralSection>
  );
}
