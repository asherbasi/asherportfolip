import { AnimatedSection } from "@/components/AnimatedSection";

const pillars = [
  "Social media strategy",
  "Content creation",
  "Community management",
  "Short-form video",
  "Audience understanding",
  "Data & analytics",
];

export function AboutMe() {
  return (
    <section id="about" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <AnimatedSection className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-dark">
            A little about me
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">About Me</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
        </AnimatedSection>
        <AnimatedSection
          delay={100}
          className="mt-10 space-y-5 text-center text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          <p>
            I&apos;m Asher — a Social Media Manager and Content Strategist who helps brands show up
            online with intention. I&apos;ve managed social media for organizations including Gallery
            of Code, Renewables4Africa, and Byomane, and led community management at Google
            Developers Club, Nile University of Nigeria.
          </p>
          <p>
            I combine social media strategy, content creation, community management, and short-form
            video with a creative, audience-first mindset. I care about understanding the brand,
            understanding the audience, and creating work that achieves a real objective — not just
            posting for the sake of it.
          </p>
          <p>
            I don&apos;t just want to post content. I want to understand the brand, understand the
            audience, create intentionally, and use social media to achieve a real objective.
          </p>
          <p>
            I&apos;m currently building <span className="font-semibold text-foreground">AshLight</span>,
            my creative digital agency focused on helping brands get the attention they deserve. My
            background in software engineering and AI is an added advantage — it helps me think
            critically, use data, and work efficiently with modern tools.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200} className="mt-10">
          <div className="flex flex-wrap justify-center gap-3">
            {pillars.map((pillar) => (
              <span
                key={pillar}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground/80"
              >
                {pillar}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
