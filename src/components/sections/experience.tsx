import { Section, SectionHeader } from "@/components/section";
import { EXPERIENCE } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader 
        title="Work Experience"
        description="My professional journey and key contributions."
      />
      <div className="relative">
        {/* The timeline bar - hidden on mobile, shown on md and up */}
        <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-border md:block"></div>

        <div className="space-y-8 md:space-y-12">
          {EXPERIENCE.map((item, index) => (
            <div key={index} className="relative">
              {/* The timeline dot - hidden on mobile, shown on md and up */}
              <div className="absolute left-1/2 top-1 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:block"></div>
              
              {/* On md and up, use the alternating layout */}
              <div className={`hidden md:flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="font-headline text-lg">{item.role}</CardTitle>
                      <CardDescription>
                        <span className="font-semibold text-primary">{item.company}</span>
                        <span className="mx-2 text-muted-foreground">|</span>
                        <span>{item.duration}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* On mobile, use a simple vertical layout */}
              <div className="flex flex-col items-center md:hidden">
                <Card className="w-full transition-all duration-300">
                   <CardHeader>
                      <CardTitle className="font-headline text-lg">{item.role}</CardTitle>
                      <CardDescription>
                        <p className="font-semibold text-primary">{item.company}</p>
                        <p>{item.duration}</p>
                      </CardDescription>
                    </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
