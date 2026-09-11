import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

type CaseStudy = {
  brand: string;
  title: string;
  tagline: string;
  accent: string;
  logo?: string;
  challenge: string;
  actions: string[];
  result: string;
};

const caseStudies: CaseStudy[] = [
  {
    brand: "Gallery of Code",
    title: "Social Media Management & Content",
    tagline: "Managing a brand's social presence with consistent, creative content.",
    accent: "bg-[#e4e3df]",
    logo: "/images/logos/image.png",
    challenge:
      "Gallery of Code needed a consistent social media presence that reflected the brand and kept its audience engaged.",
    actions: [
      "Managed social media pages and maintained the brand voice",
      "Planned and created content for campaigns and programs",
      "Produced carousels, storytelling posts, and campaign creatives",
      "Engaged with the audience to grow community activity",
    ],
    result:
      "A stronger, more consistent social presence with growing audience engagement and clearer brand communication across platforms.",
  },
  {
    brand: "Renewables4Africa",
    title: "Social Media Management & Growth",
    tagline: "Building a sustainability brand's social presence from strategy to execution.",
    accent: "bg-[#d8e1e3]",
    challenge:
      "Renewables4Africa needed a social media strategy that could communicate its mission and grow an engaged audience around renewable energy in Africa.",
    actions: [
      "Managed social media and developed the content strategy",
      "Planned content around the brand's mission and audience interests",
      "Created consistent social content to build brand awareness",
      "Strengthened brand positioning across social platforms",
    ],
    result:
      "Measurable growth in audience engagement and a clearer, more consistent brand presence online — demonstrating that strategy-led social management produces real results.",
  },
  {
    brand: "Byomane",
    title: "Social Media Management & Content Creation",
    tagline: "Content strategy and creative direction for an active brand.",
    accent: "bg-[#e8dfc9]",
    logo: "/images/logos/image copy 2.png",
    challenge:
      "Byomane needed intentional content strategy and creative direction to grow its social presence and connect with its audience.",
    actions: [
      "Led content strategy and content planning for the brand",
      "Developed Reel concepts and creative direction",
      "Managed day-to-day social media presence and engagement",
      "Created consistent, on-brand content across formats",
    ],
    result:
      "Stronger audience engagement through consistent, intentional content and a clearer creative direction for the brand.",
  },
];

export function CaseStudies() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="case-studies" className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Selected Work</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mt-4 text-muted-foreground">
            Mini case studies from brands I&apos;ve managed social media and content for.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <AnimatedSection key={study.brand} delay={index * 100}>
              <button
                onClick={() => setActive(index)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className={`relative flex h-40 items-center justify-center ${study.accent}`}>
                  {study.logo ? (
                    <div className="flex h-16 w-24 items-center justify-center rounded-lg border border-black/10 bg-white p-2">
                      <img
                        src={study.logo}
                        alt={`${study.brand} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <span className="font-display text-5xl font-bold text-black/10">
                      {study.brand.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">
                    {study.brand}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">{study.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {study.tagline}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors group-hover:text-gold-dark">
                    View Case Study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground transition-colors hover:bg-background"
              aria-label="Close case study"
            >
              <X className="h-5 w-5" />
            </button>
            <div
              className={`flex h-32 items-center justify-center ${caseStudies[active].accent}`}
            >
              {caseStudies[active].logo ? (
                <div className="flex h-14 w-20 items-center justify-center rounded-lg border border-black/10 bg-white p-2">
                  <img
                    src={caseStudies[active].logo}
                    alt={`${caseStudies[active].brand} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>
              ) : (
                <span className="font-display text-4xl font-bold text-black/10">
                  {caseStudies[active].brand.charAt(0)}
                </span>
              )}
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">
                {caseStudies[active].brand}
              </p>
              <h3 className="mt-1 font-display text-xl font-bold">{caseStudies[active].title}</h3>

              <div className="mt-5">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground/60">
                  Challenge
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {caseStudies[active].challenge}
                </p>
              </div>

              <div className="mt-5">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground/60">
                  What I Worked On
                </h4>
                <ul className="mt-2 space-y-2">
                  {caseStudies[active].actions.map((action) => (
                    <li
                      key={action}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {action}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-xl bg-gold/10 p-4">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-gold-dark">
                  Result
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  {caseStudies[active].result}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
