import { Section, SectionHeader } from "@/components/section";

export function About() {
  return (
    <Section id="about" className="bg-card">
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeader 
          title="About Me"
          description="A developer driven by passion and precision."
        />
        <div className="prose prose-lg mx-auto max-w-3xl text-left text-muted-foreground space-y-6">
          <p>
            I am a dedicated Full-Stack Developer and DevOps enthusiast with a proven track record of designing, developing, and deploying high-quality software solutions. My expertise lies in bridging the gap between development and operations, fostering a culture of collaboration and continuous improvement.
          </p>
          <p>
            With a deep understanding of Agile and Scrum methodologies, I excel in fast-paced environments, ensuring that projects are delivered on time and within scope. My proficiency in building and managing CI/CD pipelines has enabled teams to automate testing and deployment, significantly reducing time-to-market and enhancing product reliability. I am committed to writing clean, maintainable code and leveraging automation to build scalable and resilient systems.
          </p>
        </div>
      </div>
    </Section>
  );
}
