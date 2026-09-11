import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AboutMe } from "@/components/sections/AboutMe";
import { Experience } from "@/components/sections/Experience";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asher Okwong | Social Media & Community Manager" },
      {
        name: "description",
        content:
          "Portfolio of Asher Okwong, a Social Media & Community Manager helping brands build meaningful online communities.",
      },
      {
        property: "og:title",
        content: "Asher Okwong | Social Media & Community Manager",
      },
      {
        property: "og:description",
        content:
          "Portfolio of Asher Okwong, a Social Media & Community Manager helping brands build meaningful online communities.",
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
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
