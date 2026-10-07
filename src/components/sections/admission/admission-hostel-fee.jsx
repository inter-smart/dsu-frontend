import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";

export default function AdmissionHostelFee({ data }) {
  return (
    <section className="w-full h-auto py-10 sm:py-[50px_60px] lg:py-[60px_70px] 2xl:py-[70px_90px] 3xl:py-[80px_110px] bg-linear-to-br from-[#EFF6FF] to-[#F9FAFB] block">
      <div className="container">
        <div className="w-full h -auto block mb-5 sm:mb-7.5 2xl:mb-7.5 3xl:mb-10">
          <Heading className="mb-2.5 2xl:mb-3.75 3xl:mb-3.75">
            {data?.title}
          </Heading>
          <Text>{data?.description}</Text>
        </div>
        <div className="w-full h-auto gap-2.5 2xl:gap-3.75 3xl:gap-5 grid sm:grid-cols-2">
          {data?.hostelFees?.map((item) => (
            <div key={item?.id} className="w-full h-auto">
              <div className="w-full h-full p-[20px_15px] 2xl:p-[30px_20px] bg-white border border-black/10 rounded-md 2xl:rounded-[10px] overflow-hidden flex flex-col justify-between transition-colors duration-300 hover:border-(--basecolor)">
                <div className="w-full h-auto mb-3.75 3xl:mb-5 gap-2 2xl:gap-2.5 flex flex-col">
                  <span className="text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-semibold text-[#212121] gap-2.5 flex items-center">
                    {item?.residency}
                    {item?.sharing && (
                      <>
                        <span className="size-1.5 rounded-full bg-linear-to-r from-(--basecolor) to-(--basecolor2)" />
                        {item?.sharing} Sharing
                      </>
                    )}
                  </span>
                  <div className="text-lg 2xl:text-[22px] 3xl:text-[28px] leading-[1.1] font-semibold bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit">
                    {item?.feeValue}
                  </div>
                  <div className="text-sm 3xl:text-base leading-[1.1] font-normal text-[#4A5565]">
                    {item?.title}
                  </div>
                </div>
                <div className="w-full h-auto gap-2.5 grid lg:grid-cols-2">
                  {item?.hostelFeeDetails?.map((detail) => (
                    <div key={detail?.id} className="w-full h-auto">
                      <div className="w-full h-full p-[10px_15px] bg-linear-to-b from-[#FFF8EE] to-[#FFF3E0] rounded-md 2xl:rounded-[10px] gap-1.25 overflow-hidden flex flex-col">
                        <div className="text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-medium text-[#212121]">
                          {detail?.title}
                        </div>
                        <div className="text-[13px] 2xl:text-sm 3xl:text-base leading-[1.1] font-normal text-[#4A5565]">
                          {detail?.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
