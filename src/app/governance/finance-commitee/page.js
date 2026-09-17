
import InnerHero from '@/components/layout/common/InnerHero';
import GovernanceFinancecommittte from '@/components/sections/governance/governance-financecommittte';
import { getCommittees } from '@/lib/api/index';

export const revalidate = 60;


const local_data = {
  id: 24,
  documentId: "a67zp5r21a35cb8qlzrjp54s",
  createdAt: "2026-06-05T05:56:45.609Z",
  updatedAt: "2026-06-11T06:26:08.249Z",
  publishedAt: "2026-06-11T06:26:08.337Z",
  seo: {
    id: 21,
    metaTitle: "about page title",
    metaDescription: "about page description ",
    canonicalUrl: null,
  },
  hero: {
    id: 25,
    heroMedia: {
      alternativeText: "goverenance page title",
      mime: "image/jpg",
      // if video - mime: "video/mp4",
      url: "/images/goverenance.jpg",
    },
    title: "Governance",
    breadcrumb: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Why DSU",
        href: "/why-dsu",
      },
      {
        label: "Governance",
        href: "/why-dsu/Governance",
      },
    ],
  },

  financeCommitteeData : {
    title: "Finance Committee",
    subtitle: "Details of the members of the Finance Committee.",
    tableHeaders: [
      "Name",
      "Address/Designation",
      "Status in the Authority"
    ],
    financeCommittee: [
      {
        id: 1,
        name: "Dr. D Hemachandra Sagar",
        note: "(or his nominee)",
        designation: "Chancellor, DSU",
        status: "Chairperson",
        image: "/images/governance/leader-1.jpg"
      },
      {
        id: 2,
        name: "Dr. D Premachandra Sagar",
        note: "",
        designation: "Pro Chancellor,\n DSU Nominee of Sponsoring Body",
        status: "Member",
        image: "/images/governance/leader-2.jpg"
      },
      {
        id: 3,
        name: "Dr. B S Satyanarayana",
        note: "",
        designation: "Vice Chancellor,\nDSU",
        status: "Member",
       image: "/images/governance/leader-3.jpg"
      },
      {
        id: 4,
        name: "Dr. Puttamadappa C",
        note: "",
        designation: "Registrar, DSU",
        status: "Member",
        image: "/images/governance/leader-4.jpg"
      },
      {
        id: 5,
        name: "Mr. D. Ramanathan",
        note: "",
        designation: "Chief Finance\nOfficer, DSU",
        status: "Member",
        image: "/images/governance/leader-5.jpg"
      }
    ]
  }

}
export default async function Page() {
  const committees = await getCommittees('finance');
  const hero = local_data.hero;

  // Use Strapi committee data if available, otherwise fall back to local_data
  const financeData = committees && committees.length > 0
    ? {
        title: committees[0].name || 'Finance Committee',
        subtitle: committees[0].description || local_data.financeCommitteeData.subtitle,
        tableHeaders: local_data.financeCommitteeData.tableHeaders,
        financeCommittee: committees[0].members || local_data.financeCommitteeData.financeCommittee,
      }
    : local_data.financeCommitteeData;

  return (
    <>
      <InnerHero data={hero} />
      {financeData && <GovernanceFinancecommittte data={financeData} />}
    </>
  );
}
