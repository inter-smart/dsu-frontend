export default function Contact({ data }) {
  return (
    <section className="[--text-color:#212121] w-full h-auto py-27.5 bg-linear-to-br from-[#EFF6FF] to-[#F9FAFB] block">
      <div className="container">
        <div className="w-full h-auto flex flex-wrap">
          {data?.contact?.map((item) => (
            <div key={item?.id} className="w-1/2 h-auto block">
              <div className="w-full h-full p-[60px_50px_50px_40px] bg-white border border-black/10 block">
                <div className="[--icon-size:60px] w-full h-auto mb-7.5 flex items-center">
                  <div className="w-(--icon-size) h-auto aspect-square overflow-hidden flex items-center justify-center">
                    <Image
                      src={item?.icon?.url}
                      alt={item?.icon?.alternativeTxt || "Icon"}
                      width={60}
                      height={60}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-[calc(100%-var(--icon-size))] pl-6.25">
                    <div className="text-[40px] leading-[1.1] font-bold text-(--text-color)">
                      {item?.title}
                    </div>
                  </div>
                </div>
                <div className="text-[32px] leading-[1.1] font-semibold text-(--text-color) mb-5">
                  {item?.subtitle}
                </div>
                <div className="text-lg leading-[1.1] font-normal text-[#4A5565] mb-5">
                  {item?.address}
                </div>
                <Link
                  href={item?.directionLink}
                  aria-label="Get Directions"
                  className="w-full h-auto flex items-center"
                >
                  <div className="w-8.75 h-auto aspect-35/25 overflow-hidden flex items-center justify-center">
                    <Image
                      src={"/images/direction-icon.svg"}
                      alt="Directions"
                      width={35}
                      height={25}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-xl leading-[1.1] font-semibold bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit pl-2.5 flex-1">
                    Get Directions
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
