import { Briefcase, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const experiences = [
  {
    organization: "Google Developers Club, Nile University of Nigeria",
    role: "Head of Community Management",
    period: "Past",
    points: [
      "Managed community engagement across student developers",
      "Coordinated communication between members and leadership",
      "Supported events and drove participation",
    ],
  },
  {
    organization: "Gallery of Code",
    role: "Social Media Manager",
    period: "Past",
    points: [
      "Managed social media pages and brand voice",
      "Planned and created content for campaigns",
      "Engaged audiences and grew online presence",
    ],
  },
  {
    organization: "Renewables4Africa",
    role: "Social Media Manager",
    period: "Past",
    points: [
      "Managed brand communication and messaging",
      "Created content for renewable energy awareness",
      "Increased audience engagement and reach",
    ],
  },
  {
    organization: "Byomane",
    role: "Social Media Management",
    period: "Current",
    points: [
      "Content strategist for brand storytelling",
      "Audience engagement and community growth",
      "Day-to-day social media support",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Experience</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mt-4 text-muted-foreground">
            A track record of managing communities, creating content, and driving engagement.
          </p>
        </AnimatedSection>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
          {experiences.map((exp, index) => (
            <AnimatedSection
              key={exp.organization}
              delay={index * 100}
              className="relative mb-10 pl-20"
            >
              <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                <Briefcase className="h-5 w-5" />
              </span>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-display text-xl font-bold">{exp.organization}</h3>
                  <span className="w-fit rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-dark">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-1 font-medium text-foreground/80">{exp.role}</p>
                <ul className="mt-4 space-y-2">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
