import { Check } from "lucide-react";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";

export default function AdmissionFeePayment({ data }) {
  return (
    <section className="w-full h-auto py-10 2xl:py-12.5 3xl:py-15 bg-linear-to-br from-[#EFF6FF] to-[#F9FAFB] block">
      <div className="container">
        <div className="-mx-2.5 [&>div]:p-2.5 w-full h-auto flex flex-wrap items-center">
          <div className="w-full sm:w-1/2 max-sm:mb-3.75">
            <div className="w-full h-auto block mb-5 sm:mb-6.25 lg:mb-7.5 2xl:mb-7.5 3xl:mb-10">
              <Heading className="mb-2.5 2xl:mb-3.75 3xl:mb-6.25">
                {data?.title}
              </Heading>
              <Text>{data?.description}</Text>
            </div>
            <ul className="space-y-2.5 3xl:space-y-3.75">
              {data?.payments?.map((item) => (
                <li
                  key={item}
                  className="text-sm 3xl:text-lg leading-[1.6] font-semibold text-black gap-2.5 3xl:gap-3.75 flex"
                >
                  <Check
                    aria-hidden="true"
                    className="size-3.75 3xl:size-5 shrink-0 text-[#F04426] translate-y-0.75 3xl:translate-y-1.25"
                    strokeWidth={2}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="w-full h-auto p-[30px_15px] lg:p-[40px_20px] 2xl:p-[50px_20px] 3xl:p-[60px_30px] bg-white rounded-md 2xl:rounded-[10px] overflow-hidden block">
              <div className="text-xl sm:text-[22px] lg:text-[27px] 2xl:text-[32px] 3xl:text-[40px] leading-[1.1] font-semibold text-[#212121] mb-3.75 lg:mb-5 2xl:mb-6.25 3xl:mb-7.5">
                {data?.admissionPayments?.title}
              </div>
              <Text className="text-[#4A5565]">
                {data?.admissionPayments?.description}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
