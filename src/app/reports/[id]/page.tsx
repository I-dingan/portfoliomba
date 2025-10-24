
import { POWER_BI_REPORTS } from "@/lib/data";
import { notFound } from "next/navigation";
import { Section, SectionHeader } from "@/components/section";
import { PowerBiEmbedClient } from "@/components/power-bi-embed-client";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <Section id={report.id}>
          <SectionHeader title={report.title} description={report.description} />
          <div className="mt-12">
            <PowerBiEmbedClient report={report} />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
