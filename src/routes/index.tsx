import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AboutMe } from "@/components/sections/AboutMe";
import { Services } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Portfolio } from "@/components/sections/Portfolio";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Tools } from "@/components/sections/Tools";
import { AshLight } from "@/components/sections/AshLight";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asher Okwong | Social Media Manager & Content Strategist" },
      {
        name: "description",
        content:
          "Asher Okwong is a Social Media Manager & Content Strategist helping brands build stronger online presences through strategy, content creation, community engagement, and short-form video.",
      },
      {
        property: "og:title",
        content: "Asher Okwong | Social Media Manager & Content Strategist",
      },
      {
        property: "og:description",
        content:
          "Asher Okwong is a Social Media Manager & Content Strategist helping brands build stronger online presences through strategy, content creation, community engagement, and short-form video.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Services />
        <CaseStudies />
        <Portfolio />
        <Experience />
        <Skills />
        <Tools />
        <AshLight />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
