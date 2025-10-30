import { RecruiterHeader } from "@/components/recruiter/recruiter-header"
import { RecruiterStats } from "@/components/recruiter/recruiter-stats"
import { TopCandidates } from "@/components/recruiter/top-candidates"
import { CandidateSearch } from "@/components/recruiter/candidate-search"

export default function RecruiterDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <RecruiterHeader />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Recruiter Dashboard</h1>
          <p className="text-muted-foreground">Discover and connect with top coding talent</p>
        </div>

        <div className="space-y-6">
          <RecruiterStats />
          <TopCandidates />
          <CandidateSearch />
        </div>
      </main>
    </div>
  )
}
