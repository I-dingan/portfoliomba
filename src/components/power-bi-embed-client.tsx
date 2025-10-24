"use client";

import React, { useState } from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models, Embed, Report } from "powerbi-client";

type PowerBiEmbedClientProps = {
  report: {
    reportId: string;
    embedUrl: string;
    title: string;
    accessToken?: string;
  };
};

export function PowerBiEmbedClient({ report }: PowerBiEmbedClientProps) {
  const [mobileAvailable, setMobileAvailable] = useState<boolean | null>(null);

  const handleEmbedded = async (embeddedComponent: Embed) => {
    // cast to Report to access report-specific methods
    const embeddedReport = embeddedComponent as Report;

    // Wait until the report is fully loaded
    embeddedReport.on("loaded", async () => {
      try {
        const pages = await embeddedReport.getPages();
        const hasMobile = await pages[0].hasLayout(models.LayoutType.MobilePortrait);

        setMobileAvailable(hasMobile);

        if (hasMobile) {
          console.log("✅ Mobile layout applied");
        } else {
          console.warn("⚠️ Mobile layout not available. Desktop layout will be shown.");
        }
      } catch (err) {
        console.error("Error checking mobile layout:", err);
        setMobileAvailable(false);
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
            layoutType: models.LayoutType.MobilePortrait, // always attempt mobile layout
            panes: { filters: { visible: false }, pageNavigation: { visible: false } },
            background: models.BackgroundType.Transparent,
          },
        }}
        getEmbeddedComponent={handleEmbedded} // callback to get report instance
        cssClassName="absolute top-0 left-0 h-full w-full border-0 rounded-md"
      />

      {/* Show mobile layout status */}
      {mobileAvailable !== null && (
        <div
          className={`mt-4 text-center font-medium ${
            mobileAvailable ? "text-green-600" : "text-red-600"
          }`}
        >
          {mobileAvailable
            ? "✅ Mobile layout available"
            : "⚠️ Mobile layout not available. Desktop version shown."}
        </div>
      )}
    </div>
  );
}
