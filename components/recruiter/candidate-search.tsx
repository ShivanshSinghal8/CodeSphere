"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Download, Eye, Bookmark } from "lucide-react"

const allCandidates = [
  {
    id: 1,
    name: "Emma Davis",
    university: "MIT University",
    department: "Computer Science",
    unifiedScore: 2912,
    skills: ["Dynamic Programming", "Graphs", "System Design"],
    avatar: "ED",
  },
  {
    id: 2,
    name: "Alice Johnson",
    university: "Stanford University",
    department: "Computer Science",
    unifiedScore: 2847,
    skills: ["Arrays", "Trees", "Algorithms"],
    avatar: "AJ",
  },
  {
    id: 3,
    name: "Carol White",
    university: "MIT University",
    department: "Information Technology",
    unifiedScore: 2789,
    skills: ["Graphs", "Greedy", "Math"],
    avatar: "CW",
  },
  {
    id: 4,
    name: "Bob Smith",
    university: "Harvard University",
    department: "Computer Science",
    unifiedScore: 2654,
    skills: ["Dynamic Programming", "Strings", "Trees"],
    avatar: "BS",
  },
  {
    id: 5,
    name: "David Brown",
    university: "Stanford University",
    department: "Information Technology",
    unifiedScore: 2456,
    skills: ["Arrays", "Sorting", "Searching"],
    avatar: "DB",
  },
]

export function CandidateSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [minScore, setMinScore] = useState([2000])
  const [university, setUniversity] = useState("all")
  const [department, setDepartment] = useState("all")

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
          <Search className="h-5 w-5" />
          Search Candidates
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search Filters */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <Label htmlFor="search">Search by name or skill</Label>
            <Input
              id="search"
              placeholder="e.g., Dynamic Programming"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="university">University</Label>
            <Select value={university} onValueChange={setUniversity}>
              <SelectTrigger id="university">
                <SelectValue placeholder="Select university" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Universities</SelectItem>
                <SelectItem value="mit">MIT University</SelectItem>
                <SelectItem value="stanford">Stanford University</SelectItem>
                <SelectItem value="harvard">Harvard University</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="department">Department</Label>
            <Select value={department} onValueChange={setDepartment}>
              <SelectTrigger id="department">
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="it">Information Technology</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Min. Unified Score: {minScore[0]}</Label>
            <Slider value={minScore} onValueChange={setMinScore} min={1000} max={3000} step={100} className="mt-2" />
          </div>
        </div>

        <Button className="w-full md:w-auto">
          <Search className="mr-2 h-4 w-4" />
          Search Candidates
        </Button>

        {/* Results */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-muted-foreground">Showing {allCandidates.length} candidates</h3>
          </div>

          <div className="space-y-3">
            {allCandidates.map((candidate) => (
              <div key={candidate.id} className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>{candidate.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{candidate.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {candidate.department} • {candidate.university}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {candidate.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{candidate.unifiedScore}</p>
                    <p className="text-xs text-muted-foreground">Score</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleViewProfile(candidate.name)}>
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleDownloadResume(candidate.name)}>
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button size="sm" onClick={() => handleSaveCandidate(candidate.name)}>
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
