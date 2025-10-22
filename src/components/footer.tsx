import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Code } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Code className="h-6 w-6 text-primary hidden sm:block" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {currentYear} Ashwin Satheesh. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {SOCIAL_LINKS.map((social) => (
            <Button asChild key={social.name} variant="ghost" size="icon">
              <Link href={social.url} target="_blank" rel="noopener noreferrer">
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
