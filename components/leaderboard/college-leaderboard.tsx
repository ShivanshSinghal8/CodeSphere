"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Trophy } from "lucide-react"

const collegeData = {
  mit: {
    name: "MIT University",
    students: [
      { rank: 1, name: "Emma Davis", department: "Computer Science", score: 2912, avatar: "ED" },
      { rank: 2, name: "Carol White", department: "Information Technology", score: 2789, avatar: "CW" },
      { rank: 3, name: "Sarah Wilson", department: "Computer Science", score: 2398, avatar: "SW" },
      { rank: 4, name: "James Taylor", department: "Computer Science", score: 2156, avatar: "JT" },
      { rank: 5, name: "Rachel Green", department: "Information Technology", score: 2089, avatar: "RG" },
    ],
  },
  stanford: {
    name: "Stanford University",
    students: [
      { rank: 1, name: "Alice Johnson", department: "Computer Science", score: 2847, avatar: "AJ" },
      { rank: 2, name: "David Brown", department: "Information Technology", score: 2456, avatar: "DB" },
      { rank: 3, name: "Lisa Anderson", department: "Computer Science", score: 2289, avatar: "LA" },
      { rank: 4, name: "Kevin Lee", department: "Computer Science", score: 2134, avatar: "KL" },
      { rank: 5, name: "Monica Geller", department: "Information Technology", score: 2067, avatar: "MG" },
    ],
  },
  harvard: {
    name: "Harvard University",
    students: [
      { rank: 1, name: "Bob Smith", department: "Computer Science", score: 2654, avatar: "BS" },
      { rank: 2, name: "Michael Chen", department: "Information Technology", score: 2345, avatar: "MC" },
      { rank: 3, name: "Jennifer Lopez", department: "Computer Science", score: 2198, avatar: "JL" },
      { rank: 4, name: "Tom Hardy", department: "Computer Science", score: 2112, avatar: "TH" },
      { rank: 5, name: "Emma Stone", department: "Information Technology", score: 2045, avatar: "ES" },
    ],
  },
}

export function CollegeLeaderboard() {
  const [selectedCollege, setSelectedCollege] = useState<keyof typeof collegeData>("mit")

  const currentCollege = collegeData[selectedCollege]

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle>Top Performers by College</CardTitle>
          <Select
            value={selectedCollege}
            onValueChange={(value) => setSelectedCollege(value as keyof typeof collegeData)}
          >
            <SelectTrigger className="w-full sm:w-[250px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mit">MIT University</SelectItem>
              <SelectItem value="stanford">Stanford University</SelectItem>
              <SelectItem value="harvard">Harvard University</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 rounded-lg bg-primary/5 p-4 text-center">
          <h3 className="text-lg font-bold">{currentCollege.name}</h3>
          <p className="text-sm text-muted-foreground">College Rankings</p>
        </div>

        <div className="space-y-3">
          {currentCollege.students.map((student) => (
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
                  <p className="text-sm text-muted-foreground">{student.department}</p>
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
