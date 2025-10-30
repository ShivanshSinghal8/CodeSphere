import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Trophy, Medal, Award } from "lucide-react"

const topStudents = [
  {
    rank: 1,
    name: "Emma Davis",
    university: "MIT University",
    department: "Computer Science",
    unifiedScore: 2912,
    leetcode: 1923,
    codeforces: 1789,
    codechef: 1856,
    avatar: "ED",
  },
  {
    rank: 2,
    name: "Alice Johnson",
    university: "Stanford University",
    department: "Computer Science",
    unifiedScore: 2847,
    leetcode: 1850,
    codeforces: 1642,
    codechef: 1789,
    avatar: "AJ",
  },
  {
    rank: 3,
    name: "Carol White",
    university: "MIT University",
    department: "Information Technology",
    unifiedScore: 2789,
    leetcode: 1789,
    codeforces: 1680,
    codechef: 1720,
    avatar: "CW",
  },
  {
    rank: 4,
    name: "Bob Smith",
    university: "Harvard University",
    department: "Computer Science",
    unifiedScore: 2654,
    leetcode: 1700,
    codeforces: 1500,
    codechef: 1650,
    avatar: "BS",
  },
  {
    rank: 5,
    name: "David Brown",
    university: "Stanford University",
    department: "Information Technology",
    unifiedScore: 2456,
    leetcode: 1620,
    codeforces: 1420,
    codechef: 1580,
    avatar: "DB",
  },
  {
    rank: 6,
    name: "Sarah Wilson",
    university: "MIT University",
    department: "Computer Science",
    unifiedScore: 2398,
    leetcode: 1580,
    codeforces: 1390,
    codechef: 1540,
    avatar: "SW",
  },
  {
    rank: 7,
    name: "Michael Chen",
    university: "Harvard University",
    department: "Information Technology",
    unifiedScore: 2345,
    leetcode: 1550,
    codeforces: 1360,
    codechef: 1510,
    avatar: "MC",
  },
  {
    rank: 8,
    name: "Lisa Anderson",
    university: "Stanford University",
    department: "Computer Science",
    unifiedScore: 2289,
    leetcode: 1520,
    codeforces: 1330,
    codechef: 1480,
    avatar: "LA",
  },
]

export function GlobalLeaderboard() {
  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-5 w-5 text-amber-500" />
    if (rank === 2) return <Medal className="h-5 w-5 text-slate-400" />
    if (rank === 3) return <Award className="h-5 w-5 text-amber-700" />
    return null
  }

  const getRankBadgeColor = (rank: number) => {
    if (rank === 1) return "bg-amber-500/10 text-amber-500 border-amber-500/20"
    if (rank === 2) return "bg-slate-400/10 text-slate-600 border-slate-400/20"
    if (rank === 3) return "bg-amber-700/10 text-amber-700 border-amber-700/20"
    return "bg-primary/10 text-primary border-primary/20"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Performers Worldwide</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {topStudents.map((student) => (
            <div
              key={student.rank}
              className={`flex flex-col gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50 md:flex-row md:items-center md:justify-between ${
                student.rank <= 3 ? "bg-muted/30" : ""
              }`}
            >
              {/* Left: Rank & Profile */}
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 ${getRankBadgeColor(
                    student.rank,
                  )}`}
                >
                  {getRankIcon(student.rank) || <span className="text-lg font-bold">#{student.rank}</span>}
                </div>

                <Avatar className="h-12 w-12">
                  <AvatarFallback>{student.avatar}</AvatarFallback>
                </Avatar>

                <div>
                  <h3 className="font-bold">{student.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {student.department} • {student.university}
                  </p>
                </div>
              </div>

              {/* Right: Scores */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{student.unifiedScore}</p>
                  <p className="text-xs text-muted-foreground">Unified Score</p>
                </div>

                <div className="hidden h-12 w-px bg-border md:block" />

                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <p className="text-xs text-muted-foreground">LeetCode</p>
                    <p className="font-medium">{student.leetcode}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Codeforces</p>
                    <p className="font-medium">{student.codeforces}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">CodeChef</p>
                    <p className="font-medium">{student.codechef}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
