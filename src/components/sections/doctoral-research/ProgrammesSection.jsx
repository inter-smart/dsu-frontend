import { DoctoralSection, H3_BIG, TEXT } from "./ui";

const TH = "px-[16px] py-[14px] xl:py-[16px] text-center text_1 font-medium !text-white";
const TD = "px-[16px] py-[14px] align-top text_1 !text-black dark:!text-white";
const LINE = "border-[#333] dark:border-white/30";

// Intro text (orange rule), then the Research Programs Offered table
export default function ProgrammesSection({ data }) {
  if (!data) return null;
  const { intro, heading, description, rows = [], columns = {} } = data;

  return (
    <DoctoralSection data={{ ...data, heading: "", description: "" }}>
      {intro && (
        <div data-reveal className="mb-[30px] xl:mb-[40px] max-w-[1000px] border-l-4 border-[#F97316] pl-[16px] xl:pl-[24px]">
          <p className="text-[17px] xl:text-[19px] 3xl:text-[22px] leading-[1.5] text-[#4A5565] dark:text-white">{intro}</p>
        </div>
      )}
      {(heading || description) && (
        <div data-reveal className="mb-[20px]">
          {heading && <h2 className={H3_BIG}>{heading}</h2>}
          {description && <p className={`${TEXT} mt-[8px]`}>{description}</p>}
        </div>
      )}
      {rows.length > 0 && (
        <div className="w-full overflow-x-auto">
          <table className={`w-full min-w-[640px] table-fixed border-collapse border ${LINE} text-left`}>
            {heading && <caption className="sr-only">{heading}</caption>}
            <colgroup>
              <col className="w-[60px] xl:w-[6%]" />
              <col className="w-[40%]" />
              <col />
            </colgroup>
            <thead>
              <tr className="bg-[#F97316]">
                <th scope="col" className={`${TH} border-r border-[#333]/60 dark:border-white/30`}>#</th>
                <th scope="col" className={`${TH} border-r border-[#333]/60 dark:border-white/30`}>{columns.school}</th>
                <th scope="col" className={TH}>{columns.departments}</th>
              </tr>
            </thead>
            <tbody data-reveal-stagger>
              {rows.map((row, i) => (
                <tr key={row.id ?? i} className={`border-t ${LINE} transition-colors duration-300 hover:bg-[#FFF8EE] dark:hover:bg-[#18191B]`}>
                  <td className={`${TD} border-r ${LINE} text-center`}>{i + 1}</td>
                  <th scope="row" className={`${TD} border-r ${LINE} text-left font-semibold`}>{row.school}</th>
                  <td className={TD}>{row.departments || <span aria-label="No departments listed">—</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </DoctoralSection>
  );
}
