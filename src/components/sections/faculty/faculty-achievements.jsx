import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";

export default function FacultyAchievements({ data }) {
  return (
    <section className="w-full h-auto py-10 lg:py-15 2xl:py-20 3xl:py-25 block">
      <div className="container">
        <div className="w-full h-auto p-[20px_15px] sm:p-[30px_20px] lg:p-[40px_30px] 2xl:p-[60px_40px] 3xl:p-[70px_50px] border border-black/10 rounded-md 2xl:rounded-[10px] overflow-hidden">
          <div className="w-full h-auto mb-5 3xl:mb-7.5 space-y-2.5 lg:space-y-3.75 3xl:space-y-5">
            <Heading>{data?.title}</Heading>
            <Text className="text-[#4A5565]">{data?.description}</Text>
          </div>
          <ul className="text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.3] font-medium text-[#212121] pl-5 list-disc space-y-2.5 2xl:space-y-3.75 3xl:space-y-5">
            {data?.achievements?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
