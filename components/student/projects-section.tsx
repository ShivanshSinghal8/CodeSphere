import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code2, ExternalLink, Github } from "lucide-react"

interface Project {
  id: string
  name: string
  description: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
}

const mockProjects: Project[] = [
  {
    id: "1",
    name: "E-Commerce Platform",
    description: "Full-stack e-commerce application with payment integration and admin dashboard",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/johndoe/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
  },
  {
    id: "2",
    name: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/johndoe/task-manager",
    liveUrl: "https://taskmanager-demo.vercel.app",
  },
  {
    id: "3",
    name: "Weather Dashboard",
    description: "Real-time weather tracking application with interactive maps and forecasts",
    techStack: ["React", "TailwindCSS", "OpenWeather API"],
    githubUrl: "https://github.com/johndoe/weather-dashboard",
    liveUrl: "https://weather-demo.vercel.app",
  },
]

export function ProjectsSection() {
  const projects = mockProjects

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code2 className="h-5 w-5" />
          Projects
        </CardTitle>
      </CardHeader>
      <CardContent>
        {projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 p-12 text-center">
            <Code2 className="mb-3 h-12 w-12 text-muted-foreground/50" />
            <p className="text-sm text-muted-foreground">No projects added yet. Showcase your work!</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col rounded-lg border p-4 transition-all hover:border-primary hover:shadow-md"
              >
                <div className="mb-3 flex-1">
                  <h3 className="mb-2 text-balance font-semibold">{project.name}</h3>
                  <p className="mb-3 text-pretty text-sm text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2 border-t pt-3">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1.5 h-3.5 w-3.5" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
