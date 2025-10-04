import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function BackToTopFab() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop
      setVisible(y > 300)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-90 transition-opacity w-12 h-12 flex items-center justify-center"
      data-testid="back-to-top-fab"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}



