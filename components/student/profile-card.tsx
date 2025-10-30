import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Building2, ExternalLink, Github, Linkedin, Globe } from "lucide-react"

export function ProfileCard() {
  const codingHandles = [
    {
      platform: "LeetCode",
      handle: "johndoe_lc",
      color: "bg-orange-500",
      url: "https://leetcode.com/johndoe_lc",
    },
    {
      platform: "Codeforces",
      handle: "johndoe_cf",
      color: "bg-blue-500",
      url: "https://codeforces.com/profile/johndoe_cf",
    },
    {
      platform: "CodeChef",
      handle: "johndoe_cc",
      color: "bg-amber-600",
      url: "https://www.codechef.com/users/johndoe_cc",
    },
    {
      platform: "Coding Ninjas",
      handle: "johndoe_cn",
      color: "bg-red-500",
      url: "https://www.codingninjas.com/studio/profile/johndoe_cn",
    },
  ].filter((h) => h.handle) // Only show handles that exist

  const portfolioLinks = [
    {
      name: "GitHub",
      url: "https://github.com/johndoe",
      icon: Github,
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/johndoe",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "Portfolio",
      url: "https://johndoe.dev",
      icon: Globe,
      color: "hover:text-primary",
    },
  ].filter((link) => link.url) // Only show links that exist

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarFallback className="bg-primary text-lg text-primary-foreground">JD</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-bold">John Doe</h3>
            <p className="text-sm text-muted-foreground">Computer Science Student</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Building2 className="h-4 w-4 text-muted-foreground" />
            <span>MIT University</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
            <span>Computer Science & Engineering</span>
          </div>
        </div>

        {portfolioLinks.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium">Portfolio Links</p>
            <div className="flex items-center gap-3">
              {portfolioLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 rounded-md border px-3 py-2 text-sm transition-all hover:border-primary hover:bg-accent ${link.color}`}
                    title={link.name}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{link.name}</span>
                  </a>
                )
              })}
            </div>
          </div>
        )}

        {codingHandles.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium">Coding Handles</p>
            <div className="space-y-2">
              {codingHandles.map((handle) => (
                <a
                  key={handle.platform}
                  href={handle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-md border p-2 transition-all hover:border-primary hover:bg-accent"
                >
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${handle.color}`} />
                    <span className="text-sm font-medium">{handle.platform}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {handle.handle}
                    </Badge>
                    <ExternalLink className="h-3 w-3 text-muted-foreground" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
