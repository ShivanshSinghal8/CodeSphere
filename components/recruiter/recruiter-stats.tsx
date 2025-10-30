import { Card, CardContent } from "@/components/ui/card"
import { Users, Star, Briefcase, TrendingUp } from "lucide-react"

export function RecruiterStats() {
  const stats = [
    {
      title: "Total Candidates",
      value: "1,247",
      change: "Active profiles",
      icon: Users,
      color: "text-blue-500",
    },
    {
      title: "Top Performers",
      value: "89",
      change: "Score > 2800",
      icon: Star,
      color: "text-amber-500",
    },
    {
      title: "Saved Profiles",
      value: "34",
      change: "In your list",
      icon: Briefcase,
      color: "text-primary",
    },
    {
      title: "New This Week",
      value: "23",
      change: "+15% from last week",
      icon: TrendingUp,
      color: "text-orange-500",
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
