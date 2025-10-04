import { useState, useEffect } from "react"
import { Link } from "wouter"
import { useTheme } from "next-themes"
import { Sun, Moon, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

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
    setIsMenuOpen(false)
  }

  if (!mounted) {
    return null
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-foreground" data-testid="logo">My Portfolio</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors duration-200" data-testid="nav-home">Home</Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors duration-200" data-testid="nav-about">About</Link>
            <Link href="/projects" className="text-foreground hover:text-primary transition-colors duration-200" data-testid="nav-projects">Projects</Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors duration-200" data-testid="nav-contact">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              data-testid="theme-toggle"
            >
              {theme === "light" ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? <X className="h-[1.2rem] w-[1.2rem]" /> : <Menu className="h-[1.2rem] w-[1.2rem]" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4" data-testid="mobile-menu">
            <div className="flex flex-col space-y-3">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors duration-200 py-2 text-left" data-testid="mobile-nav-home">Home</Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors duration-200 py-2 text-left" data-testid="mobile-nav-about">About</Link>
              <Link href="/projects" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors duration-200 py-2 text-left" data-testid="mobile-nav-projects">Projects</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors duration-200 py-2 text-left" data-testid="mobile-nav-contact">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
