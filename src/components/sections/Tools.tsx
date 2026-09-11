import { Instagram, Facebook, Linkedin, Music2, Scissors, Palette, BarChart3, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const tools = [
  { name: "Instagram", icon: Instagram },
  { name: "TikTok", icon: Music2 },
  { name: "Facebook", icon: Facebook },
  { name: "LinkedIn", icon: Linkedin },
  { name: "CapCut", icon: Scissors },
  { name: "Canva", icon: Palette },
  { name: "Meta Business Suite", icon: BarChart3 },
  { name: "AI & Automation Tools", icon: Sparkles },
];

export function Tools() {
  return (
    <section id="tools" className="py-20">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <AnimatedSection className="mb-10 text-center">
          <h2 className="font-display text-2xl font-bold md:text-3xl">Tools I Work With</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground/80 shadow-sm transition-all hover:border-gold/30 hover:shadow-md"
              >
                <tool.icon className="h-4 w-4 text-gold-dark" />
                {tool.name}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
