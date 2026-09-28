import Link from "next/link";
import Image from "next/image";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";

export default function ExaminationCareer({ data }) {
  return (
    <section className="w-full h-auto py-10 sm:py-12.5 lg:py-17.5 2xl:py-20 3xl:py-25 block">
      <div class="container">
        <div className="[--width:100%] md:[--width:370px] lg:[--width:470px] xl:[--width:570px] 2xl:[--width:680px] 3xl:[--width:850px] w-full h-auto flex flex-wrap">
          <div className="w-(--width) md:w-[calc(100%-var(--width))] md:pr-7.5 lg:pr-12.5 xl:pr-17.5 2xl:pr-25 3xl:pr-30 mb-5 sm:mb-7.5 md:mb-0">
            <Heading className="mb-5 sm:mb-6.25 lg:mb-7.5 2xl:mb-8.75 3xl:mb-11.25">
              {data?.title}
            </Heading>
            <Text className="mb-3.75 sm:mb-5 lg:mb-6.25 2xl:mb-7.5 3xl:mb-10">
              {data?.description}
            </Text>
            <span className="text-sm 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-bold text-(--basecolor2)">
              Write to us at{" "}
              <Link href={`mailto:${data?.mail}`}>{data?.mail}</Link>
            </span>
          </div>
          <div className="w-(--width)">
            <div className="w-full h-auto sm:h-70 md:h-full max-sm:aspect-850/360 rounded-[10px] overflow-hidden block">
              <Image
                src={data?.media?.url}
                width={850}
                height={370}
                alt={data?.media?.alternativeText}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
