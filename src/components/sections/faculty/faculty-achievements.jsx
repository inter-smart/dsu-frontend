import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";

export default function FacultyAchievements({ data }) {
  return (
    <section className="w-full h-auto py-10 lg:py-15 2xl:py-20 3xl:py-25 block">
      <div className="container">
        <div className="w-full h-auto p-[20px_15px] sm:p-[30px_20px] lg:p-[40px_30px] 2xl:p-[60px_40px] 3xl:p-[70px_50px] border border-black/10 rounded-md 2xl:rounded-[10px] overflow-hidden">
          <div className="w-full h-auto mb-5 3xl:mb-7.5 space-y-2.5 lg:space-y-3.75 3xl:space-y-5">
            <Heading>{data?.title}</Heading>
          </div>
          {/* rich text: paragraphs in the description style, bullet lists as achievements */}
          <Text
            className="typography text-[#4A5565] [&_p]:mb-2.5 2xl:[&_p]:mb-3.75 [&_ul]:text-sm 2xl:[&_ul]:text-[15px] 3xl:[&_ul]:text-lg [&_ul]:leading-[1.3] [&_ul]:font-medium [&_ul]:text-[#212121] [&_ul]:pl-5 [&_ul]:list-disc [&_ul]:space-y-2.5 2xl:[&_ul]:space-y-3.75 3xl:[&_ul]:space-y-5 [&_ol]:pl-5 [&_ol]:list-decimal"
            dangerouslySetInnerHTML={{ __html: data?.description || "" }}
          />
        </div>
      </div>
    </section>
  );
}
