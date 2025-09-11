'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Mountain } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';
import { ModeToggle } from '@/components/mode-toggle';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#events', label: 'Events' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#team', label: 'Team' },
  { href: '/#contact', label: 'Contact' },
];

const pageLinks = [
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/projects', label: 'Projects' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
]

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Mountain className="h-6 w-6 text-primary" />
      <span className="font-headline text-lg font-semibold">Calabar Tech Community</span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const isOnePage = pathname === '/';

  const links = isOnePage ? navLinks : pageLinks.map(l => ({...l, href: l.href.startsWith('/') ? l.href : `/${l.href}`}));

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isOnePage && href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Correct for the sticky header height
        const headerOffset = 64; // h-16 = 4rem = 64px
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
      }
      setIsOpen(false);
    } else {
        setIsOpen(false);
    }
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                 onClick={(e) => handleLinkClick(e, href)}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === href ? 'text-primary font-semibold' : 'text-muted-foreground'
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
          <ModeToggle />
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col h-full">
                  <div className="border-b pb-4">
                    <Logo />
                  </div>
                  <nav className="flex flex-col gap-4 mt-8">
                    {links.map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={(e) => handleLinkClick(e, href)}
                        className={cn(
                          'text-lg font-medium transition-colors hover:text-primary',
                           pathname === href ? 'text-primary font-semibold' : 'text-muted-foreground'
                        )}
                      >
                        {label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
