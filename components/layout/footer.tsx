import Link from 'next/link'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/booking', label: 'Book a Court' },
  { href: '/#facilities', label: 'Fasilitas' },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">GK</span>
              </div>
              <span className="font-bold text-xl tracking-tight">GOLDENKICK</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Premium indoor futsal and mini soccer arena. World-class surfaces, stadium lighting, and professional atmosphere for serious ballers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">LINKS</h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-background/70 hover:text-background transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">CONTACT</h3>
            <address className="not-italic text-background/70 flex flex-col gap-2">
              <p>123 Stadium Ave</p>
              <p>Jakarta, Indonesia 12345</p>
              <a
                href="mailto:hello@goldenkick.com"
                className="hover:text-background transition-colors"
              >
                hello@goldenkick.com
              </a>
              <a
                href="tel:+6221123456"
                className="hover:text-background transition-colors"
              >
                +62 21 123 4567
              </a>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-background/50 text-sm">
            &copy; {new Date().getFullYear()} GoldenKick Arena. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
