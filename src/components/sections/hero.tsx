import Link from 'next/link';
import { SOCIAL_LINKS } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="hero" className="relative h-[calc(100vh-3.5rem)] min-h-[500px]">
      <div className="container flex h-full flex-col items-center justify-center text-center">
        <div className="max-w-4xl">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl lg:text-7xl">
            Ashwin Satheesh
          </h1>
          <h2 className="mt-3 font-headline text-2xl font-medium tracking-tight sm:text-4xl">
            Full-Stack Developer & DevOps Enthusiast
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground">
            Building robust applications and automating workflows. Passionate about creating seamless developer experiences and scalable systems.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
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
