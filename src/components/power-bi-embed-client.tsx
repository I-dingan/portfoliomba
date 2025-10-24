'use client';

import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import type { POWER_BI_REPORTS } from '@/lib/data';

type PowerBiEmbedClientProps = {
    report: (typeof POWER_BI_REPORTS)[number];
};

export function PowerBiEmbedClient({ report }: PowerBiEmbedClientProps) {
    if (!report.embedUrl || !report.reportId) {
        return <div className="text-red-500">Power BI report configuration is missing.</div>;
    }

    return (
        <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-lg border bg-card shadow-lg pt-[125%] sm:pt-0 sm:h-[80vh]">
            <PowerBIEmbed
                embedConfig={{
                    type: 'report',
                    id: report.reportId,
                    embedUrl: report.embedUrl,
                    accessToken: '', // For RLS and other scenarios, you would fetch a token
                    tokenType: models.TokenType.Embed, // Use models.TokenType.Aad for SaaS embedding
                    settings: {
                        panes: {
                            filters: {
                                expanded: false,
                                visible: false
                            },
                            pageNavigation: {
                                visible: false
                            }
                        },
                        background: models.BackgroundType.Transparent,
                    }
                }}
                eventHandlers={
                    new Map([
                        ['error', function (event) { console.error(event.detail); }],
                    ])
                }
                cssClassName="absolute top-0 left-0 h-full w-full rounded-md border-0"
            />
        </div>
    );
}