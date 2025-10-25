"use client";

import React from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";

type PowerBiEmbedClientProps = {
  report: {
    reportId: string;
    embedUrl: string;
    title: string;
    accessToken?: string;
  };
};

export function PowerBiEmbedClient({ report }: PowerBiEmbedClientProps) {
  return (
    <div className="relative w-full aspect-[16/9] max-w-4xl mx-auto overflow-hidden rounded-lg border bg-card shadow-lg">
      <PowerBIEmbed
        embedConfig={{
          type: "report",
          id: report.reportId,
          embedUrl: report.embedUrl,
          accessToken: report.accessToken || "",
          tokenType: models.TokenType.Embed,
          settings: {
            panes: {
              filters: { visible: false },
              pageNavigation: { visible: false },
            },
            background: models.BackgroundType.Transparent,
          },
        }}
        cssClassName="absolute top-0 left-0 h-full w-full border-0 rounded-md"
      />
    </div>
  );
}
