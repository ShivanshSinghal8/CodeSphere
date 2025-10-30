"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Cell } from "recharts"
import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const topicColorMap: Record<string, string> = {
  Arrays: "#00BFFF", // light blue
  Strings: "#9370DB", // purple
  Trees: "#32CD32", // green
  Graphs: "#FFD700", // gold
  DP: "#FF69B4", // pink
  Greedy: "#FF4500", // orange-red
  Backtracking: "#FFA500", // orange
  Math: "#00CED1", // teal
}

function lighten(hex: string, amount = 0.2) {
  const c = hex.replace("#", "")
  const num = Number.parseInt(c, 16)
  const r = Math.min(255, Math.round(((num >> 16) & 0xff) + 255 * amount))
  const g = Math.min(255, Math.round(((num >> 8) & 0xff) + 255 * amount))
  const b = Math.min(255, Math.round((num & 0xff) + 255 * amount))
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`
}

const data = [
  { topic: "Arrays", strength: 92, solved: 145, color: topicColorMap.Arrays },
  { topic: "Strings", strength: 88, solved: 98, color: topicColorMap.Strings },
  { topic: "Trees", strength: 85, solved: 76, color: topicColorMap.Trees },
  { topic: "Graphs", strength: 78, solved: 53, color: topicColorMap.Graphs },
  { topic: "DP", strength: 82, solved: 67, color: topicColorMap.DP },
  { topic: "Greedy", strength: 90, solved: 112, color: topicColorMap.Greedy },
  { topic: "Backtracking", strength: 75, solved: 42, color: topicColorMap.Backtracking },
  { topic: "Math", strength: 86, solved: 89, color: topicColorMap.Math },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="rounded-lg border border-muted-foreground/40 bg-[#1b1d29] text-foreground p-3 shadow-lg">
        <p className="mb-1 font-bold" style={{ color: data.color }}>
          {data.topic}
        </p>
        <p className="text-sm text-muted-foreground">
          Strength: <span className="font-semibold text-foreground">{data.strength}%</span>
        </p>
        <p className="text-sm text-muted-foreground">
          Solved: <span className="font-semibold text-foreground">{data.solved}</span>
        </p>
      </div>
    )
  }
  return null
}

export function TopicStrengthsChart(props: { data?: typeof data }) {
  const { data: swrData } = useSWR<typeof data>(!props.data ? "/api/student/topic-strengths" : null, fetcher)
  const incoming = props.data || swrData || data
  const chartData = incoming.map((d) => ({
    ...d,
    color: d.color || topicColorMap[d.topic] || "#00BFFF",
  }))

  const renderColoredTick = (tickProps: any) => {
    const { x, y, payload } = tickProps
    const entry = chartData.find((d) => d.topic === payload?.value)
    const fill = entry?.color || "#ddd"
    return (
      <g transform={`translate(${x},${y})`}>
        <text dy={12} dx={-6} transform="rotate(-45)" textAnchor="end" fill={fill} fontSize={12} fontWeight={600}>
          {payload?.value}
        </text>
      </g>
    )
  }

  return (
    <Card className="bg-[#0e111a] border border-border/30 shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <Target className="h-5 w-5 text-primary" />
          Topic-wise Strengths
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={420}>
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 28, bottom: 88 }}>
            <defs>
              {chartData.map((entry: any) => {
                const id = `grad-${entry.topic.replace(/\s+/g, "-").toLowerCase()}`
                return (
                  <linearGradient key={id} id={id} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={lighten(entry.color, 0.15)} />
                    <stop offset="100%" stopColor={entry.color} />
                  </linearGradient>
                )
              })}
            </defs>

            <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
            <XAxis
              dataKey="topic"
              tick={renderColoredTick}
              height={80}
              interval={0}
              axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
              tickLine={{ stroke: "rgba(255,255,255,0.2)" }}
            />
            <YAxis
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              tick={{ fill: "#ccc", fontSize: 12, fontWeight: 600 }}
              axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
              tickLine={{ stroke: "rgba(255,255,255,0.2)" }}
              label={{
                value: "Strength (%)",
                angle: -90,
                position: "insideLeft",
                style: { fill: "#ccc", fontWeight: 700 },
              }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.08)" }} />
            <Bar dataKey="strength" radius={[8, 8, 0, 0]} maxBarSize={60}>
              {chartData.map((entry: any, index: number) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} strokeOpacity={0.9} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default TopicStrengthsChart
