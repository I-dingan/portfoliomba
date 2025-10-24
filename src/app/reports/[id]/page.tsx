import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { POWER_BI_REPORTS } from "@/lib/data";
import { notFound } from "next/navigation";
import { Section, SectionHeader } from "@/components/section";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";

type ReportPageProps = {
  params: {
    id: string;
  };
};

export default function ReportPage({ params }: ReportPageProps) {
  const report = POWER_BI_REPORTS.find((r) => r.id === params.id);

  if (!report) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Section id="report-details" className="py-12 md:py-20">
          <SectionHeader
            title={report.title}
            description={report.description}
          />

          {/* Mobile Layout Embed */}
          <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-lg border bg-card shadow-lg pt-[125%] sm:pt-0 sm:h-[80vh]">
            <PowerBIEmbed
              embedConfig={{
                type: "report",
                id: report.reportId || "YOUR_REPORT_ID",
                embedUrl: report.embedUrl,
                accessToken: report.accessToken || "", // For public reports, you can leave empty
                tokenType: models.TokenType.Embed, // Still required by SDK
                settings: {
                  layoutType: models.LayoutType.MobilePortrait, // Forces mobile layout on smaller screens
                  panes: {
                    filters: { visible: false },
                    pageNavigation: { visible: false }, // optional
                  },
                  background: models.BackgroundType.Transparent,
                },
              }}
              cssClassName="absolute top-0 left-0 h-full w-full rounded-md border-0"
              getEmbeddedComponent={(embeddedReport) => {
                console.log("Report embedded:", embeddedReport);
              }}
            />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return POWER_BI_REPORTS.map((report) => ({
    id: report.id,
  }));
}
