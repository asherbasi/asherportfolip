import { AnimatedSection } from "@/components/AnimatedSection";
import socialImg from "@/assets/portfolio-social.png";
import flyerImg from "@/assets/portfolio-flyer.png";
import videoImg from "@/assets/portfolio-video.png";
import engagementImg from "@/assets/portfolio-engagement.png";

const portfolioItems = [
  {
    title: "Social Media Post",
    category: "Social Content",
    image: socialImg,
    alt: "Tech community social media post design",
    width: 1024,
    height: 1024,
  },
  {
    title: "Event Flyer",
    category: "Flyer Design",
    image: flyerImg,
    alt: "Premium black and gold event flyer",
    width: 1024,
    height: 1280,
  },
  {
    title: "Video Thumbnail",
    category: "Video Content",
    image: videoImg,
    alt: "Cinematic video thumbnail design",
    width: 1280,
    height: 720,
  },
  {
    title: "Engagement Analytics",
    category: "Growth Report",
    image: engagementImg,
    alt: "Social media engagement analytics dashboard",
    width: 1024,
    height: 768,
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Portfolio</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mt-4 text-muted-foreground">
            A selection of social posts, flyers, video thumbnails, and engagement highlights.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioItems.map((item, index) => (
            <AnimatedSection
              key={item.title}
              delay={index * 100}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <img
                src={item.image}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                  {item.category}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
