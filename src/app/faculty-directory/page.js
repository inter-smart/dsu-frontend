import InnerHero from "@/components/layout/common/InnerHero";
import { getFacultyList } from "@/lib/api/index";

export const revalidate = 60;

const local_data = {
  hero: {
    id: 25,
    heroMedia: {
      url: "/images/faculty-banner.jpg",
      alternativeText: "Faculty Directory",
      mime: "image/jpg",
    },
    title: "Faculty Directory",
    breadcrumb: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "AI Enabled Academics",
        href: "/",
      },
      {
        label: "AI Enabled Academics",
      },
    ],
  },
};

export default async function Page() {
  const faculty = await getFacultyList();
  const hero = local_data.hero;

  return (
    <>
      <InnerHero data={hero} />
      {/* Faculty list section — wire a FacultyList component here when ready */}
    </>
  );
}
