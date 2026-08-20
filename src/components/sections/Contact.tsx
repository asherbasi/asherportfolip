import { Mail, Linkedin, Instagram, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const contacts = [
  {
    label: "Email",
    value: "imaabasiokwong8@gmail.com",
    href: "mailto:imaabasiokwong8@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Ima - Abasi Asher Okwong",
    href: "https://www.linkedin.com/in/ima-abasi-asher-okwong",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Instagram",
    value: "@asher3in1",
    href: "https://instagram.com/asher3in1",
    icon: Instagram,
    external: true,
  },
  {
    label: "WhatsApp",
    value: "08097431718",
    href: "https://wa.me/2348097431718",
    icon: Phone,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-primary py-24 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-primary-foreground/70">
            Ready to grow your community? Let&apos;s start a conversation.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((contact, index) => (
            <AnimatedSection key={contact.label} delay={index * 100}>
              <a
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col items-center rounded-2xl bg-primary-foreground/10 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground/20"
              >
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-black transition-transform group-hover:scale-110">
                  <contact.icon className="h-6 w-6" />
                </span>
                <h3 className="font-semibold">{contact.label}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70 group-hover:text-primary-foreground">
                  {contact.value}
                </p>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
