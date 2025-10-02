export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm" data-testid="copyright-text">
              © 2024 <span className="font-semibold">Sindhu</span>. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
              data-testid="back-to-top"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
