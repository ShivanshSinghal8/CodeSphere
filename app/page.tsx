import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Award } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/codesphere-logo.jpg"
              alt="CodeSphere Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-lg"
            />
            <span className="text-xl font-bold">CodeSphere</span>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-balance text-5xl font-bold leading-tight md:text-6xl">
            Track Your Coding Journey Across All Platforms
          </h1>
          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            CodeSphere unifies your coding analytics from LeetCode, Codeforces, CodeChef, and Coding Ninjas into one
            powerful dashboard.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/signup">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/login">View Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Unified Analytics</h3>
            <p className="text-muted-foreground">
              Track your progress across multiple coding platforms in one place with comprehensive analytics.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Achievement Tracking</h3>
            <p className="text-muted-foreground">
              Earn badges and track your GOAT Sheet progress to stay motivated on your coding journey.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">For Everyone</h3>
            <p className="text-muted-foreground">
              Built for students, teachers, and recruiters with specialized dashboards for each role.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
