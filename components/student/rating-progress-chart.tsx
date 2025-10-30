"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const data = [
  {
    month: "Jul '24",
    date: "2024-07",
    leetcode: 1520,
    codeforces: 1380,
    codechef: 1550,
    codingninjas: 1400,
    contests: {
      leetcode: "Weekly Contest 405",
      codeforces: "Div 2 Round 952",
      codechef: "Starters 142",
      codingninjas: "Weekly Contest 98",
    },
  },
  {
    month: "Aug '24",
    date: "2024-08",
    leetcode: 1580,
    codeforces: 1420,
    codechef: 1590,
    codingninjas: 1450,
    contests: {
      leetcode: "Weekly Contest 409",
      codeforces: "Div 2 Round 956",
      codechef: "Starters 146",
      codingninjas: "Weekly Contest 102",
    },
  },
  {
    month: "Sep '24",
    date: "2024-09",
    leetcode: 1620,
    codeforces: 1450,
    codechef: 1620,
    codingninjas: 1480,
    contests: {
      leetcode: "Weekly Contest 413",
      codeforces: "Div 2 Round 960",
      codechef: "Starters 150",
      codingninjas: "Weekly Contest 106",
    },
  },
  {
    month: "Oct '24",
    date: "2024-10",
    leetcode: 1650,
    codeforces: 1480,
    codechef: 1650,
    codingninjas: 1520,
    contests: {
      leetcode: "Weekly Contest 417",
      codeforces: "Div 2 Round 964",
      codechef: "Starters 154",
      codingninjas: "Weekly Contest 110",
    },
  },
  {
    month: "Nov '24",
    date: "2024-11",
    leetcode: 1700,
    codeforces: 1520,
    codechef: 1700,
    codingninjas: 1580,
    contests: {
      leetcode: "Weekly Contest 421",
      codeforces: "Div 2 Round 968",
      codechef: "Starters 158",
      codingninjas: "Weekly Contest 114",
    },
  },
  {
    month: "Dec '24",
    date: "2024-12",
    leetcode: 1750,
    codeforces: 1560,
    codechef: 1750,
    codingninjas: 1620,
    contests: {
      leetcode: "Weekly Contest 425",
      codeforces: "Div 2 Round 972",
      codechef: "Starters 162",
      codingninjas: "Weekly Contest 118",
    },
  },
  {
    month: "Jan '25",
    date: "2025-01",
    leetcode: 1820,
    codeforces: 1600,
    codechef: 1800,
    codingninjas: 1680,
    contests: {
      leetcode: "Weekly Contest 429",
      codeforces: "Div 2 Round 976",
      codechef: "Starters 166",
      codingninjas: "Weekly Contest 122",
    },
  },
  {
    month: "Feb '25",
    date: "2025-02",
    leetcode: 1880,
    codeforces: 1642,
    codechef: 1856,
    codingninjas: 1720,
    contests: {
      leetcode: "Weekly Contest 433",
      codeforces: "Div 2 Round 980",
      codechef: "Starters 170",
      codingninjas: "Weekly Contest 126",
    },
  },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const currentData = data.find((d) => d.month === label)
    const currentIndex = data.findIndex((d) => d.month === label)
    const previousData = currentIndex > 0 ? data[currentIndex - 1] : null

    return (
      <div className="rounded-lg border bg-card p-4 shadow-xl">
        <p className="mb-3 font-bold text-card-foreground">{label}</p>
        {payload.map((entry: any, index: number) => {
          const platform = entry.dataKey as keyof typeof currentData.contests
          const contestName = currentData?.contests[platform]
          const ratingChange = previousData
            ? entry.value - (previousData[platform as keyof typeof previousData] as number)
            : 0

          return (
            <div key={index} className="mb-2 space-y-1">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: entry.color }} />
                <span className="font-semibold" style={{ color: entry.color }}>
                  {entry.name}
                </span>
              </div>
              <p className="ml-5 text-sm text-muted-foreground">Rating: {entry.value}</p>
              {contestName && <p className="ml-5 text-xs text-muted-foreground">{contestName}</p>}
              {ratingChange !== 0 && (
                <p className={`ml-5 text-xs font-medium ${ratingChange > 0 ? "text-green-500" : "text-red-500"}`}>
                  {ratingChange > 0 ? "+" : ""}
                  {ratingChange}
                </p>
              )}
            </div>
          )
        })}
      </div>
    )
  }
  return null
}

export function RatingProgressChart(props: { seriesData?: typeof data }) {
  const { data: swrData } = useSWR<typeof data>(!props.seriesData ? "/api/student/rating-progress" : null, fetcher)
  const chartData = props.seriesData || swrData || data

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Rating Progress Over Time
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md bg-card/60 p-2">
          <ResponsiveContainer width="100%" height={450}>
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 28, bottom: 36 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--muted-foreground)" strokeOpacity={0.3} />
              <XAxis
                dataKey="month"
                tick={{ fill: "var(--foreground)", fontSize: 12 }}
                tickMargin={10}
                axisLine={{ stroke: "var(--border)" }}
                tickLine={{ stroke: "var(--border)" }}
                label={{
                  value: "Contest Timeline",
                  position: "insideBottom",
                  offset: -18,
                  style: { fill: "var(--foreground)", fontWeight: 600 },
                }}
              />
              <YAxis
                domain={["dataMin - 50", "dataMax + 50"]}
                tick={{ fill: "var(--foreground)", fontSize: 12 }}
                tickMargin={10}
                axisLine={{ stroke: "var(--border)" }}
                tickLine={{ stroke: "var(--border)" }}
                label={{
                  value: "Rating",
                  angle: -90,
                  position: "insideLeft",
                  style: { fill: "var(--foreground)", fontWeight: 600 },
                }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "var(--muted)", opacity: 0.25 }} />
              <Legend
                wrapperStyle={{ paddingTop: 16 }}
                iconType="circle"
                formatter={(v) => <span className="text-sm font-medium">{v}</span>}
              />
              <Line
                type="monotone"
                dataKey="leetcode"
                stroke="#FFA116"
                strokeWidth={3}
                name="LeetCode"
                dot={{ fill: "#FFA116", r: 5, strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 7, strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="codeforces"
                stroke="#00D4FF"
                strokeWidth={3}
                name="Codeforces"
                dot={{ fill: "#00D4FF", r: 5, strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 7, strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="codechef"
                stroke="#10B981"
                strokeWidth={3}
                name="CodeChef"
                dot={{ fill: "#10B981", r: 5, strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 7, strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="codingninjas"
                stroke="#EC4899"
                strokeWidth={3}
                name="Coding Ninjas"
                dot={{ fill: "#EC4899", r: 5, strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 7, strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export default RatingProgressChart
