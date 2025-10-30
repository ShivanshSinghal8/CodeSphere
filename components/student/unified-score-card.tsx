import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

export function UnifiedScoreCard() {
  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Unified Score
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary">2847</div>
            <p className="mt-2 text-sm text-muted-foreground">Global Rank: #1,234</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">LeetCode</span>
              <span className="font-medium">1850</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Codeforces</span>
              <span className="font-medium">1642</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">CodeChef</span>
              <span className="font-medium">1789</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Coding Ninjas</span>
              <span className="font-medium">1923</span>
            </div>
          </div>

          <div className="rounded-md bg-primary/10 p-3 text-center">
            <p className="text-xs text-muted-foreground">This Month</p>
            <p className="text-lg font-bold text-primary">+127 points</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
