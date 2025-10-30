import { LeaderboardHeader } from "@/components/leaderboard/leaderboard-header"
import { LeaderboardTabs } from "@/components/leaderboard/leaderboard-tabs"

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <LeaderboardHeader />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Global Leaderboards</h1>
          <p className="text-muted-foreground">See how you rank against the best coders worldwide</p>
        </div>

        <LeaderboardTabs />
      </main>
    </div>
  )
}
