import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocation } from "wouter"
import profileImage from "@assets/photo 2.jpg"

export function HeroSection() {
  const [, navigate] = useLocation()
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <section id="home" className="flex items-start justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center animate-fade-in font-bold">
        {/* Left Column - Text Content */}
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight font-normal" data-testid="hero-title">
            Hey, I'm Sindhu!<br />
            Welcome to my corner of the internet!
          </h1>
          
          <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg" data-testid="hero-description">
            I'm a front-end developer with a love for design and a knack for tinkering. This site is intentionally over-engineered and serves as my playground for experimenting with new ideas and seeing what sticks!
          </p>
          
          <Button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-foreground dark:bg-primary rounded-md hover:opacity-90 transition-all duration-300"
            data-testid="view-projects-button"
          >
            View My Work
          </Button>
        </div>

        {/* Right Column - Image/Avatar */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-md">
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg overflow-hidden shadow-2xl">
              <img
                src={profileImage}
                alt="Pothapragada Gagana Sindhu"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
