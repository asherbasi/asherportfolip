import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const portfolioItems = [
  {
    title: "Social Media Campaign",
    category: "Social Content",
    accent: "bg-[#e8dfc9]",
    mark: "01",
    href: "https://www.instagram.com/p/DQhBOX5DI3x/?igsh=dTM0YThuZTM2NGRl",
  },
  {
    title: "Brand Storytelling Post",
    category: "Content Creation",
    accent: "bg-[#dfe4df]",
    mark: "02",
    href: "https://www.instagram.com/p/DOrM8TpDLch/?igsh=dTBhYnJyZG5oNnlr",
  },
  {
    title: "Carousel Content",
    category: "Social Content",
    accent: "bg-[#e4e3df]",
    mark: "03",
    href: "https://www.instagram.com/p/DN0gzVnWPaj/?img_index=1&igsh=MXNwMHAycmduZm1rYQ==",
  },
  {
    title: "GDG Community Event",
    category: "Community Engagement",
    accent: "bg-[#d8e1e3]",
    mark: "04",
    href: "https://www.instagram.com/p/DQtUeubDGTR/?igsi=encwbnlxeWpwem8y",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Works</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mt-4 text-muted-foreground">
            Selected social content, community campaigns, and event highlights.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioItems.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 100}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className={`relative aspect-[4/3] overflow-hidden ${item.accent}`}>
                  <span className="absolute -right-4 -top-12 font-display text-[12rem] font-bold leading-none text-black/5 transition-transform duration-500 group-hover:scale-110">
                    {item.mark}
                  </span>
                  <div className="absolute bottom-6 left-6 h-16 w-16 rounded-full border border-black/15 bg-white/45" />
                  <div className="absolute bottom-10 left-10 h-8 w-8 rounded-full bg-gold/80" />
                  <span className="absolute left-6 top-6 text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
                    Asher Okwong
                  </span>
                </div>
                <div className="border-t border-border bg-card p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">
                    {item.category}
                  </p>
                  <h3 className="mt-1 flex items-center justify-between gap-1 text-lg font-semibold">
                    {item.title}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </h3>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
