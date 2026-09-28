import InnerHero from "@/components/layout/common/InnerHero";
import CommunityActivities from "@/components/sections/community-activities/community-activities";
import GetInvolved from "@/components/sections/community-activities/get-involved";
import FloatingContactRail from "@/components/layout/common/floating-contact-rail";

const local_data = {
  hero: {
    id: 1,
    heroMedia: {
      url: "/images/media-coverage-hero-644103.png",
      alternativeText: "Community Activities",
      mime: "image/png",
    },
    title: "Community Activities",
    breadcrumb: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Community Activities",
      },
    ],
  },
  activities: {
    title: "Recent & Ongoing Activities",
    description:
      "Community outreach, campus visuals, and press coverage for Dayananda Sagar University — all in one place.",
    items: [
      {
        id: 1,
        date: "29th Jun 26",
        title: "Blood Donation Camp with Indian Red Cross Society",
        description:
          "A campus-wide voluntary blood donation drive organised with NSS volunteers, in partnership with the Red Cross.",
        link: "#!",
        defaultOpen: true,
      },
      {
        id: 2,
        date: "29th Jun 26",
        title: "Village Adoption & Rural Outreach Programme",
        description:
          "Students visited an adopted village near the main campus for health-awareness sessions and basic infrastructure support.",
        link: "#!",
        image: "/images/community-village-outreach.png",
        defaultOpen: true,
      },
      {
        id: 3,
        date: "29th Jun 26",
        title: "Blood Donation Camp with Indian Red Cross Society",
        description:
          "A campus-wide voluntary blood donation drive organised with NSS volunteers, in partnership with the Red Cross.",
        link: "#!",
      },
      {
        id: 4,
        date: "05 Jun 2025",
        title: "World Environment Day: Tree Plantation Drive",
        description:
          "Faculty and students came together to plant saplings across the campus and adopted village as part of the environment day observance.",
        link: "#!",
      },
      {
        id: 5,
        date: "Ongoing",
        title: "Old-Age Home & Orphanage Visits",
        description:
          "Regular visits by student volunteers to nearby old-age homes and orphanages with essentials, activities and companionship.",
        link: "#!",
      },
      {
        id: 6,
        date: "15 Aug 2025",
        title: "Independence Day Community Programme",
        description:
          "A community celebration held with local schools and residents to mark Independence Day with cultural and awareness activities.",
        link: "#!",
      },
    ],
  },
  getInvolved: {
    title: "Get Involved",
    description: "Students interested in volunteering can reach out through the NSS & Red Cross cell.",
    backgroundImage: "/images/community-contact-card-bg.png",
    contacts: [
      {
        icon: "/images/icon-community-person.svg",
        label: "Dr. Punith Cariappa, Coordinator",
      },
      {
        icon: "/images/icon-community-phone.svg",
        label: "+91 94484 92983",
      },
      {
        icon: "/images/icon-community-email.svg",
        label: "nss@dsu.edu.in",
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <InnerHero data={local_data?.hero} />
      <CommunityActivities data={local_data?.activities} />
      <GetInvolved data={local_data?.getInvolved} />
      <FloatingContactRail />
    </>
  );
}
