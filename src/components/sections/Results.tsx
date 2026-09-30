import { TrendingUp, Target, BarChart3, Image as ImageIcon } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export function Results() {
  return (
    <section id="results" className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Results</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mt-4 text-muted-foreground">
            Real outcomes from social campaigns and content I&apos;ve managed.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="flex min-h-[280px] items-center justify-center bg-muted/30 p-8">
                <div className="flex flex-col items-center gap-3 text-muted-foreground">
                  <ImageIcon className="h-12 w-12" />
                  <p className="text-sm font-medium">Results screenshot</p>
                  <p className="text-xs text-muted-foreground/70">Upload coming soon</p>
                </div>
              </div>

              <div className="p-8">
                <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold-dark">
                  Case Study
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold">
                  MOPO Project, Tilk House (Contract)
                </h3>

                <div className="mt-6 space-y-5">
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Target className="h-4 w-4 text-gold" />
                      Challenge
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      MOPO needed a focused push to generate qualified leads quickly through social
                      media advertising.
                    </p>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <BarChart3 className="h-4 w-4 text-gold" />
                      What I did
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      Managed and optimised a paid social media campaign, planned and executed
                      supporting content, monitored performance and used insights to improve results.
                    </p>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <TrendingUp className="h-4 w-4 text-gold" />
                      Result
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      350+ leads in 2 weeks through targeted advertising.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
