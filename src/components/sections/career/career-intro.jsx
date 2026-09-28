import Image from "next/image";
import Link from "next/link";

export default function CareerIntro({ data }) {
  return (
    <section className="w-full h-auto py-10 sm:py-15 lg:py-20 2xl:py-25 3xl:py-30 block">
      <div className="container">
        <div className="w-full h-auto grid lg:grid-cols-2 gap-7.5 lg:gap-10 2xl:gap-12.5 items-center">
          <div>
            <h2 className="title_1 mb-3.75 xl:mb-5">{data?.title}</h2>
            <p className="text_1 mb-3.75 xl:mb-5">{data?.description}</p>
            {data?.email && (
              <Link
                href={`mailto:${data.email}`}
                className="text-sm xl:text-base font-bold text-[#F97316] transition-opacity duration-300 hover:opacity-70"
              >
                Write to us at {data.email}
              </Link>
            )}
          </div>
          {data?.image && (
            <div className="w-full h-auto aspect-856/363 rounded-md 2xl:rounded-[10px] overflow-hidden">
              <Image
                src={data.image}
                width={856}
                height={363}
                alt="Career at DSU"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
