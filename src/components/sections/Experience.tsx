import { Briefcase, CircleCheck as CheckCircle2, Video } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

type Experience = {
  organization: string;
  role: string;
  logo?: string;
  points: string[];
  featured?: boolean;
  tier: "primary" | "creative" | "additional";
};

const experiences: Experience[] = [
  {
    organization: "Gallery of Code",
    role: "Social Media & Community Management",
    logo: "/images/logos/image.png",
    tier: "primary",
    featured: true,
    points: [
      "Managed social media pages and maintained the brand voice",
      "Planned and created content for campaigns",
      "Drove community engagement and audience growth",
      "Produced creative content across formats and platforms",
    ],
  },
  {
    organization: "Renewables4Africa",
    role: "Social Media Management & Content Strategy",
    tier: "primary",
    featured: true,
    points: [
      "Managed social media for a sustainability-focused brand",
      "Developed content strategy and planned content around the brand's mission",
      "Created consistent social content and grew audience engagement",
      "Strengthened brand positioning across social platforms",
    ],
  },
  {
    organization: "Byomane",
    role: "Social Media Management & Content Creation",
    logo: "/images/logos/image copy 2.png",
    tier: "primary",
    featured: true,
    points: [
      "Led content strategy and content planning for the brand",
      "Developed Reel concepts and creative direction",
      "Managed day-to-day social media presence",
      "Grew audience engagement through consistent, intentional content",
    ],
  },
  {
    organization: "Google Developers Club, Nile University of Nigeria",
    role: "Head of Community Management",
    logo: "/images/logos/image copy 5.png",
    tier: "primary",
    points: [
      "Led community management for a student developer community",
      "Coordinated communication between members and leadership",
      "Supported events and drove audience participation",
      "Built and nurtured an active digital community",
    ],
  },
  {
    organization: "Kiddies Delight Store",
    role: "Content Shoot, Videography & Video Editing",
    logo: "/images/logos/image copy 4.png",
    tier: "creative",
    points: [
      "Planned and captured product content shoots",
      "Created engaging short-form video content for the brand",
      "Edited video assets for social media use",
      "Provided creative direction for product visuals",
    ],
  },
  {
    organization: "Skyline International Tourism and Hospitality Limited",
    role: "Call Center & Customer Support, IT Support",
    logo: "/images/logos/image copy 3.png",
    tier: "additional",
    points: [
      "Handled customer inquiries and call center communication",
      "Delivered clear, professional customer support",
      "Provided day-to-day technical support when needed",
    ],
  },
];

const tierLabels: Record<Experience["tier"], string> = {
  primary: "Social Media & Content Experience",
  creative: "Content & Videography Experience",
  additional: "Additional Professional Experience",
};

const tierOrder: Experience["tier"][] = ["primary", "creative", "additional"];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Experience</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold" />
          <p className="mt-4 text-muted-foreground">
            Real experience managing social media, content, and communities for real brands.
          </p>
        </AnimatedSection>

        <div className="space-y-12">
          {tierOrder.map((tier) => {
            const tierExperiences = experiences.filter((e) => e.tier === tier);
            if (tierExperiences.length === 0) return null;
            return (
              <div key={tier}>
                <AnimatedSection className="mb-6">
                  <h3 className="flex items-center gap-2 font-display text-lg font-bold uppercase tracking-wide text-foreground/70">
                    {tier === "creative" && <Video className="h-5 w-5 text-gold-dark" />}
                    {tier === "primary" && <Briefcase className="h-5 w-5 text-gold-dark" />}
                    {tierLabels[tier]}
                  </h3>
                </AnimatedSection>
                <div className="relative mx-auto max-w-3xl">
                  <div className="absolute bottom-0 left-6 top-0 w-px bg-border" />
                  {tierExperiences.map((exp, index) => (
                    <AnimatedSection
                      key={exp.organization}
                      delay={index * 100}
                      className="relative mb-8 pl-20 last:mb-0"
                    >
                      <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                        {tier === "creative" ? (
                          <Video className="h-5 w-5" />
                        ) : (
                          <Briefcase className="h-5 w-5" />
                        )}
                      </span>
                      <div
                        className={`rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg ${
                          exp.featured ? "ring-1 ring-gold/20" : ""
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0 flex-1">
                            <h4 className="font-display text-xl font-bold">{exp.organization}</h4>
                            <p className="mt-1 font-medium text-foreground/80">{exp.role}</p>
                          </div>
                          {exp.logo && (
                            <div className="flex h-10 w-14 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-white p-1">
                              <img
                                src={exp.logo}
                                alt={`${exp.organization} logo`}
                                className="h-full w-full object-contain"
                              />
                            </div>
                          )}
                        </div>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
