import { withLineBreaks, plainTitle } from "@/lib/line-breaks";
import TableScrollBox from "@/components/layout/common/TableScrollBox";

export default function AIEngagement({ data }) {
    if (!data) return null;

    const columns = Array.isArray(data?.columns) ? data.columns : ["Pathway", "What Partners Can Do"];
    const rows = Array.isArray(data?.rows) ? data.rows : [];
    // scroll box height in px, set `maxHeight` in the data to change it
    const maxHeight = data?.maxHeight ?? 320;

    return (
        <section className="relative py-[40px] xl:py-[50px] 2xl:py-[60px] 3xl:py-[80px] bg-white dark:bg-[#101010] transition-colors duration-300">
            <div className="container">
                {data?.heading && (
                    <h2 className="cmn_Title font-bold leading-[1.1] text-center text-[#212121] dark:text-white mb-10">
                        {withLineBreaks(data.heading)}
                    </h2>
                )}

                {rows.length > 0 && (
                    // scroll box: vertical scroll after maxHeight, horizontal scroll on small screens.
                    // data-lenis-prevent stops Lenis smooth scroll from hijacking the wheel over the box.
                    // <TableScrollBox className="max-h-[450px] overflow-auto">
                        <table className="w-full min-w-[640px] border-separate border-spacing-0 text-[15px] xl:text-[17px] 2xl:text-[18px] border border-black">
                            <thead>
                                <tr>
                                    {columns.map((column, index) => (
                                        <th
                                            key={index}
                                            scope="col"
                                            // sticky so the orange header stays visible while the rows scroll
                                            className={
                                                "sticky top-0 z-10 bg-[#F97316] text-white font-medium leading-[1.3] py-[14px] xl:py-[15px] " +
                                                (index === 0
                                                    ? "w-[26%] min-w-[200px] text-center border-r border-[#374151]/60 dark:border-white/20"
                                                    : "text-left pl-[40px] xl:pl-[60px] pr-[20px]")
                                            }
                                        >
                                            {column}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, index) => {
                                    const isLast = index === rows.length - 1;
                                    const rowBorder = isLast ? "" : " border-b border-[#374151] dark:border-white/20";

                                    return (
                                        <tr key={row?.id ?? index} className="bg-white dark:bg-[#18191B]">
                                            <th
                                                scope="row"
                                                className={
                                                    "w-[26%] min-w-[200px] text-center font-normal leading-[1.4] text-[#212121] dark:text-white px-[12px] py-[14px] xl:py-[15px] border-r border-[#374151] dark:border-white/20" +
                                                    rowBorder
                                                }
                                            >
                                                {row?.pathway}
                                            </th>
                                            <td
                                                className={
                                                    "text-left leading-[1.5] text-[#212121] dark:text-white pl-[40px] xl:pl-[60px] pr-[20px] py-[14px] xl:py-[15px]" +
                                                    rowBorder
                                                }
                                            >
                                                {withLineBreaks(row?.description)}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    // </TableScrollBox> 
                )}
        </div>
        </section >
    );
}