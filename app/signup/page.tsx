import { SignupForm } from "@/components/auth/signup-form"
import Image from "next/image"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link href="/" className="mb-8 flex items-center justify-center gap-2">
            <Image
              src="/images/codesphere-logo.jpg"
              alt="CodeSphere Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-lg"
            />
            <span className="text-2xl font-bold">CodeSphere</span>
          </Link>

          {/* Signup Card */}
          <div className="rounded-lg border bg-card p-8 shadow-lg">
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-bold">Create Your Account</h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Join CodeSphere and start tracking your coding journey
              </p>
            </div>

            <SignupForm />

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Already have an account? </span>
              <Link href="/login" className="font-medium text-primary hover:underline">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
