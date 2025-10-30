"use client"

export default function TeacherReportsPage() {
  const avgRating = 1875
  const topStudents = [
    { name: "Maya Rao", rating: 1950 },
    { name: "Arjun Patel", rating: 1920 },
  ]
  const weakTopics = [
    { topic: "Graphs", count: 34 },
    { topic: "DP", count: 21 },
  ]

  const downloadCsv = () => {
    const rows = [
      ["Average Rating", avgRating],
      ["Top Students", topStudents.map((t) => `${t.name} (${t.rating})`).join("; ")],
      ["Weak Topics", weakTopics.map((w) => `${w.topic} (${w.count})`).join("; ")],
    ]
    const csv = rows.map((r) => r.join(",")).join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "codesphere-report.csv"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <main className="p-6 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Reports</h1>
        <div className="flex gap-2">
          <button
            onClick={downloadCsv}
            className="rounded-md border border-[color:var(--cs-border)] px-3 py-1.5 text-sm hover:bg-white/5"
          >
            Download CSV
          </button>
          <button
            className="rounded-md border border-[color:var(--cs-border)] px-3 py-1.5 text-sm hover:bg-white/5"
            onClick={() => alert("PDF export not wired.")}
          >
            Download PDF
          </button>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-[color:var(--cs-border)] bg-[color:var(--cs-bg-soft)] p-4">
          <div className="text-sm text-[color:var(--cs-muted)]">Average Rating</div>
          <div className="mt-1 text-2xl font-semibold">{avgRating}</div>
        </div>
        <div className="rounded-lg border border-[color:var(--cs-border)] bg-[color:var(--cs-bg-soft)] p-4">
          <div className="text-sm text-[color:var(--cs-muted)]">Top Performing Students</div>
          <ul className="mt-2 space-y-1 text-sm">
            {topStudents.map((t) => (
              <li key={t.name} className="flex items-center justify-between">
                <span>{t.name}</span>
                <span className="text-[color:var(--topic-arrays)]">{t.rating}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-[color:var(--cs-border)] bg-[color:var(--cs-bg-soft)] p-4">
          <div className="text-sm text-[color:var(--cs-muted)]">Weak Topics (Aggregate)</div>
          <ul className="mt-2 space-y-1 text-sm">
            {weakTopics.map((w) => (
              <li key={w.topic} className="flex items-center justify-between">
                <span>{w.topic}</span>
                <span className="text-[color:var(--topic-math)]">{w.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
