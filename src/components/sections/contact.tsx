import { Section, SectionHeader } from "@/components/section";
import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <Section id="contact" className="bg-card">
      <SectionHeader 
        title="Get In Touch"
        description="Have a project in mind or just want to say hi? Feel free to reach out."
      />
      <div className="mx-auto max-w-xl">
        <ContactForm />
      </div>
    </Section>
  );
}
