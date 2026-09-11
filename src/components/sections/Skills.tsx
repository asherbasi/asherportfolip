import { AnimatedSection } from "@/components/AnimatedSection";

const skillGroups = [
  {
    title: "Core Skills",
    skills: [
      "Social Media Strategy",
      "Social Media Management",
      "Content Strategy",
      "Content Planning",
      "Content Creation",
      "Community Management",
      "Short-form Video",
      "Social Media Analytics",
    ],
  },
  {
    title: "Creative Skills",
    skills: ["Video Editing", "Videography", "Graphic Design", "Copywriting"],
  },
  {
    title: "Additional Skills",
    skills: [
      "Customer Engagement",
      "Customer Support",
      "AI Tools",
      "Automation",
      "Technology",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Skills</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mt-4 text-muted-foreground">
            Social media and content first — with creative and technical skills that support the
            work.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <AnimatedSection
              key={group.title}
              delay={index * 100}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="font-display text-lg font-bold text-gold-dark">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                      index === 0
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-background text-foreground/80"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
