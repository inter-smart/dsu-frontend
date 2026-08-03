import Hero from "@/components/sections/home/hero";
import About from "@/components/sections/home/about";
import Programs from "@/components/sections/home/programs";
import Rankings from "@/components/sections/home/rankings";
import News from "@/components/sections/home/news";
import Events from "@/components/sections/home/events";
import Journey from "@/components/sections/home/journey";
import Testimonials from "@/components/sections/home/testimonials";
import CTA from "@/components/sections/home/cta";

// Now importing the separated data directly from the home module barrel file
import {
  hero,
  academicPrograms,
  latestNews,
  events,
  studentSuccess,
  cta,
} from "@/data/home";

const LocalData = {
  hero: [
    {
      id: 1,
      title: "Powering the Future with AI-Driven Innovation",
      description:
        "Driven by our AI Factory and Multidisciplinary Centers of Excellence",
      poweredBy: {
        url: "/images/home-hero-1.jpg",
        alternativeText: "home-hero-1",
      },
    },
  ],
  heroNavigation: [
    {
      id: 1,
      icon: {
        url: "/images/home-banner-item-1.svg",
        alternativeText: "home-banner-item-1",
      },
      label: "Admission Helpline",
      url: "/academics",
    },
    {
      id: 2,
      icon: {
        url: "/images/home-banner-item-2.svg",
        alternativeText: "home-banner-item-2",
      },
      label: "International Students",
      url: "/academics",
    },
    {
      id: 3,
      icon: {
        url: "/images/home-banner-item-3.svg",
        alternativeText: "home-banner-item-3",
      },
      label: "Events",
      url: "/academics",
    },
  ],
  marqueeText: [
    {
      id: 1,
      label: "Net zero Conclave on 29/12/2025",
      url: "/",
    },
    {
      id: 2,
      label: " Academic Calendar for 2025-26 Even Semester (SOE)",
      url: "/",
    },
    {
      id: 3,
      label: "Academic Calendar for 2025-26  CLICK HERE",
      url: "/",
    },
    {
      id: 4,
      label: "DSU AI Conclave on 29/12/2025",
      url: "/",
    },
    {
      id: 5,
      label: "AI Summit 2026 March 25 2026 2PM",
      url: "/",
    },
  ],
};

export default function Home() {
  const { hero, heroNavigation, marqueeText } = LocalData;
  return (
    <main className="flex flex-col min-h-screen">
      <Hero data={{ hero, heroNavigation, marqueeText }} />
      <About />
      <Programs data={academicPrograms} />
      <Rankings />
      <Events data={events} />
      <Testimonials data={studentSuccess} />
      <CTA data={cta} />
      <News data={latestNews} />
      <Journey />
    </main>
  );
}
