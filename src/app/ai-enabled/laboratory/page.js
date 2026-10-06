import InnerHero from "@/components/layout/common/InnerHero";
import AiAcademicMenubar from "@/components/sections/ai-enabled/Ai-academicMenubar";
import DeanMessage from "@/components/sections/academics/dean-message";
import AiLaboratory from "@/components/sections/ai-enabled/Ai-laboratory";
import AiFacility from "@/components/sections/ai-enabled/Ai-facility";
import AiClinicalFacility from "@/components/sections/ai-enabled/Ai-clinical-facility";


const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "College of Nursing Sciences page title",
        metaDescription: "College of Nursing Sciences ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Academic page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/academic-banner.jpg",
        },
        title: "Laboratories",
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
                label: "School of Health Sciences",
                href: "/",
            },
            {
                label: "College of Nursing Sciences",
                href: "/",
            },
            {
                label: "Laboratories",
                href: "/",
            },
        ],
        AimenuBar: true
    },

    nursingSkillsSection: {
        heading: "Where Nursing Skills Come to Life",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The College of Nursing Sciences provides well-equipped, spacious and clean laboratory environments where students can apply their theoretical knowledge and develop essential nursing skills.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "With dedicated facilities covering foundational nursing, community health, child health, obstetric and gynaecological nursing, simulation, nutrition and computer-based learning, students receive comprehensive practical exposure in a safe and structured environment.",
                    },
                ],
            },
        ],
        highlightCard: {
            number: "07",
            title: "Specialized Laboratories",
            description: "Purpose-built learning spaces supporting practical nursing education and skill development.",
        },
    },

    specializedLabsSection: {
        eyebrow: "OUR FACILITIES",
        heading: "Specialized Nursing Laboratories",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "  College of Nursing Sciences provides well-equipped labs for students to apply their knowledge and skills. The lab environments are spacious, clean, and stocked with all necessary equipment and accessories to enhance student productivity. With a total of 7 labs, the college offers a range of facilities that significantly contribute to a systematic and effective learning process.",
                    },
                ],
            },
        ],
        labs: [
            {
                id: 1,
                title: "Nursing Foundation Lab",
                image: {
                    alternativeText: "Nursing Foundation Lab",
                    mime: "image/jpeg",
                    url: "/images/ai-facility-1.jpg"
                },
                description: "Foundations of nursing lab facilities are designed to provide students with a hands-on learning environment to practice essential nursing skills. The lab is equipped with modern equipments and facilities which include CPR training mannequin, ET tube intubation mannequins, tracheostomy care mannequin, syringe pump, veni-puncture mannequins, various injection mannequins, urinary catheterization mannequins, Nasogastric and gastrostomy insertion and feeding mannequins and mannequins for doing basic nursing procedures. They allow students to develop competencies in areas such as patient care, medication administration, and communication in a controlled and safe environment.",
            },
            {
                id: 2,
                title: "Community Health Nursing Lab",
                image: {
                    alternativeText: "Community Health Nursing Lab",
                    mime: "image/jpeg",
                    url: "/images/ai-facility-2.jpg"
                },
                description: "The Community Health Nursing Lab at College of Nursing Sciences is well-equipped and accessible to all students and faculty. The lab offers all essential articles and equipment required for the training of 5th semester, 6thsemester and 4th-year B.Sc. Nursing students, as well as M.Sc. Nursing students. It features a diverse range of audiovisual aids with all innovative and qualitative materials, models’ charts, flash cards which are required for field work. Additionally, various equipments like hemoglobinometer, glucometer, maternity kits, first aid kits, community bags are also available.",
            },
            {
                id: 3,
                title: "Child Health Nursing Lab",
                image: {
                    alternativeText: "Child Health Nursing Lab",
                    mime: "image/jpeg",
                    url: "/images/ai-facility-3.jpg"
                },
                description: "The Child Health Nursing Laboratory is designed to help nursing students gain expertise in modern childcare practices. It is equipped with newborn and child mannequins, enabling students to learn proper handling and care techniques for pediatric patients. The lab also features medical equipment such as stethoscopes, blood pressure cuffs, infant scales, warmer and phototherapy machines providing opportunities to practice pediatric procedures and enhance skills for both clinical and community settings. Lab is also equipped with a play area for children.",
            },
            {
                id: 4,
                title: "Obstetric and Gynecological Nursing Lab",
                image: {
                    alternativeText: "Obstetric and Gynecological Nursing Lab",
                    mime: "image/jpeg",
                    url: "/images/ai-facility-4.jpg"
                },
                description: "This Lab is equipped with all the essential articles required for the care of antenatal, postnatal, and gynecological clients during both illness and wellness. It includes advanced audiovisual aids such as charts and models, instruments used for OBG procedures ,mannequins to learn mechanism of labour, mannequins to perform antenatal and post natal assessment which can be utilized during patient care and education. The lab is furnished with detailed models of the female reproductive system and newborns, offering students a comprehensive understanding of maternal and neonatal health. This state-of-the-art facility enables students to practice and demonstrate skills such as antenatal care, delivery procedures, and episiotomy suturing in a realistic environment.",
            },
            {
                id: 5,
                title: "Simulation lab",
                image: {
                    alternativeText: "Simulation Lab",
                    mime: "image/jpeg",
                    url: "/images/ai-facility-5.jpg"
                },
                description: "The Simulation Lab is a state-of-the-art facility designed to provide students with hands-on, immersive learning experiences in a controlled and safe environment. It is equipped with high-fidelity mannequins, including full-body mannequins and CPR mannequins, to simulate real-life medical scenarios.Students can practice with essential tools like laparotomy sets, tracheostomy sets, laryngoscopes, Ambu bags, and endotracheal (ET) tubes of different sizes. Additionally, the lab features models for specific skills, such as breast examination models, enabling students to refine their technical and decision-making abilities. Additionally, a dedicated patient unit is available to further enhance their learning experience. This comprehensive setup helps students build confidence and competence in managing emergencies, performing procedures, and delivering patient care effectively before transitioning to real-world clinical environments.",
            },
            {
                id: 6,
                title: "Nutrition Lab",
                image: {
                    alternativeText: "Nutrition Lab",
                    mime: "image/jpeg",
                    url: "/images/ai-facility-6.jpg"
                },
                description: "The Nutrition Lab is designed to help students gain knowledge about nutrition for maintaining optimal health at various stages of life and applying this knowledge in practice. It is a fully equipped and furnished kitchen with modern crockery and appliances, providing all the necessary utensils for cooking and serving dishes. The lab also includes audiovisual aids, such as charts and models, to enhance learning. Under the guidance of qualified instructors, students are trained to prepare therapeutic diets, ensuring they develop practical skills for nutritional care.",
            },
            {
                id: 7,
                title: "Computer Lab",
                image: {
                    alternativeText: "Computer Lab",
                    mime: "image/jpeg",
                    url: "/images/ai-facility-7.jpg"
                },
                description: "The computer lab is equipped with advanced computers, the latest software, and round-the-clock internet access for educational purposes. These facilities support students in their educational purposes. The lab has sufficient computers with high-end configurations, and an experienced faculty is available to assist students.",
            },
            {
                id: 8,
                title: "Multipurpose Hall",
                image: {
                    alternativeText: "Multipurpose Hall",
                    mime: "image/jpeg",
                    url: "/images/ai-facility-8.jpg"
                },
                description: "A large, well-ventilated, multipurpose hall is available with good lighting and facilities for A V Aids. It also has a stage and green room facility for hosting various programs and functions of the college, educational conferences/workshops, Continuing Nursing Education (CNEs), and examinations.",
            },
            {
                id: 9,
                title: "Audio-Visual Facilities",
                image: {
                    alternativeText: "Audio-Visual Facilities",
                    mime: "image/jpeg",
                    url: "/images/ai-facility-9.jpg"
                },
                description: "Adequate A V aids are available for use in classrooms and laboratories as required. A separate A V room is available for special events with an attached room for proper storage of the A V equipment.",
            },
        ],
    },
    clinicalFacilitiesSection: {
        heading: "Clinical Facilities:",
        image: {
            alternativeText: "Reception area at Dr. Chandramma Dayananda Sagar Institute of Medical Education and Research (CDSIMER)",
            mime: "image/jpeg",
            url: "/images/clinic-1.jpg",
        },
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The clinical facilities available for the College of Nursing are integral to the practical education and training of nursing students. This report evaluates the current facilities, their adequacy, and areas that require improvement to meet the standards of contemporary nursing education.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "We have our own parent hospital Dr. Chandramma Dayananda Sagar Institute of Medical Education and Research with 605 bed strength. It is just 100mts of distance from College of Nursing to the clinical area. We offer the students state of the art facilities for hands on training in real life setting.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The Sagar Group's journey in healthcare began in the 1960s under the visionary leadership of Dr. Chandramma D. Sagar, with the establishment of Chandra Nursing Home. Her mission to provide quality and affordable healthcare was advanced by her sons, Dr. D. Hemachandra Sagar and Dr. D. Premachandra Sagar, who established Sagar Hospitals—Bengaluru's first corporate, multi-tertiary care hospital with 250 beds in 2002, followed by a state-of-the-art 415-bed hospital in 2009. Renowned for excellence and compassion, Sagar Hospitals stands as a benchmark in healthcare delivery in Karnataka.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "As a pioneer in both healthcare and education since the 1960s, the Sagar Group envisioned the integration of high-quality medical education with its healthcare expertise. The establishment of Dr. Chandramma Dayananda Sagar Institute of Medical Education and Research (CDSIMER) exemplifies this vision. Located on a sprawling 140-acre campus under Dayananda Sagar University (DSU), at Dr. Chandramma Dayananda Sagar Institute of Medical Education and Research (CDSIMER), the 605-bed tertiary care hospital provides comprehensive care under one roof, addressing the healthcare needs of over 200 surrounding villages.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Through a rigorous curriculum and emphasis on clinical exposure, students seamlessly translate classroom knowledge into real-world patient care. The hospital, a center of clinical excellence with state-of-the-art facilities, offers unparalleled hands-on training, bridging theory and practice. This unique environment equips future professionals to holistically serve humanity, contributing meaningfully to global healthcare while addressing the specific needs of their communities.",
                    },
                ],
            },
        ],
        specializedAreas: {
            heading: "Specialized Areas:",
            subheading: "The clinical areas are",
            columns: [
                { label: "Medical, Surgical" },
                { label: "Paediatrics" },
                { label: "Gynae and Obstetrics" },
                { label: "Orthopaedics" },
                { label: "Psychiatry" },
                { label: "Eye, ENT" },
                { label: "Coronary/ICCU/ICU" },
                { label: "Neurology, Emergency" },
                { label: "ICU Oncology" },
                { label: "Paediatric and Neonatal Care Unit." },

            ],
            note: "Equipped with state-of-the-art technology, this unit allows students to gain specialized in all areas.",
        },
        simulationLabs: {
            heading: "Simulation Labs:",
            items: [
                { label: "High-fidelity simulation labs provide a safe environment for students to practice clinical procedures and decision-making." },
                { label: "Labs are equipped with mannequins that simulate real-life medical conditions and emergencies." },
                { label: "These labs allow students to apply theoretical knowledge to practical scenarios, bridging the gap between classroom learning and real-world clinical practice." },
                { label: "Simulations can be customized to replicate specific medical scenarios, such as cardiac arrest, labor and delivery, or trauma, providing targeted training." },
                { label: "By building confidence in a no-risk environment, these labs prepare students to handle real-life clinical situations more effectively and safely." },
            ],
        },
        communityFacilities: {
            heading: "Community Facilities:",
            description: [
                {
                    type: "paragraph",
                    children: [
                        {
                            type: "text",
                            text: "Community health nursing plays a vital role in enhancing public health and well-being, focusing on urban and rural populations with distinct healthcare needs. At the College of Nursing Sciences, DSU community health initiatives are undertaken in adopted villages like Kirangere, T. Hosahalli, Balachennavalese, Jakkasandra, and Tamasandra. In urban areas, nurses prioritize health promotion, education, and disease prevention through workshops, screenings for chronic illnesses, and immunization drives. Maternal and child health services, including prenatal and postnatal care, child development monitoring, and family planning, remain central to their efforts. They also address environmental health challenges such as waste management and sanitation while promoting mental health awareness through counseling and support.",
                        },
                    ],
                },
                {
                    type: "paragraph",
                    children: [
                        {
                            type: "text",
                            text: "In rural settings, community health nurses serve as primary caregivers, bridging healthcare accessibility gaps. Home visits ensure patients in remote areas receive medical care and health education directly at their doorstep. Public health campaigns, including vaccination drives and nutrition programs, are conducted. Nurses also leverage telehealth services to extend consultations and monitoring in areas with limited healthcare infrastructure. Furthermore, their training in emergency preparedness ensures timely care during crises and disaster response.",
                        },
                    ],
                },
                {
                    type: "paragraph",
                    children: [
                        {
                            type: "text",
                            text: "The integration of these services into nursing education strengthens their impact. Nursing programs emphasize community health through specialized coursework on disease prevention, health promotion, and epidemiology. Students gain real-world experience during clinical placements in urban and rural areas, fostering interdisciplinary collaboration with health professionals and community leaders. The curriculum promotes cultural competence, advocacy for vulnerable populations, and evidence-based practices, equipping students to address social determinants of health.",
                        },
                    ],
                },
                {
                    type: "paragraph",
                    children: [
                        {
                            type: "text",
                            text: "Through comprehensive services and an educational foundation, community health nurses at DSU make a significant impact in both urban and rural settings, improving health outcomes and advancing the quality of life in the communities they serve.",
                        },
                    ],
                },
            ],
        },
    },

}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AiAcademicMenubar className="lg:!hidden block" />
            <AiLaboratory data={local_data.nursingSkillsSection} />
            <AiFacility data={local_data.specializedLabsSection} />
            <AiClinicalFacility data={local_data.clinicalFacilitiesSection} />
        </>
    )
}
