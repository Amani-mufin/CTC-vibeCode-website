import { Button } from '@/components/ui/button';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


export function Footer() {
  return (
    <footer className="w-full bg-card border-t">
      <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground text-center sm:text-left">
         <Link href="/">
           <Image src="/logo.svg" alt="Calabar Tech Community Logo" width={32} height={32} className="h-8 w-auto" />
         </Link>
          <span>© {new Date().getFullYear()} Calabar Tech Community. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://twitter.com/tech_calabar" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://facebook.com/techCalabar" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/company/calabar-tech-community/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
