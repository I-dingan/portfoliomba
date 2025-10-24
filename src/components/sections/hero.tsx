import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="hero" className="relative h-[calc(90vh-3.5rem)] min-h-[500px] sm:h-[calc(100vh-3.5rem)]">
      <div className="container flex h-full flex-col items-center justify-center text-center">
        <div className="max-w-4xl">
          <h1 className="font-headline text-5xl font-bold tracking-tight text-primary sm:text-6xl lg:text-7xl">
            Ashwin Satheesh
          </h1>
          <h2 className="mt-3 font-headline text-3xl font-medium tracking-tight sm:text-4xl">
            Technical Project Management & Analytics
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Transforming complex business challenges into scalable solutions. Passionate about AI-driven innovations and continuous improvement.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
          <div className="mt-12 flex justify-center gap-x-4">
            {SOCIAL_LINKS.map((social) => (
              <Button asChild key={social.name} variant="ghost" size="icon">
                <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <social.icon className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
