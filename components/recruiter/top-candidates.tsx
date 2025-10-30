"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Download, Eye, Bookmark } from "lucide-react"

const topCandidates = [
  {
    id: 1,
    name: "Emma Davis",
    university: "MIT University",
    department: "Computer Science",
    unifiedScore: 2912,
    topSkills: ["Dynamic Programming", "Graphs", "System Design"],
    leetcode: 1923,
    codeforces: 1789,
    avatar: "ED",
  },
  {
    id: 2,
    name: "Alice Johnson",
    university: "Stanford University",
    department: "Computer Science",
    unifiedScore: 2847,
    topSkills: ["Arrays", "Trees", "Algorithms"],
    leetcode: 1850,
    codeforces: 1642,
    avatar: "AJ",
  },
  {
    id: 3,
    name: "Carol White",
    university: "MIT University",
    department: "Information Technology",
    unifiedScore: 2789,
    topSkills: ["Graphs", "Greedy", "Math"],
    leetcode: 1789,
    codeforces: 1680,
    avatar: "CW",
  },
]

export function TopCandidates() {
  const handleDownloadResume = (name: string) => {
    alert(`Downloading resume for ${name}...`)
  }

  const handleViewProfile = (name: string) => {
    alert(`Viewing full profile for ${name}...`)
  }

  const handleSaveCandidate = (name: string) => {
    alert(`Saved ${name} to your list!`)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5 text-amber-500" />
          Top Candidates
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {topCandidates.map((candidate) => (
          <div key={candidate.id} className="rounded-lg border bg-card p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              {/* Left: Profile Info */}
              <div className="flex gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-primary text-lg text-primary-foreground">
                    {candidate.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{candidate.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {candidate.department} • {candidate.university}
                  </p>
                  <div className="mt-3 flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">{candidate.unifiedScore}</p>
                      <p className="text-xs text-muted-foreground">Unified Score</p>
                    </div>
                    <div className="h-12 w-px bg-border" />
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">LeetCode:</span>
                        <span className="font-medium">{candidate.leetcode}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Codeforces:</span>
                        <span className="font-medium">{candidate.codeforces}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Skills & Actions */}
              <div className="flex flex-col gap-3 lg:items-end">
                <div className="flex flex-wrap gap-2">
                  {candidate.topSkills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleViewProfile(candidate.name)}>
                    <Eye className="mr-2 h-4 w-4" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDownloadResume(candidate.name)}>
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                  <Button size="sm" onClick={() => handleSaveCandidate(candidate.name)}>
                    <Bookmark className="mr-2 h-4 w-4" />
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
