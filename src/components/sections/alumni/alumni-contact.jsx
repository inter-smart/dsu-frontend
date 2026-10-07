import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import AiAcademicMenubar from "../ai-enabled/Ai-academicMenubar";
import LibrarySidebar from "../ai-enabled/library/library-sidemenubar";

export default function AlumniContact({ data }) {
  return (
    <section className="w-full h-auto py-[20px_40px] sm:py-[30px_50px] lg:py-[60px_80px] 2xl:py-[70px_100px] 3xl:py-[90px_30px] block relative z-0">
      <div className="container">
        <div className="[--width:100%] lg:[--width:210px] 2xl:[--width:270px] 3xl:[--width:330px] w-full h-auto flex flex-wrap">
          <div className="w-(--width)">
            <LibrarySidebar data={data?.sidebar} />
            <AiAcademicMenubar
              className="[&>div]:px-0 block lg:hidden"
              data={data?.sidebar}
            />
          </div>
          <div className="w-full lg:w-[calc(100%-var(--width))] lg:pl-3.75 2xl:pl-5 3xl:pl-7.5">
            <div className="w-full h-auto p-[20px_00px_30px_20px] sm:p-[30px_0px_40px_30px] md:p-[30px_30px_70px_30px] lg:p-[30px_80px_40px_30px] 2xl:p-[40px_100px_50px_40px] 3xl:p-[50px_120px_50px_50px] border border-black/10 rounded-[10px] sm:rounded-[13px] 2xl:rounded-[20px] overflow-hidden">
              <div className="w-full h-auto mb-6.25 lg:mb-6.25 2xl:mb-7.5 3xl:mb-10">
                <Heading className={"mb-3.75 2xl:mb-6.25"}>
                  {data?.title}
                </Heading>
                <Text className={"text-[#4A5565]"}>{data?.description}</Text>
              </div>
              <div className="w-full h-auto block">
                {data?.contact?.map((item) => (
                  <div
                    key={item?.id}
                    className="w-full h-auto not-last:mb-10 lg:not-last:mb-12.5 xl:not-last:mb-15 2xl:not-last:mb-17.5 3xl:not-last:mb-22.5"
                  >
                    <div className="w-full overflow-x-auto">
                      <div className="text-base 2xl:text-lg 3xl:text-2xl leading-[1.1] font-bold text-[#212121] mb-3.75 2xl:mb-5 3xl:mb-7.5">
                        {item?.title}
                      </div>
                      <table className="w-full min-w-160 table-fixed border-collapse text-center text-[10px] sm:text-xs">
                        <thead className="bg-[#F97316] text-white">
                          <tr>
                            {item?.headers?.map((header) => (
                              <th
                                key={header}
                                scope="col"
                                className="text-[15px] 3xl:text-lg leading-[1.1] font-medium border border-[#212121] py-2.5 3xl:py-3.75"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {item?.rows?.map((row, rowIndex) => (
                            <tr
                              key={`${item?.id}-${rowIndex}`}
                              className="text-[#212121]"
                            >
                              {row?.map((cell, cellIndex) => {
                                if (cell === null) return null;
                                const value =
                                  typeof cell === "object" ? cell?.value : cell;
                                const rowSpan =
                                  typeof cell === "object"
                                    ? cell?.rowSpan
                                    : undefined;
                                return (
                                  <td
                                    key={`${item?.id}-${rowIndex}-${cellIndex}`}
                                    rowSpan={rowSpan}
                                    className="text-[13px] sm:text-sm 3xl:text-lg leading-[1.4] font-medium text-[#212121] whitespace-pre-line border border-[#212121] py-2.5 sm:py-3.75 3xl:py-5 align-middle"
                                  >
                                    {value}
                                  </td>
                                );
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
