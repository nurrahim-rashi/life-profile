import { Bar, BarChart, CartesianGrid, XAxis, Tooltip } from "recharts";

import { ChartContainer, ChartTooltipContent } from "../ui/chart";

const chartData = [
  { class: "Reformer", bookings: 96 },
  { class: "Tower", bookings: 74 },
  { class: "Chair", bookings: 53 },
  { class: "Mat Pilates", bookings: 38 },
  { class: "Flexband", bookings: 38 },
];

const chartConfig = {
  bookings: {
    label: "Bookings",
    color: "var(--color-accent)",
  },
};

export default function ClassPopularityChart() {
  return (
    <div className="rounded-xl border bg-card p-6 text-card-foreground shadow">
      <h3 className="font-heading text-2xl font-medium">
        Most Popular Classes
      </h3>

      <ChartContainer config={chartConfig} className="h-[320px] w-full">
        <BarChart data={chartData}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />

          <XAxis
            dataKey="class"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
          />

          <Tooltip content={<ChartTooltipContent />} />

          <Bar
            dataKey="bookings"
            fill="var(--color-bookings)"
            radius={[12, 12, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
