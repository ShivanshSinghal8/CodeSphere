import { StudentHeader } from "@/components/student/student-header"
import { ProfileCard } from "@/components/student/profile-card"
import { UnifiedScoreCard } from "@/components/student/unified-score-card"
import { GoatSheetTracker } from "@/components/student/goat-sheet-tracker"
import { BadgesSection } from "@/components/student/badges-section"
import { RatingProgressChart } from "@/components/student/rating-progress-chart"
import { TopicStrengthsChart } from "@/components/student/topic-strengths-chart"
import { ProjectsSection } from "@/components/student/projects-section"

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <StudentHeader />

      <main className="container mx-auto px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Profile & Score */}
          <div className="space-y-6 lg:col-span-1">
            <ProfileCard />
            <UnifiedScoreCard />
            <BadgesSection />
          </div>

          {/* Right Column - Analytics & Progress */}
          <div className="space-y-6 lg:col-span-2">
            <GoatSheetTracker />
            <ProjectsSection />
            <RatingProgressChart />
            <TopicStrengthsChart />
          </div>
        </div>
      </main>
    </div>
  )
}
