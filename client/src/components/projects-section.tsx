import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiGithub } from "react-icons/si"

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with real-time inventory, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/ecommerce"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with kanban boards, real-time updates, and team analytics. Streamlines workflow for remote teams.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/taskmanager"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media managers. Track engagement, schedule posts, and monitor multiple platforms from one interface.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "GraphQL", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/socialdashboard"
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "Beautiful weather application with hourly and weekly forecasts, location-based updates, and interactive weather maps using real-time data.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Weather API", "CSS3"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/weatherapp"
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "Personal fitness tracking app with workout logging, progress visualization, and personalized health insights powered by machine learning.",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "Express", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/fitnesstracker"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" data-testid="projects-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="projects-description">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                animation: `slideUp 0.6s ease forwards ${index * 0.1}s`
              }}
              data-testid={`project-card-${project.id}`}
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-500 to-blue-600">
                <img 
                  src={project.image} 
                  alt={`${project.title} showcase`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200" data-testid={`project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-mono"
                      data-testid={`project-tech-${tech.toLowerCase().replace('.', '-')}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    asChild
                    className="flex-1 bg-primary text-primary-foreground hover:opacity-90"
                    data-testid={`live-demo-${project.id}`}
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="flex-1"
                    data-testid={`github-link-${project.id}`}
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <SiGithub className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
