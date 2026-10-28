import Image from "next/image";

export default function GetInvolved({ data }) {
  return (
    <section className="w-full h-auto pb-10 sm:pb-15 lg:pb-20 2xl:pb-25 3xl:pb-30 block">
      <div className="container">
        <div className="w-full h-auto mb-6.25 lg:mb-7.5 2xl:mb-10">
          <h2 className="title_1 mb-2.5 xl:mb-3 2xl:mb-3.5">{data?.title}</h2>
          {data?.description && <p className="text_1 max-w-[820px]">{data.description}</p>}
        </div>
        <div className="relative z-0 w-full h-auto rounded-md 2xl:rounded-[10px] border border-[#ECE3DA] overflow-hidden">
          {data?.backgroundImage && (
            <Image
              src={data.backgroundImage}
              alt=""
              fill
              sizes="100vw"
              className="object-cover -z-1"
            />
          )}
          <div className="relative z-0 w-full h-auto p-6.25 sm:p-8.75 xl:p-10 flex flex-col gap-3.75 xl:gap-5">
            {data?.contacts?.map((contact, index) => (
              <div key={contact?.id || index} className="flex items-center gap-3.5 xl:gap-4">
                {contact?.icon && (
                  <span className="shrink-0 size-8 xl:size-9">
                    <Image
                      src={contact.icon}
                      alt=""
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </span>
                )}
                <span className="text-base xl:text-lg 3xl:text-xl leading-normal text-[#212121] dark:text-white">
                  {contact.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
