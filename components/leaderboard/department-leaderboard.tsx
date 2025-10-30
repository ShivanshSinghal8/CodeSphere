"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Trophy } from "lucide-react"

const departmentData = {
  cs: {
    name: "Computer Science",
    students: [
      { rank: 1, name: "Emma Davis", university: "MIT University", score: 2912, avatar: "ED" },
      { rank: 2, name: "Alice Johnson", university: "Stanford University", score: 2847, avatar: "AJ" },
      { rank: 3, name: "Bob Smith", university: "Harvard University", score: 2654, avatar: "BS" },
      { rank: 4, name: "Sarah Wilson", university: "MIT University", score: 2398, avatar: "SW" },
      { rank: 5, name: "Lisa Anderson", university: "Stanford University", score: 2289, avatar: "LA" },
    ],
  },
  it: {
    name: "Information Technology",
    students: [
      { rank: 1, name: "Carol White", university: "MIT University", score: 2789, avatar: "CW" },
      { rank: 2, name: "David Brown", university: "Stanford University", score: 2456, avatar: "DB" },
      { rank: 3, name: "Michael Chen", university: "Harvard University", score: 2345, avatar: "MC" },
      { rank: 4, name: "Rachel Green", university: "MIT University", score: 2089, avatar: "RG" },
      { rank: 5, name: "Monica Geller", university: "Stanford University", score: 2067, avatar: "MG" },
    ],
  },
}

export function DepartmentLeaderboard() {
  const [selectedDepartment, setSelectedDepartment] = useState<keyof typeof departmentData>("cs")

  const currentDepartment = departmentData[selectedDepartment]

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle>Top Performers by Department</CardTitle>
          <Select
            value={selectedDepartment}
            onValueChange={(value) => setSelectedDepartment(value as keyof typeof departmentData)}
          >
            <SelectTrigger className="w-full sm:w-[250px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cs">Computer Science</SelectItem>
              <SelectItem value="it">Information Technology</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 rounded-lg bg-primary/5 p-4 text-center">
          <h3 className="text-lg font-bold">{currentDepartment.name}</h3>
          <p className="text-sm text-muted-foreground">Department Rankings</p>
        </div>

        <div className="space-y-3">
          {currentDepartment.students.map((student) => (
            <div
              key={student.rank}
              className={`flex items-center justify-between rounded-lg border p-4 ${
                student.rank === 1 ? "bg-amber-500/5 border-amber-500/20" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    student.rank === 1 ? "bg-amber-500/10 text-amber-500" : "bg-primary/10 text-primary"
                  } font-bold`}
                >
                  {student.rank === 1 ? <Trophy className="h-5 w-5" /> : `#${student.rank}`}
                </div>

                <Avatar className="h-10 w-10">
                  <AvatarFallback className="text-xs">{student.avatar}</AvatarFallback>
                </Avatar>

                <div>
                  <h4 className="font-medium">{student.name}</h4>
                  <p className="text-sm text-muted-foreground">{student.university}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xl font-bold text-primary">{student.score}</p>
                <p className="text-xs text-muted-foreground">Score</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
