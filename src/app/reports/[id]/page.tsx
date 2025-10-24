import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { POWER_BI_REPORTS } from "@/lib/data";
import { notFound } from "next/navigation";
import { Section, SectionHeader } from "@/components/section";

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
            <div className="mx-auto max-w-6xl">
                <div className="aspect-video w-full rounded-lg border bg-card shadow-lg">
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
