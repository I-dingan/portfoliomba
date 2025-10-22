import { Section, SectionHeader } from "@/components/section";
import { PROJECTS } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader 
        title="Featured Projects"
        description="A selection of projects that showcase my skills and passion."
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
