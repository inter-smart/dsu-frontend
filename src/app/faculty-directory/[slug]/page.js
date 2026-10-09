import InnerHero from "@/components/layout/common/InnerHero";
import FacultyPublications from "@/components/sections/faculty/faculty-publications";
import FacultyAchievements from "@/components/sections/faculty/faculty-achievements";
import FacultyProfessorInfo from "@/components/sections/faculty/faculty-professor-info";

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
        href: "/",
      },
      {
        label: "Detail",
      },
    ],
  },
  professorInfo: {
    professorImage: {
      url: "/images/faculty-professor.jpg",
      alternativeText: "Faculty Directory",
    },
    professorName: "Dr. S Senthil",
    designation: "Professor & Dean",
    qualification: "Ph.D",
    department: "Dept of Computer Science",
    bio: `
        <p>Dr. S. Senthil, currently serving as Dean and Chairman of the School of Computer Applications at Dayananda Sagar University, was awarded a Doctoral Degree by Bharathiar University for his dissertation on "Lossless Preprocessing Algorithms for Effective Text Compression." Dr. Senthil has an impressive academic background, having completed his B.Sc. in Applied Sciences – Computer Technology from PSG College of Technology, MCA from Bharathidasan University, M.Phil. in Computer Science from Manonmaniam Sundaranar University, and Ph.D. in Computer Science from Bharathiar University. He has also qualified in the State Eligibility Test conducted by Bharathiar University.
        </p>
        <p>Dr. Senthil has successfully guided four Ph.D. scholars and is currently guiding another four in the fields of Data Mining and Networks. With over 25 years of teaching experience, his areas of interest include Machine Learning, Data Analytics, Data Compression, Database Systems, and Data Mining. He has published more than 100 research papers in various reputed national and international journals.</p>
        <p>Among his notable achievements, Dr. Senthil presented a paper entitled "Lossless Preprocessing Algorithms for Better Compression" at an IEEE International Conference in Zhangjiajie, China. He has received best paper awards at the International Conference on "Wisdom Based Computing" in Thiruvananthapuram and the National Conference on "Transforming India through Digital Innovations" at Guru Shree Shantivijai Jain College for Women in Chennai.</p>
        <p>Dr. Senthil is the principal investigator of a project titled "Development of a Prediction Model to Identify At-risk Students Using Heart Rate Data," funded by the Vision Group of Science and Technology. He holds three granted patents and has published ten patents. In addition to his research and academic pursuits, Dr. Senthil has contributed to numerous collaborative projects and has been an active member of various academic committees.</p>
        `,
  },
  facultyPublications: {
    title: "Publications",
    description:
      "Dr. S. Senthil has published 100+ research papers in national and international journals and conferences.",
    publications: [
      {
        id: 1,
        title:
          "Lossless Preprocessing Algorithms for Effective Text Compression",
        source: "IEEE International Conference, Zhangjiajie, China",
      },
      {
        id: 2,
        title:
          "An Efficient Data Mining Approach for Classification of Large Datasets",
        source: "International Journal of Computer Applications",
      },
      {
        id: 3,
        title: "A Novel Framework for Heart Rate Based Stress Prediction",
        source: "Journal of Medical Systems",
      },
      {
        id: 4,
        title: "Improved Association Rule Mining Using Hybrid Techniques",
        source: "International Journal of Data Science & Analytics",
      },
      {
        id: 5,
        title:
          "Text Compression Using Adaptive Dictionary and Encoding Techniques",
        source: "Journal of Information Science",
      },
    ],
  },
  facultyAchievements: {
    title: "Achievements & Recognitions",
    description:
      "Dr. S. Senthil has published 100+ research papers in national and international journals and conferences.",
    achievements: [
      'Received Best Paper Award at the International Conference on "Wisdom Based Computing", Thiruvananthapuram.',
      'Received Best Paper Award at the National Conference on "Transforming India through Digital Innovations" at Guru Shree Shantivijai Jain College for Women, Chennai.',
      'Presented research paper "Lossless Preprocessing Algorithms for Better Compression" at an IEEE International Conference in Zhangjiajie, China.',
      'Principal Investigator of the research project "Development of a Prediction Model to Identify At-risk Students Using Heart Rate Data", funded by the Vision Group of Science and Technology.',
      "Holds three granted patents and has published ten patents.",
      "Successfully guided Ph.D. scholars in the fields of Data Mining and Networks.",
      "Active member of various academic committees.",
      "Contributed to numerous collaborative research projects.",
    ],
  },
};

export default function page({ data }) {
  return (
    <>
      <InnerHero data={local_data?.hero} />
      <FacultyProfessorInfo data={local_data?.professorInfo} />
      <FacultyPublications data={local_data?.facultyPublications} />
      <FacultyAchievements data={local_data?.facultyAchievements} />
    </>
  );
}
