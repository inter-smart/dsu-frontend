
import InnerHero from '@/components/layout/common/InnerHero'
import GovernanceFinancecommittte from '@/components/sections/governance/governance-financecommittte'


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
      url: "/images/ugc/ugc-banner.jpg",
    },
    title: "Regulatory Approvals",
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
        label: "Recognition, Accreditation & Rankings",
        href: "/",
      },
      {
        label: "Regulatory Approvals",
        href: "/regulatory-approval",
      },
    ],
  },
 

}
export default function page() {
  return (
    <>
      <InnerHero data={local_data.hero} /> 
    </>
  )
}
