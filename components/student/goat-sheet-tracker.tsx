"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, ExternalLink, ChevronDown, ChevronUp, Plus, Filter } from "lucide-react"

interface Problem {
  id: string
  title: string
  platform: "LeetCode" | "Codeforces" | "CodeChef" | "Coding Ninjas"
  difficulty: "Easy" | "Medium" | "Hard"
  url: string
  solved: boolean
}

interface Sheet {
  id: string
  name: string
  category: string
  problems: Problem[]
}

const mockSheets: Sheet[] = [
  {
    id: "striver-sde",
    name: "Striver's SDE Sheet",
    category: "DSA",
    problems: [
      {
        id: "p1",
        title: "Two Sum",
        platform: "LeetCode",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/two-sum/",
        solved: true,
      },
      {
        id: "p2",
        title: "Best Time to Buy and Sell Stock",
        platform: "LeetCode",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        solved: true,
      },
      {
        id: "p3",
        title: "Merge Intervals",
        platform: "LeetCode",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/merge-intervals/",
        solved: false,
      },
      {
        id: "p4",
        title: "Trapping Rain Water",
        platform: "LeetCode",
        difficulty: "Hard",
        url: "https://leetcode.com/problems/trapping-rain-water/",
        solved: false,
      },
    ],
  },
  {
    id: "blind-75",
    name: "Blind 75",
    category: "Interview",
    problems: [
      {
        id: "p1",
        title: "Two Sum",
        platform: "LeetCode",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/two-sum/",
        solved: true,
      },
      {
        id: "p5",
        title: "Valid Anagram",
        platform: "LeetCode",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/valid-anagram/",
        solved: true,
      },
      {
        id: "p6",
        title: "Container With Most Water",
        platform: "LeetCode",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/container-with-most-water/",
        solved: false,
      },
    ],
  },
  {
    id: "neetcode-150",
    name: "NeetCode 150",
    category: "Interview",
    problems: [
      {
        id: "p1",
        title: "Two Sum",
        platform: "LeetCode",
        difficulty: "Easy",
        url: "https://leetcode.com/problems/two-sum/",
        solved: true,
      },
      {
        id: "p7",
        title: "Longest Substring Without Repeating Characters",
        platform: "LeetCode",
        difficulty: "Medium",
        url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        solved: false,
      },
    ],
  },
]

const platformColors = {
  LeetCode: "bg-yellow-500",
  Codeforces: "bg-blue-500",
  CodeChef: "bg-amber-600",
  "Coding Ninjas": "bg-orange-500",
}

const difficultyColors = {
  Easy: "bg-green-500",
  Medium: "bg-yellow-500",
  Hard: "bg-red-500",
}

export function GoatSheetTracker() {
  const [sheets, setSheets] = useState<Sheet[]>(mockSheets)
  const [expandedSheets, setExpandedSheets] = useState<Set<string>>(new Set())
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [newSheetName, setNewSheetName] = useState("")
  const [newSheetCategory, setNewSheetCategory] = useState("")
  const [filterStatus, setFilterStatus] = useState<"all" | "solved" | "unsolved">("all")

  const toggleProblemSolved = (problemId: string) => {
    setSheets((prevSheets) =>
      prevSheets.map((sheet) => ({
        ...sheet,
        problems: sheet.problems.map((problem) =>
          problem.id === problemId ? { ...problem, solved: !problem.solved } : problem,
        ),
      })),
    )
  }

  const toggleSheetExpanded = (sheetId: string) => {
    setExpandedSheets((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(sheetId)) {
        newSet.delete(sheetId)
      } else {
        newSet.add(sheetId)
      }
      return newSet
    })
  }

  const createCustomSheet = () => {
    if (!newSheetName.trim()) return

    const newSheet: Sheet = {
      id: `custom-${Date.now()}`,
      name: newSheetName,
      category: newSheetCategory || "Custom",
      problems: [],
    }

    setSheets([...sheets, newSheet])
    setNewSheetName("")
    setNewSheetCategory("")
    setIsCreateDialogOpen(false)
  }

  const getFilteredProblems = (problems: Problem[]) => {
    if (filterStatus === "all") return problems
    if (filterStatus === "solved") return problems.filter((p) => p.solved)
    return problems.filter((p) => !p.solved)
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            GOAT Sheet Tracker
          </CardTitle>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline">
                <Plus className="mr-2 h-4 w-4" />
                Create Sheet
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create Custom Sheet</DialogTitle>
                <DialogDescription>Create a new problem sheet to track your progress.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="sheet-name">Sheet Name</Label>
                  <Input
                    id="sheet-name"
                    placeholder="e.g., Dynamic Programming Mastery"
                    value={newSheetName}
                    onChange={(e) => setNewSheetName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sheet-category">Category</Label>
                  <Input
                    id="sheet-category"
                    placeholder="e.g., DSA, Interview, Practice"
                    value={newSheetCategory}
                    onChange={(e) => setNewSheetCategory(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={createCustomSheet}>Create Sheet</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={filterStatus} onValueChange={(value: any) => setFilterStatus(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter problems" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Problems</SelectItem>
              <SelectItem value="solved">Solved</SelectItem>
              <SelectItem value="unsolved">Unsolved</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {sheets.map((sheet) => {
          const filteredProblems = getFilteredProblems(sheet.problems)
          const solvedCount = sheet.problems.filter((p) => p.solved).length
          const totalCount = sheet.problems.length
          const progress = totalCount > 0 ? (solvedCount / totalCount) * 100 : 0
          const isExpanded = expandedSheets.has(sheet.id)

          return (
            <div key={sheet.id} className="space-y-2 rounded-lg border p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{sheet.name}</h4>
                    <Badge variant="secondary">{sheet.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {solvedCount} / {totalCount} solved ({Math.round(progress)}%)
                  </p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => toggleSheetExpanded(sheet.id)} className="ml-2">
                  {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>
              </div>

              <Progress value={progress} className="h-2" />

              {isExpanded && (
                <div className="mt-4 space-y-2">
                  {filteredProblems.length === 0 ? (
                    <p className="py-4 text-center text-sm text-muted-foreground">
                      {filterStatus === "all" ? "No problems in this sheet yet." : `No ${filterStatus} problems.`}
                    </p>
                  ) : (
                    filteredProblems.map((problem) => (
                      <div
                        key={`${sheet.id}-${problem.id}`}
                        className="flex items-center gap-3 rounded-md border p-3 transition-colors hover:bg-accent"
                      >
                        <Checkbox
                          checked={problem.solved}
                          onCheckedChange={() => toggleProblemSolved(problem.id)}
                          className="mt-0.5"
                        />

                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-2">
                            <h5
                              className={`text-sm font-medium ${problem.solved ? "line-through text-muted-foreground" : ""}`}
                            >
                              {problem.title}
                            </h5>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              <div className={`mr-1 h-2 w-2 rounded-full ${platformColors[problem.platform]}`} />
                              {problem.platform}
                            </Badge>
                            <Badge
                              variant="outline"
                              className={`text-xs ${
                                problem.difficulty === "Easy"
                                  ? "border-green-500 text-green-700 dark:text-green-400"
                                  : problem.difficulty === "Medium"
                                    ? "border-yellow-500 text-yellow-700 dark:text-yellow-400"
                                    : "border-red-500 text-red-700 dark:text-red-400"
                              }`}
                            >
                              {problem.difficulty}
                            </Badge>
                          </div>
                        </div>

                        <a
                          href={problem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-md p-2 transition-colors hover:bg-muted"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </a>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
