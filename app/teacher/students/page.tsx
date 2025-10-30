export default function TeacherStudentsPage() {
  const students = [
    { id: 1, name: "Aarav Shah", handle: "aarav", rating: 1810, progress: "72%" },
    { id: 2, name: "Maya Rao", handle: "maya", rating: 1950, progress: "80%" },
  ]

  return (
    <main className="p-6 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Students</h1>
        <div className="flex gap-2">
          <input
            className="rounded-md border border-[color:var(--cs-border)] bg-[color:var(--cs-bg-soft)] px-3 py-2 text-sm"
            placeholder="Search by name or handle"
          />
          <select className="rounded-md border border-[color:var(--cs-border)] bg-[color:var(--cs-bg-soft)] px-3 py-2 text-sm">
            <option>All Topics</option>
            <option>DP</option>
            <option>Graphs</option>
            <option>Trees</option>
          </select>
          <select className="rounded-md border border-[color:var(--cs-border)] bg-[color:var(--cs-bg-soft)] px-3 py-2 text-sm">
            <option>Sort by Rating</option>
            <option>Sort by Progress</option>
          </select>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {students.map((s) => (
          <article
            key={s.id}
            className="rounded-lg border border-[color:var(--cs-border)] bg-[color:var(--cs-bg-soft)] p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-medium">{s.name}</h2>
                <p className="text-sm text-[color:var(--cs-muted)]">@{s.handle}</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold">{s.rating}</div>
                <div className="text-xs text-[color:var(--cs-muted)]">CodeSphere Rating</div>
              </div>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-black/30">
              <div className="h-full rounded-full bg-[color:var(--topic-dp)]" style={{ width: s.progress }} />
            </div>
            <div className="mt-3 flex justify-end">
              <a
                className="rounded-md border border-[color:var(--cs-border)] px-3 py-1.5 text-sm hover:bg-white/5"
                href={`/student/my-progress?user=${s.handle}`}
              >
                View Progress
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
