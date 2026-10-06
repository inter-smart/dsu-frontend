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
    poPsoData: {
        po: {
            heading: "Program Outcomes(POs)",
            subtitle: "A student upon successful completion of Bachelor's degree in nursing should be able to",
            items: [
                {
                    title: "PO-1",
                    description: "Assume responsibilities as professional, competent nurses and midwives in providing promotive, preventive, curative, and rehabilitative services"
                },
                {
                    title: "PO-2",
                    description: "Make independent decisions in nursing situations, protect the rights and facilitate individuals and groups in pursuit of health, function in the hospital, community nursing services, and conduct research studies in the areas of nursing practice. They are also expected to assume the role of teacher, supervisor and manager in a clinical / public health setting"
                }
            ],
            button: {
                label: "PROGRAMME OUTCOMES (POs)",
                href: "#"
            }
        },
        pso: {
            heading: "Program Specific Outcomes(PSOs)",
            subtitle: "A student upon successful completion of Bachelor's degree in nursing should be able to",
            items: [
                {
                    title: "PSO - 1",
                    description: "Apply knowledge from physical, biological and behavioral sciences, medicine, including alternative systems and nursing in providing nursing care to individuals, families and communities."
                },
                {
                    title: "PSO - 2",
                    description: "Demonstrate understanding of life style and other factors, which affect health of individuals and groups"
                },
                {
                    title: "PSO - 3",
                    description: "Provide nursing care based on steps of nursing process in collaboration with the individuals and groups."
                },
                {
                    title: "PSO - 4",
                    description: "Demonstrate critical thinking skill in making decisions in all situations in order to provide quality care."
                },
                {
                    title: "PSO - 5",
                    description: "Utilise the latest trends and technology in providing health care."
                },
                {
                    title: "PSO - 6",
                    description: "Provide promotive, preventive and restorative health services in line with the national health policies and programs."
                },
                {
                    title: "PSO - 7",
                    description: "Practice within the framework of code of ethics and professional conduct and acceptable standards of practice within the legal boundaries."
                },
                {
                    title: "PSO - 8",
                    description: "Communicate effectively with individuals and groups and members of the health team in order to promote effective interpersonal relationships and teamwork."
                },
                {
                    title: "PSO - 9",
                    description: "Demonstrate skills in teaching to individuals and groups in clinical/ community health settings."
                },
                {
                    title: "PSO - 10",
                    description: "Participate effectively as members of the health team in health care delivery system."
                },
                {
                    title: "PSO - 11",
                    description: "Demonstrate leadership and managerial skills in clinical / community health settings."
                },
                {
                    title: "PSO - 12",
                    description: "Demonstrate leadership and managerial skills in clinical / community health settings."
                },
                {
                    title: "PSO - 13",
                    description: "Demonstrate awareness, interest and contribute towards advancement of self and of the profession."
                }
            ],
            button: {
                label: "Program Specific Outcomes(PSOs)",
                href: "#"
            }
        }
    }
}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AiBSCMenubar className="lg:!hidden block" />
            <PoPsoSection data={local_data.poPsoData} />
        </>
    )
}
