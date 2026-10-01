import AiFirstHero from "@/components/sections/ai-first/ai-first-hero";
import AboutInitiative from "@/components/sections/ai-first/ai-first-about-initiative";
import EducationAmplified from "@/components/sections/ai-first/ai-first-education-amplified";
import ResearchDomains from "@/components/sections/ai-first/ai-first-research-domains";
import ResearchEngagement from "@/components/sections/ai-first/ai-first-research-engagement";
import AiLeadership from "@/components/sections/ai-first/ai-first-leadership";
import BePartOfFuture from "@/components/sections/ai-first/ai-first-be-part-of-future";
import ShapeFuture from "@/components/sections/ai-first/ai-first-shape-future";
import ReadyCta from "@/components/sections/ai-first/ai-first-ready-cta";

const local_data = {
  hero: {
    title: "AI First @ DSU",
    subtitle:
      "Invitation To Experience India's First AI-Native Research Ecosystem.",
    heroMedia: {
      url: "/images/ai-first/hero-bg.jpg",
      alternativeText: "DSU campus at night with AI network overlay",
      mime: "image/jpg",
    },
    ctas: [{ label: "Explore the Stack", href: "#", variant: "gradient" }],
  },
  aboutSection: {
    title: "What is the AI-First Initiative?",
    description:
      "The AI-First initiative at DSU represents a fundamental shift in how we design education, conduct research, and foster innovation. Rather than treating AI as a peripheral tool, we place artificial intelligence at the core of every academic and operational aspect of the university.",
    media: {
      type: "video",
      url: "/videos/ai-first-about.mp4",
      alternativeText: "AI-First initiative at DSU",
    },
    pillars: [
      {
        icon: {
          url: "/images/ai-first/icons/learning.svg",
          alternativeText: "Learning",
        },
        title: "Learning",
        description:
          "AI-enhanced curricula and adaptive learning systems that personalize education for every student",
      },
      {
        icon: {
          url: "/images/ai-first/icons/research.svg",
          alternativeText: "Learning",
        },
        title: "Research",
        description:
          "Leveraging AI to accelerate breakthrough discoveries and solve complex real-world problems",
      },
      {
        icon: {
          url: "/images/ai-first/icons/innovation.svg",
          alternativeText: "Learning",
        },
        title: "Innovation",
        description:
          "Building an ecosystem where AI drives entrepreneurship and industry partnerships",
      },
    ],
  },
  educationSection: {
    banner: {
      title: "Where Knowledge Meets Intelligence",
      description:
        "Learning becomes limitless when powered by artificial intelligence. Our state-of-the-art learning commons provides an environment where traditional pedagogy merges with cutting-edge AI tools and resources.",
      image: {
        url: "/images/ai-first/learning-banner.jpg",
        alternativeText: "DSU learning commons",
      },
      pills: [
        {
          icon: "/images/ai-first/icons/pill-personalized-learning.svg",
          title: "Personalized Learning Pathways",
          description:
            "AI-driven recommendations tailored to each student's learning style",
        },
        {
          icon: "/images/ai-first/icons/pill-247-support.svg",
          title: "24/7 Intelligent Support",
          description:
            "AI tutoring systems available round the clock for student assistance",
        },
        {
          icon: "/images/ai-first/icons/pill-collaborative-spaces.svg",
          title: "Collaborative Innovation Spaces",
          description:
            "Modern facilities for student projects and research initiatives",
        },
      ],
    },
    title: "Education Amplified by AI",
    description:
      "Knowledge optimized by artificial intelligence ensures every student receives an education tailored to their unique learning needs and aspirations.",
    cards: [
      {
        title: "Adaptive Learning Systems",
        description:
          "Dynamic content delivery that adjusts difficulty and pace based on individual student progress",
        icon: {
          url: "/images/ai-icon-1.svg",
          alternativeText: "Adaptive learning systems",
        },
        image: {
          url: "/images/ai-first/feature-adaptive.jpg",
          alternativeText: "Adaptive learning systems",
        },
      },
      {
        title: "Collaborative Tools",
        description:
        "AI-enhanced platforms enable seamless student-to-student and student-to-faculty collaboration",
        icon: {
          url: "/images/ai-icon-2.svg",
          alternativeText: "Adaptive learning systems",
        },
        image: {
          url: "/images/ai-first/feature-collab.jpg",
          alternativeText: "Collaborative tools",
        },
      },
      {
        title: "Smart Classrooms",
        description:
        "AI-powered analytics provide real-time insights into student engagement and learning outcomes",
        icon: {
          url: "/images/ai-icon-3.svg",
          alternativeText: "Adaptive learning systems",
        },
        image: {
          url: "/images/ai-first/feature-smart.jpg",
          alternativeText: "Smart classrooms",
        },
      },
    ],
  },
  domainsSection: {
    title: "Research & Innovation Domains",
    description:
      "Driving impact across industries through collaborative AI research",
    image: {
      url: "/images/ai-first/domains-image.jpg",
      alternativeText: "Research and innovation domains",
    },
    imageCaption: "Advancing research with AI-enabled discovery.",
    domains: [
      {
        icon: "/images/ai-first/icons/nlp.svg",
        title: "Natural Language Processing",
        description:
          "Pioneering research and practical applications in natural language processing",
      },
      {
        icon: "/images/ai-first/icons/autonomous-systems.svg",
        title: "Autonomous Systems",
        description:
          "Pioneering research and practical applications in computer vision",
      },
      {
        icon: "/images/ai-first/icons/industrial-automation.svg",
        title: "Industrial Automation",
        description:
          "Pioneering research and practical applications in natural language processing",
      },
      {
        icon: "/images/ai-first/icons/computer-vision.svg",
        title: "Computer Vision",
        description:
          "Pioneering research and practical applications in computer vision",
        variant: "highlight",
      },
      {
        icon: "/images/ai-first/icons/healthcare-ai.svg",
        title: "Healthcare AI",
        description:
          "Pioneering research and practical applications in natural language processing",
      },
      {
        icon: "/images/ai-first/icons/enterprise-intelligence.svg",
        title: "Enterprise Intelligence",
        description:
          "Pioneering research and practical applications in natural language processing",
      },
    ],
  },
  engagementSection: {
    title: "Research Engagement Opportunities",
    description:
      "Transform real-world challenges into breakthrough innovations. Partner with DSU's world-class researchers and NVIDIA's cutting-edge infrastructure to solve industry problems and advance the frontiers of AI.",
    industries: [
      {
        icon: "/images/ai-first/icons/healthcare-life-sciences.svg",
        title: "Healthcare & Life Sciences",
        description: "Accelerate medical breakthroughs",
        focusAreas: ["Medical Imaging", "Drug Discovery", "Diagnostics"],
        variant: "highlight",
      },
      {
        icon: "/images/ai-first/icons/automotive-mobility.svg",
        title: "Automotive & Mobility",
        description: "Revolutionize vehicle intelligence and safety",
        focusAreas: ["Digital Twin", "Safety Systems", "Autonomous Vehicles"],
      },
      {
        icon: "/images/ai-first/icons/financial-services.svg",
        title: "Financial Services",
        description: "Enhance financial intelligence",
        focusAreas: ["Risk Management", "Fraud Detection", "Market Analytics"],
      },
      {
        icon: "/images/ai-first/icons/manufacturing-iot.svg",
        title: "Manufacturing & IoT",
        description: "Optimize production intelligence",
        focusAreas: [
          "Smart Factories",
          "Quality Control",
          "Predictive Maintenance",
        ],
      },
      {
        icon: "/images/ai-first/icons/cybersecurity-defense.svg",
        title: "Cybersecurity & Defense",
        description: "Strengthen security intelligence",
        focusAreas: ["Threat Detection", "Defense Systems", "Data Protection"],
      },
      {
        icon: "/images/ai-first/icons/supply-chain-logistics.svg",
        title: "Supply Chain & Logistics",
        description: "Maximize operational efficiency",
        focusAreas: ["Forecasting", "Optimization", "Route Planning"],
      },
    ],
    personas: [
      {
        icon: "/images/ai-first/icons/for-industry-partners.svg",
        title: "For Industry Partners",
        points: [
          "Access top-tier research talent",
          "Leverage NVIDIA's advanced infrastructure",
          "Co-develop innovative solutions",
        ],
      },
      {
        icon: "/images/ai-first/icons/for-researchers.svg",
        title: "For Researchers",
        points: [
          "Work on real-world problems",
          "Publish groundbreaking research",
          "Build industry connections",
        ],
      },
      {
        icon: "/images/ai-first/icons/for-students.svg",
        title: "For Students",
        points: [
          "Gain industry-relevant experience",
          "Mentor with world-class experts",
          "Build your professional network",
        ],
      },
    ],
  },
  leadershipSection: {
    title: "Building India's AI Leadership",
    description:
      "Establishing DSU as the premier destination for AI research, innovation, and talent development",
    image: {
      url: "/images/ai-first/leadership-1.jpg",
      alternativeText: "Building India's AI leadership",
    },
    cards: [
      {
        icon: "/images/ai-first/icons/talent-development.svg",
        title: "Talent Development",
        points: [
          "Developing highly skilled AI professionals for industry",
          "Creating innovation and entrepreneurship opportunities",
          "Building India's AI-first generation of leaders",
        ],
      },
      {
        icon: "/images/ai-first/icons/global-recognition.svg",
        title: "Global Recognition",
        points: [
          "Positioning DSU among top AI research institutions in India",
          "Publishing groundbreaking research in premier journals",
          "Building partnerships with global AI leaders",
        ],
      },
    ],
  },
  futureSection: {
    title: "Be Part of the Future",
    description:
      "Join Dayananda Sagar University's transformative AI-First initiative and shape the future of education, research, and innovation in India.",
    backgroundImage: {
      url: "/images/ai-first/future-bg.jpg",
      alternativeText: "DSU campus at night",
    },
    ctas: [
      { label: "Apply Now", href: "#", variant: "gradient" },
      { label: "Explore Technology", href: "#", variant: "outline" },
    ],
    cards: [
      {
        title: "World-Class Infrastructure",
        description:
          "Access NVIDIA's cutting-edge GPU labs, DGX B200 systems, and state-of-the-art research facilities designed for AI innovation",
        image: {
          url: "/images/ai-first/future-infra.jpg",
          alternativeText: "World-class infrastructure",
        },
      },
      {
        title: "Industry Collaboration",
        description:
          "Work directly with leading companies across automotive, healthcare, finance, and manufacturing sectors on real-world problems",
        image: {
          url: "/images/ai-first/future-industry.jpg",
          alternativeText: "Industry collaboration",
        },
      },
      {
        title: "Career & Entrepreneurship",
        description:
          "Launch your career with AI expertise in high demand, or build your AI-powered startup with our incubation support and mentorship",
        image: {
          url: "/images/ai-first/future-career.jpg",
          alternativeText: "Career and entrepreneurship",
        },
      },
      {
        title: "Global Recognition",
        description:
          "Publish groundbreaking research, contribute to NVIDIA initiatives, and position yourself as an AI thought leader",
        image: {
          url: "/images/ai-first/future-global.jpg",
          alternativeText: "Global recognition",
        },
      },
    ],
  },
  shapeSection: {
    title: "Shape India's AI Future",
    description:
      "Whether you're a student, researcher, entrepreneur, or industry leader—DSU's AI-First initiative offers unprecedented opportunities for growth, innovation, and impact.",
    image: {
      url: "/images/ai-first/shape-banner.jpg",
      alternativeText: "Shape India's AI future",
    },
    ctas: [
      { label: "Apply Now", href: "#", variant: "gradient" },
      { label: "Learn More About Programs", href: "#", variant: "outline" },
    ],
  },
  readySection: {
    title: "Ready to Build Your Future with AI?",
    description:
      "The future is intelligent. And it is being built at DSU. Be part of India's AI revolution. Start your application today and take the first step towards a bright future.",
    image: {
      url: "/images/ai-first/ready-bg.jpg",
      alternativeText: "Ready to build your future with AI",
    },
    ctas: [
      { label: "Apply For Admission", href: "#", variant: "gradient" },
      { label: "Virtual Tour", href: "#", variant: "white" },
    ],
  },
};

export default function Page() {
  return (
    <>
      <AiFirstHero data={local_data.hero} />
      <AboutInitiative data={local_data.aboutSection} />
      <EducationAmplified data={local_data.educationSection} />
      <ResearchDomains data={local_data.domainsSection} />
      <ResearchEngagement data={local_data.engagementSection} />
      <AiLeadership data={local_data.leadershipSection} />
      <BePartOfFuture data={local_data.futureSection} />
      <ShapeFuture data={local_data.shapeSection} />
      <ReadyCta data={local_data.readySection} />
    </>
  );
}
