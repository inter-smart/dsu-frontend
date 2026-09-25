import InnerHero from "@/components/layout/common/InnerHero";
import AcademicContact from "@/components/sections/academics/academic-contact";
import AiBSCMenubar from "@/components/sections/ai-enabled/BSC-nursing/bsc-Menubar";
import BscCurriculum from "@/components/sections/ai-enabled/BSC-nursing/curriculum";

const local_data = {
    hero: {
        heroMedia: {
            alternativeText: "Curriculum page title",
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
            { label: "Curriculum", href: "/" },
        ],
        AiBscmenuBar: true
    },
    curriculumData: {
        heading: "Curriculum",
        description: "The B.Sc. Nursing curriculum combines foundational sciences, nursing theory, clinical practice, and community-based learning to develop competent and compassionate healthcare professionals. Students gain progressive knowledge and hands-on experience across key nursing specialisations, preparing them for diverse clinical and professional roles.",
        semesters: [
            {
                id: 1,
                slug: "sem-1",
                label: "Sem - 1",
                subjects: [
                    "Communicative English",
                    "Applied Anatomy",
                    "Applied Physiology",
                    "Applied Sociology",
                    "Applied Psychology",
                    "Nursing Foundations I",
                    "First Aid Module"
                ],
                documentLink: {
                    label: "Sem - 1 Curriculam",
                    url: "#"
                }
            },
            {
                id: 2,
                slug: "sem-2",
                label: "Sem - 2",
                subjects: [
                    "Nursing Foundations II",
                    "Health/Nursing Informatics And Technology",
                    "Applied Biochemistry",
                    "Applied Nutrition And Dietetics"
                ],
                documentLink: {
                    label: "Sem - 2 Curriculam",
                    url: "#"
                }
            },
            { id: 3, slug: "sem-3", label: "Sem - 3", subjects: ["Subject 1", "Subject 2"], documentLink: { label: "Sem - 3 Curriculam", url: "#" } },
            { id: 4, slug: "sem-4", label: "Sem - 4", subjects: ["Subject 1", "Subject 2"], documentLink: { label: "Sem - 4 Curriculam", url: "#" } },
            { id: 5, slug: "sem-5", label: "Sem - 5", subjects: ["Subject 1", "Subject 2"], documentLink: { label: "Sem - 5 Curriculam", url: "#" } },
            { id: 6, slug: "sem-6", label: "Sem - 6", subjects: ["Subject 1", "Subject 2"], documentLink: { label: "Sem - 6 Curriculam", url: "#" } },
            { id: 7, slug: "sem-7", label: "Sem - 7", subjects: ["Subject 1", "Subject 2"], documentLink: { label: "Sem - 7 Curriculam", url: "#" } },
            { id: 8, slug: "sem-8", label: "Sem - 8", subjects: ["Subject 1", "Subject 2"], documentLink: { label: "Sem - 8 Curriculam", url: "#" } },
        ]
    },
   
}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AiBSCMenubar className="lg:!hidden block" />
            <BscCurriculum data={local_data.curriculumData} /> 
        </>
    )
}
