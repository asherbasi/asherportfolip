import {
  Share2,
  Calendar,
  PenLine,
  Users,
  Clapperboard,
  Target,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const services = [
  {
    title: "Social Media Strategy",
    icon: Target,
    description: "Turn business goals into a practical social media and content strategy.",
  },
  {
    title: "Social Media Management",
    icon: Share2,
    description:
      "Manage social platforms consistently while maintaining the brand's voice, identity and goals.",
  },
  {
    title: "Content Strategy & Planning",
    icon: Calendar,
    description:
      "Develop content pillars, ideas and calendars that give brands a clear direction.",
  },
  {
    title: "Content Creation",
    icon: PenLine,
    description:
      "Create engaging social content including carousels, graphics, short-form videos and campaign content.",
  },
  {
    title: "Community Management",
    icon: Users,
    description:
      "Engage audiences, respond to conversations and help build an active online community.",
  },
  {
    title: "Short-form Video",
    icon: Clapperboard,
    description:
      "Create and edit Reels and other short-form content designed for social platforms.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            What I Can Do For Your Brand
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mt-4 text-muted-foreground">
            Outcome-focused social media and content services, built around your goals.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              delay={index * 75}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-gold group-hover:text-black">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
