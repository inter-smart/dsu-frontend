import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const local_data = {
  title: "Industry-Integrated Academic Programs",
  description:
    "Designed to align with real-world industry and emerging technologies",
};

export default function HomeAcademic({ data = local_data }) {
  return (
    <section className="w-full h-auto py-20 bg-linear-to-t from-[#FFF3E0] to-[#FFF8EE] block">
      <div className="container">
        <div className="w-full h-auto mb-3.75 sm:mb-5 lg:mb-7.5 3xl:mb-10 text-center">
          <Heading
            aurora
            speed={2}
            align="center"
            className="mb-1.25 3xl:mb-2.5"
          >
            {data?.title}
          </Heading>
          <Text>{data?.description}</Text>
        </div>
      </div>
    </section>
  );
}

function AcademicCard({ item }) {
  return (
    <div className="group w-full h-full block relative z-0">
      <div className="w-full h-full aspect-335/335 rounded-[10px] overflow-hidden block">
        <Image
          src={item?.academicImage?.url}
          alt={item?.academicImage?.alternativeTxt}
          width={335}
          height={335}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="w-13.75 h-auto aspect-square p-2.5 rounded-[10px] backdrop-blur-[45px] absolute z-1 inset-[0_auto_auto_0] flex items-center justify-center">
        <Image
          src={item?.icon?.url}
          alt={item?.icon?.alternativeTxt}
          width={55}
          height={55}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
