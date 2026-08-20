import { ArrowDown } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import profileImg from "@/assets/profile.png";

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

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-12 px-4 py-20 lg:flex-row lg:justify-between lg:px-8">
        <AnimatedSection className="max-w-2xl text-center lg:text-left">
          <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-dark">
            Social Media & Community Manager
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            Asher Okwong
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
            Helping brands build meaningful online communities, engage audiences, and turn
            conversations into loyal customers.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
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
              View Portfolio
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200} className="flex shrink-0 justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-gold/20 via-gold/5 to-transparent blur-2xl" />
            <img
              src={profileImg}
              alt="Asher Okwong professional headshot"
              width={1024}
              height={1024}
              className="relative h-72 w-72 rounded-full border-4 border-white object-cover shadow-2xl shadow-black/10 md:h-80 md:w-80 lg:h-96 lg:w-96"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
