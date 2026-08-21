import { ArrowUpRight, Instagram, Play } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

type Project = {
  title: string;
  description: string;
  category: string;
  platform?: string;
  accent: string;
  mark: string;
  href: string;
  cta: string;
  image?: string;
};

const portfolioItems: Project[] = [
  {
    title: "Carousel for Gallery of Code",
    description: "A multi-slide carousel created for a Gallery of Code program and its audience.",
    category: "Social Content",
    accent: "bg-[#e4e3df]",
    mark: "01",
    href: "https://www.instagram.com/p/DN0gzVnWPaj/?img_index=1&igsh=MXNwMHAycmduZm1rYQ==",
    cta: "View Project",
    image: "/images/portfolio/image copy 3.png",
  },
  {
    title: "Brand Storytelling",
    description: "A visual storytelling post created to connect Gallery of Code with its audience.",
    category: "Content Creation",
    accent: "bg-[#dfe4df]",
    mark: "02",
    href: "https://www.instagram.com/p/DOrM8TpDLch/?igsh=dTBhYnJyZG5oNnlr",
    cta: "View Project",
    image: "/images/portfolio/image copy 2.png",
  },
  {
    title: "Brand Storytelling",
    description: "A bold brand story designed to communicate an idea through strong visual direction.",
    category: "Content Creation",
    accent: "bg-[#e8dfc9]",
    mark: "03",
    href: "https://www.instagram.com/p/DQhBOX5DI3x/?igsh=dTM0YThuZTM2NGRl",
    cta: "View Project",
    image: "/images/portfolio/image copy.png",
  },
  {
    title: "GDG Community Event",
    description: "Event coverage highlighting the Git and GitHub Workshop community experience.",
    category: "Community Engagement",
    accent: "bg-[#d8e1e3]",
    mark: "04",
    href: "https://www.instagram.com/p/DQtUeubDGTR/?igsi=encwbnlxeWpwem8y",
    cta: "View Project",
    image: "/images/portfolio/image.png",
  },
  {
    title: "Edited Video for Product Shoot",
    description: "A short-form product edit shaped for clear presentation and social engagement.",
    category: "Video Editing",
    platform: "Instagram",
    accent: "bg-[#dcd3e3]",
    mark: "05",
    href: "https://www.instagram.com/reel/DcRp55TIne7/?igsi=M3p1bHFkbTVkb2w4",
    cta: "View Edit",
  },
  {
    title: "Edited Video for Product Shoot",
    description: "A polished product video edit focused on rhythm, transitions, and visual clarity.",
    category: "Video Editing",
    platform: "Instagram",
    accent: "bg-[#d3dce3]",
    mark: "06",
    href: "https://www.instagram.com/reel/DcRlU8Xoorm/?igsi=dHFxM3Q5MGl4dTlq",
    cta: "View Edit",
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
            Selected social content, community campaigns, and video editing highlights.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <AnimatedSection key={`${item.title}-${item.mark}`} delay={index * 80}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className={`relative aspect-[4/3] overflow-hidden ${item.accent}`}>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={`${item.title} project cover`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <span className="absolute -right-4 -top-12 font-display text-[12rem] font-bold leading-none text-black/5 transition-transform duration-500 group-hover:scale-110">
                        {item.mark}
                      </span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/70 shadow-sm transition-transform duration-300 group-hover:scale-110">
                          <Play className="h-6 w-6 translate-x-0.5 fill-black text-black" />
                        </div>
                      </div>
                    </>
                  )}
                  <span className="absolute left-6 top-6 text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
                    Asher Okwong
                  </span>
                </div>
                <div className="flex flex-1 flex-col border-t border-border bg-card p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">
                      {item.category}
                    </p>
                    {item.platform && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                        <Instagram className="h-3 w-3" />
                        {item.platform}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors group-hover:text-gold-dark">
                    {item.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
