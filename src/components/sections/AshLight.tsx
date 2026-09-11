import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export function AshLight() {
  return (
    <section id="ashlight" className="py-24">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <AnimatedSection>
          <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-dark">
            Building AshLight
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold md:text-4xl">
            AshLight — Giving your brand the spotlight.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I&apos;m also the founder of AshLight, a creative digital agency focused on helping
            brands get the attention they deserve.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-gold hover:text-gold-dark"
          >
            Visit AshLight
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
