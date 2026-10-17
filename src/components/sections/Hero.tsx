import { ArrowDown } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at top right, oklch(0.88 0.1 85 / 0.25), transparent 45%)",
        }}
      />

      <div className="mx-auto w-full max-w-4xl px-4 py-20 text-center lg:px-8">
        <AnimatedSection>
          <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-dark">
            Social Media Manager / Content Creator
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            Asher Okwong
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I help brands find their voice online and build communities that reflect the brand. Through social media management, content creation, community management, and video editing, I turn scattered attention into real, measurable leads, combining data-driven insight with storytelling that feels human.
          </p>
          <p className="mt-5 text-sm font-medium tracking-wide text-foreground/70">
            Social Media Management • Content Strategy • Community Management
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              Contact Me
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-gold hover:text-gold-dark"
            >
              View Works
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center rounded-full bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold-dark">
              350+ leads in 2 weeks
            </span>
            <span className="inline-flex items-center rounded-full bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold-dark">
              4 brands managed
            </span>
            <span className="inline-flex items-center rounded-full bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold-dark">
              Community-driven growth
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
