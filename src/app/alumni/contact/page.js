import InnerHero from "@/components/layout/common/InnerHero";
import AlumniContact from "@/components/sections/alumni/alumni-contact";

const local_data = {
  hero: {
    id: 25,
    heroMedia: {
      url: "/images/faculty-banner.jpg",
      alternativeText: "Faculty Directory",
      mime: "image/jpg",
    },
    title: "Alumni",
    breadcrumb: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Alumni",
        href: "/",
      },
      {
        label: "Alumni Events",
      },
    ],
  },
  alumniContact: {
    sidebar: [
      {
        label: "Welcome Note",
        slug: "/alumni",
      },
      {
        label: "Mission & Vision",
        slug: "/examination/schedule",
      },
      {
        label: "Alumni Events",
        slug: "/alumni/events",
      },
      {
        label: "Alumni Newsletter",
        slug: "/alumni/newsletter",
      },
      {
        label: "Contact",
        slug: "/alumni/contact",
      },
    ],
    title: "Contact",
    description:
      "On behalf of the entire Dayananda Sagar University community, it is our privilege and pleasure to warmly welcome you back to your alma mater. Your association with DSU is lifelong, and we deeply appreciate the continued pride, support, and inspiration you bring to our institution.",
    contact: [
      {
        id: "coordinators",
        title: "DSUAC Faculty-Alumni Coordinators",
        headers: ["School", "Name", "Email ID"],
        rows: [
          [
            "Director - Incharge - Alumni Relations",
            "Ms. Shyamantha Suryaprakash",
            "director-alumni@dsu.edu.in",
          ],
          [
            "Manager - DSU Alumni Relations",
            "Ms. Rakhi Dixit",
            "rakhidixit@dsu.edu.in",
          ],
          [
            { value: "School of Engineering", rowSpan: 6 },
            "Dr. Gousia T",
            "alumni-cse@dsu.edu.in",
          ],
          [null, "Dr. Kanmani BS", "alumni-ece@dsu.edu.in"],
          [null, "Prof. S.B. Karthik", "alumni-me@dsu.edu.in"],
          [null, "Prof. Ramandeep Kaur", "alumni-cst@dsu.edu.in"],
          [null, "Dr. Vasanthi Kumari P", "alumni-bca@dsu.edu.in"],
          [null, "Dr. Prarthana Kumar", "alumni-bce@dsu.edu.in"],
          [
            "School of Commerce & Mgmt Studies - UG",
            "Prof. Abhilash",
            "alumni-scmsg@dsu.edu.in",
          ],
          ["School of Law", "Prof. Shivani Dutta", "alumni-sol@dsu.edu.in"],
          [
            "School of Basic & Applied Sciences (SBAS)",
            "Dr. Manjula N G\nDr. Anantha Krishna TH",
            "alumni-sbas@dsu.edu.in",
          ],
          [
            { value: "School of Health Sciences", rowSpan: 3 },
            "Prof. Anusha",
            "alumni-nsg@dsu.edu.in",
          ],
          [null, "Dr. Gayathri Poojari", "alumni-physio@dsu.edu.in"],
          [null, "Prof. Prema Kumari", "alumni-cops@dsu.edu.in"],
          [
            "School of Arts & Humanities",
            "Mr. Madhu Uddiboranahalli",
            "alumni-cjmc@dsu.edu.in",
          ],
          ["School of Design & Technology", "", "alumni-soda@dsu.edu.in"],
        ],
      },
      {
        id: "office-bearers",
        title: "DSUAC Student-Alumni Office Bearers",
        headers: ["Name", "Designation", "Email ID"],
        rows: [
          ["Mr. Abhishek Srinivas", "President", "abhisheks2898@gmail.com"],
          ["Ms. Apoorva D", "Vice President", "apurw6.am@gmail.com"],
          ["Ms. Arpitha Ganesh", "Secretary", "Arpithaganesh17@gmail.com"],
          ["Ms. Suman S", "Treasurer", "Sumansunil3105@gmail.com"],
          ["Ms. Fiona Alijo", "Member", "fionalijo0781@gmail.com"],
          ["Ms. Umi Salma", "Member", "umisalma1298@gmail.com"],
          ["Mr. Suman SK", "Member", "sumansomu08@gmail.com"],
        ],
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <InnerHero data={local_data?.hero} />
      <AlumniContact data={local_data?.alumniContact} />
    </>
  );
}
