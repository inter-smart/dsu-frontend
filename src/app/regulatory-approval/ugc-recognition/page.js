
import InnerHero from '@/components/layout/common/InnerHero'
import GovernanceFinancecommittte from '@/components/sections/governance/governance-financecommittte'
import UgcRegnition from '@/components/sections/regulatory-approval/ugc-recognition'


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
  ugcRecognition: {
    title: "UGC Recognition",

    description: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Dayananda Sagar University (DSU) is recognized by the University Grants Commission (UGC), the statutory body of the Government of India responsible for maintaining standards of higher education. This recognition affirms our commitment to academic excellence, quality education, and holistic development of students."
          }
        ]
      }
    ],

    recognition: {
      logo: "/images/ugc/ugc_logo.svg",
      title: "University Grants Commission",

      status: [
        {
          label: "Recognition Status",
          value: "UGC Recognized"
        },

        {
          label: "Recognition No",
          value: "ugc-2023-0090"
        }, 
        {
          label: "Date",
          value: "12 May 2023"
        }
      ]
    },

    recognitionDetails: {
      title: "Recognition Details",

      items: [
        {
          title: "UGC Recognized University",
          description: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Approved by the University Grants Commission, Government of India."
                }
              ]
            }
          ]
        },
        {
          title: "Academic Compliance",
          description: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Programs follow UGC norms and regulations."
                }
              ]
            }
          ]
        },
        {
          title: "Recognized Degrees",
          description: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Degrees are valid for higher education and employment."
                }
              ]
            }
          ]
        },
        {
          title: "Official Documentation",
          description: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Recognition certificates and orders are publicly available."
                }
              ]
            }
          ]
        }
      ],
 
    },

    faq: {
      title: "Frequently Asked Questions",

      items: [
        {
          id: 1,
          question: "What is UGC Recognition?",
          answer: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "UGC Recognition is the official approval granted by the University Grants Commission (UGC), confirming that the University meets the prescribed standards of higher education and can award recognized degrees in India."
                }
              ]
            }
          ],
          open: true
        },
        {
          id: 2,
          question: "Is Dayananda Sagar University recognized by UGC?",
          answer: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Yes, Dayananda Sagar University is recognized by the University Grants Commission (UGC)."
                }
              ]
            }
          ],
          open: false
        },
        {
          id: 3,
          question: "Are DSU degrees valid across India?",
          answer: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Yes, degrees awarded by Dayananda Sagar University are recognized and valid across India, subject to applicable regulations."
                }
              ]
            }
          ],
          open: false
        },
        {
          id: 4,
          question: "Can I apply for government jobs with a DSU degree?",
          answer: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Yes, eligible graduates can apply for government jobs with a recognized DSU degree, subject to the eligibility criteria of the respective recruitment authority."
                }
              ]
            }
          ],
          open: false
        }
      ]
    }
  }


}
export default function page() {
  return (
    <>
      <InnerHero data={local_data.hero} />
      <UgcRegnition data={local_data.ugcRecognition} />
    </>
  )
}
