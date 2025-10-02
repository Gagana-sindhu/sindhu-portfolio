export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Circuit board technology" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight" data-testid="about-title">
              Here's a quick intro about me and what I love to do
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3" data-testid="finding-my-way-title">
                  Finding My Way to Web
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid="finding-my-way-description">
                  My journey into web development began with a curiosity for creating interactive and visually appealing websites. I enjoy building clean, responsive frontend interfaces and have completed several projects that showcase my skills and creativity.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3" data-testid="life-beyond-code-title">
                  Life Beyond Code
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid="life-beyond-code-description">
                  Beyond coding, I enjoy engaging with people and expressing myself creatively. I have always been excited to host college events as an anchor, and I love dancing. I truly believe that what is meant to come will find its way to us in time, and I carry this patience and optimism into all aspects of life. Creativity guides me not only in my hobbies but also in my work, where I enjoy designing innovative and visually appealing frontend experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
