'use client';

import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import type { POWER_BI_REPORTS } from '@/lib/data';

type PowerBIReportEmbedProps = {
  report: (typeof POWER_BI_REPORTS)[number];
};

export function PowerBIReportEmbed({ report }: PowerBIReportEmbedProps) {
  return (
    <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-lg border bg-card shadow-lg pt-[125%] sm:pt-0 sm:h-[80vh]">
      <PowerBIEmbed
        embedConfig={{
          type: 'report',
          id: report.reportId,
          embedUrl: report.embedUrl,
          accessToken: '', // For public reports, you can leave empty
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
          console.log('Report embedded:', embeddedReport);
        }}
      />
    </div>
  );
}
