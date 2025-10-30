"use client"

import dynamic from "next/dynamic"

// Lazy-load charts
const RatingProgressChart = dynamic(() => import("@/components/student/rating-progress-chart"), { ssr: false })
const TopicStrengthsChart = dynamic(() => import("@/components/student/topic-strengths-chart"), { ssr: false })

export default function MyProgressPage() {
  const ratingData = [
    { date: "2025-01", platform: "Codeforces", rating: 1650, contest: "Div2 #1" },
    { date: "2025-02", platform: "Codeforces", rating: 1720, contest: "Div2 #2" },
    { date: "2025-03", platform: "CodeChef", rating: 1810, contest: "Long" },
  ]
  const topics = [
    { topic: "Arrays", solved: 48 },
    { topic: "Strings", solved: 37 },
    { topic: "DP", solved: 22 },
    { topic: "Graphs", solved: 18 },
    { topic: "Trees", solved: 26 },
  ]

  return (
    <main className="p-6 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">My Progress</h1>
        <div className="flex gap-2">
          <a
            className="rounded-md border border-[color:var(--cs-border)] px-3 py-1.5 text-sm hover:bg-white/5"
            href="/student"
          >
            Dashboard
          </a>
          <a
            className="rounded-md border border-[color:var(--cs-border)] px-3 py-1.5 text-sm hover:bg-white/5"
            href="/student/goat-sheets"
          >
            GOAT Sheets
          </a>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-[color:var(--cs-border)] bg-[color:var(--cs-bg-soft)] p-4">
          <RatingProgressChart data={ratingData} />
        </div>
        <div className="rounded-lg border border-[color:var(--cs-border)] bg-[color:var(--cs-bg-soft)] p-4">
          <TopicStrengthsChart data={topics} metric="solved" />
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-[color:var(--cs-border)] bg-[color:var(--cs-bg-soft)] p-4">
          <div className="text-sm text-[color:var(--cs-muted)]">Total Solved</div>
          <div className="mt-1 text-2xl font-semibold">421</div>
        </div>
        <div className="rounded-lg border border-[color:var(--cs-border)] bg-[color:var(--cs-bg-soft)] p-4">
          <div className="text-sm text-[color:var(--cs-muted)]">Accuracy</div>
          <div className="mt-1 text-2xl font-semibold">72%</div>
        </div>
        <div className="rounded-lg border border-[color:var(--cs-border)] bg-[color:var(--cs-bg-soft)] p-4">
          <div className="text-sm text-[color:var(--cs-muted)]">Streak</div>
          <div className="mt-1 text-2xl font-semibold">14 days</div>
        </div>
        <div className="rounded-lg border border-[color:var(--cs-border)] bg-[color:var(--cs-bg-soft)] p-4">
          <div className="text-sm text-[color:var(--cs-muted)]">Badges</div>
          <div className="mt-1 text-2xl font-semibold">9</div>
        </div>
      </section>

      <section className="rounded-lg border border-[color:var(--cs-border)] bg-[color:var(--cs-bg-soft)] p-4">
        <div className="mb-2 text-sm text-[color:var(--cs-muted)]">Quick Links</div>
        <div className="flex flex-wrap gap-2">
          <a
            className="rounded-md border border-[color:var(--cs-border)] px-3 py-1.5 text-sm hover:bg-white/5"
            href="/student/goat-sheets?sheet=neetcode-150"
          >
            NeetCode 150
          </a>
          <a
            className="rounded-md border border-[color:var(--cs-border)] px-3 py-1.5 text-sm hover:bg-white/5"
            href="/student/goat-sheets?sheet=striver-sde"
          >
            Striver SDE
          </a>
        </div>
      </section>
    </main>
  )
}
