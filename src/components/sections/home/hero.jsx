"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

export default function Hero({ data }) {
  const [emblaRef] = useEmblaCarousel();
  return (
    <section className="w-full block">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom">
          <div className="flex-[0_0_100%] min-w-0">
            <Image
              src={data.attributes.image.url}
              alt={data.attributes.image.alternativeText}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <button className="embla__prev">Scroll to prev</button>
        <button className="embla__next">Scroll to next</button>
      </div>
    </section>
  );
}
