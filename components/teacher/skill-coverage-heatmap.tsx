"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity } from "lucide-react"

export function SkillCoverageHeatmap() {
  const topics = [
    "Arrays",
    "Strings",
    "Trees",
    "Graphs",
    "DP",
    "Greedy",
    "Backtracking",
    "Math",
    "Sorting",
    "Searching",
  ]

  const students = ["Alice J.", "Bob S.", "Carol W.", "David B.", "Emma D."]

  // Mock data: skill coverage percentage (0-100)
  const heatmapData = [
    [92, 88, 85, 78, 82, 90, 75, 86, 94, 88],
    [85, 82, 78, 72, 75, 84, 68, 80, 88, 82],
    [90, 86, 88, 85, 80, 88, 82, 84, 92, 86],
    [78, 75, 72, 68, 70, 76, 65, 74, 80, 76],
    [95, 92, 90, 88, 86, 94, 85, 90, 96, 92],
  ]

  const getColor = (value: number) => {
    if (value >= 90) return "bg-primary"
    if (value >= 80) return "bg-primary/80"
    if (value >= 70) return "bg-primary/60"
    if (value >= 60) return "bg-primary/40"
    return "bg-primary/20"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Skill Coverage Heatmap
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <div className="flex gap-2">
              {/* Student names column */}
              <div className="flex flex-col gap-2">
                <div className="h-8" /> {/* Spacer for topic headers */}
                {students.map((student) => (
                  <div key={student} className="flex h-10 items-center text-sm font-medium">
                    {student}
                  </div>
                ))}
              </div>

              {/* Heatmap grid */}
              <div className="flex-1">
                <div className="flex gap-2">
                  {topics.map((topic, topicIndex) => (
                    <div key={topic} className="flex flex-col gap-2">
                      <div className="h-8 text-center text-xs font-medium">{topic}</div>
                      {heatmapData.map((studentData, studentIndex) => (
                        <div
                          key={`${studentIndex}-${topicIndex}`}
                          className={`flex h-10 w-16 items-center justify-center rounded text-xs font-medium text-white ${getColor(
                            studentData[topicIndex],
                          )}`}
                          title={`${students[studentIndex]} - ${topic}: ${studentData[topicIndex]}%`}
                        >
                          {studentData[topicIndex]}%
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 flex items-center justify-center gap-4 text-xs">
              <span className="text-muted-foreground">Coverage:</span>
              <div className="flex items-center gap-1">
                <div className="h-4 w-4 rounded bg-primary/20" />
                <span>60-69%</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-4 w-4 rounded bg-primary/40" />
                <span>70-79%</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-4 w-4 rounded bg-primary/60" />
                <span>80-89%</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-4 w-4 rounded bg-primary/80" />
                <span>90-94%</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-4 w-4 rounded bg-primary" />
                <span>95-100%</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
