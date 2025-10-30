import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function DepartmentLeaderboard() {
  const topStudents = [
    { name: "Emma Davis", score: 2912, rank: 1, avatar: "ED" },
    { name: "Alice Johnson", score: 2847, rank: 2, avatar: "AJ" },
    { name: "Carol White", score: 2789, rank: 3, avatar: "CW" },
    { name: "Bob Smith", score: 2654, rank: 4, avatar: "BS" },
    { name: "David Brown", score: 2456, rank: 5, avatar: "DB" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-amber-500" />
          Department Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {topStudents.map((student, index) => (
          <div
            key={student.name}
            className={`flex items-center gap-3 rounded-lg p-3 ${
              index === 0 ? "bg-amber-500/10 border border-amber-500/20" : "bg-muted/50"
            }`}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
              {student.rank}
            </div>
            <Avatar className="h-10 w-10">
              <AvatarFallback className="text-xs">{student.avatar}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-medium leading-none">{student.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{student.score} points</p>
            </div>
            {index === 0 && <Trophy className="h-5 w-5 text-amber-500" />}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
