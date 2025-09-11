'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 375 375"
        className="h-8 w-8 text-primary"
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
        fill="currentColor"
      >
        <defs>
          <clipPath id="d34b17df3a">
            <path
              d="M 65 51.601562 L 333 51.601562 L 333 329 L 65 329 Z M 65 51.601562 "
              clipRule="nonzero"
            />
          </clipPath>
          <clipPath id="05dbbb852d">
            <path
              d="M 218.820312 239.347656 C 236.148438 239.347656 243.851562 253.789062 255.40625 265.34375 C 261.183594 271.117188 271.773438 271.117188 277.550781 265.34375 L 305.472656 237.421875 C 311.25 231.644531 311.25 221.054688 305.472656 215.277344 L 277.550781 187.355469 C 266.960938 176.765625 254.441406 170.023438 263.109375 163.285156 C 266.960938 160.398438 269.847656 158.472656 276.585938 158.472656 C 287.179688 158.472656 291.03125 167.136719 298.730469 173.875 C 302.582031 177.726562 308.359375 177.726562 312.210938 173.875 L 329.542969 156.546875 C 333.394531 152.695312 333.394531 146.917969 329.542969 143.066406 L 312.210938 125.734375 C 308.359375 121.882812 302.582031 121.882812 298.730469 125.734375 C 291.992188 132.476562 286.214844 142.105469 276.585938 142.105469 C 266.960938 142.105469 261.183594 132.476562 254.441406 125.734375 C 250.59375 121.882812 244.816406 121.882812 240.964844 125.734375 L 223.632812 143.066406 C 219.78125 146.917969 219.78125 152.695312 223.632812 156.546875 C 238.074219 170.988281 262.144531 179.652344 250.59375 193.132812 C 241.925781 203.722656 232.296875 215.277344 218.820312 215.277344 C 202.453125 215.277344 192.824219 198.910156 181.269531 187.355469 C 175.492188 181.578125 164.902344 181.578125 159.125 187.355469 L 131.203125 215.277344 C 125.425781 221.054688 125.425781 231.644531 131.203125 237.421875 L 154.3125 260.527344 L 159.125 265.34375 C 164.902344 271.117188 175.492188 271.117188 181.269531 265.34375 C 193.785156 252.824219 200.527344 239.347656 218.820312 239.347656 Z M 189.933594 130.550781 L 243.851562 184.46875 C 237.113281 193.132812 227.484375 203.722656 218.820312 203.722656 C 207.265625 203.722656 195.710938 186.390625 188.007812 178.691406 C 178.382812 169.0625 162.015625 169.0625 151.421875 178.691406 L 123.5 206.613281 C 113.875 216.238281 113.875 232.605469 123.5 243.199219 L 151.421875 271.117188 C 161.050781 280.746094 177.417969 280.746094 188.007812 271.117188 C 196.675781 262.453125 205.339844 248.011719 218.820312 248.011719 C 229.410156 248.011719 237.113281 257.640625 243.851562 266.304688 L 189.933594 320.222656 C 178.382812 331.777344 160.089844 331.777344 148.535156 320.222656 L 74.398438 246.085938 C 62.84375 234.53125 62.84375 216.238281 74.398438 204.6875 L 148.535156 130.550781 C 160.089844 118.996094 178.382812 118.996094 189.933594 130.550781 Z M 288.140625 73.746094 L 298.730469 84.335938 C 301.621094 87.222656 306.433594 87.222656 309.324219 84.335938 L 319.914062 73.746094 C 322.800781 70.855469 322.800781 66.042969 319.914062 63.152344 L 309.324219 52.5625 C 306.433594 49.675781 301.621094 49.675781 298.730469 52.5625 L 288.140625 63.152344 C 285.253906 66.042969 285.253906 70.855469 288.140625 73.746094 Z M 288.140625 73.746094 "
              clipRule="evenodd"
            />
          </clipPath>
        </defs>
        <g clipPath="url(#d34b17df3a)">
          <g clipPath="url(#05dbbb852d)">
            <path
              d="M 62.84375 51.601562 L 62.84375 329.851562 L 333.394531 329.851562 L 333.394531 51.601562 Z M 62.84375 51.601562 "
              fillRule="nonzero"
            />
          </g>
        </g>
      </svg>
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
