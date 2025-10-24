import Link from "next/link";
import { Section, SectionHeader } from "@/components/section";
import { POWER_BI_REPORTS } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

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
          <Card key={report.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="font-headline text-xl">{report.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <CardDescription className="flex-grow">{report.description}</CardDescription>
              <div className="mt-4">
                <Button asChild variant="outline" size="sm">
                  <Link href={`/reports/${report.id}`}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Report
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
