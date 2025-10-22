"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';

type SkillsChartProps = {
  data: { name: string; level: number }[];
};

export function SkillsChart({ data }: SkillsChartProps) {
  return (
    <div className="h-[300px] w-full">
        <ChartContainer config={{}} className="h-full w-full">
            <BarChart
            data={data}
            layout="vertical"
            margin={{ left: 10, right: 10, top: 10, bottom: 10 }}
            >
            <XAxis type="number" hide />
            <YAxis
                dataKey="name"
                type="category"
                tickLine={false}
                axisLine={false}
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                width={120}
            />
            <Tooltip
                cursor={{ fill: 'hsl(var(--secondary))' }}
                content={<ChartTooltipContent 
                    indicator="dot"
                    labelKey="name" 
                    formatter={(value) => `${value}%`}
                />}
            />
            <Bar
                dataKey="level"
                radius={4}
                className="fill-primary"
            />
            </BarChart>
        </ChartContainer>
    </div>
  );
}
