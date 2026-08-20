import {
  Users,
  Share2,
  MessageCircle,
  Headphones,
  Route,
  Calendar,
  Palette,
  Clapperboard,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const services = [
  {
    title: "Community Management",
    icon: Users,
    description: "Build, nurture, and grow engaged online communities around your brand.",
  },
  {
    title: "Social Media Management",
    icon: Share2,
    description: "End-to-end management of social channels to boost visibility and trust.",
  },
  {
    title: "Comment & DM Management",
    icon: MessageCircle,
    description: "Respond promptly to comments and messages to keep audiences valued.",
  },
  {
    title: "Customer Support",
    icon: Headphones,
    description: "Friendly, professional support that turns inquiries into loyalty.",
  },
  {
    title: "Content Creation",
    icon: Route,
    description: "Original posts, visuals, and copy crafted to spark conversation.",
  },

  {
    title: "Content Planning",
    icon: Calendar,
    description: "Strategic content calendars aligned with your goals and audience.",
  },
  {
    title: "Graphic Design",
    icon: Palette,
    description: "Eye-catching visuals that communicate your message with clarity.",
  },
  {
    title: "Video Editing",
    icon: Clapperboard,
    description: "Polished video content optimized for engagement across platforms.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Services</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mt-4 text-muted-foreground">
            A full suite of social and community solutions tailored to help your brand stand out.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              delay={index * 100}
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
