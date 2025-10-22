import { Section, SectionHeader } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SKILLS } from "@/lib/data";
import { SkillsChart } from "@/components/skills-chart";

export function Skills() {
  return (
    <Section id="skills" className="bg-card">
      <SectionHeader 
        title="My Expertise"
        description="A blend of technical prowess and modern development methodologies."
      />
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <SkillsChart data={SKILLS.technical} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Management Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <SkillsChart data={SKILLS.management} />
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
