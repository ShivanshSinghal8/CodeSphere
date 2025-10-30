import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp, Award, Target } from "lucide-react"

export function TeacherStats() {
  const stats = [
    {
      title: "Total Students",
      value: "156",
      change: "+12 this month",
      icon: Users,
      color: "text-blue-500",
    },
    {
      title: "Avg. Unified Score",
      value: "2,234",
      change: "+8.2% from last month",
      icon: TrendingUp,
      color: "text-primary",
    },
    {
      title: "Active Learners",
      value: "142",
      change: "91% engagement",
      icon: Target,
      color: "text-orange-500",
    },
    {
      title: "Achievements",
      value: "487",
      change: "+23 this week",
      icon: Award,
      color: "text-amber-500",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.change}</p>
                </div>
                <div className={`rounded-full bg-muted p-3 ${stat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
