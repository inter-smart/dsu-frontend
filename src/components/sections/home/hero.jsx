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
            <div className="w-full h-[768px] lg:h-screen relative z-0">
              <Image
                src={"/images/home-hero-1.jpg"}
                alt="home-hero-1"
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        <button className="embla__prev">Scroll to prev</button>
        <button className="embla__next">Scroll to next</button>
      </div>
    </section>
  );
}
