import Hero from "@/components/sections/home/hero";
import About from "@/components/sections/home/about";
import Programs from "@/components/sections/home/programs";
import Rankings from "@/components/sections/home/rankings";
import News from "@/components/sections/home/news";
import Events from "@/components/sections/home/events";
import Testimonials from "@/components/sections/home/testimonials";
import CTA from "@/components/sections/home/cta";

// Now importing the separated data directly from the home module barrel file
import { 
  hero, 
  academicPrograms, 
  latestNews, 
  events, 
  studentSuccess,
  cta 
} from "@/data/home";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero data={hero} />
      <About />
      <Programs data={academicPrograms} />
      <Rankings />
      <News data={latestNews} />
      <Events data={events} />
      <Testimonials data={studentSuccess} />
      <CTA data={cta} />
    </main>
  );
}
