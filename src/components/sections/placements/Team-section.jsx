import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";

export default function TeamSection({ data }) {
  return (
    <section className="w-full h-auto py-10 sm:py-15 lg:py-20 2xl:py-25 3xl:py-30 block dark:bg-[#000]">
      <div className="container">
        <div className="w-full h-auto mb-6.25 2xl:mb-7.5 3xl:mb-10">
          {data?.subTitle && (
            <div className="text-sm 2xl:text-base 3xl:text-xl leading-[1.1] font-normal bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit mb-2.5 2xl:mb-3.75 3xl:mb-5 relative z-0 [--size:15px] 2xl:[--size:20px] 3xl:[--size:25px] before:content-[''] before:w-(--size) before:h-0.5 2xl:before:h-0.75 pl-[calc(var(--size)+8px)] before:my-auto before:bg-linear-to-r before:from-(--basecolor) before:to-(--basecolor2) before:inline-block before:absolute before:z-1 before:inset-[0_auto_0_0]">
              {data.subTitle}
            </div>
          )}
          <Heading className="mb-2.5 2xl:mb-3.75 3xl:mb-5 dark:text-white">
            {data?.title}
          </Heading>
          <Text className="dark:text-[#9CA3AF]">{data?.description}</Text>
        </div>
        <div>
          <div className="w-full overflow-x-auto">
            <table className="[--padding:10px] sm:[--padding:15px] 2xl:[--padding:20px] text-[13px] sm:text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.2] text-left text-[#212121] dark:text-white w-full min-w-170 border-collapse">
              <thead>
                <tr className="bg-(--basecolor2) text-white">
                  {data?.table?.columns?.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="font-medium text-left text-white p-(--padding) border border-[#E5E7EB] dark:border-white/20"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data?.table?.rows?.map((row) => (
                  <tr key={row?.id}>
                    <td className="font-normal p-(--padding) border border-[#E5E7EB] dark:border-white/20">
                      {row?.designation}
                    </td>
                    <td className="font-normal p-(--padding) border border-[#E5E7EB] dark:border-white/20">
                      {row?.name}
                    </td>
                    <td className="font-normal p-(--padding) border border-[#E5E7EB] dark:border-white/20">
                      {row?.area}
                    </td>
                    <td className="font-normal p-(--padding) border border-[#E5E7EB] dark:border-white/20">
                      {row?.contact?.map((line, i) => (
                        <div key={i} className="leading-[2]">
                          {line}
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {data?.reservation && (
            <div className="mt-10 sm:mt-15 lg:mt-15 2xl:mt-17.5 3xl:mt-22.5 border-t border-black/10 dark:border-white/10 pt-10 sm:pt-10 lg:pt-12.5 2xl:pt-15 3xl:pt-20">
              <div className="text-sm 2xl:text-base 3xl:text-xl leading-[1.1] font-normal bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit mb-2.5 2xl:mb-3.75 3xl:mb-5 relative z-0 [--size:15px] 2xl:[--size:20px] 3xl:[--size:25px] before:content-[''] before:w-(--size) before:h-0.5 2xl:before:h-0.75 pl-[calc(var(--size)+8px)] before:my-auto before:bg-linear-to-r before:from-(--basecolor) before:to-(--basecolor2) before:inline-block before:absolute before:z-1 before:inset-[0_auto_0_0]">
                {data.reservation.subTitle}
              </div>
              <Heading className="mb-3.75 3xl:mb-5 dark:text-white">
                {data.reservation.title}
              </Heading>
              <div className="w-full h-auto p-3.75 sm:p-5 2xl:p-6.25 3xl:p-8.75 rounded-md 2xl:rounded-[10px] bg-linear-to-r from-[#FFF8EE] to-[#FFF3E0] dark:from-[#F97316]/15 dark:to-[#F97316]/10">
                <h3 className="text-base 2xl:text-lg 3xl:text-[22px] font-semibold text-[#212121] dark:text-white mb-2.5 3xl:mb-3.75">
                  {data.reservation.policyTitle}
                </h3>
                <Text className={"text-[#4A5565] dark:text-[#9CA3AF]"}>
                  {data.reservation.description}
                </Text>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}