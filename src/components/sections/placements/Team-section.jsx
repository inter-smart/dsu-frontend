import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import TableScrollBox from "@/components/layout/common/TableScrollBox";
import { BlocksRenderer } from "@/components/ui/blocks-renderer";
import { withLineBreaks } from "@/lib/line-breaks";


// Heading text for a campus. Edit the titles here (first match wins).
// Return null for campuses that should NOT get a heading row.
const CAMPUS_HEADINGS = [
  { match: /all\s*campus/i, title: null },
  { match: /harohalli/i, title: "DSU Main Campus - Harohalli" },
  { match: /city|innovation/i, title: "DSU City Innovation Campus" },
];


const getGroupTitle = (campus) => {
  const found = CAMPUS_HEADINGS.find((h) => h.match.test(campus));
  // Unknown campus: use its own label as the heading
  return found ? found.title : campus;
};

// Shared cell style (thin grey borders like the reference table)
const cellClass =
  "font-normal align-middle p-(--padding) border border-[#BFC5CC] dark:border-white/20";


export default function TeamSection({ data }) {
  // Backend sends one table per campus in `groups`; older data uses a single `table`.
  const tableGroups = (
    data?.groups?.length
      ? data.groups
      : data?.table?.rows?.length
        ? [{ campus: "", columns: data.table.columns, rows: data.table.rows }]
        : []
  ).filter((g) => g?.rows?.length > 0);

  // One table for all groups: header comes from the first group
  const columns = tableGroups[0]?.columns ?? [];
  const hasContact = columns.includes("Contact");
  const hasCampus = columns.includes("Campus");

  return (
    <section className="w-full h-auto py-10 sm:py-15 lg:py-20 2xl:py-25 3xl:py-30 block dark:bg-[#000]">
      <div className="container">
        <div className="w-full h-auto mb-6.25 2xl:mb-7.5 3xl:mb-10">
          {data?.subTitle && (
            <div className="text-sm 2xl:text-base 3xl:text-xl leading-[1.1] font-normal bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit mb-2.5 2xl:mb-3.75 3xl:mb-5 relative z-0 [--size:15px] 2xl:[--size:20px] 3xl:[--size:25px] before:content-[''] before:w-(--size) before:h-0.5 2xl:before:h-0.75 pl-[calc(var(--size)+8px)] before:my-auto before:bg-linear-to-r before:from-(--basecolor) before:to-(--basecolor2) before:inline-block before:absolute before:z-1 before:inset-[0_auto_0_0]">
              {withLineBreaks(data.subTitle)}
            </div>
          )}
          <Heading className="mb-2.5 2xl:mb-3.75 3xl:mb-5 dark:text-white">
            {withLineBreaks(data?.title)}
          </Heading>
          {Array.isArray(data?.description) ? (
            <div className="typography dark:text-[#9CA3AF] [&_p]:dark:text-[#9CA3AF]">
              <BlocksRenderer content={data.description} />
            </div>
          ) : (
            data?.description && (
              <Text className="dark:text-[#9CA3AF]">{data.description}</Text>
            )
          )}
        </div>
        {tableGroups.length > 0 && (
          <div className="flex flex-col gap-10 2xl:gap-12.5">
            <TableScrollBox className="w-full overflow-auto max-h-[450px]">
              <table className="[--padding:10px] sm:[--padding:11px_13px] 3xl:[--padding:20px] text-[13px] sm:text-[15px] 2xl:text-[15px] 3xl:text-lg leading-[1.2] text-left text-[#212121] dark:text-white w-full min-w-170 border-collapse">
                <thead>
                  <tr>
                    {columns.map((column) => (
                      <th
                        key={column}
                        scope="col"
                        className="sticky top-0 z-10 bg-[#F37021] font-medium text-left text-white p-(--padding) border border-[#BFC5CC] dark:border-white/20"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableGroups.map((group, gi) => {
                    const title = group.campus ? getGroupTitle(group.campus) : null;
                    return [
                      // Blue campus heading row inside the table (skipped for "All Campus")
                      title && (
                        <tr key={`heading-${group.campus || gi}`}>
                          <td
                            colSpan={columns.length || 4}
                            className="text-center font-semibold text-black bg-[#BFC5CC]/80 p-(--padding) border border-[#BFC5CC] dark:border-white/20"
                          >
                            {title}
                          </td>
                        </tr>
                      ),
                      ...group.rows.map((row, index) => (
                        <tr
                          key={`row-${group.campus || gi}-${row?.id ?? index}`}
                          className="bg-white dark:bg-transparent"
                        >
                          <td className={cellClass}>{row?.designation}</td>
                          <td className={cellClass}>{row?.name}</td>
                          <td className={cellClass}>{row?.area}</td>
                          {hasCampus && (
                            <td className={cellClass}>{row?.campus ?? group.campus}</td>
                          )}
                          {hasContact && (
                            <td className={cellClass}>
                              {row?.contact?.map((line, i) => (
                                <div key={i} className="leading-[2]">{line}</div>
                              ))}
                            </td>
                          )}
                        </tr>
                      )),
                    ];
                  })}
                </tbody>
              </table>
            </TableScrollBox>

            {data?.reservation && (
              <div className="mt-0 border-t border-black/10 dark:border-white/10 pt-10 sm:pt-10 lg:pt-12.5 2xl:pt-15 3xl:pt-20">
                <div className="text-sm 2xl:text-base 3xl:text-xl leading-[1.1] font-normal bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit mb-2.5 2xl:mb-3.75 3xl:mb-5 relative z-0 [--size:15px] 2xl:[--size:20px] 3xl:[--size:25px] before:content-[''] before:w-(--size) before:h-0.5 2xl:before:h-0.75 pl-[calc(var(--size)+8px)] before:my-auto before:bg-linear-to-r before:from-(--basecolor) before:to-(--basecolor2) before:inline-block before:absolute before:z-1 before:inset-[0_auto_0_0]">
                  {withLineBreaks(data.reservation.subTitle)}
                </div>
                <Heading className="mb-3.75 3xl:mb-5 dark:text-white">
                  {withLineBreaks(data.reservation.title)}
                </Heading>
                <div className="w-full h-auto p-3.75 sm:p-5 2xl:p-6.25 3xl:p-8.75 rounded-md 2xl:rounded-[10px] bg-linear-to-r from-[#FFF8EE] to-[#FFF3E0] dark:from-[#F97316]/15 dark:to-[#F97316]/10">
                  <h3 className="text-base 2xl:text-lg 3xl:text-[22px] font-semibold text-[#212121] dark:text-white mb-2.5 3xl:mb-3.75">
                    {data.reservation.policyTitle}
                  </h3>
                  <Text className={"text-[#4A5565] dark:text-[#9CA3AF]"}>
                    {withLineBreaks(data.reservation.description)}
                  </Text>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}