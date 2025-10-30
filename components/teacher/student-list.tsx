"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Download, Search, FileText } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const students = [
  {
    id: 1,
    name: "Alice Johnson",
    department: "Computer Science",
    unifiedScore: 2847,
    goatProgress: 68,
    topStrength: "Arrays",
    rank: 12,
  },
  {
    id: 2,
    name: "Bob Smith",
    department: "Computer Science",
    unifiedScore: 2654,
    goatProgress: 54,
    topStrength: "Dynamic Programming",
    rank: 23,
  },
  {
    id: 3,
    name: "Carol White",
    department: "Information Technology",
    unifiedScore: 2789,
    goatProgress: 72,
    topStrength: "Graphs",
    rank: 15,
  },
  {
    id: 4,
    name: "David Brown",
    department: "Computer Science",
    unifiedScore: 2456,
    goatProgress: 45,
    topStrength: "Trees",
    rank: 34,
  },
  {
    id: 5,
    name: "Emma Davis",
    department: "Information Technology",
    unifiedScore: 2912,
    goatProgress: 81,
    topStrength: "Greedy",
    rank: 8,
  },
]

export function StudentList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("score")
  const [filterDept, setFilterDept] = useState("all")

  const handleExportCSV = () => {
    // Mock CSV export
    alert("Exporting student data as CSV...")
  }

  const handleExportPDF = () => {
    // Mock PDF export
    alert("Exporting student data as PDF...")
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle>Student List</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleExportCSV}>
              <Download className="mr-2 h-4 w-4" />
              CSV
            </Button>
            <Button variant="outline" size="sm" onClick={handleExportPDF}>
              <FileText className="mr-2 h-4 w-4" />
              PDF
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Filters */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search students..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="score">Unified Score</SelectItem>
              <SelectItem value="progress">GOAT Progress</SelectItem>
              <SelectItem value="rank">Rank</SelectItem>
              <SelectItem value="name">Name</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterDept} onValueChange={setFilterDept}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="cs">Computer Science</SelectItem>
              <SelectItem value="it">Information Technology</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Department</TableHead>
                <TableHead className="text-right">Score</TableHead>
                <TableHead className="text-right">Progress</TableHead>
                <TableHead>Top Strength</TableHead>
                <TableHead className="text-right">Rank</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">
                          {student.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{student.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{student.department}</TableCell>
                  <TableCell className="text-right font-medium">{student.unifiedScore}</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="secondary">{student.goatProgress}%</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{student.topStrength}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">#{student.rank}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
