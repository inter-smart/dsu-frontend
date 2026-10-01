import Image from "next/image";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";

export default function AboutInitiative({ data }) {
  return (
    <section className="w-full h-auto py-10 sm:py-12.5 lg:py-17.5 2xl:py-22.5 3xl:py-27.5 block">
      <div className="container">
        <div className="[--gap:20px] sm:[--gap:30px] w-full h-auto flex items-center flex-wrap">
          <div className="w-full lg:w-[25%] max-lg:mb-(--gap)">
            <div className="w-full h-auto lg:pr-5">
              <Heading className="mb-3.75 sm:mb-5 lg:mb-7.5 2xl:mb-10 3xl:mb-12.5">
                {data?.title}
              </Heading>
              <Text>{data?.description}</Text>
            </div>
          </div>
          <div className="w-full md:w-[50%] max-md:mb-(--gap)">
            <div className="w-full h-auto aspect-815/460 rounded-md 2xl:rounded-[10px] overflow-hidden block">
              {data?.media?.type === "video" ? (
                <video
                  src={data?.media?.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={data?.media?.url}
                  alt={data?.media?.alternativeText || "About Image"}
                  width={815}
                  height={460}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
          <div className="w-full md:w-[50%] lg:w-[25%]">
            <div className="w-full h-auto sm:pl-5 lg:pl-7.5 xl:pl-10 2xl:pl-17.5 3xl:pl-17.5">
              {data?.pillars?.map((item, index) => (
                <div
                  key={item?.title || index}
                  className="w-full h-auto py-3.75 3xl:py-5 not-last:border-b borde-black/10 block"
                >
                  <div className="[--icon-size:35px] md:[--icon-size:40px] 3xl:[--icon-size:55px] w-full h-auto flex">
                    <div className="size-(--icon-size) overflow-hidden flex items-center justify-center">
                      {item?.icon && (
                        <Image
                          src={item?.icon?.url}
                          alt={item?.icon?.alternativeText || "Icon"}
                          width={55}
                          height={55}
                          className="size-full object-contain"
                        />
                      )}
                    </div>
                    <div className="w-[calc(100%-var(--icon-size))] pl-2.5 2xl:pl-3.75">
                      <div className="text-base 2xl:text-xl 3xl:text-[25px] leading-[1.1] font-bold text-[#212121] lg:mb-2.5 2xl:mb-3.75 3xl:mb-5">
                        {item?.title}
                      </div>
                      <div className="text-xs 2xl:text-sm 3xl:text-lg leading-[1.6] font-normal text-[#4A5565]">
                        {item?.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
