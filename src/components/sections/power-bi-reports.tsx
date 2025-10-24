
import Link from "next/link";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/section";
import { POWER_BI_REPORTS } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function PowerBiReports() {
  if (POWER_BI_REPORTS.length === 0) {
    return null;
  }

  return (
    <Section id="power-bi-reports">
      <SectionHeader
        title="Power BI Dashboards"
        description="A showcase of my interactive Power BI reports."
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {POWER_BI_REPORTS.map((report) => (
          <Link key={report.id} href={`/reports/${report.id}`} className="group block">
            <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
              <CardHeader>
                <div className="aspect-video relative">
                  <Image
                    src={report.image.imageUrl}
                    alt={report.image.description}
                    fill
                    className="object-cover rounded-md"
                    data-ai-hint={report.image.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <CardTitle className="font-headline text-xl mb-2">{report.title}</CardTitle>
                <CardDescription className="flex-grow">{report.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
