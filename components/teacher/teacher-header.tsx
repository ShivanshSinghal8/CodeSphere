"use client"

import { LogOut, Settings } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function TeacherHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/teacher" className="flex items-center gap-2">
          <Image
            src="/images/codesphere-logo.jpg"
            alt="CodeSphere Logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg"
          />
          <span className="text-xl font-bold">CodeSphere</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/teacher" className="text-sm font-medium text-primary">
            Dashboard
          </Link>
          <Link href="/teacher/students" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Students
          </Link>
          <Link href="/teacher/reports" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Reports
          </Link>
        </nav>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">TS</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <div className="flex items-center justify-start gap-2 p-2">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">Prof. Smith</p>
                <p className="text-xs text-muted-foreground">teacher@example.com</p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
