import { CARD, DoctoralSection } from "./ui";

// A timeline rail of events, each with its date in a pill
export default function DatesSection({ data }) {
  if (!data?.dates?.length) return null;

  return (
    <DoctoralSection data={data}>
      <ol data-reveal-stagger className="relative ml-[7px] border-l-2 border-[#F3DFD2] dark:border-white/15">
        {data.dates.map((row, i) => (
          <li key={row.id ?? i} className="relative pb-[18px] pl-[22px] xl:pl-[32px] last:pb-0">
            <span
              className="absolute -left-[9px] top-[26px] h-[16px] w-[16px] rounded-full border-[3px] border-white bg-gradient-to-r from-[#DC2626] to-[#F97316] dark:border-[#101010]"
              aria-hidden="true"
            />
            <div className={`${CARD} flex flex-col gap-[8px] p-[14px] xl:flex-row xl:items-center xl:justify-between xl:gap-[24px] xl:p-[18px_26px]`}>
              <span className="text_1 !text-[#212121] dark:!text-white">{row.event}</span>
              {row.date && (
                <span className="w-fit shrink-0 rounded-full bg-gradient-to-r from-[#DC2626] to-[#F97316] px-[14px] py-[4px] text_1 font-semibold !text-white">
                  {row.date}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </DoctoralSection>
  );
}
