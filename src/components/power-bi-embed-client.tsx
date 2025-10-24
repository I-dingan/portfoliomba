"use client";

import React, { useRef, useEffect, useState } from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models, Report } from "powerbi-client";

type PowerBiEmbedClientProps = {
  report: {
    reportId: string;
    embedUrl: string;
    title: string;
    accessToken?: string;
  };
};

export function PowerBiEmbedClient({ report }: PowerBiEmbedClientProps) {
  const [layoutAvailable, setLayoutAvailable] = useState(false);

  const handleEmbedded = (embeddedReport: Report) => {
    embeddedReport.getPages().then((pages) => {
      // Check first page for mobile layout
      if (pages.length > 0) {
        pages[0].hasLayout(models.LayoutType.MobilePortrait).then((hasMobile) => {
          setLayoutAvailable(hasMobile);
          if (!hasMobile) {
            console.warn("Mobile layout not available, falling back to desktop layout.");
          }
        });
      }
    });
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg border bg-card shadow-lg pt-[125%]">
      <PowerBIEmbed
        embedConfig={{
          type: "report",
          id: report.reportId,
          embedUrl: report.embedUrl,
          accessToken: report.accessToken || "",
          tokenType: models.TokenType.Embed,
          settings: {
            layoutType: layoutAvailable
              ? models.LayoutType.MobilePortrait
              : models.LayoutType.MobileLandscape, // fallback
            panes: {
              filters: { visible: false },
              pageNavigation: { visible: false },
            },
            background: models.BackgroundType.Transparent,
          },
        }}
        cssClassName="absolute top-0 left-0 h-full w-full border-0 rounded-md"
        getEmbeddedComponent={handleEmbedded}
      />
    </div>
  );
}
