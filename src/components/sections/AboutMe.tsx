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
          <p>Hi, I’m Asher. I’m a Social Media and Community Manager with experience helping brands and communities communicate, engage, and grow online.</p>
          <p>I’ve managed social media for organizations including Gallery of Code, currently support Byomane&apos;s social media presence, and previously served as Head of Community Management at Google Developers Club, Nile University of Nigeria.</p>
          <p>I enjoy being the person behind the conversations — responding to audiences, understanding what they need, maintaining a brand&apos;s voice, and making sure the right people get connected.</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
