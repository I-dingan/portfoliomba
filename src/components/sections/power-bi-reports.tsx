import { Section, SectionHeader } from "@/components/section";
import { POWER_BI_REPORTS } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      <div className="grid grid-cols-1 gap-8">
        {POWER_BI_REPORTS.map((report) => (
          <Card key={report.id} className="overflow-hidden">
            <CardHeader>
              <CardTitle className="font-headline text-xl">{report.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full rounded-lg border">
                <iframe
                  title={report.title}
                  width="100%"
                  height="100%"
                  src={report.embedUrl}
                  frameBorder="0"
                  allowFullScreen={true}
                  className="rounded-md"
                ></iframe>
              </div>
              <p className="mt-4 text-muted-foreground text-sm">{report.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
