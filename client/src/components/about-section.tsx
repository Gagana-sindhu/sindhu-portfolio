import { User, Zap, CheckCircle } from "lucide-react"

export function AboutSection() {
  const skills = {
    frontend: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    backend: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    tools: ["Git", "Docker", "AWS", "REST APIs"]
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" data-testid="about-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 flex items-center" data-testid="background-title">
                <User className="w-6 h-6 mr-3 text-primary" />
                Background
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="background-description">
                I'm a passionate software developer with a keen eye for creating seamless user experiences. 
                With expertise in modern web technologies, I transform ideas into robust, scalable applications. 
                I believe in writing clean, maintainable code and staying current with the latest industry trends.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 flex items-center" data-testid="what-i-do-title">
                <Zap className="w-6 h-6 mr-3 text-primary" />
                What I Do
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="what-i-do-description">
                I specialize in full-stack development, creating responsive web applications from concept to deployment. 
                My focus is on delivering high-quality solutions that combine beautiful design with powerful functionality.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold mb-6 flex items-center" data-testid="skills-title">
                <CheckCircle className="w-6 h-6 mr-3 text-primary" />
                Technical Skills
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3" data-testid="frontend-skills-title">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill, index) => (
                      <span 
                        key={skill} 
                        className={`px-4 py-2 border rounded-lg text-sm font-mono font-medium hover:scale-105 transition-transform duration-200 ${
                          index % 4 === 0 ? 'bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/20' :
                          index % 4 === 1 ? 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20' :
                          index % 4 === 2 ? 'bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border-cyan-500/20' :
                          'bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20'
                        }`}
                        data-testid={`skill-${skill.toLowerCase().replace('.', '-')}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3" data-testid="backend-skills-title">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill, index) => (
                      <span 
                        key={skill} 
                        className={`px-4 py-2 border rounded-lg text-sm font-mono font-medium hover:scale-105 transition-transform duration-200 ${
                          index % 4 === 0 ? 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20' :
                          index % 4 === 1 ? 'bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-emerald-500/20' :
                          index % 4 === 2 ? 'bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-blue-500/20' :
                          'bg-gradient-to-r from-green-500/10 to-lime-500/10 border-green-500/20'
                        }`}
                        data-testid={`skill-${skill.toLowerCase().replace('.', '-')}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3" data-testid="tools-skills-title">Tools & Others</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, index) => (
                      <span 
                        key={skill} 
                        className={`px-4 py-2 border rounded-lg text-sm font-mono font-medium hover:scale-105 transition-transform duration-200 ${
                          index % 4 === 0 ? 'bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-orange-500/20' :
                          index % 4 === 1 ? 'bg-gradient-to-r from-gray-500/10 to-slate-500/10 border-gray-500/20' :
                          index % 4 === 2 ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20' :
                          'bg-gradient-to-r from-blue-500/10 to-violet-500/10 border-blue-500/20'
                        }`}
                        data-testid={`skill-${skill.toLowerCase().replace(' ', '-').replace('&', '-')}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
