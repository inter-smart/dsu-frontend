import InnerHero from "@/components/layout/common/InnerHero";
import AiBSCMenubar from "@/components/sections/ai-enabled/BSC-nursing/bsc-Menubar";
import PoPsoSection from "@/components/sections/ai-enabled/BSC-nursing/po-pso";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "PO-PSO page title",
        metaDescription: "PO-PSO page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "PO-PSO page title",
            mime: "image/jpg",
            url: "/images/academic-banner.jpg",
        },
        title: "Basic B. Sc Nursing",
        breadcrumb: [
            { label: "Home", href: "/" },
            { label: "AI Enabled Academics", href: "/" },
            { label: "School of Health Sciences", href: "/" },
            { label: "College of Nursing Sciences", href: "/" },
            { label: "Basic B. Sc Nursing", href: "/" },
            { label: "PO-PSO", href: "/" },
        ],
        AiBscmenuBar: true
    },
    peoData: {
        peo: {
            heading: "Program  Educational Objectives (PEOs)",
            subtitle: "Our nursing programmes are designed to develop competent, compassionate and skilled professionals who can deliver safe, ethical and evidence-based care across diverse healthcare settings.",
            items: [
                {
                    title: "PEO-1",
                    description: "Produce knowledgeable competent nurses and midwives with clear critical thinking Skills who are caring, motivated, assertive and well-disciplined responding to the Changing needs of profession, healthcare delivery system and society."
                },
                {
                    title: "PEO-2",
                    description: "Prepare them to assume responsibilities as professional, competent nurses and Midwives in providing promotive, preventive, curative and rehabilitative healthcare Services in any healthcare setting."
                },
                {
                    title: "PEO-3",
                    description: "Prepare nurses and midwives who can make independent decisions in nursing Situations within the scope of practice, protect the rights of individuals and groups and Conduct research in the areas of nursing practice and apply evidence based practice."
                },
                {
                    title: "PEO-4",
                    description: "Prepare them to assume role of practitioner, teacher, supervisor and manager in all Healthcare settings."
                },
            ],
            button: {
                label: "Programme Educational Objectives (PEO'S))",
                href: "#"
            }
        }, 
    }
}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AiBSCMenubar className="lg:!hidden block" />
           <PoPsoSection data={local_data.peoData} />
        </>
    )
}
