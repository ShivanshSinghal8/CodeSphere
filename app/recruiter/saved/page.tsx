"use client"

import React from "react"

type Candidate = {
  id: number
  name: string
  college: string
  rating: number
}

export default function RecruiterSavedPage() {
  const [saved, setSaved] = React.useState<Candidate[]>([])

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem("codesphere_saved_candidates")
      if (raw) setSaved(JSON.parse(raw))
    } catch {}
  }, [])

  const exportCsv = () => {
    const rows = [["Name", "College", "Rating"], ...saved.map((c) => [c.name, c.college, String(c.rating)])]
    const csv = rows.map((r) => r.join(",")).join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "saved-candidates.csv"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <main className="p-6 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Saved Candidates</h1>
        <button
          onClick={exportCsv}
          className="rounded-md border border-[color:var(--cs-border)] px-3 py-1.5 text-sm hover:bg-white/5"
        >
          Export CSV
        </button>
      </header>

      {saved.length === 0 ? (
        <div className="rounded-lg border border-[color:var(--cs-border)] bg-[color:var(--cs-bg-soft)] p-6 text-sm text-[color:var(--cs-muted)]">
          No saved candidates yet.
        </div>
      ) : (
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {saved.map((c) => (
            <article
              key={c.id}
              className="rounded-lg border border-[color:var(--cs-border)] bg-[color:var(--cs-bg-soft)] p-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-medium">{c.name}</h2>
                  <p className="text-sm text-[color:var(--cs-muted)]">{c.college}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold">{c.rating}</div>
                  <div className="text-xs text-[color:var(--cs-muted)]">Rating</div>
                </div>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}
