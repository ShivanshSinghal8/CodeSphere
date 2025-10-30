import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"

interface Achievement {
  id: string
  platform: "codeforces" | "codechef" | "leetcode" | "codingninjas"
  title: string
  subtitle: string
  progress?: {
    current: number
    next: number
    label: string
  }
  achievedDate: string
  icon: string
  profileUrl: string
}

const platformConfig = {
  codeforces: {
    name: "Codeforces",
    colors: {
      bg: "bg-blue-50 dark:bg-blue-950/20",
      border: "border-blue-200 dark:border-blue-800",
      text: "text-blue-700 dark:text-blue-300",
      icon: "bg-blue-600",
    },
    initials: "CF",
  },
  codechef: {
    name: "CodeChef",
    colors: {
      bg: "bg-amber-50 dark:bg-amber-950/20",
      border: "border-amber-200 dark:border-amber-800",
      text: "text-amber-700 dark:text-amber-300",
      icon: "bg-emerald-600",
    },
    initials: "CC",
  },
  leetcode: {
    name: "LeetCode",
    colors: {
      bg: "bg-yellow-50 dark:bg-yellow-950/20",
      border: "border-yellow-200 dark:border-yellow-800",
      text: "text-yellow-700 dark:text-yellow-300",
      icon: "bg-yellow-500",
    },
    initials: "LC",
  },
  codingninjas: {
    name: "Coding Ninjas",
    colors: {
      bg: "bg-orange-50 dark:bg-orange-950/20",
      border: "border-orange-200 dark:border-orange-800",
      text: "text-orange-700 dark:text-orange-300",
      icon: "bg-pink-500",
    },
    initials: "CN",
  },
}

const mockAchievements: Achievement[] = [
  {
    id: "1",
    platform: "codeforces",
    title: "Expert",
    subtitle: "Rating: 1600+",
    progress: {
      current: 1642,
      next: 1900,
      label: "Next: Candidate Master",
    },
    achievedDate: "Jan 2025",
    icon: "🏆",
    profileUrl: "https://codeforces.com/profile/johndoe_cf",
  },
  {
    id: "2",
    platform: "codechef",
    title: "4★ Coder",
    subtitle: "Rating: 1800+",
    progress: {
      current: 1856,
      next: 2000,
      label: "Next: 5★",
    },
    achievedDate: "Dec 2024",
    icon: "⭐",
    profileUrl: "https://www.codechef.com/users/johndoe_cc",
  },
  {
    id: "3",
    platform: "leetcode",
    title: "Guardian",
    subtitle: "Rating: 2100+",
    achievedDate: "Jan 2025",
    icon: "🛡️",
    profileUrl: "https://leetcode.com/johndoe_lc",
  },
  {
    id: "4",
    platform: "leetcode",
    title: "500+ Problems",
    subtitle: "Total Solved: 523",
    progress: {
      current: 523,
      next: 1000,
      label: "Next: 1000 milestone",
    },
    achievedDate: "Feb 2025",
    icon: "💯",
    profileUrl: "https://leetcode.com/johndoe_lc",
  },
  {
    id: "5",
    platform: "codingninjas",
    title: "Ninja Master",
    subtitle: "300+ Problems",
    achievedDate: "Nov 2024",
    icon: "🥋",
    profileUrl: "https://www.codingninjas.com/studio/profile/johndoe_cn",
  },
]

export function BadgesSection() {
  const achievements = mockAchievements

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5" />
          Achievements
        </CardTitle>
      </CardHeader>
      <CardContent>
        {achievements.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 p-12 text-center">
            <Award className="mb-3 h-12 w-12 text-muted-foreground/50" />
            <p className="text-sm text-muted-foreground">No achievements unlocked yet. Keep coding!</p>
          </div>
        ) : (
          <div className="space-y-2">
            {achievements.map((achievement) => {
              const config = platformConfig[achievement.platform]
              return (
                <a
                  key={achievement.id}
                  href={achievement.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-md border px-4 py-3 transition-colors hover:bg-muted/50"
                >
                  {/* Row as simple 4-column layout: icon | title+platform | current/next | date */}
                  <div className="grid grid-cols-[auto,1fr,auto,auto] items-center gap-4">
                    {/* Minimal platform avatar */}
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-white ${config.colors.icon}`}
                    >
                      {config.initials}
                    </div>

                    {/* Title + Platform + Subtitle */}
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="truncate font-medium">{achievement.title}</h3>
                        <span className={`text-xs font-medium ${config.colors.text}`}>{config.name}</span>
                      </div>
                      <p className="truncate text-sm text-muted-foreground">{achievement.subtitle}</p>
                    </div>

                    {/* Current / Next milestone (if any) */}
                    {achievement.progress ? (
                      <div className="text-right text-sm text-muted-foreground sm:min-w-[160px]">
                        <span className="font-mono">{achievement.progress.current}</span>
                        {" / "}
                        <span className="font-mono">{achievement.progress.next}</span>
                      </div>
                    ) : (
                      <div className="text-right text-sm text-muted-foreground sm:min-w-[160px]">—</div>
                    )}

                    {/* Achieved date */}
                    <div className="text-right text-sm text-muted-foreground sm:min-w-[100px]">
                      {achievement.achievedDate}
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
