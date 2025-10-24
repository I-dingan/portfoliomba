import { Section, SectionHeader } from "@/components/section";

export function About() {
  return (
    <Section id="about" className="bg-card">
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeader 
          title="About Me"
          description="Blending software expertise with business analytics to solve real-world problems."
        />
        <div className="prose prose-lg mx-auto max-w-3xl text-left text-muted-foreground space-y-6">
          <p>
            Results-driven professional with a strong foundation in technical project management and analytics, adept at developing digital platforms that transform complex business challenges into scalable solutions.
          </p>
          <p>
            Proven experience leading cross-functional teams to deliver web and mobile products, automate workflows, and implement AI-driven innovations in fast-paced environments. Skilled in driving program execution, ensuring quality deliverables, tracking schedules, and proactively identifying risks to enable continuous improvement.
          </p>
        </div>
      </div>
    </Section>
  );
}
