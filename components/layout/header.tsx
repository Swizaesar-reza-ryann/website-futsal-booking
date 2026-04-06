'use client';

import Link from 'next/link';
import { useState, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home', isAnchor: false },
  { href: '/booking', label: 'Book a Court', isAnchor: false },
  { href: 'facilities', label: 'Fasilitas', isAnchor: true },
  { href: 'contact', label: 'Kontak', isAnchor: true },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();

      if (pathname !== '/') {
        router.push(`/#${targetId}`);
        return;
      }

      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
      setIsMenuOpen(false);
    },
    [pathname, router]
  );

  const handleHomeClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      if (pathname !== '/') {
        router.push('/');
        return;
      }

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    },
    [pathname, router]
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" onClick={handleHomeClick} className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">GK</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">GOLDENKICK</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link =>
              link.href === '/' ? (
                <a
                  key={link.href}
                  href="/"
                  onClick={handleHomeClick}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium cursor-pointer"
                >
                  {link.label}
                </a>
              ) : link.isAnchor ? (
                <a
                  key={link.href}
                  href={`/#${link.href}`}
                  onClick={e => handleSmoothScroll(e, link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium cursor-pointer"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:block">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300',
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navLinks.map(link =>
            link.href === '/' ? (
              <a
                key={link.href}
                href="/"
                onClick={handleHomeClick}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2 cursor-pointer"
              >
                {link.label}
              </a>
            ) : link.isAnchor ? (
              <a
                key={link.href}
                href={`/#${link.href}`}
                onClick={e => handleSmoothScroll(e, link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2 cursor-pointer"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Button asChild className="bg-primary hover:bg-primary/90 w-full">
            <Link href="/booking" onClick={() => setIsMenuOpen(false)}>
              Book Now
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
