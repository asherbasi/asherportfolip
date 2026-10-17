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
            Hi, I&apos;m Asher, a Social Media Manager and Content Creator who helps brands grow online
            through content creation, community management, and social media strategy. I have worked
            with Byomane, Renewables4Africa, and Gallery of Code to grow their socials. I also served
            as the social media and community manager on a paid campaign that generated 350+ leads
            for MOPO in just two weeks.
          </p>
          <p>
            Before that, I was Head of Community Management at Google Developers Club, Nile
            University of Nigeria.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
