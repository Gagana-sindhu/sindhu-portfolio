import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";
import pro1Image from "@assets/pro1.png";
import pro2Image from "@assets/pro2.png";

export function ProjectsSection() {

  const projects = [
    {
      id: 1,
      title: "X-Plore India 1.0",
      description:
        "X-Plore India 1.0 is a prototype travel website that simplifies destination discovery across India using Kaggle datasets. It features a clean, responsive UI with smooth navigation and is designed to scale with future enhancements like AI-driven recommendations, real-time updates, and booking options.",
      image: pro1Image,
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Kaggle datasets"
      ],
      liveUrl: "https://gagana-sindhu.github.io/XPLORE-1.0/",
      githubUrl: "https://github.com/Gagana-sindhu/XPLORE-1.0.git"
    },

    {
      id: 2,
      title: "Employee Management System",
      description:
        "A desktop-based Employee Management System built with Python and Tkinter, featuring a user-friendly interface, comprehensive record management, advanced search, and secure data handling through SQLite, designed for efficiency and scalability.",
      image: pro2Image,
      technologies: [
        "Python",
        "Tkinter",
        "SQLite"
      ],
      githubUrl:
        "https://github.com/Gagana-sindhu/Employee-Management-System.git"
    },

    {
      id: 3,
      title: "GlobeWeather",
      description:
        "Web app that displays real-time global weather using an API, with an interactive interface and pop-up alerts for user engagement.",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&h=400",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript"
      ],
      liveUrl:
        "https://gagana-sindhu.github.io/Weather-Webapp/",
      githubUrl:
        "https://github.com/Gagana-sindhu/Weather-Webapp.git"
    },

    {
      id: 4,
      title: "Smart Personal Finance Management System",
      description:
        "AI-powered finance web app for expense analysis, spending prediction, and interactive financial insights.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=400",
      technologies: [
        "Python",
        "Streamlit",
        "Flask",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "PyMuPDF",
        "Matplotlib"
      ],
      liveUrl:
        "https://smart-personal-finance-management-systemgit-xas7pbcxhxnbz3xjnw.streamlit.app/",
      githubUrl:
        "https://github.com/Gagana-sindhu/Smart-Personal-Finance-Management-System.git"
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full mb-4"></div>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
                transform: "translateY(20px)",
                animation: `slideUp 0.6s ease forwards ${index * 0.1}s`
              }}
            >

              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-500 to-blue-600">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-mono"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex gap-3">

                  {project.liveUrl && (
                    <Button
                      asChild
                      className="flex-1 bg-primary text-primary-foreground hover:opacity-90"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}

                  <Button
                    variant="outline"
                    asChild
                    className="flex-1"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
  );
}
