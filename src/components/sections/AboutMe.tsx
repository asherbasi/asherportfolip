import { AnimatedSection } from "@/components/AnimatedSection";

export function AboutMe() {
  return (
    <section id="about" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <AnimatedSection className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-dark">A little about me</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">About Me</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
        </AnimatedSection>
        <AnimatedSection delay={100} className="mt-10 space-y-5 text-center text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            Hi, I&apos;m Asher, a Social Media Manager who helps brands grow online through content,
            community and paid campaigns. I currently manage social media for Byomane,
            Renewables4Africa and Gallery of Code, and I ran a paid campaign that generated 350+
            leads in two weeks.
          </p>
          <p>
            I previously served as Head of Community Management at Google Developers Club, Nile
            University of Nigeria.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
