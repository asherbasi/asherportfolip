import { Briefcase, CircleCheck as CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const experiences = [
  {
    organization: "Byomane",
    role: "Social Media Manager",
    logo: "/images/logos/image copy 2.png",
    points: [
      "Build growth strategies grounded in audience research",
      "Plan and publish content that drives awareness, engagement and enquiries",
      "Track performance and adjust content direction",
    ],
  },
  {
    organization: "MOPO Project, Tilk House",
    role: "Social Media Manager (Contract)",
    logo: "/images/logos/placeholder-mopo.png",
    points: [
      "Ran a paid social campaign that generated 350+ leads in two weeks",
      "Planned and executed supporting content",
      "Used performance data to improve results",
    ],
  },
  {
    organization: "Renewables4Africa",
    role: "Social Media Manager",
    logo: "/images/logos/image copy 6.png",
    points: [
      "Manage social for a pan-African renewable energy platform",
      "Turn technical clean energy topics into accessible educational content",
      "Grow a community of energy professionals and advocates",
    ],
  },
  {
    organization: "Gallery of Code",
    role: "Social Media Manager",
    logo: "/images/logos/image.png",
    points: [
      "Manage all social channels for Africa's first transdisciplinary design lab",
      "Led digital content for the EU-partnered AI + Arts Week",
      "Turn AI, IoT and robotics topics into engaging stories",
      "Produce monthly analytics reports",
    ],
  },
  {
    organization: "Google Developers Club, Nile University of Nigeria",
    role: "Head of Community Management",
    logo: "/images/logos/image copy 5.png",
    points: [
      "Managed community engagement across student developers",
      "Coordinated communication between members and leadership",
      "Supported events and drove participation",
    ],
  },
  {
    organization: "Kiddies Delight Store",
    role: "Content Shoot, Videography & Video Editing",
    logo: "/images/logos/image copy 4.png",
    points: [
      "Planned and captured product content shoots",
      "Created engaging video content for the brand",
      "Edited video assets for social media use",
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
            A track record of managing communities, creating content, supporting customers, and solving problems.
          </p>
        </AnimatedSection>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-border" />
          {experiences.map((exp, index) => (
            <AnimatedSection
              key={exp.organization}
              delay={index * 100}
              className="relative mb-10 pl-20 last:mb-0"
            >
              <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                <Briefcase className="h-5 w-5" />
              </span>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl font-bold">{exp.organization}</h3>
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
                    <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
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
