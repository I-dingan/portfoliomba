import { Section, SectionHeader } from "@/components/section";
import { EDUCATION } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { School } from "lucide-react";

export function Education() {
  return (
    <Section id="education" className="bg-card">
      <SectionHeader 
        title="Education"
        description="My academic background."
      />
      <div className="grid gap-8 md:grid-cols-2">
        {EDUCATION.map((edu, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <School className="h-6 w-6" />
                </div>
                <div className="flex-1">
                    <CardTitle className="font-headline text-lg">{edu.degree}</CardTitle>
                    <CardDescription>
                        <p className="font-semibold">{edu.institution}</p>
                        <p className="text-muted-foreground">{edu.duration}</p>
                    </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}
