import InnerHero from "@/components/layout/common/InnerHero";
import Journey from "@/components/layout/common/journey";
import Contact from "@/components/sections/contact/contact";

const local_data = {
  hero: {
    id: 25,
    heroMedia: {
      url: "/images/contact-banner.webp",
      alternativeText: "Contact page title",
      mime: "image/jpg",
    },
    title: "Contact us",
    breadcrumb: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Locate us",
        href: "/why-dsu",
      },
    ],
  },
  contactSection: {
    contact: [
      {
        id: 1,
        mainTitle: "DSU Main Campus",
        icon: {
          url: "/images/contact-icon-1.svg",
          alternativeText: "Contact Icon",
        },
        title: "Dayananda Sagar University",
        address:
          "Devarakaggalahalli, Harohalli,Kanakapura Road,Bengaluru South Dt. – 562 112",
        directionLink: "/",
        contactDetails: [
          {
            id: 1,
            type: "email",
            icon: {
              url: "/images/contact-inner-icon-1.svg",
              alternativeText: "Email Icon",
            },
            label: "Email",
            values: ["admissions@dsu.edu.in"],
          },
          {
            id: 2,
            type: "phone",
            icon: {
              url: "/images/contact-inner-icon-2.svg",
              alternativeText: "Phone Icon",
            },
            label: "Office of Registrar :",
            values: ["080 24496999(Extn-2)"],
          },
          {
            id: 3,
            type: "phone",
            icon: {
              url: "/images/contact-inner-icon-2.svg",
              alternativeText: "Phone Icon",
            },
            label: "Reception:",
            values: ["080 24496999(Extn-1)"],
          },
          {
            id: 4,
            type: "phone",
            icon: {
              url: "/images/contact-inner-icon-2.svg",
              alternativeText: "Phone Icon",
            },
            label: "Registrar:",
            values: ["080 24496999(Extn-3)"],
          },
          {
            id: 5,
            type: "phone",
            icon: {
              url: "/images/contact-inner-icon-2.svg",
              alternativeText: "Phone Icon",
            },
            label: "Dean, SOE:",
            values: ["080 24496999(Extn-4)"],
          },
        ],
        infoCenter: {
          title: "Admission Information Center ",
          address:
            "Gate 2, 6th Floor, University Building,Dental Block, Kumaraswamy Layout,Bengaluru - 560 111",
          directionLink: "/",
          contactDetails: [
            {
              id: 1,
              type: "email",
              icon: {
                url: "/images/contact-inner-icon-1.svg",
                alternativeText: "Email Icon",
              },
              label: "E-Mail:",
              values: ["admissions@dsu.edu.in"],
            },
            {
              id: 2,
              type: "phone",
              icon: {
                url: "/images/contact-inner-icon-2.svg",
                alternativeText: "Phone Icon",
              },
              label: "Admissions Helpline:",
              values: ["080 46461800", "080 49092800"],
            },
          ],
        },
      },
      {
        id: 2,
        mainTitle: "DSU City Innovation Campus ",
        icon: {
          url: "/images/contact-icon-2.svg",
          alternativeText: "Contact Icon",
        },
        title: "Innovation Campus",
        address:
          "Administrative & Main Admission office,Kudlu Gate, Hosur Road,Bengaluru - 560 068",
        directionLink: "/",
        contactDetails: [
          {
            id: 1,
            type: "email",
            icon: {
              url: "/images/contact-inner-icon-1.svg",
              alternativeText: "Email Icon",
            },
            label: "Email",
            values: ["admissions@dsu.edu.in", "dsat@dsu.edu.in"],
          },
          {
            id: 2,
            type: "phone",
            icon: {
              url: "/images/contact-inner-icon-2.svg",
              alternativeText: "Phone Icon",
            },
            label: "Office of Registrar :",
            values: ["080 4909 2910"],
          },
          {
            id: 3,
            type: "phone",
            icon: {
              url: "/images/contact-inner-icon-2.svg",
              alternativeText: "Phone Icon",
            },
            label: "Office of Dean (School of Engineering):",
            values: ["080 4909 2986 "],
          },
          {
            id: 4,
            type: "phone",
            icon: {
              url: "/images/contact-inner-icon-2.svg",
              alternativeText: "Phone Icon",
            },
            label: "Dean - MBA:",
            values: ["080 4909 2931"],
          },
          {
            id: 5,
            type: "phone",
            icon: {
              url: "/images/contact-inner-icon-2.svg",
              alternativeText: "Phone Icon",
            },
            label: "Research Cell:",
            values: ["080 4909 2912", "91 97390 17462"],
          },
        ],
        infoCenter: {
          title: "Admission Information Center ",
          contactDetails: [
            {
              id: 1,
              type: "phone",
              icon: {
                url: "/images/contact-inner-icon-2.svg",
                alternativeText: "Phone Icon",
              },
              label: "Admissions Helpline:",
              values: [
                "080 46461800",
                "080 49092800",
                "+91 7760964277",
                "8296316737",
                "6366885507",
              ],
            },
            {
              id: 2,
              type: "phone",
              icon: {
                url: "/images/contact-inner-icon-2.svg",
                alternativeText: "Phone Icon",
              },
              label: "NRI / Foreign Admissions Helpline:",
              values: ["+91 9606022152 ", "+91 9606022150", "+91 9606022151"],
            },
          ],
        },
      },
    ],
  },
  journey: {
    background_image: "/images/home-journey.webp",
    title: "Start Your Journey With Us",
    description:
      "<p>Take the next step toward a future-ready education supported by innovation, <br> research, and industry collaboration.</p>",
    certified_list: [
      {
        id: 1,
        icon: "/images/rating-star.svg",
        label: "NAAC A+ Accredited",
      },
      {
        id: 2,
        label: "UGC Recognized",
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <InnerHero data={local_data?.hero} />
      <Contact data={local_data?.contactSection} />
      <Journey data={local_data?.journey} />
    </>
  );
}
