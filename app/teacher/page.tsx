import { TeacherHeader } from "@/components/teacher/teacher-header"
import { TeacherStats } from "@/components/teacher/teacher-stats"
import { StudentList } from "@/components/teacher/student-list"
import { DepartmentLeaderboard } from "@/components/teacher/department-leaderboard"
import { SkillCoverageHeatmap } from "@/components/teacher/skill-coverage-heatmap"

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <TeacherHeader />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
          <p className="text-muted-foreground">Monitor and track your students' coding progress</p>
        </div>

        <div className="space-y-6">
          <TeacherStats />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <StudentList />
            </div>
            <div className="space-y-6">
              <DepartmentLeaderboard />
            </div>
          </div>

          <SkillCoverageHeatmap />
        </div>
      </main>
    </div>
  )
}
