import Image from "next/image";

export default function NewsEventsDetail({ data }) {
  return (
    <section className="w-full h-auto py-[130px_160px] block">
      <div className="container">
        <div className="[--width:500px] w-full h-auto block">
          <div className="w-(--width) h-auto">
            <div className="w-full h-auto aspect-1210/665 rounded-[10px] overflow-hidden block">
              <Image
                src={data?.newsEventsDetail?.newsEventsDetailImage?.url}
                alt={
                  data?.newsEventsDetail?.newsEventsDetailImage
                    ?.alternativeText || "News & Events"
                }
                width={1210}
                height={665}
                className="w-full h-full object-cover"
              />
              <div className="w-fit h-auto aspect-square p-[20px_15px] m-[30px_15px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) rounded-[10px] overflow-hidden block absolute z-1 inset-[auto_auto_0_0]">
                <div className="text-base leading-[1.1] font-semibold text-white">
                  <span className="">{data?.newsEventsDetail?.newsEventsDetailMonth}</span>
                  {data?.newsEventsDetail?.newsEventsDetailDate}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[calc(100%-var(--width))] pl-7.5"></div>
        </div>
      </div>
    </section>
  );
}
