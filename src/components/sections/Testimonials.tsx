import { Quote } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Testimonials</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mt-4 text-muted-foreground">
            Kind words from clients and collaborators. More coming soon.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2].map((_, index) => (
            <AnimatedSection
              key={index}
              delay={index * 100}
              className="flex flex-col items-center rounded-2xl border border-dashed border-border bg-muted/30 p-8 text-center"
            >
              <Quote className="mb-4 h-8 w-8 text-gold/50" />
              <p className="italic text-muted-foreground">
                &ldquo;Testimonial coming soon...&rdquo;
              </p>
              <div className="mt-4 h-1 w-16 rounded-full bg-gold/30" />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
