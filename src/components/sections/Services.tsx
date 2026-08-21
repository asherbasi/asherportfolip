import {
  Users,
  Share2,
  MessageCircle,
  Headphones,
  PenLine,
  Calendar,
  Palette,
  Clapperboard,
  Camera,
  Wrench,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const skills = [
  {
    title: "Community Management",
    icon: Users,
    description: "Build, nurture, and grow engaged online communities around your brand.",
  },
  {
    title: "Social Media Management",
    icon: Share2,
    description: "Manage social channels with a consistent voice, strategy, and purpose.",
  },
  {
    title: "Customer Engagement",
    icon: MessageCircle,
    description: "Create thoughtful conversations that help audiences feel heard and valued.",
  },
  {
    title: "Videography",
    icon: Camera,
    description: "Capture clear, engaging visual stories for brands, products, and campaigns.",
  },
  {
    title: "Video Editing",
    icon: Clapperboard,
    description: "Shape footage into polished video content designed for social platforms.",
  },
  {
    title: "Content Creation",
    icon: PenLine,
    description: "Develop original posts, visuals, and copy that spark conversation.",
  },
  {
    title: "Customer Support",
    icon: Headphones,
    description: "Deliver friendly, professional support that turns inquiries into loyalty.",
  },
  {
    title: "IT Support",
    icon: Wrench,
    description: "Provide practical technical assistance and clear guidance when needed.",
  },
  {
    title: "Graphic Design",
    icon: Palette,
    description: "Create eye-catching visuals that communicate messages with clarity.",
  },
  {
    title: "Content Planning",
    icon: Calendar,
    description: "Plan strategic content calendars aligned with goals and audience needs.",
  },
];

export function Services() {
  return (
    <section id="skills" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Skills</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mt-4 text-muted-foreground">
            A focused set of social, creative, customer-facing, and technical skills.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skills.map((skill, index) => (
            <AnimatedSection
              key={skill.title}
              delay={index * 75}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-gold group-hover:text-black">
                <skill.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{skill.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{skill.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
