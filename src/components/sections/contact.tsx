import { Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/lib/data";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export function Contact() {
  const email = "ashwinsatheeshitsme@gmail.com";
  const phone = "+91-8075923412";
  const linkedin = SOCIAL_LINKS.find(l => l.name === 'LinkedIn');

  return (
    <Section id="contact" className="bg-card">
      <SectionHeader 
        title="Get In Touch"
        description="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."
      />
      <div className="mx-auto max-w-xl text-center">
        <div className="flex flex-col sm:flex-row justify-center gap-6 text-lg">
            <Button asChild variant="outline" className="flex-1">
                <Link href={`mailto:${email}`}>
                    <Mail className="mr-2 h-5 w-5" />
                    {email}
                </Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
                <Link href={`tel:${phone.replace(/-/g, '')}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {phone}
                </Link>
            </Button>
        </div>
        <div className="mt-8 flex justify-center gap-4">
            {SOCIAL_LINKS.map((social) => (
            <Button asChild key={social.name} variant="ghost" size="icon">
              <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                <social.icon className="h-7 w-7 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </Section>
  );
}
