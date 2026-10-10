import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import Image from "next/image";
import Link from "next/link";

const local_data = {
  label: "Awards & Achievements",
  title: "Recognising Excellence",
  description:
    "Celebrate student achievements across academic excellence, innovation, competitions, research, leadership and other areas of accomplishment.",
  cards: [
    {
      id: 1,
      title: "Warriors Boxing Tournament - Silver",
      recipient: "Asif Saleem, BCA",
      image: "/images/gallery-1.png",
      alt: "Students celebrating an achievement on campus",
      href: "/placement/student-success",
    },
    {
      id: 2,
      title: "Republic Debate Competition - Runners",
      recipient: "Team from School of Engineering",
      image: "/images/news-event-6.jpg",
      alt: "A team gathered at a university event",
      href: "/placement/student-success",
    },
    {
      id: 3,
      title: "Women's Table Tennis - 1st Prize",
      recipient: "Upasana M S, MBA",
      image: "/images/gallery-4.png",
      alt: "Women's sports team representing Karnataka",
      href: "/placement/student-success",
    },
    {
      id: 4,
      title: "National Volleyball Championship - 1st Place",
      recipient: "Nupur, BBA LLB",
      image: "/images/gallery-8.png",
      alt: "A university team celebrating with trophies",
      href: "/placement/student-success",
    },
    {
      id: 5,
      title: "Winners - Smart India Hackathon 2024",
      recipient: "Team from School of Engineering",
      image: "/images/gallery-5.png",
      alt: "Students and faculty at a university event",
      href: "/placement/student-success",
    },
    {
      id: 6,
      title: "Solo Dance - 1st Prize",
      recipient: "Sneha Pathra, CSE (AI & ML)",
      image: "/images/gallery-6.png",
      alt: "Students at a university celebration",
      href: "/placement/student-success",
    },
    {
      id: 7,
      title: "RAP Competition, 2nd Prize",
      recipient: "Tej Sundara, BCA",
      image: "/images/gallery-2.png",
      alt: "Students participating in a university activity",
      href: "/placement/student-success",
    },
  ],
};

export default function PlacementExcellence({ data = local_data }) {
  return (
    <section className="block w-full bg-white py-12 sm:py-16 xl:py-[70px] 2xl:py-[80px]">
      <div className="container">
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr_1fr] xl:grid-rows-[repeat(3,minmax(168px,1fr))] xl:gap-[18px]">
          <div className="mb-2.5 lg:mb-3.75 2xl:mb-5 3xl:mb-6.25">
            <div className="[--before-size:20px] 2xl:[--before-size:25px] text-sm 2xl:text-base 3xl:text-xl leading-[1.1] font-normal bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit h-auto pl-[calc(var(--before-size)+5px)] 2xl:pl-[calc(var(--before-size)+10px)] mb-2.5 relative z-0 before:content-[''] before:w-(--before-size) before:h-0.5 2xl:before:h-0.75 before:my-auto before:bg-linear-to-r before:from-(--basecolor) before:to-(--basecolor2) before:absolute before:z-1 before:inset-[0_auto_0_0]">
              {data?.label}
            </div>
            <Heading className="mb-2.5 lg:mb-3.75 2xl:mb-5 3xl:mb-6.25">
              {data?.title}
            </Heading>
            <Text>{data?.description}</Text>
          </div>
          {data?.cards?.map((item, index) => {
            return (
              <Link
                key={item?.id ?? index}
                href={item?.href || "/placement/student-success"}
                className={`group relative block min-h-[190px] overflow-hidden rounded-[7px] bg-[#212121] sm:min-h-[210px] xl:min-h-0 ${
                  [
                    "xl:col-start-2 xl:row-start-1",
                    "xl:col-start-3 xl:row-start-1",
                    "xl:col-start-4 xl:row-start-1",
                    "xl:col-start-1 xl:row-start-2 xl:row-span-2",
                    "xl:col-start-2 xl:col-span-2 xl:row-start-2 xl:row-span-2",
                    "xl:col-start-4 xl:row-start-2",
                    "xl:col-start-4 xl:row-start-3",
                  ][index] ?? ""
                }`}
              >
                {item?.image && (
                  <Image
                    src={item.image}
                    alt={item?.alt || item?.title || "Student achievement"}
                    width={760}
                    height={460}
                    sizes="(min-width: 1169px) 30vw, (min-width: 640px) 50vw, 100vw"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-4 xl:p-[12px] 2xl:p-[16px]">
                  {item?.title && (
                    <h3 className="text-[13px] leading-[1.35] font-medium sm:text-[14px] xl:text-[13px] 2xl:text-[14px]">
                      {item.title}
                    </h3>
                  )}
                  {item?.recipient && (
                    <p className="mt-1 text-[12px] leading-[1.35] sm:text-[13px] xl:text-[12px] 2xl:text-[13px]">
                      {item.recipient}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
