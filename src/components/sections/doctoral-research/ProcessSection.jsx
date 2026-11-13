import { Badge, Bullets, CARD, DoctoralSection, Facts, H3, PAD } from "./ui";

// Numbered steps, each with a subtitle, key facts and points
export default function ProcessSection({ data }) {
  if (!data?.steps?.length) return null;

  return (
    <DoctoralSection data={data}>
      <ol data-reveal-stagger className="grid gap-[15px] xl:gap-[25px] lg:grid-cols-2">
        {data.steps.map((step, i) => (
          <li key={step.id ?? i} className={`${CARD} ${PAD}`}>
            <div className="flex items-center gap-[12px]">
              <Badge n={i + 1} />
              <div>
                <h3 className={H3}>{step.title}</h3>
                {step.subtitle && <p className="font-medium !text-[#F97316]">{step.subtitle}</p>}
              </div>
            </div>
            <Facts items={step.facts} />
            <Bullets items={step.points} className="mt-[16px]" />
          </li>
        ))}
      </ol>
    </DoctoralSection>
  );
}
