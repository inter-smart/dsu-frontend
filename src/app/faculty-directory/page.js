import InnerHero from "@/components/layout/common/InnerHero";
import FacultyDirectoryListing from "@/components/sections/faculty/faculty-directory-listing";
import { getFacultyDirectoryPage } from "@/lib/api";

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
        label: "Faculty Directory",
      },
    ],
  },
  facultyListing: {
    facalties: [
        {
          category: { label: "Regular Faculty" },
          faculty: [
            {
              id: 1,
              name: "Dr. Aanya Sharma",
              school: "Engineering",
              department: "Computer Science & Engineering",
              designation: "Professor",
              qualification: "Ph.D",
              image: "/images/avatar-1.jpg",
              href: "#",
              expertiseAreas: ["Artificial Intelligence", "Machine Learning"],
            },
            {
              id: 5,
              name: "Dr. Diya Iyer",
              school: "Computer Applications",
              department: "B.Sc in Cyber History",
              designation: "Associate Professor",
              qualification: "Ph.D",
              image: "/images/avatar-1.jpg",
              href: "#",
              expertiseAreas: ["Cybersecurity", "Blockchain"],
            },
            {
              id: 9,
              name: "Dr. Nikhil Patel",
              school: "Computer Applications",
              department: "M.Sc in Cyber History",
              designation: "Assistant Professor",
              qualification: "Ph.D",
              image: "/images/avatar-1.jpg",
              href: "#",
              expertiseAreas: ["Cybersecurity", "Big Data"],
            },
            {
              id: 13,
              name: "Dr. Kabir Joshi",
              school: "Basic & Applied Sciences",
              department: "Applied Sciences",
              designation: "Professor",
              qualification: "Ph.D",
              image: "/images/avatar-1.jpg",
              href: "#",
              expertiseAreas: ["IoT", "Machine Learning"],
            },
            {
              id: 17,
              name: "Dr. Omar Fernandes",
              school: "Medical Education & Research",
              department: "Medical Education",
              designation: "Associate Professor",
              qualification: "M.D, Ph.D",
              image: "/images/avatar-1.jpg",
              href: "#",
              expertiseAreas: ["Machine Learning", "IoT"],
            },
          ],
        },
        {
          category: { label: "Research Supervisors" },
          faculty: [
            {
              id: 2,
              name: "Dr. Aarav Rao",
              school: "Engineering",
              department: "Electrical & Electronics Engineering",
              designation: "Research Professor",
              qualification: "Ph.D",
              image: "/images/avatar-1.jpg",
              href: "#",
              expertiseAreas: ["Cloud Computing", "IoT"],
            },
            {
              id: 6,
              name: "Dr. Ishaan Kapoor",
              school: "Computer Applications",
              department: "BCA in AI & DS",
              designation: "Professor & Research Supervisor",
              qualification: "Ph.D",
              image: "/images/avatar-1.jpg",
              href: "#",
              expertiseAreas: ["Artificial Intelligence", "Product Engineering"],
            },
            {
              id: 10,
              name: "Dr. Riya Menon",
              school: "School of Law",
              department: "Law",
              designation: "Research Professor",
              qualification: "Ph.D",
              image: "/images/avatar-1.jpg",
              href: "#",
              expertiseAreas: ["Blockchain", "Artificial Intelligence"],
            },
            {
              id: 14,
              name: "Dr. Tara Bose",
              school: "Health Sciences",
              department: "Health Sciences",
              designation: "Research Professor",
              qualification: "Ph.D",
              image: "/images/avatar-1.jpg",
              href: "#",
              expertiseAreas: ["Data Science", "Artificial Intelligence"],
            },
            {
              id: 18,
              name: "Dr. Leela Krishnan",
              school: "Online Degree Programs (BBA, BCA & B.Com)",
              department: "Online Programs",
              designation: "Professor & Research Supervisor",
              qualification: "Ph.D",
              image: "/images/avatar-1.jpg",
              href: "#",
              expertiseAreas: ["Distributed Systems", "Cybersecurity"],
            },
          ],
        },
        {
          category: { label: "Visiting Professors" },
          faculty: [
            {
              id: 3,
              name: "Dr. Anika Mehta",
              school: "Computer Applications",
              department: "Bachelor of Computer Applications",
              designation: "Visiting Professor",
              qualification: "M.C.A, Ph.D",
              image: "/images/avatar-1.jpg",
              href: "#",
              expertiseAreas: ["Cybersecurity", "Data Science"],
            },
            {
              id: 7,
              name: "Dr. Kavya Reddy",
              school: "Computer Applications",
              department: "Master of Computer Applications",
              designation: "Adjunct Professor",
              qualification: "M.C.A, Ph.D",
              image: "/images/avatar-1.jpg",
              href: "#",
              expertiseAreas: ["Machine Learning", "Distributed Systems"],
            },
            {
              id: 11,
              name: "Dr. Vihaan Singh",
              school: "Commerce & Management Studies",
              department: "Commerce",
              designation: "Visiting Professor",
              qualification: "M.Com, Ph.D",
              image: "/images/avatar-1.jpg",
              href: "#",
              expertiseAreas: ["Big Data", "Product Engineering"],
            },
            {
              id: 15,
              name: "Dr. Neil Bhat",
              school: "Arts, Design and Humanities",
              department: "Arts & Humanities",
              designation: "Adjunct Professor",
              qualification: "M.A, Ph.D",
              image: "/images/avatar-1.jpg",
              href: "#",
              expertiseAreas: ["Product Engineering", "Blockchain"],
            },
          ],
        },
        {
          category: { label: "Industry Mentors" },
          faculty: [
            {
              id: 4,
              name: "Dr. Arjun Nair",
              school: "Computer Applications",
              department: "B.Sc in Data Science",
              designation: "Industry Mentor",
              qualification: "M.Tech, MBA",
              image: "/images/avatar-1.jpg",
              href: "#",
              expertiseAreas: ["Big Data", "Data Science"],
            },
            {
              id: 8,
              name: "Dr. Mira Das",
              school: "Computer Applications",
              department: "M.Sc in Data Science",
              designation: "Lead Industry Mentor",
              qualification: "M.Sc, MBA",
              image: "/images/avatar-1.jpg",
              href: "#",
              expertiseAreas: ["Data Science", "Cloud Computing"],
            },
            {
              id: 12,
              name: "Dr. Zoya Kulkarni",
              school: "Commerce & Management Studies",
              department: "Management",
              designation: "Industry Mentor",
              qualification: "M.B.A, Ph.D",
              image: "/images/avatar-1.jpg",
              href: "#",
              expertiseAreas: ["Cloud Computing", "Distributed Systems"],
            },
            {
              id: 16,
              name: "Dr. Sara Khanna",
              school: "Design & Digital Trans Media",
              department: "Design",
              designation: "Lead Industry Mentor",
              qualification: "M.Des, MBA",
              image: "/images/avatar-1.jpg",
              href: "#",
              expertiseAreas: ["Product Engineering", "Cloud Computing"],
            },
          ],
        },
      ],
  },
};

export default async function Page() {
  const page = await getFacultyDirectoryPage();
  const hero = page?.hero;
  // `local_data` until Strapi is reachable and has published faculty
  const facultyListing = page?.facultyListing;

  return (
    <>
      <InnerHero data={hero} />
      <FacultyDirectoryListing data={facultyListing} />
    </>
  );
}
