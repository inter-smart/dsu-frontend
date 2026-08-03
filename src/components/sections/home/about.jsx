import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function About({ data }) {
  return (
    <section className="w-full pt-[40px] xl:pt-[66px] 2xl:pt-[80px] 3xl:pt-[100px] pb-[60px] xl:pb-[90px] 2xl:pb-[110px] 3xl:pb-[135px]">
      <div className="container">
        <div className="title_1 text-center mb-1 xl:mb-2">
          Centres of Excellence{" "}
        </div>
        <div className="text_1 text-center mb-5 xl:mb-[25px] 2xl:mb-[31px] 3xl:mb-10">
          Our Centers of Excellence bring together advanced infrastructure,
          expert faculty, and industry collaboration to solve real-world
          challenges.
        </div>
        <div className="flex flex-wrap gap-[26px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[35px]">
          <div className="flex-1">
            <div className="w-full rounded-[7px] bg-[#d9d9d9]/10 border border-black/10 p-[12px] xl:p-[16px] 2xl:p-[20px] 3xl:p-[25px]">
              <div className="text-[10.6px] 2xl:text-[12.8px] 3xl:text-[16px] leading-none font-bold tracking-tight text-end text-black mb-1 xl:mb-2">
                DGX B200
              </div>
              <div className="text-[12px] 2xl:text-[14.4px] 3xl:text-[18px] leading-none font-normal tracking-tight text-end text-[#4A5565]">
                Supercomputers with a combined 160 GPUs
              </div>
            </div>
          </div>
          <div className="w-[468px] xl:w-[584px] 2xl:w-[700px] 3xl:w-[876px]">
            <div className="w-full aspect-[876/446] rounded-[6px] overflow-hidden relative z-0">
              <Image
                src={"/images/home-hero-1.jpg"}
                alt="home-hero-1"
                fill
                sizes="876px"
                className="object-cover -z-1 hover:scale-105 transition-transform"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full rounded-[7px] bg-[#d9d9d9]">
              <div className="text-[16px] xl:text-[20px] 2xl:text-[25px] 3xl:text-[31px] leading-tight font-normal tracking-tight text-black mb-2.5 xl:mb-[15px]">
                DSU Centre for
                <span className="text-[20px] text-[27px] 2xl:text-[33px] 3xl:text-[41px] font-bold text-black inline-block">
                  NVIDIA AI Factory & Generative AI
                </span>
              </div>
              <Image
                src="/images/home-about-nvidea-1.png"
                alt="home-about-nvidea-1"
                width={255}
                height={30}
                className="w-[100px] 2xl:w-[120px] 3xl:w-[150px] object-contain mb-4 xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px]"
              />
              <div className="typography text-white mb-5 xl:mb-[25px] 2xl:mb-[31px] 3xl:mb-10">
                <p>
                  Our Centers of Excellence bring together advanced
                  infrastructure, expert faculty, and industry collaboration to
                  solve real-world challenges.
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/centres-of-excellence">
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
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
