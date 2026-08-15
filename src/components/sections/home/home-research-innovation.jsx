import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function ResearchInnovation({ data }) {
  if (!data?.tabs?.length) return null;

  return (
    <section className="w-full py-[40px] xl:py-[60px] 2xl:py-[70px] 3xl:py-[80px]">
      <div className="container">
        <div className="title_1 text-center text-[#212121] mb-1 xl:mb-2">
          {data.title}
        </div>
        <div className="text_1 text-center text-[#4A5565] mb-5 xl:mb-[25px] 2xl:mb-[31px] 3xl:mb-10">
          {data.description}
        </div>

        <Tabs defaultValue={data.tabs[0].value} className="w-full">
          <TabsList
            variant="line"
            className="w-full h-[115px] 2xl:h-[130px] 3xl:h-[160px] mb-[45px] 2xl:mb-[54px] 3xl:mb-[65px]"
          >
            {data.tabs.map((tab) => (
              <TabsTrigger
                key={tab.id} 
                value={tab.value}
                className="gap-[20px] 2xl:gap-[25px] 3xl:gap-[30px] after:bg-linear-to-r after:from-(--basecolor) after:to-(--basecolor2) after:!h-1.5 3xl:after:!h-2 hover:after:opacity-10"
              >
                <div className="size-[60px] 2xl:size-[75px] 3xl:size-[94px] bg-white rounded-full flex items-center justify-center border border-(--basecolor2)/50">
                  {tab.trigger.icon && (
                    <Image
                      src={tab.trigger.icon.url}
                      alt={
                        tab.trigger.icon.alternativeText || tab.trigger.label
                      }
                      width={50}
                      height={50}
                      className="size-[25px] 2xl:size-[30px] 3xl:size-[47px] object-contain"
                    />
                  )}
                </div>
                <span className="text-[15px] 2xl:text-[18px] 3xl:text-[23px] leading-tight font-bold text-[#212121]">
                  {tab.trigger.label}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {data.tabs.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.value}
              className="w-full mt-0 focus-visible:outline-none focus-visible:ring-0"
            >
              <div className="flex-1 flex flex-col justify-center">
                {tab.content.title && (
                  <div className="text-[24px] xl:text-[30px] 2xl:text-[36px] 3xl:text-[45px] leading-tight font-bold tracking-tight text-[#212121]">
                    {tab.content.title}
                  </div>
                )}
                <div className="text_1 text-[#4A5565]">
                  {tab.content.description}
                </div>
                <div className="flex justify-center mt-[25px] 2xl:mt-[30px] 3xl:mt-[40px]">
                  <Link
                    href="/centres-of-excellence"
                    className={buttonVariants({
                      variant: "default",
                      size: "default",
                    })}
                  >
                    View All Centers
                    <Image
                      src="/images/icon-btn.svg"
                      alt="home-btn"
                      width={15}
                      height={15}
                      className="size-[15px]"
                      data-icon="inline-end"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-10 xl:gap-14">
                {/* Left Content */}
                <div className="flex-1 flex flex-col justify-center">
                  {tab.content.featuredTitle && (
                    <div className="text-[#f05c2a] font-bold text-sm xl:text-base uppercase tracking-wider mb-2">
                      {tab.content.featuredTitle}
                    </div>
                  )}
                  <h3 className="text-3xl xl:text-4xl 2xl:text-[40px] font-bold text-[#212121] mb-4 xl:mb-6 leading-tight">
                    {tab.content.title}
                  </h3>
                  <div
                    className="text-[#4A5565] text-base xl:text-lg mb-8 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: tab.content.description,
                    }}
                  />

                  {tab.content.statistics &&
                    tab.content.statistics.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 border-t border-gray-200 pt-8">
                        {tab.content.statistics.map((stat) => (
                          <div key={stat.id} className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-[#f05c2a]">
                              {stat.icon && (
                                <Image
                                  src={stat.icon.url}
                                  alt={stat.icon.alternativeText || stat.label}
                                  width={28}
                                  height={28}
                                  className="object-contain"
                                />
                              )}
                              <span className="text-3xl xl:text-4xl font-bold">
                                {stat.value}
                                {stat.suffix}
                              </span>
                            </div>
                            <span className="text-sm xl:text-base text-[#4A5565] font-medium">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                  {tab.content.button && (
                    <Link
                      href={tab.content.button.url}
                      className={
                        buttonVariants({ variant: "default", size: "lg" }) +
                        " w-fit mt-2 rounded-full"
                      }
                    >
                      {tab.content.button.label}
                      {tab.content.button.icon && (
                        <Image
                          src={tab.content.button.icon.url}
                          alt="icon"
                          width={16}
                          height={16}
                          className="ml-2"
                          data-icon="inline-end"
                        />
                      )}
                    </Link>
                  )}
                </div>

                {/* Right Content - Featured Cards Grid */}
                <div className="flex-1">
                  {tab.content.featuredCards &&
                    tab.content.featuredCards.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-6 h-full">
                        {tab.content.featuredCards.map((card) => (
                          <Link
                            key={card.id}
                            href={card.slug}
                            className="group relative rounded-[12px] overflow-hidden aspect-[4/3] block shadow-sm"
                          >
                            <Image
                              src={card.image.url}
                              alt={card.image.alternativeText || card.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5 xl:p-6">
                              <span className="text-white font-semibold text-lg xl:text-xl leading-tight group-hover:-translate-y-1 transition-transform duration-300">
                                {card.title}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}

                  {/* Optional Gallery Fallback if featuredCards is empty but gallery exists */}
                  {(!tab.content.featuredCards ||
                    tab.content.featuredCards.length === 0) &&
                    tab.content.gallery &&
                    tab.content.gallery.length > 0 && (
                      <div className="grid grid-cols-2 gap-4 h-full">
                        {tab.content.gallery.map((img, idx) => (
                          <div
                            key={idx}
                            className="relative rounded-[12px] overflow-hidden aspect-square"
                          >
                            <Image
                              src={img.url}
                              alt="gallery"
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
